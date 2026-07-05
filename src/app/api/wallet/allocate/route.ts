import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/auth';
import { postWalletAllocation } from '@/lib/accounting/wallet-gl';

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { branchId, amount, category, description } = body;

        // Validate required fields
        if (!branchId || !amount || !category) {
            return NextResponse.json(
                { error: 'Missing required fields: branchId, amount, category' },
                { status: 400 }
            );
        }

        const allocationAmount = parseFloat(amount);

        // Execute as a transaction to ensure atomicity
        const result = await prisma.$transaction(async (tx) => {
            // 1. Get and Lock User's Wallet
            const wallet = await tx.wallet.findUnique({
                where: { userId: (session as any).user.id }
            });

            if (!wallet) throw new Error('Corporate wallet not found for your account.');
            if (wallet.balance < allocationAmount) throw new Error('Insufficient balance in Corporate wallet.');

            // 2. Identify or Create Branch Wallet
            let branchWallet = await tx.branchWallet.findUnique({
                where: { branchId }
            });

            if (!branchWallet) {
                branchWallet = await tx.branchWallet.create({
                    data: {
                        branchId,
                        balance: 0,
                        currency: wallet.currency
                    }
                });
            }

            // 3. Deduct from Main Wallet
            const updatedMainWallet = await tx.wallet.update({
                where: { id: wallet.id },
                data: { balance: { decrement: allocationAmount } }
            });

            // 4. Record Main Wallet Transaction
            await tx.walletTransaction.create({
                data: {
                    walletId: wallet.id,
                    userId: (session as any).user.id,
                    type: 'DEDUCTION',
                    amount: -allocationAmount,
                    description: description || `Allocation to branch: ${branchId}`,
                    reference: `ALLOC-OUT-${Date.now()}`
                }
            });

            // 5. Increment Branch Wallet
            await tx.branchWallet.update({
                where: { id: branchWallet.id },
                data: { balance: { increment: allocationAmount } }
            });

            // 6. Record Branch Wallet Transaction
            const allocRef = `ALLOC-IN-${Date.now()}`;
            await tx.branchWalletTransaction.create({
                data: {
                    branchWalletId: branchWallet.id,
                    type: 'FUNDING',
                    amount: allocationAmount,
                    description: `Internal allocation from HQ for ${category}`,
                    reference: allocRef
                }
            });

            // 7. Post GL entry — Dr Branch Cash / Cr HQ Cash
            await postWalletAllocation(tx as any, {
                amount: allocationAmount,
                hqGlAccountId: (wallet as any).glAccountId,
                branchGlAccountId: (branchWallet as any).glAccountId,
                branchId,
                userId: (session as any).user.id,
                reference: allocRef,
            });

            return updatedMainWallet;
        });

        return NextResponse.json({
            success: true,
            balance: result.balance,
            message: `Successfully allocated KSh ${amount} to branch`
        });

    } catch (error: any) {
        console.error('Wallet allocation error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to allocate funds' },
            { status: 500 }
        );
    }
}

// GET endpoint to fetch wallet transactions
export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const wallet = await prisma.wallet.findUnique({
            where: { userId: session.user.id },
            include: {
                transactions: {
                    orderBy: { createdAt: 'desc' },
                    take: 50
                }
            }
        });

        if (!wallet) {
            return NextResponse.json({ error: 'Wallet not found' }, { status: 404 });
        }

        return NextResponse.json({
            balance: wallet.balance,
            currency: wallet.currency,
            transactions: wallet.transactions
        });

    } catch (error) {
        console.error('Wallet fetch error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch wallet data' },
            { status: 500 }
        );
    }
}

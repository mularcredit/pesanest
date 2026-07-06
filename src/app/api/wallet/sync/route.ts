import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { paystackService } from "@/lib/payments/paystack";

/**
 * GET  - Fetch live Paystack balance.
 * POST - Verify any pending (unconfirmed) wallet topups for this user and credit them.
 *        This is the manual recovery path when the automatic callback didn't fire.
 */
export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const paystackBalances = await paystackService.getBalance();
        const kesBalanceData = paystackBalances.find((b: any) => b.currency === 'KES');
        const realBalance = kesBalanceData ? kesBalanceData.balance / 100 : 0;

        return NextResponse.json({
            success: true,
            balance: realBalance,
            currency: 'KES',
        });

    } catch (error: any) {
        console.error('[Wallet Sync] Error:', error);
        return NextResponse.json({ error: error.message || 'Failed to fetch balance.' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const wallet = await prisma.wallet.findUnique({ where: { userId: session.user.id } });
        if (!wallet) return NextResponse.json({ error: 'Wallet not found' }, { status: 404 });

        // Find all pending topups that haven't been confirmed yet
        const pending = await prisma.walletTransaction.findMany({
            where: {
                walletId: wallet.id,
                type: 'DEPOSIT',
                description: { not: { contains: '[COMPLETED]' } },
                reference: { not: null },
            }
        });

        if (!pending.length) {
            return NextResponse.json({ credited: 0, message: 'No pending topups found.' });
        }

        let credited = 0;
        let totalCredited = 0;

        for (const tx of pending) {
            try {
                const verification = await paystackService.verifyTransaction(tx.reference!);
                if (verification.status !== 'success') continue;

                await prisma.$transaction([
                    prisma.wallet.update({
                        where: { id: wallet.id },
                        data: { balance: { increment: tx.amount } }
                    }),
                    prisma.walletTransaction.update({
                        where: { id: tx.id },
                        data: { description: 'Wallet Top Up [COMPLETED]' }
                    }),
                ]);

                credited++;
                totalCredited += tx.amount;
            } catch {
                // Skip individual failures — don't block other transactions
            }
        }

        return NextResponse.json({ credited, totalCredited });

    } catch (error: any) {
        console.error('[Wallet Sync POST] Error:', error);
        return NextResponse.json({ error: error.message || 'Sync failed.' }, { status: 500 });
    }
}

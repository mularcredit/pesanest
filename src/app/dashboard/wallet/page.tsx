import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { BiWallet } from "react-icons/bi";
import { WalletVerifier } from "@/components/dashboard/WalletVerifier";
import { Suspense } from "react";
import { paystackService } from "@/lib/payments/paystack";
import { WalletPageClient } from "./WalletPageClient";

export default async function WalletPage() {
    const session = await auth();
    if (!session?.user?.id) return redirect("/login");

    const isAdmin = (session.user as any).role === "SYSTEM_ADMIN";

    const [wallet, categories, branchesData] = await Promise.all([
        prisma.wallet.findUnique({
            where: { userId: session.user.id },
            include: {
                transactions: { orderBy: { createdAt: 'desc' }, take: 200 }
            }
        }),
        prisma.category.findMany({
            where: { isActive: true },
            select: { name: true }
        }),
        prisma.branch.findMany({
            where: { isActive: true },
            select: { id: true, name: true }
        })
    ]);

    let liveBalance = wallet?.balance ?? 0;
    let liveBalanceLive = false;
    try {
        const paystackBalances = await paystackService.getBalance();
        const targetCurrency = wallet?.currency || 'KES';
        const balanceData = paystackBalances.find((b: any) =>
            b.currency?.toUpperCase() === targetCurrency.toUpperCase()
        );
        if (balanceData) {
            liveBalance = balanceData.balance / 100;
            liveBalanceLive = true;
        }
    } catch { /* keep DB balance on error */ }

    if (!wallet) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
                <div className="w-12 h-12 rounded-[10px] bg-gray-50 flex items-center justify-center"
                    style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                    <BiWallet className="text-2xl text-gray-300" />
                </div>
                <div className="text-center">
                    <h2 className="text-[14px] font-[600] text-gray-900">No wallet assigned</h2>
                    <p className="text-[12.5px] text-gray-400 mt-0.5">No corporate wallet has been linked to your account.</p>
                </div>
            </div>
        );
    }

    // Running balances — walk desc (newest→oldest), balance after each tx
    let runningBal = liveBalance;
    const txLedger = wallet.transactions.map(tx => {
        const balAfter = runningBal;
        runningBal -= tx.amount;
        return {
            id: tx.id,
            createdAt: tx.createdAt.toISOString(),
            description: tx.description,
            type: tx.type,
            reference: tx.reference,
            amount: tx.amount,
            runningBalance: balAfter,
        };
    });

    let vRunning = wallet.balance;
    const txVirtual = wallet.transactions.map(tx => {
        const balAfter = vRunning;
        vRunning -= tx.amount;
        return {
            id: tx.id,
            createdAt: tx.createdAt.toISOString(),
            description: tx.description,
            type: tx.type,
            reference: tx.reference,
            amount: tx.amount,
            runningBalance: balAfter,
        };
    });

    return (
        <>
            <Suspense fallback={null}>
                <WalletVerifier />
            </Suspense>
            <WalletPageClient
                liveBalance={liveBalance}
                liveBalanceLive={liveBalanceLive}
                virtualBalance={wallet.balance}
                currency={wallet.currency}
                categories={categories.map(c => c.name)}
                branches={branchesData.map(b => ({ id: b.id, name: b.name }))}
                holderName={session.user.name || "Corporate Wallet"}
                isAdmin={isAdmin}
                txLedger={txLedger}
                txVirtual={txVirtual}
            />
        </>
    );
}

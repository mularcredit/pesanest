import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { paystackService } from "@/lib/payments/paystack";

/**
 * GET - Fetch the live Paystack balance without touching wallet.balance.
 * wallet.balance is the virtual/allocation ledger and must only change through
 * explicit top-up or allocation actions, never a passive sync.
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
            message: 'Live Paystack balance fetched.',
        });

    } catch (error: any) {
        console.error('[Wallet Sync] Error:', error);
        return NextResponse.json({
            error: error.message || 'Failed to fetch Paystack balance.'
        }, { status: 500 });
    }
}

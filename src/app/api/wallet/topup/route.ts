import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { paystackService } from "@/lib/payments/paystack";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { amount } = body;

        if (!amount || amount <= 0) {
            return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
        }

        const wallet = await prisma.wallet.findUnique({
            where: { userId: session.user.id }
        });

        if (!wallet) {
            return NextResponse.json({ error: "Wallet not found" }, { status: 404 });
        }

        const reference = `TOPUP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        // We create a pending transaction so that we have a record in our database
        // and can securely top up once returned.
        await prisma.walletTransaction.create({
            data: {
                walletId: wallet.id,
                userId: session.user.id,
                type: 'DEPOSIT', // Assuming 'DEPOSIT' is treated securely
                amount: amount, // Positive amount
                description: `Wallet Top Up initialized`,
                reference: reference
            }
        });

        const paystackTx = await paystackService.initializeTransaction(
            amount, 
            session.user.email || 'user@example.com', 
            reference
        );

        return NextResponse.json({ 
            authorization_url: paystackTx.authorization_url,
            reference: paystackTx.reference
        });

    } catch (error: any) {
        console.error("TopUp Initialization failed:", error);
        return NextResponse.json({ error: error.message || "Failed to initialize top up" }, { status: 500 });
    }
}

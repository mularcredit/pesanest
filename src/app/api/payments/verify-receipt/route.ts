import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { ReceiptVerificationService } from '@/lib/etims/receipt-verification-service';

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const {
            expenseId,
            receiptUrl,
            fiscalInvoiceNo,
            supplierPin,
            supplierName,
            invoiceDate,
            totalAmount,
            vatAmount,
        } = body;

        if (!expenseId || !fiscalInvoiceNo) {
            return NextResponse.json(
                { error: 'expenseId and fiscalInvoiceNo are required' },
                { status: 400 }
            );
        }

        const result = await ReceiptVerificationService.verify({
            expenseId,
            receiptUrl,
            fiscalInvoiceNo: String(fiscalInvoiceNo).trim(),
            supplierPin: supplierPin || undefined,
            supplierName: supplierName || undefined,
            invoiceDate: invoiceDate || undefined,
            totalAmount: totalAmount !== undefined ? parseFloat(totalAmount) : undefined,
            vatAmount: vatAmount !== undefined ? parseFloat(vatAmount) : undefined,
        });

        return NextResponse.json({ success: true, ...result });
    } catch (err: any) {
        console.error('[verify-receipt]', err);
        return NextResponse.json(
            { error: err.message || 'Verification failed' },
            { status: 500 }
        );
    }
}

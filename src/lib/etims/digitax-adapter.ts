/**
 * DigiTax Invoice Verification Adapter
 *
 * Verifies eTIMS/KRA fiscal invoices via DigiTax's Invoice Verification API.
 *
 * Required env vars for live mode:
 *   DIGITAX_BASE_URL       — e.g. https://api.digitaxafrica.com
 *   DIGITAX_BUSINESS_ID    — your business key from DigiTax
 *   DIGITAX_API_KEY        — your API secret from DigiTax
 *
 * Without DIGITAX_BASE_URL the adapter runs in stub mode, simulating
 * successful verification for any well-formed eTIMS number.
 */

const DIGITAX_ENABLED = !!process.env.DIGITAX_BASE_URL;
const DIGITAX_BASE_URL = process.env.DIGITAX_BASE_URL || '';
const DIGITAX_BUSINESS_ID = process.env.DIGITAX_BUSINESS_ID || '';
const DIGITAX_API_KEY = process.env.DIGITAX_API_KEY || '';

export interface DigiTaxVerifyInput {
    fiscalInvoiceNo: string;
    supplierPin?: string;
    supplierName?: string;
    invoiceDate?: string;
    totalAmount?: number;
    vatAmount?: number;
}

export type VerificationStatus = 'VERIFIED' | 'FAILED' | 'NEEDS_REVIEW';

export interface DigiTaxVerifyResult {
    verified: boolean;
    status: VerificationStatus;
    referenceId?: string;
    supplierName?: string;
    supplierPin?: string;
    invoiceDate?: string;
    totalAmount?: number;
    vatAmount?: number;
    failureReason?: string;
    raw?: any;
}

// KRA PIN format: letter + 9 digits + letter (e.g. A001234567X)
const KRA_PIN_RE = /^[A-Z]\d{9}[A-Z]$/i;

export class DigiTaxAdapter {
    static async verifyInvoice(input: DigiTaxVerifyInput): Promise<DigiTaxVerifyResult> {
        const invoiceNo = input.fiscalInvoiceNo?.trim();

        if (!invoiceNo) {
            return {
                verified: false,
                status: 'NEEDS_REVIEW',
                failureReason: 'Fiscal invoice number is required for verification.',
            };
        }

        if (!DIGITAX_ENABLED) {
            return DigiTaxAdapter._stubVerify(input, invoiceNo);
        }

        return DigiTaxAdapter._liveVerify(input, invoiceNo);
    }

    private static _stubVerify(input: DigiTaxVerifyInput, invoiceNo: string): DigiTaxVerifyResult {
        const looksValid = /^[A-Z0-9\-]{4,}/i.test(invoiceNo);

        if (!looksValid) {
            return {
                verified: false,
                status: 'NEEDS_REVIEW',
                failureReason: 'Stub mode — invoice number format looks invalid. Set DIGITAX_BASE_URL to enable live verification.',
            };
        }

        return {
            verified: true,
            status: 'VERIFIED',
            referenceId: `DTX-STUB-${Date.now()}`,
            supplierName: input.supplierName,
            supplierPin: input.supplierPin,
            invoiceDate: input.invoiceDate,
            totalAmount: input.totalAmount,
            vatAmount: input.vatAmount,
            failureReason: 'Stub mode — not verified against live DigiTax. Set DIGITAX_BASE_URL for real validation.',
        };
    }

    private static async _liveVerify(input: DigiTaxVerifyInput, invoiceNo: string): Promise<DigiTaxVerifyResult> {
        try {
            const payload: Record<string, any> = {
                businessKey: DIGITAX_BUSINESS_ID,
                invoiceNumber: invoiceNo,
            };
            if (input.supplierPin && KRA_PIN_RE.test(input.supplierPin)) payload.supplierPin = input.supplierPin;
            if (input.totalAmount !== undefined) payload.totalAmount = input.totalAmount;
            if (input.invoiceDate) payload.invoiceDate = input.invoiceDate;

            const res = await fetch(`${DIGITAX_BASE_URL}/v1/invoice/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DIGITAX_API_KEY}`,
                    'X-Business-Key': DIGITAX_BUSINESS_ID,
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                return {
                    verified: false,
                    status: 'FAILED',
                    failureReason: data.message || `DigiTax API error: HTTP ${res.status}`,
                    raw: data,
                };
            }

            if (data.verified || data.success) {
                return {
                    verified: true,
                    status: 'VERIFIED',
                    referenceId: data.referenceId || data.reference,
                    supplierName: data.supplierName || input.supplierName,
                    supplierPin: data.supplierPin || input.supplierPin,
                    invoiceDate: data.invoiceDate || input.invoiceDate,
                    totalAmount: data.totalAmount ?? input.totalAmount,
                    vatAmount: data.vatAmount ?? input.vatAmount,
                    raw: data,
                };
            }

            return {
                verified: false,
                status: 'FAILED',
                failureReason: data.message || data.reason || 'Invoice could not be verified by DigiTax.',
                raw: data,
            };
        } catch (err: any) {
            return {
                verified: false,
                status: 'FAILED',
                failureReason: err.message || 'Failed to connect to DigiTax verification service.',
            };
        }
    }
}

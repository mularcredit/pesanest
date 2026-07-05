"use client";

import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/ToastProvider";

export function WalletVerifier() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { showToast } = useToast();
    const reference = searchParams.get('reference');
    const trxref = searchParams.get('trxref');
    
    const verifying = useRef(false);

    useEffect(() => {
        const verifyTx = async () => {
            const ref = reference || trxref;
            if (!ref || verifying.current) return;
            
            verifying.current = true;
            try {
                // Clear the URL immediately to prevent double firing on StrictMode
                router.replace('/dashboard/wallet', { scroll: false });

                const res = await fetch('/api/wallet/topup/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ reference: ref })
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error);

                if (data.success) {
                    showToast(`Successfully deposited KSh ${data.amount.toLocaleString()} into your wallet!`, 'success');
                    router.refresh(); // Refresh the Server Component to update balance
                }
            } catch (err: any) {
                console.error("Verification error:", err);
                showToast(err.message || 'Payment verification failed', 'error');
            } finally {
                verifying.current = false;
            }
        };

        verifyTx();
    }, [reference, trxref, router, showToast]);

    return null; // Invisible strictly logical component
}

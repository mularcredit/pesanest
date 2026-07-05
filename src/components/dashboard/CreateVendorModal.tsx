'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { PiX, PiCheck, PiBuildings } from 'react-icons/pi';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { createVendor } from '@/app/actions/vendors';
import { useToast } from '@/components/ui/ToastProvider';
import { PhoneInput } from '@/components/ui/PhoneInput';

interface CreateVendorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const INPUT_CLASS = "w-full rounded-[6px] px-3 py-[10px] text-[13px] text-gray-900 placeholder:text-gray-300 outline-none focus:ring-1 focus:ring-[#6366F1] transition-colors bg-white";
const INPUT_STYLE: React.CSSProperties = { border: '1px solid rgba(0,0,0,0.09)' };
const LABEL_CLASS = "block text-[11.5px] font-[500] text-gray-400 mb-1.5";

const PAY_METHODS = [
    { value: 'MPESA_TILL',     label: 'M-Pesa Till',   img: '/pay/Mpesa-Logo.png' },
    { value: 'MPESA_PAYBILL',  label: 'M-Pesa Paybill',img: '/pay/Mpesa-Logo.png' },
    { value: 'BANK_TRANSFER',  label: 'Bank Transfer',  img: '/pay/accepted.png' },
    { value: 'AIRTEL_MONEY',   label: 'Airtel Money',   img: '/pay/Airtel-Logo.png' },
    { value: 'CASH',           label: 'Cash',           img: '/pay/money-stack.png' },
    { value: 'CHEQUE',         label: 'Cheque',         img: '/pay/cheque.png' },
];

function refLabel(method: string) {
    if (method === 'MPESA_TILL')    return 'M-Pesa Till number';
    if (method === 'MPESA_PAYBILL') return 'Paybill & account number';
    if (method === 'BANK_TRANSFER') return 'Bank account number';
    if (method === 'AIRTEL_MONEY')  return 'Airtel Money phone number';
    if (method === 'CHEQUE')        return 'Cheque / reference number';
    return '';
}
function refPlaceholder(method: string) {
    if (method === 'MPESA_TILL')    return 'e.g. 123456';
    if (method === 'MPESA_PAYBILL') return 'e.g. 247247 / account number';
    if (method === 'BANK_TRANSFER') return 'e.g. 01234567890000';
    if (method === 'AIRTEL_MONEY')  return 'e.g. +254 712 345 678';
    return 'Reference number';
}

export function CreateVendorModal({ isOpen, onClose }: CreateVendorModalProps) {
    const { showToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [payMethod, setPayMethod]   = useState('');
    const [payRef, setPayRef]         = useState('');

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        try {
            const result = await createVendor(null, formData);
            if (result.success) { showToast(result.message, 'success'); onClose(); }
            else showToast(result.message, 'error');
        } catch { showToast('Something went wrong', 'error'); }
        finally { setIsSubmitting(false); }
    }

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/30" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white w-full max-w-xl rounded-[12px] flex flex-col max-h-[90vh] overflow-hidden"
                style={{ border: '1px solid rgba(0,0,0,0.09)', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 shrink-0"
                    style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-[7px] bg-indigo-50 flex items-center justify-center shrink-0">
                            <PiBuildings className="text-[#6366F1] text-[15px]" />
                        </div>
                        <div>
                            <h3 className="text-[14px] font-[600] text-gray-900 leading-none">Add Vendor</h3>
                            <p className="text-[12px] text-gray-400 mt-0.5">Create a new supplier profile</p>
                        </div>
                    </div>
                    <button onClick={onClose}
                        className="p-1.5 rounded-[6px] text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
                        <PiX className="text-[16px]" />
                    </button>
                </div>

                {/* Scrollable form body */}
                <div className="overflow-y-auto flex-1">
                    <form id="create-vendor-form" action={handleSubmit} className="px-6 py-5 space-y-4">

                        <div>
                            <label className={LABEL_CLASS}>Business name <span className="text-rose-400">*</span></label>
                            <input name="name" required className={INPUT_CLASS} style={INPUT_STYLE} placeholder="e.g. Acme Corp" />
                        </div>

                        <div>
                            <label className={LABEL_CLASS}>Description</label>
                            <textarea name="description" rows={2}
                                className={cn(INPUT_CLASS, 'resize-none')} style={INPUT_STYLE}
                                placeholder="Brief summary of vendor services..." />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className={LABEL_CLASS}>Category <span className="text-rose-400">*</span></label>
                                <select name="category" required className={cn(INPUT_CLASS, 'cursor-pointer')} style={INPUT_STYLE}>
                                    <option value="">Select…</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Accommodation">Accommodation</option>
                                    <option value="Meals & Entertainment">Meals &amp; Entertainment</option>
                                    <option value="Logistics">Logistics</option>
                                    <option value="Communication">Communication</option>
                                    <option value="Services">Services</option>
                                    <option value="Software">Software</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className={LABEL_CLASS}>Currency</label>
                                <select name="currency" className={cn(INPUT_CLASS, 'cursor-pointer')} style={INPUT_STYLE}>
                                    <option value="KES">KES</option>
                                    <option value="USD">USD</option>
                                    <option value="SSP">SSP</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className={LABEL_CLASS}>Email</label>
                                <input name="email" type="email" className={INPUT_CLASS} style={INPUT_STYLE} placeholder="contact@vendor.com" />
                            </div>
                            <div>
                                <label className={LABEL_CLASS}>Phone</label>
                                <PhoneInput name="phone" placeholder="+254…" />
                            </div>
                        </div>

                        <div>
                            <label className={LABEL_CLASS}>Website</label>
                            <input name="website" type="url" className={INPUT_CLASS} style={INPUT_STYLE} placeholder="https://…" />
                        </div>

                        <div>
                            <label className={LABEL_CLASS}>Payment terms</label>
                            <select name="paymentTerms" className={cn(INPUT_CLASS, 'cursor-pointer')} style={INPUT_STYLE}>
                                <option value="">Select…</option>
                                <option value="Due on Receipt">Due on Receipt</option>
                                <option value="Net 7">Net 7</option>
                                <option value="Net 15">Net 15</option>
                                <option value="Net 30">Net 30</option>
                                <option value="Net 45">Net 45</option>
                                <option value="Net 60">Net 60</option>
                            </select>
                        </div>

                        {/* Payment details section */}
                        <div className="pt-4 space-y-4" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                            <p className="text-[11px] font-[600] uppercase tracking-[0.07em] text-gray-400">
                                Payment details
                            </p>
                            <input type="hidden" name="preferredPaymentMethod" value={payMethod} />
                            <div className="grid grid-cols-3 gap-2">
                                {PAY_METHODS.map(opt => {
                                    const active = payMethod === opt.value;
                                    return (
                                        <button key={opt.value} type="button"
                                            onClick={() => { setPayMethod(opt.value); setPayRef(''); }}
                                            className={cn(
                                                'flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-[6px] transition-colors text-center',
                                                active ? 'bg-indigo-50' : 'bg-white hover:bg-gray-50'
                                            )}
                                            style={{ border: active ? '1px solid #6366F1' : '1px solid rgba(0,0,0,0.09)' }}>
                                            <div className="w-7 h-7 flex items-center justify-center">
                                                <Image src={opt.img} alt={opt.label} width={28} height={28} className="object-contain" />
                                            </div>
                                            <span className={cn('text-[10px] font-[500] leading-tight',
                                                active ? 'text-[#6366F1]' : 'text-gray-500'
                                            )}>{opt.label}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {payMethod && payMethod !== 'CASH' && (
                                <div>
                                    <label className={LABEL_CLASS}>{refLabel(payMethod)}</label>
                                    <input name="bankAccount" type="text" value={payRef}
                                        onChange={e => setPayRef(e.target.value)}
                                        className={cn(INPUT_CLASS, 'font-mono tracking-wide')}
                                        style={INPUT_STYLE}
                                        placeholder={refPlaceholder(payMethod)} />
                                </div>
                            )}

                            {(payMethod === 'BANK_TRANSFER' || payMethod === 'CHEQUE') && (
                                <div>
                                    <label className={LABEL_CLASS}>Bank name <span className="text-gray-300">(optional)</span></label>
                                    <input name="bankName" className={INPUT_CLASS} style={INPUT_STYLE} placeholder="e.g. Equity Bank" />
                                </div>
                            )}
                        </div>

                        <div className="h-2" />
                    </form>
                </div>

                {/* Footer — outside the scroll area */}
                <div className="flex items-center justify-end gap-2.5 px-6 py-4 shrink-0"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                    <button type="button" onClick={onClose}
                        className="px-4 py-2 rounded-[6px] text-[12.5px] font-[500] text-gray-500 hover:bg-gray-50 transition-colors"
                        style={{ border: '1px solid rgba(0,0,0,0.09)' }}>
                        Cancel
                    </button>
                    <button type="submit" form="create-vendor-form" disabled={isSubmitting}
                        className="flex items-center gap-2 px-5 py-2 rounded-[6px] bg-[#6366F1] hover:bg-indigo-600 text-white text-[12.5px] font-[500] transition-colors disabled:opacity-60">
                        <PiCheck className="text-[14px]" />
                        {isSubmitting ? 'Saving…' : 'Save Vendor'}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}

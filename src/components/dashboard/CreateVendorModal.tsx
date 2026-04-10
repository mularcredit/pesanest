'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { PiX, PiCheck, PiBuilding, PiCheckCircle } from 'react-icons/pi'
import Image from 'next/image'
import { createVendor } from '@/app/actions/vendors'
import { useToast } from '@/components/ui/ToastProvider'
import { PhoneInput } from '@/components/ui/PhoneInput'

interface CreateVendorModalProps {
    isOpen: boolean
    onClose: () => void
}

export function CreateVendorModal({ isOpen, onClose }: CreateVendorModalProps) {
    const { showToast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [vendorPayMethod, setVendorPayMethod] = useState('')
    const [vendorPayRef, setVendorPayRef] = useState('')

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)
        try {
            const result = await createVendor(null, formData)
            if (result.success) {
                showToast(result.message, 'success')
                onClose()
            } else {
                showToast(result.message, 'error')
            }
        } catch (error) {
            showToast('Something went wrong', 'error')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) return null

    return createPortal(
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-white/40 backdrop-blur-xl"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white border border-gray-200 w-full max-w-xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-geist"
                >
                    <div className="h-[72px] px-8 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 rounded-lg bg-[#F6F6F6] flex items-center justify-center overflow-hidden">
                                <img
                                    src="/online-shopping.png"
                                    alt="Vendor"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900">Add Vendor</h3>
                                <p className="text-gray-500 text-xs mt-0.5 font-medium">Create a new supplier profile</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-all"
                        >
                            <PiX className="text-xl" />
                        </button>
                    </div>

                    <form action={handleSubmit} className="flex-1 overflow-y-auto bg-[#f8f9fa] p-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">Business name *</label>
                                <input name="name" required className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all" placeholder="e.g. Acme Corp" />
                            </div>

                            <div>
                                <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">High-level description</label>
                                <textarea
                                    name="description"
                                    rows={2}
                                    className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all resize-none"
                                    placeholder="Brief summary of vendor services..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">Category *</label>
                                    <select name="category" required className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all">
                                        <option value="">Select...</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Accommodation">Accommodation</option>
                                        <option value="Meals & Entertainment">Meals & Entertainment</option>
                                        <option value="Logistics">Logistics</option>
                                        <option value="Communication">Communication</option>
                                        <option value="Services">Services</option>
                                        <option value="Software">Software</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">Currency</label>
                                    <select name="currency" className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all">
                                        <option value="USD">USD</option>
                                        <option value="KES">KES</option>
                                        <option value="SSP">SSP</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">Email</label>
                                    <input name="email" type="email" className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all" placeholder="contact@vendor.com" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">Phone</label>
                                    <PhoneInput name="phone" placeholder="+254..." />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">Website</label>
                                <input name="website" type="url" className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all" placeholder="https://..." />
                            </div>

                            <div>
                                <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">Payment terms</label>
                                <select name="paymentTerms" className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all">
                                    <option value="">Select...</option>
                                    <option value="Due on Receipt">Due on Receipt</option>
                                    <option value="Net 7">Net 7</option>
                                    <option value="Net 15">Net 15</option>
                                    <option value="Net 30">Net 30</option>
                                    <option value="Net 45">Net 45</option>
                                    <option value="Net 60">Net 60</option>
                                </select>
                            </div>

                            {/* Payment details */}
                            <div className="border-t border-gray-100 pt-4">
                                <p className="text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-3">Payment details (auto-fill on requisitions)</p>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-2">Preferred payment method</label>
                                        {/* Hidden input so formData picks up the selected value */}
                                        <input type="hidden" name="preferredPaymentMethod" value={vendorPayMethod} />
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { value: 'MPESA_TILL', label: 'M-Pesa Till', img: '/pay/Mpesa-Logo.png' },
                                                { value: 'MPESA_PAYBILL', label: 'M-Pesa Paybill', img: '/pay/Mpesa-Logo.png' },
                                                { value: 'BANK_TRANSFER', label: 'Bank Transfer', img: '/pay/accepted.png' },
                                                { value: 'AIRTEL_MONEY', label: 'Airtel Money', img: '/pay/Airtel-Logo.png' },
                                                { value: 'CASH', label: 'Cash', img: '/pay/money-stack.png' },
                                                { value: 'CHEQUE', label: 'Cheque', img: '/pay/cheque.png' },
                                            ].map(opt => (
                                                <button
                                                    key={opt.value}
                                                    type="button"
                                                    onClick={() => { setVendorPayMethod(opt.value); setVendorPayRef(''); }}
                                                    className={`relative flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl border-2 transition-all ${
                                                        vendorPayMethod === opt.value
                                                            ? 'border-[#29258D] bg-[#29258D]/5 shadow-sm'
                                                            : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {vendorPayMethod === opt.value && (
                                                        <div className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-[#29258D] flex items-center justify-center">
                                                            <PiCheckCircle className="text-white text-[8px]" />
                                                        </div>
                                                    )}
                                                    <div className="w-7 h-7 flex items-center justify-center">
                                                        <Image src={opt.img} alt={opt.label} width={28} height={28} className="object-contain w-full h-full" />
                                                    </div>
                                                    <span className={`text-[9px] font-bold text-center leading-tight ${
                                                        vendorPayMethod === opt.value ? 'text-[#29258D]' : 'text-gray-500'
                                                    }`}>{opt.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {vendorPayMethod && vendorPayMethod !== 'CASH' && (
                                        <div>
                                            <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">
                                                {vendorPayMethod === 'MPESA_TILL' && 'M-Pesa Till number'}
                                                {vendorPayMethod === 'MPESA_PAYBILL' && 'Paybill number & account number'}
                                                {vendorPayMethod === 'BANK_TRANSFER' && 'Bank account number'}
                                                {vendorPayMethod === 'AIRTEL_MONEY' && 'Airtel Money phone number'}
                                                {vendorPayMethod === 'CHEQUE' && 'Cheque / reference number'}
                                            </label>
                                            <input
                                                name="bankAccount"
                                                type="text"
                                                value={vendorPayRef}
                                                onChange={(e) => setVendorPayRef(e.target.value)}
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all font-mono tracking-wide"
                                                placeholder={
                                                    vendorPayMethod === 'MPESA_TILL' ? 'e.g. 123456' :
                                                    vendorPayMethod === 'MPESA_PAYBILL' ? 'e.g. 247247 / account number' :
                                                    vendorPayMethod === 'BANK_TRANSFER' ? 'e.g. 01234567890000' :
                                                    vendorPayMethod === 'AIRTEL_MONEY' ? 'e.g. +254 712 345 678' :
                                                    'Reference number'
                                                }
                                            />
                                        </div>
                                    )}

                                    {(vendorPayMethod === 'BANK_TRANSFER' || vendorPayMethod === 'CHEQUE') && (
                                        <div>
                                            <label className="block text-[10px] font-normal text-gray-400 tracking-widest pl-1 mb-1.5">Bank name (optional)</label>
                                            <input name="bankName" className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-4 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all" placeholder="e.g. Equity Bank" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end gap-3 border-t border-gray-100/50 mt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2.5 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2.5 rounded-lg bg-[#29258D] hover:bg-[#29258D]/90 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-[#29258D]/20"
                            >
                                {isSubmitting ? 'Saving...' : (
                                    <>
                                        <PiCheck className="text-lg" />
                                        Save Vendor
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>,
        document.body
    )
}

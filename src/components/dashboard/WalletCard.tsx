"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/ToastProvider";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
    PiPlus,
    PiX,
    PiCheck,
    PiArrowsLeftRight,
    PiWifiHigh,
    PiArrowUpRight,
    PiArrowDownLeft,
    PiWallet
} from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { UnifiedExpenseModal } from "@/components/expenses/UnifiedExpenseModal";
import { Select } from "@/components/ui/Select";

interface WalletCardProps {
    balance: number;
    currency?: string;
    categories: string[];
    branches: string[];
    isStripe?: boolean;
    holderName?: string;
}

export function WalletCard({ balance, currency = "USD", categories, branches, isStripe = false, holderName = "Card Holder" }: WalletCardProps) {
    const [isAllocateOpen, setIsAllocateOpen] = useState(false);
    const [isSubmitOpen, setIsSubmitOpen] = useState(false);

    // Generate consistent card details based on holder name
    const getCardDetails = () => {
        let hash = 0;
        for (let i = 0; i < holderName.length; i++) {
            hash = holderName.charCodeAt(i) + ((hash << 5) - hash);
        }
        const last4 = Math.abs(hash).toString().slice(0, 4).padEnd(4, '0');
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 3);
        const month = (expiryDate.getMonth() + 1).toString().padStart(2, '0');
        const year = expiryDate.getFullYear().toString().slice(-2);
        return { last4, expiry: `${month}/${year}` };
    };

    const { last4, expiry } = getCardDetails();

    return (
        <>
            <div className="w-full flex-col flex space-y-4">
                {/* ── DARK GRADIENT CARD ── */}
                <div className="relative w-full rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-0.5 shadow-lg">
                    
                    {/* Base: Dark grey gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-neutral-950" />

                    {/* Texture overlay — SVG noise grain */}
                    <div
                        className="absolute inset-0 opacity-[0.08] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                            backgroundSize: '180px 180px',
                        }}
                    />

                    {/* Pink/rose ambient glow — bottom left */}
                    <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-pink-500/25 rounded-full blur-[60px] pointer-events-none" />

                    {/* Secondary pink glint — top right */}
                    <div className="absolute -top-6 right-4 w-32 h-32 bg-rose-400/15 rounded-full blur-[50px] pointer-events-none" />

                    {/* Hover sheen sweep */}
                    <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[1400ms] pointer-events-none z-20" />

                    {/* Card body - grid split into left and right */}
                    <div className="relative grid grid-cols-[1fr_auto] gap-0 p-6 min-h-[195px] z-10">
                        
                        {/* LEFT PANEL — Logo, Chip, Name */}
                        <div className="flex flex-col justify-between">
                            {/* Logo — top */}
                            <div className="h-5">
                                <Image
                                    src={
                                        process.env.NEXT_PUBLIC_APP_NAME === "Pesanest"
                                            ? "/pesanest/pesanest-light-new.png"
                                            : (process.env.NEXT_PUBLIC_LOGO_URL || "/capitalpay.png")
                                    }
                                    alt="Brand Logo"
                                    width={100}
                                    height={20}
                                    className="h-full w-auto object-contain brightness-0 invert opacity-80"
                                />
                            </div>

                            {/* EMV Chip — middle */}
                            <div className="my-3">
                                <Image
                                    src="/EMV CHIP.png"
                                    alt="EMV Chip"
                                    width={44}
                                    height={34}
                                    className="object-contain"
                                />
                            </div>

                            {/* Cardholder — bottom */}
                            <div>
                                <p className="text-[11px] font-mono tracking-[0.15em] font-semibold text-white/90 uppercase truncate max-w-[160px]">
                                    {holderName}
                                </p>
                                <p className="text-[8px] uppercase tracking-widest text-white/40 font-semibold mt-0.5">
                                    Authorized Signatory
                                </p>
                            </div>
                        </div>

                        {/* RIGHT PANEL — Contactless, Balance, Card details */}
                        <div className="flex flex-col items-end justify-between pl-4">
                            {/* Contactless — top */}
                            <PiWifiHigh className="text-lg text-white/40 rotate-90" />

                            {/* Balance — middle */}
                            <div className="text-right">
                                <p className="text-[9px] font-bold text-pink-300/70 uppercase tracking-[0.18em] mb-1">Balance</p>
                                <p className="text-xl font-bold text-white font-mono tracking-tight leading-none whitespace-nowrap drop-shadow-sm">
                                    <span className="text-[11px] font-normal text-white/40 mr-1">{currency}</span>
                                    {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </p>
                            </div>

                            {/* Card number + expiry — bottom */}
                            <div className="text-right">
                                <p className="text-[11px] font-mono tracking-[0.15em] font-semibold text-white/80 whitespace-nowrap">
                                    •••• {last4}
                                </p>
                                <div className="flex items-center justify-end gap-1.5 mt-0.5">
                                    <p className="text-[7px] uppercase tracking-widest text-white/35 font-semibold leading-tight text-right">
                                        Valid<br />Thru
                                    </p>
                                    <p className="text-[11px] font-mono font-semibold text-white/80">{expiry}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── QUICK ACTIONS BELOW CARD ── */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setIsSubmitOpen(true)}
                        className="flex items-center justify-center gap-2 py-2.5 rounded-md text-white text-xs font-semibold transition-all bg-[#29258D] hover:bg-[#29258D]/90 shadow-sm"
                    >
                        <PiPlus className="text-base" />
                        Add Expense
                    </button>
                    <button
                        onClick={() => setIsAllocateOpen(true)}
                        className="flex items-center justify-center gap-2 py-2.5 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all shadow-sm"
                    >
                        <PiArrowsLeftRight className="text-base" />
                        Allocate
                    </button>
                </div>
            </div>

            {/* Allocate Funds Modal */}
            {isAllocateOpen && (
                <AllocateModal
                    onClose={() => setIsAllocateOpen(false)}
                    branches={branches}
                    categories={categories}
                />
            )}

            {/* Unified Expense Modal */}
            <UnifiedExpenseModal
                isOpen={isSubmitOpen}
                onClose={() => setIsSubmitOpen(false)}
                mode="quick"
            />
        </>
    );
}

// ── ALLOCATE MODAL (unchanged logic, refreshed UI) ──

function AllocateModal({ onClose, branches, categories }: { onClose: () => void, branches: string[], categories: string[] }) {
    const { showToast } = useToast();
    const [selectedBranch, setSelectedBranch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleAllocate = async () => {
        if (!selectedBranch || !amount || !selectedCategory) {
            setError("Please fill in all required fields");
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            const response = await fetch('/api/wallet/allocate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    branch: selectedBranch,
                    amount: parseFloat(amount),
                    category: selectedCategory,
                    description: description || `Allocated to ${selectedBranch} for ${selectedCategory}`
                })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Failed to allocate funds');
            showToast(`Successfully allocated $${amount} to ${selectedBranch}`, 'success');
            setTimeout(() => window.location.reload(), 1000);
        } catch (err: any) {
            setError(err.message || 'Failed to allocate funds');
        } finally {
            setIsSubmitting(false);
        }
    };

    const modalContent = (
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
                    className="relative bg-white border border-gray-200 w-full max-w-xl rounded-xl overflow-hidden max-h-[90vh] flex flex-col"
                >
                    <div className="h-[88px] px-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-green-100 to-white shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="shrink-0 w-16 h-16">
                                <img src="/cards/atm-card.png" alt="Allocate Funds" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900">Allocate Funds</h3>
                                <p className="text-gray-500 text-xs mt-1 font-medium">Distribute corporate funds to branches</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2.5 rounded-xl hover:bg-white/50 text-gray-500 hover:text-gray-900 transition-all">
                            <PiX className="text-xl" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto bg-white p-8 space-y-6">
                        {error && (
                            <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-600 text-xs font-bold flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                {error}
                            </div>
                        )}

                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">Target Branch <span className="text-rose-500">*</span></label>
                            <Select
                                value={selectedBranch}
                                onChange={(val) => setSelectedBranch(val)}
                                options={branches.map(branch => ({ value: branch, label: branch }))}
                                placeholder="Select target branch"
                                searchable={true}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Category <span className="text-rose-500">*</span></label>
                                <Select
                                    value={selectedCategory}
                                    onChange={(val) => setSelectedCategory(val)}
                                    options={categories.map(cat => ({ value: cat, label: cat }))}
                                    placeholder="Select category"
                                    searchable={true}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Amount <span className="text-rose-500">*</span></label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg pl-8 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all font-mono"
                                        placeholder="0.00"
                                        name="allocateAmtNew"
                                        id="allocateAmtNew"
                                        autoComplete="off"
                                        data-form-type="other"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">Context & Reasoning (Optional)</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={2}
                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all shadow-none resize-none placeholder:text-gray-300 min-h-[80px]"
                                placeholder="Allocation reasoning..."
                                name="allocateDescNew"
                                id="allocateDescNew"
                                autoComplete="off"
                                data-form-type="other"
                            />
                        </div>
                    </div>

                    <div className="h-[88px] px-8 bg-white border-t border-gray-100 flex items-center justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2.5 rounded-md text-xs font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-none"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleAllocate}
                            disabled={isSubmitting || !selectedBranch || !amount || !selectedCategory}
                            className="px-6 py-2.5 rounded-md text-xs font-bold text-white bg-[#29258D] hover:bg-[#29258D]/90 transition-all flex items-center gap-2 disabled:opacity-50 shadow-none"
                        >
                            {isSubmitting ? "Processing..." : (
                                <>
                                    <PiCheck className="text-sm" />
                                    Confirm Allocation
                                </>
                            )}
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}

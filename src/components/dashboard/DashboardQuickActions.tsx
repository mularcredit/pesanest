
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    PiBank,
    PiHandCoins,
    PiCheckCircle,
    PiUploadSimple,
    PiReceipt
} from "react-icons/pi";
import { QuickInvoiceModal } from "./QuickInvoiceModal";
import { UnifiedExpenseModal } from "../expenses/UnifiedExpenseModal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function DashboardQuickActions() {
    const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
    const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 uppercase tracking-widest text-[10px] font-bold text-slate-500">
                    Quick Actions
                </div>
                <div className="divide-y divide-slate-100">
                    {/* Upload Invoice - NEW ACTION */}
                    <button
                        onClick={() => setIsInvoiceModalOpen(true)}
                        className="w-full text-left flex items-center gap-4 p-4 bg-transparent hover:bg-slate-50 transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                            <PiUploadSimple className="text-base group-hover:text-slate-900 transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-900 mb-0.5">Upload Invoice</p>
                            <p className="text-[10px] text-slate-500 font-medium">Quick vendor file upload</p>
                        </div>
                    </button>

                    <button
                        onClick={() => setIsExpenseModalOpen(true)}
                        className="w-full text-left flex items-center gap-4 p-4 bg-transparent hover:bg-slate-50 transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                            <PiBank className="text-base group-hover:text-emerald-700 transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-900 mb-0.5">Submit Expense</p>
                            <p className="text-[10px] text-slate-500 font-medium">Quick receipt upload</p>
                        </div>
                    </button>

                    <Link href="/dashboard/requisitions/new" className="flex items-center gap-4 p-4 bg-transparent hover:bg-slate-50 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                            <PiHandCoins className="text-base group-hover:text-indigo-700 transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-900 mb-0.5">Request Advance</p>
                            <p className="text-[10px] text-slate-500 font-medium">Pre-approval request</p>
                        </div>
                    </Link>

                    <Link href="/dashboard/approvals" className="flex items-center gap-4 p-4 bg-transparent hover:bg-slate-50 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                            <PiCheckCircle className="text-base group-hover:text-slate-900 transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-900 mb-0.5">Pending Approvals</p>
                            <p className="text-[10px] text-slate-500 font-medium">Manage team requests</p>
                        </div>
                    </Link>
                </div>
            </div>

            <QuickInvoiceModal
                isOpen={isInvoiceModalOpen}
                onClose={() => setIsInvoiceModalOpen(false)}
            />

            <UnifiedExpenseModal
                isOpen={isExpenseModalOpen}
                onClose={() => setIsExpenseModalOpen(false)}
                mode="quick"
            />
        </>
    );
}

"use client";


import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/ToastProvider";
import {
    PiHandCoins,
    PiCheckCircle,
    PiReceipt,
    PiUser,
    PiBank,
    PiClock,
    PiEye,
    PiArrowRight,
    PiX,
    PiMoney,
    PiTrendUp,
    PiWarningCircle,
    PiFileText,
    PiBuildings,
    PiInfo,
    PiLightbulb,
    PiCaretLeft,
    PiCaretRight,
    PiFunnel,
    PiGlobe,
    PiWallet,
    PiListBullets,
    PiGridFour,
    PiTag,
    PiStackSimple
} from "react-icons/pi";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

// Types
interface UserBasic {
    name: string | null;
    email: string | null;
    department?: string | null;
    bankAccount?: string | null;
}

interface Expense {
    id: string;
    title: string;
    amount: number;
    category: string;
    merchant: string | null;
    receiptUrl: string | null;
    updatedAt: Date;
    user: UserBasic;
}

interface Invoice {
    id: string;
    invoiceNumber: string;
    vendor: { name: string };
    amount: number;
    dueDate: Date;
    description: string | null;
    createdBy: UserBasic;
}

interface Requisition {
    id: string;
    title: string;
    amount: number;
    category: string;
    updatedAt: Date;
    user: UserBasic;
}

interface Budget {
    id: string;
    month: number;
    year: number;
    totalAmount: number;
    branch: string;
    department: string;
    user: UserBasic;
}

interface PaymentBatch {
    id: string;
    amount: number;
    currency: string;
    status: string;
    method: string;
    notes: string | null;
    createdAt: Date;
    maker: UserBasic;
    _count?: {
        invoices: number;
        expenses: number;
        requisitions?: number;
        monthlyBudgets?: number;
    };
}

interface PaymentQueueProps {
    expenses: Expense[];
    invoices: Invoice[];
    requisitions?: Requisition[];
    budgets?: Budget[];
    pendingPayments: PaymentBatch[];
    authorizedPayments?: PaymentBatch[];
    paidPayments?: PaymentBatch[];
    history: any[];
    userRole: string;
    stripeStatus?: string;
    isSystemAdmin?: boolean;
}

export function PaymentQueue({
    expenses = [],
    invoices = [],
    requisitions = [],
    budgets = [],
    pendingPayments = [],
    authorizedPayments = [],
    paidPayments = [],
    history = [],
    userRole,
    stripeStatus = 'NOT_CONNECTED',
    isSystemAdmin = false
}: PaymentQueueProps) {
    const { showToast } = useToast();
    const router = useRouter();

    const getDefaultTab = () => {
        const isFinance = ['FINANCE_TEAM', 'FINANCE_APPROVER', 'SYSTEM_ADMIN'].includes(userRole);
        const canApprove = ['FINANCE_APPROVER', 'MANAGER', 'SYSTEM_ADMIN'].includes(userRole);

        // Follow the natural workflow order so users always land on the most urgent/earliest stage
        if (pendingPayments.length > 0 && canApprove) return 'approvals';
        if (authorizedPayments.length > 0 && isFinance) return 'disbursements';
        if (expenses.length > 0 || invoices.length > 0 || requisitions.length > 0 || budgets.length > 0) return 'payables';
        if (paidPayments.length > 0 && isFinance) return 'closing';
        return 'history';
    }

    const [activeTab, setActiveTab] = useState<'payables' | 'approvals' | 'disbursements' | 'closing' | 'history'>(getDefaultTab());
    const [selectedExpenses, setSelectedExpenses] = useState<Set<string>>(new Set());
    const [selectedInvoices, setSelectedInvoices] = useState<Set<string>>(new Set());
    const [selectedRequisitions, setSelectedRequisitions] = useState<Set<string>>(new Set());
    const [selectedBudgets, setSelectedBudgets] = useState<Set<string>>(new Set());
    const [isProcessing, setIsProcessing] = useState(false);
    const [showBypassModal, setShowBypassModal] = useState(false);
    const [showHelp, setShowHelp] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState<'VIRTUAL' | 'WALLET'>('VIRTUAL');
    const [mounted, setMounted] = useState(false);
    // Default to list view for compact readability
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    useEffect(() => {
        setMounted(true);
    }, []);
    const [confirmationModal, setConfirmationModal] = useState<{
        isOpen: boolean;
        paymentId: string;
        action: 'AUTHORIZE' | 'REJECT' | 'DISBURSE' | 'CLOSE';
        paymentMethod?: 'VIRTUAL' | 'WALLET';
    } | null>(null);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Show 7 items per page for a cleaner look

    // Calculate pagination
    const totalPages = Math.ceil(history.length / itemsPerPage);
    const currentHistory = history.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const toggleExpense = (id: string) => {
        const newSet = new Set(selectedExpenses);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setSelectedExpenses(newSet);
    };

    const toggleInvoice = (id: string) => {
        const newSet = new Set(selectedInvoices);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setSelectedInvoices(newSet);
    };

    const toggleRequisition = (id: string) => {
        const newSet = new Set(selectedRequisitions);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setSelectedRequisitions(newSet);
    };

    const toggleBudget = (id: string) => {
        const newSet = new Set(selectedBudgets);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setSelectedBudgets(newSet);
    };

    const totalSelectedAmount =
        expenses.filter(e => selectedExpenses.has(e.id)).reduce((sum, e) => sum + e.amount, 0) +
        invoices.filter(i => selectedInvoices.has(i.id)).reduce((sum, i) => sum + i.amount, 0) +
        requisitions.filter(r => selectedRequisitions.has(r.id)).reduce((sum, r) => sum + r.amount, 0) +
        budgets.filter(b => selectedBudgets.has(b.id)).reduce((sum, b) => sum + b.totalAmount, 0);

    const handleCreateBatch = async (bypassed: boolean = false) => {
        if (selectedExpenses.size === 0 && selectedInvoices.size === 0 && selectedRequisitions.size === 0 && selectedBudgets.size === 0) return;

        setIsProcessing(true);
        try {
            const promises: Promise<any>[] = [];

            const addRequests = (idSet: Set<string>, idKey: string) => {
                for (const id of Array.from(idSet)) {
                    promises.push(
                        fetch('/api/payments', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                expenseIds: idKey === 'expenseIds' ? [id] : [],
                                invoiceIds: idKey === 'invoiceIds' ? [id] : [],
                                requisitionIds: idKey === 'requisitionIds' ? [id] : [],
                                budgetIds: idKey === 'budgetIds' ? [id] : [],
                                method: 'BANK_TRANSFER',
                                notes: `Payment for item`,
                                skipAuthorization: bypassed
                            })
                        }).then(async (res) => {
                            const data = await res.json();
                            if (!res.ok) throw new Error(data.error || 'Failed to create payment');
                            return data;
                        })
                    );
                }
            };

            addRequests(selectedExpenses, 'expenseIds');
            addRequests(selectedInvoices, 'invoiceIds');
            addRequests(selectedRequisitions, 'requisitionIds');
            addRequests(selectedBudgets, 'budgetIds');

            await Promise.all(promises);

            showToast(bypassed ? 'Batch routed directly to Remittance.' : 'Payments created! Awaiting authorization.', 'success');
            setSelectedExpenses(new Set());
            setSelectedInvoices(new Set());
            setSelectedRequisitions(new Set());
            setSelectedBudgets(new Set());
            router.refresh();
            setActiveTab(bypassed ? 'disbursements' : 'approvals');
            setShowBypassModal(false);
        } catch (error: any) {
            showToast(error.message || 'Error occurred while creating payments', 'error');
        } finally {
            setIsProcessing(false);
        }
    };

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleAuthorization = (paymentId: string, action: 'AUTHORIZE' | 'REJECT' | 'DISBURSE' | 'CLOSE') => {
        setConfirmationModal({ isOpen: true, paymentId, action, paymentMethod: paymentMethod });
        setSelectedFile(null); // Reset file selection
    };

    const proceedAuthorization = async () => {
        if (!confirmationModal) return;
        const { paymentId, action } = confirmationModal;

        setIsProcessing(true);
        try {
            let noteAttachment = "";

            if (action === 'DISBURSE' && selectedFile) {
                const formData = new FormData();
                formData.append('file', selectedFile);

                const uploadRes = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });

                const uploadData = await uploadRes.json();
                if (!uploadRes.ok) throw new Error(uploadData.error || 'Failed to upload proof of payment');

                noteAttachment = ` [Proof: ${uploadData.url}]`;
            }

            const response = await fetch('/api/payments/action', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    paymentId,
                    action,
                    paymentMethod: confirmationModal.paymentMethod || 'VIRTUAL',
                    proofUrl: noteAttachment ? noteAttachment.replace(' [Proof: ', '').replace(']', '') : undefined
                })
            });

            // Update: I will update the route to accept notes/proofUrl because user requirement is strict.
            // But first let's get the UI working. The upload works.

            const data = await response.json();
            if (!response.ok) throw new Error(data.error);

            const successMessage = action === 'AUTHORIZE'
                ? 'Payment Authorized & ready for payout'
                : action === 'DISBURSE'
                    ? 'Payment disbursed successfully'
                    : action === 'CLOSE'
                        ? 'Payment closed successfully'
                        : 'Payment Rejected';

            showToast(successMessage, 'success');
            setConfirmationModal(null);
            router.refresh();

            if (action === 'AUTHORIZE') {
                setActiveTab('disbursements');
            } else if (action === 'DISBURSE') {
                setActiveTab('closing');
            }
        } catch (error: any) {
            showToast(error.message, 'error');
        } finally {
            setIsProcessing(false);
        }
    };

    const formatDate = (date: Date | string) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <div className="space-y-6">
            {/* ── NEW LAYOUT: HORIZONTAL TABS + CONTENT ── */}
            <div className="flex flex-col gap-6 items-start w-full">

                {/* ── MODERN HORIZONTAL TABS ── */}
                <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden shrink-0 transition-all duration-200">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                                <PiTrendUp className="text-xl text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-slate-900 font-bold text-[15px] tracking-wide flex items-center gap-2">
                                    Payment Center
                                </h3>
                                <p className="text-slate-500 text-[11px] mt-0.5">Manage and execute financial workflows</p>
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-md border border-emerald-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[10px] font-medium text-emerald-700 tracking-wide">System Connected</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex overflow-x-auto divide-x divide-slate-300 scrollbar-hide">
                        {[
                            {
                                id: 'payables',
                                label: 'Payables Ledger',
                                sub: 'Initiate Remittance',
                                badge: expenses.length + invoices.length + requisitions.length + budgets.length
                            },
                            {
                                id: 'approvals',
                                label: 'Pending Auth',
                                sub: 'Review & Authorize',
                                badge: pendingPayments.length
                            },
                            {
                                id: 'disbursements',
                                label: 'Remittance',
                                sub: 'Execute Transfers',
                                badge: authorizedPayments.length
                            },
                            {
                                id: 'closing',
                                label: 'Reconciliation',
                                sub: 'Finalize Records',
                                badge: paidPayments.length
                            },
                            {
                                id: 'history',
                                label: 'Ledger History',
                                sub: 'Archived TXNs',
                                badge: history.length
                            }
                        ].map((step, idx) => {
                            const isActive = activeTab === step.id;

                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveTab(step.id as any)}
                                    className={cn(
                                        "flex-1 min-w-[180px] flex items-center justify-between p-4 group transition-all duration-200 relative",
                                        isActive ? "bg-white text-indigo-600 border-b-2 border-indigo-600" : "bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 border-b-2 border-transparent"
                                    )}
                                >
                                    <div className="flex flex-col text-left">
                                         <p className="font-semibold text-[13px] tracking-tight">{step.label}</p>
                                         <p className={cn("text-[10px] mt-0.5", isActive ? "text-indigo-400" : "text-slate-400")}>{step.sub}</p>
                                    </div>
                                    {step.badge > 0 && (
                                        <span className={cn(
                                            "ml-4 px-2 py-0.5 text-[10px] min-w-[24px] text-center rounded-full font-semibold shrink-0 transition-colors",
                                            isActive ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                                        )}>
                                            {step.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ── MAIN CONTENT AREA ── */}
                <div className="w-full min-w-0">


                    {/* TAB: PAYABLES */}
                    {activeTab === 'payables' && (
                        <div className="space-y-4 animate-fade-in">
                            {/* Selection Summary */}
                            {(selectedExpenses.size > 0 || selectedInvoices.size > 0 || selectedRequisitions.size > 0 || selectedBudgets.size > 0) && (
                                <div className="p-3 pl-5 pr-3 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center justify-between sticky top-6 z-[60] mb-8 mx-auto w-full transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                                            <PiListBullets className="text-xl text-indigo-300" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">Total Selected</p>
                                            <div className="flex items-baseline gap-2">
                                                <p className="text-xl font-mono font-bold tracking-tight text-white drop-shadow-sm">
                                                    ${totalSelectedAmount.toFixed(2)}
                                                </p>
                                                <span className="text-[10px] text-slate-300 font-medium hidden sm:inline-block px-2.5 py-0.5 bg-slate-800 rounded-full border border-slate-700 uppercase tracking-widest ml-2">
                                                    {[
                                                        selectedExpenses.size > 0 && `${selectedExpenses.size} EXP`,
                                                        selectedInvoices.size > 0 && `${selectedInvoices.size} INV`,
                                                        selectedRequisitions.size > 0 && `${selectedRequisitions.size} REQ`,
                                                        selectedBudgets.size > 0 && `${selectedBudgets.size} BUD`
                                                    ].filter(Boolean).join(', ')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => {
                                                setSelectedExpenses(new Set());
                                                setSelectedInvoices(new Set());
                                                setSelectedRequisitions(new Set());
                                                setSelectedBudgets(new Set());
                                            }}
                                            className="px-3 py-1.5 text-[11px] tracking-wide font-semibold text-slate-400 hover:text-slate-200 transition-colors"
                                        >
                                            Clear
                                        </button>
                                        <button
                                            onClick={() => isSystemAdmin ? setShowBypassModal(true) : handleCreateBatch(false)}
                                            disabled={isProcessing}
                                            className="px-6 py-2.5 min-w-[180px] bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-900 rounded-xl text-[12px] font-bold tracking-wide transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
                                        >
                                            {isProcessing ? <PiClock className="animate-spin text-lg" /> : null}
                                            PROCESS SELECTION
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-6">
                                {expenses.length === 0 && invoices.length === 0 && requisitions.length === 0 && budgets.length === 0 ? (
                                    <div className="p-12 text-center bg-white border border-slate-300 rounded-none">
                                        <p className="font-mono text-[11px] font-bold text-slate-900 tracking-widest uppercase">No Payables Pending</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Select All Action */}
                                        <div className="flex items-center justify-between px-2">
                                            <h3 className="text-sm font-semibold text-slate-800 tracking-wide border-l-4 border-indigo-500 pl-3">Available Payables</h3>
                                            <button
                                                onClick={() => {
                                                    const totalItems = expenses.length + invoices.length + requisitions.length + budgets.length;
                                                    const totalSelected = selectedExpenses.size + selectedInvoices.size + selectedRequisitions.size + selectedBudgets.size;
                                                    const isAllSelected = totalItems > 0 && totalItems === totalSelected;

                                                    if (isAllSelected) {
                                                        setSelectedExpenses(new Set());
                                                        setSelectedInvoices(new Set());
                                                        setSelectedRequisitions(new Set());
                                                        setSelectedBudgets(new Set());
                                                    } else {
                                                        setSelectedExpenses(new Set(expenses.map(e => e.id)));
                                                        setSelectedInvoices(new Set(invoices.map(i => i.id)));
                                                        setSelectedRequisitions(new Set(requisitions.map(r => r.id)));
                                                        setSelectedBudgets(new Set(budgets.map(b => b.id)));
                                                    }
                                                }}
                                                className="text-[11px] font-semibold text-slate-700 hover:text-indigo-600 transition-colors bg-white hover:bg-slate-50 px-4 py-2 rounded-lg flex items-center gap-2 border border-slate-200 shadow-sm"
                                            >
                                                {(() => {
                                                    const totalItems = expenses.length + invoices.length + requisitions.length + budgets.length;
                                                    const totalSelected = selectedExpenses.size + selectedInvoices.size + selectedRequisitions.size + selectedBudgets.size;
                                                    const isAllSelected = totalItems > 0 && totalItems === totalSelected;
                                                    return (
                                                        <>
                                                            <div className={cn(
                                                                "w-4 h-4 flex items-center justify-center border rounded transition-all shadow-sm shrink-0",
                                                                isAllSelected ? "bg-indigo-600 border-indigo-600" : "border-slate-300 bg-white"
                                                            )}>
                                                                {isAllSelected && <div className="w-2 h-2 rounded-sm bg-white" />}
                                                            </div>
                                                            {isAllSelected ? 'Deselect All' : 'Select All Items'}
                                                        </>
                                                    );
                                                })()}
                                            </button>
                                        </div>

                                        {/* Requisitions Section */}
                                        {requisitions.length > 0 && (
                                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mb-6">
                                                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                                    <div className="flex items-center gap-3">
                                                        <h3 className="text-[13px] font-semibold text-slate-800 tracking-wide">Purchase Requisitions</h3>
                                                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md text-[10px] font-bold border border-indigo-100">{requisitions.length} Items</span>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            const allSelected = requisitions.every(r => selectedRequisitions.has(r.id));
                                                            if (allSelected) setSelectedRequisitions(new Set());
                                                            else setSelectedRequisitions(new Set(requisitions.map(r => r.id)));
                                                        }}
                                                        className="text-[11px] font-semibold text-slate-500 hover:text-indigo-600 transition-colors bg-white px-3 py-1.5 border border-slate-200 rounded-lg shadow-sm"
                                                    >
                                                        {requisitions.every(r => selectedRequisitions.has(r.id)) ? 'Deselect All' : 'Select All'}
                                                    </button>
                                                </div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                                                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                                            <tr>
                                                                <th className="px-4 py-3 w-10 text-center">Sel</th>
                                                                <th className="px-4 py-3">Ref ID</th>
                                                                <th className="px-4 py-3">Description</th>
                                                                <th className="px-4 py-3">Beneficiary</th>
                                                                <th className="px-4 py-3 text-right">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-slate-100">
                                                            {requisitions.map(req => (
                                                                <tr
                                                                    key={req.id}
                                                                    className={cn(
                                                                        "cursor-pointer hover:bg-slate-50 transition-colors",
                                                                        selectedRequisitions.has(req.id) ? "bg-indigo-50/30" : ""
                                                                    )}
                                                                    onClick={() => toggleRequisition(req.id)}
                                                                >
                                                                    <td className="px-4 py-3 flex items-center justify-center">
                                                                        <div className={cn(
                                                                            "w-4 h-4 mx-auto flex items-center justify-center border rounded transition-all shadow-sm shrink-0",
                                                                            selectedRequisitions.has(req.id)
                                                                                ? "bg-indigo-600 border-indigo-600"
                                                                                : "border-slate-300 bg-white"
                                                                        )}>
                                                                            {selectedRequisitions.has(req.id) && <div className="w-2 h-2 rounded-sm bg-white" />}
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 font-mono text-[11px] text-slate-500">REQ-{req.id.substring(0, 8).toUpperCase()}</td>
                                                                    <td className="px-4 py-3 font-medium text-slate-800">{req.title}</td>
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">USR</span>
                                                                            <p className="font-medium text-slate-700">{req.user.name}</p>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-right font-semibold text-slate-900">${req.amount.toFixed(2)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* Budgets Section */}
                                        {budgets.length > 0 && (
                                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mb-6">
                                                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                                    <div className="flex items-center gap-3">
                                                        <h3 className="text-[13px] font-semibold text-slate-800 tracking-wide">Monthly Budgets</h3>
                                                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md text-[10px] font-bold border border-indigo-100">{budgets.length} Items</span>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            const allSelected = budgets.every(b => selectedBudgets.has(b.id));
                                                            if (allSelected) setSelectedBudgets(new Set());
                                                            else setSelectedBudgets(new Set(budgets.map(b => b.id)));
                                                        }}
                                                        className="text-[11px] font-semibold text-slate-500 hover:text-indigo-600 transition-colors bg-white px-3 py-1.5 border border-slate-200 rounded-lg shadow-sm"
                                                    >
                                                        {budgets.every(b => selectedBudgets.has(b.id)) ? 'Deselect All' : 'Select All'}
                                                    </button>
                                                </div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                                                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                                            <tr>
                                                                <th className="px-4 py-3 w-10 text-center">Sel</th>
                                                                <th className="px-4 py-3">Ref ID</th>
                                                                <th className="px-4 py-3">Period</th>
                                                                <th className="px-4 py-3">Department/Branch</th>
                                                                <th className="px-4 py-3 text-right">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-slate-100">
                                                            {budgets.map(bud => (
                                                                <tr
                                                                    key={bud.id}
                                                                    className={cn(
                                                                        "cursor-pointer hover:bg-slate-50 transition-colors",
                                                                        selectedBudgets.has(bud.id) ? "bg-indigo-50/30" : ""
                                                                    )}
                                                                    onClick={() => toggleBudget(bud.id)}
                                                                >
                                                                    <td className="px-4 py-3 flex items-center justify-center">
                                                                        <div className={cn(
                                                                            "w-4 h-4 mx-auto flex items-center justify-center border rounded transition-all shadow-sm shrink-0",
                                                                            selectedBudgets.has(bud.id)
                                                                                ? "bg-indigo-600 border-indigo-600"
                                                                                : "border-slate-300 bg-white"
                                                                        )}>
                                                                            {selectedBudgets.has(bud.id) && <div className="w-2 h-2 rounded-sm bg-white" />}
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 font-mono text-[11px] text-slate-500">BUD-{bud.id.substring(0, 8).toUpperCase()}</td>
                                                                    <td className="px-4 py-3 font-medium text-slate-800">{bud.month}/{bud.year}</td>
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">DPT</span>
                                                                            <p className="font-medium text-slate-700 tracking-wide">{bud.department}</p>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-right font-semibold text-slate-900">${bud.totalAmount.toFixed(2)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* Invoices Section */}
                                        {invoices.length > 0 && (
                                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mb-6">
                                                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                                    <div className="flex items-center gap-3">
                                                        <h3 className="text-[13px] font-semibold text-slate-800 tracking-wide">Vendor Invoices</h3>
                                                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md text-[10px] font-bold border border-indigo-100">{invoices.length} Items</span>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            const allSelected = invoices.every(i => selectedInvoices.has(i.id));
                                                            if (allSelected) setSelectedInvoices(new Set());
                                                            else setSelectedInvoices(new Set(invoices.map(i => i.id)));
                                                        }}
                                                        className="text-[11px] font-semibold text-slate-500 hover:text-indigo-600 transition-colors bg-white px-3 py-1.5 border border-slate-200 rounded-lg shadow-sm"
                                                    >
                                                        {invoices.every(i => selectedInvoices.has(i.id)) ? 'Deselect All' : 'Select All'}
                                                    </button>
                                                </div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                                                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                                            <tr>
                                                                <th className="px-4 py-3 w-10 text-center">Sel</th>
                                                                <th className="px-4 py-3">Ref ID</th>
                                                                <th className="px-4 py-3">Invoice No.</th>
                                                                <th className="px-4 py-3">Vendor</th>
                                                                <th className="px-4 py-3 text-right">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-slate-100">
                                                            {invoices.map(invoice => (
                                                                <tr
                                                                    key={invoice.id}
                                                                    className={cn(
                                                                        "cursor-pointer hover:bg-slate-50 transition-colors",
                                                                        selectedInvoices.has(invoice.id) ? "bg-indigo-50/30" : ""
                                                                    )}
                                                                    onClick={() => toggleInvoice(invoice.id)}
                                                                >
                                                                    <td className="px-4 py-3 flex items-center justify-center">
                                                                        <div className={cn(
                                                                            "w-4 h-4 mx-auto flex items-center justify-center border rounded transition-all shadow-sm shrink-0",
                                                                            selectedInvoices.has(invoice.id)
                                                                                ? "bg-indigo-600 border-indigo-600"
                                                                                : "border-slate-300 bg-white"
                                                                        )}>
                                                                            {selectedInvoices.has(invoice.id) && <div className="w-2 h-2 rounded-sm bg-white" />}
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 font-mono text-[11px] text-slate-500">INV-{invoice.id.substring(0, 8).toUpperCase()}</td>
                                                                    <td className="px-4 py-3 font-mono font-medium text-slate-700 tracking-wider">#{invoice.invoiceNumber}</td>
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">VND</span>
                                                                            <p className="font-medium text-slate-800">{invoice.vendor.name}</p>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-right font-semibold text-slate-900">${invoice.amount.toFixed(2)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* Expenses Section */}
                                        {expenses.length > 0 && (
                                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mb-6">
                                                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                                    <div className="flex items-center gap-3">
                                                        <h3 className="text-[13px] font-semibold text-slate-800 tracking-wide">Employee Reimbursements</h3>
                                                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md text-[10px] font-bold border border-indigo-100">{expenses.length} Items</span>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            const allSelected = expenses.every(e => selectedExpenses.has(e.id));
                                                            if (allSelected) setSelectedExpenses(new Set());
                                                            else setSelectedExpenses(new Set(expenses.map(e => e.id)));
                                                        }}
                                                        className="text-[11px] font-semibold text-slate-500 hover:text-indigo-600 transition-colors bg-white px-3 py-1.5 border border-slate-200 rounded-lg shadow-sm"
                                                    >
                                                        {expenses.every(e => selectedExpenses.has(e.id)) ? 'Deselect All' : 'Select All'}
                                                    </button>
                                                </div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                                                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                                            <tr>
                                                                <th className="px-4 py-3 w-10 text-center">Sel</th>
                                                                <th className="px-4 py-3">Ref ID</th>
                                                                <th className="px-4 py-3">Description</th>
                                                                <th className="px-4 py-3">Employee</th>
                                                                <th className="px-4 py-3 text-right">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-slate-100">
                                                            {expenses.map(expense => (
                                                                <tr
                                                                    key={expense.id}
                                                                    className={cn(
                                                                        "cursor-pointer hover:bg-slate-50 transition-colors",
                                                                        selectedExpenses.has(expense.id) ? "bg-indigo-50/30" : ""
                                                                    )}
                                                                    onClick={() => toggleExpense(expense.id)}
                                                                >
                                                                    <td className="px-4 py-3 flex items-center justify-center">
                                                                        <div className={cn(
                                                                            "w-4 h-4 mx-auto flex items-center justify-center border rounded transition-all shadow-sm shrink-0",
                                                                            selectedExpenses.has(expense.id)
                                                                                ? "bg-indigo-600 border-indigo-600"
                                                                                : "border-slate-300 bg-white"
                                                                        )}>
                                                                            {selectedExpenses.has(expense.id) && <div className="w-2 h-2 rounded-sm bg-white" />}
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 font-mono text-[11px] text-slate-500">EXP-{expense.id.substring(0, 8).toUpperCase()}</td>
                                                                    <td className="px-4 py-3 font-medium text-slate-800">{expense.title}</td>
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">EMP</span>
                                                                            <p className="font-medium text-slate-700">{expense.user.name}</p>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-right font-semibold text-slate-900">${expense.amount.toFixed(2)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* Batch composition preview */}
                                        {(selectedExpenses.size > 0 || selectedInvoices.size > 0 || selectedRequisitions.size > 0 || selectedBudgets.size > 0) && (
                                            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                                                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                                                    <div className="w-1.5 h-4 bg-indigo-500 rounded-full"></div>
                                                    <p className="text-[12px] font-semibold text-slate-700 tracking-wide">Batch Composition Preview</p>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedRequisitions.size > 0 && (
                                                        <span className="px-3 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-lg text-[11px] font-semibold">
                                                            REQ · {selectedRequisitions.size} items · ${requisitions.filter(r => selectedRequisitions.has(r.id)).reduce((s,r) => s+r.amount, 0).toFixed(2)}
                                                        </span>
                                                    )}
                                                    {selectedBudgets.size > 0 && (
                                                        <span className="px-3 py-1.5 bg-violet-50 border border-violet-100 text-violet-700 rounded-lg text-[11px] font-semibold">
                                                            BUD · {selectedBudgets.size} items · ${budgets.filter(b => selectedBudgets.has(b.id)).reduce((s,b) => s+b.totalAmount, 0).toFixed(2)}
                                                        </span>
                                                    )}
                                                    {selectedInvoices.size > 0 && (
                                                        <span className="px-3 py-1.5 bg-sky-50 border border-sky-100 text-sky-700 rounded-lg text-[11px] font-semibold">
                                                            INV · {selectedInvoices.size} items · ${invoices.filter(i => selectedInvoices.has(i.id)).reduce((s,i) => s+i.amount, 0).toFixed(2)}
                                                        </span>
                                                    )}
                                                    {selectedExpenses.size > 0 && (
                                                        <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-lg text-[11px] font-semibold">
                                                            EXP · {selectedExpenses.size} items · ${expenses.filter(e => selectedExpenses.has(e.id)).reduce((s,e) => s+e.amount, 0).toFixed(2)}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[11px] text-slate-400 mt-4">These items will be processed as a unified batch.</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {/* TAB: APPROVALS */}
                    {activeTab === 'approvals' && (
                        <div className="animate-fade-in space-y-4">
                            {/* Tab Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 tracking-wide">Pending Authorization</h3>
                                    <p className="text-[11px] font-medium text-slate-500 mt-0.5">{pendingPayments.length} Batches awaiting review</p>
                                </div>
                                <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 shadow-inner">
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={cn(
                                            "p-1.5 rounded flex items-center justify-center transition-all",
                                            viewMode === 'list' ? "bg-white shadow-[0_1px_3px_rgb(0,0,0,0.1)] text-slate-900" : "text-slate-400 hover:text-slate-600"
                                        )}
                                        title="List View"
                                    >
                                        <PiListBullets className="text-lg" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={cn(
                                            "p-1.5 rounded flex items-center justify-center transition-all",
                                            viewMode === 'grid' ? "bg-white shadow-[0_1px_3px_rgb(0,0,0,0.1)] text-slate-900" : "text-slate-400 hover:text-slate-600"
                                        )}
                                        title="Grid View"
                                    >
                                        <PiGridFour className="text-lg" />
                                    </button>
                                </div>
                            </div>

                            {pendingPayments.length === 0 ? (
                                <div className="p-12 text-center bg-white border border-slate-200 rounded-2xl shadow-sm">
                                    <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                                        <PiCheckCircle className="text-2xl text-slate-300" />
                                    </div>
                                    <h3 className="text-[13px] font-bold text-slate-900 tracking-wide">All Caught Up</h3>
                                    <p className="text-[12px] text-slate-500 font-medium mt-1">No payments pending authorization right now.</p>
                                </div>
                            ) : viewMode === 'grid' ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {pendingPayments.map(batch => (
                                        <div key={batch.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col group">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                                                    <PiStackSimple className="text-xl text-slate-400" />
                                                </div>
                                                <span className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-md text-[10px] font-bold uppercase tracking-wider border border-amber-100">
                                                    Pending Auth
                                                </span>
                                            </div>

                                            <h4 className="text-xl font-mono font-bold text-slate-900 tracking-tight">${batch.amount.toFixed(2)}</h4>
                                            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mt-1 mb-4 flex items-center justify-between">
                                                BTH-{batch.id.substring(0, 8).toUpperCase()}
                                                <span className="font-sans normal-case tracking-normal">{formatDate(batch.createdAt)}</span>
                                            </p>

                                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600 shadow-inner">MKR</span>
                                                    <p className="text-[12px] font-semibold text-slate-700 tracking-wide">{batch.maker.name}</p>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5 mt-2 pt-3 border-t border-slate-200/60">
                                                    {[
                                                        batch._count?.invoices && { t: 'INV', c: batch._count.invoices, color: 'text-sky-700 bg-sky-50 border-sky-100' },
                                                        batch._count?.expenses && { t: 'EXP', c: batch._count.expenses, color: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
                                                        batch._count?.requisitions && { t: 'REQ', c: batch._count.requisitions, color: 'text-indigo-700 bg-indigo-50 border-indigo-100' },
                                                        batch._count?.monthlyBudgets && { t: 'BUD', c: batch._count.monthlyBudgets, color: 'text-violet-700 bg-violet-50 border-violet-100' }
                                                    ].filter(Boolean).map((item: any, i) => (
                                                        <span key={i} className={`px-2 py-0.5 rounded flex items-center gap-1 border ${item.color}`}>
                                                            <span className="text-[10px] font-bold">{item.c}</span>
                                                            <span className="text-[9px] font-medium tracking-wide">{item.t}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-auto grid grid-cols-3 gap-2">
                                                <Link href={`/receipt-studio?paymentId=${batch.id}`} className="py-2 bg-[#29258D] text-white rounded-md font-medium text-[11px] hover:bg-[#29258D]/90 transition-all flex justify-center items-center shadow-none" title="View Detail">
                                                    View
                                                </Link>
                                                <button onClick={() => handleAuthorization(batch.id, 'REJECT')} disabled={isProcessing} className="py-2 bg-orange-500 text-white rounded-md font-medium text-[11px] hover:bg-orange-600 transition-all flex justify-center items-center shadow-none disabled:opacity-50">
                                                    Reject
                                                </button>
                                                <button onClick={() => handleAuthorization(batch.id, 'AUTHORIZE')} disabled={isProcessing} className="py-2 bg-emerald-600 text-white rounded-md font-medium text-[11px] hover:bg-emerald-700 transition-all flex justify-center items-center shadow-none disabled:opacity-50">
                                                    Authorize
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-[12px] whitespace-nowrap min-w-[800px]">
                                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                                <tr>
                                                    <th className="px-4 py-3 w-28">Date</th>
                                                    <th className="px-4 py-3">Ref ID</th>
                                                    <th className="px-4 py-3">Originator</th>
                                                    <th className="px-4 py-3 text-right">Amount</th>
                                                    <th className="sticky right-0 bg-slate-50 pl-4 pr-4 py-3 text-right rounded-tr-xl shadow-[-8px_0_8px_-6px_rgba(0,0,0,0.04)] z-10 w-64">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {pendingPayments.map(batch => (
                                                    <tr key={batch.id} className="hover:bg-slate-50 transition-colors group">
                                                        <td className="px-4 py-3 text-slate-500">{formatDate(batch.createdAt)}</td>
                                                        <td className="px-4 py-3 font-mono text-[11px] text-slate-500">BTH-{batch.id.substring(0, 8).toUpperCase()}</td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-500">MKR</span>
                                                                <p className="font-medium text-slate-800 tracking-wide">{batch.maker.name}</p>
                                                            </div>
                                                            <p className="text-[10px] text-slate-400 tracking-wider mt-1 ml-8">
                                                                {[batch._count?.invoices && `${batch._count.invoices} INV`, batch._count?.expenses && `${batch._count.expenses} EXP`, batch._count?.requisitions && `${batch._count.requisitions} REQ`, batch._count?.monthlyBudgets && `${batch._count.monthlyBudgets} BUD`].filter(Boolean).join(' · ')}
                                                            </p>
                                                        </td>
                                                        <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">${batch.amount.toFixed(2)}</td>
                                                        <td className="sticky right-0 bg-white pl-4 pr-4 py-3 align-middle shadow-[-8px_0_8px_-6px_rgba(0,0,0,0.04)] z-10">
                                                            <div className="flex items-center justify-end gap-1.5 h-full">
                                                                <Link href={`/receipt-studio?paymentId=${batch.id}`} className="px-3 py-2 bg-[#29258D] text-white rounded-md font-medium text-xs hover:bg-[#29258D]/90 transition-all flex flex-1 items-center justify-center shadow-none" title="View Detail">View</Link>
                                                                <button onClick={() => handleAuthorization(batch.id, 'REJECT')} disabled={isProcessing} className="px-3 py-2 bg-orange-500 text-white rounded-md font-medium text-xs hover:bg-orange-600 transition-all flex flex-1 items-center justify-center shadow-none disabled:opacity-50">Reject</button>
                                                                <button onClick={() => handleAuthorization(batch.id, 'AUTHORIZE')} disabled={isProcessing} className="px-3 py-2 bg-emerald-600 text-white rounded-md font-medium text-xs hover:bg-emerald-700 transition-all flex flex-1 items-center justify-center shadow-none disabled:opacity-50">Authorize</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* TAB: DISBURSEMENTS */}
                    {activeTab === 'disbursements' && (
                        <div className="animate-fade-in space-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Ready for Disbursement</h3>
                                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1">[{authorizedPayments.length}] BATCHES AUTHORIZED</p>
                                </div>
                            </div>

                            {authorizedPayments.length === 0 ? (
                                <div className="p-8 text-center bg-white border border-slate-300">
                                    <p className="font-mono text-xs font-bold text-slate-900 tracking-widest uppercase">No Payments Ready for Payout</p>
                                </div>
                            ) : (
                                /* BANKY TABLE */
                                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-[12px] whitespace-nowrap">
                                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                                <tr>
                                                    <th className="px-4 py-3">Date</th>
                                                    <th className="px-4 py-3">Ref ID</th>
                                                    <th className="px-4 py-3">Beneficiary</th>
                                                    <th className="px-4 py-3 text-right">Amount</th>
                                                    <th className="px-4 py-3 text-right w-32">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {authorizedPayments.map(batch => (
                                                    <tr key={batch.id} className="hover:bg-slate-50 transition-colors group">
                                                        <td className="px-4 py-3 text-slate-500">{formatDate(batch.createdAt)}</td>
                                                        <td className="px-4 py-3 font-mono text-[11px] text-slate-500">BTH-{batch.id.substring(0, 8).toUpperCase()}</td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-500">MKR</span>
                                                                <p className="font-medium text-slate-800 tracking-wide">{batch.maker.name}</p>
                                                            </div>
                                                            <p className="text-[10px] text-slate-400 tracking-wider mt-1 ml-8">
                                                                {[batch._count?.invoices && `${batch._count.invoices} INV`, batch._count?.expenses && `${batch._count.expenses} EXP`, batch._count?.requisitions && `${batch._count.requisitions} REQ`, batch._count?.monthlyBudgets && `${batch._count.monthlyBudgets} BUD`].filter(Boolean).join(' · ')}
                                                            </p>
                                                        </td>
                                                        <td className="px-4 py-3 text-right font-semibold text-slate-900">${batch.amount.toFixed(2)}</td>
                                                        <td className="px-4 py-3 text-right">
                                                            <div className="flex items-center justify-end gap-1.5 h-full">
                                                                <Link href={`/receipt-studio?paymentId=${batch.id}`} className="px-3 py-2 bg-[#29258D] text-white rounded-md font-medium text-xs hover:bg-[#29258D]/90 transition-all flex flex-1 items-center justify-center shadow-none" title="Source Voucher">View</Link>
                                                                <button onClick={() => handleAuthorization(batch.id, 'DISBURSE')} disabled={isProcessing} className="px-3 py-2 bg-emerald-600 text-white rounded-md font-medium text-xs hover:bg-emerald-700 transition-all flex flex-1 items-center justify-center shadow-none disabled:opacity-50">Transfer</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* TAB: CLOSING */}
                    {activeTab === 'closing' && (
                        <div className="animate-fade-in space-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Pending Reconciliation</h3>
                                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1">[{paidPayments.length}] BATCHES AWAITING CLOSURE</p>
                                </div>
                            </div>

                            {paidPayments.length === 0 ? (
                                <div className="p-8 text-center bg-white border border-slate-300">
                                    <p className="font-mono text-xs font-bold text-slate-900 tracking-widest uppercase">No Payments Pending Closure</p>
                                </div>
                            ) : (
                                /* BANKY TABLE */
                                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                                     <div className="overflow-x-auto">
                                        <table className="w-full text-left text-[12px] whitespace-nowrap">
                                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                                <tr>
                                                    <th className="px-4 py-3">Transfer Date</th>
                                                    <th className="px-4 py-3">Ref ID</th>
                                                    <th className="px-4 py-3">Beneficiary</th>
                                                    <th className="px-4 py-3 text-right">Amount</th>
                                                    <th className="px-4 py-3 text-right w-32">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {paidPayments.map(batch => (
                                                    <tr key={batch.id} className="hover:bg-slate-50 transition-colors group">
                                                        <td className="px-4 py-3 text-slate-500">{formatDate(batch.createdAt)}</td>
                                                        <td className="px-4 py-3 font-mono text-[11px] text-slate-500">BTH-{batch.id.substring(0, 8).toUpperCase()}</td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-500">MKR</span>
                                                                <p className="font-medium text-slate-800 tracking-wide">{batch.maker.name}</p>
                                                            </div>
                                                            <p className="text-[10px] text-emerald-600 tracking-wider mt-1 ml-8 font-semibold">Bank Transfer Complete</p>
                                                        </td>
                                                        <td className="px-4 py-3 text-right font-semibold text-slate-900">${batch.amount.toFixed(2)}</td>
                                                        <td className="px-4 py-3 text-right">
                                                            <button onClick={() => handleAuthorization(batch.id, 'CLOSE')} disabled={isProcessing} className="px-3 py-2 bg-[#29258D] text-white rounded-md font-medium text-xs hover:bg-[#29258D]/90 transition-all flex items-center justify-center shadow-none disabled:opacity-50 w-full">
                                                                Reconcile
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                     </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* TAB: HISTORY */}
                    {activeTab === 'history' && (
                        <div className="animate-fade-in space-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Transaction History</h3>
                                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1">[{history.length}] TOTAL RECORDS ARCHIVED</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                            <tr>
                                                <th className="px-4 py-3">Initiator</th>
                                                <th className="px-4 py-3">Authorizer</th>
                                                <th className="px-4 py-3">Status</th>
                                                <th className="px-4 py-3 text-right">Amount</th>
                                                <th className="px-4 py-3 text-right">Date</th>
                                                <th className="px-4 py-3 text-right w-16">View</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            {history.length === 0 ? (
                                                <tr>
                                                    <td colSpan={6} className="px-3 py-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                        No transaction history found
                                                    </td>
                                                </tr>
                                            ) : (
                                                currentHistory.map((item: any) => (
                                                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-500">REQ</span>
                                                                <p className="font-medium text-slate-800 tracking-wide">{item.maker?.name || 'UNKNOWN'}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 font-medium text-slate-700">
                                                            {item.checker?.name || 'Pending'}
                                                        </td>
                                                        <td className="px-4 py-3 font-semibold tracking-wide">
                                                            <span className={cn(
                                                                "px-2 py-1 rounded-md text-[10px]",
                                                                item.status === 'COMPLETED' || item.status === 'PAID' ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                                                                    item.status === 'REJECTED' ? "bg-rose-50 text-rose-700 border border-rose-200" :
                                                                        "bg-slate-50 text-slate-600 border border-slate-200"
                                                            )}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3 text-right">
                                                            <p className="font-semibold text-slate-900">${item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                                                        </td>
                                                        <td className="px-4 py-3 text-right text-slate-500">
                                                            {formatDate(item.createdAt)}
                                                        </td>
                                                        <td className="px-4 py-3 text-right">
                                                            <Link
                                                                href={`/receipt-studio?paymentId=${item.id}`}
                                                                className="py-2 bg-[#29258D] text-white rounded-md font-medium text-xs hover:bg-[#29258D]/90 transition-all shadow-none flex justify-center items-center"
                                                            >
                                                                View Log
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                        {totalPages > 1 && (
                                            <tfoot className="border-t border-slate-100 bg-slate-50/50">
                                                <tr>
                                                    <td colSpan={6} className="px-4 py-3">
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">PAGE {currentPage} OF {totalPages}</p>
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                                                    disabled={currentPage === 1}
                                                                    className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 disabled:opacity-30 transition-colors shadow-sm bg-slate-50"
                                                                >
                                                                    PREV
                                                                </button>
                                                                <button
                                                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                                                    disabled={currentPage === totalPages}
                                                                    className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 disabled:opacity-30 transition-colors shadow-sm bg-slate-50"
                                                                >
                                                                    NEXT
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Confirmation Modal */}
            {mounted && confirmationModal && confirmationModal.isOpen && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => !isProcessing && setConfirmationModal(null)}></div>
                    <div className="relative bg-white border border-slate-200 shadow-[0_20px_50px_rgb(0,0,0,0.15)] p-6 w-full max-w-sm rounded-2xl animate-scale-in z-[10000]">
                        <div className="mb-6 flex flex-col items-center text-center">
                            <div className={cn(
                                "w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center mb-4 relative",
                                confirmationModal.action === 'AUTHORIZE' ? "bg-indigo-50 border border-indigo-100" :
                                confirmationModal.action === 'DISBURSE' ? "bg-emerald-50 border border-emerald-100" :
                                confirmationModal.action === 'CLOSE' ? "bg-slate-50 border border-slate-200" :
                                "bg-red-50 border border-red-100"
                            )}>
                                {confirmationModal.action === 'AUTHORIZE' ? <PiCheckCircle className="text-3xl text-indigo-600 relative z-10" /> :
                                 confirmationModal.action === 'DISBURSE' ? <PiMoney className="text-3xl text-emerald-600 relative z-10" /> :
                                 confirmationModal.action === 'CLOSE' ? <PiFileText className="text-3xl text-slate-600 relative z-10" /> :
                                 <PiX className="text-3xl text-red-600 relative z-10" />}
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 tracking-wide">
                                {confirmationModal.action === 'AUTHORIZE' ? 'Approve Payment' :
                                 confirmationModal.action === 'DISBURSE' ? 'Execute Transfer' :
                                 confirmationModal.action === 'CLOSE' ? 'Close Lifecycle' : 'Reject Payment'}
                            </h2>
                            <p className="text-[13px] text-slate-500 tracking-wide mt-2 px-2 leading-relaxed">
                                {confirmationModal.action === 'CLOSE' ?
                                    "Closing this batch marks the lifecycle as complete. Make sure all proofs have been verified." :
                                    `Are you sure you want to ${confirmationModal.action === 'DISBURSE' ? 'confirm payout for' : confirmationModal.action.toLowerCase()} this item?`
                                }
                                <br/>
                                <span className="font-semibold text-slate-700 mt-1 block">This action cannot be undone.</span>
                            </p>
                        </div>

                        {confirmationModal.action === 'DISBURSE' && (
                            <div className="mb-6 space-y-4 text-left bg-slate-50 border border-slate-100 rounded-xl p-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-widest mb-2">
                                        Payment Method
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('VIRTUAL')}
                                            className={cn(
                                                "relative p-3 border rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5",
                                                paymentMethod === 'VIRTUAL'
                                                    ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm"
                                                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                                            )}
                                        >
                                            <PiGlobe className={cn("text-xl", paymentMethod === 'VIRTUAL' ? "text-emerald-600" : "text-slate-400")} />
                                            <span className="text-[12px] font-bold">Virtual</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('WALLET')}
                                            className={cn(
                                                "relative p-3 border rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5",
                                                paymentMethod === 'WALLET'
                                                    ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm"
                                                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                                            )}
                                        >
                                            <PiWallet className={cn("text-xl", paymentMethod === 'WALLET' ? "text-emerald-600" : "text-slate-400")} />
                                            <span className="text-[12px] font-bold">Wallet</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-widest mb-2">
                                        Proof of Payment
                                    </label>
                                    <input
                                        type="file"
                                        title="Proof of Payment"
                                        placeholder="Proof of Payment"
                                        onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                                        className="block w-full text-[12px] text-slate-500 file:cursor-pointer file:mr-3 file:py-2 file:px-4 file:rounded-lg file:text-[12px] file:font-semibold file:bg-white file:border file:border-slate-200 file:text-slate-700 hover:file:bg-slate-50 border border-slate-200 rounded-lg p-1 bg-white transition-colors"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-3 mt-2">
                            <button
                                onClick={() => setConfirmationModal(null)}
                                disabled={isProcessing}
                                className="py-2.5 rounded-xl text-[13px] font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={proceedAuthorization}
                                disabled={isProcessing}
                                className={cn(
                                    "py-2.5 rounded-xl text-[13px] font-bold text-white transition-all shadow-sm flex items-center justify-center gap-2",
                                    confirmationModal.action === 'REJECT' ? "bg-red-600 hover:bg-red-700" : 
                                    confirmationModal.action === 'DISBURSE' ? "bg-emerald-600 hover:bg-emerald-700" :
                                    confirmationModal.action === 'AUTHORIZE' ? "bg-indigo-600 hover:bg-indigo-700" :
                                    "bg-slate-900 hover:bg-slate-800"
                                )}
                            >
                                {isProcessing ? <PiClock className="animate-spin text-lg" /> : null}
                                {isProcessing ? 'Processing' : 'Confirm Action'}
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* EXPEDITED BYPASS MODAL */}
            {mounted && showBypassModal && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => !isProcessing && setShowBypassModal(false)}></div>
                    <div className="relative bg-white border border-slate-200 shadow-[0_20px_50px_rgb(0,0,0,0.15)] p-6 w-[400px] rounded-2xl animate-fade-in-up">
                        <div className="absolute top-0 right-0 p-3">
                            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-300">SEC.CLR_9X</span>
                        </div>
                        <div className="mb-6 flex flex-col items-center">
                            <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-2xl shadow-sm flex items-center justify-center mb-5 relative">
                                <span className="absolute inset-0 rounded-2xl bg-indigo-400 opacity-20 blur-md"></span>
                                <PiListBullets className="text-3xl text-indigo-600 relative z-10" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 tracking-wide text-center">Batch Execution Protocol</h2>
                            <p className="text-[12px] text-slate-500 text-center tracking-wide mt-2 px-4 leading-relaxed">
                                Select authorization paradigm. Direct remittance circumvents pending authorization workflows.
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => handleCreateBatch(false)}
                                disabled={isProcessing}
                                className="w-full relative group border border-slate-200 rounded-xl bg-white hover:bg-slate-50 px-4 py-4 min-h-[72px] transition-all duration-200 text-left disabled:opacity-50 overflow-hidden shadow-sm hover:shadow"
                            >
                                <span className="absolute top-0 left-0 w-1.5 h-full bg-slate-300 group-hover:bg-indigo-400 transition-colors"></span>
                                <div className="ml-3 flex items-center justify-between">
                                    <div>
                                        <div className="text-[12px] font-semibold text-slate-900 tracking-wide mb-1 transition-colors group-hover:text-indigo-900">STANDARD WORKFLOW</div>
                                        <div className="text-[11px] text-slate-500">Review Required</div>
                                    </div>
                                    {isProcessing ? <PiClock className="animate-spin text-slate-400 text-xl" /> : <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-indigo-400 transition-colors"><div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-indigo-400 transition-colors"></div></div>}
                                </div>
                            </button>
                            
                            <button
                                onClick={() => handleCreateBatch(true)}
                                disabled={isProcessing}
                                className="w-full relative group border border-emerald-200 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 px-4 py-4 min-h-[72px] transition-all duration-200 text-left disabled:opacity-50 overflow-hidden shadow-sm hover:shadow"
                            >
                                <span className="absolute top-0 left-0 w-1.5 h-full bg-emerald-400 group-hover:bg-emerald-500 transition-colors"></span>
                                <div className="ml-3 flex items-center justify-between">
                                    <div>
                                        <div className="text-[12px] font-semibold text-emerald-900 tracking-wide mb-1">EXPEDITED BYPASS</div>
                                        <div className="text-[11px] text-emerald-600/80">Direct Remittance</div>
                                    </div>
                                    {isProcessing ? <PiClock className="animate-spin text-emerald-500 text-xl" /> : <div className="w-5 h-5 rounded-full border border-emerald-300 flex items-center justify-center group-hover:border-emerald-500 transition-colors"><div className="w-2.5 h-2.5 rounded-full bg-emerald-200 group-hover:bg-emerald-500 transition-colors"></div></div>}
                                </div>
                            </button>
                        </div>

                        <div className="mt-6 pt-4">
                            <button
                                onClick={() => setShowBypassModal(false)}
                                disabled={isProcessing}
                                className="w-full py-2.5 rounded-xl text-[12px] font-semibold text-slate-500 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}

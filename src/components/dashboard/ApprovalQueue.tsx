"use client";

import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/ToastProvider";
import {
    PiCheckCircle,
    PiXCircle,
    PiClock,
    PiUser,
    PiCalendar,
    PiMoney,
    PiReceipt,
    PiFileText,
    PiBuildings,
    PiEye,
    PiX,
    PiUserSwitch,
    PiPlus,
    PiSpinner,
    PiListBullets,
    PiGridFour
} from "react-icons/pi";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DelegateModal } from "@/components/workflow/DelegationEscalation";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";

interface User {
    name: string | null;
    email: string | null;
    department: string | null;
}

interface Expense {
    id: string;
    title: string;
    amount: number;
    category: string;
    merchant: string | null;
    expenseDate: Date;
    createdAt: Date;
    receiptUrl: string | null;
    user: User;
    approvals?: any[];
}

interface Requisition {
    id: string;
    title: string;
    amount: number;
    category: string;
    businessJustification: string | null;
    createdAt: Date;
    user: User;
    approvals?: any[];
}

interface MonthlyBudget {
    id: string;
    month: number;
    year: number;
    branch: string;
    department: string;
    totalAmount: number;
    createdAt: Date;
    user: User;
    approvals?: any[];
}

interface Invoice {
    id: string;
    invoiceNumber: string;
    vendor: { name: string };
    amount: number;
    currency: string;
    dueDate: Date;
    invoiceDate: Date;
    status: string;
    createdAt: Date;
    fileUrl: string | null;
    createdBy: User;
    approvals?: any[];
}

interface Approval {
    id: string;
    status: string;
    comments: string | null;
    createdAt: Date;
    expense: (Expense & { user: { name: string | null } }) | null;
    requisition: (Requisition & { user: { name: string | null } }) | null;
    monthlyBudget: (MonthlyBudget & { user: { name: string | null } }) | null;
    invoice: (Invoice & { createdBy: { name: string | null } }) | null;
}

interface ApprovalQueueProps {
    expenses: Expense[];
    requisitions: Requisition[];
    budgets: MonthlyBudget[];
    invoices: Invoice[];
    history: Approval[];
}

export function ApprovalQueue({ expenses, requisitions, budgets = [], invoices = [], history }: ApprovalQueueProps) {
    const { showToast } = useToast();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'expenses' | 'requisitions' | 'budgets' | 'invoices' | 'history'>('expenses');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [comments, setComments] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [showReceipt, setShowReceipt] = useState<string | null>(null);
    const [delegateData, setDelegateData] = useState<{ id: string; title: string } | null>(null);

    // Reset selection when tab changes to avoid state ghosting
    useEffect(() => {
        setSelectedItem(null);
        setComments("");
    }, [activeTab]);

    // Automatically switch to first tab with items
    useEffect(() => {
        if (expenses.length > 0) setActiveTab('expenses');
        else if (requisitions.length > 0) setActiveTab('requisitions');
        else if (budgets.length > 0) setActiveTab('budgets');
        else if (invoices.length > 0) setActiveTab('invoices');
    }, []); // Only on mount

    const handleApproval = async (approvalId: string, action: 'APPROVE' | 'REJECT') => {
        setIsProcessing(true);

        try {
            const response = await fetch(`/api/approvals/${approvalId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    decision: action === 'APPROVE' ? 'APPROVED' : 'REJECTED',
                    comments: comments || undefined
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to process approval');
            }

            showToast(
                data.message || `Successfully ${action.toLowerCase()}ed`,
                action === 'APPROVE' ? 'success' : 'info'
            );

            // Reset and refresh
            setSelectedItem(null);
            setComments("");
            router.refresh();

        } catch (error: any) {
            showToast(error.message || 'Failed to process approval', 'error');
        } finally {
            setIsProcessing(false);
        }
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <div className="space-y-6">
            {/* Tabs & Controls */}
            <div className="w-full mb-6">
                {/* Tabs */}
                <div className="flex bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden overflow-x-auto divide-x divide-slate-200">
                    {[
                        { id: 'expenses', label: 'Expenses', sub: 'Review Receipts', count: expenses.length },
                        { id: 'requisitions', label: 'Requisitions', sub: 'Justification Check', count: requisitions.length },
                        { id: 'budgets', label: 'Budgets', sub: 'Monthly Allocations', count: budgets.length },
                        { id: 'invoices', label: 'Invoices', sub: 'Vendor Payables', count: invoices.length },
                        { id: 'history', label: 'Ledger History', sub: 'Archived Approvals', count: history.length }
                    ].map((step) => {
                        const isActive = activeTab === step.id;
                        return (
                            <button
                                key={step.id}
                                onClick={() => setActiveTab(step.id as any)}
                                className={cn(
                                    "flex-1 min-w-[160px] flex items-center justify-between p-4 group transition-all duration-200 relative",
                                    isActive ? "bg-white text-emerald-600 border-b-2 border-emerald-600" : "bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 border-b-2 border-transparent"
                                )}
                            >
                                <div className="flex flex-col text-left">
                                     <p className="font-semibold text-[13px] tracking-tight">{step.label}</p>
                                     <p className={cn("text-[10px] mt-0.5", isActive ? "text-emerald-500" : "text-slate-400")}>{step.sub}</p>
                                </div>
                                {(step.count ?? 0) > 0 && (
                                    <span className={cn(
                                        "ml-4 px-2 py-0.5 text-[10px] min-w-[24px] text-center rounded-full font-semibold shrink-0 transition-colors",
                                        isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                                    )}>
                                        {step.count}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* View Mode & Header */}
            {activeTab !== 'history' && (
                <div className="flex items-center justify-between mt-4 mb-2 px-1">
                    <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest pl-1">
                        {activeTab} Queue
                    </h3>
                    <div className="flex items-center gap-2 bg-slate-100/50 p-1 rounded-lg border border-slate-200/50">
                        <button
                            onClick={() => setViewMode('list')}
                            className={cn(
                                "p-1.5 rounded-md transition-all shadow-sm",
                                viewMode === 'list' ? "bg-white shadow-[0_1px_3px_rgb(0,0,0,0.1)] text-slate-900" : "text-slate-400 hover:text-slate-600"
                            )}
                            title="List View"
                        >
                            <PiListBullets className="text-lg" />
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={cn(
                                "p-1.5 rounded-md transition-all shadow-sm",
                                viewMode === 'grid' ? "bg-white shadow-[0_1px_3px_rgb(0,0,0,0.1)] text-slate-900" : "text-slate-400 hover:text-slate-600"
                            )}
                            title="Grid View"
                        >
                            <PiGridFour className="text-lg" />
                        </button>
                    </div>
                </div>
            )}

            {/* Expenses Tab */}
            {activeTab === 'expenses' && (
                expenses.length === 0 ? (
                    <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                            <PiReceipt className="text-2xl text-slate-400" />
                        </div>
                        <h3 className="text-[13px] font-bold text-slate-900 tracking-wide">All Caught Up</h3>
                        <p className="text-[12px] text-slate-500 font-medium mt-1">No pending expense approvals.</p>
                    </div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {expenses.map(expense => (
                            <div key={expense.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                {/* Header */}
                                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex items-center justify-center">
                                            <img src="/checked.png" alt="Approval" className="w-8 h-8 object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{expense.category}</h3>
                                            <p className="text-xs text-gray-500">{expense.user.name || 'Unknown'}</p>
                                        </div>
                                    </div>
                                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium">
                                        Pending
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="px-4 py-4 flex-1">
                                    <div className="mb-3">
                                        <p className="text-2xl font-heading font-bold text-gray-900">
                                            {formatCurrency(expense.amount)}
                                        </p>
                                        <h4 className="text-xs font-medium text-gray-500 mt-1 line-clamp-1" title={expense.title}>{expense.title}</h4>
                                    </div>

                                    <div className="space-y-1.5">
                                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                            <PiBuildings className="text-gray-400" />
                                            {expense.user.department || 'N/A'}
                                        </p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                            <PiCalendar className="text-gray-400" />
                                            {formatDate(expense.expenseDate)}
                                        </p>
                                        {expense.merchant && (
                                            <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                                <span className="font-semibold text-gray-600">Merchant:</span> {expense.merchant}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Footer / Actions */}
                                <div className="px-4 py-3 border-t border-gray-200 mt-auto bg-gray-50/30">
                                    {selectedItem === expense.id ? (
                                        <div className="space-y-3">
                                            <textarea
                                                value={comments}
                                                onChange={(e) => setComments(e.target.value)}
                                                placeholder="Add review notes..."
                                                rows={2}
                                                className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#29258D]"
                                                autoFocus
                                            />
                                            <div className="grid grid-cols-2 gap-2">
                                                <button
                                                    onClick={() => handleApproval((expense as any).approvalId, 'APPROVE')}
                                                    disabled={isProcessing}
                                                    className="py-2 bg-[#29258D] text-white text-xs font-bold rounded-md hover:bg-[#29258D]/90 transition-all flex items-center justify-center gap-1"
                                                >
                                                    {isProcessing ? <PiSpinner className="animate-spin" /> : <PiCheckCircle />} Approve
                                                </button>
                                                <button
                                                    onClick={() => handleApproval((expense as any).approvalId, 'REJECT')}
                                                    disabled={isProcessing}
                                                    className="py-2 bg-white border border-rose-200 text-rose-600 text-xs font-bold rounded-md hover:bg-rose-50 transition-all flex items-center justify-center gap-1"
                                                >
                                                    {isProcessing ? <PiSpinner className="animate-spin" /> : <PiXCircle />} Reject
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => { setSelectedItem(null); setComments(""); }}
                                                className="w-full text-center text-xs text-gray-400 hover:text-gray-600 py-1"
                                            >
                                                Cancel Review
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            {expense.receiptUrl && (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setShowReceipt(expense.receiptUrl); }}
                                                    className="w-full py-1.5 text-xs font-bold text-[#29258D] hover:bg-indigo-50 rounded-md transition-colors flex items-center justify-center gap-1"
                                                >
                                                    <PiEye /> View Receipt
                                                </button>
                                            )}
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setSelectedItem(expense.id)}
                                                    className="flex-1 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-md hover:bg-gray-50 transition-colors"
                                                >
                                                    Review
                                                </button>
                                                <button
                                                    onClick={() => setDelegateData({ id: (expense as any).approvalId, title: expense.title })}
                                                    className="px-3 py-2 bg-white border border-gray-200 text-gray-400 hover:text-[#29258D] rounded-md transition-colors"
                                                    title="Delegate"
                                                >
                                                    <PiUserSwitch className="text-lg" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-x-auto animate-fade-in">
                            <table className="w-full text-left text-[12px] whitespace-nowrap min-w-[800px] border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                    <tr>
                                        <th className="px-4 py-3 w-28 text-left">Date</th>
                                        <th className="px-4 py-3 text-left">Category</th>
                                        <th className="px-4 py-3 text-left">Originator</th>
                                        <th className="px-4 py-3 w-32 text-right">Amount</th>
                                        <th className="px-4 py-3 w-40 text-right bg-slate-50">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {expenses.map(expense => (
                                        <Fragment key={expense.id}>
                                            <tr className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-4 py-3 text-slate-500">{formatDate(expense.createdAt)}</td>
                                                <td className="px-4 py-3 font-medium text-slate-800">{expense.category}
                                                    {expense.receiptUrl && (
                                                        <button onClick={(e) => { e.stopPropagation(); setShowReceipt(expense.receiptUrl!); }} className="ml-2 px-1.5 py-0.5 rounded text-[9px] font-bold text-[#29258D] bg-indigo-50 hover:bg-indigo-100 transition-colors border border-indigo-100">📄 Receipt</button>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-500">
                                                            <PiUser />
                                                        </span>
                                                        <div>
                                                            <p className="font-medium text-slate-800 tracking-wide">{expense.user.name || 'Unknown'}</p>
                                                            <p className="text-[10px] text-slate-400 tracking-wider mt-0.5">{expense.user.department || 'N/A'}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">{formatCurrency(expense.amount)}</td>
                                                <td className="px-4 py-3 align-middle group-hover:bg-slate-50 transition-colors">
                                                    <div className="flex flex-wrap items-center justify-end gap-1.5 h-full">
                                                        <button onClick={() => setSelectedItem(selectedItem === expense.id ? null : expense.id)} className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 transition-colors shadow-sm bg-slate-50">
                                                            {selectedItem === expense.id ? 'CLOSE' : 'REVIEW'}
                                                        </button>
                                                        <button onClick={() => setDelegateData({ id: (expense as any).approvalId, title: expense.title })} title="Delegate" className="px-2 py-1.5 rounded-lg text-lg border border-slate-200 text-slate-400 hover:text-[#29258D] hover:bg-white transition-colors shadow-sm bg-slate-50">
                                                            <PiUserSwitch />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            {selectedItem === expense.id && (
                                                <tr key={`review-${expense.id}`} className="bg-slate-50/50 border-b border-t border-slate-100">
                                                    <td colSpan={5} className="px-6 py-4">
                                                        <div className="flex flex-col gap-3 w-full">
                                                            {expense.approvals && expense.approvals.length > 0 && expense.approvals[0].comments && (
                                                                <div className="bg-orange-50/50 border border-orange-100 rounded-lg p-3 w-full">
                                                                    <p className="text-xs text-orange-800 font-medium italic">
                                                                        "{expense.approvals[0].comments}"
                                                                    </p>
                                                                    <p className="text-[10px] text-orange-600/70 font-bold uppercase tracking-wider mt-1.5">
                                                                        — {expense.approvals[0].approver?.name || 'Previous Reviewer'} {expense.approvals[0].approver?.role ? `(${expense.approvals[0].approver.role.replace('_', ' ')})` : ''}
                                                                    </p>
                                                                </div>
                                                            )}
                                                            <div className="flex gap-4 items-start w-full">
                                                                <div className="flex-1">
                                                                <textarea
                                                                    value={comments}
                                                                    onChange={(e) => setComments(e.target.value)}
                                                                    placeholder="Add review notes or justification..."
                                                                    rows={1}
                                                                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#29258D] shadow-sm resize-none"
                                                                    autoFocus
                                                                />
                                                            </div>
                                                            <div className="flex gap-2 shrink-0">
                                                                <button onClick={() => { setSelectedItem(null); setComments(""); }} disabled={isProcessing} className="py-2.5 px-4 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-slate-50 transition-all flex hidden md:block">Cancel</button>
                                                                <button onClick={() => handleApproval((expense as any).approvalId, 'REJECT')} disabled={isProcessing} className="py-2.5 px-4 bg-white border border-rose-200 text-rose-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-rose-50 transition-all flex items-center gap-1.5">{isProcessing ? <PiSpinner className="animate-spin text-sm" /> : <PiXCircle className="text-sm" />} Reject</button>
                                                                <button onClick={() => handleApproval((expense as any).approvalId, 'APPROVE')} disabled={isProcessing} className="py-2.5 px-4 bg-[#29258D] border border-transparent text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-900 transition-all flex items-center gap-1.5 shadow-sm">{isProcessing ? <PiSpinner className="animate-spin text-sm" /> : <PiCheckCircle className="text-sm" />} Approve</button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                )
            )}

            {/* Requisitions Tab */}
            {activeTab === 'requisitions' && (
                requisitions.length === 0 ? (
                    <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                            <PiFileText className="text-2xl text-slate-400" />
                        </div>
                        <h3 className="text-[13px] font-bold text-slate-900 tracking-wide">All Caught Up</h3>
                        <p className="text-[12px] text-slate-500 font-medium mt-1">No pending requisition approvals.</p>
                    </div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {requisitions.map(req => (
                            <div key={req.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                {/* Header */}
                                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex items-center justify-center">
                                            <img src="/checked.png" alt="Approval" className="w-8 h-8 object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{req.category}</h3>
                                            <p className="text-xs text-gray-500">{req.user.name || 'Unknown'}</p>
                                        </div>
                                    </div>
                                    <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-xs font-medium">
                                        Pending
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="px-4 py-4 flex-1">
                                    <div className="mb-3">
                                        <p className="text-2xl font-heading font-bold text-gray-900">
                                            {formatCurrency(req.amount)}
                                        </p>
                                        <h4 className="text-xs font-medium text-gray-500 mt-1 line-clamp-1" title={req.title}>{req.title}</h4>
                                    </div>

                                    <div className="space-y-1.5">
                                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                            <PiCalendar className="text-gray-400" />
                                            {formatDate(req.createdAt)}
                                        </p>
                                        {req.businessJustification && (
                                            <p className="text-xs text-gray-500 italic mt-2 bg-gray-50 p-2 rounded border border-gray-100 line-clamp-2">
                                                "{req.businessJustification}"
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-4 py-3 border-t border-gray-200 mt-auto bg-gray-50/30">
                                    {selectedItem === req.id ? (
                                        <div className="space-y-3">
                                            <textarea
                                                value={comments}
                                                onChange={(e) => setComments(e.target.value)}
                                                placeholder="Add review notes..."
                                                rows={2}
                                                className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#29258D]"
                                                autoFocus
                                            />
                                            <div className="grid grid-cols-2 gap-2">
                                                <button
                                                    onClick={() => handleApproval((req as any).approvalId, 'APPROVE')}
                                                    disabled={isProcessing}
                                                    className="py-2 bg-[#29258D] text-white text-xs font-bold rounded-md hover:bg-[#29258D]/90 transition-all flex items-center justify-center gap-1"
                                                >
                                                    {isProcessing ? <PiSpinner className="animate-spin" /> : <PiCheckCircle />} Approve
                                                </button>
                                                <button
                                                    onClick={() => handleApproval((req as any).approvalId, 'REJECT')}
                                                    disabled={isProcessing}
                                                    className="py-2 bg-white border border-rose-200 text-rose-600 text-xs font-bold rounded-md hover:bg-rose-50 transition-all flex items-center justify-center gap-1"
                                                >
                                                    {isProcessing ? <PiSpinner className="animate-spin" /> : <PiXCircle />} Reject
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => { setSelectedItem(null); setComments(""); }}
                                                className="w-full text-center text-xs text-gray-400 hover:text-gray-600 py-1"
                                            >
                                                Cancel Review
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setSelectedItem(req.id)}
                                                className="flex-1 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-md hover:bg-gray-50 transition-colors"
                                            >
                                                Review
                                            </button>
                                            <button
                                                onClick={() => setDelegateData({ id: (req as any).approvalId, title: req.title })}
                                                className="px-3 py-2 bg-white border border-gray-200 text-gray-400 hover:text-[#29258D] rounded-md transition-colors"
                                                title="Delegate"
                                            >
                                                <PiUserSwitch className="text-lg" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-x-auto animate-fade-in">
                            <table className="w-full text-left text-[12px] whitespace-nowrap min-w-[800px] border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                    <tr>
                                        <th className="px-4 py-3 w-28 text-left">Date</th>
                                        <th className="px-4 py-3 text-left">Category</th>
                                        <th className="px-4 py-3 text-left">Originator</th>
                                        <th className="px-4 py-3 w-32 text-right">Amount</th>
                                        <th className="px-4 py-3 w-40 text-right bg-slate-50">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {requisitions.map(req => (
                                        <Fragment key={req.id}>
                                            <tr className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-4 py-3 text-slate-500">{formatDate(req.createdAt)}</td>
                                                <td className="px-4 py-3 font-medium text-slate-800">{req.category}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-500">
                                                            <PiUser />
                                                        </span>
                                                        <div>
                                                            <p className="font-medium text-slate-800 tracking-wide">{req.user.name || 'Unknown'}</p>
                                                            <p className="text-[10px] text-slate-400 tracking-wider mt-0.5">{req.user.department || 'N/A'}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">{formatCurrency(req.amount)}</td>
                                                <td className="px-4 py-3 align-middle group-hover:bg-slate-50 transition-colors">
                                                    <div className="flex flex-wrap items-center justify-end gap-1.5 h-full">
                                                        <button onClick={() => setSelectedItem(selectedItem === req.id ? null : req.id)} className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 transition-colors shadow-sm bg-slate-50">
                                                            {selectedItem === req.id ? 'CLOSE' : 'REVIEW'}
                                                        </button>
                                                        <button onClick={() => setDelegateData({ id: (req as any).approvalId, title: req.title })} title="Delegate" className="px-2 py-1.5 rounded-lg text-lg border border-slate-200 text-slate-400 hover:text-[#29258D] hover:bg-white transition-colors shadow-sm bg-slate-50">
                                                            <PiUserSwitch />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            {selectedItem === req.id && (
                                                <tr key={`review-${req.id}`} className="bg-slate-50/50 border-b border-t border-slate-100">
                                                    <td colSpan={5} className="px-6 py-4">
                                                        <div className="flex flex-col gap-3 w-full">
                                                            {req.approvals && req.approvals.length > 0 && req.approvals[0].comments && (
                                                                <div className="bg-orange-50/50 border border-orange-100 rounded-lg p-3 w-full">
                                                                    <p className="text-xs text-orange-800 font-medium italic">
                                                                        "{req.approvals[0].comments}"
                                                                    </p>
                                                                    <p className="text-[10px] text-orange-600/70 font-bold uppercase tracking-wider mt-1.5">
                                                                        — {req.approvals[0].approver?.name || 'Previous Reviewer'} {req.approvals[0].approver?.role ? `(${req.approvals[0].approver.role.replace('_', ' ')})` : ''}
                                                                    </p>
                                                                </div>
                                                            )}
                                                            <div className="flex gap-4 items-start w-full">
                                                                <div className="flex-1">
                                                                <textarea
                                                                    value={comments}
                                                                    onChange={(e) => setComments(e.target.value)}
                                                                    placeholder="Add review notes or justification..."
                                                                    rows={1}
                                                                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#29258D] shadow-sm resize-none"
                                                                    autoFocus
                                                                />
                                                            </div>
                                                            <div className="flex gap-2 shrink-0">
                                                                <button onClick={() => { setSelectedItem(null); setComments(""); }} disabled={isProcessing} className="py-2.5 px-4 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-slate-50 transition-all flex hidden md:block">Cancel</button>
                                                                <button onClick={() => handleApproval((req as any).approvalId, 'REJECT')} disabled={isProcessing} className="py-2.5 px-4 bg-white border border-rose-200 text-rose-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-rose-50 transition-all flex items-center gap-1.5">{isProcessing ? <PiSpinner className="animate-spin text-sm" /> : <PiXCircle className="text-sm" />} Reject</button>
                                                                <button onClick={() => handleApproval((req as any).approvalId, 'APPROVE')} disabled={isProcessing} className="py-2.5 px-4 bg-[#29258D] border border-transparent text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-900 transition-all flex items-center gap-1.5 shadow-sm">{isProcessing ? <PiSpinner className="animate-spin text-sm" /> : <PiCheckCircle className="text-sm" />} Approve</button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                )
            )}

            {/* Budgets Tab */}
            {activeTab === 'budgets' && (
                budgets.length === 0 ? (
                    <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                            <PiCalendar className="text-2xl text-slate-400" />
                        </div>
                        <h3 className="text-[13px] font-bold text-slate-900 tracking-wide">All Caught Up</h3>
                        <p className="text-[12px] text-slate-500 font-medium mt-1">No pending budget approvals.</p>
                    </div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {budgets.map(budget => {
                            const months = [
                                "January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ];
                            const title = `${months[budget.month - 1]} ${budget.year} Budget Plan`;

                            return (
                                <div key={budget.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                    {/* Header */}
                                    <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex items-center justify-center">
                                                <img src="/checked.png" alt="Approval" className="w-8 h-8 object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">MONTHLY PLAN</h3>
                                                <p className="text-xs text-gray-500">{budget.user.name || 'Unknown'}</p>
                                            </div>
                                        </div>
                                        <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium">
                                            Pending
                                        </span>
                                    </div>

                                    {/* Body */}
                                    <div className="px-4 py-4 flex-1">
                                        <div className="mb-3">
                                            <p className="text-2xl font-heading font-bold text-gray-900">
                                                {formatCurrency(budget.totalAmount)}
                                            </p>
                                            <h4 className="text-xs font-medium text-gray-500 mt-1 line-clamp-1" title={title}>{title}</h4>
                                        </div>

                                        <div className="space-y-1.5">
                                            <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                                <PiBuildings className="text-gray-400" />
                                                {budget.branch} • {budget.department}
                                            </p>
                                            <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                                <PiCalendar className="text-gray-400" />
                                                {formatDate(budget.createdAt)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="px-4 py-3 border-t border-gray-200 mt-auto bg-gray-50/30">
                                        {selectedItem === budget.id ? (
                                            <div className="space-y-3">
                                                <textarea
                                                    value={comments}
                                                    onChange={(e) => setComments(e.target.value)}
                                                    placeholder="Add review notes..."
                                                    rows={2}
                                                    className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#29258D]"
                                                    autoFocus
                                                />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        onClick={() => handleApproval((budget as any).approvalId, 'APPROVE')}
                                                        disabled={isProcessing}
                                                        className="py-2 bg-[#29258D] text-white text-xs font-bold rounded-md hover:bg-[#29258D]/90 transition-all flex items-center justify-center gap-1"
                                                    >
                                                        {isProcessing ? <PiSpinner className="animate-spin" /> : <PiCheckCircle />} Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handleApproval((budget as any).approvalId, 'REJECT')}
                                                        disabled={isProcessing}
                                                        className="py-2 bg-white border border-rose-200 text-rose-600 text-xs font-bold rounded-md hover:bg-rose-50 transition-all flex items-center justify-center gap-1"
                                                    >
                                                        {isProcessing ? <PiSpinner className="animate-spin" /> : <PiXCircle />} Reject
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => { setSelectedItem(null); setComments(""); }}
                                                    className="w-full text-center text-xs text-gray-400 hover:text-gray-600 py-1"
                                                >
                                                    Cancel Review
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setSelectedItem(budget.id)}
                                                    className="flex-1 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-md hover:bg-gray-50 transition-colors"
                                                >
                                                    Review
                                                </button>
                                                <button
                                                    onClick={() => setDelegateData({ id: (budget as any).approvalId, title })}
                                                    className="px-3 py-2 bg-white border border-gray-200 text-gray-400 hover:text-[#29258D] rounded-md transition-colors"
                                                    title="Delegate"
                                                >
                                                    <PiUserSwitch className="text-lg" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-x-auto animate-fade-in">
                            <table className="w-full text-left text-[12px] whitespace-nowrap min-w-[800px] border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                    <tr>
                                        <th className="px-4 py-3 w-28 text-left">Date</th>
                                        <th className="px-4 py-3 text-left">Month</th>
                                        <th className="px-4 py-3 text-left">Originator & Branch</th>
                                        <th className="px-4 py-3 w-32 text-right">Amount</th>
                                        <th className="px-4 py-3 w-40 text-right bg-slate-50">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {budgets.map(budget => {
                                        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                                        const title = `${months[budget.month - 1]} ${budget.year} Budget Plan`;
                                        return (
                                            <Fragment key={budget.id}>
                                                <tr className="hover:bg-slate-50 transition-colors group">
                                                    <td className="px-4 py-3 text-slate-500">{formatDate(budget.createdAt)}</td>
                                                    <td className="px-4 py-3 font-medium text-slate-800">{title}</td>
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-500">
                                                                <PiUser />
                                                            </span>
                                                            <div>
                                                                <p className="font-medium text-slate-800 tracking-wide">{budget.user.name || 'Unknown'}</p>
                                                                <p className="text-[10px] text-slate-400 tracking-wider mt-0.5">{budget.branch} • {budget.department}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">{formatCurrency(budget.totalAmount)}</td>
                                                    <td className="px-4 py-3 align-middle group-hover:bg-slate-50 transition-colors">
                                                        <div className="flex flex-wrap items-center justify-end gap-1.5 h-full">
                                                            <button onClick={() => setSelectedItem(selectedItem === budget.id ? null : budget.id)} className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 transition-colors shadow-sm bg-slate-50">
                                                                {selectedItem === budget.id ? 'CLOSE' : 'REVIEW'}
                                                            </button>
                                                            <button onClick={() => setDelegateData({ id: (budget as any).approvalId, title })} title="Delegate" className="px-2 py-1.5 rounded-lg text-lg border border-slate-200 text-slate-400 hover:text-[#29258D] hover:bg-white transition-colors shadow-sm bg-slate-50">
                                                                <PiUserSwitch />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {selectedItem === budget.id && (
                                                    <tr key={`review-${budget.id}`} className="bg-slate-50/50 border-b border-t border-slate-100">
                                                        <td colSpan={5} className="px-6 py-4">
                                                            <div className="flex flex-col gap-3 w-full">
                                                                {budget.approvals && budget.approvals.length > 0 && budget.approvals[0].comments && (
                                                                    <div className="bg-orange-50/50 border border-orange-100 rounded-lg p-3 w-full">
                                                                        <p className="text-xs text-orange-800 font-medium italic">
                                                                            "{budget.approvals[0].comments}"
                                                                        </p>
                                                                        <p className="text-[10px] text-orange-600/70 font-bold uppercase tracking-wider mt-1.5">
                                                                            — {budget.approvals[0].approver?.name || 'Previous Reviewer'} {budget.approvals[0].approver?.role ? `(${budget.approvals[0].approver.role.replace('_', ' ')})` : ''}
                                                                        </p>
                                                                    </div>
                                                                )}
                                                                <div className="flex gap-4 items-start w-full">
                                                                    <div className="flex-1">
                                                                    <textarea
                                                                        value={comments}
                                                                        onChange={(e) => setComments(e.target.value)}
                                                                        placeholder="Add review notes or justification..."
                                                                        rows={1}
                                                                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#29258D] shadow-sm resize-none"
                                                                        autoFocus
                                                                    />
                                                                </div>
                                                                <div className="flex gap-2 shrink-0">
                                                                    <button onClick={() => { setSelectedItem(null); setComments(""); }} disabled={isProcessing} className="py-2.5 px-4 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-slate-50 transition-all flex hidden md:block">Cancel</button>
                                                                    <button onClick={() => handleApproval((budget as any).approvalId, 'REJECT')} disabled={isProcessing} className="py-2.5 px-4 bg-white border border-rose-200 text-rose-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-rose-50 transition-all flex items-center gap-1.5">{isProcessing ? <PiSpinner className="animate-spin text-sm" /> : <PiXCircle className="text-sm" />} Reject</button>
                                                                    <button onClick={() => handleApproval((budget as any).approvalId, 'APPROVE')} disabled={isProcessing} className="py-2.5 px-4 bg-[#29258D] border border-transparent text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-900 transition-all flex items-center gap-1.5 shadow-sm">{isProcessing ? <PiSpinner className="animate-spin text-sm" /> : <PiCheckCircle className="text-sm" />} Approve</button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </Fragment>
                                        );
                                    })}
                                </tbody>
                            </table>
                    </div>
                )
            )}

            {/* Invoices Tab */}
            {activeTab === 'invoices' && (
                invoices.length === 0 ? (
                    <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                            <PiBuildings className="text-2xl text-slate-400" />
                        </div>
                        <h3 className="text-[13px] font-bold text-slate-900 tracking-wide">All Caught Up</h3>
                        <p className="text-[12px] text-slate-500 font-medium mt-1">No pending invoice approvals.</p>
                    </div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {invoices.map(invoice => (
                            <div key={invoice.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                {/* Header */}
                                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex items-center justify-center">
                                            <img src="/checked.png" alt="Approval" className="w-8 h-8 object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{invoice.status.replace(/_/g, ' ')}</h3>
                                            <p className="text-xs text-gray-500">{invoice.createdBy.name || 'Unknown'}</p>
                                        </div>
                                    </div>
                                    <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-xs font-medium">
                                        Pending
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="px-4 py-4 flex-1">
                                    <div className="mb-3">
                                        <p className="text-2xl font-heading font-bold text-gray-900">
                                            {formatCurrency(invoice.amount)}
                                        </p>
                                        <h4 className="text-xs font-medium text-gray-500 mt-1 line-clamp-1" title={invoice.vendor.name}>{invoice.vendor.name}</h4>
                                    </div>

                                    <div className="space-y-1.5">
                                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                            <span className="font-semibold text-gray-600">Inv:</span> {invoice.invoiceNumber}
                                        </p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                            <PiCalendar className="text-gray-400" />
                                            Due: {formatDate(invoice.dueDate)}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-4 py-3 border-t border-gray-200 mt-auto bg-gray-50/30">
                                    {selectedItem === invoice.id ? (
                                        <div className="space-y-3">
                                            <textarea
                                                value={comments}
                                                onChange={(e) => setComments(e.target.value)}
                                                placeholder="Add review notes..."
                                                rows={2}
                                                className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#29258D]"
                                                autoFocus
                                            />
                                            <div className="grid grid-cols-2 gap-2">
                                                <button
                                                    onClick={() => handleApproval((invoice as any).approvalId, 'APPROVE')}
                                                    disabled={isProcessing}
                                                    className="py-2 bg-[#29258D] text-white text-xs font-bold rounded-md hover:bg-[#29258D]/90 transition-all flex items-center justify-center gap-1"
                                                >
                                                    {isProcessing ? <PiSpinner className="animate-spin" /> : <PiCheckCircle />} Approve
                                                </button>
                                                <button
                                                    onClick={() => handleApproval((invoice as any).approvalId, 'REJECT')}
                                                    disabled={isProcessing}
                                                    className="py-2 bg-white border border-rose-200 text-rose-600 text-xs font-bold rounded-md hover:bg-rose-50 transition-all flex items-center justify-center gap-1"
                                                >
                                                    {isProcessing ? <PiSpinner className="animate-spin" /> : <PiXCircle />} Reject
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => { setSelectedItem(null); setComments(""); }}
                                                className="w-full text-center text-xs text-gray-400 hover:text-gray-600 py-1"
                                            >
                                                Cancel Review
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            {invoice.fileUrl && (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); window.open(invoice.fileUrl!, '_blank'); }}
                                                    className="w-full py-1.5 text-xs font-bold text-[#29258D] hover:bg-indigo-50 rounded-md transition-colors flex items-center justify-center gap-1"
                                                >
                                                    <PiEye /> View Invoice
                                                </button>
                                            )}
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setSelectedItem(invoice.id)}
                                                    className="flex-1 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-md hover:bg-gray-50 transition-colors"
                                                >
                                                    Review
                                                </button>
                                                <button
                                                    onClick={() => setDelegateData({ id: (invoice as any).approvalId, title: invoice.vendor.name })}
                                                    className="px-3 py-2 bg-white border border-gray-200 text-gray-400 hover:text-[#29258D] rounded-md transition-colors"
                                                    title="Delegate"
                                                >
                                                    <PiUserSwitch className="text-lg" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-x-auto animate-fade-in">
                            <table className="w-full text-left text-[12px] whitespace-nowrap min-w-[800px] border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                                    <tr>
                                        <th className="px-4 py-3 w-28 text-left">Due Date</th>
                                        <th className="px-4 py-3 text-left">Invoice # / Vendor</th>
                                        <th className="px-4 py-3 text-left">Originator</th>
                                        <th className="px-4 py-3 w-32 text-right">Amount</th>
                                        <th className="px-4 py-3 w-40 text-right bg-slate-50">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {invoices.map(invoice => (
                                        <Fragment key={invoice.id}>
                                            <tr className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-4 py-3 text-slate-500">{formatDate(invoice.dueDate)}</td>
                                                <td className="px-4 py-3 font-medium text-slate-800">
                                                    <div>
                                                        <p className="font-bold">{invoice.invoiceNumber}</p>
                                                        <p className="text-[10px] text-slate-500">{invoice.vendor.name}</p>
                                                    </div>
                                                    {invoice.fileUrl && (
                                                        <button onClick={(e) => { e.stopPropagation(); window.open(invoice.fileUrl!, '_blank'); }} className="mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold text-[#29258D] bg-indigo-50 hover:bg-indigo-100 transition-colors border border-indigo-100 inline-block">📄 View File</button>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-500">
                                                            <PiUser />
                                                        </span>
                                                        <p className="font-medium text-slate-800 tracking-wide">{invoice.createdBy.name || 'Unknown'}</p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">{formatCurrency(invoice.amount)}</td>
                                                <td className="px-4 py-3 align-middle group-hover:bg-slate-50 transition-colors">
                                                    <div className="flex flex-wrap items-center justify-end gap-1.5 h-full">
                                                        <button onClick={() => setSelectedItem(selectedItem === invoice.id ? null : invoice.id)} className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 transition-colors shadow-sm bg-slate-50">
                                                            {selectedItem === invoice.id ? 'CLOSE' : 'REVIEW'}
                                                        </button>
                                                        <button onClick={() => setDelegateData({ id: (invoice as any).approvalId, title: invoice.vendor.name })} title="Delegate" className="px-2 py-1.5 rounded-lg text-lg border border-slate-200 text-slate-400 hover:text-[#29258D] hover:bg-white transition-colors shadow-sm bg-slate-50">
                                                            <PiUserSwitch />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            {selectedItem === invoice.id && (
                                                <tr key={`review-${invoice.id}`} className="bg-slate-50/50 border-b border-t border-slate-100">
                                                    <td colSpan={5} className="px-6 py-4">
                                                        <div className="flex flex-col gap-3 w-full">
                                                            {invoice.approvals && invoice.approvals.length > 0 && invoice.approvals[0].comments && (
                                                                <div className="bg-orange-50/50 border border-orange-100 rounded-lg p-3 w-full">
                                                                    <p className="text-xs text-orange-800 font-medium italic">
                                                                        "{invoice.approvals[0].comments}"
                                                                    </p>
                                                                    <p className="text-[10px] text-orange-600/70 font-bold uppercase tracking-wider mt-1.5">
                                                                        — {invoice.approvals[0].approver?.name || 'Previous Reviewer'} {invoice.approvals[0].approver?.role ? `(${invoice.approvals[0].approver.role.replace('_', ' ')})` : ''}
                                                                    </p>
                                                                </div>
                                                            )}
                                                            <div className="flex gap-4 items-start w-full">
                                                                <div className="flex-1">
                                                                <textarea
                                                                    value={comments}
                                                                    onChange={(e) => setComments(e.target.value)}
                                                                    placeholder="Add review notes or justification..."
                                                                    rows={1}
                                                                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#29258D] shadow-sm resize-none"
                                                                    autoFocus
                                                                />
                                                            </div>
                                                            <div className="flex gap-2 shrink-0">
                                                                <button onClick={() => { setSelectedItem(null); setComments(""); }} disabled={isProcessing} className="py-2.5 px-4 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-slate-50 transition-all flex hidden md:block">Cancel</button>
                                                                <button onClick={() => handleApproval((invoice as any).approvalId, 'REJECT')} disabled={isProcessing} className="py-2.5 px-4 bg-white border border-rose-200 text-rose-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-rose-50 transition-all flex items-center gap-1.5">{isProcessing ? <PiSpinner className="animate-spin text-sm" /> : <PiXCircle className="text-sm" />} Reject</button>
                                                                <button onClick={() => handleApproval((invoice as any).approvalId, 'APPROVE')} disabled={isProcessing} className="py-2.5 px-4 bg-[#29258D] border border-transparent text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-900 transition-all flex items-center gap-1.5 shadow-sm">{isProcessing ? <PiSpinner className="animate-spin text-sm" /> : <PiCheckCircle className="text-sm" />} Approve</button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                )
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
                <Card className="overflow-hidden">
                    <CardHeader className="bg-gray-50 border-b border-gray-100">
                        <CardTitle className="text-sm font-bold text-gray-900 flex items-center gap-2">
                            Approval History
                        </CardTitle>
                    </CardHeader>
                    <div className="divide-y divide-gray-50">
                        {history.length === 0 ? (
                            <div className="p-12 text-center text-gray-400 text-xs font-medium italic">
                                No history found
                            </div>
                        ) : (
                            history.map(approval => {
                                const months = [
                                    "January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                ];

                                return (
                                    <div
                                        key={approval.id}
                                        className="flex items-center justify-between p-4 hover:bg-gray-50/50 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900 text-xs">
                                                {approval.expense?.title ||
                                                    approval.requisition?.title ||
                                                    (approval.monthlyBudget && `${months[approval.monthlyBudget.month - 1]} ${approval.monthlyBudget.year} Budget Plan`) ||
                                                    (approval.invoice && `Invoice: ${approval.invoice.invoiceNumber}`) ||
                                                    'Deleted Item'}
                                            </p>
                                            <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-wider">
                                                {approval.expense ? 'Expense' : approval.requisition ? 'Requisition' : approval.monthlyBudget ? 'Monthly Budget' : 'Invoice'} • {formatDate(approval.createdAt)}
                                                {approval.comments && <span className="text-gray-900 ml-1 font-bold italic tracking-normal normal-case">• "{approval.comments}"</span>}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {approval.expense?.receiptUrl && (
                                                <button
                                                    onClick={() => setShowReceipt(approval.expense!.receiptUrl)}
                                                    className="text-[10px] font-bold text-[#29258D] hover:underline flex items-center gap-1"
                                                >
                                                    <PiEye className="text-sm" />
                                                    View
                                                </button>
                                            )}
                                            <span className={cn(
                                                "px-2 py-0.5 rounded text-[9px] font-bold uppercase border tracking-widest",
                                                approval.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'
                                            )}>
                                                {approval.status}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </Card>
            )}

            {/* Receipt Modal Overlay */}
            {showReceipt && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
                    <Card className="max-w-2xl w-full relative animate-scale-in overflow-hidden shadow-2xl bg-white">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                                        <PiReceipt className="text-xl text-[#29258D]" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900">Expense Evidence</h3>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Document Registry • Verified</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowReceipt(null)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-400 hover:text-gray-900"
                                >
                                    <PiX className="text-xl" />
                                </button>
                            </div>

                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
                                <Image
                                    src={showReceipt}
                                    alt="Receipt Evidence"
                                    fill
                                    className="object-contain p-4"
                                    unoptimized
                                />
                            </div>

                            <div className="mt-6 flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest truncate max-w-[70%]">
                                    REF: {showReceipt.split('/').pop()}
                                </p>
                                <button
                                    onClick={() => window.open(showReceipt, '_blank')}
                                    className="text-[10px] font-bold text-[#29258D] hover:underline uppercase tracking-widest"
                                >
                                    Open Original
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {/* Delegation Modal */}
            {delegateData && (
                <DelegateModal
                    approvalId={delegateData.id}
                    itemTitle={delegateData.title}
                    onClose={() => setDelegateData(null)}
                    onSuccess={() => {
                        showToast("Approval delegated successfully", "success");
                        router.refresh();
                    }}
                />
            )}
        </div>
    );
}

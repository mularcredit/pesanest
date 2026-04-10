"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { RequisitionItemActions } from "@/components/requisitions/RequisitionItemActions";
import {
    PiCaretLeft,
    PiCheckCircle,
    PiXCircle,
    PiClock,
    PiBuilding,
    PiTag,
    PiCalendar,
    PiCurrencyDollar,
    PiReceipt,
    PiUser,
    PiStorefront,
    PiCreditCard,
    PiArrowsClockwise,
    PiFileText,
} from "react-icons/pi";

function formatCurrency(amount: number, currency: string = "USD") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}

function StatusBadge({ status }: { status: string }) {
    const s = status.toUpperCase();
    const styles: Record<string, string> = {
        APPROVED: "bg-emerald-50 text-emerald-700 border-emerald-200",
        PAID: "bg-emerald-50 text-emerald-700 border-emerald-200",
        FULFILLED: "bg-emerald-50 text-emerald-700 border-emerald-200",
        PENDING: "bg-amber-50 text-amber-700 border-amber-200",
        REJECTED: "bg-red-50 text-red-700 border-red-200",
        CLOSED: "bg-gray-100 text-gray-600 border-gray-200",
    };
    return (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${styles[s] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
            {status}
        </span>
    );
}

function PaymentMethodLabel({ method }: { method?: string | null }) {
    const labels: Record<string, { label: string; color: string }> = {
        MPESA_TILL: { label: "M-Pesa Till", color: "text-green-700 bg-green-50 border-green-200" },
        MPESA_PAYBILL: { label: "M-Pesa Paybill", color: "text-green-700 bg-green-50 border-green-200" },
        BANK_TRANSFER: { label: "Bank Transfer", color: "text-blue-700 bg-blue-50 border-blue-200" },
        AIRTEL_MONEY: { label: "Airtel Money", color: "text-red-700 bg-red-50 border-red-200" },
        CASH: { label: "Cash", color: "text-gray-700 bg-gray-50 border-gray-200" },
        CHEQUE: { label: "Cheque", color: "text-purple-700 bg-purple-50 border-purple-200" },
    };
    if (!method) return <span className="text-gray-400 text-sm">Not specified</span>;
    const m = labels[method] ?? { label: method, color: "text-gray-700 bg-gray-50 border-gray-200" };
    return (
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${m.color}`}>
            {m.label}
        </span>
    );
}

export default async function RequisitionDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const session = await auth();
    if (!session?.user?.id) redirect("/login");

    const req = await (prisma as any).requisition.findUnique({
        where: { id },
        include: {
            user: { select: { id: true, name: true, email: true, department: true } },
            items: { orderBy: { createdAt: "asc" } },
            approvals: {
                include: { approver: { select: { name: true, role: true } } },
                orderBy: { level: "asc" },
            },
        },
    });

    if (!req) notFound();

    // Only allow: owner or SYSTEM_ADMIN / FINANCE roles
    const userRole = (session.user as any).role;
    const isOwner = req.userId === session.user.id;
    const isPrivileged = ["SYSTEM_ADMIN", "FINANCE_APPROVER", "FINANCE_TEAM", "MANAGER", "TEAM_LEADER"].includes(userRole);
    if (!isOwner && !isPrivileged) redirect("/dashboard/requisitions");

    // Parse payment method out of description if not stored as a field
    const paymentMethod = req.paymentMethod ?? null;
    const paymentReference = req.paymentReference ?? null;

    // Parse vendor from description fallback
    const vendorMatch = req.description?.match(/\*\*Preferred Vendor:\*\* (.+)/);
    const vendorFromDesc = vendorMatch ? vendorMatch[1].split("\n")[0] : null;
    const vendor = req.vendor || vendorFromDesc;

    return (
        <div className="max-w-4xl mx-auto pb-32 pt-4">
            {/* Back action */}
            <div className="mb-6">
                <Link
                    href="/dashboard/requisitions"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-widest"
                >
                    <PiCaretLeft className="text-lg" />
                    Back to Requisitions
                </Link>
            </div>

            {/* The Document Canvas */}
            <div className="bg-white shadow-[0_2px_15px_-3px_rgba(6,81,237,0.1)] border border-slate-200 rounded-sm text-slate-800 overflow-hidden">
                
                {/* Header Section */}
                <div className="px-10 py-10 border-b border-slate-200 flex flex-wrap justify-between items-start gap-8 bg-white">
                    <div>
                        <p className="text-[10px] font-bold text-[#29258D] uppercase tracking-widest mb-3">
                            Requisition Document
                        </p>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight max-w-xl">{req.title}</h1>
                        <div className="mt-5 flex items-center gap-3">
                            <StatusBadge status={req.status} />
                            {req.type && req.type !== "STANDARD" && (
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-indigo-50 text-indigo-700 border border-indigo-200">
                                    {req.type.replace(/_/g, " ")}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="text-right shrink-0 bg-slate-50 px-5 py-4 border border-slate-200 rounded">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Document ID</p>
                        <p className="text-base font-mono font-bold text-slate-900">REQ-{req.id.slice(0, 8).toUpperCase()}</p>
                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Submitted On</p>
                            <p className="text-xs text-slate-700 font-bold">{new Date(req.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                        </div>
                    </div>
                </div>

                {/* Sub-header grid: Demographics vs Financials */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 bg-slate-50/50">
                    <div className="p-10 flex flex-col gap-8">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><PiUser className="text-lg" /> Requested By</p>
                            <p className="text-sm font-bold text-slate-900">{req.user.name}</p>
                            <p className="text-xs text-slate-500 mt-1">{req.user.department || req.user.email}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><PiBuilding className="text-lg" /> Branch Location</p>
                            <p className="text-sm font-bold text-slate-900">{req.branch || "Global"}</p>
                        </div>
                    </div>
                    <div className="p-10 flex flex-col gap-8">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><PiCurrencyDollar className="text-lg" /> Total Approved Amount</p>
                            <p className="text-3xl font-bold text-[#29258D] font-mono">{formatCurrency(req.amount, req.currency)}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><PiTag className="text-lg" /> Category</p>
                                <p className="text-sm font-bold text-slate-900">{req.category || "Uncategorized"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="px-10 py-12 space-y-16 bg-white">
                    
                    {/* Section 1: Purpose & Justification */}
                    <div className="space-y-6">
                        <h2 className="text-xs border-b border-slate-200 pb-3 font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-slate-400 font-mono">01.</span> PURPOSE & JUSTIFICATION
                        </h2>
                        <div className="pl-6 border-l-[3px] border-slate-100 py-1">
                            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-serif">
                                {req.description?.split("\n\n**Preferred Vendor:**")[0]?.split("\n\n**Payment Method:**")[0] || "No justification provided."}
                            </p>
                        </div>
                        
                        {/* Inline Payment & Vendor Info */}
                        <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded flex flex-wrap gap-10 items-center justify-between">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5"><PiCreditCard className="text-base text-slate-400" /> Payment Method</p>
                                <PaymentMethodLabel method={paymentMethod} />
                                {paymentReference && (
                                    <p className="text-[10px] text-slate-500 mt-2.5 font-mono font-bold bg-white px-2 py-1 border border-slate-100 rounded inline-block">REF: {paymentReference}</p>
                                )}
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5"><PiStorefront className="text-base text-slate-400" /> Preferred Vendor</p>
                                <p className="text-sm font-bold text-slate-900">{vendor || "No vendor specified"}</p>
                            </div>
                            {req.expectedDate && (
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5"><PiCalendar className="text-base text-slate-400" /> Expected Date</p>
                                    <p className="text-sm font-bold text-slate-900">{new Date(req.expectedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Section 2: Items Table */}
                    {req.items && req.items.length > 0 && (
                        <div className="space-y-6">
                            <h2 className="text-xs border-b border-slate-200 pb-3 font-bold text-slate-900 uppercase tracking-widest flex items-center justify-between gap-2">
                                <span className="flex items-center gap-2"><span className="text-slate-400 font-mono">02.</span> ITEMISED BREAKDOWN</span>
                                <span className="text-[10px] text-slate-400 font-mono">{req.items.length} ITEMS</span>
                            </h2>
                            <div className="border border-slate-200 rounded overflow-hidden">
                                <div className="overflow-x-auto pb-1 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-50">
                                    <table className="w-full text-left border-collapse min-w-[700px]">
                                        <thead className="bg-slate-50 border-b border-slate-200">
                                            <tr>
                                                <th className="pl-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Item</th>
                                                <th className="py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider w-36">Category</th>
                                                <th className="py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider w-24 text-center">Qty</th>
                                                <th className="py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider w-32 text-right">Unit Price</th>
                                                <th className="py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider w-32 text-right">Total</th>
                                                <th className="pr-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider w-40 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {req.items.map((item: any) => (
                                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                                    <td className="pl-6 py-5">
                                                        <p className="text-sm font-semibold text-slate-800 tracking-wide">{item.title}</p>
                                                        {item.description && (
                                                            <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{item.description}</p>
                                                        )}
                                                        {item.isRecurring && (
                                                            <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 bg-indigo-50 text-[#29258D] rounded text-[9px] font-bold uppercase border border-indigo-100 tracking-widest">
                                                                <PiArrowsClockwise className="text-[10px]" /> Recurring
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="py-5">
                                                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                                            {item.category}
                                                        </span>
                                                    </td>
                                                    <td className="py-5 text-center text-sm font-bold text-slate-700">{item.quantity}</td>
                                                    <td className="py-5 text-right font-mono text-sm text-slate-600 font-medium">
                                                        {formatCurrency(item.unitPrice, req.currency)}
                                                    </td>
                                                    <td className="py-5 text-right font-mono text-sm font-bold text-slate-900">
                                                        {formatCurrency(item.quantity * item.unitPrice, req.currency)}
                                                    </td>
                                                    <td className="pr-6 py-5 text-right">
                                                        <RequisitionItemActions
                                                            item={{
                                                                id: item.id,
                                                                title: item.title,
                                                                quantity: item.quantity,
                                                                unitPrice: item.unitPrice,
                                                                totalPrice: item.quantity * item.unitPrice,
                                                                status: item.status || 'PENDING',
                                                                category: item.category,
                                                            }}
                                                            currency={req.currency}
                                                            isPrivileged={isPrivileged}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr className="bg-slate-50 border-t border-slate-200">
                                                <td colSpan={4} className="pl-6 py-5 text-[11px] font-bold text-slate-800 uppercase tracking-widest">Calculated Total</td>
                                                <td className="pr-6 py-5 text-right font-mono text-lg font-bold text-[#29258D]">
                                                    {formatCurrency(req.amount, req.currency)}
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section 3: Approval Timeline */}
                    {req.approvals && req.approvals.length > 0 && (
                        <div className="space-y-6 pt-4">
                            <h2 className="text-xs border-b border-slate-200 pb-3 font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                <span className="text-slate-400 font-mono">03.</span> OFFICIAL AUTHORIZATIONS
                            </h2>
                            <div className="space-y-4 pl-1">
                                {req.approvals.map((approval: any, i: number) => {
                                    const s = approval.status.toUpperCase();
                                    const iconClass = s === "APPROVED" ? "text-emerald-500 bg-emerald-50 border-emerald-100" : s === "REJECTED" ? "text-rose-500 bg-rose-50 border-rose-100" : "text-amber-500 bg-amber-50 border-amber-100";
                                    const Icon = s === "APPROVED" ? PiCheckCircle : s === "REJECTED" ? PiXCircle : PiClock;
                                    
                                    return (
                                        <div key={approval.id} className="flex items-start gap-4">
                                            <div className={`mt-1 shrink-0 w-8 h-8 rounded-full border flex items-center justify-center ${iconClass}`}>
                                                <Icon className="text-xl" />
                                            </div>
                                            <div className="flex-1 min-w-0 bg-slate-50 border border-slate-100 rounded p-4">
                                                <div className="flex flex-wrap items-start justify-between gap-4">
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800 tracking-wide">
                                                            {approval.approver?.name ?? "Pending Assignment"}
                                                            <span className="ml-2 text-[10px] text-slate-400 font-mono font-normal">LEVEL {approval.level}</span>
                                                        </p>
                                                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">
                                                            {approval.approver?.role?.replace('_', ' ') || "Reviewer"}
                                                        </p>
                                                    </div>
                                                    <div className="text-right shrink-0">
                                                        <StatusBadge status={approval.status} />
                                                        {approval.approvedAt && (
                                                            <p className="text-[10px] font-mono text-slate-400 mt-2">
                                                                {new Date(approval.approvedAt).toLocaleString('en-US', {
                                                                    month: 'numeric', day: 'numeric', year: 'numeric',
                                                                    hour: 'numeric', minute: '2-digit'
                                                                })}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                                {approval.comments && (
                                                    <div className="mt-4 pt-3 border-t border-slate-200">
                                                        <p className="text-[11px] text-slate-600 font-medium italic leading-relaxed">
                                                            "{approval.comments}"
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

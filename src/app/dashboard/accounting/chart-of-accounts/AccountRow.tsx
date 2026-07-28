'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/ToastProvider';
import { useRouter } from 'next/navigation';
import { PiPencil, PiArchive, PiArrowCounterClockwise, PiCheck, PiX, PiSpinner } from 'react-icons/pi';

const HAIRLINE = '1px solid rgba(0,0,0,0.07)';

const SUBTYPE_OPTIONS: Record<string, { value: string; label: string }[]> = {
    ASSET: [
        { value: 'CURRENT_ASSET',       label: 'Current Asset' },
        { value: 'FIXED_ASSET',         label: 'Fixed Asset' },
        { value: 'NON_CURRENT_ASSET',   label: 'Non-Current Asset' },
        { value: 'CASH',                label: 'Cash & Cash Equivalents' },
        { value: 'BANK',                label: 'Bank Account' },
        { value: 'ACCOUNTS_RECEIVABLE', label: 'Accounts Receivable' },
        { value: 'INVENTORY',           label: 'Inventory' },
        { value: 'OTHER_ASSET',         label: 'Other Asset' },
    ],
    LIABILITY: [
        { value: 'CURRENT_LIABILITY',   label: 'Current Liability' },
        { value: 'LONG_TERM_LIABILITY', label: 'Long-term Liability' },
        { value: 'ACCOUNTS_PAYABLE',    label: 'Accounts Payable' },
        { value: 'CREDIT_CARD',         label: 'Credit Card' },
        { value: 'OTHER_LIABILITY',     label: 'Other Liability' },
    ],
    EQUITY: [
        { value: 'COMMON_STOCK',        label: 'Common Stock' },
        { value: 'RETAINED_EARNINGS',   label: 'Retained Earnings' },
        { value: 'OWNERS_EQUITY',       label: "Owner's Equity" },
        { value: 'OTHER_EQUITY',        label: 'Other Equity' },
    ],
    REVENUE: [
        { value: 'SALES',               label: 'Sales Income' },
        { value: 'SERVICE_REVENUE',     label: 'Service Revenue' },
        { value: 'OTHER_INCOME',        label: 'Other Income' },
    ],
    EXPENSE: [
        { value: 'OPERATING_EXPENSE',   label: 'Operating Expense' },
        { value: 'COST_OF_GOODS_SOLD',  label: 'Cost of Goods Sold' },
        { value: 'PAYROLL_EXPENSE',     label: 'Payroll Expense' },
        { value: 'ADMINISTRATIVE',      label: 'Administrative Expense' },
        { value: 'OTHER_EXPENSE',       label: 'Other Expense' },
    ],
};

export function AccountRow({ account, isLast }: { account: any; isLast?: boolean }) {
    const router = useRouter();
    const { showToast } = useToast();
    const [editing, setEditing]   = useState(false);
    const [name, setName]         = useState(account.name);
    const [subtype, setSubtype]   = useState(account.subtype || '');
    const [loading, setLoading]   = useState(false);

    const subtypeOptions = SUBTYPE_OPTIONS[account.type] ?? [];

    const save = async () => {
        const nameChanged    = name.trim() && name !== account.name;
        const subtypeChanged = subtype !== (account.subtype || '');
        if (!nameChanged && !subtypeChanged) { setEditing(false); return; }
        setLoading(true);
        try {
            const body: Record<string, string> = {};
            if (nameChanged)    body.name    = name;
            if (subtypeChanged) body.subtype = subtype;
            const res = await fetch(`/api/accounting/accounts/${account.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            showToast('Account updated', 'success');
            setEditing(false);
            router.refresh();
        } catch (err: any) {
            showToast(err.message, 'error');
        } finally { setLoading(false); }
    };

    const cancel = () => { setEditing(false); setName(account.name); setSubtype(account.subtype || ''); };

    const handleKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') save();
        if (e.key === 'Escape') cancel();
    };

    const toggleArchive = async () => {
        if (!account.isArchived) {
            const ok = confirm(`Archive "${account.name}"? It will be hidden from posting but journal history is preserved.`);
            if (!ok) return;
        }
        setLoading(true);
        try {
            const res = await fetch(`/api/accounting/accounts/${account.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isArchived: !account.isArchived, force: true }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            showToast(`Account ${account.isArchived ? 'restored' : 'archived'}`, 'success');
            router.refresh();
        } catch (err: any) {
            showToast(err.message, 'error');
        } finally { setLoading(false); }
    };

    const statusBadge = account.isArchived ? (
        <span className="inline-flex items-center gap-1 text-[10px] font-[600] px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(107,114,128,0.08)', color: '#9ca3af' }}>
            <span className="w-[5px] h-[5px] rounded-full bg-gray-300 shrink-0" />
            Archived
        </span>
    ) : account.isActive ? (
        <span className="inline-flex items-center gap-1 text-[10px] font-[600] px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(5,150,105,0.08)', color: '#059669' }}>
            <span className="w-[5px] h-[5px] rounded-full bg-emerald-500 shrink-0" />
            Active
        </span>
    ) : (
        <span className="inline-flex items-center gap-1 text-[10px] font-[600] px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(0,0,0,0.05)', color: '#6b7280' }}>
            <span className="w-[5px] h-[5px] rounded-full bg-gray-400 shrink-0" />
            Inactive
        </span>
    );

    return (
        <div
            className={`grid items-center px-5 py-3 hover:bg-gray-50/40 transition-colors group ${account.isArchived ? 'opacity-50' : ''}`}
            style={{
                gridTemplateColumns: '80px 1fr 140px 90px 72px',
                borderTop: isLast === false || !isLast ? HAIRLINE : undefined,
            }}>

            {/* Code */}
            <p className="text-[12px] font-mono font-[600] text-gray-400 group-hover:text-[#6366F1] transition-colors">
                {account.code}
            </p>

            {/* Name — editable */}
            <div className="min-w-0 pr-4">
                {editing ? (
                    <input
                        className="w-full rounded-[6px] px-3 py-1.5 text-[12.5px] text-gray-900 outline-none focus:ring-2 focus:ring-[#6366F1]/20 transition-all bg-white"
                        style={{ border: HAIRLINE }}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onKeyDown={handleKey}
                        autoFocus
                    />
                ) : (
                    <p className="text-[12.5px] font-[500] text-gray-900 truncate">{account.name}</p>
                )}
            </div>

            {/* Subtype */}
            {editing ? (
                <select
                    value={subtype}
                    onChange={e => setSubtype(e.target.value)}
                    className="w-full rounded-[6px] px-2 py-1.5 text-[11px] text-gray-700 outline-none focus:ring-2 focus:ring-[#6366F1]/20 bg-white"
                    style={{ border: HAIRLINE }}>
                    <option value="">— none —</option>
                    {subtypeOptions.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                </select>
            ) : (
                <p className="text-[10.5px] font-[500] text-gray-400 uppercase tracking-[0.06em] truncate">
                    {account.subtype?.replace(/_/g, ' ') || '—'}
                </p>
            )}

            {/* Status */}
            <div className="flex justify-center">
                {statusBadge}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 justify-end">
                {loading ? (
                    <PiSpinner className="animate-spin text-[14px] text-gray-400" />
                ) : editing ? (
                    <>
                        <button onClick={save}
                            className="w-[26px] h-[26px] flex items-center justify-center rounded-[5px] text-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                            style={{ border: HAIRLINE }}
                            title="Save">
                            <PiCheck className="text-[12px]" />
                        </button>
                        <button onClick={cancel}
                            className="w-[26px] h-[26px] flex items-center justify-center rounded-[5px] text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                            style={{ border: HAIRLINE }}
                            title="Cancel">
                            <PiX className="text-[12px]" />
                        </button>
                    </>
                ) : (
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setEditing(true)}
                            className="w-[26px] h-[26px] flex items-center justify-center rounded-[5px] text-gray-400 hover:text-[#6366F1] hover:bg-indigo-50 transition-colors"
                            style={{ border: HAIRLINE }}
                            title="Edit name">
                            <PiPencil className="text-[12px]" />
                        </button>
                        <button onClick={toggleArchive}
                            className={`w-[26px] h-[26px] flex items-center justify-center rounded-[5px] transition-colors
                                ${account.isArchived
                                    ? 'text-emerald-400 hover:text-emerald-600 hover:bg-emerald-50'
                                    : 'text-gray-400 hover:text-amber-500 hover:bg-amber-50'}`}
                            style={{ border: HAIRLINE }}
                            title={account.isArchived ? 'Restore' : 'Archive'}>
                            {account.isArchived
                                ? <PiArrowCounterClockwise className="text-[12px]" />
                                : <PiArchive className="text-[12px]" />}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

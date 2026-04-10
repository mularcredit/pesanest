"use client";

import { useState, useMemo } from "react";
import { PiFunnel, PiMagnifyingGlass } from "react-icons/pi";
import { RequisitionList } from "./RequisitionList";

interface RequisitionListWithFilterProps {
    requisitions: any[];
    monthlyBudgets: any[];
}

export function RequisitionListWithFilter({ requisitions, monthlyBudgets }: RequisitionListWithFilterProps) {
    const [statusFilter, setStatusFilter] = useState<'active' | 'fulfilled' | 'all'>('active');

    const filteredRequisitions = useMemo(() => {
        if (statusFilter === 'active') return requisitions.filter(req => req.status !== 'FULFILLED');
        if (statusFilter === 'fulfilled') return requisitions.filter(req => req.status === 'FULFILLED');
        return requisitions;
    }, [requisitions, statusFilter]);

    const statusCounts = useMemo(() => ({
        active: requisitions.filter(req => req.status !== 'FULFILLED').length,
        fulfilled: requisitions.filter(req => req.status === 'FULFILLED').length,
        all: requisitions.length
    }), [requisitions]);

    return (
        <div className="space-y-6">
            {/* Status Filter Tabs */}
            <div className="flex bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                {([
                    { id: 'active', label: 'Active Requisitions', sub: 'Pending approval or payment', count: statusCounts.active, activeColor: 'text-indigo-600 border-indigo-600', badgeActive: 'bg-indigo-100 text-indigo-700' },
                    { id: 'fulfilled', label: 'Fulfilled', sub: 'Disbursements complete', count: statusCounts.fulfilled, activeColor: 'text-emerald-600 border-emerald-600', badgeActive: 'bg-emerald-100 text-emerald-700' },
                    { id: 'all', label: 'Ledger History', sub: 'All requisitions', count: statusCounts.all, activeColor: 'text-slate-900 border-slate-900', badgeActive: 'bg-slate-200 text-slate-800' },
                ] as const).map(tab => {
                    const isActive = statusFilter === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setStatusFilter(tab.id)}
                            className={`flex-1 flex items-center justify-between p-4 group transition-all duration-200 border-b-2 ${isActive ? `bg-white ${tab.activeColor}` : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 border-transparent'}`}
                        >
                            <div className="flex flex-col text-left">
                                <p className="font-semibold text-[13px] tracking-tight">{tab.label}</p>
                                <p className={`text-[10px] mt-0.5 ${isActive ? tab.activeColor.split(' ')[0].replace('text-', 'text-').replace('600', '400') : 'text-slate-400'}`}>{tab.sub}</p>
                            </div>
                            {tab.count > 0 && (
                                <span className={`ml-4 px-2 py-0.5 text-[10px] min-w-[24px] text-center rounded-full font-semibold shrink-0 transition-colors ${isActive ? tab.badgeActive : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'}`}>
                                    {tab.count}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Search & Filter bar */}
            <div className="flex gap-4">
                <div className="relative flex-1">
                    <PiMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by ID or title..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none transition-all"
                    />
                </div>
                <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg flex items-center gap-2 text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all">
                    <PiFunnel />
                    <span className="text-xs font-bold">Filter</span>
                </button>
            </div>

            {/* Table */}
            <RequisitionList
                requisitions={filteredRequisitions}
                monthlyBudgets={monthlyBudgets}
            />
        </div>
    );
}

"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

const CARD_STYLE: React.CSSProperties = { border: '1px solid rgba(0,0,0,0.09)' };
const SELECT_CLS = "w-full h-9 rounded-[6px] px-3 text-[12px] text-gray-700 outline-none focus:ring-1 focus:ring-[#6366F1] transition-colors bg-white appearance-none cursor-pointer";

interface SalesFilterProps {
    customers: { id: string; name: string }[];
}

export function SalesFilter({ customers }: SalesFilterProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [query, setQuery] = useState(searchParams.get("query") || "");
    const [status, setStatus] = useState(searchParams.get("status") || "ALL");
    const [customerId, setCustomerId] = useState(searchParams.get("customerId") || "ALL");
    const [dateRange, setDateRange] = useState(searchParams.get("dateRange") || "ALL");

    useEffect(() => {
        const handler = setTimeout(() => { updateFilters({ query }); }, 300);
        return () => clearTimeout(handler);
    }, [query]);

    const updateFilters = (updates: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(updates).forEach(([key, value]) => {
            if (value && value !== "ALL") params.set(key, value);
            else params.delete(key);
        });
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="bg-white rounded-[8px] p-3 flex flex-col lg:flex-row gap-3 items-center" style={CARD_STYLE}>
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] w-full">
                <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[13px] pointer-events-none" />
                <input
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search invoice #..."
                    className="w-full h-9 pl-9 pr-3 rounded-[6px] text-[12px] text-gray-700 placeholder:text-gray-300 outline-none focus:ring-1 focus:ring-[#6366F1] transition-colors bg-white"
                    style={CARD_STYLE}
                />
            </div>

            {/* Status */}
            <div className="w-full lg:w-[150px]">
                <select value={status}
                    onChange={e => { setStatus(e.target.value); updateFilters({ status: e.target.value }); }}
                    className={SELECT_CLS} style={CARD_STYLE}>
                    <option value="ALL">All Statuses</option>
                    <option value="PAID">Paid</option>
                    <option value="PENDING">Pending</option>
                    <option value="OVERDUE">Overdue</option>
                    <option value="DRAFT">Draft</option>
                </select>
            </div>

            {/* Customer */}
            <div className="w-full lg:w-[200px]">
                <select value={customerId}
                    onChange={e => { setCustomerId(e.target.value); updateFilters({ customerId: e.target.value }); }}
                    className={SELECT_CLS} style={CARD_STYLE}>
                    <option value="ALL">All Customers</option>
                    {customers.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
            </div>

            {/* Date Range */}
            <div className="w-full lg:w-[150px]">
                <select value={dateRange}
                    onChange={e => { setDateRange(e.target.value); updateFilters({ dateRange: e.target.value }); }}
                    className={SELECT_CLS} style={CARD_STYLE}>
                    <option value="ALL">All Time</option>
                    <option value="THIS_MONTH">This Month</option>
                    <option value="LAST_MONTH">Last Month</option>
                    <option value="LAST_3_MONTHS">Last 3 Months</option>
                    <option value="THIS_YEAR">This Year</option>
                </select>
            </div>
        </div>
    );
}

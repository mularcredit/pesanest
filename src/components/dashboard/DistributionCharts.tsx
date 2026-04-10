"use client";

import { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";

interface CategoryData {
    name: string;
    value: number;
}

interface DistributionChartsProps {
    expensesData: [string, number][];
    requisitionsData: [string, number][];
    className?: string;
}

const COLORS_EXPENSES = ['#10b981', '#34d399', '#6ee7b7', '#059669', '#a7f3d0', '#047857', '#ecfdf5'];
const COLORS_REQUISITIONS = ['#6366f1', '#818cf8', '#a5b4fc', '#4f46e5', '#c7d2fe', '#4338ca', '#e0e7ff'];

const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-slate-200 shadow-xl p-3 rounded-xl backdrop-blur-sm bg-white/90">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: payload[0].payload.fill }}></span>
                        <span className="text-[11px] font-bold text-slate-700">{payload[0].name.replace(/_/g, ' ')}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 font-mono">
                        ${payload[0].value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                </div>
            </div>
        );
    }
    return null;
};

export function DistributionCharts({ expensesData, requisitionsData, className }: DistributionChartsProps) {
    const formattedExpenses = useMemo(() => expensesData.map(([name, value]) => ({ name, value })), [expensesData]);
    const formattedRequisitions = useMemo(() => requisitionsData.map(([name, value]) => ({ name, value })), [requisitionsData]);

    if (!expensesData.length && !requisitionsData.length) {
        return null;
    }

    const renderPieCard = (title: string, data: any[], colors: string[]) => (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300">
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 flex items-center gap-2">
                {title}
            </h2>
            <div className="h-[280px] w-full mt-auto relative">
                {data.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={75}
                                outerRadius={95}
                                paddingAngle={3}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomPieTooltip />} cursor={{fill: 'transparent'}} />
                            <Legend 
                                verticalAlign="bottom" 
                                height={36} 
                                iconType="circle"
                                formatter={(value) => <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider ml-1 truncate max-w-[80px] inline-block align-bottom">{value.replace(/_/g, ' ')}</span>}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-300 uppercase tracking-widest">
                        No Data available
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
            {renderPieCard("Expense Allocation", formattedExpenses, COLORS_EXPENSES)}
            {renderPieCard("Requested Resources", formattedRequisitions, COLORS_REQUISITIONS)}
        </div>
    );
}

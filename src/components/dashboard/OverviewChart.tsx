"use client";

import { useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-slate-200 shadow-xl p-4 rounded-xl min-w-[200px]">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{label}</p>
                <div className="space-y-2">
                    {payload.map((entry: any, index: number) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-sm`} style={{ backgroundColor: entry.color }}></span>
                                <span className="text-[11px] font-bold text-slate-700">{entry.name}</span>
                            </div>
                            <span className="text-xs font-bold text-slate-900 font-mono">
                                ${entry.value?.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};

export function OverviewChart({ data, className }: { data: any[], className?: string }) {
    if (!data || data.length === 0) {
        return (
            <Card className={cn("w-full h-[350px] p-8 flex items-center justify-center", className)}>
                <p className="text-[var(--gds-text-muted)] text-sm font-medium">No analytics data available</p>
            </Card>
        );
    }

    const chartData = useMemo(() => data.map(d => ({ 
        ...d, 
        expenses: d.expenses || d.amount || 0,
        requisitions: d.requisitions || 0
    })), [data]);

    return (
        <Card className={cn("w-full h-[350px] p-8 pr-4", className)}>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[10px] font-bold tracking-widest uppercase text-slate-500 flex items-center gap-2">
                    System Activity Trends
                </h2>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                         <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></span>
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Expenses</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></span>
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Requisitions</span>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorReqs" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#64748b", fontSize: 10, fontWeight: 600 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#64748b", fontSize: 10, fontWeight: 600 }}
                        tickFormatter={(value) => `$${value >= 1000 ? (value / 1000).toFixed(1) + 'k' : value}`}
                    />
                    <Tooltip 
                        content={<CustomTooltip />} 
                        cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '3 3' }} 
                    />
                    
                    <Area
                        type="monotone"
                        dataKey="requisitions"
                        name="Requisitions"
                        animationDuration={1500}
                        stroke="#6366f1"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorReqs)"
                        activeDot={{ r: 6, fill: '#6366f1', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="expenses"
                        name="Expenses"
                        animationDuration={1500}
                        stroke="#10b981"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorExpenses)"
                        activeDot={{ r: 6, fill: '#10b981', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
}

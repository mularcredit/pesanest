import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface StatsCardProps {
    title: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
    icon: IconType;
    color?: "purple" | "cyan" | "emerald" | "blue" | "indigo" | "amber" | "slate";
    image?: string; 
    bgColor?: string; 
}

export function StatsCard({ title, value, trend, trendUp, icon: Icon, color = "purple" }: StatsCardProps) {
    const colorClasses = {
        emerald: "from-emerald-600 to-emerald-800 border-emerald-500 shadow-emerald-600/20",
        purple: "from-purple-600 to-purple-800 border-purple-500 shadow-purple-600/20",
        indigo: "from-indigo-600 to-indigo-800 border-indigo-500 shadow-indigo-600/20",
        cyan: "from-cyan-600 to-cyan-800 border-cyan-500 shadow-cyan-600/20",
        amber: "from-amber-500 to-amber-700 border-amber-400 shadow-amber-500/20",
        blue: "from-blue-600 to-blue-800 border-blue-500 shadow-blue-600/20",
        slate: "from-slate-700 to-slate-900 border-slate-600 shadow-slate-700/20",
    };

    const gradientClass = colorClasses[color];

    return (
        <div
            className={cn(
                "relative rounded-2xl border bg-gradient-to-br",
                "p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden",
                "min-h-[140px] group",
                gradientClass
            )}
        >
            {/* Animated Gloss Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" />

            {/* Top row: title + trend badge */}
            <div className="flex items-start justify-between gap-3 mb-6 relative z-10">
                <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest truncate">
                    {title}
                </p>
                {trend && (
                    <span className={cn(
                        "text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1 border border-white/10 bg-black/20 text-white backdrop-blur-md"
                    )}>
                        {trendUp ? "↑" : "↓"} {trend}
                    </span>
                )}
            </div>

            {/* Bottom row: value left, icon right */}
            <div className="flex items-end justify-between mt-auto min-w-0 relative z-10">
                <div className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm truncate pr-4 font-mono" title={value}>
                    {value}
                </div>

                {/* Accent Icon */}
                <div className={cn(
                    "shrink-0 flex items-center justify-center w-12 h-12 rounded-xl backdrop-blur-md border shadow-inner transition-transform group-hover:scale-110 duration-300",
                    "bg-white/10 border-white/20 text-white"
                )}>
                    <Icon className="text-2xl drop-shadow-md" />
                </div>
            </div>
            
            {/* Background ambient pattern */}
            <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
                <Icon className="text-[120px] text-white rotate-12" />
            </div>
        </div>
    );
}


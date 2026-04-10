import React from 'react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50/70 backdrop-blur-sm animate-fade-in pointer-events-none">
            {/* The primary focal point container */}
            <div className="flex flex-col items-center gap-6 max-w-sm w-full mx-auto p-8 rounded-[24px] bg-white shadow-2xl shadow-indigo-900/5 border border-slate-100">
                
                {/* Minimalist Logo pulse */}
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#29258D] to-indigo-500 shadow-inner overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                    {/* Abstract minimal shapes representing loading */}
                    <div className="w-5 h-5 border-2 border-white/60 rounded-full border-t-white animate-spin"></div>
                </div>
                
                {/* Text Indicator */}
                <div className="text-center space-y-1">
                    <h3 className="text-sm font-bold text-slate-800 tracking-wide">Syncing Workspace</h3>
                    <p className="text-[11px] text-slate-500 font-medium tracking-wide">Please wait a moment...</p>
                </div>
                
                {/* The Sleek Bar Loader */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden shrink-0 shadow-inner relative">
                    <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 rounded-full animate-sleek-bar w-1/2"></div>
                </div>
            </div>
            
            {/* Global minimal top loading strip connecting to the viewport top edge */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-transparent overflow-hidden z-[10000]">
                 <div className="h-full bg-emerald-500 animate-sleek-bar w-1/3"></div>
            </div>
        </div>
    );
}

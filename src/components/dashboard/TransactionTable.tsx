import { cn } from "@/lib/utils";
import { BiChevronRight } from "react-icons/bi";
import { PiListDashes, PiArrowsLeftRight } from "react-icons/pi";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function TransactionTable({ expenses }: { expenses: any[] }) {
    if (!expenses || expenses.length === 0) {
        return (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-4">
                    <PiListDashes className="text-3xl text-slate-300" />
                </div>
                <p className="text-sm font-bold text-slate-400">No recent transactions</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col group/table">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white z-10 relative">
                <div>
                    <h2 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                        Recent Activity
                    </h2>
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">Latest processed transactions</p>
                </div>
                <Button variant="ghost" size="sm" className="text-xs font-bold text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg px-4 flex items-center gap-1.5 transition-all outline-none ring-0">
                    View All <BiChevronRight className="text-base translate-y-px" />
                </Button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50">
                            <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Transaction</th>
                            <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Category</th>
                            <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Date</th>
                            <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Status</th>
                            <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100/60 bg-white">
                        {expenses.map((expense: any, i: number) => (
                            <tr key={expense.id || i} className="group hover:bg-slate-50/80 transition-colors duration-200 cursor-pointer">
                                <td className="py-4 px-6 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 text-slate-400 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-all">
                                        <PiArrowsLeftRight className="text-sm" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xs text-slate-900 group-hover:text-indigo-900 transition-colors">{expense.title}</div>
                                        <div className="text-[10px] font-medium text-slate-400 mt-0.5">{expense.merchant || 'N/A'}</div>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">{expense.category}</span>
                                </td>
                                <td className="py-4 px-6 text-[11px] font-semibold text-slate-500 font-mono">
                                    {new Date(expense.expenseDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                </td>
                                <td className="py-4 px-6">
                                    <Badge
                                        className="rounded-md px-2 py-0.5 text-[9px] font-bold shadow-none border tracking-wide uppercase"
                                        variant={
                                            ['APPROVED', 'PAID', 'REIMBURSED'].includes(expense.status) ? 'success' :
                                                ['PENDING', 'PENDING_APPROVAL', 'SUBMITTED'].includes(expense.status) ? 'info' :
                                                    expense.status === 'REJECTED' ? 'destructive' : 'secondary'
                                        }
                                    >
                                        {expense.status.replace('_', ' ')}
                                    </Badge>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <span className="font-bold text-sm text-slate-900 font-mono group-hover:text-indigo-700 transition-colors">
                                        ${Number(expense.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

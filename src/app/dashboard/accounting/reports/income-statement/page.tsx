import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import {
    PiDownloadSimple, PiPrinter, PiTrendUp, PiTrendDown,
    PiChartBar, PiArrowDown,
} from 'react-icons/pi';

const HAIRLINE = '1px solid rgba(0,0,0,0.07)';

function fmt(n: number) {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

export default async function IncomeStatementPage() {
    const session = await auth();
    if (!session?.user) return redirect('/login');

    const accounts = await prisma.account.findMany({
        where: {
            isActive: true,
            type: { in: ['REVENUE', 'CONTRA_REVENUE', 'EXPENSE'] },
        },
        include: {
            journalLines: {
                where: { entry: { status: 'POSTED' } },
            },
        },
        orderBy: { code: 'asc' },
    });

    const accountBalances = accounts.map(acc => {
        const dr = acc.journalLines.reduce((s, l) => s + l.debit, 0);
        const cr = acc.journalLines.reduce((s, l) => s + l.credit, 0);
        const balance = acc.type === 'REVENUE' ? cr - dr : dr - cr;
        return { code: acc.code, name: acc.name, type: acc.type, balance };
    });

    const revenues = accountBalances.filter(a => a.type === 'REVENUE');
    const returns  = accountBalances.filter(a => a.type === 'CONTRA_REVENUE');
    const expenses = accountBalances.filter(a => a.type === 'EXPENSE');

    const totalRevenue  = revenues.reduce((s, a) => s + a.balance, 0);
    const totalReturns  = returns.reduce((s, a) => s + a.balance, 0);
    const netRevenue    = totalRevenue - totalReturns;
    const totalExpenses = expenses.reduce((s, a) => s + a.balance, 0);
    const netIncome     = netRevenue - totalExpenses;
    const margin        = totalRevenue > 0 ? (netIncome / totalRevenue) * 100 : 0;
    const isProfit      = netIncome >= 0;

    const expensePct = totalRevenue > 0 ? Math.min((totalExpenses / totalRevenue) * 100, 100) : 0;
    const incomePct  = totalRevenue > 0 && isProfit ? Math.min((netIncome / totalRevenue) * 100, 100) : 0;

    const asOf = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <div className="pb-20 space-y-5">

            {/* ── Header ── */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-[30px] h-[30px] rounded-[7px] bg-[#6366F1] flex items-center justify-center">
                            <PiChartBar className="text-white text-[15px]" />
                        </div>
                        <h1 className="text-[19px] font-[600] text-gray-900 tracking-tight">Income Statement</h1>
                    </div>
                    <p className="text-[12px] text-gray-400 pl-[38px]">Profit & Loss · All time · As at {asOf}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] text-[12px] font-[500] text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                        style={{ border: HAIRLINE }}>
                        <PiPrinter className="text-[14px]" /> Print
                    </button>
                    <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] text-[12px] font-[500] text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                        style={{ border: HAIRLINE }}>
                        <PiDownloadSimple className="text-[14px]" /> Export
                    </button>
                </div>
            </div>

            {/* ── KPI strip ── */}
            <div className="grid grid-cols-4 gap-3">
                {[
                    { label: 'Gross Revenue',   value: totalRevenue,  color: '#059669' },
                    { label: 'Less Returns',     value: totalReturns,  color: '#d97706' },
                    { label: 'Total Expenses',   value: totalExpenses, color: '#e11d48' },
                    { label: 'Net Income',       value: netIncome,     color: isProfit ? '#059669' : '#e11d48' },
                ].map(k => (
                    <div key={k.label} className="bg-white rounded-[8px] px-5 py-4" style={{ border: HAIRLINE }}>
                        <p className="text-[10px] font-[600] uppercase tracking-[0.09em] text-gray-400 mb-2">{k.label}</p>
                        <p className="text-[18px] font-[700] font-mono tabular-nums leading-none" style={{ color: k.color }}>
                            {fmt(k.value)}
                        </p>
                        <p className="text-[10.5px] text-gray-400 mt-1">KES</p>
                    </div>
                ))}
            </div>

            {/* ── Net income hero ── */}
            <div className="bg-white rounded-[8px] px-6 py-5 flex flex-col md:flex-row md:items-center gap-6"
                style={{ border: isProfit ? '1px solid rgba(5,150,105,0.2)' : '1px solid rgba(225,29,72,0.2)' }}>

                {/* Left: net income figure */}
                <div className="shrink-0">
                    <p className="text-[10px] font-[600] uppercase tracking-[0.09em] text-gray-400 mb-1.5">Net Income</p>
                    <div className="flex items-baseline gap-3">
                        <span className={`text-[30px] font-[800] font-mono tabular-nums leading-none ${isProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {isProfit ? '' : '('}{fmt(netIncome)}{!isProfit ? ')' : ''}
                        </span>
                        <span className="text-[11px] font-[600] px-2.5 py-1 rounded-full"
                            style={{
                                background: isProfit ? 'rgba(5,150,105,0.08)' : 'rgba(225,29,72,0.08)',
                                color: isProfit ? '#059669' : '#e11d48',
                                border: isProfit ? '1px solid rgba(5,150,105,0.2)' : '1px solid rgba(225,29,72,0.2)',
                            }}>
                            {margin.toFixed(1)}% margin
                        </span>
                    </div>
                    <p className="text-[11.5px] text-gray-400 mt-1.5">
                        {isProfit ? 'Profitable period' : 'Loss period'} · KES {fmt(netRevenue)} net revenue
                    </p>
                </div>

                {/* Right: revenue bar */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                        <span className="font-[500]">Revenue composition</span>
                        <span className="font-mono">{fmt(totalRevenue)} gross</span>
                    </div>

                    <div className="flex w-full h-2 rounded-full overflow-hidden bg-gray-100">
                        {totalRevenue > 0 ? (
                            <>
                                <div className="h-full bg-rose-400 transition-all" style={{ width: `${expensePct}%` }} />
                                {isProfit && <div className="h-full bg-emerald-500 transition-all" style={{ width: `${incomePct}%` }} />}
                            </>
                        ) : (
                            <div className="h-full w-full bg-gray-200 rounded-full" />
                        )}
                    </div>

                    <div className="flex items-center gap-5 mt-2.5">
                        <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
                            <span className="w-2.5 h-2.5 rounded-[2px] bg-rose-400 shrink-0" />
                            Expenses · {fmt(totalExpenses)}
                        </span>
                        {totalReturns > 0 && (
                            <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
                                <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-400 shrink-0" />
                                Returns · {fmt(totalReturns)}
                            </span>
                        )}
                        <span className={`flex items-center gap-1.5 text-[11px] font-[500] ${isProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                            <span className={`w-2.5 h-2.5 rounded-[2px] shrink-0 ${isProfit ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                            {isProfit ? 'Profit' : 'Loss'} · {fmt(Math.abs(netIncome))}
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Detail columns ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Revenue */}
                <div className="bg-white rounded-[8px] overflow-hidden" style={{ border: HAIRLINE }}>
                    {/* Section header */}
                    <div className="flex items-center gap-2.5 px-5 py-3"
                        style={{ background: 'rgba(5,150,105,0.06)', borderBottom: HAIRLINE }}>
                        <div className="w-[26px] h-[26px] rounded-[6px] bg-emerald-600 flex items-center justify-center shrink-0">
                            <PiTrendUp className="text-white text-[13px]" />
                        </div>
                        <p className="text-[12.5px] font-[600] text-emerald-700">Revenue</p>
                        <span className="ml-auto text-[11px] font-[500] text-gray-400">
                            {revenues.length + returns.length} account{revenues.length + returns.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    {/* Revenue rows */}
                    {revenues.length === 0 && returns.length === 0 ? (
                        <div className="px-5 py-5">
                            <p className="text-[12px] text-gray-400 italic">No revenue accounts with posted entries</p>
                        </div>
                    ) : (
                        <>
                            {revenues.map((acc, i) => (
                                <div key={acc.code}
                                    className="flex items-center gap-4 px-5 py-3 hover:bg-emerald-50/20 transition-colors"
                                    style={i > 0 ? { borderTop: HAIRLINE } : {}}>
                                    <span className="text-[11px] font-mono text-gray-400 w-[44px] shrink-0">{acc.code}</span>
                                    <p className="flex-1 text-[12.5px] font-[500] text-gray-900 truncate">{acc.name}</p>
                                    <span className="text-[12.5px] font-[500] font-mono tabular-nums text-emerald-600 shrink-0">
                                        {fmt(acc.balance)}
                                    </span>
                                </div>
                            ))}
                            {returns.map((acc, i) => (
                                <div key={acc.code}
                                    className="flex items-center gap-4 px-5 py-3 hover:bg-amber-50/20 transition-colors"
                                    style={{ borderTop: HAIRLINE }}>
                                    <span className="text-[11px] font-mono text-gray-400 w-[44px] shrink-0">{acc.code}</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[12.5px] font-[500] text-gray-900 truncate">{acc.name}</p>
                                        <p className="text-[10px] font-[500] uppercase tracking-[0.06em] text-amber-500">Contra Revenue</p>
                                    </div>
                                    <span className="text-[12.5px] font-[500] font-mono tabular-nums text-amber-600 shrink-0">
                                        ({fmt(acc.balance)})
                                    </span>
                                </div>
                            ))}
                        </>
                    )}

                    {/* Net revenue total */}
                    <div className="flex items-center justify-between px-5 py-3"
                        style={{ borderTop: HAIRLINE, background: 'rgba(0,0,0,0.015)' }}>
                        <p className="text-[10.5px] font-[700] uppercase tracking-[0.09em] text-emerald-700">Net Revenue</p>
                        <p className="text-[13px] font-[700] font-mono tabular-nums text-emerald-700">{fmt(netRevenue)}</p>
                    </div>
                </div>

                {/* Expenses */}
                <div className="bg-white rounded-[8px] overflow-hidden" style={{ border: HAIRLINE }}>
                    {/* Section header */}
                    <div className="flex items-center gap-2.5 px-5 py-3"
                        style={{ background: 'rgba(225,29,72,0.06)', borderBottom: HAIRLINE }}>
                        <div className="w-[26px] h-[26px] rounded-[6px] bg-rose-600 flex items-center justify-center shrink-0">
                            <PiTrendDown className="text-white text-[13px]" />
                        </div>
                        <p className="text-[12.5px] font-[600] text-rose-700">Expenses</p>
                        <span className="ml-auto text-[11px] font-[500] text-gray-400">
                            {expenses.length} account{expenses.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    {/* Expense rows */}
                    {expenses.length === 0 ? (
                        <div className="px-5 py-5">
                            <p className="text-[12px] text-gray-400 italic">No expense accounts with posted entries</p>
                        </div>
                    ) : (
                        expenses.map((acc, i) => (
                            <div key={acc.code}
                                className="flex items-center gap-4 px-5 py-3 hover:bg-rose-50/10 transition-colors"
                                style={i > 0 ? { borderTop: HAIRLINE } : {}}>
                                <span className="text-[11px] font-mono text-gray-400 w-[44px] shrink-0">{acc.code}</span>
                                <p className="flex-1 text-[12.5px] font-[500] text-gray-900 truncate">{acc.name}</p>
                                <span className="text-[12.5px] font-[500] font-mono tabular-nums text-gray-700 shrink-0">
                                    ({fmt(acc.balance)})
                                </span>
                            </div>
                        ))
                    )}

                    {/* Total expenses */}
                    <div className="flex items-center justify-between px-5 py-3"
                        style={{ borderTop: HAIRLINE, background: 'rgba(0,0,0,0.015)' }}>
                        <p className="text-[10.5px] font-[700] uppercase tracking-[0.09em] text-rose-700">Total Expenses</p>
                        <p className="text-[13px] font-[700] font-mono tabular-nums text-rose-700">({fmt(totalExpenses)})</p>
                    </div>
                </div>
            </div>

            {/* ── P&L waterfall summary ── */}
            <div className="bg-white rounded-[8px] overflow-hidden" style={{ border: HAIRLINE }}>
                <div className="px-5 py-3" style={{ borderBottom: HAIRLINE, background: 'rgba(0,0,0,0.015)' }}>
                    <p className="text-[10px] font-[600] uppercase tracking-[0.09em] text-gray-400">P&amp;L Summary</p>
                </div>

                {[
                    { label: 'Gross Revenue',    value: totalRevenue,  note: null,                  indent: false, accent: '#059669', negative: false },
                    { label: 'Less: Returns',    value: totalReturns,  note: 'Contra revenue',      indent: true,  accent: '#d97706', negative: true  },
                    { label: 'Net Revenue',      value: netRevenue,    note: 'After returns',        indent: false, accent: '#059669', negative: false, bold: true },
                    { label: 'Less: Expenses',   value: totalExpenses, note: null,                  indent: true,  accent: '#e11d48', negative: true  },
                    { label: 'Net Income',        value: netIncome,    note: `${margin.toFixed(1)}% margin`, indent: false, accent: isProfit ? '#059669' : '#e11d48', negative: !isProfit, bold: true, large: true },
                ].map((row, i) => (
                    <div key={row.label}
                        className="flex items-center justify-between px-5 py-3"
                        style={{
                            borderTop: i > 0 ? HAIRLINE : undefined,
                            background: row.large ? (isProfit ? 'rgba(5,150,105,0.05)' : 'rgba(225,29,72,0.05)') : undefined,
                        }}>
                        <div className="flex items-center gap-2">
                            {row.indent && <PiArrowDown className="text-[11px] text-gray-300 shrink-0" />}
                            <div>
                                <span className={`text-[12.5px] ${row.bold ? 'font-[700]' : 'font-[500]'} text-gray-${row.bold ? '900' : '700'}`}>
                                    {row.label}
                                </span>
                                {row.note && (
                                    <span className="ml-2 text-[10.5px] text-gray-400">{row.note}</span>
                                )}
                            </div>
                        </div>
                        <span className={`font-mono tabular-nums shrink-0 ${row.large ? 'text-[15px] font-[800]' : 'text-[12.5px] font-[600]'}`}
                            style={{ color: row.accent }}>
                            {row.negative ? '(' : ''}{fmt(Math.abs(row.value))}{row.negative ? ')' : ''}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

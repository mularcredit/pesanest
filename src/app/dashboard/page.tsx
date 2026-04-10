import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { OverviewChart } from "@/components/dashboard/OverviewChart";
import { DistributionCharts } from "@/components/dashboard/DistributionCharts";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import {
    PiCheckCircle,
    PiCurrencyDollar,
    PiReceipt,
    PiShieldCheck,
    PiWallet,
    PiDownloadSimple,
    PiTrendUp,
    PiClock,
    PiBank,
    PiInvoice,
    PiHandCoins,
    PiGear,
    PiInfo,
    PiHandshake,
    PiUsers,
    PiBriefcase
} from "react-icons/pi";
import { cn } from "@/lib/utils";
import { WalletCard } from "@/components/dashboard/WalletCard";
import { DashboardQuickActions } from "@/components/dashboard/DashboardQuickActions";
import { stripe } from "@/lib/stripe";

export default async function DashboardPage() {
    const session = await auth();
    if (!session?.user?.id) return redirect("/login");

    const userId = session.user.id;
    const now = new Date();

    const currentUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true, name: true }
    });

    // If user no longer exists (e.g. after DB reset), force logout
    if (!currentUser) return redirect("/api/auth/signout?callbackUrl=/login");

    const isPrivileged = ['SYSTEM_ADMIN', 'FINANCE_APPROVER', 'MANAGER'].includes(currentUser?.role || '');
    const isSystemAdmin = currentUser?.role === 'SYSTEM_ADMIN';
    const expenseFilter = isPrivileged ? {} : { userId };

    const firstDayThisMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // Last 30 days
    const firstDayLastMonth = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000); // 30-60 days ago
    const lastDayLastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Fetch comprehensive data
    // Execute database queries sequentially to prevent exhausting Neon connection pool limits
    const currentMonthNum = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const activeBudgets = await prisma.monthlyBudget.findMany({ where: { month: currentMonthNum, year: currentYear } });
    
    const thisMonthExpenses = await prisma.expense.findMany({ where: { ...expenseFilter, createdAt: { gte: firstDayThisMonth } }, orderBy: { createdAt: 'desc' } });
    const lastMonthExpenses = await prisma.expense.findMany({ where: { ...expenseFilter, createdAt: { gte: firstDayLastMonth, lte: lastDayLastMonth } } });
    const pendingApprovals = await prisma.expense.findMany({ where: { ...expenseFilter, status: { in: ['PENDING_APPROVAL', 'SUBMITTED'] } }, orderBy: { createdAt: 'desc' }, take: 10 });
    const draftExpenses = await prisma.expense.findMany({ where: { ...expenseFilter, status: 'DRAFT' } });
    
    // Fetch last year of expenses and requisitions for the area chart and pie charts
    const oneYearAgo = new Date(now.getFullYear(), now.getMonth() - 11, 1);
    const allExpenses = await prisma.expense.findMany({ where: { ...expenseFilter, expenseDate: { gte: oneYearAgo } }, orderBy: { expenseDate: 'desc' } });
    const allRequisitions = await prisma.requisition.findMany({ where: { ...expenseFilter, createdAt: { gte: oneYearAgo } }, orderBy: { createdAt: 'desc' } });

    // Batch 2
    const wallet = await prisma.wallet.findUnique({ where: { userId }, include: { transactions: { take: 5, orderBy: { createdAt: 'desc' } } } });
    const requisitions = await prisma.requisition.findMany({ where: { userId, status: 'PENDING' } });
    const categories = await prisma.category.findMany({ where: { isActive: true }, select: { name: true } });
    const branchesData = await prisma.branch.findMany({ where: { isActive: true }, select: { name: true } });

    // Batch 3
    const stripeAccount = (currentUser as any)?.stripeAccountId ? await prisma.user.findUnique({ where: { id: userId }, select: { stripeAccountId: true, stripeConnectStatus: true } as any }) : null;
    const thisMonthSales = isSystemAdmin ? await prisma.sale.aggregate({ where: { issueDate: { gte: firstDayThisMonth }, status: { not: 'DRAFT' } }, _sum: { totalAmount: true } }) : { _sum: { totalAmount: 0 } };
    const lastMonthSales = isSystemAdmin ? await prisma.sale.aggregate({ where: { issueDate: { gte: firstDayLastMonth, lte: lastDayLastMonth }, status: { not: 'DRAFT' } }, _sum: { totalAmount: true } }) : { _sum: { totalAmount: 0 } };


    // Batch 4
    const activeCustomersCount = await prisma.customer.count({ where: { isActive: true } });
    const teamCount = await prisma.user.count({ where: { isActive: true, role: { not: 'SYSTEM_ADMIN' } } });

    let stripeBalance = 0;
    let isStripeConnected = false;
    if ((stripeAccount as any)?.stripeAccountId && (stripeAccount as any)?.stripeConnectStatus === 'COMPLETED') {
        try {
            const balance = await stripe.balance.retrieve({ stripeAccount: (stripeAccount as any).stripeAccountId });
            stripeBalance = balance.available.reduce((sum: number, b: any) => sum + b.amount, 0) / 100;
            isStripeConnected = true;
        } catch (e) { console.error('Stripe balance fetch failed:', e); }
    }

    // Metrics Calculation
    const thisMonthTotal = thisMonthExpenses.reduce((sum: number, exp: any) => sum + exp.amount, 0);
    const lastMonthTotal = lastMonthExpenses.reduce((sum: number, exp: any) => sum + exp.amount, 0);
    const monthOverMonthChange = lastMonthTotal > 0 ? ((thisMonthTotal - lastMonthTotal) / lastMonthTotal) * 100 : 0;

    const revenueCurrent = thisMonthSales._sum.totalAmount || 0;
    const revenueLast = lastMonthSales._sum.totalAmount || 0;
    const revenueChange = revenueLast > 0 ? ((revenueCurrent - revenueLast) / revenueLast) * 100 : 0;

    const netProfit = revenueCurrent - thisMonthTotal;
    const profitMargin = revenueCurrent > 0 ? (netProfit / revenueCurrent) * 100 : 0;

    const pendingTotal = pendingApprovals.reduce((sum: number, exp: any) => sum + exp.amount, 0);
    const draftTotal = draftExpenses.reduce((sum: number, exp: any) => sum + exp.amount, 0);

    const categorySpending = allExpenses.reduce((acc: any, exp: any) => {
        acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
        return acc;
    }, {});
    const topCategories = Object.entries(categorySpending).sort(([, a]: any, [, b]: any) => b - a).slice(0, 8) as [string, number][];

    const requisitionCategorySpending = allRequisitions.reduce((acc: any, req: any) => {
        acc[req.category] = (acc[req.category] || 0) + req.amount;
        return acc;
    }, {});
    const topReqCategories = Object.entries(requisitionCategorySpending).sort(([, a]: any, [, b]: any) => b - a).slice(0, 8) as [string, number][];

    const avgDailySpend = allExpenses.length > 0 ? allExpenses.reduce((sum: number, exp: any) => sum + exp.amount, 0) / 30 : 0;
    const recentLargeExpenses = allExpenses.filter((exp: any) => exp.amount > avgDailySpend * 3).slice(0, 3);

    const approvedCount = allExpenses.filter((exp: any) => exp.status === 'APPROVED' || exp.status === 'PAID').length;
    const submittedCount = allExpenses.filter((exp: any) => exp.status !== 'DRAFT').length;
    const approvalRate = submittedCount > 0 ? (approvedCount / submittedCount) * 100 : 0;

    const thisMonthRequisitions = allRequisitions.filter((req: any) => new Date(req.createdAt) >= firstDayThisMonth);
    const lastMonthRequisitionsList = allRequisitions.filter((req: any) => new Date(req.createdAt) >= firstDayLastMonth && new Date(req.createdAt) <= lastDayLastMonth);
    
    const thisMonthReqTotal = thisMonthRequisitions.reduce((sum: number, req: any) => sum + req.amount, 0);
    const lastMonthReqTotal = lastMonthRequisitionsList.reduce((sum: number, req: any) => sum + req.amount, 0);
    const reqMonthOverMonthChange = lastMonthReqTotal > 0 ? ((thisMonthReqTotal - lastMonthReqTotal) / lastMonthReqTotal) * 100 : 0;

    const pendingReqTotal = requisitions.reduce((sum: number, req: any) => sum + req.amount, 0);
    const pendingPipelineTotal = pendingTotal + pendingReqTotal;
    
    const activeRequisitionsCount = requisitions.length;
    const pendingItemsCount = pendingApprovals.length + activeRequisitionsCount;

    // Accounts Payable Metrics
    const unpaidApprovedExpenses = allExpenses.filter((e: any) => e.status === 'APPROVED' && !e.paidAt).reduce((sum: number, e: any) => sum + e.amount, 0);
    const unpaidApprovedReqs = allRequisitions.filter((r: any) => r.status === 'APPROVED' && !r.paymentId).reduce((sum: number, r: any) => sum + r.amount, 0);
    const outstandingPayables = unpaidApprovedExpenses + unpaidApprovedReqs;

    const paidThisMonthExpenses = thisMonthExpenses.filter((e: any) => e.status === 'PAID').reduce((sum: number, e: any) => sum + e.amount, 0);
    const paidThisMonthReqs = thisMonthRequisitions.filter((r: any) => r.status === 'PAID').reduce((sum: number, r: any) => sum + r.amount, 0);
    const cashPaidOut = paidThisMonthExpenses + paidThisMonthReqs;

    // Status distributions
    const expStatusCounts = allExpenses.reduce((acc: any, exp: any) => {
        acc[exp.status] = (acc[exp.status] || 0) + 1;
        return acc;
    }, {});
    const expenseStatusData = Object.entries(expStatusCounts).sort(([, a]: any, [, b]: any) => b - a);

    const reqStatusCounts = allRequisitions.reduce((acc: any, req: any) => {
        acc[req.status] = (acc[req.status] || 0) + 1;
        return acc;
    }, {});
    const requisitionStatusData = Object.entries(reqStatusCounts).sort(([, a]: any, [, b]: any) => b - a);

    // Monthly trend data for chart
    const monthlyData = [];

    // Build exactly 12 months array ending in current month
    for (let i = 11; i >= 0; i--) {
        const targetMonth = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const nextMonth = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
        
        const monthExpenses = allExpenses.filter((exp: any) => {
            const expDate = new Date(exp.expenseDate);
            return expDate >= targetMonth && expDate < nextMonth;
        });
        const expTotal = monthExpenses.reduce((sum: number, exp: any) => sum + exp.amount, 0);

        const monthRequisitions = allRequisitions.filter((req: any) => {
            const reqDate = new Date(req.createdAt);
            return reqDate >= targetMonth && reqDate < nextMonth;
        });
        const reqTotal = monthRequisitions.reduce((sum: number, req: any) => sum + req.amount, 0);

        monthlyData.push({ 
            month: targetMonth.toLocaleDateString('en-US', { month: 'short' }), 
            expenses: expTotal,
            requisitions: reqTotal 
        });
    }

    // Quick insights
    const insights = [];
    if (isSystemAdmin && thisMonthTotal === 0 && revenueCurrent > 0) insights.push({ type: 'success', icon: PiHandCoins, message: `Strong revenue start: $${revenueCurrent.toLocaleString()}`, action: 'View detailed report', link: '/dashboard/reports' });
    if (isSystemAdmin && revenueChange > 10) insights.push({ type: 'success', icon: PiTrendUp, message: `Revenue up ${revenueChange.toFixed(1)}% vs last month`, action: 'View Sales', link: '/dashboard/reports' });
    if (pendingApprovals.length > 0) insights.push({ type: 'pending', icon: PiClock, message: `${pendingApprovals.length} expenses awaiting approval`, action: 'Track status', link: '/dashboard/expenses?status=PENDING_APPROVAL' });
    if (monthOverMonthChange > 20) insights.push({ type: 'warning', icon: PiTrendUp, message: `High spending alert: +${monthOverMonthChange.toFixed(1)}%`, action: 'Review Expenses', link: '/dashboard/expenses' });

    return (
        <div className="space-y-8 animate-fade-in-up">
            {/* Header */}
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Expense Analytics</h1>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                        {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} • Standard Reporting
                    </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                    <Link href="/dashboard/reports" className="px-5 py-2.5 bg-white border border-slate-200 rounded-md text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                        <PiDownloadSimple className="text-base" />
                        Export Data
                    </Link>
                </div>
            </div>

            {/* Accounts Payable Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
                <StatsCard
                    title="Gross Expenses (30 Days)"
                    value={`$${thisMonthTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                    trend={monthOverMonthChange > 0 ? `+${monthOverMonthChange.toFixed(1)}%` : `${monthOverMonthChange.toFixed(1)}%`}
                    trendUp={monthOverMonthChange <= 0}
                    icon={PiInvoice}
                    color="cyan"
                />
                <StatsCard
                    title="Cash Paid Out (30 Days)"
                    value={`$${cashPaidOut.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                    trend="Actual payments"
                    trendUp={true}
                    icon={PiWallet}
                    color="emerald"
                />
                <StatsCard
                    title="Outstanding Payables"
                    value={`$${outstandingPayables.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                    trend="Approved, not yet paid"
                    trendUp={outstandingPayables === 0}
                    icon={PiBank}
                    color="slate"
                />
                <StatsCard
                    title="Pending Pipeline"
                    value={`$${pendingPipelineTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                    trend={`${pendingItemsCount} Total Items`}
                    trendUp={pendingPipelineTotal === 0}
                    icon={PiClock}
                    color="amber"
                />
            </div>


            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Analytics & History */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Spending Trend */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <OverviewChart data={monthlyData} />
                    </div>

                    {/* Distribution Pie Charts */}
                    <DistributionCharts expensesData={topCategories} requisitionsData={topReqCategories} />

                    {/* Expense Anomaly/Unusual Activity */}
                    {recentLargeExpenses.length > 0 && (
                        <div className="rounded-2xl border border-rose-200 shadow-sm p-6 bg-gradient-to-br from-rose-50 via-white to-orange-50/30 relative overflow-hidden">
                            {/* Alert ambient pattern */}
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <PiShieldCheck className="text-[120px] text-rose-500" />
                            </div>
                            
                            <div className="flex items-center justify-between mb-5 relative z-10">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                                    </span>
                                    <h2 className="text-[10px] font-extrabold tracking-widest uppercase text-rose-500">
                                        Spending Alerts
                                    </h2>
                                </div>
                                <span className="text-[9px] font-bold text-rose-600 bg-rose-100/50 px-2.5 py-1 rounded-full border border-rose-200/50">
                                    {recentLargeExpenses.length} Anomalies Detected
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                                {recentLargeExpenses.map((exp: any) => (
                                    <div key={exp.id} className="p-4 bg-white rounded-xl border border-rose-100 hover:border-rose-300 hover:shadow-md hover:shadow-rose-100 transition-all group">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="w-8 h-8 flex items-center justify-center bg-rose-50 border border-rose-100 rounded-lg group-hover:bg-rose-500 transition-colors">
                                                <PiShieldCheck className="text-rose-500 text-lg group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-md font-mono">
                                                {(exp.amount / avgDailySpend).toFixed(1)}x avg
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold text-slate-900 mb-1 truncate group-hover:text-rose-900 transition-colors">{exp.title}</p>
                                        <p className="text-xs font-bold text-slate-500 font-mono group-hover:text-rose-600 transition-colors">
                                            ${Number(exp.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Transaction History */}
                    <TransactionTable expenses={thisMonthExpenses.slice(0, 10)} />
                </div>

                {/* Right Column - Utilities */}
                <div className="space-y-6">
                    {/* Wallet Balance */}
                    <WalletCard
                        balance={isStripeConnected ? stripeBalance : (wallet?.balance ?? 0)}
                        currency={wallet?.currency ?? "USD"}
                        categories={categories.map((c: { name: string }) => c.name)}
                        branches={branchesData.map((b: { name: string }) => b.name)}
                        isStripe={isStripeConnected}
                        holderName={currentUser?.name || "Card Holder"}
                    />

                    {/* Quick Actions */}
                    <DashboardQuickActions />

                    {/* Active Requisitions */}
                    {requisitions.length > 0 && (
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                            <h3 className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-5">Active Requisitions</h3>
                            <div className="space-y-3">
                                {requisitions.slice(0, 3).map((req: any) => (
                                    <div key={req.id} className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-300 transition-colors group cursor-pointer">
                                        <div className="flex justify-between items-start mb-1">
                                            <div className="flex-1 min-w-0 pr-4">
                                                <p className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{req.title}</p>
                                                <p className="text-[9px] text-slate-500 font-bold mt-1 uppercase tracking-widest">{req.category}</p>
                                            </div>
                                            <span className="text-xs font-bold text-slate-900 font-mono">${req.amount.toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

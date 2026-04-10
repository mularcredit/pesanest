"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    PiSquaresFour,
    PiChartBar,
    PiWallet,
    PiReceipt,
    PiCheckCircle,
    PiCurrencyDollar,
    PiBuildings,
    PiFileText,
    PiCalendarBlank,
    PiUsers,
    PiShieldCheck,
    PiGear,
    PiCaretDown,
    PiBell,
    PiQuestion,
    PiSignOut,
    PiTrendUp,
    PiCaretRightBold,
    PiChartPieSlice,
    PiClockCounterClockwise,
    PiInvoice,
    PiChartLine,
    PiUsersThree,
    PiBookOpenText,
    PiList,
    PiX,
    PiPrinter,
    PiMagnifyingGlass,
    PiUploadSimple,
    PiPackage,
    PiPercent,
    PiArrowsLeftRight,
    PiGlobe
} from "react-icons/pi";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

interface MenuItem {
    name: string;
    href: string;
    icon: any;
    badge?: string;
    badgeColor?: string;
    subItems?: MenuItem[]; // Added for future expansion if needed
}

interface MenuCategory {
    title: string;
    items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
    {
        title: "Overview",
        items: [
            { name: "Dashboard", href: "/dashboard", icon: PiSquaresFour },
            { name: "Analytics", href: "/dashboard/reports", icon: PiChartBar },
            { name: "Workflow Analytics", href: "/dashboard/workflow-analytics", icon: PiChartLine },
            { name: "Statement Studio", href: "/finance-studio", icon: PiFileText },
        ]
    },
    {
        title: "Emergency Management",
        items: [
            { name: "My emergencies", href: "/dashboard/expenses", icon: PiWallet },
            { name: "Requisitions", href: "/dashboard/requisitions", icon: PiReceipt },
            ...(process.env.NEXT_PUBLIC_APP_NAME !== "Pesanest" ? [{ name: "Salaries & Payroll", href: "/dashboard/salaries", icon: PiUsersThree }] : []),
            { name: "Approvals", href: "/dashboard/approvals", icon: PiCheckCircle },
            { name: "Branch Approvals", href: "/dashboard/branch-approvals", icon: PiCheckCircle },
            { name: "Payments", href: "/dashboard/payments", icon: PiCurrencyDollar },
        ]
    },
    {
        title: "Financial",
        items: [
            { name: "Corporate wallet", href: "/dashboard/wallet", icon: PiChartPieSlice },
            { name: "Budgets", href: "/dashboard/budgets", icon: PiTrendUp },
            { name: "Forecasting", href: "/dashboard/forecasting", icon: PiChartPieSlice },
            { name: "Audit trail", href: "/dashboard/audit", icon: PiClockCounterClockwise },
        ]
    },
    {
        title: "Accounting",
        items: [
            { name: "Trial Balance", href: "/dashboard/accounting/reports/trial-balance", icon: PiChartLine },
            { name: "Balance Sheet", href: "/dashboard/accounting/reports/balance-sheet", icon: PiFileText },
            { name: "Income Statement", href: "/dashboard/accounting/reports/income-statement", icon: PiChartBar },
            { name: "Cash Flow Statement", href: "/dashboard/accounting/reports/cash-flow", icon: PiArrowsLeftRight },
            { name: "General Ledger", href: "/dashboard/accounting/ledger", icon: PiBookOpenText },
            { name: "Customers", href: "/dashboard/accounting/customers", icon: PiUsersThree },
            { name: "Sales & Income", href: "/dashboard/accounting/sales", icon: PiBookOpenText },
            { name: "Accounts Payable", href: "/dashboard/accounting/payables", icon: PiInvoice },
            { name: "Period Management", href: "/dashboard/accounting/periods", icon: PiCalendarBlank },
            { name: "Tax Rates", href: "/dashboard/accounting/tax-rates", icon: PiPercent },
            { name: "Chart of Accounts", href: "/dashboard/accounting/chart-of-accounts", icon: PiList },
            { name: "Bank Reconciliation", href: "/dashboard/accounting/reconciliation", icon: PiMagnifyingGlass },
        ]
    },
    {
        title: "Operations",
        items: [
            { name: "Vendors", href: "/dashboard/vendors", icon: PiBuildings },
            { name: "Invoices", href: "/dashboard/invoices", icon: PiInvoice },
            { name: "Contracts", href: "/dashboard/contracts", icon: PiFileText },
            { name: "Assets", href: "/dashboard/assets", icon: PiPackage },
            { name: "Schedules", href: "/dashboard/schedules", icon: PiCalendarBlank },
        ]
    },
    {
        title: "Administration",
        items: [
            { name: "Team management", href: "/dashboard/team", icon: PiUsers },
            { name: "Account Requests", href: "/dashboard/users", icon: PiUsersThree },
            { name: "Roles & Permissions", href: "/dashboard/roles", icon: PiShieldCheck },
            { name: "Policies", href: "/dashboard/policies", icon: PiShieldCheck },
            { name: "Regions", href: "/dashboard/regions", icon: PiGlobe },
            { name: "Branches", href: "/dashboard/branches", icon: PiBuildings },
            { name: "Data Import", href: "/dashboard/settings/import", icon: PiUploadSimple },
            { name: "System config", href: "/dashboard/settings", icon: PiGear },
        ]
    }
];

export function Sidebar({ isOpen = false, onClose, isDesktopCollapsed = false, onToggleDesktop }: { isOpen?: boolean; onClose?: () => void; isDesktopCollapsed?: boolean; onToggleDesktop?: () => void; }) {
    const pathname = usePathname();
    const { data: session } = useSession();
    const user = session?.user;
    const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());
    const [counts, setCounts] = useState<{ expenses: number; approvals: number }>({ expenses: 0, approvals: 0 });

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const res = await fetch('/api/approvals');
                const data = await res.json();
                if (data.counts) {
                    setCounts({
                        expenses: 0,
                        approvals: data.counts.total
                    });
                }
            } catch (error) {
                console.error("Failed to fetch sidebar counts:", error);
            }
        };

        if (session) {
            fetchCounts();
            const interval = setInterval(fetchCounts, 30000);
            return () => clearInterval(interval);
        }
    }, [session]);

    const getInitials = (name?: string | null) => {
        if (!name) return "??";
        return name.split(" ").map(n => n[0]).join("").toUpperCase();
    };

    /**
     * Checks if the user has access to a specific path using permissions.
     * Maps paths to logical permissions.
     */
    const hasAccess = (href: string) => {
        if (!user) return false;

        const role = (user as any).role || "EMPLOYEE";
        const permissions = (user as any).permissions || [];

        // System Admin has full access
        if (role === 'SYSTEM_ADMIN' || permissions.includes('*')) return true;

        // Permission Mappings
        // If a path requires a permission, checking if user has it (or wildcards)
        // Some standard permissions inferred:
        // ROLES.MANAGE or ROLES.VIEW -> Roles page
        // USERS.VIEW -> Team, Users pages
        // SETTINGS.MANAGE -> Settings
        // USERS.CREATE -> Onboarding?

        const requiredPermissions: Record<string, string[]> = {
            // Admin / Management
            "/dashboard/roles": ["ROLES.MANAGE", "ROLES.VIEW"],
            "/dashboard/team": ["USERS.VIEW", "USERS.MANAGE", "USERS.EDIT"],
            "/dashboard/users": ["USERS.VIEW", "USERS.MANAGE"],
            "/dashboard/settings": ["SETTINGS.MANAGE"],
            "/dashboard/settings/import": ["SETTINGS.MANAGE", "IMPORT.MANAGE"],
            "/dashboard/policies": ["POLICIES.MANAGE", "POLICIES.VIEW"],
            "/dashboard/regions": ["REGIONS.VIEW", "BRANCHES.VIEW"],
            "/dashboard/branches": ["BRANCHES.VIEW", "BRANCHES.MANAGE"],
            "/dashboard/branch-approvals": ["REQUISITIONS.VIEW_BRANCH", "REQUISITIONS.APPROVE"],

            // Financials
            "/dashboard/invoices": ["INVOICES.VIEW", "INVOICES.MANAGE", "SALES.MANAGE"],
            "/dashboard/approvals": ["EXPENSES.APPROVE", "REQUISITIONS.APPROVE", "APPROVALS.VIEW"],
            "/dashboard/salaries": ["SALARIES.VIEW", "SALARIES.MANAGE"],
            "/dashboard/wallet": ["WALLET.VIEW", "FINANCE.VIEW"],
            "/dashboard/budgets": ["BUDGETS.VIEW", "FINANCE.VIEW"],
            "/dashboard/forecasting": ["FORECASTING.VIEW", "FINANCE.VIEW"],
            "/dashboard/audit": ["AUDIT.VIEW"],

            // Accounting (Assuming ACCOUNTING permissions exist, or restricted to Admin for now?)
            // If the user has "Accounting" permissions in custom role, they should see these.
            "/dashboard/accounting/customers": ["ACCOUNTING.VIEW", "CUSTOMERS.VIEW", "SALES.MANAGE"],
            "/dashboard/accounting/sales": ["ACCOUNTING.VIEW", "SALES.MANAGE"],
            "/dashboard/accounting/payables": ["ACCOUNTING.VIEW", "PAYABLES.VIEW"],
            "/dashboard/accounting/ledger": ["ACCOUNTING.VIEW", "LEDGER.VIEW"],
            "/dashboard/accounting/reports/trial-balance": ["ACCOUNTING.VIEW", "REPORTS.VIEW"],
            "/dashboard/accounting/reports/balance-sheet": ["ACCOUNTING.VIEW", "REPORTS.VIEW"],
            "/dashboard/accounting/reports/income-statement": ["ACCOUNTING.VIEW", "REPORTS.VIEW"],
            "/dashboard/accounting/reports/cash-flow": ["ACCOUNTING.VIEW", "REPORTS.VIEW"],

            "/finance-studio": ["STUDIO.VIEW", "FINANCE.VIEW", "REPORTS.VIEW"],
            "/dashboard/workflow-analytics": ["ANALYTICS.VIEW", "REPORTS.VIEW"],

            // Operations
            "/dashboard/vendors": ["VENDORS.VIEW"],
            "/dashboard/contracts": ["CONTRACTS.VIEW"],
            "/dashboard/assets": ["ASSETS.VIEW"],
        };

        const required = requiredPermissions[href];

        // If no specific permission is mapped, check legacy role-based restrictions
        // This is a fallback to ensure we don't break things that aren't fully migrated to granular permissions yet
        if (!required) {
            // Legacy Restrictions Fallback
            const restrictions: Record<string, string[]> = {
                // Empty as everything should be mapped above now
            };

            if (restrictions[href]) {
                return restrictions[href].includes(role);
            }
            return true; // Default allow (e.g. Expenses, Requisitions)
        }

        // Check if user has ANY of the required permissions
        return required.some(p => permissions.includes(p));
    };

    return (
        <aside className={cn(
            "fixed left-0 top-0 h-full z-50 flex flex-col transition-all duration-300 bg-[#29258D] border-r border-[#29258D] sidebar-container",
            isOpen ? "translate-x-0 w-[280px]" : "-translate-x-full w-[280px]",
            "lg:translate-x-0",
            isDesktopCollapsed ? "lg:w-[88px]" : "lg:w-[280px]",
            "print:hidden"
        )}>
            {/* Logo Area */}
            <div className={cn("p-6 pb-6 flex items-center", isDesktopCollapsed ? "justify-center" : "justify-between")}>
                {!isDesktopCollapsed && (
                    <Link href="/dashboard" className="flex items-center gap-3">
                        <Image
                            src={
                                process.env.NEXT_PUBLIC_APP_NAME === "Pesanest"
                                    ? "/pesanest/pesanest-light-new.png"
                                    : (process.env.NEXT_PUBLIC_LOGO_URL || "/capitalpay.png")
                            }
                            alt={process.env.NEXT_PUBLIC_APP_NAME || "Capital Pay"}
                            width={150}
                            height={35}
                            className={cn(
                                "w-auto object-contain",
                                process.env.NEXT_PUBLIC_APP_NAME === "Pesanest" ? "h-10" : "h-6"
                            )}
                        />
                    </Link>
                )}
                <div className="flex items-center gap-2">
                    {onToggleDesktop && (
                        <Button onClick={onToggleDesktop} variant="ghost" size="icon" className="hidden lg:flex text-indigo-300 hover:text-white hover:bg-white/10 shrink-0">
                            <PiList className="text-xl" />
                        </Button>
                    )}
                    <Button onClick={onClose} variant="ghost" size="icon" className="lg:hidden text-indigo-300 hover:text-white hover:bg-white/10 shrink-0">
                        <PiX className="text-xl" />
                    </Button>
                </div>
            </div>

            {/* Search Bar - Hidden when collapsed */}
            {!isDesktopCollapsed && (
                <div className="px-6 mb-4">
                    <div className="relative group">
                        <PiMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white transition-colors text-sm" />
                        <input
                            type="text"
                            placeholder="Search menu..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/30 transition-all font-normal"
                        />
                    </div>
                </div>
            )}

            {/* Navigation */}
            <nav className={cn(
                "flex-1 overflow-y-auto py-2 space-y-8 custom-scrollbar",
                isDesktopCollapsed ? "px-0" : "pl-6 pr-8"
            )}>
                {menuCategories.map((category) => {
                    // Filter items based on SEARCH query first
                    const searchFilteredItems = category.items.filter(item =>
                        item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    );

                    if (searchFilteredItems.length === 0) return null;

                    // Then filter based on PERMISSIONS / ROLE
                    const filteredItems = searchFilteredItems.filter(item => hasAccess(item.href));

                    if (filteredItems.length === 0) return null;

                    const isCollapsed = collapsedCategories.has(category.title);

                    return (
                        <div key={category.title} className="space-y-1">
                            {!isDesktopCollapsed && (
                                <button
                                    onClick={() => {
                                        setCollapsedCategories(prev => {
                                            const next = new Set(prev);
                                            if (next.has(category.title)) next.delete(category.title);
                                            else next.add(category.title);
                                            return next;
                                        });
                                    }}
                                    className="w-full flex items-center justify-between px-2 py-2 group cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    <h2 className="text-[11px] font-normal tracking-[0.1em] uppercase text-indigo-300/40 group-hover:text-indigo-300/60 transition-colors">
                                        {category.title}
                                    </h2>
                                    <PiCaretDown
                                        className={cn(
                                            "text-indigo-300/40 text-xs transition-transform duration-200",
                                            isCollapsed ? "-rotate-90" : ""
                                        )}
                                    />
                                </button>
                            )}

                            <div className={cn(
                                "flex flex-col space-y-1 overflow-hidden transition-all duration-300 ease-in-out",
                                "px-2 -mx-2", // Expand clipping mask horizontally for shadow
                                isCollapsed ? "max-h-0 opacity-0" : "max-h-[1200px] opacity-100"
                            )}>
                                {filteredItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    const Icon = item.icon;
                                    let badge = item.badge;

                                    if (item.name === "Approvals" && counts.approvals > 0) {
                                        badge = counts.approvals.toString();
                                    }

                                    return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                prefetch={false}
                                                className={cn(
                                                    "relative flex items-center transition-all duration-300 group",
                                                    isDesktopCollapsed ? "justify-center rounded-xl aspect-square flex-col p-0 w-12 h-12 mx-auto shrink-0" : "rounded-xl gap-3 px-4 py-3",
                                                    isActive
                                                        ? cn("bg-[#06B6D4] text-white shadow-lg shadow-[#06B6D4]/40", !isDesktopCollapsed && "translate-x-1")
                                                        : "text-white/70 hover:text-white hover:bg-white/5"
                                                )}
                                                title={isDesktopCollapsed ? item.name : undefined}
                                            >
                                                <Icon
                                                    className={cn(
                                                        "transition-all duration-200",
                                                        isDesktopCollapsed ? "text-2xl" : "text-xl",
                                                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                                                    )}
                                                />
                                                {!isDesktopCollapsed && (
                                                    <span className={cn(
                                                        "text-xs font-normal tracking-wide flex-1",
                                                    )}>
                                                        {item.name}
                                                    </span>
                                                )}

                                                {(!isDesktopCollapsed && badge) && (
                                                    <span className={cn(
                                                        "text-[10px] font-bold px-2 py-0.5 rounded-lg",
                                                        isActive
                                                            ? "bg-white/20 text-white"
                                                            : "bg-indigo-500/20 text-indigo-300"
                                                    )}>
                                                        {badge}
                                                    </span>
                                                )}

                                                {(isDesktopCollapsed && badge) && (
                                                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 border-2 border-[#29258D] rounded-full"></span>
                                                )}

                                                {(!isDesktopCollapsed && isActive) && (
                                                    <PiCaretRightBold className="text-white text-xs animate-slide-in-right" />
                                                )}
                                            </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="p-4 lg:p-6 mt-auto">
                <div className={cn(
                    "bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors flex items-center",
                    isDesktopCollapsed ? "flex-col p-2 gap-2 justify-center" : "p-3 gap-3"
                )}>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 shadow-sm flex items-center justify-center border border-white/10 overflow-hidden relative group shrink-0">
                        <span className="font-heading font-normal text-xs text-indigo-300">
                            {getInitials(user?.name)}
                        </span>
                        <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    {!isDesktopCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-normal truncate text-white">
                                {user?.name || "User"}
                            </p>
                            <p className="text-[10px] font-normal text-indigo-300/60 capitalize">
                                {(user as any)?.role?.toLowerCase()?.replace(/_/g, ' ') || "Employee"}
                            </p>
                        </div>
                    )}
                    <Button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        variant="ghost"
                        size="icon"
                        className={cn("text-indigo-300/60 hover:text-rose-400 hover:bg-rose-500/10 transition-colors", isDesktopCollapsed && "w-10 h-10 mt-1")}
                        title="Sign out"
                    >
                        <PiSignOut className="text-lg" />
                    </Button>
                </div>
            </div>
        </aside>
    );
}

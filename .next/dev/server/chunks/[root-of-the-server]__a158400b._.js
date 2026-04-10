module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const prismaClientSingleton = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        log: [
            'error',
            'warn'
        ]
    });
};
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
const __TURBOPACK__default__export__ = prisma;
if ("TURBOPACK compile-time truthy", 1) globalThis.prismaGlobal = prisma;
}),
"[project]/src/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
;
;
// Centralised legacy role → permissions map (used in both authorize and session callbacks)
const LEGACY_PERMISSIONS = {
    'SYSTEM_ADMIN': [
        '*'
    ],
    'FINANCE_APPROVER': [
        'EXPENSES.VIEW_ALL',
        'EXPENSES.APPROVE',
        'INVOICES.VIEW_ALL',
        'INVOICES.VIEW',
        'INVOICES.APPROVE',
        'PAYMENTS.AUTHORIZE',
        'ACCOUNTING.VIEW',
        'LEDGER.VIEW',
        'REPORTS.VIEW',
        'APPROVALS.VIEW',
        'REQUISITIONS.APPROVE',
        'WALLET.VIEW',
        'FINANCE.VIEW',
        'BUDGETS.VIEW',
        'FORECASTING.VIEW',
        'AUDIT.VIEW',
        'ANALYTICS.VIEW',
        'VENDORS.VIEW',
        'CONTRACTS.VIEW',
        'ASSETS.VIEW',
        'BRANCHES.VIEW',
        'REGIONS.VIEW'
    ],
    'FINANCE_TEAM': [
        'EXPENSES.VIEW_ALL',
        'INVOICES.VIEW_ALL',
        'INVOICES.VIEW',
        'INVOICES.CREATE',
        'PAYMENTS.CREATE_BATCH',
        'ACCOUNTING.VIEW',
        'LEDGER.VIEW',
        'REPORTS.VIEW',
        'APPROVALS.VIEW',
        'REQUISITIONS.APPROVE',
        'WALLET.VIEW',
        'FINANCE.VIEW',
        'BUDGETS.VIEW',
        'FORECASTING.VIEW',
        'AUDIT.VIEW',
        'ANALYTICS.VIEW',
        'VENDORS.VIEW',
        'CONTRACTS.VIEW',
        'ASSETS.VIEW',
        'SALES.MANAGE'
    ],
    'MANAGER': [
        'EXPENSES.VIEW_TEAM',
        'EXPENSES.APPROVE',
        'INVOICES.VIEW',
        'INVOICES.VIEW_ALL',
        'REQUISITIONS.VIEW_TEAM',
        'REQUISITIONS.APPROVE',
        'APPROVALS.VIEW',
        'WALLET.VIEW',
        'BUDGETS.VIEW',
        'AUDIT.VIEW',
        'VENDORS.VIEW',
        'CONTRACTS.VIEW',
        'ASSETS.VIEW'
    ],
    'REGIONAL_MANAGER': [
        'REQUISITIONS.VIEW_BRANCH',
        'REQUISITIONS.APPROVE',
        'APPROVALS.VIEW',
        'BRANCHES.VIEW',
        'REGIONS.VIEW',
        'BRANCH_WALLET.VIEW',
        'ANALYTICS.VIEW',
        'REPORTS.VIEW',
        'EXPENSES.VIEW_TEAM'
    ],
    'TEAM_LEADER': [
        'REQUISITIONS.CREATE',
        'REQUISITIONS.VIEW_OWN',
        'EXPENSES.VIEW_OWN',
        'EXPENSES.CREATE',
        'BRANCH_WALLET.VIEW',
        'BRANCH_WALLET.DISBURSE',
        'VENDORS.VIEW'
    ],
    'EMPLOYEE': [
        'EXPENSES.VIEW_OWN',
        'EXPENSES.CREATE',
        'REQUISITIONS.VIEW_OWN',
        'REQUISITIONS.CREATE'
    ]
};
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            async authorize (credentials) {
                console.log("Authorize attempt for:", credentials?.email);
                const parsedCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(),
                    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6)
                }).safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    // Fetch user with Custom Role and Permissions
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                        where: {
                            email
                        },
                        include: {
                            customRole: {
                                include: {
                                    permissions: {
                                        include: {
                                            permission: true
                                        }
                                    }
                                }
                            }
                        }
                    });
                    if (!user) {
                        console.log("User not found:", email);
                        return null;
                    }
                    if (user && (user.accountStatus === 'PENDING' || !user.isActive)) {
                        console.log("User account pending or inactive:", email);
                        return null;
                    }
                    const passwordsMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
                    if (passwordsMatch) {
                        console.log("Password match for:", email);
                        let permissions = [];
                        if (user.customRole) {
                            // Custom role permissions take priority
                            permissions = user.customRole.permissions.map((rp)=>`${rp.permission.resource}.${rp.permission.action}`);
                        } else {
                            // Fallback to legacy role-based permissions
                            permissions = LEGACY_PERMISSIONS[user.role] || [];
                        }
                        return {
                            ...user,
                            permissions
                        };
                    }
                    console.log("Password mismatch for:", email);
                } else {
                    console.log("Invalid credentials format:", parsedCredentials.error.format());
                }
                return null;
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
                token.permissions = user.permissions || [];
                token.customRoleId = user.customRoleId;
            }
            return token;
        },
        async session ({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role;
                session.user.id = token.id;
                session.user.customRoleId = token.customRoleId;
                // Re-fetch permissions live from DB so admin role changes apply immediately
                // without requiring the user to log out and back in
                try {
                    const dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                        where: {
                            id: token.id
                        },
                        include: {
                            customRole: {
                                include: {
                                    permissions: {
                                        include: {
                                            permission: true
                                        }
                                    }
                                }
                            }
                        }
                    });
                    if (dbUser?.customRole) {
                        session.user.permissions = dbUser.customRole.permissions.map((rp)=>`${rp.permission.resource}.${rp.permission.action}`);
                    } else {
                        // Fallback to legacy role permissions
                        session.user.permissions = LEGACY_PERMISSIONS[token.role] || [];
                    }
                } catch  {
                    // Fallback to token permissions if DB is unavailable
                    session.user.permissions = token.permissions || [];
                }
            }
            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
    trustHost: true
});
}),
"[project]/src/lib/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXPENSE_CATEGORIES",
    ()=>EXPENSE_CATEGORIES,
    "getAllCategories",
    ()=>getAllCategories
]);
const EXPENSE_CATEGORIES = [
    // Fixed Recurring Expenses
    "Rent",
    "Internet & Connectivity",
    "Airtime & Communication",
    "Fuel Allocation",
    "Hired Bike Payments",
    // Operational Expenses
    "Stationery",
    "Office Supplies",
    "Meetings & Conferences",
    "Accommodation",
    "Emergency Field Expenses",
    // Petty Cash Expenses
    "Electricity",
    "Fuel",
    "Repairs",
    "Maintenance",
    // Procurement Expenses
    "ICT Equipment",
    "Furniture",
    "Hardware",
    "Water",
    // General / Other
    "Operations",
    "Salaries & Wages",
    "Travel & Transport",
    "Meals & Hospitality",
    "Per Diem / Allowance",
    "Casual Labor",
    "Utilities (Water, Power)",
    "Vehicle Maintenance",
    "Security Services",
    "Permits & Licenses",
    "Marketing & Branding",
    "Software & Subscriptions",
    "Equipment & Repairs",
    "Professional Services",
    "Medical & Welfare",
    "Bank Charges",
    "Other"
];
async function getAllCategories() {
    const prisma = (await __turbopack_context__.A("[project]/src/lib/prisma.ts [app-route] (ecmascript, async loader)")).default;
    try {
        const customCategories = await prisma.customCategory.findMany({
            where: {
                isActive: true
            },
            select: {
                name: true
            },
            orderBy: {
                name: "asc"
            }
        });
        const customCategoryNames = customCategories.map((c)=>c.name);
        // Merge built-in and custom categories, removing duplicates
        const allCategories = [
            ...EXPENSE_CATEGORIES,
            ...customCategoryNames
        ];
        return Array.from(new Set(allCategories));
    } catch (error) {
        console.error("Error fetching custom categories:", error);
        return EXPENSE_CATEGORIES;
    }
}
}),
"[project]/src/lib/budget-manager.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetManager",
    ()=>BudgetManager,
    "budgetManager",
    ()=>budgetManager
]);
/**
 * Budget Management and Alert System
 * Real-time budget tracking with overspend warnings and forecasting
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-route] (ecmascript)");
;
;
class BudgetManager {
    /**
     * Get all budgets for a user with current spending
     */ async getUserBudgets(userId) {
        const now = new Date();
        const currentMonth = now.getMonth() + 1; // 1-12
        const currentYear = now.getFullYear();
        // 1. Fetch defined budgets from DB (Production Source)
        const dbBudget = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].monthlyBudget.findFirst({
            where: {
                userId,
                month: currentMonth,
                year: currentYear
            },
            include: {
                items: true
            }
        });
        // 2. Define Default Limits (Fallback/Base)
        const defaultLimits = {
            "Operations": 10000,
            "Salaries & Wages": 50000,
            "Travel & Transport": 3000,
            "Meals & Hospitality": 1500,
            "Per Diem / Allowance": 3000,
            "Casual Labor": 2000,
            "Utilities (Water, Power)": 1500,
            "Rent / Premises": 5000,
            "Office Supplies": 800,
            "Medical & Welfare": 1200,
            "Vehicle Maintenance": 1500,
            "Security Services": 1000,
            "Permits & Licenses": 2500,
            "Marketing & Branding": 4000,
            "Software & Subscriptions": 2000,
            "Equipment & Repairs": 3500,
            "Professional Services": 5000,
            "Bank Charges": 300,
            "Other": 1000
        };
        // 3. Merge Defaults with DB Overrides
        const budgetMap = new Map();
        // Initialize with defaults for all known categories
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EXPENSE_CATEGORIES"].forEach((cat)=>{
            budgetMap.set(cat, defaultLimits[cat] || 1000);
        });
        // Override with DB values if available
        if (dbBudget?.items) {
            dbBudget.items.forEach((item)=>{
                if (item.category) {
                    budgetMap.set(item.category, item.amount);
                }
            });
        }
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        const expenses = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].expense.findMany({
            where: {
                userId,
                expenseDate: {
                    gte: firstDayOfMonth,
                    lte: lastDayOfMonth
                },
                status: {
                    not: 'REJECTED'
                }
            }
        });
        // 4. Transform to Budget Objects
        const budgets = Array.from(budgetMap.entries()).map(([categoryName, limit])=>{
            const categoryExpenses = expenses.filter((e)=>e.category === categoryName);
            const spent = categoryExpenses.reduce((sum, e)=>sum + e.amount, 0);
            const remaining = limit - spent;
            const percentUsed = spent / limit * 100;
            let status = 'HEALTHY';
            if (percentUsed >= 100) status = 'EXCEEDED';
            else if (percentUsed >= 90) status = 'CRITICAL';
            else if (percentUsed >= 75) status = 'WARNING';
            return {
                id: dbBudget?.id ? `db-${dbBudget.id}-${categoryName}` : `default-${categoryName}`,
                category: categoryName,
                amount: limit,
                period: 'MONTHLY',
                startDate: firstDayOfMonth,
                endDate: lastDayOfMonth,
                spent,
                remaining,
                percentUsed,
                status
            };
        });
        return budgets.sort((a, b)=>b.percentUsed - a.percentUsed); // Sort by usage
    }
    /**
     * Check if an expense would exceed budget
     */ async checkExpenseAgainstBudget(userId, category, amount) {
        const budgets = await this.getUserBudgets(userId);
        const budget = budgets.find((b)=>b.category === category);
        if (!budget) {
            return {
                allowed: true,
                currentSpend: 0,
                budgetAmount: 0,
                remainingAfter: 0,
                percentAfter: 0
            };
        }
        const newTotal = budget.spent + amount;
        const percentAfter = newTotal / budget.amount * 100;
        const remainingAfter = budget.amount - newTotal;
        let warning;
        let allowed = true;
        if (percentAfter >= 100) {
            if ("TURBOPACK compile-time truthy", 1) {
                allowed = true;
                warning = `Notice: This expense exceeds your ${category} budget. (Overspend allowed for Capital Pay)`;
            } else //TURBOPACK unreachable
            ;
        } else if (percentAfter >= 90) {
            warning = `⚠️ Warning: This expense will bring you to ${percentAfter.toFixed(0)}% of your ${category} budget. Only $${remainingAfter.toFixed(2)} remaining.`;
        } else if (percentAfter >= 75) {
            warning = `Notice: After this expense, you'll have used ${percentAfter.toFixed(0)}% of your ${category} budget.`;
        }
        return {
            allowed,
            warning,
            currentSpend: budget.spent,
            budgetAmount: budget.amount,
            remainingAfter,
            percentAfter
        };
    }
    /**
     * Generate budget alerts based on spending patterns
     */ async generateAlerts(userId) {
        const budgets = await this.getUserBudgets(userId);
        const alerts = [];
        const now = new Date();
        budgets.forEach((budget)=>{
            const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
            const daysPassed = now.getDate();
            const daysRemaining = daysInMonth - daysPassed;
            const expectedSpendByNow = budget.amount / daysInMonth * daysPassed;
            const dailyBurnRate = budget.spent / daysPassed;
            const projectedMonthEnd = dailyBurnRate * daysInMonth;
            // Alert: Budget exceeded
            if (budget.status === 'EXCEEDED') {
                alerts.push({
                    id: `alert-exceeded-${budget.category}`,
                    type: 'EXCEEDED',
                    category: budget.category,
                    message: `${budget.category} budget exceeded by $${Math.abs(budget.remaining).toFixed(2)}`,
                    currentSpend: budget.spent,
                    budgetAmount: budget.amount,
                    percentUsed: budget.percentUsed,
                    daysRemaining,
                    severity: 'critical'
                });
            } else if (budget.status === 'CRITICAL') {
                alerts.push({
                    id: `alert-critical-${budget.category}`,
                    type: 'CRITICAL',
                    category: budget.category,
                    message: `${budget.category} budget at ${budget.percentUsed.toFixed(0)}% - only $${budget.remaining.toFixed(2)} remaining`,
                    currentSpend: budget.spent,
                    budgetAmount: budget.amount,
                    percentUsed: budget.percentUsed,
                    daysRemaining,
                    severity: 'high'
                });
            } else if (budget.status === 'WARNING') {
                alerts.push({
                    id: `alert-warning-${budget.category}`,
                    type: 'WARNING',
                    category: budget.category,
                    message: `${budget.category} budget at ${budget.percentUsed.toFixed(0)}% with ${daysRemaining} days remaining`,
                    currentSpend: budget.spent,
                    budgetAmount: budget.amount,
                    percentUsed: budget.percentUsed,
                    daysRemaining,
                    severity: 'medium'
                });
            }
            // Alert: Forecast overspend
            if (projectedMonthEnd > budget.amount && budget.status !== 'EXCEEDED') {
                const projectedOverspend = projectedMonthEnd - budget.amount;
                alerts.push({
                    id: `alert-forecast-${budget.category}`,
                    type: 'FORECAST',
                    category: budget.category,
                    message: `At current rate, ${budget.category} will exceed budget by $${projectedOverspend.toFixed(2)} by month end`,
                    currentSpend: budget.spent,
                    budgetAmount: budget.amount,
                    percentUsed: budget.percentUsed,
                    daysRemaining,
                    projectedOverspend,
                    severity: 'medium'
                });
            }
            // Alert: Spending ahead of schedule
            if (budget.spent > expectedSpendByNow * 1.2 && budget.status === 'HEALTHY') {
                alerts.push({
                    id: `alert-pace-${budget.category}`,
                    type: 'WARNING',
                    category: budget.category,
                    message: `${budget.category} spending ${((budget.spent / expectedSpendByNow - 1) * 100).toFixed(0)}% ahead of expected pace`,
                    currentSpend: budget.spent,
                    budgetAmount: budget.amount,
                    percentUsed: budget.percentUsed,
                    daysRemaining,
                    severity: 'low'
                });
            }
        });
        // Sort by severity
        const severityOrder = {
            critical: 0,
            high: 1,
            medium: 2,
            low: 3
        };
        return alerts.sort((a, b)=>severityOrder[a.severity] - severityOrder[b.severity]);
    }
    /**
     * Get budget summary statistics
     */ async getBudgetSummary(userId) {
        const budgets = await this.getUserBudgets(userId);
        const totalBudget = budgets.reduce((sum, b)=>sum + b.amount, 0);
        const totalSpent = budgets.reduce((sum, b)=>sum + b.spent, 0);
        const totalRemaining = totalBudget - totalSpent;
        const healthyCount = budgets.filter((b)=>b.status === 'HEALTHY').length;
        const warningCount = budgets.filter((b)=>b.status === 'WARNING').length;
        const criticalCount = budgets.filter((b)=>b.status === 'CRITICAL').length;
        const exceededCount = budgets.filter((b)=>b.status === 'EXCEEDED').length;
        return {
            totalBudget,
            totalSpent,
            totalRemaining,
            percentUsed: totalSpent / totalBudget * 100,
            budgetCount: budgets.length,
            healthyCount,
            warningCount,
            criticalCount,
            exceededCount,
            overallStatus: exceededCount > 0 ? 'EXCEEDED' : criticalCount > 0 ? 'CRITICAL' : warningCount > 0 ? 'WARNING' : 'HEALTHY'
        };
    }
}
const budgetManager = new BudgetManager();
}),
"[project]/src/app/api/budgets/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
/**
 * Budget Dashboard API
 * Real-time budget tracking with alerts and forecasting
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$budget$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/budget-manager.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const userId = session.user.id;
        // Get comprehensive budget data
        const [budgets, alerts, summary] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$budget$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["budgetManager"].getUserBudgets(userId),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$budget$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["budgetManager"].generateAlerts(userId),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$budget$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["budgetManager"].getBudgetSummary(userId)
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                budgets,
                alerts,
                summary
            }
        });
    } catch (error) {
        console.error('Budget fetch error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch budget data',
            details: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a158400b._.js.map
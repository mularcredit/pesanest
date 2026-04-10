module.exports = [
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
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
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            async authorize (credentials) {
                console.log("Authorize attempt for:", credentials?.email);
                const parsedCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(),
                    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6)
                }).safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    // Fetch user with Custom Role and Permissions
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
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
                    const passwordsMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
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
                    const dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
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
"[project]/src/lib/closure-check.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEnforceClosure",
    ()=>checkEnforceClosure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
async function checkEnforceClosure(userId) {
    try {
        // 1. First check if user is an Admin - Admins are EXEMPT from closure restrictions
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: userId
            },
            select: {
                role: true
            }
        });
        const isAdmin = user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN' || user?.role === 'SYSTEM_ADMIN';
        if (isAdmin) return {
            blocked: false
        };
        // 2. Check the global setting
        const setting = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].systemSetting.findUnique({
            where: {
                key: 'enforce_request_closure'
            }
        });
        // Deactivated by default (unless strictly set to 'true')
        if (!setting || setting.value !== 'true') {
            return {
                blocked: false
            };
        }
        // 3. Count active (non-finalized) requests
        const DONE_STATUSES = [
            'CLOSED',
            'REJECTED',
            'PAID',
            'COMPLETED',
            'FULFILLED',
            'APPROVED'
        ];
        const activeExpenses = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].expense.count({
            where: {
                userId,
                status: {
                    notIn: DONE_STATUSES
                }
            }
        });
        const activeReqs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.count({
            where: {
                userId,
                status: {
                    notIn: DONE_STATUSES
                }
            }
        });
        if (activeExpenses > 0 || activeReqs > 0) {
            return {
                blocked: true,
                message: `You have ${activeExpenses + activeReqs} open request(s) that must be finalized (Paid/Closed) before creating a new one.`
            };
        }
        return {
            blocked: false
        };
    } catch (e) {
        console.error("Closure check error:", e);
        return {
            blocked: false
        }; // Fail open for safety
    }
}
}),
"[project]/src/lib/policy-engine.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolicyEngine",
    ()=>PolicyEngine,
    "checkExpensePolicies",
    ()=>checkExpensePolicies,
    "policyEngine",
    ()=>policyEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
class PolicyEngine {
    /**
     * Validate an expense against all active policies
     */ async validateExpense(userId, data) {
        // Check if user is admin - admins bypass ALL policy restrictions
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: userId
            },
            select: {
                role: true
            }
        });
        const isAdmin = user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN' || user?.role === 'SYSTEM_ADMIN';
        const isCapitalPay = ("TURBOPACK compile-time value", "Capital Pay") === 'Capital Pay';
        // Admins and Capital Pay users are exempt from policy-level spending limits
        if ("TURBOPACK compile-time truthy", 1) {
            return {
                compliant: true,
                canSubmit: true,
                violations: [],
                warnings: [],
                info: [
                    {
                        policyId: 'spending-limit-bypass',
                        policyName: ("TURBOPACK compile-time truthy", 1) ? 'Capital Pay Policy' : "TURBOPACK unreachable",
                        message: ("TURBOPACK compile-time truthy", 1) ? 'Scaling/spending limits are removed for Capital Pay.' : "TURBOPACK unreachable",
                        isBlocking: false
                    }
                ]
            };
        }
        //TURBOPACK unreachable
        ;
        const policies = undefined;
        const violations = undefined;
        const warnings = undefined;
        const info = undefined;
        // Helper: partial check for "is weekend"
        const isWeekend = undefined;
        // Helper: check business hours (e.g., 9am to 6pm)
        const isOutsideBusinessHours = undefined;
        const policy = undefined;
    }
}
const policyEngine = new PolicyEngine();
async function checkExpensePolicies(data) {
    const result = await policyEngine.validateExpense(data.userId, {
        ...data,
        title: data.title || "Expense",
        hasReceipt: !!data.receiptUrl
    });
    return {
        isValid: result.compliant,
        violations: result.violations,
        requiresApproval: !result.compliant || result.warnings.length > 0
    };
}
}),
"[project]/src/lib/approval-workflow.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApprovalWorkflowEngine",
    ()=>ApprovalWorkflowEngine,
    "approvalWorkflow",
    ()=>approvalWorkflow
]);
/**
 * Approval Workflow Automation Engine
 * Intelligent routing based on amount, category, department, and custom rules
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
class ApprovalWorkflowEngine {
    rules = [
        {
            id: 'rule-1',
            name: 'Small expenses auto-approve',
            priority: 1,
            conditions: {
                amountMax: 50
            },
            approvers: []
        },
        {
            id: 'rule-ssca-strict',
            name: 'South Sudan CA - Strict',
            priority: 0,
            conditions: {
                requisitionType: 'SOUTH_SUDAN_STRICT'
            },
            approvers: [
                {
                    level: 1,
                    role: 'FINANCE_APPROVER',
                    required: true
                },
                {
                    level: 2,
                    role: 'SYSTEM_ADMIN',
                    required: true
                }
            ]
        },
        {
            id: 'rule-ssca',
            name: 'South Sudan CA - Expedited',
            priority: 0,
            conditions: {
                requisitionType: 'SOUTH_SUDAN'
            },
            approvers: [] // Auto-approve / Fast Track
        },
        {
            id: 'rule-standard-approval',
            name: 'Standard Approval Chain',
            priority: 10,
            conditions: {
                amountMin: 50
            },
            approvers: [
                {
                    level: 1,
                    role: 'REGIONAL_MANAGER',
                    required: true
                },
                {
                    level: 2,
                    role: 'FINANCE_APPROVER',
                    required: true
                },
                {
                    level: 3,
                    role: 'SYSTEM_ADMIN',
                    required: true
                }
            ]
        }
    ];
    /**
     * Determine approval route for an expense
     */ async determineRoute(userId, amount, category, hasReceipt, requisitionType, regionId) {
        // 0. Immediate bypass for SSCA Expedited (Hard rule)
        if (requisitionType === 'SOUTH_SUDAN') {
            return {
                levels: [],
                estimatedDays: 0,
                autoApprove: true,
                reason: 'South Sudan CA - Expedited Path (Bypassed Rules)'
            };
        }
        // 1. Check for Dynamic Auto-Approval Policies in DB
        const autoApprovalPolicies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].policy.findMany({
            where: {
                type: 'AUTO_APPROVAL',
                isActive: true
            }
        });
        for (const policy of autoApprovalPolicies){
            try {
                const rules = JSON.parse(policy.rules);
                if (rules.amountMax !== undefined && amount <= rules.amountMax) {
                    return {
                        levels: [],
                        estimatedDays: 0,
                        autoApprove: true,
                        reason: `Auto-approved by policy: ${policy.name} (Threshold: $${rules.amountMax})`
                    };
                }
            } catch (e) {
                console.error(`Failed to parse rules for policy ${policy.id}`);
            }
        }
        // 2. Fallback to hardcoded rules (or find matching rule)
        const matchingRule = this.findMatchingRule(amount, category, hasReceipt, requisitionType);
        if (matchingRule) {
            if (matchingRule.approvers.length === 0) {
                return {
                    levels: [],
                    estimatedDays: 0,
                    autoApprove: true,
                    reason: `Auto-approved by rule: ${matchingRule.name}`
                };
            }
        }
        if (!matchingRule) {
            // If no rules match and no auto-approval policy was found, 
            // check if we should still auto-approve based on the legacy rule-1
            if (amount <= 50) {
                return {
                    levels: [],
                    estimatedDays: 0,
                    autoApprove: true,
                    reason: `Auto-approved: Legacy threshold ($50)`
                };
            }
            // If it's over $50 and no rules match, we probably need at least one approval or it's an error.
            // For safety, let's skip auto-approve if no policy/rule found for larger amounts.
            return {
                levels: [],
                estimatedDays: 0,
                autoApprove: false,
                reason: `No matching approval path found for $${amount}`
            };
        }
        // Get user's manager and build approval chain
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: userId
            },
            include: {
                manager: true
            }
        });
        const levels = await Promise.all(matchingRule.approvers.map(async (approverRule)=>{
            const approvers = await this.getApprovers(approverRule.role, user?.managerId || null, user?.department || null, regionId);
            return {
                level: approverRule.level,
                approvers: approvers.map((a)=>({
                        id: a.id,
                        name: a.name,
                        email: a.email,
                        role: a.role
                    })),
                required: approverRule.required,
                status: 'PENDING'
            };
        }));
        const estimatedDays = levels.length * 1.5; // Estimate 1.5 days per level
        return {
            levels,
            estimatedDays,
            autoApprove: false,
            reason: `Matched rule: ${matchingRule.name}`
        };
    }
    /**
     * Find the matching approval rule
     */ findMatchingRule(amount, category, hasReceipt, requisitionType) {
        // Sort by priority and find first match
        const sorted = [
            ...this.rules
        ].sort((a, b)=>a.priority - b.priority);
        for (const rule of sorted){
            const { conditions } = rule;
            // Check amount range
            if (conditions.amountMin !== undefined && amount < conditions.amountMin) continue;
            if (conditions.amountMax !== undefined && amount > conditions.amountMax) continue;
            // Check category
            if (conditions.categories && !conditions.categories.includes(category)) continue;
            // Check receipt requirement
            if (conditions.requiresReceipt && !hasReceipt) continue;
            // Check Requisition Type
            if (conditions.requisitionType && conditions.requisitionType !== requisitionType) continue;
            return rule;
        }
        return null;
    }
    /**
     * Get approvers based on role
     */ async getApprovers(role, managerId, department, regionId) {
        if (role === 'REGIONAL_MANAGER' && regionId) {
            // Find regional manager for this specific region
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findMany({
                where: {
                    role: 'REGIONAL_MANAGER',
                    regionId: regionId,
                    isActive: true
                }
            });
        }
        if (role === 'MANAGER' && managerId) {
            const manager = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                where: {
                    id: managerId
                }
            });
            return manager ? [
                manager
            ] : [];
        }
        // Get users by role
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findMany({
            where: {
                role,
                isActive: true,
                ...department && role === 'FINANCE_TEAM' ? {
                    department
                } : {}
            },
            take: 3
        });
    }
    /**
     * Create approval records for an expense
     */ async createApprovals(expenseId, route) {
        if (route.autoApprove) {
            // Auto-approve the expense
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].expense.update({
                where: {
                    id: expenseId
                },
                data: {
                    status: 'APPROVED'
                }
            });
            return [];
        }
        const approvals = [];
        for (const level of route.levels){
            for (const approver of level.approvers){
                const approval = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.create({
                    data: {
                        expenseId,
                        approverId: approver.id,
                        level: level.level,
                        status: 'PENDING'
                    }
                });
                approvals.push(approval);
            }
        }
        // Update expense status
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].expense.update({
            where: {
                id: expenseId
            },
            data: {
                status: 'PENDING_APPROVAL'
            }
        });
        return approvals;
    }
    /**
     * Create approval records for a requisition
     */ async createRequisitionApprovals(requisitionId, route) {
        if (route.autoApprove) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.update({
                where: {
                    id: requisitionId
                },
                data: {
                    status: 'APPROVED'
                }
            });
            return [];
        }
        const approvals = [];
        for (const level of route.levels){
            for (const approver of level.approvers){
                const approval = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.create({
                    data: {
                        requisitionId,
                        approverId: approver.id,
                        level: level.level,
                        status: 'PENDING'
                    }
                });
                approvals.push(approval);
            }
        }
        return approvals;
    }
    /**
     * Create approval records for a budget plan
     */ async createBudgetApprovals(budgetId, route) {
        if (route.autoApprove) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].monthlyBudget.update({
                where: {
                    id: budgetId
                },
                data: {
                    status: 'APPROVED'
                }
            });
            return [];
        }
        const approvals = [];
        for (const level of route.levels){
            for (const approver of level.approvers){
                const approval = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.create({
                    data: {
                        monthlyBudgetId: budgetId,
                        approverId: approver.id,
                        level: level.level,
                        status: 'PENDING'
                    }
                });
                approvals.push(approval);
            }
        }
        return approvals;
    }
    async processApproval(approvalId, decision, comments, isOverride = false, actualApproverId) {
        const updateData = {
            status: decision,
            comments,
            approvedAt: new Date()
        };
        // If an admin is overriding the approval, update the approverId so 
        // the audit log reflects exactly who performed the action.
        if (isOverride && actualApproverId) {
            updateData.approverId = actualApproverId;
        }
        const approval = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.update({
            where: {
                id: approvalId
            },
            data: updateData,
            include: {
                expense: {
                    include: {
                        approvals: true
                    }
                },
                requisition: {
                    include: {
                        approvals: true
                    }
                },
                monthlyBudget: {
                    include: {
                        approvals: true
                    }
                }
            }
        });
        // Handle Expense Approval
        if (approval.expense) {
            if (decision === 'REJECTED' || isOverride) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].expense.update({
                    where: {
                        id: approval.expenseId
                    },
                    data: {
                        status: decision === 'APPROVED' ? 'APPROVED' : 'REJECTED'
                    }
                });
                if (isOverride) {
                    // Mark all other pending approvals as SKIPPED
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.updateMany({
                        where: {
                            expenseId: approval.expenseId,
                            status: 'PENDING'
                        },
                        data: {
                            status: 'SKIPPED'
                        }
                    });
                }
                return;
            }
            const pendingApprovals = approval.expense.approvals.filter((a)=>a.status === 'PENDING');
            if (pendingApprovals.length === 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].expense.update({
                    where: {
                        id: approval.expenseId
                    },
                    data: {
                        status: 'APPROVED'
                    }
                });
            }
        }
        // Handle Requisition Approval
        if (approval.requisition) {
            if (decision === 'REJECTED' || isOverride) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.update({
                    where: {
                        id: approval.requisitionId
                    },
                    data: {
                        status: decision === 'APPROVED' ? 'APPROVED' : 'REJECTED'
                    }
                });
                if (isOverride) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.updateMany({
                        where: {
                            requisitionId: approval.requisitionId,
                            status: 'PENDING'
                        },
                        data: {
                            status: 'SKIPPED'
                        }
                    });
                }
                return;
            }
            const pendingApprovals = approval.requisition.approvals.filter((a)=>a.status === 'PENDING');
            if (pendingApprovals.length === 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.update({
                    where: {
                        id: approval.requisitionId
                    },
                    data: {
                        status: 'APPROVED'
                    }
                });
            }
        }
        // Handle Budget Approval
        if (approval.monthlyBudget) {
            if (decision === 'REJECTED' || isOverride) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].monthlyBudget.update({
                    where: {
                        id: approval.monthlyBudgetId
                    },
                    data: {
                        status: decision === 'APPROVED' ? 'APPROVED' : 'REJECTED'
                    }
                });
                if (isOverride) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.updateMany({
                        where: {
                            monthlyBudgetId: approval.monthlyBudgetId,
                            status: 'PENDING'
                        },
                        data: {
                            status: 'SKIPPED'
                        }
                    });
                }
                return;
            }
            const pendingApprovals = approval.monthlyBudget.approvals.filter((a)=>a.status === 'PENDING');
            if (pendingApprovals.length === 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].monthlyBudget.update({
                    where: {
                        id: approval.monthlyBudgetId
                    },
                    data: {
                        status: 'APPROVED'
                    }
                });
            }
        }
    }
    /**
     * Get pending approvals for a user
     */ async getPendingApprovals(approverId) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.findMany({
            where: {
                approverId,
                status: 'PENDING'
            },
            include: {
                expense: {
                    include: {
                        user: true
                    }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
    }
    /**
     * Get approval statistics
     */ async getApprovalStats(approverId, days = 30) {
        const since = new Date();
        since.setDate(since.getDate() - days);
        const approvals = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].approval.findMany({
            where: {
                approverId,
                createdAt: {
                    gte: since
                }
            }
        });
        const total = approvals.length;
        const approved = approvals.filter((a)=>a.status === 'APPROVED').length;
        const rejected = approvals.filter((a)=>a.status === 'REJECTED').length;
        const pending = approvals.filter((a)=>a.status === 'PENDING').length;
        // Calculate average response time
        const completedApprovals = approvals.filter((a)=>a.approvedAt);
        const avgResponseTime = completedApprovals.length > 0 ? completedApprovals.reduce((sum, a)=>{
            const responseTime = a.approvedAt.getTime() - a.createdAt.getTime();
            return sum + responseTime;
        }, 0) / completedApprovals.length / (1000 * 60 * 60) // Convert to hours
         : 0;
        return {
            total,
            approved,
            rejected,
            pending,
            approvalRate: total > 0 ? approved / total * 100 : 0,
            avgResponseTimeHours: avgResponseTime
        };
    }
}
const approvalWorkflow = new ApprovalWorkflowEngine();
}),
"[project]/src/app/dashboard/requisitions/new/multi-item-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0055ad71838ff70d1e9df2e7fb7df6728aa730ac9a":"getExpenseAccountsAction","00759d09b12d20c3d57c9ac1915c9f6e67486cd37d":"getUserBranchAndDepartmentAction","0091a92555f278240af27907405115155c98dadd58":"getCategoriesAction","00da2e63c392810a63b6438f5c38c682a140091ef0":"getEligibleRequisitions","00eb32d07ce872f4d06f644c06492316c1f91587f3":"getVendorsAction","4097090b14f3694beb8d26a31e2b39646a909d56a7":"createRequisitionWithItems","40ce350df0d7e11b23077af3a50f4fd58849efd1f4":"createExpenseAccountAction","605e94e6d019fd67ba1466bcceca4ce4d13bc833f7":"addItemToRequisition"},"",""] */ __turbopack_context__.s([
    "addItemToRequisition",
    ()=>addItemToRequisition,
    "createExpenseAccountAction",
    ()=>createExpenseAccountAction,
    "createRequisitionWithItems",
    ()=>createRequisitionWithItems,
    "getCategoriesAction",
    ()=>getCategoriesAction,
    "getEligibleRequisitions",
    ()=>getEligibleRequisitions,
    "getExpenseAccountsAction",
    ()=>getExpenseAccountsAction,
    "getUserBranchAndDepartmentAction",
    ()=>getUserBranchAndDepartmentAction,
    "getVendorsAction",
    ()=>getVendorsAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$closure$2d$check$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/closure-check.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$policy$2d$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/policy-engine.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$approval$2d$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/approval-workflow.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const RequisitionItemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Item title must be at least 3 characters"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive("Quantity must be positive"),
    unitPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().positive("Unit price must be positive"),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Category is required"),
    isRecurring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    frequency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const RequisitionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, "Title must be at least 5 characters"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Justification must be at least 10 characters"),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("USD"),
    items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(RequisitionItemSchema).min(1, "At least one item is required")
});
async function createRequisitionWithItems(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) throw new Error("Unauthorized");
    // Parse items from formData
    const itemsJson = formData.get("items");
    const items = JSON.parse(itemsJson);
    const validatedFields = RequisitionSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        currency: formData.get("currency"),
        items
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
    const closureCheck = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$closure$2d$check$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkEnforceClosure"])(session.user.id);
    if (closureCheck.blocked) {
        return {
            message: closureCheck.message
        };
    }
    const { title, description, currency, items: validatedItems } = validatedFields.data;
    // Calculate total amount
    const totalAmount = validatedItems.reduce((sum, item)=>sum + item.quantity * item.unitPrice, 0);
    // Get the primary category (from first item or most expensive item)
    const primaryCategory = validatedItems.sort((a, b)=>b.quantity * b.unitPrice - a.quantity * a.unitPrice)[0].category;
    // Run Policy Checks
    const policyResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$policy$2d$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkExpensePolicies"])({
        title,
        amount: totalAmount,
        category: primaryCategory,
        expenseDate: new Date(),
        userId: session.user.id
    });
    if (!policyResult.isValid) {
        const blockers = policyResult.violations.filter((v)=>v.isBlocking).map((v)=>v.message);
        if (blockers.length > 0) {
            return {
                message: `Policy Violation: ${blockers.join(", ")}`
            };
        }
    }
    let type = formData.get("type") || "STANDARD";
    const isSSCA = formData.get("isSSCA") === "true";
    const isStrictApproval = formData.get("isStrictApproval") === "true";
    if (isSSCA) {
        if (session.user.role !== "SYSTEM_ADMIN") {
            return {
                message: "Unauthorized: Only System Administrators can create South Sudan Civil Aviation requests."
            };
        }
        type = isStrictApproval ? "SOUTH_SUDAN_STRICT" : "SOUTH_SUDAN";
    }
    // Fetch user for branch/region info
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
        where: {
            id: session.user.id
        },
        select: {
            id: true,
            branchId: true,
            regionId: true,
            leadBranch: true
        }
    });
    const branchId = formData.get("branchId") || formData.get("branch") || user?.branchId || user?.leadBranch?.id;
    const department = formData.get("department");
    const vendor = formData.get("vendor");
    const expectedDateStr = formData.get("expectedDate");
    const paymentMethod = formData.get("paymentMethod");
    const paymentReference = formData.get("paymentReference");
    const accountId = formData.get("accountId");
    let finalDescription = description;
    if (vendor && vendor.trim()) {
        finalDescription += `\n\n**Preferred Vendor:** ${vendor.trim()}`;
    }
    const expectedDate = expectedDateStr ? new Date(expectedDateStr) : undefined;
    // Calculate Next Run Date helper
    const calculateNextRun = (startDate, frequency)=>{
        const nextRun = new Date(startDate);
        switch(frequency){
            case "DAILY":
                nextRun.setDate(nextRun.getDate() + 1);
                break;
            case "WEEKLY":
                nextRun.setDate(nextRun.getDate() + 7);
                break;
            case "MONTHLY":
                nextRun.setMonth(nextRun.getMonth() + 1);
                break;
            case "QUARTERLY":
                nextRun.setMonth(nextRun.getMonth() + 3);
                break;
            case "YEARLY":
                nextRun.setFullYear(nextRun.getFullYear() + 1);
                break;
        }
        return nextRun;
    };
    // Create requisition with items
    const requisition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.create({
        data: {
            userId: session.user.id,
            title,
            amount: totalAmount,
            currency,
            category: primaryCategory,
            description: finalDescription,
            businessJustification: finalDescription,
            status: "PENDING",
            type,
            branchId,
            department,
            expectedDate,
            ...accountId ? {
                accountId
            } : {},
            ...paymentMethod ? {
                paymentMethod
            } : {},
            ...paymentReference ? {
                paymentReference
            } : {},
            items: {
                create: validatedItems.map((item)=>{
                    const isRecurring = item.isRecurring === true;
                    const startDate = item.startDate ? new Date(item.startDate) : new Date();
                    return {
                        title: item.title,
                        description: item.description || "",
                        quantity: item.quantity,
                        unitPrice: item.unitPrice,
                        totalPrice: item.quantity * item.unitPrice,
                        category: item.category,
                        isRecurring: isRecurring,
                        ...isRecurring && item.frequency ? {
                            schedule: {
                                create: {
                                    name: `Auto: ${item.title}`,
                                    frequency: item.frequency,
                                    startDate: startDate,
                                    nextRun: calculateNextRun(startDate, item.frequency),
                                    isActive: true,
                                    createdById: session.user.id
                                }
                            }
                        } : {}
                    };
                })
            }
        }
    });
    // Resolve regionId for approval routing
    const userWithBranch = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
        where: {
            id: session.user.id
        },
        include: {
            leadBranch: true
        }
    });
    const userRegionId = userWithBranch?.regionId || userWithBranch?.leadBranch?.regionId;
    // Initiate Approval Workflow
    console.log(`[Requisition] Creating workflow for amount: ${totalAmount}, category: ${primaryCategory}`);
    const route = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$approval$2d$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["approvalWorkflow"].determineRoute(session.user.id, totalAmount, primaryCategory, false, type, userRegionId || undefined);
    console.log(`[Requisition] Route determined: ${route.autoApprove ? 'Auto-approve' : 'Levels: ' + route.levels.length}`);
    const approvals = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$approval$2d$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["approvalWorkflow"].createRequisitionApprovals(requisition.id, route);
    console.log(`[Requisition] Created ${approvals.length} approval records`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard/requisitions");
}
async function addItemToRequisition(requisitionId, itemData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) {
        return {
            error: "Unauthorized"
        };
    }
    const validatedItem = RequisitionItemSchema.safeParse(itemData);
    if (!validatedItem.success) {
        return {
            errors: validatedItem.error.flatten().fieldErrors
        };
    }
    const closureCheck = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$closure$2d$check$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkEnforceClosure"])(session.user.id);
    const { title, description, quantity, unitPrice, category } = validatedItem.data;
    const totalPrice = quantity * unitPrice;
    try {
        if (!session?.user?.id) throw new Error("Unauthorized");
        // Fetch parent requisition to get type and currency
        const parentRequisition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.findUnique({
            where: {
                id: requisitionId
            },
            select: {
                type: true,
                currency: true,
                status: true
            }
        });
        if (!parentRequisition) {
            return {
                error: "Requisition not found"
            };
        }
        // Fetch user region
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: session.user.id
            },
            select: {
                regionId: true,
                leadBranch: {
                    select: {
                        regionId: true
                    }
                }
            }
        });
        const userRegionId = user?.regionId || user?.leadBranch?.regionId;
        // Determine Approval Route for this item
        // We reuse the main workflow engine but apply it to this specific item
        const route = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$approval$2d$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["approvalWorkflow"].determineRoute(session.user.id, totalPrice, category, false, parentRequisition.type, userRegionId || undefined);
        // Determine item status based on route
        // If the parent is already approved/paid, and this valid route says auto-approve (like SSCA), 
        // then we can approve immediately.
        // Otherwise, it starts as PENDING.
        const initialStatus = route.autoApprove ? 'APPROVED' : 'PENDING';
        // Create the new item with its specific status
        const newItem = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisitionItem.create({
            data: {
                requisitionId,
                title,
                description: description || "",
                quantity,
                unitPrice,
                totalPrice,
                category,
                isInitial: false,
                status: initialStatus,
                type: parentRequisition.type
            }
        });
        // Create Approval Records if not auto-approved
        if (!route.autoApprove) {
            for (const level of route.levels){
                for (const approver of level.approvers){
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].itemApproval.create({
                        data: {
                            requisitionItemId: newItem.id,
                            approverId: approver.id,
                            level: level.level,
                            status: 'PENDING'
                        }
                    });
                }
            }
        }
        // Recalculate total amount for the requisition details
        // Note: The main requisition status does NOT change back to PENDING.
        // The new item has its own independent lifecycle.
        const allItems = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisitionItem.findMany({
            where: {
                requisitionId
            }
        });
        const newTotalAmount = allItems.reduce((sum, item)=>sum + item.totalPrice, 0);
        // Update requisition amount
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.update({
            where: {
                id: requisitionId
            },
            data: {
                amount: newTotalAmount
            }
        });
        return {
            success: true,
            item: newItem
        };
    } catch (error) {
        console.error("Error adding item to requisition:", error);
        return {
            error: "Failed to add item"
        };
    }
}
async function getEligibleRequisitions() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) return [];
    try {
        const userId = session.user.id;
        // Check for System Admin role
        const currentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: userId
            },
            select: {
                role: true,
                customRole: {
                    select: {
                        isSystem: true
                    }
                }
            }
        });
        const isAdmin = currentUser?.role === 'SYSTEM_ADMIN' || currentUser?.customRole?.isSystem;
        // Fetch PENDING or APPROVED requisitions
        // Admins can see all, users see their own
        const whereClause = {
            status: {
                in: [
                    'PENDING',
                    'APPROVED',
                    'PAID',
                    'CLOSED'
                ]
            }
        };
        if (!isAdmin) {
            whereClause.userId = userId;
        }
        const requisitions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.findMany({
            where: whereClause,
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                title: true,
                status: true,
                createdAt: true,
                amount: true,
                currency: true
            }
        });
        return requisitions;
    } catch (error) {
        console.error("Error fetching eligible requisitions:", error);
        return [];
    }
}
async function getCategoriesAction() {
    try {
        const prismaClient = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
        const customCategories = await prismaClient.customCategory.findMany({
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
        const { EXPENSE_CATEGORIES } = await __turbopack_context__.A("[project]/src/lib/constants.ts [app-rsc] (ecmascript, async loader)");
        return Array.from(new Set([
            ...EXPENSE_CATEGORIES,
            ...customCategoryNames
        ]));
    } catch (error) {
        console.error("Error fetching categories:", error);
        const { EXPENSE_CATEGORIES } = await __turbopack_context__.A("[project]/src/lib/constants.ts [app-rsc] (ecmascript, async loader)");
        return EXPENSE_CATEGORIES;
    }
}
async function getVendorsAction() {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return [];
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: session.user.id
            },
            include: {
                leadBranch: true
            }
        });
        const isBranchManager = session.user.role === 'TEAM_LEADER';
        const activeBranchId = user?.leadBranch?.id || user?.branchId;
        const whereClause = {
            isActive: true
        };
        if (isBranchManager && activeBranchId) {
            whereClause.branchId = activeBranchId;
        }
        const vendors = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].vendor.findMany({
            where: whereClause,
            select: {
                id: true,
                name: true,
                bankName: true,
                bankAccount: true,
                email: true,
                phone: true
            },
            orderBy: {
                name: "asc"
            }
        });
        return vendors;
    } catch (error) {
        console.error("Error fetching vendors:", error);
        return [];
    }
}
async function getUserBranchAndDepartmentAction() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) return {
        branch: "",
        department: ""
    };
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: session.user.id
            },
            include: {
                leadBranch: true
            }
        });
        if (!user) return {
            branch: "",
            department: ""
        };
        // For Branch Managers (TEAM_LEADER), their branch is stored in `leadBranch` or `branchId`
        const branchName = user.leadBranch?.name || user.branchId || "";
        const department = user.department || "";
        return {
            branch: branchName,
            department
        };
    } catch (error) {
        console.error("Error fetching user branch & department:", error);
        return {
            branch: "",
            department: ""
        };
    }
}
async function getExpenseAccountsAction() {
    try {
        const accounts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.findMany({
            where: {
                type: 'EXPENSE'
            },
            select: {
                id: true,
                name: true,
                code: true
            },
            orderBy: {
                name: 'asc'
            }
        });
        return accounts;
    } catch (error) {
        console.error("Error fetching expense accounts:", error);
        return [];
    }
}
const CreateAccountSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Name is too short"),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Code is required")
});
async function createExpenseAccountAction(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) return {
        error: "Unauthorized"
    };
    const validated = CreateAccountSchema.safeParse(data);
    if (!validated.success) return {
        error: "Invalid input provided"
    };
    const { name, code } = validated.data;
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.findUnique({
            where: {
                code
            }
        });
        if (existing) return {
            error: "An account with this GL Code already exists."
        };
        const newAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.create({
            data: {
                name,
                code,
                type: 'EXPENSE',
                isActive: true
            }
        });
        return {
            success: true,
            account: newAccount
        };
    } catch (e) {
        console.error("Error creating account:", e);
        return {
            error: e.message || "Failed to create account"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createRequisitionWithItems,
    addItemToRequisition,
    getEligibleRequisitions,
    getCategoriesAction,
    getVendorsAction,
    getUserBranchAndDepartmentAction,
    getExpenseAccountsAction,
    createExpenseAccountAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createRequisitionWithItems, "4097090b14f3694beb8d26a31e2b39646a909d56a7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addItemToRequisition, "605e94e6d019fd67ba1466bcceca4ce4d13bc833f7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEligibleRequisitions, "00da2e63c392810a63b6438f5c38c682a140091ef0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCategoriesAction, "0091a92555f278240af27907405115155c98dadd58", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getVendorsAction, "00eb32d07ce872f4d06f644c06492316c1f91587f3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserBranchAndDepartmentAction, "00759d09b12d20c3d57c9ac1915c9f6e67486cd37d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExpenseAccountsAction, "0055ad71838ff70d1e9df2e7fb7df6728aa730ac9a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createExpenseAccountAction, "40ce350df0d7e11b23077af3a50f4fd58849efd1f4", null);
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/dashboard/requisitions/new/multi-item-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$multi$2d$item$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/multi-item-actions.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/dashboard/requisitions/new/multi-item-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0091a92555f278240af27907405115155c98dadd58",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$multi$2d$item$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategoriesAction"],
    "00da2e63c392810a63b6438f5c38c682a140091ef0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$multi$2d$item$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEligibleRequisitions"],
    "605e94e6d019fd67ba1466bcceca4ce4d13bc833f7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$multi$2d$item$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addItemToRequisition"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$multi$2d$item$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/dashboard/requisitions/new/multi-item-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$multi$2d$item$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/multi-item-actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e0475a2e._.js.map
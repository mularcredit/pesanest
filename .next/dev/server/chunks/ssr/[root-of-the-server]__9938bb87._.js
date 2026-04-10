module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
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
"[project]/src/lib/access-control.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requirePermission",
    ()=>requirePermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
function requirePermission(session, permission) {
    if (!session?.user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    const user = session.user;
    const role = user.role;
    const permissions = user.permissions || [];
    // System Admin has full access
    if (role === 'SYSTEM_ADMIN' || permissions.includes('*')) {
        return;
    }
    // Check permissions
    const requiredPermissions = Array.isArray(permission) ? permission : [
        permission
    ];
    const hasAccess = requiredPermissions.some((p)=>permissions.includes(p));
    if (hasAccess) {
        return;
    }
    // Redirect if denied
    // We redirect to dashboard as a safe fallback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
}
}),
"[project]/src/app/dashboard/salaries/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SalariesLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2d$control$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/access-control.ts [app-rsc] (ecmascript)");
;
;
;
async function SalariesLayout({ children }) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2d$control$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePermission"])(session, [
        'SALARIES.VIEW',
        'SALARIES.MANAGE'
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9938bb87._.js.map
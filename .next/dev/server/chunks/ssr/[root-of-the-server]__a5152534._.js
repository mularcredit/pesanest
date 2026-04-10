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
"[project]/src/app/actions/receipt-studio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40330b0bc0e9457ad333184e3c03499b6af8f3f22d":"getExpenseDetailsForReceipt","40425b849ed1e3a38c22f0b7695c8b554371efa9a3":"getRequisitionItemDetailsForReceipt","406d18927a76f90478367160fad865fe778ccca677":"getInvoiceDetailsForReceipt","4081d325fd2ab02683845f516870266f8133f1eacd":"getRequisitionDetailsForReceipt","40ec5bd400234175c2d27403324726d427df5f5aa2":"getPaymentDetailsForReceipt"},"",""] */ __turbopack_context__.s([
    "getExpenseDetailsForReceipt",
    ()=>getExpenseDetailsForReceipt,
    "getInvoiceDetailsForReceipt",
    ()=>getInvoiceDetailsForReceipt,
    "getPaymentDetailsForReceipt",
    ()=>getPaymentDetailsForReceipt,
    "getRequisitionDetailsForReceipt",
    ()=>getRequisitionDetailsForReceipt,
    "getRequisitionItemDetailsForReceipt",
    ()=>getRequisitionItemDetailsForReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getRequisitionDetailsForReceipt(requisitionId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) throw new Error("Unauthorized");
    const req = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.findUnique({
        where: {
            id: requisitionId
        },
        include: {
            user: true,
            items: true,
            approvals: {
                include: {
                    approver: true
                }
            }
        }
    });
    if (!req) return null;
    // Approvers
    const requestedBy = req.user.name || "Unknown";
    // Authorized by highest level approver?
    const authorizedBy = req.approvals.sort((a, b)=>b.level - a.level)[0]?.approver?.name || "Pending";
    const vendorMatch = req.description?.match(/\*\*Preferred Vendor:\*\*\s*(.+?)(?=\n|$)/);
    let beneficiaryName = vendorMatch && vendorMatch[1] ? vendorMatch[1].trim() : req.title;
    const beneficiaryAddress = req.department ? `${req.department} Dept` : "N/A";
    // Build items array from requisition items if they exist, otherwise use the requisition itself
    let items = [];
    if (req.items && req.items.length > 0) {
        // Map each requisition item to the receipt format
        items = req.items.map((item)=>({
                description: item.title,
                subtext: `${item.category} - Qty: ${item.quantity} @ ${req.currency || 'USD'} ${item.unitPrice.toFixed(2)}`,
                date: item.createdAt,
                amount: item.totalPrice
            }));
    } else {
        // Fallback to single item (for old requisitions without items)
        items = [
            {
                description: req.title,
                subtext: req.description || req.category,
                date: req.createdAt,
                amount: req.amount
            }
        ];
    }
    return {
        receiptNo: `VCH-${new Date().getFullYear()}-${req.id.slice(0, 8).toUpperCase()}`,
        date: req.updatedAt,
        amount: req.amount,
        beneficiary: {
            name: beneficiaryName,
            address: beneficiaryAddress
        },
        paymentMode: "Bank Transfer",
        paymentRef: `REQ-${req.id.slice(0, 8)}`,
        items,
        approvals: {
            requestedBy,
            authorizedBy,
            paidBy: "Finance Dept",
            receivedBy: ""
        }
    };
}
async function getInvoiceDetailsForReceipt(invoiceId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) throw new Error("Unauthorized");
    const inv = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].invoice.findUnique({
        where: {
            id: invoiceId
        },
        include: {
            vendor: true,
            createdBy: true
        }
    });
    if (!inv) return null;
    return {
        receiptNo: `VCH-${new Date().getFullYear()}-${inv.id.slice(0, 8).toUpperCase()}`,
        date: inv.invoiceDate,
        amount: inv.amount,
        beneficiary: {
            name: inv.vendor.name,
            address: inv.vendor.address || "N/A"
        },
        paymentMode: "Bank Transfer",
        paymentRef: `INV-${inv.invoiceNumber}`,
        items: [
            {
                description: `Invoice: ${inv.invoiceNumber}`,
                subtext: inv.description || "Vendor Payment",
                date: inv.invoiceDate,
                amount: inv.amount
            }
        ],
        approvals: {
            requestedBy: inv.createdBy.name || "Unknown",
            authorizedBy: "Finance Manager",
            paidBy: "Finance Dept",
            receivedBy: ""
        }
    };
}
async function getExpenseDetailsForReceipt(expenseId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) throw new Error("Unauthorized");
    const exp = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].expense.findUnique({
        where: {
            id: expenseId
        },
        include: {
            user: true
        }
    });
    if (!exp) return null;
    return {
        receiptNo: `VCH-${new Date().getFullYear()}-${exp.id.slice(0, 8).toUpperCase()}`,
        date: exp.expenseDate,
        amount: exp.amount,
        beneficiary: {
            name: exp.user.name || "Unknown",
            address: exp.user.department ? `${exp.user.department} Dept` : "N/A"
        },
        paymentMode: "Bank Transfer",
        paymentRef: `EXP-${exp.id.slice(0, 8)}`,
        items: [
            {
                description: exp.title,
                subtext: exp.description || exp.category,
                date: exp.expenseDate,
                amount: exp.amount
            }
        ],
        approvals: {
            requestedBy: exp.user.name || "Unknown",
            authorizedBy: "Department Head",
            paidBy: "Finance Dept",
            receivedBy: ""
        }
    };
}
async function getPaymentDetailsForReceipt(paymentId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) throw new Error("Unauthorized");
    const payment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].payment.findUnique({
        where: {
            id: paymentId
        },
        include: {
            requisitions: {
                include: {
                    user: true,
                    items: true // Fetch items for detailed breakdown
                }
            },
            invoices: {
                include: {
                    vendor: true
                }
            },
            expenses: {
                include: {
                    user: true
                }
            },
            monthlyBudgets: true,
            maker: true,
            checker: true
        }
    });
    if (!payment) return null;
    // Transform into Receipt Data format
    // Flatten items from disparate sources
    const items = [];
    // Add requisitions
    for (const req of payment.requisitions){
        if (req.items && req.items.length > 0) {
            // Add individual items
            for (const item of req.items){
                items.push({
                    description: item.title,
                    subtext: `${item.category || req.category} - Qty: ${item.quantity} @ ${req.currency || 'USD'} ${Number(item.unitPrice).toFixed(2)}`,
                    date: item.createdAt,
                    amount: item.totalPrice
                });
            }
        } else {
            // Fallback for requisitions without items
            items.push({
                description: req.title,
                subtext: `Requisition (Ref: ${req.id.slice(-6)}) - ${req.category}`,
                date: req.updatedAt,
                amount: req.amount
            });
        }
    }
    // Add invoices
    for (const inv of payment.invoices){
        items.push({
            description: `Invoice: ${inv.invoiceNumber}`,
            subtext: `Vendor: ${inv.vendor.name}`,
            date: inv.dueDate,
            amount: inv.amount
        });
    }
    // Add expenses
    for (const exp of payment.expenses){
        items.push({
            description: exp.title,
            subtext: `Reimbursement: ${exp.user.name}`,
            date: exp.expenseDate,
            amount: exp.amount
        });
    }
    // Add budgets
    for (const bud of payment.monthlyBudgets){
        items.push({
            description: `Budget Allocation: ${bud.branch}`,
            subtext: `Period: ${bud.month}/${bud.year}`,
            date: bud.updatedAt,
            amount: bud.totalAmount
        });
    }
    // Determine Beneficiary logic
    // We try to find a common beneficiary if possible
    let beneficiaryName = "Various Beneficiaries";
    let beneficiaryAddress = "";
    // 1. Check invoices
    if (payment.invoices.length > 0) {
        const firstVendorId = payment.invoices[0].vendorId;
        const allSameVendor = payment.invoices.every((i)=>i.vendorId === firstVendorId);
        if (allSameVendor) {
            beneficiaryName = payment.invoices[0].vendor.name;
            beneficiaryAddress = payment.invoices[0].vendor.address || "";
        }
    } else if (payment.expenses.length > 0) {
        const firstUserId = payment.expenses[0].userId;
        const allSameUser = payment.expenses.every((e)=>e.userId === firstUserId);
        if (allSameUser) {
            beneficiaryName = payment.expenses[0].user.name || "Unknown";
        }
    } else if (payment.requisitions.length > 0) {
        const req = payment.requisitions[0];
        const vendorMatch = req.description?.match(/\*\*Preferred Vendor:\*\*\s*(.+?)(?=\n|$)/);
        if (vendorMatch && vendorMatch[1]) {
            beneficiaryName = vendorMatch[1].trim();
        } else {
            beneficiaryName = req.title || "Various Beneficiaries";
        }
    }
    // Clean payment method
    let payMethod = 'Bank Transfer';
    if (payment.method) {
        if (payment.method === 'MOBILE_MONEY') payMethod = 'Mobile Money';
        else if (payment.method === 'CASH') payMethod = 'Cash';
        else payMethod = payment.method.replace(/_/g, ' ');
    }
    return {
        receiptNo: `RCT-${new Date().getFullYear()}-${payment.id.slice(0, 6).toUpperCase()}`,
        date: payment.processedAt || payment.updatedAt,
        amount: payment.amount,
        beneficiary: {
            name: beneficiaryName,
            address: beneficiaryAddress
        },
        paymentMode: payMethod,
        paymentRef: payment.reference || `TRX-${payment.id.slice(0, 8)}`,
        items: items,
        approvals: {
            requestedBy: payment.maker?.name || "Unknown",
            authorizedBy: payment.checker?.name || "Pending",
            paidBy: "Finance Dept",
            receivedBy: beneficiaryName
        }
    };
}
async function getRequisitionItemDetailsForReceipt(itemId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) throw new Error("Unauthorized");
    const item = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisitionItem.findUnique({
        where: {
            id: itemId
        },
        include: {
            requisition: {
                include: {
                    user: true,
                    approvals: {
                        include: {
                            approver: true
                        },
                        orderBy: {
                            level: 'desc'
                        }
                    }
                }
            }
        }
    });
    if (!item) return null;
    const req = item.requisition;
    const requestedBy = req.user?.name || "Unknown";
    const authorizedBy = req.approvals?.[0]?.approver?.name || "Pending";
    const vendorMatch = req.description?.match(/\*\*Preferred Vendor:\*\*\s*(.+?)(?=\n|$)/);
    let beneficiaryName = vendorMatch && vendorMatch[1] ? vendorMatch[1].trim() : req.title;
    const beneficiaryAddress = req.department ? `${req.department} Dept` : req.branch || "N/A";
    const currency = req.currency || "USD";
    const itemTotal = item.quantity * item.unitPrice;
    return {
        receiptNo: `VCH-${new Date().getFullYear()}-${item.id.slice(0, 8).toUpperCase()}`,
        date: item.createdAt,
        amount: itemTotal,
        beneficiary: {
            name: beneficiaryName,
            address: beneficiaryAddress
        },
        paymentMode: req.paymentMethod?.replace(/_/g, " ") || "Bank Transfer",
        paymentRef: `ITEM-${item.id.slice(0, 8).toUpperCase()}`,
        items: [
            {
                description: item.title,
                subtext: `${item.category} — Qty: ${item.quantity} @ ${currency} ${Number(item.unitPrice).toFixed(2)}`,
                date: item.createdAt,
                amount: itemTotal
            }
        ],
        approvals: {
            requestedBy,
            authorizedBy,
            paidBy: "Finance Dept",
            receivedBy: ""
        }
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getRequisitionDetailsForReceipt,
    getInvoiceDetailsForReceipt,
    getExpenseDetailsForReceipt,
    getPaymentDetailsForReceipt,
    getRequisitionItemDetailsForReceipt
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRequisitionDetailsForReceipt, "4081d325fd2ab02683845f516870266f8133f1eacd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInvoiceDetailsForReceipt, "406d18927a76f90478367160fad865fe778ccca677", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExpenseDetailsForReceipt, "40330b0bc0e9457ad333184e3c03499b6af8f3f22d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPaymentDetailsForReceipt, "40ec5bd400234175c2d27403324726d427df5f5aa2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRequisitionItemDetailsForReceipt, "40425b849ed1e3a38c22f0b7695c8b554371efa9a3", null);
}),
"[project]/.next-internal/server/app/receipt-studio/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/receipt-studio.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$receipt$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/receipt-studio.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/.next-internal/server/app/receipt-studio/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/receipt-studio.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40330b0bc0e9457ad333184e3c03499b6af8f3f22d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$receipt$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExpenseDetailsForReceipt"],
    "40425b849ed1e3a38c22f0b7695c8b554371efa9a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$receipt$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequisitionItemDetailsForReceipt"],
    "406d18927a76f90478367160fad865fe778ccca677",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$receipt$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInvoiceDetailsForReceipt"],
    "4081d325fd2ab02683845f516870266f8133f1eacd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$receipt$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequisitionDetailsForReceipt"],
    "40ec5bd400234175c2d27403324726d427df5f5aa2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$receipt$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPaymentDetailsForReceipt"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$receipt$2d$studio$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$receipt$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/receipt-studio/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/receipt-studio.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$receipt$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/receipt-studio.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a5152534._.js.map
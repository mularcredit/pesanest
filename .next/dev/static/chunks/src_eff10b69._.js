(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-[5px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-[#29258D] text-white hover:bg-[#29258D]/90 shadow-sm",
            secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm",
            outline: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900",
            ghost: "hover:bg-gray-100 hover:text-gray-900",
            link: "text-[#29258D] underline-offset-4 hover:underline",
            premium: "bg-gradient-to-r from-emerald-400 to-cyan-400 text-white hover:brightness-110 shadow-lg shadow-emerald-500/25 border border-white/10",
            destructive: "bg-red-500/10 text-red-600 border border-red-500/20 hover:bg-red-500/20",
            success: "bg-green-600 text-white hover:bg-green-700 shadow-sm border border-green-700/10"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-[5px] px-3",
            lg: "h-11 rounded-[5px] px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, children, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 48,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const menuCategories = [
    {
        title: "Overview",
        items: [
            {
                name: "Dashboard",
                href: "/dashboard",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiSquaresFour"]
            },
            {
                name: "Analytics",
                href: "/dashboard/reports",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiChartBar"]
            },
            {
                name: "Workflow Analytics",
                href: "/dashboard/workflow-analytics",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiChartLine"]
            },
            {
                name: "Statement Studio",
                href: "/finance-studio",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiFileText"]
            }
        ]
    },
    {
        title: "Emergency Management",
        items: [
            {
                name: "My emergencies",
                href: "/dashboard/expenses",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiWallet"]
            },
            {
                name: "Requisitions",
                href: "/dashboard/requisitions",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiReceipt"]
            },
            ...("TURBOPACK compile-time truthy", 1) ? [
                {
                    name: "Salaries & Payroll",
                    href: "/dashboard/salaries",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUsersThree"]
                }
            ] : "TURBOPACK unreachable",
            {
                name: "Approvals",
                href: "/dashboard/approvals",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"]
            },
            {
                name: "Branch Approvals",
                href: "/dashboard/branch-approvals",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"]
            },
            {
                name: "Payments",
                href: "/dashboard/payments",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCurrencyDollar"]
            }
        ]
    },
    {
        title: "Financial",
        items: [
            {
                name: "Corporate wallet",
                href: "/dashboard/wallet",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiChartPieSlice"]
            },
            {
                name: "Budgets",
                href: "/dashboard/budgets",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiTrendUp"]
            },
            {
                name: "Forecasting",
                href: "/dashboard/forecasting",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiChartPieSlice"]
            },
            {
                name: "Audit trail",
                href: "/dashboard/audit",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiClockCounterClockwise"]
            }
        ]
    },
    {
        title: "Accounting",
        items: [
            {
                name: "Trial Balance",
                href: "/dashboard/accounting/reports/trial-balance",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiChartLine"]
            },
            {
                name: "Balance Sheet",
                href: "/dashboard/accounting/reports/balance-sheet",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiFileText"]
            },
            {
                name: "Income Statement",
                href: "/dashboard/accounting/reports/income-statement",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiChartBar"]
            },
            {
                name: "Cash Flow Statement",
                href: "/dashboard/accounting/reports/cash-flow",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiArrowsLeftRight"]
            },
            {
                name: "General Ledger",
                href: "/dashboard/accounting/ledger",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBookOpenText"]
            },
            {
                name: "Customers",
                href: "/dashboard/accounting/customers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUsersThree"]
            },
            {
                name: "Sales & Income",
                href: "/dashboard/accounting/sales",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBookOpenText"]
            },
            {
                name: "Accounts Payable",
                href: "/dashboard/accounting/payables",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiInvoice"]
            },
            {
                name: "Period Management",
                href: "/dashboard/accounting/periods",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCalendarBlank"]
            },
            {
                name: "Tax Rates",
                href: "/dashboard/accounting/tax-rates",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPercent"]
            },
            {
                name: "Chart of Accounts",
                href: "/dashboard/accounting/chart-of-accounts",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiList"]
            },
            {
                name: "Bank Reconciliation",
                href: "/dashboard/accounting/reconciliation",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"]
            }
        ]
    },
    {
        title: "Operations",
        items: [
            {
                name: "Vendors",
                href: "/dashboard/vendors",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBuildings"]
            },
            {
                name: "Invoices",
                href: "/dashboard/invoices",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiInvoice"]
            },
            {
                name: "Contracts",
                href: "/dashboard/contracts",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiFileText"]
            },
            {
                name: "Assets",
                href: "/dashboard/assets",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPackage"]
            },
            {
                name: "Schedules",
                href: "/dashboard/schedules",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCalendarBlank"]
            }
        ]
    },
    {
        title: "Administration",
        items: [
            {
                name: "Team management",
                href: "/dashboard/team",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUsers"]
            },
            {
                name: "Account Requests",
                href: "/dashboard/users",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUsersThree"]
            },
            {
                name: "Roles & Permissions",
                href: "/dashboard/roles",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiShieldCheck"]
            },
            {
                name: "Policies",
                href: "/dashboard/policies",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiShieldCheck"]
            },
            {
                name: "Regions",
                href: "/dashboard/regions",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiGlobe"]
            },
            {
                name: "Branches",
                href: "/dashboard/branches",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBuildings"]
            },
            {
                name: "Data Import",
                href: "/dashboard/settings/import",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUploadSimple"]
            },
            {
                name: "System config",
                href: "/dashboard/settings",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiGear"]
            }
        ]
    }
];
function Sidebar({ isOpen = false, onClose }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const user = session?.user;
    const [collapsedCategories, setCollapsedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        expenses: 0,
        approvals: 0
    });
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const fetchCounts = {
                "Sidebar.useEffect.fetchCounts": async ()=>{
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
                }
            }["Sidebar.useEffect.fetchCounts"];
            if (session) {
                fetchCounts();
                const interval = setInterval(fetchCounts, 30000);
                return ({
                    "Sidebar.useEffect": ()=>clearInterval(interval)
                })["Sidebar.useEffect"];
            }
        }
    }["Sidebar.useEffect"], [
        session
    ]);
    const getInitials = (name)=>{
        if (!name) return "??";
        return name.split(" ").map((n)=>n[0]).join("").toUpperCase();
    };
    /**
     * Checks if the user has access to a specific path using permissions.
     * Maps paths to logical permissions.
     */ const hasAccess = (href)=>{
        if (!user) return false;
        const role = user.role || "EMPLOYEE";
        const permissions = user.permissions || [];
        // System Admin has full access
        if (role === 'SYSTEM_ADMIN' || permissions.includes('*')) return true;
        // Permission Mappings
        // If a path requires a permission, checking if user has it (or wildcards)
        // Some standard permissions inferred:
        // ROLES.MANAGE or ROLES.VIEW -> Roles page
        // USERS.VIEW -> Team, Users pages
        // SETTINGS.MANAGE -> Settings
        // USERS.CREATE -> Onboarding?
        const requiredPermissions = {
            // Admin / Management
            "/dashboard/roles": [
                "ROLES.MANAGE",
                "ROLES.VIEW"
            ],
            "/dashboard/team": [
                "USERS.VIEW",
                "USERS.MANAGE",
                "USERS.EDIT"
            ],
            "/dashboard/users": [
                "USERS.VIEW",
                "USERS.MANAGE"
            ],
            "/dashboard/settings": [
                "SETTINGS.MANAGE"
            ],
            "/dashboard/settings/import": [
                "SETTINGS.MANAGE",
                "IMPORT.MANAGE"
            ],
            "/dashboard/policies": [
                "POLICIES.MANAGE",
                "POLICIES.VIEW"
            ],
            "/dashboard/regions": [
                "REGIONS.VIEW",
                "BRANCHES.VIEW"
            ],
            "/dashboard/branches": [
                "BRANCHES.VIEW",
                "BRANCHES.MANAGE"
            ],
            "/dashboard/branch-approvals": [
                "REQUISITIONS.VIEW_BRANCH",
                "REQUISITIONS.APPROVE"
            ],
            // Financials
            "/dashboard/invoices": [
                "INVOICES.VIEW",
                "INVOICES.MANAGE",
                "SALES.MANAGE"
            ],
            "/dashboard/approvals": [
                "EXPENSES.APPROVE",
                "REQUISITIONS.APPROVE",
                "APPROVALS.VIEW"
            ],
            "/dashboard/salaries": [
                "SALARIES.VIEW",
                "SALARIES.MANAGE"
            ],
            "/dashboard/wallet": [
                "WALLET.VIEW",
                "FINANCE.VIEW"
            ],
            "/dashboard/budgets": [
                "BUDGETS.VIEW",
                "FINANCE.VIEW"
            ],
            "/dashboard/forecasting": [
                "FORECASTING.VIEW",
                "FINANCE.VIEW"
            ],
            "/dashboard/audit": [
                "AUDIT.VIEW"
            ],
            // Accounting (Assuming ACCOUNTING permissions exist, or restricted to Admin for now?)
            // If the user has "Accounting" permissions in custom role, they should see these.
            "/dashboard/accounting/customers": [
                "ACCOUNTING.VIEW",
                "CUSTOMERS.VIEW",
                "SALES.MANAGE"
            ],
            "/dashboard/accounting/sales": [
                "ACCOUNTING.VIEW",
                "SALES.MANAGE"
            ],
            "/dashboard/accounting/payables": [
                "ACCOUNTING.VIEW",
                "PAYABLES.VIEW"
            ],
            "/dashboard/accounting/ledger": [
                "ACCOUNTING.VIEW",
                "LEDGER.VIEW"
            ],
            "/dashboard/accounting/reports/trial-balance": [
                "ACCOUNTING.VIEW",
                "REPORTS.VIEW"
            ],
            "/dashboard/accounting/reports/balance-sheet": [
                "ACCOUNTING.VIEW",
                "REPORTS.VIEW"
            ],
            "/dashboard/accounting/reports/income-statement": [
                "ACCOUNTING.VIEW",
                "REPORTS.VIEW"
            ],
            "/dashboard/accounting/reports/cash-flow": [
                "ACCOUNTING.VIEW",
                "REPORTS.VIEW"
            ],
            "/finance-studio": [
                "STUDIO.VIEW",
                "FINANCE.VIEW",
                "REPORTS.VIEW"
            ],
            "/dashboard/workflow-analytics": [
                "ANALYTICS.VIEW",
                "REPORTS.VIEW"
            ],
            // Operations
            "/dashboard/vendors": [
                "VENDORS.VIEW"
            ],
            "/dashboard/contracts": [
                "CONTRACTS.VIEW"
            ],
            "/dashboard/assets": [
                "ASSETS.VIEW"
            ]
        };
        const required = requiredPermissions[href];
        // If no specific permission is mapped, check legacy role-based restrictions
        // This is a fallback to ensure we don't break things that aren't fully migrated to granular permissions yet
        if (!required) {
            // Legacy Restrictions Fallback
            const restrictions = {
            };
            if (restrictions[href]) {
                return restrictions[href].includes(role);
            }
            return true; // Default allow (e.g. Expenses, Requisitions)
        }
        // Check if user has ANY of the required permissions
        return required.some((p)=>permissions.includes(p));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-0 top-0 h-full w-[280px] z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 bg-[#29258D] border-r border-[#29258D] sidebar-container", isOpen ? "translate-x-0" : "-translate-x-full", "print:hidden"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 pb-6 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", "/capitalpay.png") || "/capitalpay.png",
                            alt: ("TURBOPACK compile-time value", "Capital Pay") || "Capital Pay",
                            width: 150,
                            height: 35,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-auto object-contain", ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "h-8")
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 260,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 259,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onClose,
                        variant: "ghost",
                        size: "icon",
                        className: "lg:hidden text-indigo-300 hover:text-white hover:bg-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                            className: "text-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 276,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 275,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 258,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"], {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white transition-colors text-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 283,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search menu...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "w-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/30 transition-all font-normal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 284,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 282,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 overflow-y-auto py-2 px-6 space-y-8 custom-scrollbar",
                children: menuCategories.map((category)=>{
                    // Filter items based on SEARCH query first
                    const searchFilteredItems = category.items.filter((item)=>item.name.toLowerCase().includes(searchQuery.toLowerCase()));
                    if (searchFilteredItems.length === 0) return null;
                    // Then filter based on PERMISSIONS / ROLE
                    const filteredItems = searchFilteredItems.filter((item)=>hasAccess(item.href));
                    if (filteredItems.length === 0) return null;
                    const isCollapsed = collapsedCategories.has(category.title);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setCollapsedCategories((prev)=>{
                                        const next = new Set(prev);
                                        if (next.has(category.title)) next.delete(category.title);
                                        else next.add(category.title);
                                        return next;
                                    });
                                },
                                className: "w-full flex items-center justify-between px-2 py-2 group cursor-pointer hover:bg-white/5 rounded-lg transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[11px] font-normal tracking-[0.1em] uppercase text-indigo-300/40 group-hover:text-indigo-300/60 transition-colors",
                                        children: category.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                                        lineNumber: 324,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-indigo-300/40 text-xs transition-transform duration-200", isCollapsed ? "-rotate-90" : "")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                                        lineNumber: 327,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 313,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1 overflow-hidden transition-all duration-300 ease-in-out", isCollapsed ? "max-h-0 opacity-0" : "max-h-[1200px] opacity-100"),
                                children: filteredItems.map((item)=>{
                                    const isActive = pathname === item.href;
                                    const Icon = item.icon;
                                    let badge = item.badge;
                                    if (item.name === "Approvals" && counts.approvals > 0) {
                                        badge = counts.approvals.toString();
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group", isActive ? "bg-[#06B6D4] text-white shadow-lg shadow-[#06B6D4]/40 translate-x-1" : "text-white/70 hover:text-white hover:bg-white/5"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xl transition-all duration-200", isActive ? "text-white" : "text-white/70 group-hover:text-white")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                                lineNumber: 359,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-normal tracking-wide flex-1"),
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                                lineNumber: 365,
                                                columnNumber: 45
                                            }, this),
                                            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-bold px-2 py-0.5 rounded-lg", isActive ? "bg-white/20 text-white" : "bg-indigo-500/20 text-indigo-300"),
                                                children: badge
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                                lineNumber: 372,
                                                columnNumber: 49
                                            }, this),
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCaretRightBold"], {
                                                className: "text-white text-xs animate-slide-in-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                                lineNumber: 383,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                                        lineNumber: 349,
                                        columnNumber: 41
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 335,
                                columnNumber: 29
                            }, this)
                        ]
                    }, category.title, true, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 312,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 295,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-white/5 rounded-2xl flex items-center gap-3 border border-white/10 hover:bg-white/10 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-xl bg-indigo-500/20 shadow-sm flex items-center justify-center border border-white/10 overflow-hidden relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-heading font-normal text-xs text-indigo-300",
                                    children: getInitials(user?.name)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 398,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 401,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 397,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] font-normal truncate text-white",
                                    children: user?.name || "User"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 404,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-normal text-indigo-300/60 capitalize",
                                    children: user?.role?.toLowerCase()?.replace(/_/g, ' ') || "Employee"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 407,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 403,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                    callbackUrl: "/login"
                                }),
                            variant: "ghost",
                            size: "icon",
                            className: "text-indigo-300/60 hover:text-rose-400 hover:bg-rose-500/10 transition-colors",
                            title: "Sign out",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiSignOut"], {
                                className: "text-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 418,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 411,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 396,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 395,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Sidebar.tsx",
        lineNumber: 252,
        columnNumber: 9
    }, this);
}
_s(Sidebar, "AVmp5tLSlCPx42Riq5BQT/7JmtE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/requisitions/new/data:f79ae2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addItemToRequisition",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"605e94e6d019fd67ba1466bcceca4ce4d13bc833f7":"addItemToRequisition"},"src/app/dashboard/requisitions/new/multi-item-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("605e94e6d019fd67ba1466bcceca4ce4d13bc833f7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addItemToRequisition");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXVsdGktaXRlbS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBjaGVja0VuZm9yY2VDbG9zdXJlIH0gZnJvbSBcIkAvbGliL2Nsb3N1cmUtY2hlY2tcIjtcclxuaW1wb3J0IHsgY2hlY2tFeHBlbnNlUG9saWNpZXMgfSBmcm9tIFwiQC9saWIvcG9saWN5LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyBhcHByb3ZhbFdvcmtmbG93IH0gZnJvbSBcIkAvbGliL2FwcHJvdmFsLXdvcmtmbG93XCI7XHJcblxyXG5jb25zdCBSZXF1aXNpdGlvbkl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oMywgXCJJdGVtIHRpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXHJcbiAgICB1bml0UHJpY2U6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiVW5pdCBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxyXG4gICAgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDEsIFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBpc1JlY3VycmluZzogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgIGZyZXF1ZW5jeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgc3RhcnREYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUmVxdWlzaXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgXCJUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxMCwgXCJKdXN0aWZpY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxuICAgIGN1cnJlbmN5OiB6LnN0cmluZygpLmRlZmF1bHQoXCJVU0RcIiksXHJcbiAgICBpdGVtczogei5hcnJheShSZXF1aXNpdGlvbkl0ZW1TY2hlbWEpLm1pbigxLCBcIkF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1aXNpdGlvbldpdGhJdGVtcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblxyXG4gICAgLy8gUGFyc2UgaXRlbXMgZnJvbSBmb3JtRGF0YVxyXG4gICAgY29uc3QgaXRlbXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaXRlbXNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zSnNvbik7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUmVxdWlzaXRpb25TY2hlbWEuc2FmZVBhcnNlKHtcclxuICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgIGN1cnJlbmN5OiBmb3JtRGF0YS5nZXQoXCJjdXJyZW5jeVwiKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zdXJlQ2hlY2sgPSBhd2FpdCBjaGVja0VuZm9yY2VDbG9zdXJlKHNlc3Npb24udXNlci5pZCk7XHJcbiAgICBpZiAoY2xvc3VyZUNoZWNrLmJsb2NrZWQpIHtcclxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjbG9zdXJlQ2hlY2subWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW5jeSwgaXRlbXM6IHZhbGlkYXRlZEl0ZW1zIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHZhbGlkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlKSwgMCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwcmltYXJ5IGNhdGVnb3J5IChmcm9tIGZpcnN0IGl0ZW0gb3IgbW9zdCBleHBlbnNpdmUgaXRlbSlcclxuICAgIGNvbnN0IHByaW1hcnlDYXRlZ29yeSA9IHZhbGlkYXRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgKGIucXVhbnRpdHkgKiBiLnVuaXRQcmljZSkgLSAoYS5xdWFudGl0eSAqIGEudW5pdFByaWNlKVxyXG4gICAgKVswXS5jYXRlZ29yeTtcclxuXHJcbiAgICAvLyBSdW4gUG9saWN5IENoZWNrc1xyXG4gICAgY29uc3QgcG9saWN5UmVzdWx0ID0gYXdhaXQgY2hlY2tFeHBlbnNlUG9saWNpZXMoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudDogdG90YWxBbW91bnQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICBleHBlbnNlRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwb2xpY3lSZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZXJzID0gcG9saWN5UmVzdWx0LnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5pc0Jsb2NraW5nKS5tYXAodiA9PiB2Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChibG9ja2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9saWN5IFZpb2xhdGlvbjogJHtibG9ja2Vycy5qb2luKFwiLCBcIil9YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nIHx8IFwiU1RBTkRBUkRcIjtcclxuICAgIGNvbnN0IGlzU1NDQSA9IGZvcm1EYXRhLmdldChcImlzU1NDQVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBpc1N0cmljdEFwcHJvdmFsID0gZm9ybURhdGEuZ2V0KFwiaXNTdHJpY3RBcHByb3ZhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgaWYgKGlzU1NDQSkge1xyXG4gICAgICAgIGlmICgoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJTWVNURU1fQURNSU5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQ6IE9ubHkgU3lzdGVtIEFkbWluaXN0cmF0b3JzIGNhbiBjcmVhdGUgU291dGggU3VkYW4gQ2l2aWwgQXZpYXRpb24gcmVxdWVzdHMuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZSA9IGlzU3RyaWN0QXBwcm92YWwgPyBcIlNPVVRIX1NVREFOX1NUUklDVFwiIDogXCJTT1VUSF9TVURBTlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHVzZXIgZm9yIGJyYW5jaC9yZWdpb24gaW5mb1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGJyYW5jaElkOiB0cnVlLCByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBicmFuY2hJZCA9IChmb3JtRGF0YS5nZXQoXCJicmFuY2hJZFwiKSBhcyBzdHJpbmcpIHx8IChmb3JtRGF0YS5nZXQoXCJicmFuY2hcIikgYXMgc3RyaW5nKSB8fCB1c2VyPy5icmFuY2hJZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5pZDtcclxuICAgIGNvbnN0IGRlcGFydG1lbnQgPSBmb3JtRGF0YS5nZXQoXCJkZXBhcnRtZW50XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHZlbmRvciA9IGZvcm1EYXRhLmdldChcInZlbmRvclwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleHBlY3RlZERhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJleHBlY3RlZERhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZmVyZW5jZSA9IGZvcm1EYXRhLmdldChcInBheW1lbnRSZWZlcmVuY2VcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgYWNjb3VudElkID0gZm9ybURhdGEuZ2V0KFwiYWNjb3VudElkXCIpIGFzIHN0cmluZztcclxuXHJcbiAgICBsZXQgZmluYWxEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKHZlbmRvciAmJiB2ZW5kb3IudHJpbSgpKSB7XHJcbiAgICAgICAgZmluYWxEZXNjcmlwdGlvbiArPSBgXFxuXFxuKipQcmVmZXJyZWQgVmVuZG9yOioqICR7dmVuZG9yLnRyaW0oKX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC50cmltKCkpIHtcclxuICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGBcXG5cXG4qKlBheW1lbnQgTWV0aG9kOioqICR7cGF5bWVudE1ldGhvZC50cmltKCl9YDtcclxuICAgICAgICBpZiAocGF5bWVudFJlZmVyZW5jZSAmJiBwYXltZW50UmVmZXJlbmNlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGAg4oCUIFJlZi9OdW1iZXI6ICR7cGF5bWVudFJlZmVyZW5jZS50cmltKCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwZWN0ZWREYXRlID0gZXhwZWN0ZWREYXRlU3RyID8gbmV3IERhdGUoZXhwZWN0ZWREYXRlU3RyKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgTmV4dCBSdW4gRGF0ZSBoZWxwZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRSdW4gPSAoc3RhcnREYXRlOiBEYXRlLCBmcmVxdWVuY3k6IHN0cmluZyk6IERhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRSdW4gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIHN3aXRjaCAoZnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQUlMWVwiOiBuZXh0UnVuLnNldERhdGUobmV4dFJ1bi5nZXREYXRlKCkgKyAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXRUVLTFlcIjogbmV4dFJ1bi5zZXREYXRlKG5leHRSdW4uZ2V0RGF0ZSgpICsgNyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU9OVEhMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFVQVJURVJMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDMpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIllFQVJMWVwiOiBuZXh0UnVuLnNldEZ1bGxZZWFyKG5leHRSdW4uZ2V0RnVsbFllYXIoKSArIDEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRSdW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSByZXF1aXNpdGlvbiB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCByZXF1aXNpdGlvbiA9IGF3YWl0IChwcmlzbWEucmVxdWlzaXRpb24uY3JlYXRlIGFzIGFueSkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpbmFsRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzSnVzdGlmaWNhdGlvbjogZmluYWxEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgYnJhbmNoSWQsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkRGF0ZSxcclxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCA/IHsgYWNjb3VudElkIH0gOiB7fSksXHJcbiAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHZhbGlkYXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1JlY3VycmluZyA9IGl0ZW0uaXNSZWN1cnJpbmcgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUgPyBuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnJpbmc6IGlzUmVjdXJyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNSZWN1cnJpbmcgJiYgaXRlbS5mcmVxdWVuY3kgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQXV0bzogJHtpdGVtLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogaXRlbS5mcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UnVuOiBjYWxjdWxhdGVOZXh0UnVuKHN0YXJ0RGF0ZSwgaXRlbS5mcmVxdWVuY3kpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24hLnVzZXIhLmlkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc29sdmUgcmVnaW9uSWQgZm9yIGFwcHJvdmFsIHJvdXRpbmdcclxuICAgIGNvbnN0IHVzZXJXaXRoQnJhbmNoID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udXNlci5pZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZXJSZWdpb25JZCA9IHVzZXJXaXRoQnJhbmNoPy5yZWdpb25JZCB8fCB1c2VyV2l0aEJyYW5jaD8ubGVhZEJyYW5jaD8ucmVnaW9uSWQ7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYXRlIEFwcHJvdmFsIFdvcmtmbG93XHJcbiAgICBjb25zb2xlLmxvZyhgW1JlcXVpc2l0aW9uXSBDcmVhdGluZyB3b3JrZmxvdyBmb3IgYW1vdW50OiAke3RvdGFsQW1vdW50fSwgY2F0ZWdvcnk6ICR7cHJpbWFyeUNhdGVnb3J5fWApO1xyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBhcHByb3ZhbFdvcmtmbG93LmRldGVybWluZVJvdXRlKFxyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBwcmltYXJ5Q2F0ZWdvcnksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1c2VyUmVnaW9uSWQgfHwgdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBbUmVxdWlzaXRpb25dIFJvdXRlIGRldGVybWluZWQ6ICR7cm91dGUuYXV0b0FwcHJvdmUgPyAnQXV0by1hcHByb3ZlJyA6ICdMZXZlbHM6ICcgKyByb3V0ZS5sZXZlbHMubGVuZ3RofWApO1xyXG4gICAgY29uc3QgYXBwcm92YWxzID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5jcmVhdGVSZXF1aXNpdGlvbkFwcHJvdmFscyhyZXF1aXNpdGlvbi5pZCwgcm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYFtSZXF1aXNpdGlvbl0gQ3JlYXRlZCAke2FwcHJvdmFscy5sZW5ndGh9IGFwcHJvdmFsIHJlY29yZHNgKTtcclxuXHJcbiAgICByZWRpcmVjdChcIi9kYXNoYm9hcmQvcmVxdWlzaXRpb25zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvUmVxdWlzaXRpb24ocmVxdWlzaXRpb25JZDogc3RyaW5nLCBpdGVtRGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkSXRlbSA9IFJlcXVpc2l0aW9uSXRlbVNjaGVtYS5zYWZlUGFyc2UoaXRlbURhdGEpO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkSXRlbS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRJdGVtLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3N1cmVDaGVjayA9IGF3YWl0IGNoZWNrRW5mb3JjZUNsb3N1cmUoc2Vzc2lvbi51c2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHVuaXRQcmljZSwgY2F0ZWdvcnkgfSA9IHZhbGlkYXRlZEl0ZW0uZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHVuaXRQcmljZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggcGFyZW50IHJlcXVpc2l0aW9uIHRvIGdldCB0eXBlIGFuZCBjdXJyZW5jeVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFJlcXVpc2l0aW9uID0gYXdhaXQgcHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcmVxdWlzaXRpb25JZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50UmVxdWlzaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiUmVxdWlzaXRpb24gbm90IGZvdW5kXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoIHVzZXIgcmVnaW9uXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogeyBzZWxlY3Q6IHsgcmVnaW9uSWQ6IHRydWUgfSB9IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyUmVnaW9uSWQgPSB1c2VyPy5yZWdpb25JZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5yZWdpb25JZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIEFwcHJvdmFsIFJvdXRlIGZvciB0aGlzIGl0ZW1cclxuICAgICAgICAvLyBXZSByZXVzZSB0aGUgbWFpbiB3b3JrZmxvdyBlbmdpbmUgYnV0IGFwcGx5IGl0IHRvIHRoaXMgc3BlY2lmaWMgaXRlbVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5kZXRlcm1pbmVSb3V0ZShcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmVudFJlcXVpc2l0aW9uLnR5cGUsIC8vIFBhc3MgdGhlIHBhcmVudCdzIHR5cGUgKGUuZy4gU09VVEhfU1VEQU4pXHJcbiAgICAgICAgICAgIHVzZXJSZWdpb25JZCB8fCB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaXRlbSBzdGF0dXMgYmFzZWQgb24gcm91dGVcclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGFscmVhZHkgYXBwcm92ZWQvcGFpZCwgYW5kIHRoaXMgdmFsaWQgcm91dGUgc2F5cyBhdXRvLWFwcHJvdmUgKGxpa2UgU1NDQSksIFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGFwcHJvdmUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBzdGFydHMgYXMgUEVORElORy5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdHVzID0gcm91dGUuYXV0b0FwcHJvdmUgPyAnQVBQUk9WRUQnIDogJ1BFTkRJTkcnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBpdGVtIHdpdGggaXRzIHNwZWNpZmljIHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhd2FpdCAocHJpc21hIGFzIGFueSkucmVxdWlzaXRpb25JdGVtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB1bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyZW50UmVxdWlzaXRpb24udHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgQXBwcm92YWwgUmVjb3JkcyBpZiBub3QgYXV0by1hcHByb3ZlZFxyXG4gICAgICAgIGlmICghcm91dGUuYXV0b0FwcHJvdmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiByb3V0ZS5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwcm92ZXIgb2YgbGV2ZWwuYXBwcm92ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLml0ZW1BcHByb3ZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXNpdGlvbkl0ZW1JZDogbmV3SXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVySWQ6IGFwcHJvdmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSB0b3RhbCBhbW91bnQgZm9yIHRoZSByZXF1aXNpdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIG1haW4gcmVxdWlzaXRpb24gc3RhdHVzIGRvZXMgTk9UIGNoYW5nZSBiYWNrIHRvIFBFTkRJTkcuXHJcbiAgICAgICAgLy8gVGhlIG5ldyBpdGVtIGhhcyBpdHMgb3duIGluZGVwZW5kZW50IGxpZmVjeWNsZS5cclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS5yZXF1aXNpdGlvbkl0ZW0uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsQW1vdW50ID0gYWxsSXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgaXRlbTogYW55KSA9PiBzdW0gKyBpdGVtLnRvdGFsUHJpY2UsIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmVxdWlzaXRpb24gYW1vdW50XHJcbiAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYW1vdW50OiBuZXdUb3RhbEFtb3VudCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpdGVtOiBuZXdJdGVtIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgaXRlbSB0byByZXF1aXNpdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgaXRlbVwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbGlnaWJsZVJlcXVpc2l0aW9ucygpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBTeXN0ZW0gQWRtaW4gcm9sZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IHJvbGU6IHRydWUsIGN1c3RvbVJvbGU6IHsgc2VsZWN0OiB7IGlzU3lzdGVtOiB0cnVlIH0gfSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ1NZU1RFTV9BRE1JTicgfHwgY3VycmVudFVzZXI/LmN1c3RvbVJvbGU/LmlzU3lzdGVtO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBQRU5ESU5HIG9yIEFQUFJPVkVEIHJlcXVpc2l0aW9uc1xyXG4gICAgICAgIC8vIEFkbWlucyBjYW4gc2VlIGFsbCwgdXNlcnMgc2VlIHRoZWlyIG93blxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1BBSUQnLCAnQ0xPU0VEJ10gfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1aXNpdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWlzaXRpb25zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZWxpZ2libGUgcmVxdWlzaXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hQ2xpZW50ID0gcHJpc21hIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjdXN0b21DYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hQ2xpZW50LmN1c3RvbUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IHRydWUgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNhdGVnb3J5TmFtZXMgPSBjdXN0b21DYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiBjLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHsgRVhQRU5TRV9DQVRFR09SSUVTIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9jb25zdGFudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLkVYUEVOU0VfQ0FURUdPUklFUywgLi4uY3VzdG9tQ2F0ZWdvcnlOYW1lc10pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCB7IEVYUEVOU0VfQ0FURUdPUklFUyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvY29uc3RhbnRzXCIpO1xyXG4gICAgICAgIHJldHVybiBFWFBFTlNFX0NBVEVHT1JJRVM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWZW5kb3JzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJhbmNoTWFuYWdlciA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID09PSAnVEVBTV9MRUFERVInO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJyYW5jaElkID0gdXNlcj8ubGVhZEJyYW5jaD8uaWQgfHwgdXNlcj8uYnJhbmNoSWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7IGlzQWN0aXZlOiB0cnVlIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzQnJhbmNoTWFuYWdlciAmJiBhY3RpdmVCcmFuY2hJZCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS5icmFuY2hJZCA9IGFjdGl2ZUJyYW5jaElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IGF3YWl0IHByaXNtYS52ZW5kb3IuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFua05hbWU6IHRydWUsIGJhbmtBY2NvdW50OiB0cnVlLCBlbWFpbDogdHJ1ZSwgcGhvbmU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZlbmRvcnM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZW5kb3JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJyYW5jaEFuZERlcGFydG1lbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIHsgYnJhbmNoOiBcIlwiLCBkZXBhcnRtZW50OiBcIlwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBsZWFkQnJhbmNoOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4geyBicmFuY2g6IFwiXCIsIGRlcGFydG1lbnQ6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgLy8gRm9yIEJyYW5jaCBNYW5hZ2VycyAoVEVBTV9MRUFERVIpLCB0aGVpciBicmFuY2ggaXMgc3RvcmVkIGluIGBsZWFkQnJhbmNoYCBvciBgYnJhbmNoSWRgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IHVzZXIubGVhZEJyYW5jaD8ubmFtZSB8fCB1c2VyLmJyYW5jaElkIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudCB8fCBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geyBicmFuY2g6IGJyYW5jaE5hbWUsIGRlcGFydG1lbnQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgYnJhbmNoICYgZGVwYXJ0bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGJyYW5jaDogXCJcIiwgZGVwYXJ0bWVudDogXCJcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZUFjY291bnRzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdHlwZTogJ0VYUEVOU0UnIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29kZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlIGFjY291bnRzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGVBY2NvdW50U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIGlzIHRvbyBzaG9ydFwiKSxcclxuICAgIGNvZGU6IHouc3RyaW5nKCkubWluKDIsIFwiQ29kZSBpcyByZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlZCA9IENyZWF0ZUFjY291bnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcykgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCBpbnB1dCBwcm92aWRlZFwiIH07XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjb2RlIH0gPSB2YWxpZGF0ZWQuZGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGNvZGUgfSB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGVycm9yOiBcIkFuIGFjY291bnQgd2l0aCB0aGlzIEdMIENvZGUgYWxyZWFkeSBleGlzdHMuXCIgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0VYUEVOU0UnLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhY2NvdW50OiBuZXdBY2NvdW50IH07XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYWNjb3VudDpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVVBZ05zQixpTUFBQSJ9
}),
"[project]/src/app/dashboard/requisitions/new/data:da58e1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategoriesAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0091a92555f278240af27907405115155c98dadd58":"getCategoriesAction"},"src/app/dashboard/requisitions/new/multi-item-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0091a92555f278240af27907405115155c98dadd58", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCategoriesAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXVsdGktaXRlbS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBjaGVja0VuZm9yY2VDbG9zdXJlIH0gZnJvbSBcIkAvbGliL2Nsb3N1cmUtY2hlY2tcIjtcclxuaW1wb3J0IHsgY2hlY2tFeHBlbnNlUG9saWNpZXMgfSBmcm9tIFwiQC9saWIvcG9saWN5LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyBhcHByb3ZhbFdvcmtmbG93IH0gZnJvbSBcIkAvbGliL2FwcHJvdmFsLXdvcmtmbG93XCI7XHJcblxyXG5jb25zdCBSZXF1aXNpdGlvbkl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oMywgXCJJdGVtIHRpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXHJcbiAgICB1bml0UHJpY2U6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiVW5pdCBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxyXG4gICAgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDEsIFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBpc1JlY3VycmluZzogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgIGZyZXF1ZW5jeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgc3RhcnREYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUmVxdWlzaXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgXCJUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxMCwgXCJKdXN0aWZpY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxuICAgIGN1cnJlbmN5OiB6LnN0cmluZygpLmRlZmF1bHQoXCJVU0RcIiksXHJcbiAgICBpdGVtczogei5hcnJheShSZXF1aXNpdGlvbkl0ZW1TY2hlbWEpLm1pbigxLCBcIkF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1aXNpdGlvbldpdGhJdGVtcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblxyXG4gICAgLy8gUGFyc2UgaXRlbXMgZnJvbSBmb3JtRGF0YVxyXG4gICAgY29uc3QgaXRlbXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaXRlbXNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zSnNvbik7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUmVxdWlzaXRpb25TY2hlbWEuc2FmZVBhcnNlKHtcclxuICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgIGN1cnJlbmN5OiBmb3JtRGF0YS5nZXQoXCJjdXJyZW5jeVwiKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zdXJlQ2hlY2sgPSBhd2FpdCBjaGVja0VuZm9yY2VDbG9zdXJlKHNlc3Npb24udXNlci5pZCk7XHJcbiAgICBpZiAoY2xvc3VyZUNoZWNrLmJsb2NrZWQpIHtcclxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjbG9zdXJlQ2hlY2subWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW5jeSwgaXRlbXM6IHZhbGlkYXRlZEl0ZW1zIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHZhbGlkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlKSwgMCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwcmltYXJ5IGNhdGVnb3J5IChmcm9tIGZpcnN0IGl0ZW0gb3IgbW9zdCBleHBlbnNpdmUgaXRlbSlcclxuICAgIGNvbnN0IHByaW1hcnlDYXRlZ29yeSA9IHZhbGlkYXRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgKGIucXVhbnRpdHkgKiBiLnVuaXRQcmljZSkgLSAoYS5xdWFudGl0eSAqIGEudW5pdFByaWNlKVxyXG4gICAgKVswXS5jYXRlZ29yeTtcclxuXHJcbiAgICAvLyBSdW4gUG9saWN5IENoZWNrc1xyXG4gICAgY29uc3QgcG9saWN5UmVzdWx0ID0gYXdhaXQgY2hlY2tFeHBlbnNlUG9saWNpZXMoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudDogdG90YWxBbW91bnQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICBleHBlbnNlRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwb2xpY3lSZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZXJzID0gcG9saWN5UmVzdWx0LnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5pc0Jsb2NraW5nKS5tYXAodiA9PiB2Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChibG9ja2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9saWN5IFZpb2xhdGlvbjogJHtibG9ja2Vycy5qb2luKFwiLCBcIil9YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nIHx8IFwiU1RBTkRBUkRcIjtcclxuICAgIGNvbnN0IGlzU1NDQSA9IGZvcm1EYXRhLmdldChcImlzU1NDQVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBpc1N0cmljdEFwcHJvdmFsID0gZm9ybURhdGEuZ2V0KFwiaXNTdHJpY3RBcHByb3ZhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgaWYgKGlzU1NDQSkge1xyXG4gICAgICAgIGlmICgoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJTWVNURU1fQURNSU5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQ6IE9ubHkgU3lzdGVtIEFkbWluaXN0cmF0b3JzIGNhbiBjcmVhdGUgU291dGggU3VkYW4gQ2l2aWwgQXZpYXRpb24gcmVxdWVzdHMuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZSA9IGlzU3RyaWN0QXBwcm92YWwgPyBcIlNPVVRIX1NVREFOX1NUUklDVFwiIDogXCJTT1VUSF9TVURBTlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHVzZXIgZm9yIGJyYW5jaC9yZWdpb24gaW5mb1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGJyYW5jaElkOiB0cnVlLCByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBicmFuY2hJZCA9IChmb3JtRGF0YS5nZXQoXCJicmFuY2hJZFwiKSBhcyBzdHJpbmcpIHx8IChmb3JtRGF0YS5nZXQoXCJicmFuY2hcIikgYXMgc3RyaW5nKSB8fCB1c2VyPy5icmFuY2hJZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5pZDtcclxuICAgIGNvbnN0IGRlcGFydG1lbnQgPSBmb3JtRGF0YS5nZXQoXCJkZXBhcnRtZW50XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHZlbmRvciA9IGZvcm1EYXRhLmdldChcInZlbmRvclwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleHBlY3RlZERhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJleHBlY3RlZERhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZmVyZW5jZSA9IGZvcm1EYXRhLmdldChcInBheW1lbnRSZWZlcmVuY2VcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgYWNjb3VudElkID0gZm9ybURhdGEuZ2V0KFwiYWNjb3VudElkXCIpIGFzIHN0cmluZztcclxuXHJcbiAgICBsZXQgZmluYWxEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKHZlbmRvciAmJiB2ZW5kb3IudHJpbSgpKSB7XHJcbiAgICAgICAgZmluYWxEZXNjcmlwdGlvbiArPSBgXFxuXFxuKipQcmVmZXJyZWQgVmVuZG9yOioqICR7dmVuZG9yLnRyaW0oKX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC50cmltKCkpIHtcclxuICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGBcXG5cXG4qKlBheW1lbnQgTWV0aG9kOioqICR7cGF5bWVudE1ldGhvZC50cmltKCl9YDtcclxuICAgICAgICBpZiAocGF5bWVudFJlZmVyZW5jZSAmJiBwYXltZW50UmVmZXJlbmNlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGAg4oCUIFJlZi9OdW1iZXI6ICR7cGF5bWVudFJlZmVyZW5jZS50cmltKCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwZWN0ZWREYXRlID0gZXhwZWN0ZWREYXRlU3RyID8gbmV3IERhdGUoZXhwZWN0ZWREYXRlU3RyKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgTmV4dCBSdW4gRGF0ZSBoZWxwZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRSdW4gPSAoc3RhcnREYXRlOiBEYXRlLCBmcmVxdWVuY3k6IHN0cmluZyk6IERhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRSdW4gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIHN3aXRjaCAoZnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQUlMWVwiOiBuZXh0UnVuLnNldERhdGUobmV4dFJ1bi5nZXREYXRlKCkgKyAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXRUVLTFlcIjogbmV4dFJ1bi5zZXREYXRlKG5leHRSdW4uZ2V0RGF0ZSgpICsgNyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU9OVEhMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFVQVJURVJMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDMpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIllFQVJMWVwiOiBuZXh0UnVuLnNldEZ1bGxZZWFyKG5leHRSdW4uZ2V0RnVsbFllYXIoKSArIDEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRSdW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSByZXF1aXNpdGlvbiB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCByZXF1aXNpdGlvbiA9IGF3YWl0IChwcmlzbWEucmVxdWlzaXRpb24uY3JlYXRlIGFzIGFueSkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpbmFsRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzSnVzdGlmaWNhdGlvbjogZmluYWxEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgYnJhbmNoSWQsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkRGF0ZSxcclxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCA/IHsgYWNjb3VudElkIH0gOiB7fSksXHJcbiAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHZhbGlkYXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1JlY3VycmluZyA9IGl0ZW0uaXNSZWN1cnJpbmcgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUgPyBuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnJpbmc6IGlzUmVjdXJyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNSZWN1cnJpbmcgJiYgaXRlbS5mcmVxdWVuY3kgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQXV0bzogJHtpdGVtLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogaXRlbS5mcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UnVuOiBjYWxjdWxhdGVOZXh0UnVuKHN0YXJ0RGF0ZSwgaXRlbS5mcmVxdWVuY3kpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24hLnVzZXIhLmlkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc29sdmUgcmVnaW9uSWQgZm9yIGFwcHJvdmFsIHJvdXRpbmdcclxuICAgIGNvbnN0IHVzZXJXaXRoQnJhbmNoID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udXNlci5pZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZXJSZWdpb25JZCA9IHVzZXJXaXRoQnJhbmNoPy5yZWdpb25JZCB8fCB1c2VyV2l0aEJyYW5jaD8ubGVhZEJyYW5jaD8ucmVnaW9uSWQ7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYXRlIEFwcHJvdmFsIFdvcmtmbG93XHJcbiAgICBjb25zb2xlLmxvZyhgW1JlcXVpc2l0aW9uXSBDcmVhdGluZyB3b3JrZmxvdyBmb3IgYW1vdW50OiAke3RvdGFsQW1vdW50fSwgY2F0ZWdvcnk6ICR7cHJpbWFyeUNhdGVnb3J5fWApO1xyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBhcHByb3ZhbFdvcmtmbG93LmRldGVybWluZVJvdXRlKFxyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBwcmltYXJ5Q2F0ZWdvcnksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1c2VyUmVnaW9uSWQgfHwgdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBbUmVxdWlzaXRpb25dIFJvdXRlIGRldGVybWluZWQ6ICR7cm91dGUuYXV0b0FwcHJvdmUgPyAnQXV0by1hcHByb3ZlJyA6ICdMZXZlbHM6ICcgKyByb3V0ZS5sZXZlbHMubGVuZ3RofWApO1xyXG4gICAgY29uc3QgYXBwcm92YWxzID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5jcmVhdGVSZXF1aXNpdGlvbkFwcHJvdmFscyhyZXF1aXNpdGlvbi5pZCwgcm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYFtSZXF1aXNpdGlvbl0gQ3JlYXRlZCAke2FwcHJvdmFscy5sZW5ndGh9IGFwcHJvdmFsIHJlY29yZHNgKTtcclxuXHJcbiAgICByZWRpcmVjdChcIi9kYXNoYm9hcmQvcmVxdWlzaXRpb25zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvUmVxdWlzaXRpb24ocmVxdWlzaXRpb25JZDogc3RyaW5nLCBpdGVtRGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkSXRlbSA9IFJlcXVpc2l0aW9uSXRlbVNjaGVtYS5zYWZlUGFyc2UoaXRlbURhdGEpO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkSXRlbS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRJdGVtLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3N1cmVDaGVjayA9IGF3YWl0IGNoZWNrRW5mb3JjZUNsb3N1cmUoc2Vzc2lvbi51c2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHVuaXRQcmljZSwgY2F0ZWdvcnkgfSA9IHZhbGlkYXRlZEl0ZW0uZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHVuaXRQcmljZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggcGFyZW50IHJlcXVpc2l0aW9uIHRvIGdldCB0eXBlIGFuZCBjdXJyZW5jeVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFJlcXVpc2l0aW9uID0gYXdhaXQgcHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcmVxdWlzaXRpb25JZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50UmVxdWlzaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiUmVxdWlzaXRpb24gbm90IGZvdW5kXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoIHVzZXIgcmVnaW9uXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogeyBzZWxlY3Q6IHsgcmVnaW9uSWQ6IHRydWUgfSB9IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyUmVnaW9uSWQgPSB1c2VyPy5yZWdpb25JZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5yZWdpb25JZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIEFwcHJvdmFsIFJvdXRlIGZvciB0aGlzIGl0ZW1cclxuICAgICAgICAvLyBXZSByZXVzZSB0aGUgbWFpbiB3b3JrZmxvdyBlbmdpbmUgYnV0IGFwcGx5IGl0IHRvIHRoaXMgc3BlY2lmaWMgaXRlbVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5kZXRlcm1pbmVSb3V0ZShcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmVudFJlcXVpc2l0aW9uLnR5cGUsIC8vIFBhc3MgdGhlIHBhcmVudCdzIHR5cGUgKGUuZy4gU09VVEhfU1VEQU4pXHJcbiAgICAgICAgICAgIHVzZXJSZWdpb25JZCB8fCB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaXRlbSBzdGF0dXMgYmFzZWQgb24gcm91dGVcclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGFscmVhZHkgYXBwcm92ZWQvcGFpZCwgYW5kIHRoaXMgdmFsaWQgcm91dGUgc2F5cyBhdXRvLWFwcHJvdmUgKGxpa2UgU1NDQSksIFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGFwcHJvdmUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBzdGFydHMgYXMgUEVORElORy5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdHVzID0gcm91dGUuYXV0b0FwcHJvdmUgPyAnQVBQUk9WRUQnIDogJ1BFTkRJTkcnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBpdGVtIHdpdGggaXRzIHNwZWNpZmljIHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhd2FpdCAocHJpc21hIGFzIGFueSkucmVxdWlzaXRpb25JdGVtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB1bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyZW50UmVxdWlzaXRpb24udHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgQXBwcm92YWwgUmVjb3JkcyBpZiBub3QgYXV0by1hcHByb3ZlZFxyXG4gICAgICAgIGlmICghcm91dGUuYXV0b0FwcHJvdmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiByb3V0ZS5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwcm92ZXIgb2YgbGV2ZWwuYXBwcm92ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLml0ZW1BcHByb3ZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXNpdGlvbkl0ZW1JZDogbmV3SXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVySWQ6IGFwcHJvdmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSB0b3RhbCBhbW91bnQgZm9yIHRoZSByZXF1aXNpdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIG1haW4gcmVxdWlzaXRpb24gc3RhdHVzIGRvZXMgTk9UIGNoYW5nZSBiYWNrIHRvIFBFTkRJTkcuXHJcbiAgICAgICAgLy8gVGhlIG5ldyBpdGVtIGhhcyBpdHMgb3duIGluZGVwZW5kZW50IGxpZmVjeWNsZS5cclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS5yZXF1aXNpdGlvbkl0ZW0uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsQW1vdW50ID0gYWxsSXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgaXRlbTogYW55KSA9PiBzdW0gKyBpdGVtLnRvdGFsUHJpY2UsIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmVxdWlzaXRpb24gYW1vdW50XHJcbiAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYW1vdW50OiBuZXdUb3RhbEFtb3VudCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpdGVtOiBuZXdJdGVtIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgaXRlbSB0byByZXF1aXNpdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgaXRlbVwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbGlnaWJsZVJlcXVpc2l0aW9ucygpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBTeXN0ZW0gQWRtaW4gcm9sZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IHJvbGU6IHRydWUsIGN1c3RvbVJvbGU6IHsgc2VsZWN0OiB7IGlzU3lzdGVtOiB0cnVlIH0gfSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ1NZU1RFTV9BRE1JTicgfHwgY3VycmVudFVzZXI/LmN1c3RvbVJvbGU/LmlzU3lzdGVtO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBQRU5ESU5HIG9yIEFQUFJPVkVEIHJlcXVpc2l0aW9uc1xyXG4gICAgICAgIC8vIEFkbWlucyBjYW4gc2VlIGFsbCwgdXNlcnMgc2VlIHRoZWlyIG93blxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1BBSUQnLCAnQ0xPU0VEJ10gfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1aXNpdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWlzaXRpb25zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZWxpZ2libGUgcmVxdWlzaXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hQ2xpZW50ID0gcHJpc21hIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjdXN0b21DYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hQ2xpZW50LmN1c3RvbUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IHRydWUgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNhdGVnb3J5TmFtZXMgPSBjdXN0b21DYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiBjLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHsgRVhQRU5TRV9DQVRFR09SSUVTIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9jb25zdGFudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLkVYUEVOU0VfQ0FURUdPUklFUywgLi4uY3VzdG9tQ2F0ZWdvcnlOYW1lc10pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCB7IEVYUEVOU0VfQ0FURUdPUklFUyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvY29uc3RhbnRzXCIpO1xyXG4gICAgICAgIHJldHVybiBFWFBFTlNFX0NBVEVHT1JJRVM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWZW5kb3JzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJhbmNoTWFuYWdlciA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID09PSAnVEVBTV9MRUFERVInO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJyYW5jaElkID0gdXNlcj8ubGVhZEJyYW5jaD8uaWQgfHwgdXNlcj8uYnJhbmNoSWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7IGlzQWN0aXZlOiB0cnVlIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzQnJhbmNoTWFuYWdlciAmJiBhY3RpdmVCcmFuY2hJZCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS5icmFuY2hJZCA9IGFjdGl2ZUJyYW5jaElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IGF3YWl0IHByaXNtYS52ZW5kb3IuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFua05hbWU6IHRydWUsIGJhbmtBY2NvdW50OiB0cnVlLCBlbWFpbDogdHJ1ZSwgcGhvbmU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZlbmRvcnM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZW5kb3JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJyYW5jaEFuZERlcGFydG1lbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIHsgYnJhbmNoOiBcIlwiLCBkZXBhcnRtZW50OiBcIlwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBsZWFkQnJhbmNoOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4geyBicmFuY2g6IFwiXCIsIGRlcGFydG1lbnQ6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgLy8gRm9yIEJyYW5jaCBNYW5hZ2VycyAoVEVBTV9MRUFERVIpLCB0aGVpciBicmFuY2ggaXMgc3RvcmVkIGluIGBsZWFkQnJhbmNoYCBvciBgYnJhbmNoSWRgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IHVzZXIubGVhZEJyYW5jaD8ubmFtZSB8fCB1c2VyLmJyYW5jaElkIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudCB8fCBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geyBicmFuY2g6IGJyYW5jaE5hbWUsIGRlcGFydG1lbnQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgYnJhbmNoICYgZGVwYXJ0bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGJyYW5jaDogXCJcIiwgZGVwYXJ0bWVudDogXCJcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZUFjY291bnRzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdHlwZTogJ0VYUEVOU0UnIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29kZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlIGFjY291bnRzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGVBY2NvdW50U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIGlzIHRvbyBzaG9ydFwiKSxcclxuICAgIGNvZGU6IHouc3RyaW5nKCkubWluKDIsIFwiQ29kZSBpcyByZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlZCA9IENyZWF0ZUFjY291bnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcykgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCBpbnB1dCBwcm92aWRlZFwiIH07XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjb2RlIH0gPSB2YWxpZGF0ZWQuZGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGNvZGUgfSB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGVycm9yOiBcIkFuIGFjY291bnQgd2l0aCB0aGlzIEdMIENvZGUgYWxyZWFkeSBleGlzdHMuXCIgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0VYUEVOU0UnLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhY2NvdW50OiBuZXdBY2NvdW50IH07XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYWNjb3VudDpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1VBK1dzQixnTUFBQSJ9
}),
"[project]/src/components/requisitions/AddItemModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddItemModal",
    ()=>AddItemModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$f79ae2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:f79ae2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$da58e1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:da58e1 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AddItemModal({ isOpen, onClose, requisitionId, currency, onItemAdded }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    const [unitPrice, setUnitPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const formatCurrency = (amount, currencyCode = "USD")=>{
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode
        }).format(amount);
    };
    const [allCategories, setAllCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCategoryOpen, setIsCategoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categorySearch, setCategorySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddItemModal.useEffect": ()=>{
            loadCategories();
        }
    }["AddItemModal.useEffect"], []);
    const loadCategories = async ()=>{
        const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$da58e1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCategoriesAction"])();
        setAllCategories(categories);
    };
    const filteredCategories = allCategories.filter((c)=>c.toLowerCase().includes(categorySearch.toLowerCase()));
    if (!isOpen) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        if (!title.trim() || !category || !unitPrice || parseFloat(unitPrice) <= 0) {
            setError("Please fill in all required fields");
            return;
        }
        setIsSubmitting(true);
        const itemData = {
            title,
            description,
            quantity: parseInt(quantity) || 1,
            unitPrice: parseFloat(unitPrice),
            category
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$f79ae2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addItemToRequisition"])(requisitionId, itemData);
        if (result.error) {
            setError(result.error);
            setIsSubmitting(false);
        } else {
            // Reset form
            setTitle("");
            setDescription("");
            setQuantity("1");
            setUnitPrice("");
            setCategory("");
            setIsSubmitting(false);
            onItemAdded();
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-hidden scale-100 animate-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[88px] px-6 flex items-center justify-between bg-gradient-to-r from-green-100 to-white border-b border-gray-200 rounded-t-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-semibold text-gray-900",
                                        children: "Add Item to Requisition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Add another item to this purchase request"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-white/50 rounded-lg transition-colors text-gray-500 hover:text-gray-900",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                                className: "text-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                lineNumber: 108,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-600",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                            lineNumber: 115,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium text-gray-700 mb-1.5",
                                            children: [
                                                "Item Title ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: title,
                                            onChange: (e)=>setTitle(e.target.value),
                                            required: true,
                                            className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#29258D]/10 focus:border-[#29258D] transition-all",
                                            placeholder: "e.g., Laptop Computer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium text-gray-700 mb-1.5",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: description,
                                            onChange: (e)=>setDescription(e.target.value),
                                            className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#29258D]/10 focus:border-[#29258D] transition-all resize-none",
                                            rows: 2,
                                            placeholder: "Optional details..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium text-gray-700 mb-1.5",
                                            children: [
                                                "Category ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setIsCategoryOpen(!isCategoryOpen),
                                                    className: "w-full bg-white border border-gray-200 rounded-lg min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between transition-colors hover:border-[#29258D]",
                                                    children: [
                                                        category ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-900",
                                                            children: category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 41
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-400",
                                                            children: "Select category..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                                            className: `text-gray-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, this),
                                                isCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"], {
                                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    autoFocus: true,
                                                                    placeholder: "Search categories...",
                                                                    value: categorySearch,
                                                                    onChange: (e)=>setCategorySearch(e.target.value),
                                                                    onClick: (e)=>e.stopPropagation(),
                                                                    className: "w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "max-h-48 overflow-y-auto",
                                                            children: filteredCategories.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: filteredCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            setCategory(cat);
                                                                            setIsCategoryOpen(false);
                                                                            setCategorySearch("");
                                                                        },
                                                                        className: "px-3 py-1.5 rounded-full text-xs font-medium border transition-all bg-white border-gray-300 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900",
                                                                        children: cat
                                                                    }, cat, false, {
                                                                        fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 57
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 49
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2 text-center text-gray-500 text-xs",
                                                                children: "No categories found"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 37
                                                }, this),
                                                isCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fixed inset-0 z-40",
                                                    onClick: ()=>setIsCategoryOpen(false)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                    children: [
                                                        "Quantity ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 46
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: quantity,
                                                    onChange: (e)=>setQuantity(e.target.value),
                                                    required: true,
                                                    className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#29258D]/10 focus:border-[#29258D] transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 210,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                    children: [
                                                        "Unit Price (",
                                                        currency,
                                                        ") ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 61
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-xs",
                                                            children: formatCurrency(0, currency).replace(/[0-9.,\s]/g, '')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            min: "0",
                                                            value: unitPrice,
                                                            onChange: (e)=>setUnitPrice(e.target.value),
                                                            required: true,
                                                            className: "w-full bg-white border border-gray-200 rounded-lg pl-8 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#29258D]/10 focus:border-[#29258D] transition-all font-mono",
                                                            placeholder: "0.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, this),
                                quantity && unitPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#29258D]/5 border border-[#29258D]/20 rounded-lg p-3 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Item Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 248,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-[#29258D]",
                                            children: formatCurrency((parseInt(quantity) || 0) * (parseFloat(unitPrice) || 0), currency)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 249,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                    lineNumber: 247,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-6 pt-6 border-t border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium text-xs hover:bg-gray-50 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                    lineNumber: 257,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    className: "flex-1 px-4 py-2.5 bg-[#29258D] text-white rounded-lg font-medium text-xs hover:bg-[#29258D]/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPlus"], {
                                            className: "text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, this),
                                        isSubmitting ? "Adding..." : "Add Item"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                            lineNumber: 256,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
            lineNumber: 95,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/requisitions/AddItemModal.tsx",
        lineNumber: 94,
        columnNumber: 9
    }, this);
}
_s(AddItemModal, "gfdSvTG3QymKCaOsrzpdU2C8wUo=");
_c = AddItemModal;
var _c;
__turbopack_context__.k.register(_c, "AddItemModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/requisitions/RequisitionTypeModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RequisitionTypeModal",
    ()=>RequisitionTypeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$requisitions$2f$AddItemModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/requisitions/AddItemModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function RequisitionTypeModal({ isOpen, onClose, existingRequisitions = [], isLoading = false }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showAddItemModal, setShowAddItemModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRequisition, setSelectedRequisition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequisitionTypeModal.useEffect": ()=>{
            setMounted(true);
        }
    }["RequisitionTypeModal.useEffect"], []);
    if (!isOpen) return null;
    if (!mounted) return null;
    let content;
    if (showAddItemModal && selectedRequisition) {
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$requisitions$2f$AddItemModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddItemModal"], {
            isOpen: true,
            onClose: ()=>{
                setShowAddItemModal(false);
                setSelectedRequisition(null);
                onClose();
            },
            requisitionId: selectedRequisition.id,
            currency: selectedRequisition.currency || "USD",
            onItemAdded: ()=>{
                onClose();
                router.refresh();
            }
        }, void 0, false, {
            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this);
    } else if (showAddItemModal && !selectedRequisition) {
        // Improved Add Item Flow: First select a requisition
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-in fade-in duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-hidden scale-100 animate-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[88px] px-6 flex items-center justify-between bg-gradient-to-r from-green-100 to-white border-b border-gray-200 rounded-t-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-semibold text-gray-900",
                                            children: "Select Requisition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Choose a requisition to add items to"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                            lineNumber: 57,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddItemModal(false),
                                className: "p-2 hover:bg-white/50 rounded-lg transition-colors text-gray-500 hover:text-gray-900",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center py-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#29258D]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                lineNumber: 68,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                            lineNumber: 67,
                            columnNumber: 29
                        }, this) : existingRequisitions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No eligible requisitions found."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-1",
                                    children: "You can only add items to Pending, Approved, or Paid requisitions."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                            lineNumber: 71,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3",
                            children: existingRequisitions.map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedRequisition(req),
                                    className: "text-left p-4 rounded-xl border border-gray-200 hover:border-[#29258D] hover:bg-[#29258D]/5 transition-all group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-gray-900 group-hover:text-[#29258D]",
                                                    children: req.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${req.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : req.status === 'PAID' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`,
                                                    children: req.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500 flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: req.id.slice(0, 8).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: new Date(req.createdAt).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-700",
                                                    children: [
                                                        req.currency,
                                                        " ",
                                                        req.amount.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, req.id, true, {
                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 37
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                            lineNumber: 76,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this);
    } else {
        // Initial Choice
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-in fade-in duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-xl max-w-lg w-full overflow-hidden scale-100 animate-in zoom-in-95 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[88px] px-6 flex items-center justify-between bg-gradient-to-r from-green-100 to-white border-b border-gray-200 rounded-t-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-semibold text-gray-900",
                                            children: "Create Request"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "What would you like to do?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                            lineNumber: 116,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                lineNumber: 113,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-white/50 rounded-lg transition-colors text-gray-500 hover:text-gray-900",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                lineNumber: 119,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                        lineNumber: 112,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 grid gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onClose();
                                    router.push('/dashboard/requisitions/new');
                                },
                                className: "flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#29258D] hover:bg-[#29258D]/5 transition-all group text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 w-14 h-14 group-hover:scale-110 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/cards/online-payment (1).png",
                                            alt: "New Requisition",
                                            className: "w-full h-full object-contain drop-shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-gray-900 group-hover:text-[#29258D]",
                                                children: "New Requisition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                lineNumber: 136,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-1 leading-relaxed",
                                                children: "Create a completely new purchase request. Start fresh with a new approval workflow."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                lineNumber: 137,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                        lineNumber: 135,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                lineNumber: 125,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddItemModal(true),
                                className: "flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 transition-all group text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 w-14 h-14 group-hover:scale-110 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/cards/online-payment (2).png",
                                            alt: "Add Item",
                                            className: "w-full h-full object-contain drop-shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                        lineNumber: 147,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-gray-900 group-hover:text-emerald-700",
                                                children: "Add Item to Existing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-1 leading-relaxed",
                                                children: "Add an item to a requisition that is already in progress, approved, or paid."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                                lineNumber: 152,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                            lineNumber: 160,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                        lineNumber: 159,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
                lineNumber: 111,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/requisitions/RequisitionTypeModal.tsx",
            lineNumber: 110,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(content, document.body);
}
_s(RequisitionTypeModal, "K5tDRXt3TdL87q+NRwC8uJv7W+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RequisitionTypeModal;
var _c;
__turbopack_context__.k.register(_c, "RequisitionTypeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/requisitions/new/data:06f770 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEligibleRequisitions",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00da2e63c392810a63b6438f5c38c682a140091ef0":"getEligibleRequisitions"},"src/app/dashboard/requisitions/new/multi-item-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00da2e63c392810a63b6438f5c38c682a140091ef0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getEligibleRequisitions");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXVsdGktaXRlbS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBjaGVja0VuZm9yY2VDbG9zdXJlIH0gZnJvbSBcIkAvbGliL2Nsb3N1cmUtY2hlY2tcIjtcclxuaW1wb3J0IHsgY2hlY2tFeHBlbnNlUG9saWNpZXMgfSBmcm9tIFwiQC9saWIvcG9saWN5LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyBhcHByb3ZhbFdvcmtmbG93IH0gZnJvbSBcIkAvbGliL2FwcHJvdmFsLXdvcmtmbG93XCI7XHJcblxyXG5jb25zdCBSZXF1aXNpdGlvbkl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oMywgXCJJdGVtIHRpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXHJcbiAgICB1bml0UHJpY2U6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiVW5pdCBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxyXG4gICAgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDEsIFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBpc1JlY3VycmluZzogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgIGZyZXF1ZW5jeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgc3RhcnREYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUmVxdWlzaXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgXCJUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxMCwgXCJKdXN0aWZpY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxuICAgIGN1cnJlbmN5OiB6LnN0cmluZygpLmRlZmF1bHQoXCJVU0RcIiksXHJcbiAgICBpdGVtczogei5hcnJheShSZXF1aXNpdGlvbkl0ZW1TY2hlbWEpLm1pbigxLCBcIkF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1aXNpdGlvbldpdGhJdGVtcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblxyXG4gICAgLy8gUGFyc2UgaXRlbXMgZnJvbSBmb3JtRGF0YVxyXG4gICAgY29uc3QgaXRlbXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaXRlbXNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zSnNvbik7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUmVxdWlzaXRpb25TY2hlbWEuc2FmZVBhcnNlKHtcclxuICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgIGN1cnJlbmN5OiBmb3JtRGF0YS5nZXQoXCJjdXJyZW5jeVwiKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zdXJlQ2hlY2sgPSBhd2FpdCBjaGVja0VuZm9yY2VDbG9zdXJlKHNlc3Npb24udXNlci5pZCk7XHJcbiAgICBpZiAoY2xvc3VyZUNoZWNrLmJsb2NrZWQpIHtcclxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjbG9zdXJlQ2hlY2subWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW5jeSwgaXRlbXM6IHZhbGlkYXRlZEl0ZW1zIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHZhbGlkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlKSwgMCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwcmltYXJ5IGNhdGVnb3J5IChmcm9tIGZpcnN0IGl0ZW0gb3IgbW9zdCBleHBlbnNpdmUgaXRlbSlcclxuICAgIGNvbnN0IHByaW1hcnlDYXRlZ29yeSA9IHZhbGlkYXRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgKGIucXVhbnRpdHkgKiBiLnVuaXRQcmljZSkgLSAoYS5xdWFudGl0eSAqIGEudW5pdFByaWNlKVxyXG4gICAgKVswXS5jYXRlZ29yeTtcclxuXHJcbiAgICAvLyBSdW4gUG9saWN5IENoZWNrc1xyXG4gICAgY29uc3QgcG9saWN5UmVzdWx0ID0gYXdhaXQgY2hlY2tFeHBlbnNlUG9saWNpZXMoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudDogdG90YWxBbW91bnQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICBleHBlbnNlRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwb2xpY3lSZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZXJzID0gcG9saWN5UmVzdWx0LnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5pc0Jsb2NraW5nKS5tYXAodiA9PiB2Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChibG9ja2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9saWN5IFZpb2xhdGlvbjogJHtibG9ja2Vycy5qb2luKFwiLCBcIil9YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nIHx8IFwiU1RBTkRBUkRcIjtcclxuICAgIGNvbnN0IGlzU1NDQSA9IGZvcm1EYXRhLmdldChcImlzU1NDQVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBpc1N0cmljdEFwcHJvdmFsID0gZm9ybURhdGEuZ2V0KFwiaXNTdHJpY3RBcHByb3ZhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgaWYgKGlzU1NDQSkge1xyXG4gICAgICAgIGlmICgoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJTWVNURU1fQURNSU5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQ6IE9ubHkgU3lzdGVtIEFkbWluaXN0cmF0b3JzIGNhbiBjcmVhdGUgU291dGggU3VkYW4gQ2l2aWwgQXZpYXRpb24gcmVxdWVzdHMuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZSA9IGlzU3RyaWN0QXBwcm92YWwgPyBcIlNPVVRIX1NVREFOX1NUUklDVFwiIDogXCJTT1VUSF9TVURBTlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHVzZXIgZm9yIGJyYW5jaC9yZWdpb24gaW5mb1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGJyYW5jaElkOiB0cnVlLCByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBicmFuY2hJZCA9IChmb3JtRGF0YS5nZXQoXCJicmFuY2hJZFwiKSBhcyBzdHJpbmcpIHx8IChmb3JtRGF0YS5nZXQoXCJicmFuY2hcIikgYXMgc3RyaW5nKSB8fCB1c2VyPy5icmFuY2hJZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5pZDtcclxuICAgIGNvbnN0IGRlcGFydG1lbnQgPSBmb3JtRGF0YS5nZXQoXCJkZXBhcnRtZW50XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHZlbmRvciA9IGZvcm1EYXRhLmdldChcInZlbmRvclwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleHBlY3RlZERhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJleHBlY3RlZERhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZmVyZW5jZSA9IGZvcm1EYXRhLmdldChcInBheW1lbnRSZWZlcmVuY2VcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgYWNjb3VudElkID0gZm9ybURhdGEuZ2V0KFwiYWNjb3VudElkXCIpIGFzIHN0cmluZztcclxuXHJcbiAgICBsZXQgZmluYWxEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKHZlbmRvciAmJiB2ZW5kb3IudHJpbSgpKSB7XHJcbiAgICAgICAgZmluYWxEZXNjcmlwdGlvbiArPSBgXFxuXFxuKipQcmVmZXJyZWQgVmVuZG9yOioqICR7dmVuZG9yLnRyaW0oKX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC50cmltKCkpIHtcclxuICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGBcXG5cXG4qKlBheW1lbnQgTWV0aG9kOioqICR7cGF5bWVudE1ldGhvZC50cmltKCl9YDtcclxuICAgICAgICBpZiAocGF5bWVudFJlZmVyZW5jZSAmJiBwYXltZW50UmVmZXJlbmNlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGAg4oCUIFJlZi9OdW1iZXI6ICR7cGF5bWVudFJlZmVyZW5jZS50cmltKCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwZWN0ZWREYXRlID0gZXhwZWN0ZWREYXRlU3RyID8gbmV3IERhdGUoZXhwZWN0ZWREYXRlU3RyKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgTmV4dCBSdW4gRGF0ZSBoZWxwZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRSdW4gPSAoc3RhcnREYXRlOiBEYXRlLCBmcmVxdWVuY3k6IHN0cmluZyk6IERhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRSdW4gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIHN3aXRjaCAoZnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQUlMWVwiOiBuZXh0UnVuLnNldERhdGUobmV4dFJ1bi5nZXREYXRlKCkgKyAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXRUVLTFlcIjogbmV4dFJ1bi5zZXREYXRlKG5leHRSdW4uZ2V0RGF0ZSgpICsgNyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU9OVEhMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFVQVJURVJMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDMpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIllFQVJMWVwiOiBuZXh0UnVuLnNldEZ1bGxZZWFyKG5leHRSdW4uZ2V0RnVsbFllYXIoKSArIDEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRSdW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSByZXF1aXNpdGlvbiB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCByZXF1aXNpdGlvbiA9IGF3YWl0IChwcmlzbWEucmVxdWlzaXRpb24uY3JlYXRlIGFzIGFueSkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpbmFsRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzSnVzdGlmaWNhdGlvbjogZmluYWxEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgYnJhbmNoSWQsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkRGF0ZSxcclxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCA/IHsgYWNjb3VudElkIH0gOiB7fSksXHJcbiAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHZhbGlkYXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1JlY3VycmluZyA9IGl0ZW0uaXNSZWN1cnJpbmcgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUgPyBuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnJpbmc6IGlzUmVjdXJyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNSZWN1cnJpbmcgJiYgaXRlbS5mcmVxdWVuY3kgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQXV0bzogJHtpdGVtLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogaXRlbS5mcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UnVuOiBjYWxjdWxhdGVOZXh0UnVuKHN0YXJ0RGF0ZSwgaXRlbS5mcmVxdWVuY3kpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24hLnVzZXIhLmlkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc29sdmUgcmVnaW9uSWQgZm9yIGFwcHJvdmFsIHJvdXRpbmdcclxuICAgIGNvbnN0IHVzZXJXaXRoQnJhbmNoID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udXNlci5pZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZXJSZWdpb25JZCA9IHVzZXJXaXRoQnJhbmNoPy5yZWdpb25JZCB8fCB1c2VyV2l0aEJyYW5jaD8ubGVhZEJyYW5jaD8ucmVnaW9uSWQ7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYXRlIEFwcHJvdmFsIFdvcmtmbG93XHJcbiAgICBjb25zb2xlLmxvZyhgW1JlcXVpc2l0aW9uXSBDcmVhdGluZyB3b3JrZmxvdyBmb3IgYW1vdW50OiAke3RvdGFsQW1vdW50fSwgY2F0ZWdvcnk6ICR7cHJpbWFyeUNhdGVnb3J5fWApO1xyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBhcHByb3ZhbFdvcmtmbG93LmRldGVybWluZVJvdXRlKFxyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBwcmltYXJ5Q2F0ZWdvcnksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1c2VyUmVnaW9uSWQgfHwgdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBbUmVxdWlzaXRpb25dIFJvdXRlIGRldGVybWluZWQ6ICR7cm91dGUuYXV0b0FwcHJvdmUgPyAnQXV0by1hcHByb3ZlJyA6ICdMZXZlbHM6ICcgKyByb3V0ZS5sZXZlbHMubGVuZ3RofWApO1xyXG4gICAgY29uc3QgYXBwcm92YWxzID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5jcmVhdGVSZXF1aXNpdGlvbkFwcHJvdmFscyhyZXF1aXNpdGlvbi5pZCwgcm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYFtSZXF1aXNpdGlvbl0gQ3JlYXRlZCAke2FwcHJvdmFscy5sZW5ndGh9IGFwcHJvdmFsIHJlY29yZHNgKTtcclxuXHJcbiAgICByZWRpcmVjdChcIi9kYXNoYm9hcmQvcmVxdWlzaXRpb25zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvUmVxdWlzaXRpb24ocmVxdWlzaXRpb25JZDogc3RyaW5nLCBpdGVtRGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkSXRlbSA9IFJlcXVpc2l0aW9uSXRlbVNjaGVtYS5zYWZlUGFyc2UoaXRlbURhdGEpO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkSXRlbS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRJdGVtLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3N1cmVDaGVjayA9IGF3YWl0IGNoZWNrRW5mb3JjZUNsb3N1cmUoc2Vzc2lvbi51c2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHVuaXRQcmljZSwgY2F0ZWdvcnkgfSA9IHZhbGlkYXRlZEl0ZW0uZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHVuaXRQcmljZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggcGFyZW50IHJlcXVpc2l0aW9uIHRvIGdldCB0eXBlIGFuZCBjdXJyZW5jeVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFJlcXVpc2l0aW9uID0gYXdhaXQgcHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcmVxdWlzaXRpb25JZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50UmVxdWlzaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiUmVxdWlzaXRpb24gbm90IGZvdW5kXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoIHVzZXIgcmVnaW9uXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogeyBzZWxlY3Q6IHsgcmVnaW9uSWQ6IHRydWUgfSB9IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyUmVnaW9uSWQgPSB1c2VyPy5yZWdpb25JZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5yZWdpb25JZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIEFwcHJvdmFsIFJvdXRlIGZvciB0aGlzIGl0ZW1cclxuICAgICAgICAvLyBXZSByZXVzZSB0aGUgbWFpbiB3b3JrZmxvdyBlbmdpbmUgYnV0IGFwcGx5IGl0IHRvIHRoaXMgc3BlY2lmaWMgaXRlbVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5kZXRlcm1pbmVSb3V0ZShcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmVudFJlcXVpc2l0aW9uLnR5cGUsIC8vIFBhc3MgdGhlIHBhcmVudCdzIHR5cGUgKGUuZy4gU09VVEhfU1VEQU4pXHJcbiAgICAgICAgICAgIHVzZXJSZWdpb25JZCB8fCB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaXRlbSBzdGF0dXMgYmFzZWQgb24gcm91dGVcclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGFscmVhZHkgYXBwcm92ZWQvcGFpZCwgYW5kIHRoaXMgdmFsaWQgcm91dGUgc2F5cyBhdXRvLWFwcHJvdmUgKGxpa2UgU1NDQSksIFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGFwcHJvdmUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBzdGFydHMgYXMgUEVORElORy5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdHVzID0gcm91dGUuYXV0b0FwcHJvdmUgPyAnQVBQUk9WRUQnIDogJ1BFTkRJTkcnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBpdGVtIHdpdGggaXRzIHNwZWNpZmljIHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhd2FpdCAocHJpc21hIGFzIGFueSkucmVxdWlzaXRpb25JdGVtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB1bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyZW50UmVxdWlzaXRpb24udHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgQXBwcm92YWwgUmVjb3JkcyBpZiBub3QgYXV0by1hcHByb3ZlZFxyXG4gICAgICAgIGlmICghcm91dGUuYXV0b0FwcHJvdmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiByb3V0ZS5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwcm92ZXIgb2YgbGV2ZWwuYXBwcm92ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLml0ZW1BcHByb3ZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXNpdGlvbkl0ZW1JZDogbmV3SXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVySWQ6IGFwcHJvdmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSB0b3RhbCBhbW91bnQgZm9yIHRoZSByZXF1aXNpdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIG1haW4gcmVxdWlzaXRpb24gc3RhdHVzIGRvZXMgTk9UIGNoYW5nZSBiYWNrIHRvIFBFTkRJTkcuXHJcbiAgICAgICAgLy8gVGhlIG5ldyBpdGVtIGhhcyBpdHMgb3duIGluZGVwZW5kZW50IGxpZmVjeWNsZS5cclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS5yZXF1aXNpdGlvbkl0ZW0uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsQW1vdW50ID0gYWxsSXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgaXRlbTogYW55KSA9PiBzdW0gKyBpdGVtLnRvdGFsUHJpY2UsIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmVxdWlzaXRpb24gYW1vdW50XHJcbiAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYW1vdW50OiBuZXdUb3RhbEFtb3VudCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpdGVtOiBuZXdJdGVtIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgaXRlbSB0byByZXF1aXNpdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgaXRlbVwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbGlnaWJsZVJlcXVpc2l0aW9ucygpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBTeXN0ZW0gQWRtaW4gcm9sZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IHJvbGU6IHRydWUsIGN1c3RvbVJvbGU6IHsgc2VsZWN0OiB7IGlzU3lzdGVtOiB0cnVlIH0gfSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ1NZU1RFTV9BRE1JTicgfHwgY3VycmVudFVzZXI/LmN1c3RvbVJvbGU/LmlzU3lzdGVtO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBQRU5ESU5HIG9yIEFQUFJPVkVEIHJlcXVpc2l0aW9uc1xyXG4gICAgICAgIC8vIEFkbWlucyBjYW4gc2VlIGFsbCwgdXNlcnMgc2VlIHRoZWlyIG93blxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1BBSUQnLCAnQ0xPU0VEJ10gfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1aXNpdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWlzaXRpb25zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZWxpZ2libGUgcmVxdWlzaXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hQ2xpZW50ID0gcHJpc21hIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjdXN0b21DYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hQ2xpZW50LmN1c3RvbUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IHRydWUgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNhdGVnb3J5TmFtZXMgPSBjdXN0b21DYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiBjLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHsgRVhQRU5TRV9DQVRFR09SSUVTIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9jb25zdGFudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLkVYUEVOU0VfQ0FURUdPUklFUywgLi4uY3VzdG9tQ2F0ZWdvcnlOYW1lc10pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCB7IEVYUEVOU0VfQ0FURUdPUklFUyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvY29uc3RhbnRzXCIpO1xyXG4gICAgICAgIHJldHVybiBFWFBFTlNFX0NBVEVHT1JJRVM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWZW5kb3JzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJhbmNoTWFuYWdlciA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID09PSAnVEVBTV9MRUFERVInO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJyYW5jaElkID0gdXNlcj8ubGVhZEJyYW5jaD8uaWQgfHwgdXNlcj8uYnJhbmNoSWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7IGlzQWN0aXZlOiB0cnVlIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzQnJhbmNoTWFuYWdlciAmJiBhY3RpdmVCcmFuY2hJZCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS5icmFuY2hJZCA9IGFjdGl2ZUJyYW5jaElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IGF3YWl0IHByaXNtYS52ZW5kb3IuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFua05hbWU6IHRydWUsIGJhbmtBY2NvdW50OiB0cnVlLCBlbWFpbDogdHJ1ZSwgcGhvbmU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZlbmRvcnM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZW5kb3JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJyYW5jaEFuZERlcGFydG1lbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIHsgYnJhbmNoOiBcIlwiLCBkZXBhcnRtZW50OiBcIlwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBsZWFkQnJhbmNoOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4geyBicmFuY2g6IFwiXCIsIGRlcGFydG1lbnQ6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgLy8gRm9yIEJyYW5jaCBNYW5hZ2VycyAoVEVBTV9MRUFERVIpLCB0aGVpciBicmFuY2ggaXMgc3RvcmVkIGluIGBsZWFkQnJhbmNoYCBvciBgYnJhbmNoSWRgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IHVzZXIubGVhZEJyYW5jaD8ubmFtZSB8fCB1c2VyLmJyYW5jaElkIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudCB8fCBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geyBicmFuY2g6IGJyYW5jaE5hbWUsIGRlcGFydG1lbnQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgYnJhbmNoICYgZGVwYXJ0bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGJyYW5jaDogXCJcIiwgZGVwYXJ0bWVudDogXCJcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZUFjY291bnRzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdHlwZTogJ0VYUEVOU0UnIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29kZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlIGFjY291bnRzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGVBY2NvdW50U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIGlzIHRvbyBzaG9ydFwiKSxcclxuICAgIGNvZGU6IHouc3RyaW5nKCkubWluKDIsIFwiQ29kZSBpcyByZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlZCA9IENyZWF0ZUFjY291bnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcykgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCBpbnB1dCBwcm92aWRlZFwiIH07XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjb2RlIH0gPSB2YWxpZGF0ZWQuZGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGNvZGUgfSB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGVycm9yOiBcIkFuIGFjY291bnQgd2l0aCB0aGlzIEdMIENvZGUgYWxyZWFkeSBleGlzdHMuXCIgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0VYUEVOU0UnLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhY2NvdW50OiBuZXdBY2NvdW50IH07XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYWNjb3VudDpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1VBa1VzQixvTUFBQSJ9
}),
"[project]/src/components/layout/GlobalNewRequisitionButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalNewRequisitionButton",
    ()=>GlobalNewRequisitionButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$requisitions$2f$RequisitionTypeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/requisitions/RequisitionTypeModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$06f770__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:06f770 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GlobalNewRequisitionButton() {
    _s();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [requisitions, setRequisitions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dataLoaded, setDataLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOpen = async ()=>{
        setIsModalOpen(true);
        // Fetch data if not already loaded or if list is empty (to refresh)
        if (!dataLoaded || requisitions.length === 0) {
            setLoading(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$06f770__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getEligibleRequisitions"])();
                setRequisitions(data);
                setDataLoaded(true);
            } catch (error) {
                console.error("Failed to fetch requisitions", error);
            } finally{
                setLoading(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleOpen,
                className: "px-3 py-2 rounded-lg border border-transparent transition-all group flex items-center gap-2 hover:border-purple-500/30 hover:bg-purple-500/5 hover:scale-105 bg-white/50",
                title: "New Requisition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiReceipt"], {
                        className: "text-lg transition-colors text-gray-500 group-hover:text-purple-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/GlobalNewRequisitionButton.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold transition-colors text-gray-500 group-hover:text-purple-600 hidden lg:inline",
                        children: "Requisition"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/GlobalNewRequisitionButton.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/GlobalNewRequisitionButton.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$requisitions$2f$RequisitionTypeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionTypeModal"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                existingRequisitions: requisitions,
                isLoading: loading
            }, void 0, false, {
                fileName: "[project]/src/components/layout/GlobalNewRequisitionButton.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(GlobalNewRequisitionButton, "buWe805sSHOxYPBbZlMZWoSo9u4=");
_c = GlobalNewRequisitionButton;
var _c;
__turbopack_context__.k.register(_c, "GlobalNewRequisitionButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseModal",
    ()=>BaseModal,
    "ConfirmationModal",
    ()=>ConfirmationModal,
    "FormModal",
    ()=>FormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BaseModal({ isOpen, onClose, children, maxWidth = "md", showCloseButton = false }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseModal.useEffect": ()=>{
            setMounted(true);
        }
    }["BaseModal.useEffect"], []);
    if (!mounted) return null;
    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl"
    };
    const modalContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-white/40 backdrop-blur-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 53,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    className: `relative bg-white border border-gray-200 w-full ${maxWidthClasses[maxWidth]} rounded-xl shadow-2xl overflow-hidden`,
                    children: [
                        showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                                className: "text-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Modal.tsx",
                                lineNumber: 73,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Modal.tsx",
                            lineNumber: 69,
                            columnNumber: 29
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 62,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 51,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Modal.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalContent, document.body);
}
_s(BaseModal, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = BaseModal;
function ConfirmationModal({ isOpen, onClose, onConfirm, title, description, confirmText = "Confirm", cancelText = "Cancel", variant = "danger", isLoading = false, entityName, onCancel }) {
    _s1();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmationModal.useEffect": ()=>{
            setMounted(true);
        }
    }["ConfirmationModal.useEffect"], []);
    const handleConfirm = async ()=>{
        await onConfirm();
    };
    if (!mounted) return null;
    const variantStyles = {
        danger: {
            iconBg: "bg-rose-50",
            iconColor: "text-rose-500",
            buttonBg: "bg-rose-600 hover:bg-rose-700"
        },
        warning: {
            iconBg: "bg-amber-50",
            iconColor: "text-amber-500",
            buttonBg: "bg-amber-600 hover:bg-amber-700"
        },
        info: {
            iconBg: "bg-blue-50",
            iconColor: "text-blue-500",
            buttonBg: "bg-blue-600 hover:bg-blue-700"
        }
    };
    const styles = variantStyles[variant];
    const modalContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-white/40 backdrop-blur-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    className: "relative bg-white border border-gray-200 w-full max-w-md rounded-xl shadow-2xl overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-14 h-14 rounded-full ${styles.iconBg} ${styles.iconColor} flex items-center justify-center mx-auto mb-4`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiWarning"], {
                                    className: "text-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Modal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Modal.tsx",
                                lineNumber: 169,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-900 mb-2",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Modal.tsx",
                                lineNumber: 172,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-8",
                                children: entityName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        description.split(entityName)[0],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: entityName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Modal.tsx",
                                            lineNumber: 177,
                                            columnNumber: 41
                                        }, this),
                                        description.split(entityName)[1]
                                    ]
                                }, void 0, true) : description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Modal.tsx",
                                lineNumber: 173,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onCancel || onClose,
                                        disabled: isLoading,
                                        className: "px-6 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                                        children: cancelText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Modal.tsx",
                                        lineNumber: 186,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleConfirm,
                                        disabled: isLoading,
                                        className: `px-6 py-2.5 text-sm font-semibold text-white ${styles.buttonBg} rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50`,
                                        children: [
                                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Modal.tsx",
                                                lineNumber: 199,
                                                columnNumber: 41
                                            }, this),
                                            isLoading ? "Processing..." : confirmText
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/Modal.tsx",
                                        lineNumber: 193,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Modal.tsx",
                                lineNumber: 185,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Modal.tsx",
                        lineNumber: 168,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 162,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 153,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Modal.tsx",
        lineNumber: 151,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalContent, document.body);
}
_s1(ConfirmationModal, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c1 = ConfirmationModal;
function FormModal({ isOpen, onClose, title, subtitle, icon, children, maxWidth = "xl", hideIconBackground = false }) {
    _s2();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormModal.useEffect": ()=>{
            setMounted(true);
        }
    }["FormModal.useEffect"], []);
    if (!mounted) return null;
    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl"
    };
    const modalContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-white/40 backdrop-blur-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 263,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    className: `relative bg-white border border-gray-200 w-full ${maxWidthClasses[maxWidth]} rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[72px] px-8 border-b border-gray-100 flex justify-between items-center bg-white shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(!hideIconBackground && "p-2.5 rounded-lg bg-[#F6F6F6] text-[#29258D]"),
                                            children: icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Modal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-semibold text-gray-900",
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Modal.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 37
                                                }, this),
                                                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs mt-0.5 font-medium",
                                                    children: subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Modal.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Modal.tsx",
                                            lineNumber: 287,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/Modal.tsx",
                                    lineNumber: 279,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                                        className: "text-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Modal.tsx",
                                        lineNumber: 298,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Modal.tsx",
                                    lineNumber: 294,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Modal.tsx",
                            lineNumber: 278,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto bg-[#f8f9fa]",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Modal.tsx",
                            lineNumber: 303,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 271,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 262,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Modal.tsx",
        lineNumber: 260,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalContent, document.body);
}
_s2(FormModal, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c2 = FormModal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BaseModal");
__turbopack_context__.k.register(_c1, "ConfirmationModal");
__turbopack_context__.k.register(_c2, "FormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ToastProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$GlobalNewRequisitionButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/GlobalNewRequisitionButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header({ onMenuClick }) {
    _s();
    const [searchFocused, setSearchFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationsOpen, setNotificationsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [showEmergencyAlert, setShowEmergencyAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getBreadcrumbs = ()=>{
        const paths = pathname.split('/').filter(Boolean);
        return paths.map((path, index)=>({
                name: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
                isLast: index === paths.length - 1
            }));
    };
    const breadcrumbs = getBreadcrumbs();
    // Fetch notifications
    const fetchNotifications = async ()=>{
        try {
            setLoading(true);
            const res = await fetch('/api/notifications');
            if (res.ok) {
                const data = await res.json();
                setNotifications(data.notifications || []);
                setUnreadCount(data.unreadCount || 0);
            }
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
        } finally{
            setLoading(false);
        }
    };
    // Mark notification as read
    const markAsRead = async (notificationId)=>{
        try {
            const res = await fetch('/api/notifications', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    notificationId
                })
            });
            if (res.ok) {
                setNotifications((prev)=>prev.map((n)=>n.id === notificationId ? {
                            ...n,
                            isRead: true
                        } : n));
                setUnreadCount((prev)=>Math.max(0, prev - 1));
            }
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    };
    // Mark all as read
    const markAllAsRead = async ()=>{
        try {
            const res = await fetch('/api/notifications', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    markAllRead: true
                })
            });
            if (res.ok) {
                setNotifications((prev)=>prev.map((n)=>({
                            ...n,
                            isRead: true
                        })));
                setUnreadCount(0);
                showToast('All notifications marked as read', 'success');
            }
        } catch (error) {
            console.error('Failed to mark all as read:', error);
        }
    };
    // Handle notification click
    const handleNotificationClick = (notification)=>{
        if (!notification.isRead) {
            markAsRead(notification.id);
        }
        if (notification.link) {
            router.push(notification.link);
        }
        setNotificationsOpen(false);
    };
    // Fetch on mount and when dropdown opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            fetchNotifications();
            // Poll for new notifications every 30 seconds
            const interval = setInterval(fetchNotifications, 30000);
            return ({
                "Header.useEffect": ()=>clearInterval(interval)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (notificationsOpen) {
                fetchNotifications();
            }
        }
    }["Header.useEffect"], [
        notificationsOpen
    ]);
    const handleNotImplemented = (feature)=>{
        showToast(`${feature} feature coming soon!`, 'info');
    };
    const handleExport = ()=>{
        showToast("Generating report... Download will start shortly.", 'success');
    };
    const getNotificationColor = (type)=>{
        switch(type){
            case 'APPROVAL':
                return 'bg-blue-500';
            case 'EXPENSE':
                return 'bg-emerald-500';
            case 'INVOICE':
                return 'bg-purple-500';
            case 'BUDGET':
                return 'bg-orange-500';
            case 'PAYMENT':
                return 'bg-cyan-500';
            default:
                return 'bg-gray-500';
        }
    };
    const formatTimeAgo = (dateString)=>{
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        if (seconds < 60) return 'Just now';
        if (seconds < 3600) return `${Math.floor(seconds / 60)} mins ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
        if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
        return date.toLocaleDateString();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 h-[72px] px-4 md:px-8 flex items-center justify-between border-b border-white/20 backdrop-blur-md transition-all duration-300 bg-white/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 md:gap-6 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onMenuClick,
                        className: "lg:hidden p-2 -ml-2 text-2xl transition-colors hover:bg-black/5 rounded-lg text-gray-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiList"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 170,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm",
                        children: breadcrumbs.map((crumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 177,
                                        columnNumber: 43
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: crumb.isLast ? "font-bold text-gray-900" : "text-gray-500",
                                        children: crumb.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 176,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 max-w-xl hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"], {
                                        className: `transition-all duration-200 ${searchFocused ? 'text-purple-600 scale-110' : 'text-gray-400'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 189,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 188,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    onFocus: ()=>setSearchFocused(true),
                                    onBlur: ()=>setSearchFocused(false),
                                    className: `w-full border rounded-full pl-11 pr-20 py-2.5 text-sm focus:outline-none transition-all duration-300 font-sans placeholder:opacity-50 ${searchFocused ? 'bg-white border-purple-500 ring-4 ring-purple-500/10' : 'bg-white/50 border-transparent hover:bg-white/80 hover:border-white/40'}`,
                                    placeholder: "Search accounts, expenses, or ..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-y-0 right-0 pr-3 flex items-center gap-2 pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] border border-gray-200 px-2 py-0.5 rounded-full font-mono flex items-center gap-1 font-bold  bg-white/50 text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCommand"], {
                                                className: "text-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 203,
                                                columnNumber: 33
                                            }, this),
                                            "K"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 202,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 201,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 ml-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowEmergencyAlert(true),
                                className: "px-3 py-2 rounded-lg border border-transparent transition-all group flex items-center gap-2 hover:border-purple-500/30 hover:bg-purple-500/5 hover:scale-105 bg-white/50",
                                title: "New Emergency",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiWallet"], {
                                        className: "text-lg transition-colors text-gray-500 group-hover:text-purple-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold transition-colors text-gray-500 group-hover:text-purple-600 hidden lg:inline",
                                        children: "Emergency"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 219,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$GlobalNewRequisitionButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalNewRequisitionButton"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/requisitions/monthly",
                                className: "px-3 py-2 rounded-lg border border-transparent transition-all group flex items-center gap-2 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:scale-105 bg-white/50",
                                title: "New Monthly Budget",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPlus"], {
                                        className: "text-lg transition-colors text-gray-500 group-hover:text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 227,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold transition-colors text-gray-500 group-hover:text-emerald-500 hidden lg:inline",
                                        children: "Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 228,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 224,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExport,
                                className: "px-3 py-2 rounded-lg border border-transparent transition-all group flex items-center gap-2 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:scale-105 active:scale-95 bg-white/50",
                                title: "Export Data",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiDownloadSimple"], {
                                    className: "text-lg transition-colors text-gray-500 group-hover:text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 235,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 231,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 213,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-8 bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden xl:flex items-center gap-1 border rounded-full px-4 py-1.5 bg-emerald-500/10 border-emerald-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full animate-pulse bg-emerald-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 244,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold  text-emerald-600",
                                children: "System Live"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 245,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 243,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNotImplemented("Help Center"),
                        className: "relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 group hover:bg-black/5 text-gray-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiQuestion"], {
                            className: "text-xl group-hover:text-cyan-600 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 252,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 249,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setNotificationsOpen(!notificationsOpen),
                                className: "relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 group hover:bg-white/80 text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBell"], {
                                        className: "text-xl group-hover:text-purple-600 transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 260,
                                        columnNumber: 25
                                    }, this),
                                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-2 right-2.5 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.6)] animate-pulse bg-purple-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 263,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 bg-purple-600 text-white text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white",
                                                children: unreadCount > 9 ? '9+' : unreadCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 264,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 257,
                                columnNumber: 21
                            }, this),
                            notificationsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 z-30",
                                        onClick: ()=>setNotificationsOpen(false)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-100 z-40 overflow-hidden animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold text-gray-900",
                                                        children: "Notifications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-purple-600 font-bold bg-purple-50 px-2 py-1 rounded-full border border-purple-100",
                                                                children: [
                                                                    unreadCount,
                                                                    " New"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 45
                                                            }, this),
                                                            notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: markAllAsRead,
                                                                className: "text-[10px] font-bold text-gray-500 hover:text-purple-600 transition-colors flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    "Mark all read"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 275,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-gray-50 max-h-[400px] overflow-y-auto",
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 text-center text-sm text-gray-500",
                                                    children: "Loading notifications..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 41
                                                }, this) : notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBell"], {
                                                            className: "text-4xl text-gray-300 mx-auto mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "No notifications yet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 41
                                                }, this) : notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>handleNotificationClick(notification),
                                                        className: `p-4 hover:bg-gray-50 transition-colors cursor-pointer group ${!notification.isRead ? 'bg-purple-50/30' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `mt-1 w-2 h-2 rounded-full shrink-0 ${getNotificationColor(notification.type)} ${!notification.isRead ? 'animate-pulse' : 'opacity-50'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: `text-sm group-hover:text-purple-600 transition-colors ${!notification.isRead ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`,
                                                                            children: notification.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                                            lineNumber: 316,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-600 mt-1 line-clamp-2",
                                                                            children: notification.message
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-gray-400 mt-2 font-medium",
                                                                            children: formatTimeAgo(notification.createdAt)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                                            lineNumber: 323,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, notification.id, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 294,
                                                columnNumber: 33
                                            }, this),
                                            notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 border-t border-gray-100 bg-gray-50/50 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/dashboard/notifications",
                                                    onClick: ()=>setNotificationsOpen(false),
                                                    className: "text-xs font-bold text-gray-600 hover:text-purple-600 transition-colors",
                                                    children: "View All Notifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 333,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 274,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 256,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNotImplemented("App Switcher"),
                        className: "relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-black/5 group text-gray-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiSquaresFour"], {
                            className: "text-xl group-hover:text-purple-600 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 352,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 349,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 211,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmationModal"], {
                isOpen: showEmergencyAlert,
                onClose: ()=>setShowEmergencyAlert(false),
                onConfirm: ()=>{
                    setShowEmergencyAlert(false);
                    router.push('/dashboard/expenses/new');
                },
                onCancel: ()=>{
                    window.location.href = '/dashboard/requisitions/new';
                },
                title: "Emergency Form Confirmation",
                description: "Note: The Emergency form is specifically for urgent requests that require immediate action. For all non-urgent business expenditures, please use the standard Requisition form.",
                confirmText: "Yes, Proceed to Emergency",
                cancelText: "Use Standard Requisition",
                variant: "info"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 356,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 165,
        columnNumber: 9
    }, this);
}
_s(Header, "gSkQVNGAKC88z71J1RiVRkrUNYY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/SetupBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SetupBanner",
    ()=>SetupBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SetupBanner() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [setupStatus, setSetupStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDismissed, setIsDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreatingAccounts, setIsCreatingAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetupBanner.useEffect": ()=>{
            // Check if user has dismissed the banner
            const dismissed = localStorage.getItem('setup-banner-dismissed');
            if (dismissed === 'true') {
                setIsDismissed(true);
                return;
            }
            // Fetch setup status
            fetch('/api/system/setup-status').then({
                "SetupBanner.useEffect": (res)=>res.json()
            }["SetupBanner.useEffect"]).then({
                "SetupBanner.useEffect": (data)=>setSetupStatus(data)
            }["SetupBanner.useEffect"]).catch({
                "SetupBanner.useEffect": (err)=>console.error('Failed to fetch setup status:', err)
            }["SetupBanner.useEffect"]);
        }
    }["SetupBanner.useEffect"], []);
    const handleDismiss = ()=>{
        localStorage.setItem('setup-banner-dismissed', 'true');
        setIsDismissed(true);
    };
    const handleAutoSetup = async ()=>{
        setIsCreatingAccounts(true);
        try {
            const res = await fetch('/api/system/auto-setup', {
                method: 'POST'
            });
            const data = await res.json();
            if (data.success) {
                // Refresh setup status
                const statusRes = await fetch('/api/system/setup-status');
                const newStatus = await statusRes.json();
                setSetupStatus(newStatus);
                // Show success message
                alert(`✅ Success! Created ${data.created} accounts. Your Chart of Accounts is now ready!`);
            }
        } catch (error) {
            console.error('Auto-setup failed:', error);
            alert('❌ Failed to create accounts. Please try manual setup.');
        } finally{
            setIsCreatingAccounts(false);
        }
    };
    // Don't show if dismissed or setup is complete
    if (isDismissed || !setupStatus || setupStatus.isSetupComplete) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -20
            },
            className: "relative",
            children: [
                !setupStatus.chartOfAccounts.isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 mb-4 rounded-lg shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiWarning"], {
                                        className: "text-orange-600 text-2xl mt-0.5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                        lineNumber: 91,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-gray-900 mb-1",
                                                children: "Chart of Accounts Setup Required"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                lineNumber: 93,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 mb-3",
                                                children: [
                                                    "Your accounting system needs a Chart of Accounts to function properly.",
                                                    setupStatus.chartOfAccounts.missingAccounts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-orange-700",
                                                        children: [
                                                            ' ',
                                                            "Missing ",
                                                            setupStatus.chartOfAccounts.missingAccounts.length,
                                                            " essential accounts."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                lineNumber: 96,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handleAutoSetup,
                                                        disabled: isCreatingAccounts,
                                                        size: "sm",
                                                        className: "bg-orange-600 hover:bg-orange-700 text-white",
                                                        children: isCreatingAccounts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: "Creating Accounts..."
                                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiRocket"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 53
                                                                }, this),
                                                                " Auto-Setup (Recommended)"
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>router.push('/dashboard/accounting/chart-of-accounts'),
                                                        size: "sm",
                                                        variant: "outline",
                                                        children: [
                                                            "Manual Setup ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiArrowRight"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 58
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                lineNumber: 104,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                        lineNumber: 92,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                lineNumber: 90,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDismiss,
                                className: "text-gray-400 hover:text-gray-600 transition-colors ml-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                    lineNumber: 133,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                lineNumber: 129,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                        lineNumber: 89,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                    lineNumber: 88,
                    columnNumber: 21
                }, this),
                setupStatus.chartOfAccounts.isComplete && setupStatus.setupProgress < 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 mb-4 rounded-lg shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                        className: "text-blue-600 text-2xl mt-0.5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                        lineNumber: 144,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-gray-900 mb-1",
                                                children: [
                                                    "Setup Progress: ",
                                                    setupStatus.setupProgress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                lineNumber: 146,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 mb-2",
                                                children: "Great start! Complete these steps to unlock full functionality:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                lineNumber: 149,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "text-sm text-gray-600 space-y-1 mb-3",
                                                children: [
                                                    !setupStatus.hasCustomers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 bg-blue-400 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 49
                                                            }, this),
                                                            "Add your first customer"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 45
                                                    }, this),
                                                    !setupStatus.hasVendors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 bg-blue-400 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 49
                                                            }, this),
                                                            "Add your first vendor"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 45
                                                    }, this),
                                                    !setupStatus.hasTransactions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 bg-blue-400 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 49
                                                            }, this),
                                                            "Record your first transaction"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                lineNumber: 152,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-gray-200 rounded-full h-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-600 h-2 rounded-full transition-all duration-500",
                                                    style: {
                                                        width: `${setupStatus.setupProgress}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                                lineNumber: 172,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                        lineNumber: 145,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                lineNumber: 143,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDismiss,
                                className: "text-gray-400 hover:text-gray-600 transition-colors ml-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                    lineNumber: 184,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                                lineNumber: 180,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                        lineNumber: 142,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
                    lineNumber: 141,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
            lineNumber: 80,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/onboarding/SetupBanner.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}
_s(SetupBanner, "/cSKhWmBZYObPFoHqFP6azNAhHk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SetupBanner;
var _c;
__turbopack_context__.k.register(_c, "SetupBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/OnboardingTutorial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnboardingTutorial",
    ()=>OnboardingTutorial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const appName = ("TURBOPACK compile-time value", "Capital Pay") || 'CapitalPay';
const tutorialSteps = [
    {
        title: `Welcome to ${appName}!`,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiRocket"],
        description: 'Your complete expense management and accounting system',
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300 text-xs leading-relaxed",
                    children: [
                        appName,
                        " helps you manage expenses, track finances, and maintain accurate accounting records—all in one place."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-800/50 border border-slate-700/50 rounded-lg p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-bold text-slate-200 mb-2 text-xs",
                            children: "What you can do:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1.5 text-xs text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                            className: "text-indigo-400 mt-0.5 flex-shrink-0 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 34,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Submit and approve expenses with multi-level workflows"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                            className: "text-indigo-400 mt-0.5 flex-shrink-0 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Manage customers, vendors, and invoices"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 39,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                            className: "text-indigo-400 mt-0.5 flex-shrink-0 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 42,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Maintain a complete General Ledger with double-entry bookkeeping"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 43,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                            className: "text-indigo-400 mt-0.5 flex-shrink-0 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 46,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Generate professional financial statements and reports"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 47,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: 'Chart of Accounts',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBookOpenText"],
        description: 'The foundation of your accounting system',
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300 text-xs leading-relaxed",
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "text-white",
                            children: "Chart of Accounts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 61,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        " is a list of all accounts used to categorize your financial transactions."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-800/50 border border-slate-700/50 rounded-lg p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-bold text-slate-200 mb-2 text-xs",
                            children: "Account Types:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/50 rounded p-2 border border-slate-700/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-blue-400 text-xs",
                                            children: "Assets"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 67,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-500",
                                            children: "What you own (Cash, AR)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 68,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/50 rounded p-2 border border-slate-700/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-blue-400 text-xs",
                                            children: "Liabilities"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-500",
                                            children: "What you owe (AP, Loans)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/50 rounded p-2 border border-slate-700/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-blue-400 text-xs",
                                            children: "Equity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-500",
                                            children: "Owner's stake"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 76,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/50 rounded p-2 border border-slate-700/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-blue-400 text-xs",
                                            children: "Revenue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-500",
                                            children: "Income from sales"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 80,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/50 rounded p-2 border border-slate-700/30 col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-blue-400 text-xs",
                                            children: "Expenses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 83,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-500",
                                            children: "Costs of doing business"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-slate-500",
                    children: [
                        "💡 ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "text-slate-400",
                            children: "Tip:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 89,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0)),
                        " We've created a standard Chart of Accounts for you. You can customize it anytime!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: 'General Ledger',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiChartPieSlice"],
        description: 'Your complete transaction history',
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300 text-xs leading-relaxed",
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "text-white",
                            children: "General Ledger"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 101,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        " records every financial transaction using double-entry bookkeeping."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-800/50 border border-slate-700/50 rounded-lg p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-bold text-slate-200 mb-2 text-xs",
                            children: "How it works:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/50 rounded p-2 border border-slate-700/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-emerald-400 mb-1 text-xs",
                                            children: "Every transaction has two sides:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 mt-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-slate-400",
                                                            children: "DEBIT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-500",
                                                            children: "Increases assets/expenses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-slate-400",
                                                            children: "CREDIT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-500",
                                                            children: "Increases liabilities/revenue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/50 rounded p-2 border border-slate-700/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-emerald-400 mb-1 text-xs",
                                            children: "Example: Expense Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-slate-400 space-y-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "DEBIT: Operating Expenses $500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "CREDIT: Cash & Bank $500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-slate-500",
                    children: [
                        "💡 ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "text-slate-400",
                            children: "Tip:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 129,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Most transactions post automatically, but you can create manual entries too!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 128,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
            lineNumber: 99,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: 'Expense Workflow',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiReceipt"],
        description: 'Submit, approve, and pay expenses',
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300 text-xs leading-relaxed",
                    children: [
                        appName,
                        " uses a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "text-white",
                            children: "maker-checker workflow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 141,
                            columnNumber: 38
                        }, ("TURBOPACK compile-time value", void 0)),
                        " to ensure proper expense control."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-800/50 border border-slate-700/50 rounded-lg p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-bold text-slate-200 mb-2 text-xs",
                            children: "Workflow Steps:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                {
                                    step: '1',
                                    label: 'Submit',
                                    desc: 'Employee submits expense with receipt'
                                },
                                {
                                    step: '2',
                                    label: 'Approve',
                                    desc: 'Manager reviews and approves'
                                },
                                {
                                    step: '3',
                                    label: 'Batch',
                                    desc: 'Finance creates payment batch'
                                },
                                {
                                    step: '4',
                                    label: 'Authorize',
                                    desc: 'Checker authorizes payment'
                                },
                                {
                                    step: '5',
                                    label: 'Disburse',
                                    desc: 'Payment sent & posted to GL'
                                }
                            ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 bg-slate-900/50 rounded p-2 border border-slate-700/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 rounded-full bg-purple-600/80 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0",
                                            children: item.step
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 154,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-purple-400 text-xs",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-500",
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 157,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 153,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
            lineNumber: 139,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: 'Customers & Vendors',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUsers"],
        description: 'Manage your business relationships',
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300 text-xs leading-relaxed",
                    children: "Track who you sell to and who you buy from."
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 174,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-800/50 border border-slate-700/50 rounded-lg p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-cyan-400 mb-1.5 text-xs",
                                    children: "Customers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 179,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-0.5 text-[10px] text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Create sales invoices"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 181,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Track payments"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 182,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Generate statements"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 183,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Monitor AR balance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 184,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 178,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-800/50 border border-slate-700/50 rounded-lg p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-orange-400 mb-1.5 text-xs",
                                    children: "Vendors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 188,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-0.5 text-[10px] text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Record invoices"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Schedule payments"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Track AP balance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 192,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Manage contracts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                            lineNumber: 193,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                    lineNumber: 189,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-slate-500",
                    children: [
                        "💡 ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "text-slate-400",
                            children: "Tip:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 198,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0)),
                        " All transactions with customers/vendors automatically update your General Ledger!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 197,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
            lineNumber: 173,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function OnboardingTutorial() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hasSeenTutorial, setHasSeenTutorial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingTutorial.useEffect": ()=>{
            // Check if user has seen the tutorial
            const seen = localStorage.getItem('onboarding-tutorial-seen');
            if (!seen) {
                setHasSeenTutorial(false);
                // Auto-open after a short delay
                setTimeout({
                    "OnboardingTutorial.useEffect": ()=>setIsOpen(true)
                }["OnboardingTutorial.useEffect"], 1000);
            }
        }
    }["OnboardingTutorial.useEffect"], []);
    const handleClose = ()=>{
        setIsOpen(false);
        localStorage.setItem('onboarding-tutorial-seen', 'true');
        setHasSeenTutorial(true);
    };
    const handleNext = ()=>{
        if (currentStep < tutorialSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleClose();
        }
    };
    const handlePrevious = ()=>{
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    const handleSkip = ()=>{
        handleClose();
    };
    const step = tutorialSteps[currentStep];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            hasSeenTutorial && !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "fixed bottom-6 right-6 bg-slate-900 text-white rounded-full p-3 shadow-xl hover:bg-slate-800 transition-all hover:scale-110 z-40 border border-slate-700",
                title: "Reopen Tutorial",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBookOpenText"], {
                    className: "text-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                    lineNumber: 255,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                lineNumber: 250,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 bg-black/70 backdrop-blur-md z-50",
                            onClick: handleSkip
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 264,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95,
                                y: 20
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                            onClick: (e)=>e.stopPropagation(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border border-slate-700/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white px-6 py-5 relative border-b border-slate-700/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSkip,
                                                className: "absolute top-4 right-4 text-slate-400 hover:text-white transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiX"], {
                                                    className: "text-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                lineNumber: 284,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold mb-0.5 text-white",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs",
                                                        children: step.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                lineNumber: 290,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                        lineNumber: 283,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 overflow-y-auto max-h-[50vh] bg-slate-900",
                                        children: step.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                        lineNumber: 297,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-slate-700/50 px-6 py-4 bg-slate-950",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-1.5 mb-4",
                                                children: tutorialSteps.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-1 rounded-full transition-all ${idx === currentStep ? 'bg-indigo-500 w-6' : idx < currentStep ? 'bg-indigo-600/50 w-1' : 'bg-slate-700 w-1'}`
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                lineNumber: 304,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handlePrevious,
                                                        disabled: currentStep === 0,
                                                        variant: "outline",
                                                        size: "sm",
                                                        className: "text-xs border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 disabled:opacity-30 disabled:bg-slate-900 disabled:text-slate-600 disabled:border-slate-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiArrowLeft"], {
                                                                className: "text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Previous"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleSkip,
                                                        className: "text-xs text-slate-500 hover:text-slate-300 transition-colors",
                                                        children: "Skip Tutorial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handleNext,
                                                        size: "sm",
                                                        className: "bg-indigo-600 hover:bg-indigo-500 text-white text-xs shadow-lg shadow-indigo-500/20",
                                                        children: currentStep === tutorialSteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                "Get Started ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 63
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                "Next ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiArrowRight"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 56
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                                lineNumber: 319,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                        lineNumber: 302,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                                lineNumber: 281,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                            lineNumber: 273,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingTutorial.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(OnboardingTutorial, "8012gcpCYpVYLyS6HspjmDkS1pE=");
_c = OnboardingTutorial;
var _c;
__turbopack_context__.k.register(_c, "OnboardingTutorial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/DashboardLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$SetupBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/SetupBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$OnboardingTutorial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/OnboardingTutorial.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardLayout({ children }) {
    _s();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-[#f8f9fa] min-h-screen",
        style: {
            fontFamily: 'var(--font-montserrat), sans-serif',
            color: 'var(--gds-text-main)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 overflow-hidden pointer-events-none -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-indigo-100/40 rounded-full blur-3xl mix-blend-multiply opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-cyan-100/40 rounded-full blur-3xl mix-blend-multiply opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-[20%] left-[20%] w-[1200px] h-[800px] bg-slate-100/60 rounded-full blur-3xl mix-blend-multiply"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                isOpen: isMobileMenuOpen,
                onClose: ()=>setIsMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden",
                onClick: ()=>setIsMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col min-h-screen lg:pl-[280px] relative transition-all duration-300 ease-in-out dash-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        onMenuClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-4 md:p-8 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$SetupBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupBanner"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$OnboardingTutorial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnboardingTutorial"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/DashboardLayout.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/DashboardLayout.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(DashboardLayout, "QerECOS75+B7gv+k3q7FrDf39mc=");
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_eff10b69._.js.map
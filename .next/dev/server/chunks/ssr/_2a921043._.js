module.exports = [
"[project]/src/app/actions/finance-studio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a6961e48ac7589e517facb851bf6c1b911c720eb":"getCustomersForStudio","40552767a146714903ec705d5e415fd0574ae876d9":"checkCreditNoteNumberUniqueness","60e3e9500bc2083b70857ee2c7e3451021cf857bcc":"getSSCAAStatementData","704062f8e5c77cad4cb2cd5f78e01856771cbf17f5":"getStatementData"},"",""] */ __turbopack_context__.s([
    "checkCreditNoteNumberUniqueness",
    ()=>checkCreditNoteNumberUniqueness,
    "getCustomersForStudio",
    ()=>getCustomersForStudio,
    "getSSCAAStatementData",
    ()=>getSSCAAStatementData,
    "getStatementData",
    ()=>getStatementData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getCustomersForStudio() {
    try {
        const customers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].customer.findMany({
            where: {
                isActive: true
            },
            select: {
                id: true,
                name: true,
                address: true,
                city: true,
                country: true,
                taxId: true,
                currency: true
            },
            orderBy: {
                name: 'asc'
            }
        });
        return customers;
    } catch (error) {
        console.error("Failed to fetch customers for studio:", error);
        return [];
    }
}
async function getStatementData(customerId, fromDate, toDate) {
    try {
        const startDate = new Date(fromDate);
        const endDate = new Date(toDate);
        const endDateInclusive = new Date(endDate);
        endDateInclusive.setHours(23, 59, 59, 999);
        // 1. Calculate Opening Balance
        const prevSales = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sale.aggregate({
            where: {
                customerId: customerId,
                issueDate: {
                    lt: startDate
                }
            },
            _sum: {
                totalAmount: true
            }
        });
        const prevPayments = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].customerPayment.aggregate({
            where: {
                customerId: customerId,
                paymentDate: {
                    lt: startDate
                }
            },
            _sum: {
                amount: true
            }
        });
        const prevCreditNotes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditNote.aggregate({
            where: {
                customerId: customerId,
                createdAt: {
                    lt: startDate
                },
                status: {
                    not: 'VOIDED'
                }
            },
            _sum: {
                amount: true
            }
        });
        const openingBalance = (prevSales._sum.totalAmount || 0) - (prevPayments._sum.amount || 0) - (prevCreditNotes._sum.amount || 0);
        // 2. Fetch Customer and Transactions
        const customer = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].customer.findUnique({
            where: {
                id: customerId
            },
            include: {
                sales: {
                    where: {
                        issueDate: {
                            gte: startDate,
                            lte: endDateInclusive
                        }
                    },
                    orderBy: {
                        issueDate: 'asc'
                    },
                    include: {
                        items: true
                    }
                },
                payments: {
                    where: {
                        paymentDate: {
                            gte: startDate,
                            lte: endDateInclusive
                        }
                    },
                    orderBy: {
                        paymentDate: 'asc'
                    },
                    include: {
                        sale: {
                            select: {
                                invoiceNumber: true
                            }
                        }
                    }
                },
                creditNotes: {
                    where: {
                        createdAt: {
                            gte: startDate,
                            lte: endDateInclusive
                        },
                        status: {
                            not: 'VOIDED'
                        }
                    },
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        });
        if (!customer) return null;
        // 3. Format Transactions
        const transactions = [
            ...customer.sales.map((s)=>({
                    id: s.id,
                    date: s.issueDate,
                    type: 'INVOICE',
                    reference: s.invoiceNumber,
                    description: 'Sales Invoice',
                    debit: s.totalAmount,
                    credit: 0
                })),
            ...customer.payments.map((p)=>({
                    id: p.id,
                    date: p.paymentDate,
                    type: 'PAYMENT',
                    reference: p.reference || 'PAYMENT',
                    description: `Payment ${p.sale?.invoiceNumber ? `for ${p.sale.invoiceNumber} ` : ''}via ${p.method.replace('_', ' ')}`,
                    debit: 0,
                    credit: p.amount
                })),
            ...customer.creditNotes.map((cn)=>({
                    id: cn.id,
                    date: cn.createdAt,
                    type: 'CREDIT_NOTE',
                    reference: cn.cnNumber,
                    description: `Credit Note issued against ${cn.invoiceRef}`,
                    debit: 0,
                    credit: cn.amount
                }))
        ].sort((a, b)=>{
            const getTimestamp = (d)=>{
                if (d instanceof Date) return d.getTime();
                if (typeof d === 'string') return new Date(d).getTime();
                return 0;
            };
            return getTimestamp(a.date) - getTimestamp(b.date);
        });
        // 4. Calculate Running Balances
        let runningBalance = openingBalance;
        const formattedTransactions = transactions.map((t, idx)=>{
            runningBalance += t.debit - t.credit;
            // Get the actual sale to extract operator/description
            let operator = customer.name;
            if (t.type === 'INVOICE') {
                const sale = customer.sales.find((s)=>s.id === t.id);
                if (sale && sale.items && sale.items.length > 0) {
                    // Use first item description as operator
                    operator = sale.items[0].description || customer.name;
                } else {
                    operator = t.description || customer.name;
                }
            } else if (t.type === 'CREDIT_NOTE') {
                operator = t.description;
            } else {
                // For payments, show payment method
                operator = t.description;
            }
            return {
                id: idx + 1,
                operator: operator,
                invoiceRef: t.reference,
                period: new Date(t.date).toLocaleDateString('en-GB'),
                debit: t.debit,
                credit: t.credit,
                balance: runningBalance
            };
        });
        const periodInvoiced = customer.sales.reduce((sum, s)=>sum + s.totalAmount, 0);
        const periodPaid = customer.payments.reduce((sum, p)=>sum + p.amount, 0);
        const periodCreditNotes = customer.creditNotes.reduce((sum, cn)=>sum + cn.amount, 0);
        const endingBalance = openingBalance + periodInvoiced - periodPaid - periodCreditNotes;
        return {
            customer: {
                name: customer.name,
                group: customer.contactPerson || 'Individual',
                country: customer.country || 'South Sudan',
                accountType: 'Standard Account'
            },
            summary: {
                openingBalance,
                totalCharges: periodInvoiced,
                totalPayments: periodPaid,
                outstandingBalance: endingBalance
            },
            transactions: formattedTransactions
        };
    } catch (error) {
        console.error("Error generating statement data:", error);
        return null;
    }
}
async function checkCreditNoteNumberUniqueness(cnNumber) {
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditNote.findUnique({
            where: {
                cnNumber
            }
        });
        return {
            exists: !!existing
        };
    } catch (error) {
        console.error("Error checking credit note uniqueness:", error);
        return {
            error: "Failed to verify uniqueness"
        };
    }
}
async function getSSCAAStatementData(fromDate, toDate) {
    try {
        const whereClause = {
            OR: [
                {
                    type: 'SOUTH_SUDAN'
                },
                {
                    type: 'SOUTH_SUDAN_STRICT'
                },
                {
                    branch: 'SSCAA'
                },
                {
                    category: {
                        contains: 'SSCAA',
                        mode: 'insensitive'
                    }
                }
            ]
        };
        if (fromDate && toDate) {
            const startDate = new Date(fromDate);
            const endDateInclusive = new Date(toDate);
            endDateInclusive.setHours(23, 59, 59, 999);
            whereClause.createdAt = {
                gte: startDate,
                lte: endDateInclusive
            };
        }
        const requisitions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].requisition.findMany({
            where: whereClause,
            orderBy: {
                createdAt: 'asc'
            }
        });
        let runningBalance = 0;
        const formattedTransactions = requisitions.map((req, idx)=>{
            runningBalance += req.amount;
            return {
                id: req.id,
                operator: req.description || req.title,
                invoiceRef: `REQ-${req.id.substring(0, 8)}`,
                period: req.createdAt.toLocaleDateString('en-GB'),
                amount: req.amount,
                balance: runningBalance
            };
        });
        return {
            customer: {
                name: 'South Sudanese Civil Aviation Authority',
                group: 'Government Agency',
                country: 'South Sudan',
                accountType: 'Treasury Beneficiary'
            },
            summary: {
                openingBalance: 0,
                totalCharges: runningBalance,
                totalPayments: runningBalance,
                outstandingBalance: runningBalance
            },
            transactions: formattedTransactions
        };
    } catch (error) {
        console.error("Error generating SSCAA statement data:", error);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCustomersForStudio,
    getStatementData,
    checkCreditNoteNumberUniqueness,
    getSSCAAStatementData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCustomersForStudio, "00a6961e48ac7589e517facb851bf6c1b911c720eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStatementData, "704062f8e5c77cad4cb2cd5f78e01856771cbf17f5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkCreditNoteNumberUniqueness, "40552767a146714903ec705d5e415fd0574ae876d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSSCAAStatementData, "60e3e9500bc2083b70857ee2c7e3451021cf857bcc", null);
}),
"[project]/.next-internal/server/app/finance-studio/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/finance-studio.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/finance-studio.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/finance-studio/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/finance-studio.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00a6961e48ac7589e517facb851bf6c1b911c720eb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomersForStudio"],
    "40552767a146714903ec705d5e415fd0574ae876d9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkCreditNoteNumberUniqueness"],
    "60e3e9500bc2083b70857ee2c7e3451021cf857bcc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSSCAAStatementData"],
    "704062f8e5c77cad4cb2cd5f78e01856771cbf17f5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStatementData"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$finance$2d$studio$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$finance$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/finance-studio/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/finance-studio.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2d$studio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/finance-studio.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_2a921043._.js.map
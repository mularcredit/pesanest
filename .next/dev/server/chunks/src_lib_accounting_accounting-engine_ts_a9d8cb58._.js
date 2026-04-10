module.exports = [
"[project]/src/lib/accounting/accounting-engine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountingEngine",
    ()=>AccountingEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
;
class AccountingEngine {
    /**
     * Posts a Journal Entry (General Ledger)
     * Enforces Double Entry Rule: Total Debits must equal Total Credits
     */ static async postJournalEntry(data) {
        // 1. Validate Double Entry
        const totalDebit = data.lines.reduce((sum, line)=>sum + line.debit, 0);
        const totalCredit = data.lines.reduce((sum, line)=>sum + line.credit, 0);
        if (Math.abs(totalDebit - totalCredit) > 0.01) {
            throw new Error(`Double Entry Mismatch: Debits (${totalDebit}) != Credits (${totalCredit})`);
        }
        // 2. Create the Entry
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].journalEntry.create({
            data: {
                date: data.date,
                description: data.description,
                reference: data.reference,
                expenseId: data.source?.expenseId,
                invoiceId: data.source?.invoiceId,
                saleId: data.source?.saleId,
                paymentId: data.source?.paymentId,
                creditNoteId: data.source?.creditNoteId,
                requisitionId: data.source?.requisitionId,
                monthlyBudgetId: data.source?.monthlyBudgetId,
                createdBy: data.userId,
                status: 'POSTED',
                lines: {
                    create: data.lines.map((line)=>({
                            accountId: line.accountId,
                            debit: line.debit,
                            credit: line.credit,
                            description: line.description || data.description
                        }))
                }
            }
        });
    }
    /**
     * AUTOMATION: Post an Expense to the Ledger
     * When an expense is PAID, it should Debit the Expense Account and Credit the Bank/Cash Account.
     */ static async postExpensePayment(expenseId, paidFromAccountId) {
        const expense = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].expense.findUnique({
            where: {
                id: expenseId
            }
        });
        if (!expense) throw new Error("Expense not found");
        const isSSCAA = expense.costCenter === 'SSCAA';
        const prefix = isSSCAA ? 'SSCAA - ' : 'Office - ';
        const fallbackCode = isSSCAA ? '6001' : '6000';
        // 1. Try to find the exact account for this cost center and category
        let expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                name: `${prefix}${expense.category}`,
                type: 'EXPENSE'
            }
        });
        // 2. Try just the category (legacy exact match)
        if (!expenseAccount) {
            expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                where: {
                    name: expense.category,
                    type: 'EXPENSE'
                }
            });
        }
        // 3. Try the cost center fallback
        if (!expenseAccount) {
            expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                where: {
                    code: fallbackCode
                }
            });
            // 4. Final fallback to 6000 if 6001 not found
            if (!expenseAccount) {
                expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                    where: {
                        code: '6000'
                    }
                });
            }
        }
        if (!expenseAccount) throw new Error("No GL Account found for this expense category");
        await this.postJournalEntry({
            date: new Date(),
            description: `Payment for Expense: ${expense.title}`,
            reference: `EXP-${expenseId.substring(0, 8)}`,
            source: {
                expenseId: expense.id
            },
            lines: [
                {
                    // DEBIT: Expense
                    accountId: expenseAccount.id,
                    debit: expense.amount,
                    credit: 0
                },
                {
                    // CREDIT: Bank / Cash
                    accountId: paidFromAccountId,
                    debit: 0,
                    credit: expense.amount
                }
            ]
        });
    }
    /**
     * Reassigns a Journal Entry (and its source) to SSCAA
     */ static async switchToSSCAA(entryId) {
        const entry = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].journalEntry.findUnique({
            where: {
                id: entryId
            },
            include: {
                lines: true
            }
        });
        if (!entry) throw new Error("Journal Entry not found");
        // 1. Find the SSCAA General Expense account
        const sscaaAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findUnique({
            where: {
                code: '6001'
            }
        });
        if (!sscaaAccount) {
            throw new Error("SSCAA - General Expenses account (6001) not found. Please run seeding script.");
        }
        // 2. Identify the expense line (Debit > 0)
        const expenseLine = entry.lines.find((line)=>Number(line.debit) > 0);
        if (!expenseLine) throw new Error("No expense (debit) line found in this journal entry");
        // 3. Update the journal line
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].journalLine.update({
            where: {
                id: expenseLine.id
            },
            data: {
                accountId: sscaaAccount.id
            }
        });
        // 4. Update the source records
        if (entry.expenseId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].expense.update({
                where: {
                    id: entry.expenseId
                },
                data: {
                    costCenter: 'SSCAA'
                }
            });
        }
        if (entry.requisitionId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].requisition.update({
                where: {
                    id: entry.requisitionId
                },
                data: {
                    branch: 'SSCAA'
                } // Fallback to branch tagging for SSCAA identification
            });
        }
        return {
            success: true
        };
    }
    /**
     * AUTOMATION: Post a Requisition Payment to the Ledger
     * DEBIT: Expense Account (Category)
     * CREDIT: Bank / Cash (1000)
     */ static async postRequisitionPayment(requisitionId, paidFromAccountId) {
        const requisition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].requisition.findUnique({
            where: {
                id: requisitionId
            }
        });
        if (!requisition) throw new Error("Requisition not found");
        let expenseAccount = null;
        // 1. Prioritize user's Custom GL Account choice
        if (requisition.accountId) {
            expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findUnique({
                where: {
                    id: requisition.accountId
                }
            });
        }
        // 2. Determine Cost Center fallback behavior if custom account is absent
        if (!expenseAccount) {
            const isSSCAA = requisition.type === 'SOUTH_SUDAN' || requisition.type === 'SOUTH_SUDAN_STRICT';
            const categoryPrefix = isSSCAA ? 'SSCAA' : 'Office';
            const fallbackCode = isSSCAA ? '6001' : '6000'; // SSCAA Operating Expenses vs Office Operating Expenses
            const exactAccountName = `${categoryPrefix} - ${requisition.category}`;
            // Try to find the exact specific account like "SSCAA - Rent"
            expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                where: {
                    name: exactAccountName,
                    type: 'EXPENSE'
                }
            });
            // If exact doesn't exist, try just the category name
            if (!expenseAccount) {
                expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                    where: {
                        name: requisition.category,
                        type: 'EXPENSE'
                    }
                });
            }
            // Try the fallback code
            if (!expenseAccount) {
                expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                    where: {
                        code: fallbackCode
                    }
                });
            }
            // Final fallback to 6000
            if (!expenseAccount) {
                expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                    where: {
                        code: '6000'
                    }
                });
            }
        }
        if (!expenseAccount) throw new Error("No GL Account found for this requisition");
        await this.postJournalEntry({
            date: new Date(),
            description: `Payment for Requisition: ${requisition.title}`,
            reference: `REQ-${requisitionId.substring(0, 8)}`,
            source: {
                requisitionId: requisition.id
            },
            lines: [
                {
                    accountId: expenseAccount.id,
                    debit: requisition.amount,
                    credit: 0
                },
                {
                    accountId: paidFromAccountId,
                    debit: 0,
                    credit: requisition.amount
                }
            ]
        });
    }
    /**
     * AUTOMATION: Post a Monthly Budget Disbursement to the Ledger
     * DEBIT: Operating Expenses (6000)
     * CREDIT: Bank / Cash (1000)
     */ static async postBudgetDisbursement(budgetId, paidFromAccountId) {
        const budget = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].monthlyBudget.findUnique({
            where: {
                id: budgetId
            }
        });
        if (!budget) throw new Error("Budget not found");
        const expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '6000'
            }
        });
        if (!expenseAccount) throw new Error("Operating Expenses (6000) Account not found");
        await this.postJournalEntry({
            date: new Date(),
            description: `Disbursement: ${budget.month}/${budget.year} Budget - ${budget.branch}`,
            reference: `BUD-${budgetId.substring(0, 8)}`,
            source: {
                monthlyBudgetId: budget.id
            },
            lines: [
                {
                    accountId: expenseAccount.id,
                    debit: budget.totalAmount,
                    credit: 0
                },
                {
                    accountId: paidFromAccountId,
                    debit: 0,
                    credit: budget.totalAmount
                }
            ]
        });
    }
    /**
     * AUTOMATION: Post a Sale (Invoice) to the Ledger
     * When a sale is FINALIZED/SENT, it should Debit Accounts Receivable and Credit Sales Revenue.
     */ static async postSaleInvoice(saleId) {
        const sale = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sale.findUnique({
            where: {
                id: saleId
            },
            include: {
                customer: true
            }
        });
        if (!sale) throw new Error("Sale not found");
        // 1. Clean up existing entries for this sale to ensure sync
        const existingEntries = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].journalEntry.findMany({
            where: {
                saleId: sale.id
            }
        });
        for (const entry of existingEntries){
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].journalLine.deleteMany({
                where: {
                    entryId: entry.id
                }
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].journalEntry.delete({
                where: {
                    id: entry.id
                }
            });
        }
        // 2. Find Accounts Receivable Account (Asset)
        const arAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '1200'
            } // Standard AR Code
        });
        // 3. Find Sales Revenue Account (Revenue)
        const revenueAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '4000'
            } // Standard Sales Revenue Code
        });
        if (!arAccount || !revenueAccount) throw new Error("Missing AR (1200) or Revenue (4000) Accounts in GL");
        await this.postJournalEntry({
            date: sale.issueDate,
            description: `Invoice #${sale.invoiceNumber} for ${sale.customer.name}`,
            reference: sale.invoiceNumber,
            source: {
                saleId: sale.id
            },
            lines: [
                {
                    // DEBIT: Accounts Receivable
                    accountId: arAccount.id,
                    debit: sale.totalAmount,
                    credit: 0
                },
                {
                    // CREDIT: Sales Revenue
                    accountId: revenueAccount.id,
                    debit: 0,
                    credit: sale.totalAmount
                }
            ]
        });
    }
    /**
     * AUTOMATION: Post a Credit Note to the Ledger
     * Credits Accounts Receivable and Debits Sales Return.
     */ static async postCreditNote(creditNoteId) {
        const creditNote = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].creditNote.findUnique({
            where: {
                id: creditNoteId
            },
            include: {
                customer: true
            }
        });
        if (!creditNote) throw new Error("Credit Note not found");
        // 1. Find Accounts Receivable Account (Asset)
        const arAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '1200'
            } // Standard AR Code
        });
        // 2. Find Sales Return Account (Revenue Contra)
        let returnsAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '4100'
            }
        });
        if (!returnsAccount) {
            // Fallback lookup
            returnsAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                where: {
                    name: {
                        contains: 'Return',
                        mode: 'insensitive'
                    }
                }
            });
        }
        if (!arAccount) throw new Error("Missing AR (1200) Account");
        if (!returnsAccount) throw new Error("Missing Sales Return Account");
        await this.postJournalEntry({
            date: creditNote.createdAt,
            description: `Credit Note #${creditNote.cnNumber} for ${creditNote.customer.name} - ${creditNote.reason}`,
            reference: creditNote.cnNumber,
            source: {
                creditNoteId: creditNote.id
            },
            lines: [
                {
                    // DEBIT: Sales Return (Reduces Revenue)
                    accountId: returnsAccount.id,
                    debit: creditNote.amount,
                    credit: 0
                },
                {
                    // CREDIT: Accounts Receivable (Reduces Customer Debt)
                    accountId: arAccount.id,
                    debit: 0,
                    credit: creditNote.amount
                }
            ]
        });
    }
    /**
     * AUTOMATION: Post Asset Purchase to Ledger
     * DEBIT: Fixed Asset Account (1500)
     * CREDIT: Bank Account (1000) - Assuming direct purchase
     */ static async postAssetPurchase(assetId) {
        const asset = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].asset.findUnique({
            where: {
                id: assetId
            }
        });
        if (!asset) throw new Error("Asset not found");
        // 1. Find Fixed Asset GL Account
        // Try to find specific account for category, else default to 1500 (Machinery & Equipment)
        let assetAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                name: asset.category,
                type: 'ASSET'
            }
        });
        if (!assetAccount) {
            assetAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
                where: {
                    code: '1500'
                }
            });
        }
        // 2. Find Bank Account (Credit)
        const bankAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '1000'
            }
        });
        if (!assetAccount || !bankAccount) {
            console.warn("Missing GL Accounts for Asset Purchase. Skipping Ledger Post.");
            return;
        }
        await this.postJournalEntry({
            date: asset.purchaseDate,
            description: `Asset Purchase: ${asset.name}`,
            reference: asset.assetTag || asset.serialNumber || `ASSET-${asset.id.substring(0, 8)}`,
            source: {},
            lines: [
                {
                    // DEBIT: Fixed Asset (Increase Asset)
                    accountId: assetAccount.id,
                    debit: asset.purchasePrice,
                    credit: 0
                },
                {
                    // CREDIT: Bank (Decrease Cash)
                    accountId: bankAccount.id,
                    debit: 0,
                    credit: asset.purchasePrice
                }
            ]
        });
    }
    /**
     * AUTOMATION: Post Depreciation Entry
     * DEBIT: Depreciation Expense (6050)
     * CREDIT: Accumulated Depreciation (1600)
     */ static async postAssetDepreciation(assetId, amount, period) {
        const asset = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].asset.findUnique({
            where: {
                id: assetId
            }
        });
        if (!asset) throw new Error("Asset not found");
        // 1. Find Depreciation Expense Account
        let expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '6050'
            }
        });
        // 2. Find Accumulated Depreciation Account (Contra Asset)
        let accumAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '1600'
            }
        });
        // Fallbacks if creating on fly
        if (!expenseAccount) {
            // Create standard depreciation expense
            expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.create({
                data: {
                    code: '6050',
                    name: 'Depreciation Expense',
                    type: 'EXPENSE'
                }
            });
        }
        if (!accumAccount) {
            // Create standard accumulated depreciation
            accumAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.create({
                data: {
                    code: '1600',
                    name: 'Accumulated Depreciation',
                    type: 'ASSET',
                    subtype: 'CONTRA'
                }
            });
        }
        await this.postJournalEntry({
            date: new Date(),
            description: `Depreciation (${period}): ${asset.name}`,
            reference: `DEP-${period}-${asset.id.substring(0, 6)}`,
            lines: [
                {
                    // DEBIT: Depreciation Expense
                    accountId: expenseAccount.id,
                    debit: amount,
                    credit: 0
                },
                {
                    // CREDIT: Accumulated Depreciation
                    accountId: accumAccount.id,
                    debit: 0,
                    credit: amount
                }
            ]
        });
    }
    /**
     * AUTOMATION: Post Vendor Invoice to Ledger (NEW!)
     * When a vendor invoice is APPROVED, record the liability
     * DEBIT: Expense Account (6000) or Asset Account
     * CREDIT: Accounts Payable (2000)
     */ static async postVendorInvoice(invoiceId) {
        const invoice = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].invoice.findUnique({
            where: {
                id: invoiceId
            },
            include: {
                vendor: true,
                items: true
            }
        });
        if (!invoice) throw new Error("Invoice not found");
        // Find Accounts Payable Account
        const apAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '2000'
            }
        });
        if (!apAccount) throw new Error("Missing Accounts Payable (2000) Account");
        // For simplicity, we'll use Operating Expenses (6000) as default
        // In a real system, you'd map invoice items to specific GL accounts
        const expenseAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '6000'
            }
        });
        if (!expenseAccount) throw new Error("Missing Operating Expenses (6000) Account");
        await this.postJournalEntry({
            date: invoice.invoiceDate,
            description: `Vendor Invoice #${invoice.invoiceNumber} - ${invoice.vendor.name}`,
            reference: invoice.invoiceNumber,
            source: {
                invoiceId: invoice.id
            },
            lines: [
                {
                    // DEBIT: Expense (Increase Expense)
                    accountId: expenseAccount.id,
                    debit: invoice.amount,
                    credit: 0,
                    description: invoice.description || undefined
                },
                {
                    // CREDIT: Accounts Payable (Increase Liability)
                    accountId: apAccount.id,
                    debit: 0,
                    credit: invoice.amount
                }
            ]
        });
    }
    /**
     * AUTOMATION: Post Vendor Payment to Ledger (NEW!)
     * When a vendor invoice is PAID, reduce the liability
     * DEBIT: Accounts Payable (2000)
     * CREDIT: Cash & Bank (1000)
     */ static async postVendorPayment(invoiceId, paymentAmount) {
        const invoice = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].invoice.findUnique({
            where: {
                id: invoiceId
            },
            include: {
                vendor: true
            }
        });
        if (!invoice) throw new Error("Invoice not found");
        // Find Accounts Payable Account
        const apAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '2000'
            }
        });
        // Find Cash Account
        const cashAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '1000'
            }
        });
        if (!apAccount || !cashAccount) {
            throw new Error("Missing AP (2000) or Cash (1000) Account");
        }
        await this.postJournalEntry({
            date: new Date(),
            description: `Payment for Invoice #${invoice.invoiceNumber} - ${invoice.vendor.name}`,
            reference: `PAY-${invoice.invoiceNumber}`,
            source: {
                invoiceId: invoice.id
            },
            lines: [
                {
                    // DEBIT: Accounts Payable (Reduce Liability)
                    accountId: apAccount.id,
                    debit: paymentAmount,
                    credit: 0
                },
                {
                    // CREDIT: Cash (Reduce Asset)
                    accountId: cashAccount.id,
                    debit: 0,
                    credit: paymentAmount
                }
            ]
        });
    }
    /**
     * AUTOMATION: Post Customer Payment to Ledger (NEW!)
     * When a customer pays an invoice, record the cash receipt
     * DEBIT: Cash & Bank (1000)
     * CREDIT: Accounts Receivable (1200)
     */ static async postCustomerPayment(paymentId) {
        const payment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].customerPayment.findUnique({
            where: {
                id: paymentId
            },
            include: {
                customer: true,
                sale: true
            }
        });
        if (!payment) throw new Error("Customer payment not found");
        // Find Cash Account
        const cashAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '1000'
            }
        });
        // Find Accounts Receivable Account
        const arAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                code: '1200'
            }
        });
        if (!cashAccount || !arAccount) {
            throw new Error("Missing Cash (1000) or AR (1200) Account");
        }
        const reference = payment.sale ? `PMT-${payment.sale.invoiceNumber}` : `PMT-${payment.id.substring(0, 8)}`;
        await this.postJournalEntry({
            date: payment.paymentDate,
            description: `Payment from ${payment.customer.name}${payment.sale ? ` for Invoice #${payment.sale.invoiceNumber}` : ''}`,
            reference,
            lines: [
                {
                    // DEBIT: Cash (Increase Asset)
                    accountId: cashAccount.id,
                    debit: payment.amount,
                    credit: 0
                },
                {
                    // CREDIT: Accounts Receivable (Reduce Asset)
                    accountId: arAccount.id,
                    debit: 0,
                    credit: payment.amount
                }
            ]
        });
    }
}
}),
];

//# sourceMappingURL=src_lib_accounting_accounting-engine_ts_a9d8cb58._.js.map
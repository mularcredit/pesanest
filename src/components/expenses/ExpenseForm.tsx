"use client";

import { useState, useEffect } from "react";
import {
    PiCheck,
    PiUploadSimple,
    PiPaperPlaneRight,
    PiWarningCircle,
    PiCheckCircle,
    PiInfo,
    PiPaperclip,
    PiArrowRight,
    PiCaretDown,
    PiMagnifyingGlass,
    PiPlus,
    PiX,
    PiArrowsClockwise
} from "react-icons/pi";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/ToastProvider";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { createExpense, updateExpense } from "@/app/dashboard/expenses/new/actions";
import { checkBudget } from "@/app/dashboard/expenses/new/budget-actions";
import { getVendors } from "@/app/dashboard/vendors/actions";
import { getExpenseAccountsAction, createExpenseAccountAction } from "@/app/dashboard/requisitions/new/multi-item-actions";
import { EXPENSE_CATEGORIES } from "@/lib/constants";
import { DatePicker } from "@/components/ui/DatePicker";
import { format, parseISO } from "date-fns";

interface ExpenseFormProps {
    mode: "quick" | "full";
    expense?: any; // Add this
    onSuccess: () => void;
    onCancel?: () => void;
}

export function ExpenseForm({ mode, expense, onSuccess, onCancel }: ExpenseFormProps) {
    const { showToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [budgetStatus, setBudgetStatus] = useState<any>(null);

    // Form State
    const [title, setTitle] = useState("");
    const [costCenter, setCostCenter] = useState("OFFICE");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [currencySearch, setCurrencySearch] = useState("");

    const CURRENCIES = [
        { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: '🇰🇪' },
        { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh', flag: '🇺🇬' },
        { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh', flag: '🇹🇿' },
        { code: 'RWF', name: 'Rwandan Franc', symbol: 'Fr', flag: '🇷🇼' },
        { code: 'ETB', name: 'Ethiopian Birr', symbol: 'Br', flag: '🇪🇹' },
        { code: 'SSP', name: 'South Sudan Pound', symbol: 'SSP', flag: '🇸🇸' },
        { code: 'SOS', name: 'Somali Shilling', symbol: 'Sh', flag: '🇸🇴' },
        { code: 'BIF', name: 'Burundian Franc', symbol: 'Fr', flag: '🇧🇮' },
        { code: 'DJF', name: 'Djiboutian Franc', symbol: 'Fr', flag: '🇩🇯' },
        { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬' },
        { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵', flag: '🇬🇭' },
        { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
        { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', flag: '🇪🇬' },
        { code: 'XOF', name: 'West African CFA', symbol: 'Fr', flag: '🌍' },
        { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
        { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
        { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
        { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪' },
        { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
        { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
        { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
        { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$', flag: '🇨🇦' },
        { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
        { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', flag: '🇨🇭' },
        { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦' },
    ];

    const selectedCurrency = CURRENCIES.find(c => c.code === currency) ?? CURRENCIES[14]; // USD fallback
    const filteredCurrencies = CURRENCIES.filter(c =>
        c.code.toLowerCase().includes(currencySearch.toLowerCase()) ||
        c.name.toLowerCase().includes(currencySearch.toLowerCase())
    );
    const getCurrencySymbol = (code: string) => CURRENCIES.find(c => c.code === code)?.symbol ?? code;
    const [category, setCategory] = useState("");
    const [merchant, setMerchant] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [description, setDescription] = useState("");
    const [fileName, setFileName] = useState("");

    // Category Dropdown State
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [categorySearch, setCategorySearch] = useState("");
    const [vendors, setVendors] = useState<{ id: string, name: string }[]>([]);
    const [isVendorOpen, setIsVendorOpen] = useState(false);
    const [vendorSearch, setVendorSearch] = useState("");

    // Custom Ledger
    const [customAccountId, setCustomAccountId] = useState("");
    const [expenseAccounts, setExpenseAccounts] = useState<any[]>([]);
    
    // Inline account creation
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [newAccountName, setNewAccountName] = useState("");
    const [newAccountCode, setNewAccountCode] = useState("");
    const [accountCreateError, setAccountCreateError] = useState("");
    const [isSavingAccount, setIsSavingAccount] = useState(false);

    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [accountSearch, setAccountSearch] = useState("");

    const filteredCategories = EXPENSE_CATEGORIES.filter(c =>
        c.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filteredVendors = vendors.filter(v =>
        v.name.toLowerCase().includes(vendorSearch.toLowerCase())
    );

    // Fetch Vendors & Accounts
    useEffect(() => {
        const fetchData = async () => {
            const result = await getVendors();
            if (result.success && result.vendors) {
                setVendors(result.vendors);
            }
            const localAccounts = await getExpenseAccountsAction();
            setExpenseAccounts(localAccounts);
        };
        fetchData();
    }, []);

    // Populate form if editing
    useEffect(() => {
        if (expense) {
            setTitle(expense.title || "");
            setAmount(expense.amount?.toString() || "");
            setCurrency(expense.currency || "USD");
            setCategory(expense.category || "");
            setMerchant(expense.merchant || "");
            if (expense.expenseDate) {
                const d = typeof expense.expenseDate === 'string' ? expense.expenseDate : expense.expenseDate.toISOString();
                setDate(d.split('T')[0]);
            }
            setDescription(expense.description || "");
            setCostCenter(expense.costCenter || "OFFICE");
            setCustomAccountId(expense.accountId || "");
        }
    }, [expense]);

    // Budget Validation Effect
    useEffect(() => {
        const validateBudget = async () => {
            if (category && amount && parseFloat(amount) > 0) {
                setIsValidating(true);
                try {
                    const result = await checkBudget(category, parseFloat(amount));
                    setBudgetStatus(result);
                } catch (error) {
                    console.error("Budget check failed", error);
                } finally {
                    setIsValidating(false);
                }
            } else {
                setBudgetStatus(null);
            }
        };

        const timer = setTimeout(validateBudget, 500);
        return () => clearTimeout(timer);
    }, [amount, category]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleCreateAccount = async () => {
        setAccountCreateError("");
        if (!newAccountName.trim() || !newAccountCode.trim()) {
            setAccountCreateError("Name and Code are required.");
            return;
        }

        setIsSavingAccount(true);
        const res = await createExpenseAccountAction({ name: newAccountName, code: newAccountCode });
        setIsSavingAccount(false);

        if (res?.error) {
            setAccountCreateError(res.error);
        } else if (res?.success && res.account) {
            setExpenseAccounts([...expenseAccounts, res.account]);
            setCustomAccountId(res.account.id);
            setIsCreatingAccount(false);
            setNewAccountName("");
            setNewAccountCode("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!amount || !category || (!title && mode === "full")) {
            showToast("Required fields are missing", "error");
            return;
        }

        if (budgetStatus && !budgetStatus.allowed) {
            showToast("Budget Exceeded", "error");
            return;
        }

        setIsSubmitting(true);
        try {
            const formData = new FormData();
            const finalTitle = title || (mode === "quick" ? `Expense: ${merchant || category}` : "");

            formData.append("title", finalTitle);
            formData.append("amount", amount);
            formData.append("currency", currency);
            formData.append("category", category);
            formData.append("expenseDate", date);
            formData.append("merchant", merchant);
            formData.append("description", description || (mode === "quick" ? "Direct entry via dashboard" : ""));
            formData.append("costCenter", costCenter);
            if (customAccountId) formData.append("accountId", customAccountId);

            if (expense?.id) {
                const result = await updateExpense(expense.id, formData);
                if (result?.errors) throw new Error(Object.values(result.errors)[0][0]);
                if (result?.message && result.message.includes("Error")) throw new Error(result.message);
                showToast("Expense updated successfully!", "success");
            } else {
                const result = await createExpense(formData);
                if (result?.errors) throw new Error(Object.values(result.errors)[0][0]);
                if (result?.message && result.message.includes("Error")) throw new Error(result.message);
                showToast("Expense created successfully!", "success");
            }
            onSuccess();
        } catch (error: any) {
            if (error.message !== "NEXT_REDIRECT") {
                showToast(error.message || "Something went wrong", "error");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full font-sans">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-300 flex flex-col shadow-sm">

                {/* 1. HEADER: Gradient */}
                <div className="h-[88px] px-6 flex items-center gap-4 bg-gradient-to-r from-green-100 to-white border-b border-gray-100 rounded-t-xl">
                    <div className="flex items-center justify-center shrink-0">
                        <img src="/online-payment.png" alt="Expense Icon" className="w-16 h-16 object-contain" />
                    </div>
                    <div>
                        <h1 className="text-base font-semibold text-gray-900">
                            Emergency
                        </h1>
                        <p className="text-xs text-gray-500 mt-1">
                            Enter the details of your expense below.
                        </p>
                    </div>
                </div>

                {/* 2. BODY: White Background with Sections */}
                <div className="bg-white p-6 lg:p-8 space-y-8">

                    {/* Section 0: Account Routing (NEW TOP SECTION) */}
                    <div>
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Account Routing</h3>
                            <button
                                type="button"
                                onClick={() => setIsCreatingAccount(true)}
                                className="text-xs font-bold text-[#29258D] hover:underline flex items-center gap-1"
                            >
                                <PiPlus className="text-[10px]" /> Create New
                            </button>
                        </div>
                        <div className="relative">
                            <div
                                onClick={() => setIsAccountOpen(!isAccountOpen)}
                                className="w-full bg-white border border-gray-200 rounded-xl min-h-[48px] px-4 py-3 cursor-pointer flex items-center justify-between transition-all hover:border-[#29258D] group shadow-sm"
                            >
                                <div className="flex flex-col">
                                    {customAccountId ? (
                                        <>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Target Ledger</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-[#29258D]">
                                                    {expenseAccounts.find(a => a.id === customAccountId)?.name}
                                                </span>
                                                <span className="px-1.5 py-0.5 bg-[#29258D]/10 text-[#29258D] font-mono text-[10px] rounded border border-[#29258D]/20">
                                                    {expenseAccounts.find(a => a.id === customAccountId)?.code}
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <span className="text-sm text-gray-400 font-medium">Select target ledger account...</span>
                                    )}
                                </div>
                                <PiCaretDown className={`text-gray-400 transition-transform duration-200 ${isAccountOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {isAccountOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[60] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <div className="p-3 border-b border-gray-50 flex items-center gap-3 bg-gray-50/50">
                                        <PiMagnifyingGlass className="text-gray-400 text-lg shrink-0" />
                                        <input
                                            type="text"
                                            autoFocus
                                            placeholder="Search ledger accounts or GL codes..."
                                            value={accountSearch}
                                            onChange={(e) => setAccountSearch(e.target.value)}
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-full bg-transparent border-none text-sm font-medium focus:ring-0 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="max-h-64 overflow-y-auto custom-scrollbar p-2">
                                        <button
                                            type="button"
                                            onClick={() => { setCustomAccountId(""); setIsAccountOpen(false); }}
                                            className={`w-full text-left px-3 py-3 rounded-xl transition-all flex flex-col gap-0.5 mb-1 ${!customAccountId ? 'bg-[#29258D] text-white' : 'hover:bg-gray-50'}`}
                                        >
                                            <span className={`text-xs font-bold ${!customAccountId ? 'text-white/80' : 'text-gray-500'}`}>DEFAULT ROUTING</span>
                                            <span className="text-[10px] opacity-70 italic">Category-based automated routing</span>
                                        </button>
                                        
                                        {expenseAccounts.filter(acc => 
                                            acc.name.toLowerCase().includes(accountSearch.toLowerCase()) || 
                                            acc.code.toLowerCase().includes(accountSearch.toLowerCase())
                                        ).map(acc => (
                                            <button
                                                key={acc.id}
                                                type="button"
                                                onClick={() => { setCustomAccountId(acc.id); setIsAccountOpen(false); }}
                                                className={`w-full text-left px-3 py-3 rounded-xl transition-all flex items-center justify-between mb-1 ${customAccountId === acc.id ? 'bg-[#29258D] text-white shadow-lg shadow-[#29258D]/20' : 'hover:bg-gray-50'}`}
                                            >
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-sm font-bold leading-tight">{acc.name}</span>
                                                    <span className={`text-[10px] font-mono ${customAccountId === acc.id ? 'text-white/70' : 'text-gray-400'}`}>GL-{acc.code}</span>
                                                </div>
                                                {customAccountId === acc.id && <PiCheckCircle className="text-lg text-white" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {isAccountOpen && <div className="fixed inset-0 z-50" onClick={() => setIsAccountOpen(false)} />}
                        </div>
                    </div>

                    {/* Section 1: Transaction Details */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Transaction details</h3>
                        <div className="space-y-6">
                            
                            {/* Title (Full Mode) or Description (Quick Mode) */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    {mode === "quick" ? "Description" : "Expense title"} <span className="text-rose-500">*</span>
                                </label>
                                <Input
                                    type="text"
                                    required={mode === "full"}
                                    value={mode === "quick" ? merchant : title}
                                    onChange={(e) => mode === "quick" ? setMerchant(e.target.value) : setTitle(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#29258D]/10 focus:border-[#29258D] transition-all shadow-none placeholder:text-gray-300"
                                    placeholder={mode === "quick" ? "E.g. Uber ride to airport" : "What is this expense for?"}
                                />
                            </div>

                            {/* Additional Notes (Full Mode) */}
                            {mode === "full" && (
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Description <span className="text-gray-400 font-normal text-[10px]">(Optional)</span></label>
                                    <Textarea
                                        rows={3}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#29258D]/10 focus:border-[#29258D] transition-all min-h-[100px] shadow-none resize-none placeholder:text-gray-300"
                                        placeholder="Add any relevant context..."
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Section 2: Financial Overview (Renamed/Moved) */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Financial overview</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Amount */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Amount <span className="text-rose-500">*</span></label>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                                            {selectedCurrency.symbol}
                                        </span>
                                        <Input
                                            type="number"
                                            required
                                            step="1"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#29258D]/10 focus:border-[#29258D] transition-all font-mono shadow-none placeholder:text-gray-300"
                                            placeholder="0"
                                        />
                                    </div>
                                    {/* ── Currency Dropdown ── */}
                                    <div className="relative w-32">
                                        <div
                                            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                                            className="w-full h-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors"
                                        >
                                            <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                                                <span className="text-base leading-none">{selectedCurrency.flag}</span>
                                                <span>{selectedCurrency.code}</span>
                                            </span>
                                            <PiCaretDown className={`text-gray-400 text-sm transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                        {isCurrencyOpen && (
                                            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-xl z-50 p-3 shadow-xl" style={{ minWidth: '240px' }}>
                                                <div className="relative mb-3">
                                                    <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                                    <input
                                                        type="text"
                                                        autoFocus
                                                        placeholder="Search currency..."
                                                        value={currencySearch}
                                                        onChange={(e) => setCurrencySearch(e.target.value)}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all shadow-none"
                                                    />
                                                </div>
                                                <div className="max-h-52 overflow-y-auto space-y-0.5 custom-scrollbar">
                                                    {filteredCurrencies.map(cur => (
                                                        <button
                                                            key={cur.code}
                                                            type="button"
                                                            onClick={() => { setCurrency(cur.code); setIsCurrencyOpen(false); setCurrencySearch(""); }}
                                                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${currency === cur.code
                                                                    ? 'bg-[#29258D]/5 border border-[#29258D]/20'
                                                                    : 'hover:bg-gray-50 border border-transparent'
                                                                }`}
                                                        >
                                                            <span className="text-xl leading-none w-7 text-center">{cur.flag}</span>
                                                            <div className="flex-1 min-w-0">
                                                                <p className={`text-sm font-bold ${currency === cur.code ? 'text-[#29258D]' : 'text-gray-900'}`}>{cur.code}</p>
                                                                <p className="text-[10px] text-gray-400 truncate">{cur.name}</p>
                                                            </div>
                                                            <span className="text-xs font-mono text-gray-400 shrink-0">{cur.symbol}</span>
                                                            {currency === cur.code && (
                                                                <div className="w-2 h-2 rounded-full bg-[#29258D] shrink-0" />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {isCurrencyOpen && <div className="fixed inset-0 z-40" onClick={() => setIsCurrencyOpen(false)} />}
                                    </div>
                                </div>
                            </div>

                            {/* Category */}
                            <div className="relative">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Category <span className="text-rose-500">*</span></label>
                                <div
                                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                    className="w-full bg-white border border-gray-200 rounded-xl min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors"
                                >
                                    <div className="flex flex-wrap gap-2">
                                        {category ? (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#29258D]/10 text-[#29258D] border border-[#29258D]/20">
                                                {category}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-gray-400">Select a category...</span>
                                        )}
                                    </div>
                                    <PiCaretDown className={`text-gray-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {/* Category Dropdown */}
                                {isCategoryOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100 shadow-xl">
                                        <div className="relative mb-3">
                                            <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                            <input
                                                type="text"
                                                autoFocus
                                                placeholder="Search categories..."
                                                value={categorySearch}
                                                onChange={(e) => setCategorySearch(e.target.value)}
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all shadow-none"
                                            />
                                        </div>
                                        <div className="max-h-48 overflow-y-auto custom-scrollbar">
                                            {filteredCategories.length > 0 ? (
                                                <div className="flex flex-wrap gap-2">
                                                    {filteredCategories.map(cat => (
                                                        <button
                                                            key={cat}
                                                            type="button"
                                                            onClick={() => {
                                                                setCategory(cat);
                                                                setIsCategoryOpen(false);
                                                                setCategorySearch("");
                                                            }}
                                                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${category === cat
                                                                ? 'bg-[#29258D]/5 border-[#29258D]/30 text-[#29258D]'
                                                                : 'bg-white border-gray-300 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                                                                }`}
                                                        >
                                                            {cat}
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="py-2 text-center">
                                                    {categorySearch.trim().length > 0 ? (
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setCategory(categorySearch.trim());
                                                                setIsCategoryOpen(false);
                                                                setCategorySearch("");
                                                            }}
                                                            className="w-full py-2 px-3 text-xs font-medium text-[#29258D] bg-[#29258D]/5 hover:bg-[#29258D]/10 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                                        >
                                                            <PiPlus className="text-sm" />
                                                            Create "{categorySearch}"
                                                        </button>
                                                    ) : (
                                                        <span className="text-gray-500 text-xs">No categories found</span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                                {isCategoryOpen && (
                                    <div className="fixed inset-0 z-40" onClick={(e) => { e.stopPropagation(); setIsCategoryOpen(false); }} />
                                )}
                            </div>
                        </div>



                        {/* Budget Widget (Moved inside Financial Overview) */}
                        {budgetStatus && (
                            <div className={`mb-6 px-4 py-3 rounded-xl flex items-center gap-3 text-xs border ${budgetStatus.allowed
                                ? budgetStatus.warning
                                    ? "bg-amber-50 border-amber-200 text-amber-800"
                                    : "bg-emerald-50 border-emerald-200 text-emerald-800"
                                : "bg-rose-50 border-rose-200 text-rose-800"
                                }`}>
                                <div className={`w-2 h-2 rounded-full shrink-0 ${budgetStatus.allowed
                                    ? budgetStatus.warning ? "bg-amber-500" : "bg-emerald-500"
                                    : "bg-rose-500"
                                    }`} />
                                <span className="font-medium text-sm">
                                    {budgetStatus.allowed
                                        ? (budgetStatus.warning ? "Budget Warning" : `Budget Safe ($${budgetStatus.remainingAfter.toFixed(0)} left)`)
                                        : "Limit Exceeded"}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Section 3: Logistics & Documentation */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Logistics & documentation</h3>

                        {/* Full Mode Logistics */}
                        {mode === "full" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Vendor */}
                                <div className="relative">
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Vendor name</label>
                                    <div
                                        onClick={() => setIsVendorOpen(!isVendorOpen)}
                                        className="w-full bg-white border border-gray-200 rounded-xl min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors"
                                    >
                                        <div className="flex flex-wrap gap-2">
                                            {merchant ? (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#29258D]/10 text-[#29258D] border border-[#29258D]/20">
                                                    {merchant}
                                                </span>
                                            ) : (
                                                <span className="text-sm text-gray-400">Select vendor...</span>
                                            )}
                                        </div>
                                        <PiCaretDown className={`text-gray-400 transition-transform ${isVendorOpen ? 'rotate-180' : ''}`} />
                                    </div>

                                    {/* Vendor Dropdown */}
                                    {isVendorOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100 shadow-xl">
                                            <div className="relative mb-3">
                                                <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                                <input
                                                    type="text"
                                                    autoFocus
                                                    placeholder="Search vendors..."
                                                    value={vendorSearch}
                                                    onChange={(e) => setVendorSearch(e.target.value)}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all shadow-none"
                                                />
                                            </div>
                                            <div className="max-h-48 overflow-y-auto custom-scrollbar">
                                                {filteredVendors.length > 0 ? (
                                                    <div className="flex flex-wrap gap-2">
                                                        {filteredVendors.map(v => (
                                                            <button
                                                                key={v.id}
                                                                type="button"
                                                                onClick={() => {
                                                                    setMerchant(v.name);
                                                                    setIsVendorOpen(false);
                                                                    setVendorSearch("");
                                                                }}
                                                                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${merchant === v.name
                                                                    ? 'bg-[#29258D]/5 border-[#29258D]/30 text-[#29258D]'
                                                                    : 'bg-white border-gray-300 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                                                                    }`}
                                                            >
                                                                {v.name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="py-2 text-center">
                                                        {vendorSearch.trim().length > 0 ? (
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setMerchant(vendorSearch.trim());
                                                                    setIsVendorOpen(false);
                                                                    setVendorSearch("");
                                                                }}
                                                                className="w-full py-2 px-3 text-xs font-medium text-[#29258D] bg-[#29258D]/5 hover:bg-[#29258D]/10 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                                            >
                                                                <PiPlus className="text-sm" />
                                                                Use "{vendorSearch}"
                                                            </button>
                                                        ) : (
                                                            <span className="text-gray-500 text-xs">No vendors found</span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {isVendorOpen && (
                                        <div className="fixed inset-0 z-40" onClick={(e) => { e.stopPropagation(); setIsVendorOpen(false); }} />
                                    )}
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Date of expense</label>
                                    <DatePicker
                                        value={date ? parseISO(date) : undefined}
                                        onChange={(d) => setDate(format(d, 'yyyy-MM-dd'))}
                                        placeholder="Select Date"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        ) : null}

                        {/* Receipt Upload */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">Receipt</label>
                            <div className="relative">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className={`w-full py-3 px-4 border rounded-xl flex items-center justify-between transition-all ${fileName
                                    ? 'bg-[#29258D]/5 border-[#29258D]/20'
                                    : 'bg-white border-gray-200 hover:border-[#29258D]'
                                    }`}>
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        {fileName ? <PiCheckCircle className="text-[#29258D] shrink-0 text-lg" /> : <PiPaperclip className="text-gray-400 shrink-0 text-lg" />}
                                        <span className={`text-sm truncate ${fileName ? 'text-[#29258D] font-medium' : 'text-gray-500 '}`}>
                                            {fileName || "Click to upload receipt"}
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-lg border border-gray-200">Browse</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inline Account Creation Overlay */}
                {isCreatingAccount && (
                    <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-200 p-6 z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] rounded-b-xl animate-in slide-in-from-bottom-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-900">Create New Ledger Account</h3>
                            <button onClick={() => setIsCreatingAccount(false)} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100">
                                <PiX className="text-lg" />
                            </button>
                        </div>
                        {accountCreateError && (
                            <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg flex items-center gap-2">
                                <PiWarningCircle className="text-base shrink-0" />
                                {accountCreateError}
                            </div>
                        )}
                        <div className="flex gap-3 mb-4">
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Account Name</label>
                                <Input
                                    type="text"
                                    placeholder="e.g. Server Hosting"
                                    value={newAccountName}
                                    onChange={(e) => setNewAccountName(e.target.value)}
                                    className="w-full text-sm font-medium"
                                />
                            </div>
                            <div className="w-1/3">
                                <label className="block text-xs font-semibold text-gray-700 mb-1">GL Code</label>
                                <Input
                                    type="text"
                                    placeholder="e.g. 6005"
                                    value={newAccountCode}
                                    onChange={(e) => setNewAccountCode(e.target.value)}
                                    className="w-full text-sm font-mono"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" size="sm" onClick={() => setIsCreatingAccount(false)} disabled={isSavingAccount}>
                                Cancel
                            </Button>
                            <Button type="button" size="sm" onClick={handleCreateAccount} disabled={isSavingAccount}>
                                {isSavingAccount ? <PiArrowsClockwise className="animate-spin text-base mr-1.5" /> : <PiCheckCircle className="text-base mr-1.5" />}
                                Save Account
                            </Button>
                        </div>
                    </div>
                )}

                {/* 3. FOOTER */}
                <div className="h-[88px] px-6 bg-white border-t border-gray-200 flex items-center justify-end gap-3 rounded-b-xl">
                    {onCancel && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2.5 rounded-md text-xs font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-none"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 rounded-md text-xs font-medium text-white bg-[#29258D] hover:bg-[#29258D]/90 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-none"
                    >
                        {isSubmitting ? "Saving..." : (expense?.id ? "Update & Submit" : (mode === "quick" ? "Save" : "Submit Claim"))}
                    </button>
                </div>
            </form>
        </div>
    );
}

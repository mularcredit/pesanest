"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
    PiCaretLeft,
    PiCheckCircle,
    PiCaretDown,
    PiMagnifyingGlass,
    PiPlus,
    PiCalendarBlank,
    PiStorefront,
    PiTrash,
    PiX,
    PiArrowsClockwise,
    PiPencil
} from "react-icons/pi";
import { DatePicker } from "@/components/ui/DatePicker";
import { 
    createRequisitionWithItems, 
    getCategoriesAction, 
    getVendorsAction,
    getUserBranchAndDepartmentAction,
    getExpenseAccountsAction,
    createExpenseAccountAction
} from "./multi-item-actions";
import Image from "next/image";

interface RequisitionItem {
    id: string;
    title: string;
    description: string;
    quantity: number;
    unitPrice: number;
    category: string;
    isRecurring?: boolean;
    frequency?: string;
    startDate?: string;
}

export default function NewRequisitionPage() {
    const { data: session } = useSession();
    const [showAccessDenied, setShowAccessDenied] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const [formMessage, setFormMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Quick vs Itemized mode
    const [formMode, setFormMode] = useState<"quick" | "itemized">("quick");
    const [quickAmount, setQuickAmount] = useState("");
    const [quickCategory, setQuickCategory] = useState("");
    const [isQuickCategoryOpen, setIsQuickCategoryOpen] = useState(false);
    const [quickCategorySearch, setQuickCategorySearch] = useState("");

    // Form fields
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [branch, setBranch] = useState("");
    const [department, setDepartment] = useState("");
    const [expectedDate, setExpectedDate] = useState<Date | undefined>(undefined);
    const [vendor, setVendor] = useState("");
    const [isSSCAEnabled, setIsSSCAEnabled] = useState(false);
    const [isStrictApproval, setIsStrictApproval] = useState(false);

    // Payment method state
    const [paymentMethod, setPaymentMethod] = useState("");
    const [paymentReference, setPaymentReference] = useState("");
    
    // Custom Ledger
    const [customAccountId, setCustomAccountId] = useState("");
    const [expenseAccounts, setExpenseAccounts] = useState<any[]>([]);
    
    // Inline account creation
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [newAccountName, setNewAccountName] = useState("");
    const [newAccountCode, setNewAccountCode] = useState("");
    const [accountCreateError, setAccountCreateError] = useState("");
    const [isSavingAccount, setIsSavingAccount] = useState(false);

    // Currency dropdown
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [currencySearch, setCurrencySearch] = useState("");

    const CURRENCIES = [
        // East Africa (prioritized)
        { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: '🇰🇪' },
        { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh', flag: '🇺🇬' },
        { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh', flag: '🇹🇿' },
        { code: 'RWF', name: 'Rwandan Franc', symbol: 'Fr', flag: '🇷🇼' },
        { code: 'ETB', name: 'Ethiopian Birr', symbol: 'Br', flag: '🇪🇹' },
        { code: 'SSP', name: 'South Sudan Pound', symbol: 'SSP', flag: '🇸🇸' },
        { code: 'SOS', name: 'Somali Shilling', symbol: 'Sh', flag: '🇸🇴' },
        { code: 'BIF', name: 'Burundian Franc', symbol: 'Fr', flag: '🇧🇮' },
        { code: 'DJF', name: 'Djiboutian Franc', symbol: 'Fr', flag: '🇩🇯' },
        // Rest of Africa
        { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬' },
        { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵', flag: '🇬🇭' },
        { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
        { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', flag: '🇪🇬' },
        { code: 'XOF', name: 'West African CFA Franc', symbol: 'Fr', flag: '🌍' },
        // Major World
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

    const getCurrencySymbol = (code: string) => {
        return CURRENCIES.find(c => c.code === code)?.symbol ?? code;
    };
    const selectedCurrency = CURRENCIES.find(c => c.code === currency) ?? CURRENCIES[14]; // USD fallback
    const filteredCurrencies = CURRENCIES.filter(c =>
        c.code.toLowerCase().includes(currencySearch.toLowerCase()) ||
        c.name.toLowerCase().includes(currencySearch.toLowerCase())
    );

    // Vendor list
    const [vendors, setVendors] = useState<any[]>([]);
    const [vendorSearch, setVendorSearch] = useState("");
    const [isVendorOpen, setIsVendorOpen] = useState(false);
    const [selectedVendorId, setSelectedVendorId] = useState("");

    // Items management
    const [items, setItems] = useState<RequisitionItem[]>([]);
    const [showItemForm, setShowItemForm] = useState(false);

    // Current item being added
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemQuantity, setItemQuantity] = useState("1");
    const [itemUnitPrice, setItemUnitPrice] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemIsRecurring, setItemIsRecurring] = useState(false);
    const [itemFrequency, setItemFrequency] = useState("MONTHLY");
    const [itemStartDate, setItemStartDate] = useState<Date | undefined>(undefined);

    // Categories
    const [allCategories, setAllCategories] = useState<string[]>([]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [categorySearch, setCategorySearch] = useState("");

    const [quickCustomCategory, setQuickCustomCategory] = useState("");
    const [itemCustomCategory, setItemCustomCategory] = useState("");

    const CATEGORY_GROUPS = [
        {
            label: "✨ Custom",
            items: ["Custom"]
        },
        {
            label: "📌 Fixed Recurring",
            items: ["Rent", "Internet & Connectivity", "Airtime & Communication", "Fuel Allocation", "Hired Bike Payments"]
        },
        {
            label: "⚙️ Operational",
            items: ["Stationery", "Office Supplies", "Meetings & Conferences", "Accommodation", "Emergency Field Expenses"]
        },
        {
            label: "💰 Petty Cash",
            items: ["Electricity", "Fuel", "Repairs", "Maintenance", "Water"]
        },
        {
            label: "📦 Procurement",
            items: ["ICT Equipment", "Furniture", "Hardware"]
        },
        {
            label: "🗂 General",
            items: allCategories.filter(c =>
                !["Rent", "Internet & Connectivity", "Airtime & Communication", "Fuel Allocation", "Hired Bike Payments",
                    "Stationery", "Office Supplies", "Meetings & Conferences", "Accommodation", "Emergency Field Expenses",
                    "Electricity", "Fuel", "Repairs", "Maintenance", "Water", "ICT Equipment", "Furniture", "Hardware"].includes(c)
            )
        }
    ];

    const filteredCategoryGroups = CATEGORY_GROUPS.map(group => ({
        ...group,
        items: group.items.filter(c => c.toLowerCase().includes(categorySearch.toLowerCase()))
    })).filter(group => group.items.length > 0);

    // flat list for backwards compat
    const filteredCategories = allCategories.filter(c =>
        c.toLowerCase().includes(categorySearch.toLowerCase())
    );

    useEffect(() => {
        loadCategories();
        loadVendors();
        loadUserDetails();
        loadAccounts();
    }, []);

    const loadAccounts = async () => {
        const accs = await getExpenseAccountsAction();
        setExpenseAccounts(accs);
    };

    const loadUserDetails = async () => {
        const details = await getUserBranchAndDepartmentAction();
        if (details.branch) setBranch(details.branch);
        if (details.department) setDepartment(details.department);
    };

    const loadVendors = async () => {
        const vens = await getVendorsAction();
        setVendors(vens);
    };

    const loadCategories = async () => {
        const categories = await getCategoriesAction();
        setAllCategories(categories);
    };

    // Auto-fill payment details when vendor changes
    useEffect(() => {
        if (!vendor || vendors.length === 0) return;
        
        // Find if this vendor exists in our loaded list
        const matchedVendor = vendors.find(v => v.name === vendor);
        
        if (matchedVendor && matchedVendor.preferredPaymentMethod) {
            setPaymentMethod(matchedVendor.preferredPaymentMethod);
            setPaymentReference(matchedVendor.bankAccount || "");
        } else {
            // Optional: clear if they type a custom vendor that isn't saved
            // setPaymentMethod("");
            // setPaymentReference("");
        }
    }, [vendor, vendors]);



    const addItem = () => {
        if (!itemTitle.trim() || !itemCategory || !itemUnitPrice || parseFloat(itemUnitPrice) <= 0) {
            setFormMessage("Please fill in all item fields");
            return;
        }

        const newItem: RequisitionItem = {
            id: Date.now().toString(),
            title: itemTitle,
            description: itemDescription,
            quantity: parseInt(itemQuantity) || 1,
            unitPrice: parseFloat(itemUnitPrice),
            category: itemCategory === "Custom" ? itemCustomCategory : itemCategory,
            ...(itemIsRecurring && {
                isRecurring: true,
                frequency: itemFrequency,
                startDate: itemStartDate?.toISOString() || new Date().toISOString(),
            })
        };

        setItems([...items, newItem]);

        // Reset item form
        setItemTitle("");
        setItemDescription("");
        setItemQuantity("1");
        setItemUnitPrice("");
        setItemCategory("");
        setItemCustomCategory("");
        setItemIsRecurring(false);
        setItemFrequency("MONTHLY");
        setItemStartDate(undefined);
        setShowItemForm(false);
        setFormMessage("");
    };

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
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
        setErrors({});
        setFormMessage("");

        if (!title.trim()) {
            setFormMessage("Requisition title is required");
            return;
        }

        if (!description.trim()) {
            setFormMessage("Justification is required");
            return;
        }

        // In quick mode, synthesize a single item from amount + category
        let resolvedItems = items;
        if (formMode === "quick") {
            const amt = parseFloat(quickAmount);
            if (!quickCategory) {
                setFormMessage("Please select a category");
                return;
            }
            if (!quickAmount || isNaN(amt) || amt <= 0) {
                setFormMessage("Please enter a valid amount");
                return;
            }
            resolvedItems = [{
                id: Date.now().toString(),
                title: title,
                description: description,
                quantity: 1,
                unitPrice: amt,
                category: quickCategory === "Custom" ? quickCustomCategory : quickCategory,
            }];
        } else if (items.length === 0) {
            setFormMessage("Please add at least one item");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("currency", currency);
        formData.append("items", JSON.stringify(resolvedItems));
        formData.append("branch", branch);
        formData.append("department", department);
        formData.append("vendor", vendor);
        formData.append("paymentMethod", paymentMethod);
        formData.append("paymentReference", paymentReference);
        if (customAccountId) formData.append("accountId", customAccountId);
        if (expectedDate) formData.append("expectedDate", expectedDate.toISOString());
        if (isSSCAEnabled) {
            formData.append("isSSCA", "true");
            if (isStrictApproval) formData.append("isStrictApproval", "true");
        }

        try {
            const result = await createRequisitionWithItems(formData);
            if (result?.errors) {
                setErrors(result.errors);
                setFormMessage("Please correct the errors below");
                setIsSubmitting(false);
            }
            if (result?.message) {
                setFormMessage(result.message);
                setIsSubmitting(false);
            }
        } catch (e) {
            console.error(e);
            setFormMessage("Something went wrong. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-24 font-sans">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-xl shadow-sm flex flex-col">
                {/* Header */}
                <div className="h-[88px] px-6 flex items-center justify-between bg-gradient-to-r from-green-100 to-white border-b border-gray-200 rounded-t-xl">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/requisitions" className="p-2 rounded-lg hover:bg-white/50 text-gray-500 hover:text-gray-900 transition-all">
                            <PiCaretLeft className="text-xl" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center shrink-0">
                                <img src="/pos-terminal.png" alt="Requisition Icon" className="w-14 h-14 object-contain" />
                            </div>
                            <div>
                                <h1 className="text-base font-semibold text-gray-900">New Requisition</h1>
                                <p className="text-xs text-gray-500 mt-1">Submit a purchase or reimbursement request</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Error Message */}
                {formMessage && (
                    <div className="bg-rose-50 border-l-4 border-rose-500 p-4 mx-6 mt-6 rounded-r-lg">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <PiCheckCircle className="h-5 w-5 text-rose-400 transform rotate-180" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-rose-700">{formMessage}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mode Toggle */}
                <div className="px-6 pt-5 pb-0">
                    <div className="inline-flex items-center bg-gray-100 rounded-xl p-1 gap-1">
                        <button
                            type="button"
                            onClick={() => setFormMode("quick")}
                            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                                formMode === "quick"
                                    ? "bg-white text-[#29258D] shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            ⚡ Quick Request
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormMode("itemized")}
                            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                                formMode === "itemized"
                                    ? "bg-white text-[#29258D] shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            📋 Itemized Request
                        </button>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-2 mb-0">
                        {formMode === "quick"
                            ? "For simple requests — just describe what you need and enter the total amount."
                            : "For procurement — add line items with quantities and unit prices."}
                    </p>
                </div>

                {/* Body */}
                <div className="bg-white p-6 lg:p-8 space-y-8">
                    {/* Section 1: Request Details */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Request details</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Requisition title <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:border-[#29258D] focus:ring-[#29258D]/10 transition-all shadow-none placeholder:text-gray-300"
                                    placeholder="What is this request for?"
                                />
                                {errors.title && (
                                    <p className="text-xs text-rose-500 mt-1.5 font-medium flex items-center gap-1 leading-none">
                                        <PiCheckCircle className="rotate-45" /> {errors.title}
                                    </p>
                                )}
                            </div>

                            {/* Special Workflow Toggle */}
                            {process.env.NEXT_PUBLIC_APP_NAME !== "Pesanest" && (
                            <div className={`border rounded-xl p-4 transition-all duration-300 ${isSSCAEnabled ? 'bg-[#29258D]/5 border-[#29258D]/20 shadow-sm' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                                <div className="flex items-start gap-4">
                                    <div className={`p-2 rounded-lg shrink-0 ${isSSCAEnabled ? 'bg-[#29258D] text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        <PiCheckCircle className="text-lg" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label htmlFor="isSSCA" className="text-sm font-semibold text-gray-900 block cursor-pointer select-none">
                                                    South Sudan civil aviation request
                                                </label>
                                                <p className="text-xs text-gray-500 mt-0.5 leading-tight">
                                                    Enable expedited workflow for Civil Aviation fund requests.
                                                </p>
                                            </div>
                                            <div className="relative inline-flex items-center cursor-pointer">
                                                <label htmlFor="isSSCA" className="cursor-pointer flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="isSSCA"
                                                        checked={isSSCAEnabled}
                                                        onChange={(e) => {
                                                            if ((session?.user as any)?.role !== 'SYSTEM_ADMIN') {
                                                                e.preventDefault();
                                                                setShowAccessDenied(true);
                                                                return;
                                                            }
                                                            setIsSSCAEnabled(e.target.checked);
                                                        }}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#29258D]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#29258D]"></div>
                                                </label>
                                            </div>
                                        </div>

                                        {isSSCAEnabled && (
                                            <div className="mt-4 pt-4 border-t border-[#29258D]/10 animate-in fade-in slide-in-from-top-2 duration-300">
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="checkbox"
                                                        id="isStrictApproval"
                                                        checked={isStrictApproval}
                                                        onChange={(e) => setIsStrictApproval(e.target.checked)}
                                                        className="h-4 w-4 text-[#29258D] focus:ring-[#29258D] border-gray-300 rounded cursor-pointer"
                                                    />
                                                    <label htmlFor="isStrictApproval" className="cursor-pointer select-none">
                                                        <span className="text-xs font-semibold text-gray-900 block">Require strict approval</span>
                                                        <span className="text-[10px] text-gray-500 block">Force Manager + Finance approval regardless of amount.</span>
                                                    </label>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            )}

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Justification <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-[#29258D] focus:ring-[#29258D]/10 transition-all min-h-[100px] shadow-none resize-none placeholder:text-gray-300"
                                    placeholder="Explain the business need and expected impact..."
                                />
                                {errors.description && (
                                    <p className="text-xs text-rose-500 mt-1.5 font-medium flex items-center gap-1 leading-none">
                                        <PiCheckCircle className="rotate-45" /> {errors.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Items / Quick Amount */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 flex-1">
                                {formMode === "quick" ? "Amount & Category" : "Items"} <span className="text-rose-500">*</span>
                            </h3>
                        </div>

                    {formMode === "quick" ? (
                        /* ── Quick mode: single amount + category ── */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Amount */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Total Amount <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                                        {getCurrencySymbol(currency)}
                                    </span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        value={quickAmount}
                                        onChange={(e) => setQuickAmount(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-[#29258D] focus:ring-[#29258D]/10 transition-all font-mono"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            {/* Currency (in quick mode) */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Currency</label>
                                <div className="relative">
                                    <div
                                        onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                                        className="w-full bg-white border border-gray-200 rounded-xl min-h-[42px] px-3 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors"
                                    >
                                        <span className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                            <span className="text-lg leading-none">{selectedCurrency.flag}</span>
                                            <span>{selectedCurrency.code}</span>
                                            <span className="text-gray-400 font-normal text-xs">{selectedCurrency.symbol}</span>
                                        </span>
                                        <PiCaretDown className={`text-gray-400 transition-transform text-sm ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                    {isCurrencyOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100" style={{ minWidth: '240px' }}>
                                            <div className="relative mb-3">
                                                <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                                <input type="text" autoFocus placeholder="Search currency..." value={currencySearch} onChange={(e) => setCurrencySearch(e.target.value)} onClick={(e) => e.stopPropagation()} className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all" />
                                            </div>
                                            <div className="max-h-52 overflow-y-auto space-y-0.5">
                                                {filteredCurrencies.map(cur => (
                                                    <button key={cur.code} type="button" onClick={() => { setCurrency(cur.code); setIsCurrencyOpen(false); setCurrencySearch(""); }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${currency === cur.code ? 'bg-[#29258D]/8 border border-[#29258D]/20' : 'hover:bg-gray-50 border border-transparent'}`}>
                                                        <span className="text-xl leading-none w-7 text-center">{cur.flag}</span>
                                                        <div className="flex-1 min-w-0">
                                                            <p className={`text-sm font-bold ${currency === cur.code ? 'text-[#29258D]' : 'text-gray-900'}`}>{cur.code}</p>
                                                            <p className="text-[10px] text-gray-400 truncate">{cur.name}</p>
                                                        </div>
                                                        <span className="text-xs font-mono text-gray-400 shrink-0">{cur.symbol}</span>
                                                        {currency === cur.code && <div className="w-2 h-2 rounded-full bg-[#29258D] shrink-0" />}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {isCurrencyOpen && <div className="fixed inset-0 z-40" onClick={() => setIsCurrencyOpen(false)} />}
                                </div>
                            </div>

                            {/* Category */}
                            <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Category <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <div
                                        onClick={() => setIsQuickCategoryOpen(!isQuickCategoryOpen)}
                                        className="w-full bg-white border border-gray-200 rounded-xl min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between transition-colors hover:border-[#29258D]"
                                    >
                                        {quickCategory ? (
                                            <span className="text-sm text-gray-900">{quickCategory}</span>
                                        ) : (
                                            <span className="text-sm text-gray-400">Select a category...</span>
                                        )}
                                        <PiCaretDown className={`text-gray-400 transition-transform ${isQuickCategoryOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                    {isQuickCategoryOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100">
                                            <div className="relative mb-3">
                                                <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                                <input type="text" autoFocus placeholder="Search categories..." value={quickCategorySearch} onChange={(e) => setQuickCategorySearch(e.target.value)} onClick={(e) => e.stopPropagation()} className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all" />
                                            </div>
                                            <div className="max-h-56 overflow-y-auto space-y-3 pr-1">
                                                {CATEGORY_GROUPS.map(group => {
                                                    const filtered = group.items.filter(c => c.toLowerCase().includes(quickCategorySearch.toLowerCase()));
                                                    if (!filtered.length) return null;
                                                    return (
                                                        <div key={group.label}>
                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 px-1">{group.label}</p>
                                                            <div className="flex flex-wrap gap-1.5">
                                                                {filtered.map(cat => (
                                                                    <button key={cat} type="button" onClick={() => { setQuickCategory(cat); setIsQuickCategoryOpen(false); setQuickCategorySearch(""); }} className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${quickCategory === cat ? 'bg-[#29258D] border-[#29258D] text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-[#29258D]/40 hover:bg-[#29258D]/5 hover:text-[#29258D]'}`}>
                                                                        {cat}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                    {isQuickCategoryOpen && <div className="fixed inset-0 z-40" onClick={() => setIsQuickCategoryOpen(false)} />}
                                </div>
                                
                                {quickCategory === "Custom" && (
                                    <div className="mt-3 animate-fade-in">
                                        <input
                                            type="text"
                                            value={quickCustomCategory}
                                            onChange={(e) => setQuickCustomCategory(e.target.value)}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                            placeholder="Enter your custom category..."
                                            autoFocus
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        /* ── Itemized mode: existing multi-item list ── */
                        <div>

                        {/* Items List */}
                        {items.length > 0 && (
                            <div className="space-y-3 mb-4">
                                {items.map((item) => (
                                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start justify-between hover:border-gray-300 transition-colors">
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h4 className="font-semibold text-sm text-gray-900">{item.title}</h4>
                                                    {item.description && (
                                                        <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setItemTitle(item.title);
                                                        setItemDescription(item.description || "");
                                                        setItemCategory(item.category);
                                                        setItemQuantity(item.quantity.toString());
                                                        setItemUnitPrice(item.unitPrice.toString());
                                                        setItemIsRecurring(item.isRecurring || false);
                                                        setItemFrequency(item.frequency || "MONTHLY");
                                                        const remaining = items.filter(i => i.id !== item.id);
                                                        setItems(remaining);
                                                        setShowItemForm(true);
                                                    }}
                                                    className="p-1.5 hover:bg-amber-50 rounded-lg transition-colors group ml-2"
                                                >
                                                    <PiPencil className="text-gray-400 group-hover:text-amber-500" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-1.5 hover:bg-rose-50 rounded-lg transition-colors group ml-1"
                                                >
                                                    <PiTrash className="text-gray-400 group-hover:text-rose-500" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs">
                                                <span className="px-2 py-1 bg-[#29258D]/10 text-[#29258D] rounded-md font-medium">
                                                    {item.category}
                                                </span>
                                                <span className="text-gray-600">
                                                    Qty: {item.quantity}
                                                </span>
                                                <span className="text-gray-600">
                                                    @ {getCurrencySymbol(currency)}{item.unitPrice.toFixed(2)}
                                                </span>
                                                {item.isRecurring && (
                                                    <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-bold tracking-wide uppercase border border-blue-100">
                                                        <PiArrowsClockwise /> {item.frequency}
                                                    </span>
                                                )}
                                                <span className="font-semibold text-gray-900 ml-auto">
                                                    {getCurrencySymbol(currency)}{(item.quantity * item.unitPrice).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Total */}
                                <div className="bg-[#29258D]/5 border border-[#29258D]/20 rounded-lg p-4 flex items-center justify-between">
                                    <span className="font-bold text-sm text-gray-900">Total Amount</span>
                                    <span className="font-bold text-lg text-[#29258D]">
                                        {getCurrencySymbol(currency)}{calculateTotal().toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Add Item Form */}
                        {showItemForm ? (
                            <div className="bg-white border border-[#29258D]/30 rounded-lg p-4 space-y-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-semibold text-sm text-gray-900">Add New Item</h4>
                                    <button
                                        type="button"
                                        onClick={() => setShowItemForm(false)}
                                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                                    >
                                        <PiX className="text-gray-500" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                            Item Title <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={itemTitle}
                                            onChange={(e) => setItemTitle(e.target.value)}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                            placeholder="e.g., Laptop Computer"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Description</label>
                                        <input
                                            type="text"
                                            value={itemDescription}
                                            onChange={(e) => setItemDescription(e.target.value)}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                            placeholder="Optional details..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                            Category <span className="text-rose-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <div
                                                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                                className="w-full bg-white border border-gray-200 rounded-lg min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between transition-colors hover:border-[#29258D]"
                                            >
                                                {itemCategory ? (
                                                    <span className="text-sm text-gray-900">{itemCategory}</span>
                                                ) : (
                                                    <span className="text-sm text-gray-400">Select category...</span>
                                                )}
                                                <PiCaretDown className={`text-gray-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                                            </div>

                                            {isCategoryOpen && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100">
                                                    <div className="relative mb-3">
                                                        <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                                        <input
                                                            type="text"
                                                            autoFocus
                                                            placeholder="Search categories..."
                                                            value={categorySearch}
                                                            onChange={(e) => setCategorySearch(e.target.value)}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                        />
                                                    </div>
                                                    <div className="max-h-56 overflow-y-auto space-y-3 pr-1">
                                                        {filteredCategoryGroups.length > 0 ? (
                                                            filteredCategoryGroups.map(group => (
                                                                <div key={group.label}>
                                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 px-1">{group.label}</p>
                                                                    <div className="flex flex-wrap gap-1.5">
                                                                        {group.items.map(cat => (
                                                                            <button
                                                                                key={cat}
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    setItemCategory(cat);
                                                                                    setIsCategoryOpen(false);
                                                                                    setCategorySearch("");
                                                                                }}
                                                                                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${itemCategory === cat
                                                                                    ? 'bg-[#29258D] border-[#29258D] text-white'
                                                                                    : 'bg-white border-gray-200 text-gray-600 hover:border-[#29258D]/40 hover:bg-[#29258D]/5 hover:text-[#29258D]'
                                                                                    }`}
                                                                            >
                                                                                {cat}
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div className="py-4 text-center text-gray-400 text-xs">
                                                                No categories found
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                            {isCategoryOpen && (
                                                <div className="fixed inset-0 z-40" onClick={() => setIsCategoryOpen(false)} />
                                            )}
                                        </div>

                                        {itemCategory === "Custom" && (
                                            <div className="mt-3 animate-fade-in">
                                                <input
                                                    type="text"
                                                    value={itemCustomCategory}
                                                    onChange={(e) => setItemCustomCategory(e.target.value)}
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                                    placeholder="Enter your custom category..."
                                                    autoFocus
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Currency</label>
                                        <div className="relative">
                                            <div
                                                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                                                className="w-full bg-white border border-gray-200 rounded-lg min-h-[42px] px-3 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors"
                                            >
                                                <span className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                                    <span className="text-lg leading-none">{selectedCurrency.flag}</span>
                                                    <span>{selectedCurrency.code}</span>
                                                    <span className="text-gray-400 font-normal text-xs">{selectedCurrency.symbol}</span>
                                                </span>
                                                <PiCaretDown className={`text-gray-400 transition-transform text-sm ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                                            </div>
                                            {isCurrencyOpen && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100" style={{ minWidth: '240px' }}>
                                                    <div className="relative mb-3">
                                                        <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                                        <input
                                                            type="text"
                                                            autoFocus
                                                            placeholder="Search currency..."
                                                            value={currencySearch}
                                                            onChange={(e) => setCurrencySearch(e.target.value)}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                        />
                                                    </div>
                                                    <div className="max-h-52 overflow-y-auto space-y-0.5">
                                                        {filteredCurrencies.map(cur => (
                                                            <button
                                                                key={cur.code}
                                                                type="button"
                                                                onClick={() => { setCurrency(cur.code); setIsCurrencyOpen(false); setCurrencySearch(""); }}
                                                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${currency === cur.code
                                                                    ? 'bg-[#29258D]/8 border border-[#29258D]/20'
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

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                            Quantity <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={itemQuantity}
                                            onChange={(e) => setItemQuantity(e.target.value)}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                            Unit Price <span className="text-rose-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                                                {getCurrencySymbol(currency)}
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                value={itemUnitPrice}
                                                onChange={(e) => setItemUnitPrice(e.target.value)}
                                                className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all font-mono"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>

                                    {/* Recurring Settings Toggle */}
                                    <div className="md:col-span-2 mt-2 pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h5 className="text-sm font-semibold text-gray-900">Make Recurring</h5>
                                                <p className="text-xs text-gray-500">Automatically generate a new requisition for this item on a schedule</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setItemIsRecurring(!itemIsRecurring)}
                                                className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29258D] focus-visible:ring-offset-2 shadow-inner ${itemIsRecurring ? 'bg-[#29258D]' : 'bg-gray-200 hover:bg-gray-300'}`}
                                            >
                                                <span className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-300 ease-in-out ${itemIsRecurring ? 'translate-x-5' : 'translate-x-0'}`} />
                                            </button>
                                        </div>

                                        {itemIsRecurring && (
                                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-top-2 duration-200">
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Frequency</label>
                                                    <select
                                                        value={itemFrequency}
                                                        onChange={(e) => setItemFrequency(e.target.value)}
                                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:border-[#29258D] focus:ring-[#29258D] transition-all"
                                                    >
                                                        <option value="DAILY">Daily</option>
                                                        <option value="WEEKLY">Weekly</option>
                                                        <option value="MONTHLY">Monthly</option>
                                                        <option value="QUARTERLY">Quarterly</option>
                                                        <option value="YEARLY">Yearly</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">First Run Date</label>
                                                    <DatePicker
                                                        value={itemStartDate}
                                                        onChange={setItemStartDate}
                                                        placeholder="When should this start?"
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={addItem}
                                        className="flex-1 px-4 py-2.5 bg-[#29258D] text-white rounded-lg font-medium text-xs hover:bg-[#29258D]/90 transition-all flex items-center justify-center gap-2"
                                    >
                                        <PiPlus className="text-sm" />
                                        Add Item
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowItemForm(false)}
                                        className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium text-xs hover:bg-gray-50 transition-all"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setShowItemForm(true)}
                                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#29258D] hover:text-[#29258D] hover:bg-[#29258D]/5 transition-all flex items-center justify-center gap-2 font-medium text-sm"
                            >
                                <PiPlus className="text-lg" />
                                Add Item
                            </button>
                        )}
                    </div>
                    )}
                    </div>

                    {/* Section 3: Logistics & Accounting */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Logistics & accounting</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="block text-xs font-medium text-gray-700">Custom Ledger Account (Optional)</label>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsCreatingAccount(true)}
                                        className="text-[#29258D] text-[10px] font-semibold hover:underline flex items-center gap-1"
                                    >
                                        <PiPlus /> Create New
                                    </button>
                                </div>
                                <select
                                    value={customAccountId}
                                    onChange={(e) => setCustomAccountId(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                >
                                    <option value="">Default (Auto-mapped by Category)</option>
                                    {expenseAccounts.map(acc => (
                                        <option key={acc.id} value={acc.id}>
                                            {acc.code} - {acc.name}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-[10px] text-gray-500 mt-1">Specify an exact GL account for this request to override default behavior.</p>
                                
                                {isCreatingAccount && (
                                    <div className="mt-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-3">
                                            <h4 className="text-xs font-bold text-gray-900">Create GL Account</h4>
                                            <button type="button" onClick={() => setIsCreatingAccount(false)}><PiX className="text-gray-400 hover:text-gray-700" /></button>
                                        </div>
                                        {accountCreateError && <p className="text-red-500 text-[10px] mb-2">{accountCreateError}</p>}
                                        <div className="grid grid-cols-2 gap-3 mb-3">
                                            <div>
                                                <label className="block text-[10px] font-medium text-gray-700 mb-1">GL Code</label>
                                                <input type="text" value={newAccountCode} onChange={e => setNewAccountCode(e.target.value)} placeholder="e.g. 6050" className="w-full text-xs px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-[#29258D]" />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-medium text-gray-700 mb-1">Account Name</label>
                                                <input type="text" value={newAccountName} onChange={e => setNewAccountName(e.target.value)} placeholder="e.g. Special Event" className="w-full text-xs px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-[#29258D]" />
                                            </div>
                                        </div>
                                        <button 
                                            type="button" 
                                            onClick={handleCreateAccount}
                                            disabled={isSavingAccount}
                                            className="w-full bg-[#29258D] text-white text-xs font-medium py-2 rounded flex justify-center items-center hover:bg-[#29258D]/90 disabled:opacity-50 transition-colors"
                                        >
                                            {isSavingAccount ? <PiArrowsClockwise className="animate-spin text-sm" /> : "Save Account"}
                                        </button>
                                    </div>
                                )}
                            </div>
                            
                            {process.env.NEXT_PUBLIC_APP_NAME === "PesaStack" && (
                                <>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Target Branch</label>
                                        <input
                                            type="text"
                                            value={branch}
                                            onChange={(e) => setBranch(e.target.value)}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                            placeholder="e.g. Headquarters"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Department</label>
                                <input
                                    type="text"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                    placeholder="e.g. IT, Operations"
                                />
                            </div>
                            </>
                            )}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Expected Delivery Date</label>
                                <DatePicker
                                    value={expectedDate}
                                    onChange={setExpectedDate}
                                    placeholder="When do you need this?"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Preferred Vendor (Optional)</label>
                                <div className="relative">
                                    <div
                                        onClick={() => setIsVendorOpen(!isVendorOpen)}
                                        className="w-full bg-white border border-gray-200 rounded-lg min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors"
                                    >
                                        {vendor ? (
                                            <span className="text-sm text-gray-900 font-medium flex items-center gap-2">
                                                <PiStorefront className="text-[#29258D]" /> {vendor}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-gray-400 flex items-center gap-2">
                                                <PiStorefront /> Select or search vendor...
                                            </span>
                                        )}
                                        <PiCaretDown className={`text-gray-400 transition-transform ${isVendorOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                    {isVendorOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100">
                                            <div className="relative mb-3">
                                                <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                                <input
                                                    type="text"
                                                    autoFocus
                                                    placeholder="Search vendors..."
                                                    value={vendorSearch}
                                                    onChange={(e) => setVendorSearch(e.target.value)}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                />
                                            </div>
                                            <div className="max-h-52 overflow-y-auto space-y-1">
                                                {vendorSearch && (
                                                    <button type="button"
                                                        onClick={() => { setVendor(vendorSearch); setIsVendorOpen(false); setVendorSearch(""); }}
                                                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-[#29258D] hover:bg-[#29258D]/5 transition-colors">
                                                        + Use &quot;{vendorSearch}&quot; as vendor
                                                    </button>
                                                )}
                                                {vendors
                                                    .filter((v: any) => v.name.toLowerCase().includes(vendorSearch.toLowerCase()))
                                                    .map((v: any) => (
                                                        <button
                                                            key={v.id}
                                                            type="button"
                                                            onClick={() => {
                                                                setVendor(v.name);
                                                                setSelectedVendorId(v.id);
                                                                setIsVendorOpen(false);
                                                                setVendorSearch("");
                                                                // Auto-populate payment details from vendor
                                                                if (v.preferredPaymentMethod) {
                                                                    setPaymentMethod(v.preferredPaymentMethod);
                                                                    setPaymentReference(v.bankAccount || "");
                                                                }
                                                            }}
                                                            className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100"
                                                        >
                                                            <p className="text-sm font-semibold text-gray-900 group-hover:text-[#29258D] transition-colors">{v.name}</p>
                                                            {v.bankName && (
                                                                <p className="text-[10px] text-gray-400 mt-0.5">{v.bankName}{v.bankAccount ? ` · Acc: ${v.bankAccount}` : ''}</p>
                                                            )}
                                                        </button>
                                                    ))}
                                                {vendors.filter((v: any) => v.name.toLowerCase().includes(vendorSearch.toLowerCase())).length === 0 && !vendorSearch && (
                                                    <p className="text-center text-xs text-gray-400 py-4">No vendors yet. Type a name to use manually.</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {isVendorOpen && <div className="fixed inset-0 z-40" onClick={() => setIsVendorOpen(false)} />}
                                </div>
                                {vendor && (
                                    <button type="button" onClick={() => { setVendor(""); setSelectedVendorId(""); }} className="text-[10px] text-rose-500 mt-1.5 hover:underline">
                                        Clear vendor
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Payment Method */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-1">Payment method</h3>
                        <p className="text-xs text-gray-400 mb-4">How should this be paid when approved? Finance will use this to prepare the right channel.</p>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                            {[
                                { value: 'MPESA_TILL', label: 'M-Pesa Till', img: '/pay/Mpesa-Logo.png' },
                                { value: 'MPESA_PAYBILL', label: 'M-Pesa Paybill', img: '/pay/Mpesa-Logo.png' },
                                { value: 'BANK_TRANSFER', label: 'Bank Transfer', img: '/pay/accepted.png' },
                                { value: 'AIRTEL_MONEY', label: 'Airtel Money', img: '/pay/Airtel-Logo.png' },
                                { value: 'CASH', label: 'Cash', img: '/pay/money-stack.png' },
                                { value: 'CHEQUE', label: 'Cheque', img: '/pay/cheque.png' },
                            ].map(opt => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => { setPaymentMethod(opt.value); setPaymentReference(""); }}
                                    className={`relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${paymentMethod === opt.value
                                        ? 'border-[#29258D] bg-[#29258D]/5 shadow-sm'
                                        : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    {paymentMethod === opt.value && (
                                        <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-[#29258D] flex items-center justify-center">
                                            <PiCheckCircle className="text-white text-[8px]" />
                                        </div>
                                    )}
                                    <div className="w-8 h-8 relative flex items-center justify-center">
                                        <Image
                                            src={opt.img}
                                            alt={opt.label}
                                            width={32}
                                            height={32}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                    <span className={`text-[10px] font-bold text-center leading-tight ${paymentMethod === opt.value ? 'text-[#29258D]' : 'text-gray-500'}`}>
                                        {opt.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {paymentMethod && paymentMethod !== 'CASH' && (
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    {paymentMethod === 'MPESA_TILL' && 'M-Pesa Till Number'}
                                    {paymentMethod === 'MPESA_PAYBILL' && 'Paybill Number & Account Number'}
                                    {paymentMethod === 'BANK_TRANSFER' && 'Bank Account Number'}
                                    {paymentMethod === 'AIRTEL_MONEY' && 'Airtel Money Phone Number'}
                                    {paymentMethod === 'CHEQUE' && 'Cheque / Reference Number'}
                                </label>
                                <input
                                    type="text"
                                    value={paymentReference}
                                    onChange={(e) => setPaymentReference(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all font-mono tracking-wide"
                                    placeholder={
                                        paymentMethod === 'MPESA_TILL' ? 'e.g. 123456' :
                                            paymentMethod === 'MPESA_PAYBILL' ? 'e.g. 247247 / account number' :
                                                paymentMethod === 'BANK_TRANSFER' ? 'e.g. 01234567890000' :
                                                    paymentMethod === 'AIRTEL_MONEY' ? 'e.g. +254 712 345 678' :
                                                        'Reference number'
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="h-[88px] px-6 bg-white border-t border-gray-200 flex items-center justify-end gap-3 rounded-b-xl">
                    <Link
                        href="/dashboard/requisitions"
                        className="px-4 py-2.5 rounded-md text-xs font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 bg-[#29258D] text-white rounded-md font-medium text-xs hover:bg-[#29258D]/90 transition-all disabled:opacity-50 flex items-center gap-2"
                    >
                        {isSubmitting ? "Submitting..." : (
                            <>
                                <PiCheckCircle className="text-sm" />
                                Submit Requisition
                            </>
                        )}
                    </button>
                </div>
            </form>

            {/* Access Denied Modal */}
            {showAccessDenied && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl shadow-xl max-w-sm w-full overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                        <div className="p-6 text-center">
                            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">😔</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Access Restricted</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Sorry, you cannot access this service at the moment. Please request an admin for access.
                            </p>
                            <button
                                onClick={() => setShowAccessDenied(false)}
                                className="w-full py-2.5 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

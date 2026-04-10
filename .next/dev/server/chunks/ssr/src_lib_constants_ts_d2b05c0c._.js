module.exports = [
"[project]/src/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    const prisma = (await __turbopack_context__.A("[project]/src/lib/prisma.ts [app-rsc] (ecmascript, async loader)")).default;
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
];

//# sourceMappingURL=src_lib_constants_ts_d2b05c0c._.js.map
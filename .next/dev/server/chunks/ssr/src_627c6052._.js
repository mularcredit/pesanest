module.exports = [
"[project]/src/components/ui/DatePicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatePicker",
    ()=>DatePicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/eachDayOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/setMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/setYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DatePicker({ value, onChange, label, placeholder = "Select date", className }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewDate, setViewDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value || new Date());
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('day');
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
                setViewMode('day'); // Reset view on close
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value) setViewDate(value);
    }, [
        value
    ]);
    const handlePrev = ()=>{
        if (viewMode === 'day') setViewDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subMonths"])(viewDate, 1));
        if (viewMode === 'year') setViewDate(new Date(viewDate.getFullYear() - 12, 0, 1));
    };
    const handleNext = ()=>{
        if (viewMode === 'day') setViewDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"])(viewDate, 1));
        if (viewMode === 'year') setViewDate(new Date(viewDate.getFullYear() + 12, 0, 1));
    };
    const handleDayClick = (day)=>{
        onChange(day);
        setIsOpen(false);
    };
    const handleMonthClick = (monthIndex)=>{
        setViewDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setMonth"])(viewDate, monthIndex));
        setViewMode('day');
    };
    const handleYearClick = (year)=>{
        setViewDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setYear"])(viewDate, year));
        setViewMode('month');
    };
    // Calendar Generation Logic
    const monthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(viewDate);
    const monthEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"])(monthStart);
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(monthStart);
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfWeek"])(monthEnd);
    const calendarDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
        start: startDate,
        end: endDate
    });
    const weekDays = [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ];
    const months = Array.from({
        length: 12
    }, (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(0, i), "MMM"));
    // Year Grid Generation
    const currentYear = viewDate.getFullYear();
    const startYear = currentYear - 5;
    const years = Array.from({
        length: 12
    }, (_, i)=>startYear + i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        ref: containerRef,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 pl-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/DatePicker.tsx",
                lineNumber: 81,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(!isOpen),
                className: `flex items-center gap-3 w-full h-[48px] px-4 bg-white border border-gray-200 rounded-[5px] cursor-pointer transition-all group select-none
                    ${isOpen ? 'ring-1 ring-[#29258D] border-[#29258D]' : 'hover:border-gray-400'}
                `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCalendar"], {
                        className: `text-lg transition-colors ${isOpen ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-500'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/DatePicker.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `font-medium ${value ? 'text-gray-900' : 'text-gray-400'} ${className?.includes('text-xs') ? 'text-xs' : 'text-sm'}`,
                        children: value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(value, "MMM dd, yyyy") : placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/DatePicker.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/DatePicker.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.15
                    },
                    className: "absolute top-full left-0 mt-2 z-50 bg-white rounded-2xl border border-gray-100 p-4 w-[300px] select-none overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handlePrev,
                                    className: "p-1 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors",
                                    title: "Previous",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretLeft"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ui/DatePicker.tsx",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                    lineNumber: 109,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setViewMode(viewMode === 'month' ? 'day' : 'month'),
                                            className: `text-sm font-bold px-2 py-1 rounded-lg transition-colors flex items-center gap-1
                                        ${viewMode === 'month' ? 'bg-gray-100 text-indigo-600' : 'text-gray-900 hover:bg-gray-50'}
                                    `,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(viewDate, "MMMM"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                                    className: `text-xs text-gray-400 transition-transform ${viewMode === 'month' ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setViewMode(viewMode === 'year' ? 'day' : 'year'),
                                            className: `text-sm font-bold px-2 py-1 rounded-lg transition-colors flex items-center gap-1
                                        ${viewMode === 'year' ? 'bg-gray-100 text-indigo-600' : 'text-gray-900 hover:bg-gray-50'}
                                    `,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(viewDate, "yyyy"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                                    className: `text-xs text-gray-400 transition-transform ${viewMode === 'year' ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                                            lineNumber: 131,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleNext,
                                    className: "p-1 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors",
                                    title: "Next",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretRight"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ui/DatePicker.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                    lineNumber: 144,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                            lineNumber: 107,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[240px]",
                            children: [
                                viewMode === 'day' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    className: "absolute inset-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-7 mb-2",
                                            children: weekDays.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-[10px] font-bold text-gray-400 uppercase",
                                                    children: day
                                                }, day, false, {
                                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                                            lineNumber: 163,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-7 gap-1",
                                            children: calendarDays.map((day, idx)=>{
                                                const isSelected = value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(day, value);
                                                const isCurrentMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameMonth"])(day, viewDate);
                                                const isTodayDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(day);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleDayClick(day),
                                                    className: `
                                                        h-8 w-8 rounded-lg flex items-center justify-center text-xs font-medium transition-all relative
                                                        ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'}
                                                        ${isSelected ? '!bg-indigo-600 !text-white' : ''}
                                                        ${isTodayDate && !isSelected ? 'text-indigo-600 font-bold bg-indigo-50' : ''}
                                                    `,
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "d"),
                                                        isTodayDate && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-1 w-1 h-1 rounded-full bg-indigo-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 49
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                                            lineNumber: 170,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                    lineNumber: 158,
                                    columnNumber: 33
                                }, this),
                                viewMode === 'month' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "grid grid-cols-3 gap-3 absolute inset-0 content-start",
                                    children: months.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleMonthClick(idx),
                                            className: `
                                                h-12 rounded-xl text-sm font-medium transition-all border
                                                ${viewDate.getMonth() === idx ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200'}
                                            `,
                                            children: month
                                        }, month, false, {
                                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                                            lineNumber: 206,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                    lineNumber: 200,
                                    columnNumber: 33
                                }, this),
                                viewMode === 'year' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "grid grid-cols-3 gap-3 absolute inset-0 content-start",
                                    children: years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleYearClick(year),
                                            className: `
                                                h-12 rounded-xl text-sm font-medium transition-all border
                                                ${viewDate.getFullYear() === year ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200'}
                                            `,
                                            children: year
                                        }, year, false, {
                                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                                            lineNumber: 229,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                                    lineNumber: 223,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                            lineNumber: 155,
                            columnNumber: 25
                        }, this),
                        viewMode === 'day' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 pt-3 border-t border-gray-100 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onChange(new Date());
                                    setIsOpen(false);
                                },
                                className: "text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline",
                                children: "Jump to Today"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/DatePicker.tsx",
                                lineNumber: 248,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/DatePicker.tsx",
                            lineNumber: 247,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/DatePicker.tsx",
                    lineNumber: 99,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/DatePicker.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/DatePicker.tsx",
        lineNumber: 80,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/dashboard/requisitions/new/data:79eef7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRequisitionWithItems",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4097090b14f3694beb8d26a31e2b39646a909d56a7":"createRequisitionWithItems"},"src/app/dashboard/requisitions/new/multi-item-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4097090b14f3694beb8d26a31e2b39646a909d56a7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createRequisitionWithItems");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXVsdGktaXRlbS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBjaGVja0VuZm9yY2VDbG9zdXJlIH0gZnJvbSBcIkAvbGliL2Nsb3N1cmUtY2hlY2tcIjtcclxuaW1wb3J0IHsgY2hlY2tFeHBlbnNlUG9saWNpZXMgfSBmcm9tIFwiQC9saWIvcG9saWN5LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyBhcHByb3ZhbFdvcmtmbG93IH0gZnJvbSBcIkAvbGliL2FwcHJvdmFsLXdvcmtmbG93XCI7XHJcblxyXG5jb25zdCBSZXF1aXNpdGlvbkl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oMywgXCJJdGVtIHRpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXHJcbiAgICB1bml0UHJpY2U6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiVW5pdCBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxyXG4gICAgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDEsIFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBpc1JlY3VycmluZzogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgIGZyZXF1ZW5jeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgc3RhcnREYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUmVxdWlzaXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgXCJUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxMCwgXCJKdXN0aWZpY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxuICAgIGN1cnJlbmN5OiB6LnN0cmluZygpLmRlZmF1bHQoXCJVU0RcIiksXHJcbiAgICBpdGVtczogei5hcnJheShSZXF1aXNpdGlvbkl0ZW1TY2hlbWEpLm1pbigxLCBcIkF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1aXNpdGlvbldpdGhJdGVtcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblxyXG4gICAgLy8gUGFyc2UgaXRlbXMgZnJvbSBmb3JtRGF0YVxyXG4gICAgY29uc3QgaXRlbXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaXRlbXNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zSnNvbik7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUmVxdWlzaXRpb25TY2hlbWEuc2FmZVBhcnNlKHtcclxuICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgIGN1cnJlbmN5OiBmb3JtRGF0YS5nZXQoXCJjdXJyZW5jeVwiKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zdXJlQ2hlY2sgPSBhd2FpdCBjaGVja0VuZm9yY2VDbG9zdXJlKHNlc3Npb24udXNlci5pZCk7XHJcbiAgICBpZiAoY2xvc3VyZUNoZWNrLmJsb2NrZWQpIHtcclxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjbG9zdXJlQ2hlY2subWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW5jeSwgaXRlbXM6IHZhbGlkYXRlZEl0ZW1zIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHZhbGlkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlKSwgMCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwcmltYXJ5IGNhdGVnb3J5IChmcm9tIGZpcnN0IGl0ZW0gb3IgbW9zdCBleHBlbnNpdmUgaXRlbSlcclxuICAgIGNvbnN0IHByaW1hcnlDYXRlZ29yeSA9IHZhbGlkYXRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgKGIucXVhbnRpdHkgKiBiLnVuaXRQcmljZSkgLSAoYS5xdWFudGl0eSAqIGEudW5pdFByaWNlKVxyXG4gICAgKVswXS5jYXRlZ29yeTtcclxuXHJcbiAgICAvLyBSdW4gUG9saWN5IENoZWNrc1xyXG4gICAgY29uc3QgcG9saWN5UmVzdWx0ID0gYXdhaXQgY2hlY2tFeHBlbnNlUG9saWNpZXMoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudDogdG90YWxBbW91bnQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICBleHBlbnNlRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwb2xpY3lSZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZXJzID0gcG9saWN5UmVzdWx0LnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5pc0Jsb2NraW5nKS5tYXAodiA9PiB2Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChibG9ja2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9saWN5IFZpb2xhdGlvbjogJHtibG9ja2Vycy5qb2luKFwiLCBcIil9YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nIHx8IFwiU1RBTkRBUkRcIjtcclxuICAgIGNvbnN0IGlzU1NDQSA9IGZvcm1EYXRhLmdldChcImlzU1NDQVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBpc1N0cmljdEFwcHJvdmFsID0gZm9ybURhdGEuZ2V0KFwiaXNTdHJpY3RBcHByb3ZhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgaWYgKGlzU1NDQSkge1xyXG4gICAgICAgIGlmICgoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJTWVNURU1fQURNSU5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQ6IE9ubHkgU3lzdGVtIEFkbWluaXN0cmF0b3JzIGNhbiBjcmVhdGUgU291dGggU3VkYW4gQ2l2aWwgQXZpYXRpb24gcmVxdWVzdHMuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZSA9IGlzU3RyaWN0QXBwcm92YWwgPyBcIlNPVVRIX1NVREFOX1NUUklDVFwiIDogXCJTT1VUSF9TVURBTlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHVzZXIgZm9yIGJyYW5jaC9yZWdpb24gaW5mb1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGJyYW5jaElkOiB0cnVlLCByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBicmFuY2hJZCA9IChmb3JtRGF0YS5nZXQoXCJicmFuY2hJZFwiKSBhcyBzdHJpbmcpIHx8IChmb3JtRGF0YS5nZXQoXCJicmFuY2hcIikgYXMgc3RyaW5nKSB8fCB1c2VyPy5icmFuY2hJZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5pZDtcclxuICAgIGNvbnN0IGRlcGFydG1lbnQgPSBmb3JtRGF0YS5nZXQoXCJkZXBhcnRtZW50XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHZlbmRvciA9IGZvcm1EYXRhLmdldChcInZlbmRvclwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleHBlY3RlZERhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJleHBlY3RlZERhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZmVyZW5jZSA9IGZvcm1EYXRhLmdldChcInBheW1lbnRSZWZlcmVuY2VcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgYWNjb3VudElkID0gZm9ybURhdGEuZ2V0KFwiYWNjb3VudElkXCIpIGFzIHN0cmluZztcclxuXHJcbiAgICBsZXQgZmluYWxEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKHZlbmRvciAmJiB2ZW5kb3IudHJpbSgpKSB7XHJcbiAgICAgICAgZmluYWxEZXNjcmlwdGlvbiArPSBgXFxuXFxuKipQcmVmZXJyZWQgVmVuZG9yOioqICR7dmVuZG9yLnRyaW0oKX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC50cmltKCkpIHtcclxuICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGBcXG5cXG4qKlBheW1lbnQgTWV0aG9kOioqICR7cGF5bWVudE1ldGhvZC50cmltKCl9YDtcclxuICAgICAgICBpZiAocGF5bWVudFJlZmVyZW5jZSAmJiBwYXltZW50UmVmZXJlbmNlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGAg4oCUIFJlZi9OdW1iZXI6ICR7cGF5bWVudFJlZmVyZW5jZS50cmltKCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwZWN0ZWREYXRlID0gZXhwZWN0ZWREYXRlU3RyID8gbmV3IERhdGUoZXhwZWN0ZWREYXRlU3RyKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgTmV4dCBSdW4gRGF0ZSBoZWxwZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRSdW4gPSAoc3RhcnREYXRlOiBEYXRlLCBmcmVxdWVuY3k6IHN0cmluZyk6IERhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRSdW4gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIHN3aXRjaCAoZnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQUlMWVwiOiBuZXh0UnVuLnNldERhdGUobmV4dFJ1bi5nZXREYXRlKCkgKyAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXRUVLTFlcIjogbmV4dFJ1bi5zZXREYXRlKG5leHRSdW4uZ2V0RGF0ZSgpICsgNyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU9OVEhMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFVQVJURVJMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDMpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIllFQVJMWVwiOiBuZXh0UnVuLnNldEZ1bGxZZWFyKG5leHRSdW4uZ2V0RnVsbFllYXIoKSArIDEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRSdW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSByZXF1aXNpdGlvbiB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCByZXF1aXNpdGlvbiA9IGF3YWl0IChwcmlzbWEucmVxdWlzaXRpb24uY3JlYXRlIGFzIGFueSkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpbmFsRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzSnVzdGlmaWNhdGlvbjogZmluYWxEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgYnJhbmNoSWQsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkRGF0ZSxcclxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCA/IHsgYWNjb3VudElkIH0gOiB7fSksXHJcbiAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHZhbGlkYXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1JlY3VycmluZyA9IGl0ZW0uaXNSZWN1cnJpbmcgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUgPyBuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnJpbmc6IGlzUmVjdXJyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNSZWN1cnJpbmcgJiYgaXRlbS5mcmVxdWVuY3kgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQXV0bzogJHtpdGVtLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogaXRlbS5mcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UnVuOiBjYWxjdWxhdGVOZXh0UnVuKHN0YXJ0RGF0ZSwgaXRlbS5mcmVxdWVuY3kpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24hLnVzZXIhLmlkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc29sdmUgcmVnaW9uSWQgZm9yIGFwcHJvdmFsIHJvdXRpbmdcclxuICAgIGNvbnN0IHVzZXJXaXRoQnJhbmNoID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udXNlci5pZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZXJSZWdpb25JZCA9IHVzZXJXaXRoQnJhbmNoPy5yZWdpb25JZCB8fCB1c2VyV2l0aEJyYW5jaD8ubGVhZEJyYW5jaD8ucmVnaW9uSWQ7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYXRlIEFwcHJvdmFsIFdvcmtmbG93XHJcbiAgICBjb25zb2xlLmxvZyhgW1JlcXVpc2l0aW9uXSBDcmVhdGluZyB3b3JrZmxvdyBmb3IgYW1vdW50OiAke3RvdGFsQW1vdW50fSwgY2F0ZWdvcnk6ICR7cHJpbWFyeUNhdGVnb3J5fWApO1xyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBhcHByb3ZhbFdvcmtmbG93LmRldGVybWluZVJvdXRlKFxyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBwcmltYXJ5Q2F0ZWdvcnksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1c2VyUmVnaW9uSWQgfHwgdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBbUmVxdWlzaXRpb25dIFJvdXRlIGRldGVybWluZWQ6ICR7cm91dGUuYXV0b0FwcHJvdmUgPyAnQXV0by1hcHByb3ZlJyA6ICdMZXZlbHM6ICcgKyByb3V0ZS5sZXZlbHMubGVuZ3RofWApO1xyXG4gICAgY29uc3QgYXBwcm92YWxzID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5jcmVhdGVSZXF1aXNpdGlvbkFwcHJvdmFscyhyZXF1aXNpdGlvbi5pZCwgcm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYFtSZXF1aXNpdGlvbl0gQ3JlYXRlZCAke2FwcHJvdmFscy5sZW5ndGh9IGFwcHJvdmFsIHJlY29yZHNgKTtcclxuXHJcbiAgICByZWRpcmVjdChcIi9kYXNoYm9hcmQvcmVxdWlzaXRpb25zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvUmVxdWlzaXRpb24ocmVxdWlzaXRpb25JZDogc3RyaW5nLCBpdGVtRGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkSXRlbSA9IFJlcXVpc2l0aW9uSXRlbVNjaGVtYS5zYWZlUGFyc2UoaXRlbURhdGEpO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkSXRlbS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRJdGVtLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3N1cmVDaGVjayA9IGF3YWl0IGNoZWNrRW5mb3JjZUNsb3N1cmUoc2Vzc2lvbi51c2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHVuaXRQcmljZSwgY2F0ZWdvcnkgfSA9IHZhbGlkYXRlZEl0ZW0uZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHVuaXRQcmljZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggcGFyZW50IHJlcXVpc2l0aW9uIHRvIGdldCB0eXBlIGFuZCBjdXJyZW5jeVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFJlcXVpc2l0aW9uID0gYXdhaXQgcHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcmVxdWlzaXRpb25JZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50UmVxdWlzaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiUmVxdWlzaXRpb24gbm90IGZvdW5kXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoIHVzZXIgcmVnaW9uXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogeyBzZWxlY3Q6IHsgcmVnaW9uSWQ6IHRydWUgfSB9IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyUmVnaW9uSWQgPSB1c2VyPy5yZWdpb25JZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5yZWdpb25JZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIEFwcHJvdmFsIFJvdXRlIGZvciB0aGlzIGl0ZW1cclxuICAgICAgICAvLyBXZSByZXVzZSB0aGUgbWFpbiB3b3JrZmxvdyBlbmdpbmUgYnV0IGFwcGx5IGl0IHRvIHRoaXMgc3BlY2lmaWMgaXRlbVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5kZXRlcm1pbmVSb3V0ZShcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmVudFJlcXVpc2l0aW9uLnR5cGUsIC8vIFBhc3MgdGhlIHBhcmVudCdzIHR5cGUgKGUuZy4gU09VVEhfU1VEQU4pXHJcbiAgICAgICAgICAgIHVzZXJSZWdpb25JZCB8fCB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaXRlbSBzdGF0dXMgYmFzZWQgb24gcm91dGVcclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGFscmVhZHkgYXBwcm92ZWQvcGFpZCwgYW5kIHRoaXMgdmFsaWQgcm91dGUgc2F5cyBhdXRvLWFwcHJvdmUgKGxpa2UgU1NDQSksIFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGFwcHJvdmUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBzdGFydHMgYXMgUEVORElORy5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdHVzID0gcm91dGUuYXV0b0FwcHJvdmUgPyAnQVBQUk9WRUQnIDogJ1BFTkRJTkcnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBpdGVtIHdpdGggaXRzIHNwZWNpZmljIHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhd2FpdCAocHJpc21hIGFzIGFueSkucmVxdWlzaXRpb25JdGVtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB1bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyZW50UmVxdWlzaXRpb24udHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgQXBwcm92YWwgUmVjb3JkcyBpZiBub3QgYXV0by1hcHByb3ZlZFxyXG4gICAgICAgIGlmICghcm91dGUuYXV0b0FwcHJvdmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiByb3V0ZS5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwcm92ZXIgb2YgbGV2ZWwuYXBwcm92ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLml0ZW1BcHByb3ZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXNpdGlvbkl0ZW1JZDogbmV3SXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVySWQ6IGFwcHJvdmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSB0b3RhbCBhbW91bnQgZm9yIHRoZSByZXF1aXNpdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIG1haW4gcmVxdWlzaXRpb24gc3RhdHVzIGRvZXMgTk9UIGNoYW5nZSBiYWNrIHRvIFBFTkRJTkcuXHJcbiAgICAgICAgLy8gVGhlIG5ldyBpdGVtIGhhcyBpdHMgb3duIGluZGVwZW5kZW50IGxpZmVjeWNsZS5cclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS5yZXF1aXNpdGlvbkl0ZW0uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsQW1vdW50ID0gYWxsSXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgaXRlbTogYW55KSA9PiBzdW0gKyBpdGVtLnRvdGFsUHJpY2UsIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmVxdWlzaXRpb24gYW1vdW50XHJcbiAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYW1vdW50OiBuZXdUb3RhbEFtb3VudCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpdGVtOiBuZXdJdGVtIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgaXRlbSB0byByZXF1aXNpdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgaXRlbVwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbGlnaWJsZVJlcXVpc2l0aW9ucygpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBTeXN0ZW0gQWRtaW4gcm9sZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IHJvbGU6IHRydWUsIGN1c3RvbVJvbGU6IHsgc2VsZWN0OiB7IGlzU3lzdGVtOiB0cnVlIH0gfSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ1NZU1RFTV9BRE1JTicgfHwgY3VycmVudFVzZXI/LmN1c3RvbVJvbGU/LmlzU3lzdGVtO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBQRU5ESU5HIG9yIEFQUFJPVkVEIHJlcXVpc2l0aW9uc1xyXG4gICAgICAgIC8vIEFkbWlucyBjYW4gc2VlIGFsbCwgdXNlcnMgc2VlIHRoZWlyIG93blxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1BBSUQnLCAnQ0xPU0VEJ10gfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1aXNpdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWlzaXRpb25zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZWxpZ2libGUgcmVxdWlzaXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hQ2xpZW50ID0gcHJpc21hIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjdXN0b21DYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hQ2xpZW50LmN1c3RvbUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IHRydWUgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNhdGVnb3J5TmFtZXMgPSBjdXN0b21DYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiBjLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHsgRVhQRU5TRV9DQVRFR09SSUVTIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9jb25zdGFudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLkVYUEVOU0VfQ0FURUdPUklFUywgLi4uY3VzdG9tQ2F0ZWdvcnlOYW1lc10pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCB7IEVYUEVOU0VfQ0FURUdPUklFUyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvY29uc3RhbnRzXCIpO1xyXG4gICAgICAgIHJldHVybiBFWFBFTlNFX0NBVEVHT1JJRVM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWZW5kb3JzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJhbmNoTWFuYWdlciA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID09PSAnVEVBTV9MRUFERVInO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJyYW5jaElkID0gdXNlcj8ubGVhZEJyYW5jaD8uaWQgfHwgdXNlcj8uYnJhbmNoSWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7IGlzQWN0aXZlOiB0cnVlIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzQnJhbmNoTWFuYWdlciAmJiBhY3RpdmVCcmFuY2hJZCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS5icmFuY2hJZCA9IGFjdGl2ZUJyYW5jaElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IGF3YWl0IHByaXNtYS52ZW5kb3IuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFua05hbWU6IHRydWUsIGJhbmtBY2NvdW50OiB0cnVlLCBlbWFpbDogdHJ1ZSwgcGhvbmU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZlbmRvcnM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZW5kb3JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJyYW5jaEFuZERlcGFydG1lbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIHsgYnJhbmNoOiBcIlwiLCBkZXBhcnRtZW50OiBcIlwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBsZWFkQnJhbmNoOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4geyBicmFuY2g6IFwiXCIsIGRlcGFydG1lbnQ6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgLy8gRm9yIEJyYW5jaCBNYW5hZ2VycyAoVEVBTV9MRUFERVIpLCB0aGVpciBicmFuY2ggaXMgc3RvcmVkIGluIGBsZWFkQnJhbmNoYCBvciBgYnJhbmNoSWRgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IHVzZXIubGVhZEJyYW5jaD8ubmFtZSB8fCB1c2VyLmJyYW5jaElkIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudCB8fCBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geyBicmFuY2g6IGJyYW5jaE5hbWUsIGRlcGFydG1lbnQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgYnJhbmNoICYgZGVwYXJ0bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGJyYW5jaDogXCJcIiwgZGVwYXJ0bWVudDogXCJcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZUFjY291bnRzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdHlwZTogJ0VYUEVOU0UnIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29kZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlIGFjY291bnRzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGVBY2NvdW50U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIGlzIHRvbyBzaG9ydFwiKSxcclxuICAgIGNvZGU6IHouc3RyaW5nKCkubWluKDIsIFwiQ29kZSBpcyByZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlZCA9IENyZWF0ZUFjY291bnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcykgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCBpbnB1dCBwcm92aWRlZFwiIH07XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjb2RlIH0gPSB2YWxpZGF0ZWQuZGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGNvZGUgfSB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGVycm9yOiBcIkFuIGFjY291bnQgd2l0aCB0aGlzIEdMIENvZGUgYWxyZWFkeSBleGlzdHMuXCIgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0VYUEVOU0UnLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhY2NvdW50OiBuZXdBY2NvdW50IH07XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYWNjb3VudDpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVVBNEJzQix1TUFBQSJ9
}),
"[project]/src/app/dashboard/requisitions/new/data:2cee84 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVendorsAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00eb32d07ce872f4d06f644c06492316c1f91587f3":"getVendorsAction"},"src/app/dashboard/requisitions/new/multi-item-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00eb32d07ce872f4d06f644c06492316c1f91587f3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getVendorsAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXVsdGktaXRlbS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBjaGVja0VuZm9yY2VDbG9zdXJlIH0gZnJvbSBcIkAvbGliL2Nsb3N1cmUtY2hlY2tcIjtcclxuaW1wb3J0IHsgY2hlY2tFeHBlbnNlUG9saWNpZXMgfSBmcm9tIFwiQC9saWIvcG9saWN5LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyBhcHByb3ZhbFdvcmtmbG93IH0gZnJvbSBcIkAvbGliL2FwcHJvdmFsLXdvcmtmbG93XCI7XHJcblxyXG5jb25zdCBSZXF1aXNpdGlvbkl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oMywgXCJJdGVtIHRpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXHJcbiAgICB1bml0UHJpY2U6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiVW5pdCBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxyXG4gICAgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDEsIFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBpc1JlY3VycmluZzogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgIGZyZXF1ZW5jeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgc3RhcnREYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUmVxdWlzaXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgXCJUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxMCwgXCJKdXN0aWZpY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxuICAgIGN1cnJlbmN5OiB6LnN0cmluZygpLmRlZmF1bHQoXCJVU0RcIiksXHJcbiAgICBpdGVtczogei5hcnJheShSZXF1aXNpdGlvbkl0ZW1TY2hlbWEpLm1pbigxLCBcIkF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1aXNpdGlvbldpdGhJdGVtcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblxyXG4gICAgLy8gUGFyc2UgaXRlbXMgZnJvbSBmb3JtRGF0YVxyXG4gICAgY29uc3QgaXRlbXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaXRlbXNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zSnNvbik7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUmVxdWlzaXRpb25TY2hlbWEuc2FmZVBhcnNlKHtcclxuICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgIGN1cnJlbmN5OiBmb3JtRGF0YS5nZXQoXCJjdXJyZW5jeVwiKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zdXJlQ2hlY2sgPSBhd2FpdCBjaGVja0VuZm9yY2VDbG9zdXJlKHNlc3Npb24udXNlci5pZCk7XHJcbiAgICBpZiAoY2xvc3VyZUNoZWNrLmJsb2NrZWQpIHtcclxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjbG9zdXJlQ2hlY2subWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW5jeSwgaXRlbXM6IHZhbGlkYXRlZEl0ZW1zIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHZhbGlkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlKSwgMCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwcmltYXJ5IGNhdGVnb3J5IChmcm9tIGZpcnN0IGl0ZW0gb3IgbW9zdCBleHBlbnNpdmUgaXRlbSlcclxuICAgIGNvbnN0IHByaW1hcnlDYXRlZ29yeSA9IHZhbGlkYXRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgKGIucXVhbnRpdHkgKiBiLnVuaXRQcmljZSkgLSAoYS5xdWFudGl0eSAqIGEudW5pdFByaWNlKVxyXG4gICAgKVswXS5jYXRlZ29yeTtcclxuXHJcbiAgICAvLyBSdW4gUG9saWN5IENoZWNrc1xyXG4gICAgY29uc3QgcG9saWN5UmVzdWx0ID0gYXdhaXQgY2hlY2tFeHBlbnNlUG9saWNpZXMoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudDogdG90YWxBbW91bnQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICBleHBlbnNlRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwb2xpY3lSZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZXJzID0gcG9saWN5UmVzdWx0LnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5pc0Jsb2NraW5nKS5tYXAodiA9PiB2Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChibG9ja2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9saWN5IFZpb2xhdGlvbjogJHtibG9ja2Vycy5qb2luKFwiLCBcIil9YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nIHx8IFwiU1RBTkRBUkRcIjtcclxuICAgIGNvbnN0IGlzU1NDQSA9IGZvcm1EYXRhLmdldChcImlzU1NDQVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBpc1N0cmljdEFwcHJvdmFsID0gZm9ybURhdGEuZ2V0KFwiaXNTdHJpY3RBcHByb3ZhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgaWYgKGlzU1NDQSkge1xyXG4gICAgICAgIGlmICgoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJTWVNURU1fQURNSU5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQ6IE9ubHkgU3lzdGVtIEFkbWluaXN0cmF0b3JzIGNhbiBjcmVhdGUgU291dGggU3VkYW4gQ2l2aWwgQXZpYXRpb24gcmVxdWVzdHMuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZSA9IGlzU3RyaWN0QXBwcm92YWwgPyBcIlNPVVRIX1NVREFOX1NUUklDVFwiIDogXCJTT1VUSF9TVURBTlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHVzZXIgZm9yIGJyYW5jaC9yZWdpb24gaW5mb1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGJyYW5jaElkOiB0cnVlLCByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBicmFuY2hJZCA9IChmb3JtRGF0YS5nZXQoXCJicmFuY2hJZFwiKSBhcyBzdHJpbmcpIHx8IChmb3JtRGF0YS5nZXQoXCJicmFuY2hcIikgYXMgc3RyaW5nKSB8fCB1c2VyPy5icmFuY2hJZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5pZDtcclxuICAgIGNvbnN0IGRlcGFydG1lbnQgPSBmb3JtRGF0YS5nZXQoXCJkZXBhcnRtZW50XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHZlbmRvciA9IGZvcm1EYXRhLmdldChcInZlbmRvclwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleHBlY3RlZERhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJleHBlY3RlZERhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZmVyZW5jZSA9IGZvcm1EYXRhLmdldChcInBheW1lbnRSZWZlcmVuY2VcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgYWNjb3VudElkID0gZm9ybURhdGEuZ2V0KFwiYWNjb3VudElkXCIpIGFzIHN0cmluZztcclxuXHJcbiAgICBsZXQgZmluYWxEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKHZlbmRvciAmJiB2ZW5kb3IudHJpbSgpKSB7XHJcbiAgICAgICAgZmluYWxEZXNjcmlwdGlvbiArPSBgXFxuXFxuKipQcmVmZXJyZWQgVmVuZG9yOioqICR7dmVuZG9yLnRyaW0oKX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC50cmltKCkpIHtcclxuICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGBcXG5cXG4qKlBheW1lbnQgTWV0aG9kOioqICR7cGF5bWVudE1ldGhvZC50cmltKCl9YDtcclxuICAgICAgICBpZiAocGF5bWVudFJlZmVyZW5jZSAmJiBwYXltZW50UmVmZXJlbmNlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGAg4oCUIFJlZi9OdW1iZXI6ICR7cGF5bWVudFJlZmVyZW5jZS50cmltKCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwZWN0ZWREYXRlID0gZXhwZWN0ZWREYXRlU3RyID8gbmV3IERhdGUoZXhwZWN0ZWREYXRlU3RyKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgTmV4dCBSdW4gRGF0ZSBoZWxwZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRSdW4gPSAoc3RhcnREYXRlOiBEYXRlLCBmcmVxdWVuY3k6IHN0cmluZyk6IERhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRSdW4gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIHN3aXRjaCAoZnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQUlMWVwiOiBuZXh0UnVuLnNldERhdGUobmV4dFJ1bi5nZXREYXRlKCkgKyAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXRUVLTFlcIjogbmV4dFJ1bi5zZXREYXRlKG5leHRSdW4uZ2V0RGF0ZSgpICsgNyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU9OVEhMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFVQVJURVJMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDMpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIllFQVJMWVwiOiBuZXh0UnVuLnNldEZ1bGxZZWFyKG5leHRSdW4uZ2V0RnVsbFllYXIoKSArIDEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRSdW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSByZXF1aXNpdGlvbiB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCByZXF1aXNpdGlvbiA9IGF3YWl0IChwcmlzbWEucmVxdWlzaXRpb24uY3JlYXRlIGFzIGFueSkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpbmFsRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzSnVzdGlmaWNhdGlvbjogZmluYWxEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgYnJhbmNoSWQsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkRGF0ZSxcclxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCA/IHsgYWNjb3VudElkIH0gOiB7fSksXHJcbiAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHZhbGlkYXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1JlY3VycmluZyA9IGl0ZW0uaXNSZWN1cnJpbmcgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUgPyBuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnJpbmc6IGlzUmVjdXJyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNSZWN1cnJpbmcgJiYgaXRlbS5mcmVxdWVuY3kgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQXV0bzogJHtpdGVtLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogaXRlbS5mcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UnVuOiBjYWxjdWxhdGVOZXh0UnVuKHN0YXJ0RGF0ZSwgaXRlbS5mcmVxdWVuY3kpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24hLnVzZXIhLmlkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc29sdmUgcmVnaW9uSWQgZm9yIGFwcHJvdmFsIHJvdXRpbmdcclxuICAgIGNvbnN0IHVzZXJXaXRoQnJhbmNoID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udXNlci5pZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZXJSZWdpb25JZCA9IHVzZXJXaXRoQnJhbmNoPy5yZWdpb25JZCB8fCB1c2VyV2l0aEJyYW5jaD8ubGVhZEJyYW5jaD8ucmVnaW9uSWQ7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYXRlIEFwcHJvdmFsIFdvcmtmbG93XHJcbiAgICBjb25zb2xlLmxvZyhgW1JlcXVpc2l0aW9uXSBDcmVhdGluZyB3b3JrZmxvdyBmb3IgYW1vdW50OiAke3RvdGFsQW1vdW50fSwgY2F0ZWdvcnk6ICR7cHJpbWFyeUNhdGVnb3J5fWApO1xyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBhcHByb3ZhbFdvcmtmbG93LmRldGVybWluZVJvdXRlKFxyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBwcmltYXJ5Q2F0ZWdvcnksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1c2VyUmVnaW9uSWQgfHwgdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBbUmVxdWlzaXRpb25dIFJvdXRlIGRldGVybWluZWQ6ICR7cm91dGUuYXV0b0FwcHJvdmUgPyAnQXV0by1hcHByb3ZlJyA6ICdMZXZlbHM6ICcgKyByb3V0ZS5sZXZlbHMubGVuZ3RofWApO1xyXG4gICAgY29uc3QgYXBwcm92YWxzID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5jcmVhdGVSZXF1aXNpdGlvbkFwcHJvdmFscyhyZXF1aXNpdGlvbi5pZCwgcm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYFtSZXF1aXNpdGlvbl0gQ3JlYXRlZCAke2FwcHJvdmFscy5sZW5ndGh9IGFwcHJvdmFsIHJlY29yZHNgKTtcclxuXHJcbiAgICByZWRpcmVjdChcIi9kYXNoYm9hcmQvcmVxdWlzaXRpb25zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvUmVxdWlzaXRpb24ocmVxdWlzaXRpb25JZDogc3RyaW5nLCBpdGVtRGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkSXRlbSA9IFJlcXVpc2l0aW9uSXRlbVNjaGVtYS5zYWZlUGFyc2UoaXRlbURhdGEpO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkSXRlbS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRJdGVtLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3N1cmVDaGVjayA9IGF3YWl0IGNoZWNrRW5mb3JjZUNsb3N1cmUoc2Vzc2lvbi51c2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHVuaXRQcmljZSwgY2F0ZWdvcnkgfSA9IHZhbGlkYXRlZEl0ZW0uZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHVuaXRQcmljZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggcGFyZW50IHJlcXVpc2l0aW9uIHRvIGdldCB0eXBlIGFuZCBjdXJyZW5jeVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFJlcXVpc2l0aW9uID0gYXdhaXQgcHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcmVxdWlzaXRpb25JZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50UmVxdWlzaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiUmVxdWlzaXRpb24gbm90IGZvdW5kXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoIHVzZXIgcmVnaW9uXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogeyBzZWxlY3Q6IHsgcmVnaW9uSWQ6IHRydWUgfSB9IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyUmVnaW9uSWQgPSB1c2VyPy5yZWdpb25JZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5yZWdpb25JZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIEFwcHJvdmFsIFJvdXRlIGZvciB0aGlzIGl0ZW1cclxuICAgICAgICAvLyBXZSByZXVzZSB0aGUgbWFpbiB3b3JrZmxvdyBlbmdpbmUgYnV0IGFwcGx5IGl0IHRvIHRoaXMgc3BlY2lmaWMgaXRlbVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5kZXRlcm1pbmVSb3V0ZShcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmVudFJlcXVpc2l0aW9uLnR5cGUsIC8vIFBhc3MgdGhlIHBhcmVudCdzIHR5cGUgKGUuZy4gU09VVEhfU1VEQU4pXHJcbiAgICAgICAgICAgIHVzZXJSZWdpb25JZCB8fCB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaXRlbSBzdGF0dXMgYmFzZWQgb24gcm91dGVcclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGFscmVhZHkgYXBwcm92ZWQvcGFpZCwgYW5kIHRoaXMgdmFsaWQgcm91dGUgc2F5cyBhdXRvLWFwcHJvdmUgKGxpa2UgU1NDQSksIFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGFwcHJvdmUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBzdGFydHMgYXMgUEVORElORy5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdHVzID0gcm91dGUuYXV0b0FwcHJvdmUgPyAnQVBQUk9WRUQnIDogJ1BFTkRJTkcnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBpdGVtIHdpdGggaXRzIHNwZWNpZmljIHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhd2FpdCAocHJpc21hIGFzIGFueSkucmVxdWlzaXRpb25JdGVtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB1bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyZW50UmVxdWlzaXRpb24udHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgQXBwcm92YWwgUmVjb3JkcyBpZiBub3QgYXV0by1hcHByb3ZlZFxyXG4gICAgICAgIGlmICghcm91dGUuYXV0b0FwcHJvdmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiByb3V0ZS5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwcm92ZXIgb2YgbGV2ZWwuYXBwcm92ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLml0ZW1BcHByb3ZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXNpdGlvbkl0ZW1JZDogbmV3SXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVySWQ6IGFwcHJvdmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSB0b3RhbCBhbW91bnQgZm9yIHRoZSByZXF1aXNpdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIG1haW4gcmVxdWlzaXRpb24gc3RhdHVzIGRvZXMgTk9UIGNoYW5nZSBiYWNrIHRvIFBFTkRJTkcuXHJcbiAgICAgICAgLy8gVGhlIG5ldyBpdGVtIGhhcyBpdHMgb3duIGluZGVwZW5kZW50IGxpZmVjeWNsZS5cclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS5yZXF1aXNpdGlvbkl0ZW0uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsQW1vdW50ID0gYWxsSXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgaXRlbTogYW55KSA9PiBzdW0gKyBpdGVtLnRvdGFsUHJpY2UsIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmVxdWlzaXRpb24gYW1vdW50XHJcbiAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYW1vdW50OiBuZXdUb3RhbEFtb3VudCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpdGVtOiBuZXdJdGVtIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgaXRlbSB0byByZXF1aXNpdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgaXRlbVwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbGlnaWJsZVJlcXVpc2l0aW9ucygpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBTeXN0ZW0gQWRtaW4gcm9sZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IHJvbGU6IHRydWUsIGN1c3RvbVJvbGU6IHsgc2VsZWN0OiB7IGlzU3lzdGVtOiB0cnVlIH0gfSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ1NZU1RFTV9BRE1JTicgfHwgY3VycmVudFVzZXI/LmN1c3RvbVJvbGU/LmlzU3lzdGVtO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBQRU5ESU5HIG9yIEFQUFJPVkVEIHJlcXVpc2l0aW9uc1xyXG4gICAgICAgIC8vIEFkbWlucyBjYW4gc2VlIGFsbCwgdXNlcnMgc2VlIHRoZWlyIG93blxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1BBSUQnLCAnQ0xPU0VEJ10gfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1aXNpdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWlzaXRpb25zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZWxpZ2libGUgcmVxdWlzaXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hQ2xpZW50ID0gcHJpc21hIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjdXN0b21DYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hQ2xpZW50LmN1c3RvbUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IHRydWUgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNhdGVnb3J5TmFtZXMgPSBjdXN0b21DYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiBjLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHsgRVhQRU5TRV9DQVRFR09SSUVTIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9jb25zdGFudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLkVYUEVOU0VfQ0FURUdPUklFUywgLi4uY3VzdG9tQ2F0ZWdvcnlOYW1lc10pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCB7IEVYUEVOU0VfQ0FURUdPUklFUyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvY29uc3RhbnRzXCIpO1xyXG4gICAgICAgIHJldHVybiBFWFBFTlNFX0NBVEVHT1JJRVM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWZW5kb3JzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJhbmNoTWFuYWdlciA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID09PSAnVEVBTV9MRUFERVInO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJyYW5jaElkID0gdXNlcj8ubGVhZEJyYW5jaD8uaWQgfHwgdXNlcj8uYnJhbmNoSWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7IGlzQWN0aXZlOiB0cnVlIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzQnJhbmNoTWFuYWdlciAmJiBhY3RpdmVCcmFuY2hJZCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS5icmFuY2hJZCA9IGFjdGl2ZUJyYW5jaElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IGF3YWl0IHByaXNtYS52ZW5kb3IuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFua05hbWU6IHRydWUsIGJhbmtBY2NvdW50OiB0cnVlLCBlbWFpbDogdHJ1ZSwgcGhvbmU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZlbmRvcnM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZW5kb3JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJyYW5jaEFuZERlcGFydG1lbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIHsgYnJhbmNoOiBcIlwiLCBkZXBhcnRtZW50OiBcIlwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBsZWFkQnJhbmNoOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4geyBicmFuY2g6IFwiXCIsIGRlcGFydG1lbnQ6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgLy8gRm9yIEJyYW5jaCBNYW5hZ2VycyAoVEVBTV9MRUFERVIpLCB0aGVpciBicmFuY2ggaXMgc3RvcmVkIGluIGBsZWFkQnJhbmNoYCBvciBgYnJhbmNoSWRgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IHVzZXIubGVhZEJyYW5jaD8ubmFtZSB8fCB1c2VyLmJyYW5jaElkIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudCB8fCBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geyBicmFuY2g6IGJyYW5jaE5hbWUsIGRlcGFydG1lbnQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgYnJhbmNoICYgZGVwYXJ0bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGJyYW5jaDogXCJcIiwgZGVwYXJ0bWVudDogXCJcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZUFjY291bnRzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdHlwZTogJ0VYUEVOU0UnIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29kZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlIGFjY291bnRzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGVBY2NvdW50U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIGlzIHRvbyBzaG9ydFwiKSxcclxuICAgIGNvZGU6IHouc3RyaW5nKCkubWluKDIsIFwiQ29kZSBpcyByZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlZCA9IENyZWF0ZUFjY291bnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcykgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCBpbnB1dCBwcm92aWRlZFwiIH07XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjb2RlIH0gPSB2YWxpZGF0ZWQuZGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGNvZGUgfSB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGVycm9yOiBcIkFuIGFjY291bnQgd2l0aCB0aGlzIEdMIENvZGUgYWxyZWFkeSBleGlzdHMuXCIgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0VYUEVOU0UnLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhY2NvdW50OiBuZXdBY2NvdW50IH07XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYWNjb3VudDpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlRBbVlzQiw2TEFBQSJ9
}),
"[project]/src/app/dashboard/requisitions/new/data:6f05a4 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserBranchAndDepartmentAction",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00759d09b12d20c3d57c9ac1915c9f6e67486cd37d":"getUserBranchAndDepartmentAction"},"src/app/dashboard/requisitions/new/multi-item-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00759d09b12d20c3d57c9ac1915c9f6e67486cd37d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserBranchAndDepartmentAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXVsdGktaXRlbS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBjaGVja0VuZm9yY2VDbG9zdXJlIH0gZnJvbSBcIkAvbGliL2Nsb3N1cmUtY2hlY2tcIjtcclxuaW1wb3J0IHsgY2hlY2tFeHBlbnNlUG9saWNpZXMgfSBmcm9tIFwiQC9saWIvcG9saWN5LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyBhcHByb3ZhbFdvcmtmbG93IH0gZnJvbSBcIkAvbGliL2FwcHJvdmFsLXdvcmtmbG93XCI7XHJcblxyXG5jb25zdCBSZXF1aXNpdGlvbkl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oMywgXCJJdGVtIHRpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXHJcbiAgICB1bml0UHJpY2U6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiVW5pdCBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxyXG4gICAgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDEsIFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBpc1JlY3VycmluZzogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgIGZyZXF1ZW5jeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgc3RhcnREYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUmVxdWlzaXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgXCJUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxMCwgXCJKdXN0aWZpY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxuICAgIGN1cnJlbmN5OiB6LnN0cmluZygpLmRlZmF1bHQoXCJVU0RcIiksXHJcbiAgICBpdGVtczogei5hcnJheShSZXF1aXNpdGlvbkl0ZW1TY2hlbWEpLm1pbigxLCBcIkF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1aXNpdGlvbldpdGhJdGVtcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblxyXG4gICAgLy8gUGFyc2UgaXRlbXMgZnJvbSBmb3JtRGF0YVxyXG4gICAgY29uc3QgaXRlbXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaXRlbXNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zSnNvbik7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUmVxdWlzaXRpb25TY2hlbWEuc2FmZVBhcnNlKHtcclxuICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgIGN1cnJlbmN5OiBmb3JtRGF0YS5nZXQoXCJjdXJyZW5jeVwiKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zdXJlQ2hlY2sgPSBhd2FpdCBjaGVja0VuZm9yY2VDbG9zdXJlKHNlc3Npb24udXNlci5pZCk7XHJcbiAgICBpZiAoY2xvc3VyZUNoZWNrLmJsb2NrZWQpIHtcclxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjbG9zdXJlQ2hlY2subWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW5jeSwgaXRlbXM6IHZhbGlkYXRlZEl0ZW1zIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHZhbGlkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlKSwgMCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwcmltYXJ5IGNhdGVnb3J5IChmcm9tIGZpcnN0IGl0ZW0gb3IgbW9zdCBleHBlbnNpdmUgaXRlbSlcclxuICAgIGNvbnN0IHByaW1hcnlDYXRlZ29yeSA9IHZhbGlkYXRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgKGIucXVhbnRpdHkgKiBiLnVuaXRQcmljZSkgLSAoYS5xdWFudGl0eSAqIGEudW5pdFByaWNlKVxyXG4gICAgKVswXS5jYXRlZ29yeTtcclxuXHJcbiAgICAvLyBSdW4gUG9saWN5IENoZWNrc1xyXG4gICAgY29uc3QgcG9saWN5UmVzdWx0ID0gYXdhaXQgY2hlY2tFeHBlbnNlUG9saWNpZXMoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudDogdG90YWxBbW91bnQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICBleHBlbnNlRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwb2xpY3lSZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZXJzID0gcG9saWN5UmVzdWx0LnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5pc0Jsb2NraW5nKS5tYXAodiA9PiB2Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChibG9ja2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9saWN5IFZpb2xhdGlvbjogJHtibG9ja2Vycy5qb2luKFwiLCBcIil9YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nIHx8IFwiU1RBTkRBUkRcIjtcclxuICAgIGNvbnN0IGlzU1NDQSA9IGZvcm1EYXRhLmdldChcImlzU1NDQVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBpc1N0cmljdEFwcHJvdmFsID0gZm9ybURhdGEuZ2V0KFwiaXNTdHJpY3RBcHByb3ZhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgaWYgKGlzU1NDQSkge1xyXG4gICAgICAgIGlmICgoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJTWVNURU1fQURNSU5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQ6IE9ubHkgU3lzdGVtIEFkbWluaXN0cmF0b3JzIGNhbiBjcmVhdGUgU291dGggU3VkYW4gQ2l2aWwgQXZpYXRpb24gcmVxdWVzdHMuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZSA9IGlzU3RyaWN0QXBwcm92YWwgPyBcIlNPVVRIX1NVREFOX1NUUklDVFwiIDogXCJTT1VUSF9TVURBTlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHVzZXIgZm9yIGJyYW5jaC9yZWdpb24gaW5mb1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGJyYW5jaElkOiB0cnVlLCByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBicmFuY2hJZCA9IChmb3JtRGF0YS5nZXQoXCJicmFuY2hJZFwiKSBhcyBzdHJpbmcpIHx8IChmb3JtRGF0YS5nZXQoXCJicmFuY2hcIikgYXMgc3RyaW5nKSB8fCB1c2VyPy5icmFuY2hJZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5pZDtcclxuICAgIGNvbnN0IGRlcGFydG1lbnQgPSBmb3JtRGF0YS5nZXQoXCJkZXBhcnRtZW50XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHZlbmRvciA9IGZvcm1EYXRhLmdldChcInZlbmRvclwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleHBlY3RlZERhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJleHBlY3RlZERhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZmVyZW5jZSA9IGZvcm1EYXRhLmdldChcInBheW1lbnRSZWZlcmVuY2VcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgYWNjb3VudElkID0gZm9ybURhdGEuZ2V0KFwiYWNjb3VudElkXCIpIGFzIHN0cmluZztcclxuXHJcbiAgICBsZXQgZmluYWxEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKHZlbmRvciAmJiB2ZW5kb3IudHJpbSgpKSB7XHJcbiAgICAgICAgZmluYWxEZXNjcmlwdGlvbiArPSBgXFxuXFxuKipQcmVmZXJyZWQgVmVuZG9yOioqICR7dmVuZG9yLnRyaW0oKX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC50cmltKCkpIHtcclxuICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGBcXG5cXG4qKlBheW1lbnQgTWV0aG9kOioqICR7cGF5bWVudE1ldGhvZC50cmltKCl9YDtcclxuICAgICAgICBpZiAocGF5bWVudFJlZmVyZW5jZSAmJiBwYXltZW50UmVmZXJlbmNlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGAg4oCUIFJlZi9OdW1iZXI6ICR7cGF5bWVudFJlZmVyZW5jZS50cmltKCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwZWN0ZWREYXRlID0gZXhwZWN0ZWREYXRlU3RyID8gbmV3IERhdGUoZXhwZWN0ZWREYXRlU3RyKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgTmV4dCBSdW4gRGF0ZSBoZWxwZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRSdW4gPSAoc3RhcnREYXRlOiBEYXRlLCBmcmVxdWVuY3k6IHN0cmluZyk6IERhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRSdW4gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIHN3aXRjaCAoZnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQUlMWVwiOiBuZXh0UnVuLnNldERhdGUobmV4dFJ1bi5nZXREYXRlKCkgKyAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXRUVLTFlcIjogbmV4dFJ1bi5zZXREYXRlKG5leHRSdW4uZ2V0RGF0ZSgpICsgNyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU9OVEhMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFVQVJURVJMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDMpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIllFQVJMWVwiOiBuZXh0UnVuLnNldEZ1bGxZZWFyKG5leHRSdW4uZ2V0RnVsbFllYXIoKSArIDEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRSdW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSByZXF1aXNpdGlvbiB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCByZXF1aXNpdGlvbiA9IGF3YWl0IChwcmlzbWEucmVxdWlzaXRpb24uY3JlYXRlIGFzIGFueSkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpbmFsRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzSnVzdGlmaWNhdGlvbjogZmluYWxEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgYnJhbmNoSWQsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkRGF0ZSxcclxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCA/IHsgYWNjb3VudElkIH0gOiB7fSksXHJcbiAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHZhbGlkYXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1JlY3VycmluZyA9IGl0ZW0uaXNSZWN1cnJpbmcgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUgPyBuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnJpbmc6IGlzUmVjdXJyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNSZWN1cnJpbmcgJiYgaXRlbS5mcmVxdWVuY3kgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQXV0bzogJHtpdGVtLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogaXRlbS5mcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UnVuOiBjYWxjdWxhdGVOZXh0UnVuKHN0YXJ0RGF0ZSwgaXRlbS5mcmVxdWVuY3kpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24hLnVzZXIhLmlkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc29sdmUgcmVnaW9uSWQgZm9yIGFwcHJvdmFsIHJvdXRpbmdcclxuICAgIGNvbnN0IHVzZXJXaXRoQnJhbmNoID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udXNlci5pZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZXJSZWdpb25JZCA9IHVzZXJXaXRoQnJhbmNoPy5yZWdpb25JZCB8fCB1c2VyV2l0aEJyYW5jaD8ubGVhZEJyYW5jaD8ucmVnaW9uSWQ7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYXRlIEFwcHJvdmFsIFdvcmtmbG93XHJcbiAgICBjb25zb2xlLmxvZyhgW1JlcXVpc2l0aW9uXSBDcmVhdGluZyB3b3JrZmxvdyBmb3IgYW1vdW50OiAke3RvdGFsQW1vdW50fSwgY2F0ZWdvcnk6ICR7cHJpbWFyeUNhdGVnb3J5fWApO1xyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBhcHByb3ZhbFdvcmtmbG93LmRldGVybWluZVJvdXRlKFxyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBwcmltYXJ5Q2F0ZWdvcnksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1c2VyUmVnaW9uSWQgfHwgdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBbUmVxdWlzaXRpb25dIFJvdXRlIGRldGVybWluZWQ6ICR7cm91dGUuYXV0b0FwcHJvdmUgPyAnQXV0by1hcHByb3ZlJyA6ICdMZXZlbHM6ICcgKyByb3V0ZS5sZXZlbHMubGVuZ3RofWApO1xyXG4gICAgY29uc3QgYXBwcm92YWxzID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5jcmVhdGVSZXF1aXNpdGlvbkFwcHJvdmFscyhyZXF1aXNpdGlvbi5pZCwgcm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYFtSZXF1aXNpdGlvbl0gQ3JlYXRlZCAke2FwcHJvdmFscy5sZW5ndGh9IGFwcHJvdmFsIHJlY29yZHNgKTtcclxuXHJcbiAgICByZWRpcmVjdChcIi9kYXNoYm9hcmQvcmVxdWlzaXRpb25zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvUmVxdWlzaXRpb24ocmVxdWlzaXRpb25JZDogc3RyaW5nLCBpdGVtRGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkSXRlbSA9IFJlcXVpc2l0aW9uSXRlbVNjaGVtYS5zYWZlUGFyc2UoaXRlbURhdGEpO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkSXRlbS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRJdGVtLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3N1cmVDaGVjayA9IGF3YWl0IGNoZWNrRW5mb3JjZUNsb3N1cmUoc2Vzc2lvbi51c2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHVuaXRQcmljZSwgY2F0ZWdvcnkgfSA9IHZhbGlkYXRlZEl0ZW0uZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHVuaXRQcmljZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggcGFyZW50IHJlcXVpc2l0aW9uIHRvIGdldCB0eXBlIGFuZCBjdXJyZW5jeVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFJlcXVpc2l0aW9uID0gYXdhaXQgcHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcmVxdWlzaXRpb25JZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50UmVxdWlzaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiUmVxdWlzaXRpb24gbm90IGZvdW5kXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoIHVzZXIgcmVnaW9uXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogeyBzZWxlY3Q6IHsgcmVnaW9uSWQ6IHRydWUgfSB9IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyUmVnaW9uSWQgPSB1c2VyPy5yZWdpb25JZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5yZWdpb25JZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIEFwcHJvdmFsIFJvdXRlIGZvciB0aGlzIGl0ZW1cclxuICAgICAgICAvLyBXZSByZXVzZSB0aGUgbWFpbiB3b3JrZmxvdyBlbmdpbmUgYnV0IGFwcGx5IGl0IHRvIHRoaXMgc3BlY2lmaWMgaXRlbVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5kZXRlcm1pbmVSb3V0ZShcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmVudFJlcXVpc2l0aW9uLnR5cGUsIC8vIFBhc3MgdGhlIHBhcmVudCdzIHR5cGUgKGUuZy4gU09VVEhfU1VEQU4pXHJcbiAgICAgICAgICAgIHVzZXJSZWdpb25JZCB8fCB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaXRlbSBzdGF0dXMgYmFzZWQgb24gcm91dGVcclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGFscmVhZHkgYXBwcm92ZWQvcGFpZCwgYW5kIHRoaXMgdmFsaWQgcm91dGUgc2F5cyBhdXRvLWFwcHJvdmUgKGxpa2UgU1NDQSksIFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGFwcHJvdmUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBzdGFydHMgYXMgUEVORElORy5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdHVzID0gcm91dGUuYXV0b0FwcHJvdmUgPyAnQVBQUk9WRUQnIDogJ1BFTkRJTkcnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBpdGVtIHdpdGggaXRzIHNwZWNpZmljIHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhd2FpdCAocHJpc21hIGFzIGFueSkucmVxdWlzaXRpb25JdGVtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB1bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyZW50UmVxdWlzaXRpb24udHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgQXBwcm92YWwgUmVjb3JkcyBpZiBub3QgYXV0by1hcHByb3ZlZFxyXG4gICAgICAgIGlmICghcm91dGUuYXV0b0FwcHJvdmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiByb3V0ZS5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwcm92ZXIgb2YgbGV2ZWwuYXBwcm92ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLml0ZW1BcHByb3ZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXNpdGlvbkl0ZW1JZDogbmV3SXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVySWQ6IGFwcHJvdmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSB0b3RhbCBhbW91bnQgZm9yIHRoZSByZXF1aXNpdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIG1haW4gcmVxdWlzaXRpb24gc3RhdHVzIGRvZXMgTk9UIGNoYW5nZSBiYWNrIHRvIFBFTkRJTkcuXHJcbiAgICAgICAgLy8gVGhlIG5ldyBpdGVtIGhhcyBpdHMgb3duIGluZGVwZW5kZW50IGxpZmVjeWNsZS5cclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS5yZXF1aXNpdGlvbkl0ZW0uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsQW1vdW50ID0gYWxsSXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgaXRlbTogYW55KSA9PiBzdW0gKyBpdGVtLnRvdGFsUHJpY2UsIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmVxdWlzaXRpb24gYW1vdW50XHJcbiAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYW1vdW50OiBuZXdUb3RhbEFtb3VudCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpdGVtOiBuZXdJdGVtIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgaXRlbSB0byByZXF1aXNpdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgaXRlbVwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbGlnaWJsZVJlcXVpc2l0aW9ucygpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBTeXN0ZW0gQWRtaW4gcm9sZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IHJvbGU6IHRydWUsIGN1c3RvbVJvbGU6IHsgc2VsZWN0OiB7IGlzU3lzdGVtOiB0cnVlIH0gfSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ1NZU1RFTV9BRE1JTicgfHwgY3VycmVudFVzZXI/LmN1c3RvbVJvbGU/LmlzU3lzdGVtO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBQRU5ESU5HIG9yIEFQUFJPVkVEIHJlcXVpc2l0aW9uc1xyXG4gICAgICAgIC8vIEFkbWlucyBjYW4gc2VlIGFsbCwgdXNlcnMgc2VlIHRoZWlyIG93blxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1BBSUQnLCAnQ0xPU0VEJ10gfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1aXNpdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWlzaXRpb25zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZWxpZ2libGUgcmVxdWlzaXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hQ2xpZW50ID0gcHJpc21hIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjdXN0b21DYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hQ2xpZW50LmN1c3RvbUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IHRydWUgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNhdGVnb3J5TmFtZXMgPSBjdXN0b21DYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiBjLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHsgRVhQRU5TRV9DQVRFR09SSUVTIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9jb25zdGFudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLkVYUEVOU0VfQ0FURUdPUklFUywgLi4uY3VzdG9tQ2F0ZWdvcnlOYW1lc10pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCB7IEVYUEVOU0VfQ0FURUdPUklFUyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvY29uc3RhbnRzXCIpO1xyXG4gICAgICAgIHJldHVybiBFWFBFTlNFX0NBVEVHT1JJRVM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWZW5kb3JzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJhbmNoTWFuYWdlciA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID09PSAnVEVBTV9MRUFERVInO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJyYW5jaElkID0gdXNlcj8ubGVhZEJyYW5jaD8uaWQgfHwgdXNlcj8uYnJhbmNoSWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7IGlzQWN0aXZlOiB0cnVlIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzQnJhbmNoTWFuYWdlciAmJiBhY3RpdmVCcmFuY2hJZCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS5icmFuY2hJZCA9IGFjdGl2ZUJyYW5jaElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IGF3YWl0IHByaXNtYS52ZW5kb3IuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFua05hbWU6IHRydWUsIGJhbmtBY2NvdW50OiB0cnVlLCBlbWFpbDogdHJ1ZSwgcGhvbmU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZlbmRvcnM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZW5kb3JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJyYW5jaEFuZERlcGFydG1lbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIHsgYnJhbmNoOiBcIlwiLCBkZXBhcnRtZW50OiBcIlwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBsZWFkQnJhbmNoOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4geyBicmFuY2g6IFwiXCIsIGRlcGFydG1lbnQ6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgLy8gRm9yIEJyYW5jaCBNYW5hZ2VycyAoVEVBTV9MRUFERVIpLCB0aGVpciBicmFuY2ggaXMgc3RvcmVkIGluIGBsZWFkQnJhbmNoYCBvciBgYnJhbmNoSWRgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IHVzZXIubGVhZEJyYW5jaD8ubmFtZSB8fCB1c2VyLmJyYW5jaElkIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudCB8fCBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geyBicmFuY2g6IGJyYW5jaE5hbWUsIGRlcGFydG1lbnQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgYnJhbmNoICYgZGVwYXJ0bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGJyYW5jaDogXCJcIiwgZGVwYXJ0bWVudDogXCJcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZUFjY291bnRzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdHlwZTogJ0VYUEVOU0UnIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29kZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlIGFjY291bnRzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGVBY2NvdW50U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIGlzIHRvbyBzaG9ydFwiKSxcclxuICAgIGNvZGU6IHouc3RyaW5nKCkubWluKDIsIFwiQ29kZSBpcyByZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlZCA9IENyZWF0ZUFjY291bnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcykgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCBpbnB1dCBwcm92aWRlZFwiIH07XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjb2RlIH0gPSB2YWxpZGF0ZWQuZGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGNvZGUgfSB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGVycm9yOiBcIkFuIGFjY291bnQgd2l0aCB0aGlzIEdMIENvZGUgYWxyZWFkeSBleGlzdHMuXCIgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0VYUEVOU0UnLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhY2NvdW50OiBuZXdBY2NvdW50IH07XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYWNjb3VudDpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlVBa2FzQiw2TUFBQSJ9
}),
"[project]/src/app/dashboard/requisitions/new/data:5c1be7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExpenseAccountsAction",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0055ad71838ff70d1e9df2e7fb7df6728aa730ac9a":"getExpenseAccountsAction"},"src/app/dashboard/requisitions/new/multi-item-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0055ad71838ff70d1e9df2e7fb7df6728aa730ac9a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getExpenseAccountsAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXVsdGktaXRlbS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBjaGVja0VuZm9yY2VDbG9zdXJlIH0gZnJvbSBcIkAvbGliL2Nsb3N1cmUtY2hlY2tcIjtcclxuaW1wb3J0IHsgY2hlY2tFeHBlbnNlUG9saWNpZXMgfSBmcm9tIFwiQC9saWIvcG9saWN5LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyBhcHByb3ZhbFdvcmtmbG93IH0gZnJvbSBcIkAvbGliL2FwcHJvdmFsLXdvcmtmbG93XCI7XHJcblxyXG5jb25zdCBSZXF1aXNpdGlvbkl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oMywgXCJJdGVtIHRpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXHJcbiAgICB1bml0UHJpY2U6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiVW5pdCBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxyXG4gICAgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDEsIFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBpc1JlY3VycmluZzogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgIGZyZXF1ZW5jeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgc3RhcnREYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUmVxdWlzaXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgXCJUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxMCwgXCJKdXN0aWZpY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxuICAgIGN1cnJlbmN5OiB6LnN0cmluZygpLmRlZmF1bHQoXCJVU0RcIiksXHJcbiAgICBpdGVtczogei5hcnJheShSZXF1aXNpdGlvbkl0ZW1TY2hlbWEpLm1pbigxLCBcIkF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1aXNpdGlvbldpdGhJdGVtcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblxyXG4gICAgLy8gUGFyc2UgaXRlbXMgZnJvbSBmb3JtRGF0YVxyXG4gICAgY29uc3QgaXRlbXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaXRlbXNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zSnNvbik7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUmVxdWlzaXRpb25TY2hlbWEuc2FmZVBhcnNlKHtcclxuICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgIGN1cnJlbmN5OiBmb3JtRGF0YS5nZXQoXCJjdXJyZW5jeVwiKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zdXJlQ2hlY2sgPSBhd2FpdCBjaGVja0VuZm9yY2VDbG9zdXJlKHNlc3Npb24udXNlci5pZCk7XHJcbiAgICBpZiAoY2xvc3VyZUNoZWNrLmJsb2NrZWQpIHtcclxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjbG9zdXJlQ2hlY2subWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW5jeSwgaXRlbXM6IHZhbGlkYXRlZEl0ZW1zIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHZhbGlkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlKSwgMCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwcmltYXJ5IGNhdGVnb3J5IChmcm9tIGZpcnN0IGl0ZW0gb3IgbW9zdCBleHBlbnNpdmUgaXRlbSlcclxuICAgIGNvbnN0IHByaW1hcnlDYXRlZ29yeSA9IHZhbGlkYXRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgKGIucXVhbnRpdHkgKiBiLnVuaXRQcmljZSkgLSAoYS5xdWFudGl0eSAqIGEudW5pdFByaWNlKVxyXG4gICAgKVswXS5jYXRlZ29yeTtcclxuXHJcbiAgICAvLyBSdW4gUG9saWN5IENoZWNrc1xyXG4gICAgY29uc3QgcG9saWN5UmVzdWx0ID0gYXdhaXQgY2hlY2tFeHBlbnNlUG9saWNpZXMoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudDogdG90YWxBbW91bnQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICBleHBlbnNlRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwb2xpY3lSZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZXJzID0gcG9saWN5UmVzdWx0LnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5pc0Jsb2NraW5nKS5tYXAodiA9PiB2Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChibG9ja2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9saWN5IFZpb2xhdGlvbjogJHtibG9ja2Vycy5qb2luKFwiLCBcIil9YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nIHx8IFwiU1RBTkRBUkRcIjtcclxuICAgIGNvbnN0IGlzU1NDQSA9IGZvcm1EYXRhLmdldChcImlzU1NDQVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBpc1N0cmljdEFwcHJvdmFsID0gZm9ybURhdGEuZ2V0KFwiaXNTdHJpY3RBcHByb3ZhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgaWYgKGlzU1NDQSkge1xyXG4gICAgICAgIGlmICgoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJTWVNURU1fQURNSU5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQ6IE9ubHkgU3lzdGVtIEFkbWluaXN0cmF0b3JzIGNhbiBjcmVhdGUgU291dGggU3VkYW4gQ2l2aWwgQXZpYXRpb24gcmVxdWVzdHMuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZSA9IGlzU3RyaWN0QXBwcm92YWwgPyBcIlNPVVRIX1NVREFOX1NUUklDVFwiIDogXCJTT1VUSF9TVURBTlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHVzZXIgZm9yIGJyYW5jaC9yZWdpb24gaW5mb1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGJyYW5jaElkOiB0cnVlLCByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBicmFuY2hJZCA9IChmb3JtRGF0YS5nZXQoXCJicmFuY2hJZFwiKSBhcyBzdHJpbmcpIHx8IChmb3JtRGF0YS5nZXQoXCJicmFuY2hcIikgYXMgc3RyaW5nKSB8fCB1c2VyPy5icmFuY2hJZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5pZDtcclxuICAgIGNvbnN0IGRlcGFydG1lbnQgPSBmb3JtRGF0YS5nZXQoXCJkZXBhcnRtZW50XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHZlbmRvciA9IGZvcm1EYXRhLmdldChcInZlbmRvclwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleHBlY3RlZERhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJleHBlY3RlZERhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZmVyZW5jZSA9IGZvcm1EYXRhLmdldChcInBheW1lbnRSZWZlcmVuY2VcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgYWNjb3VudElkID0gZm9ybURhdGEuZ2V0KFwiYWNjb3VudElkXCIpIGFzIHN0cmluZztcclxuXHJcbiAgICBsZXQgZmluYWxEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKHZlbmRvciAmJiB2ZW5kb3IudHJpbSgpKSB7XHJcbiAgICAgICAgZmluYWxEZXNjcmlwdGlvbiArPSBgXFxuXFxuKipQcmVmZXJyZWQgVmVuZG9yOioqICR7dmVuZG9yLnRyaW0oKX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC50cmltKCkpIHtcclxuICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGBcXG5cXG4qKlBheW1lbnQgTWV0aG9kOioqICR7cGF5bWVudE1ldGhvZC50cmltKCl9YDtcclxuICAgICAgICBpZiAocGF5bWVudFJlZmVyZW5jZSAmJiBwYXltZW50UmVmZXJlbmNlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGAg4oCUIFJlZi9OdW1iZXI6ICR7cGF5bWVudFJlZmVyZW5jZS50cmltKCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwZWN0ZWREYXRlID0gZXhwZWN0ZWREYXRlU3RyID8gbmV3IERhdGUoZXhwZWN0ZWREYXRlU3RyKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgTmV4dCBSdW4gRGF0ZSBoZWxwZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRSdW4gPSAoc3RhcnREYXRlOiBEYXRlLCBmcmVxdWVuY3k6IHN0cmluZyk6IERhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRSdW4gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIHN3aXRjaCAoZnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQUlMWVwiOiBuZXh0UnVuLnNldERhdGUobmV4dFJ1bi5nZXREYXRlKCkgKyAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXRUVLTFlcIjogbmV4dFJ1bi5zZXREYXRlKG5leHRSdW4uZ2V0RGF0ZSgpICsgNyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU9OVEhMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFVQVJURVJMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDMpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIllFQVJMWVwiOiBuZXh0UnVuLnNldEZ1bGxZZWFyKG5leHRSdW4uZ2V0RnVsbFllYXIoKSArIDEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRSdW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSByZXF1aXNpdGlvbiB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCByZXF1aXNpdGlvbiA9IGF3YWl0IChwcmlzbWEucmVxdWlzaXRpb24uY3JlYXRlIGFzIGFueSkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpbmFsRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzSnVzdGlmaWNhdGlvbjogZmluYWxEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgYnJhbmNoSWQsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkRGF0ZSxcclxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCA/IHsgYWNjb3VudElkIH0gOiB7fSksXHJcbiAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHZhbGlkYXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1JlY3VycmluZyA9IGl0ZW0uaXNSZWN1cnJpbmcgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUgPyBuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnJpbmc6IGlzUmVjdXJyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNSZWN1cnJpbmcgJiYgaXRlbS5mcmVxdWVuY3kgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQXV0bzogJHtpdGVtLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogaXRlbS5mcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UnVuOiBjYWxjdWxhdGVOZXh0UnVuKHN0YXJ0RGF0ZSwgaXRlbS5mcmVxdWVuY3kpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24hLnVzZXIhLmlkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc29sdmUgcmVnaW9uSWQgZm9yIGFwcHJvdmFsIHJvdXRpbmdcclxuICAgIGNvbnN0IHVzZXJXaXRoQnJhbmNoID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udXNlci5pZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZXJSZWdpb25JZCA9IHVzZXJXaXRoQnJhbmNoPy5yZWdpb25JZCB8fCB1c2VyV2l0aEJyYW5jaD8ubGVhZEJyYW5jaD8ucmVnaW9uSWQ7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYXRlIEFwcHJvdmFsIFdvcmtmbG93XHJcbiAgICBjb25zb2xlLmxvZyhgW1JlcXVpc2l0aW9uXSBDcmVhdGluZyB3b3JrZmxvdyBmb3IgYW1vdW50OiAke3RvdGFsQW1vdW50fSwgY2F0ZWdvcnk6ICR7cHJpbWFyeUNhdGVnb3J5fWApO1xyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBhcHByb3ZhbFdvcmtmbG93LmRldGVybWluZVJvdXRlKFxyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBwcmltYXJ5Q2F0ZWdvcnksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1c2VyUmVnaW9uSWQgfHwgdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBbUmVxdWlzaXRpb25dIFJvdXRlIGRldGVybWluZWQ6ICR7cm91dGUuYXV0b0FwcHJvdmUgPyAnQXV0by1hcHByb3ZlJyA6ICdMZXZlbHM6ICcgKyByb3V0ZS5sZXZlbHMubGVuZ3RofWApO1xyXG4gICAgY29uc3QgYXBwcm92YWxzID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5jcmVhdGVSZXF1aXNpdGlvbkFwcHJvdmFscyhyZXF1aXNpdGlvbi5pZCwgcm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYFtSZXF1aXNpdGlvbl0gQ3JlYXRlZCAke2FwcHJvdmFscy5sZW5ndGh9IGFwcHJvdmFsIHJlY29yZHNgKTtcclxuXHJcbiAgICByZWRpcmVjdChcIi9kYXNoYm9hcmQvcmVxdWlzaXRpb25zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvUmVxdWlzaXRpb24ocmVxdWlzaXRpb25JZDogc3RyaW5nLCBpdGVtRGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkSXRlbSA9IFJlcXVpc2l0aW9uSXRlbVNjaGVtYS5zYWZlUGFyc2UoaXRlbURhdGEpO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkSXRlbS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRJdGVtLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3N1cmVDaGVjayA9IGF3YWl0IGNoZWNrRW5mb3JjZUNsb3N1cmUoc2Vzc2lvbi51c2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHVuaXRQcmljZSwgY2F0ZWdvcnkgfSA9IHZhbGlkYXRlZEl0ZW0uZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHVuaXRQcmljZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggcGFyZW50IHJlcXVpc2l0aW9uIHRvIGdldCB0eXBlIGFuZCBjdXJyZW5jeVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFJlcXVpc2l0aW9uID0gYXdhaXQgcHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcmVxdWlzaXRpb25JZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50UmVxdWlzaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiUmVxdWlzaXRpb24gbm90IGZvdW5kXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoIHVzZXIgcmVnaW9uXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogeyBzZWxlY3Q6IHsgcmVnaW9uSWQ6IHRydWUgfSB9IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyUmVnaW9uSWQgPSB1c2VyPy5yZWdpb25JZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5yZWdpb25JZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIEFwcHJvdmFsIFJvdXRlIGZvciB0aGlzIGl0ZW1cclxuICAgICAgICAvLyBXZSByZXVzZSB0aGUgbWFpbiB3b3JrZmxvdyBlbmdpbmUgYnV0IGFwcGx5IGl0IHRvIHRoaXMgc3BlY2lmaWMgaXRlbVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5kZXRlcm1pbmVSb3V0ZShcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmVudFJlcXVpc2l0aW9uLnR5cGUsIC8vIFBhc3MgdGhlIHBhcmVudCdzIHR5cGUgKGUuZy4gU09VVEhfU1VEQU4pXHJcbiAgICAgICAgICAgIHVzZXJSZWdpb25JZCB8fCB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaXRlbSBzdGF0dXMgYmFzZWQgb24gcm91dGVcclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGFscmVhZHkgYXBwcm92ZWQvcGFpZCwgYW5kIHRoaXMgdmFsaWQgcm91dGUgc2F5cyBhdXRvLWFwcHJvdmUgKGxpa2UgU1NDQSksIFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGFwcHJvdmUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBzdGFydHMgYXMgUEVORElORy5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdHVzID0gcm91dGUuYXV0b0FwcHJvdmUgPyAnQVBQUk9WRUQnIDogJ1BFTkRJTkcnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBpdGVtIHdpdGggaXRzIHNwZWNpZmljIHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhd2FpdCAocHJpc21hIGFzIGFueSkucmVxdWlzaXRpb25JdGVtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB1bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyZW50UmVxdWlzaXRpb24udHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgQXBwcm92YWwgUmVjb3JkcyBpZiBub3QgYXV0by1hcHByb3ZlZFxyXG4gICAgICAgIGlmICghcm91dGUuYXV0b0FwcHJvdmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiByb3V0ZS5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwcm92ZXIgb2YgbGV2ZWwuYXBwcm92ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLml0ZW1BcHByb3ZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXNpdGlvbkl0ZW1JZDogbmV3SXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVySWQ6IGFwcHJvdmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSB0b3RhbCBhbW91bnQgZm9yIHRoZSByZXF1aXNpdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIG1haW4gcmVxdWlzaXRpb24gc3RhdHVzIGRvZXMgTk9UIGNoYW5nZSBiYWNrIHRvIFBFTkRJTkcuXHJcbiAgICAgICAgLy8gVGhlIG5ldyBpdGVtIGhhcyBpdHMgb3duIGluZGVwZW5kZW50IGxpZmVjeWNsZS5cclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS5yZXF1aXNpdGlvbkl0ZW0uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsQW1vdW50ID0gYWxsSXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgaXRlbTogYW55KSA9PiBzdW0gKyBpdGVtLnRvdGFsUHJpY2UsIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmVxdWlzaXRpb24gYW1vdW50XHJcbiAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYW1vdW50OiBuZXdUb3RhbEFtb3VudCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpdGVtOiBuZXdJdGVtIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgaXRlbSB0byByZXF1aXNpdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgaXRlbVwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbGlnaWJsZVJlcXVpc2l0aW9ucygpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBTeXN0ZW0gQWRtaW4gcm9sZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IHJvbGU6IHRydWUsIGN1c3RvbVJvbGU6IHsgc2VsZWN0OiB7IGlzU3lzdGVtOiB0cnVlIH0gfSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ1NZU1RFTV9BRE1JTicgfHwgY3VycmVudFVzZXI/LmN1c3RvbVJvbGU/LmlzU3lzdGVtO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBQRU5ESU5HIG9yIEFQUFJPVkVEIHJlcXVpc2l0aW9uc1xyXG4gICAgICAgIC8vIEFkbWlucyBjYW4gc2VlIGFsbCwgdXNlcnMgc2VlIHRoZWlyIG93blxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1BBSUQnLCAnQ0xPU0VEJ10gfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1aXNpdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWlzaXRpb25zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZWxpZ2libGUgcmVxdWlzaXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hQ2xpZW50ID0gcHJpc21hIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjdXN0b21DYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hQ2xpZW50LmN1c3RvbUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IHRydWUgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNhdGVnb3J5TmFtZXMgPSBjdXN0b21DYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiBjLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHsgRVhQRU5TRV9DQVRFR09SSUVTIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9jb25zdGFudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLkVYUEVOU0VfQ0FURUdPUklFUywgLi4uY3VzdG9tQ2F0ZWdvcnlOYW1lc10pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCB7IEVYUEVOU0VfQ0FURUdPUklFUyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvY29uc3RhbnRzXCIpO1xyXG4gICAgICAgIHJldHVybiBFWFBFTlNFX0NBVEVHT1JJRVM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWZW5kb3JzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJhbmNoTWFuYWdlciA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID09PSAnVEVBTV9MRUFERVInO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJyYW5jaElkID0gdXNlcj8ubGVhZEJyYW5jaD8uaWQgfHwgdXNlcj8uYnJhbmNoSWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7IGlzQWN0aXZlOiB0cnVlIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzQnJhbmNoTWFuYWdlciAmJiBhY3RpdmVCcmFuY2hJZCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS5icmFuY2hJZCA9IGFjdGl2ZUJyYW5jaElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IGF3YWl0IHByaXNtYS52ZW5kb3IuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFua05hbWU6IHRydWUsIGJhbmtBY2NvdW50OiB0cnVlLCBlbWFpbDogdHJ1ZSwgcGhvbmU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZlbmRvcnM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZW5kb3JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJyYW5jaEFuZERlcGFydG1lbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIHsgYnJhbmNoOiBcIlwiLCBkZXBhcnRtZW50OiBcIlwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBsZWFkQnJhbmNoOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4geyBicmFuY2g6IFwiXCIsIGRlcGFydG1lbnQ6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgLy8gRm9yIEJyYW5jaCBNYW5hZ2VycyAoVEVBTV9MRUFERVIpLCB0aGVpciBicmFuY2ggaXMgc3RvcmVkIGluIGBsZWFkQnJhbmNoYCBvciBgYnJhbmNoSWRgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IHVzZXIubGVhZEJyYW5jaD8ubmFtZSB8fCB1c2VyLmJyYW5jaElkIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudCB8fCBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geyBicmFuY2g6IGJyYW5jaE5hbWUsIGRlcGFydG1lbnQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgYnJhbmNoICYgZGVwYXJ0bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGJyYW5jaDogXCJcIiwgZGVwYXJ0bWVudDogXCJcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZUFjY291bnRzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdHlwZTogJ0VYUEVOU0UnIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29kZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlIGFjY291bnRzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGVBY2NvdW50U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIGlzIHRvbyBzaG9ydFwiKSxcclxuICAgIGNvZGU6IHouc3RyaW5nKCkubWluKDIsIFwiQ29kZSBpcyByZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlZCA9IENyZWF0ZUFjY291bnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcykgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCBpbnB1dCBwcm92aWRlZFwiIH07XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjb2RlIH0gPSB2YWxpZGF0ZWQuZGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGNvZGUgfSB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGVycm9yOiBcIkFuIGFjY291bnQgd2l0aCB0aGlzIEdMIENvZGUgYWxyZWFkeSBleGlzdHMuXCIgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0VYUEVOU0UnLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhY2NvdW50OiBuZXdBY2NvdW50IH07XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYWNjb3VudDpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVVBeWJzQixxTUFBQSJ9
}),
"[project]/src/app/dashboard/requisitions/new/data:1646c3 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createExpenseAccountAction",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ce350df0d7e11b23077af3a50f4fd58849efd1f4":"createExpenseAccountAction"},"src/app/dashboard/requisitions/new/multi-item-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ce350df0d7e11b23077af3a50f4fd58849efd1f4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createExpenseAccountAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXVsdGktaXRlbS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBjaGVja0VuZm9yY2VDbG9zdXJlIH0gZnJvbSBcIkAvbGliL2Nsb3N1cmUtY2hlY2tcIjtcclxuaW1wb3J0IHsgY2hlY2tFeHBlbnNlUG9saWNpZXMgfSBmcm9tIFwiQC9saWIvcG9saWN5LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyBhcHByb3ZhbFdvcmtmbG93IH0gZnJvbSBcIkAvbGliL2FwcHJvdmFsLXdvcmtmbG93XCI7XHJcblxyXG5jb25zdCBSZXF1aXNpdGlvbkl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oMywgXCJJdGVtIHRpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXHJcbiAgICB1bml0UHJpY2U6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiVW5pdCBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxyXG4gICAgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDEsIFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBpc1JlY3VycmluZzogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgIGZyZXF1ZW5jeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgc3RhcnREYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUmVxdWlzaXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgXCJUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxMCwgXCJKdXN0aWZpY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxuICAgIGN1cnJlbmN5OiB6LnN0cmluZygpLmRlZmF1bHQoXCJVU0RcIiksXHJcbiAgICBpdGVtczogei5hcnJheShSZXF1aXNpdGlvbkl0ZW1TY2hlbWEpLm1pbigxLCBcIkF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1aXNpdGlvbldpdGhJdGVtcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblxyXG4gICAgLy8gUGFyc2UgaXRlbXMgZnJvbSBmb3JtRGF0YVxyXG4gICAgY29uc3QgaXRlbXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaXRlbXNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zSnNvbik7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUmVxdWlzaXRpb25TY2hlbWEuc2FmZVBhcnNlKHtcclxuICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgIGN1cnJlbmN5OiBmb3JtRGF0YS5nZXQoXCJjdXJyZW5jeVwiKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zdXJlQ2hlY2sgPSBhd2FpdCBjaGVja0VuZm9yY2VDbG9zdXJlKHNlc3Npb24udXNlci5pZCk7XHJcbiAgICBpZiAoY2xvc3VyZUNoZWNrLmJsb2NrZWQpIHtcclxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjbG9zdXJlQ2hlY2subWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW5jeSwgaXRlbXM6IHZhbGlkYXRlZEl0ZW1zIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHZhbGlkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlKSwgMCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwcmltYXJ5IGNhdGVnb3J5IChmcm9tIGZpcnN0IGl0ZW0gb3IgbW9zdCBleHBlbnNpdmUgaXRlbSlcclxuICAgIGNvbnN0IHByaW1hcnlDYXRlZ29yeSA9IHZhbGlkYXRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgKGIucXVhbnRpdHkgKiBiLnVuaXRQcmljZSkgLSAoYS5xdWFudGl0eSAqIGEudW5pdFByaWNlKVxyXG4gICAgKVswXS5jYXRlZ29yeTtcclxuXHJcbiAgICAvLyBSdW4gUG9saWN5IENoZWNrc1xyXG4gICAgY29uc3QgcG9saWN5UmVzdWx0ID0gYXdhaXQgY2hlY2tFeHBlbnNlUG9saWNpZXMoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudDogdG90YWxBbW91bnQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICBleHBlbnNlRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwb2xpY3lSZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZXJzID0gcG9saWN5UmVzdWx0LnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5pc0Jsb2NraW5nKS5tYXAodiA9PiB2Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChibG9ja2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9saWN5IFZpb2xhdGlvbjogJHtibG9ja2Vycy5qb2luKFwiLCBcIil9YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nIHx8IFwiU1RBTkRBUkRcIjtcclxuICAgIGNvbnN0IGlzU1NDQSA9IGZvcm1EYXRhLmdldChcImlzU1NDQVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBpc1N0cmljdEFwcHJvdmFsID0gZm9ybURhdGEuZ2V0KFwiaXNTdHJpY3RBcHByb3ZhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgaWYgKGlzU1NDQSkge1xyXG4gICAgICAgIGlmICgoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJTWVNURU1fQURNSU5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQ6IE9ubHkgU3lzdGVtIEFkbWluaXN0cmF0b3JzIGNhbiBjcmVhdGUgU291dGggU3VkYW4gQ2l2aWwgQXZpYXRpb24gcmVxdWVzdHMuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZSA9IGlzU3RyaWN0QXBwcm92YWwgPyBcIlNPVVRIX1NVREFOX1NUUklDVFwiIDogXCJTT1VUSF9TVURBTlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHVzZXIgZm9yIGJyYW5jaC9yZWdpb24gaW5mb1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGJyYW5jaElkOiB0cnVlLCByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBicmFuY2hJZCA9IChmb3JtRGF0YS5nZXQoXCJicmFuY2hJZFwiKSBhcyBzdHJpbmcpIHx8IChmb3JtRGF0YS5nZXQoXCJicmFuY2hcIikgYXMgc3RyaW5nKSB8fCB1c2VyPy5icmFuY2hJZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5pZDtcclxuICAgIGNvbnN0IGRlcGFydG1lbnQgPSBmb3JtRGF0YS5nZXQoXCJkZXBhcnRtZW50XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHZlbmRvciA9IGZvcm1EYXRhLmdldChcInZlbmRvclwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleHBlY3RlZERhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJleHBlY3RlZERhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZmVyZW5jZSA9IGZvcm1EYXRhLmdldChcInBheW1lbnRSZWZlcmVuY2VcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgYWNjb3VudElkID0gZm9ybURhdGEuZ2V0KFwiYWNjb3VudElkXCIpIGFzIHN0cmluZztcclxuXHJcbiAgICBsZXQgZmluYWxEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKHZlbmRvciAmJiB2ZW5kb3IudHJpbSgpKSB7XHJcbiAgICAgICAgZmluYWxEZXNjcmlwdGlvbiArPSBgXFxuXFxuKipQcmVmZXJyZWQgVmVuZG9yOioqICR7dmVuZG9yLnRyaW0oKX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC50cmltKCkpIHtcclxuICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGBcXG5cXG4qKlBheW1lbnQgTWV0aG9kOioqICR7cGF5bWVudE1ldGhvZC50cmltKCl9YDtcclxuICAgICAgICBpZiAocGF5bWVudFJlZmVyZW5jZSAmJiBwYXltZW50UmVmZXJlbmNlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBmaW5hbERlc2NyaXB0aW9uICs9IGAg4oCUIFJlZi9OdW1iZXI6ICR7cGF5bWVudFJlZmVyZW5jZS50cmltKCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwZWN0ZWREYXRlID0gZXhwZWN0ZWREYXRlU3RyID8gbmV3IERhdGUoZXhwZWN0ZWREYXRlU3RyKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgTmV4dCBSdW4gRGF0ZSBoZWxwZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRSdW4gPSAoc3RhcnREYXRlOiBEYXRlLCBmcmVxdWVuY3k6IHN0cmluZyk6IERhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRSdW4gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIHN3aXRjaCAoZnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQUlMWVwiOiBuZXh0UnVuLnNldERhdGUobmV4dFJ1bi5nZXREYXRlKCkgKyAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXRUVLTFlcIjogbmV4dFJ1bi5zZXREYXRlKG5leHRSdW4uZ2V0RGF0ZSgpICsgNyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU9OVEhMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFVQVJURVJMWVwiOiBuZXh0UnVuLnNldE1vbnRoKG5leHRSdW4uZ2V0TW9udGgoKSArIDMpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIllFQVJMWVwiOiBuZXh0UnVuLnNldEZ1bGxZZWFyKG5leHRSdW4uZ2V0RnVsbFllYXIoKSArIDEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRSdW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSByZXF1aXNpdGlvbiB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCByZXF1aXNpdGlvbiA9IGF3YWl0IChwcmlzbWEucmVxdWlzaXRpb24uY3JlYXRlIGFzIGFueSkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByaW1hcnlDYXRlZ29yeSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpbmFsRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzSnVzdGlmaWNhdGlvbjogZmluYWxEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgYnJhbmNoSWQsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkRGF0ZSxcclxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCA/IHsgYWNjb3VudElkIH0gOiB7fSksXHJcbiAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHZhbGlkYXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1JlY3VycmluZyA9IGl0ZW0uaXNSZWN1cnJpbmcgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUgPyBuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogaXRlbS5xdWFudGl0eSAqIGl0ZW0udW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnJpbmc6IGlzUmVjdXJyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNSZWN1cnJpbmcgJiYgaXRlbS5mcmVxdWVuY3kgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQXV0bzogJHtpdGVtLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogaXRlbS5mcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UnVuOiBjYWxjdWxhdGVOZXh0UnVuKHN0YXJ0RGF0ZSwgaXRlbS5mcmVxdWVuY3kpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24hLnVzZXIhLmlkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc29sdmUgcmVnaW9uSWQgZm9yIGFwcHJvdmFsIHJvdXRpbmdcclxuICAgIGNvbnN0IHVzZXJXaXRoQnJhbmNoID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udXNlci5pZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZXJSZWdpb25JZCA9IHVzZXJXaXRoQnJhbmNoPy5yZWdpb25JZCB8fCB1c2VyV2l0aEJyYW5jaD8ubGVhZEJyYW5jaD8ucmVnaW9uSWQ7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYXRlIEFwcHJvdmFsIFdvcmtmbG93XHJcbiAgICBjb25zb2xlLmxvZyhgW1JlcXVpc2l0aW9uXSBDcmVhdGluZyB3b3JrZmxvdyBmb3IgYW1vdW50OiAke3RvdGFsQW1vdW50fSwgY2F0ZWdvcnk6ICR7cHJpbWFyeUNhdGVnb3J5fWApO1xyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBhcHByb3ZhbFdvcmtmbG93LmRldGVybWluZVJvdXRlKFxyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBwcmltYXJ5Q2F0ZWdvcnksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1c2VyUmVnaW9uSWQgfHwgdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBbUmVxdWlzaXRpb25dIFJvdXRlIGRldGVybWluZWQ6ICR7cm91dGUuYXV0b0FwcHJvdmUgPyAnQXV0by1hcHByb3ZlJyA6ICdMZXZlbHM6ICcgKyByb3V0ZS5sZXZlbHMubGVuZ3RofWApO1xyXG4gICAgY29uc3QgYXBwcm92YWxzID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5jcmVhdGVSZXF1aXNpdGlvbkFwcHJvdmFscyhyZXF1aXNpdGlvbi5pZCwgcm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYFtSZXF1aXNpdGlvbl0gQ3JlYXRlZCAke2FwcHJvdmFscy5sZW5ndGh9IGFwcHJvdmFsIHJlY29yZHNgKTtcclxuXHJcbiAgICByZWRpcmVjdChcIi9kYXNoYm9hcmQvcmVxdWlzaXRpb25zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvUmVxdWlzaXRpb24ocmVxdWlzaXRpb25JZDogc3RyaW5nLCBpdGVtRGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkSXRlbSA9IFJlcXVpc2l0aW9uSXRlbVNjaGVtYS5zYWZlUGFyc2UoaXRlbURhdGEpO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkSXRlbS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRJdGVtLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3N1cmVDaGVjayA9IGF3YWl0IGNoZWNrRW5mb3JjZUNsb3N1cmUoc2Vzc2lvbi51c2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHVuaXRQcmljZSwgY2F0ZWdvcnkgfSA9IHZhbGlkYXRlZEl0ZW0uZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHVuaXRQcmljZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggcGFyZW50IHJlcXVpc2l0aW9uIHRvIGdldCB0eXBlIGFuZCBjdXJyZW5jeVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFJlcXVpc2l0aW9uID0gYXdhaXQgcHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcmVxdWlzaXRpb25JZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50UmVxdWlzaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiUmVxdWlzaXRpb24gbm90IGZvdW5kXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZldGNoIHVzZXIgcmVnaW9uXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyByZWdpb25JZDogdHJ1ZSwgbGVhZEJyYW5jaDogeyBzZWxlY3Q6IHsgcmVnaW9uSWQ6IHRydWUgfSB9IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyUmVnaW9uSWQgPSB1c2VyPy5yZWdpb25JZCB8fCB1c2VyPy5sZWFkQnJhbmNoPy5yZWdpb25JZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIEFwcHJvdmFsIFJvdXRlIGZvciB0aGlzIGl0ZW1cclxuICAgICAgICAvLyBXZSByZXVzZSB0aGUgbWFpbiB3b3JrZmxvdyBlbmdpbmUgYnV0IGFwcGx5IGl0IHRvIHRoaXMgc3BlY2lmaWMgaXRlbVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgYXBwcm92YWxXb3JrZmxvdy5kZXRlcm1pbmVSb3V0ZShcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmVudFJlcXVpc2l0aW9uLnR5cGUsIC8vIFBhc3MgdGhlIHBhcmVudCdzIHR5cGUgKGUuZy4gU09VVEhfU1VEQU4pXHJcbiAgICAgICAgICAgIHVzZXJSZWdpb25JZCB8fCB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaXRlbSBzdGF0dXMgYmFzZWQgb24gcm91dGVcclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGFscmVhZHkgYXBwcm92ZWQvcGFpZCwgYW5kIHRoaXMgdmFsaWQgcm91dGUgc2F5cyBhdXRvLWFwcHJvdmUgKGxpa2UgU1NDQSksIFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGFwcHJvdmUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBzdGFydHMgYXMgUEVORElORy5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdHVzID0gcm91dGUuYXV0b0FwcHJvdmUgPyAnQVBQUk9WRUQnIDogJ1BFTkRJTkcnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBpdGVtIHdpdGggaXRzIHNwZWNpZmljIHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhd2FpdCAocHJpc21hIGFzIGFueSkucmVxdWlzaXRpb25JdGVtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB1bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyZW50UmVxdWlzaXRpb24udHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgQXBwcm92YWwgUmVjb3JkcyBpZiBub3QgYXV0by1hcHByb3ZlZFxyXG4gICAgICAgIGlmICghcm91dGUuYXV0b0FwcHJvdmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiByb3V0ZS5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwcm92ZXIgb2YgbGV2ZWwuYXBwcm92ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLml0ZW1BcHByb3ZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXNpdGlvbkl0ZW1JZDogbmV3SXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVySWQ6IGFwcHJvdmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSB0b3RhbCBhbW91bnQgZm9yIHRoZSByZXF1aXNpdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIG1haW4gcmVxdWlzaXRpb24gc3RhdHVzIGRvZXMgTk9UIGNoYW5nZSBiYWNrIHRvIFBFTkRJTkcuXHJcbiAgICAgICAgLy8gVGhlIG5ldyBpdGVtIGhhcyBpdHMgb3duIGluZGVwZW5kZW50IGxpZmVjeWNsZS5cclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS5yZXF1aXNpdGlvbkl0ZW0uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsQW1vdW50ID0gYWxsSXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgaXRlbTogYW55KSA9PiBzdW0gKyBpdGVtLnRvdGFsUHJpY2UsIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmVxdWlzaXRpb24gYW1vdW50XHJcbiAgICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZXF1aXNpdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYW1vdW50OiBuZXdUb3RhbEFtb3VudCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpdGVtOiBuZXdJdGVtIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgaXRlbSB0byByZXF1aXNpdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgaXRlbVwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbGlnaWJsZVJlcXVpc2l0aW9ucygpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBTeXN0ZW0gQWRtaW4gcm9sZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IHJvbGU6IHRydWUsIGN1c3RvbVJvbGU6IHsgc2VsZWN0OiB7IGlzU3lzdGVtOiB0cnVlIH0gfSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ1NZU1RFTV9BRE1JTicgfHwgY3VycmVudFVzZXI/LmN1c3RvbVJvbGU/LmlzU3lzdGVtO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBQRU5ESU5HIG9yIEFQUFJPVkVEIHJlcXVpc2l0aW9uc1xyXG4gICAgICAgIC8vIEFkbWlucyBjYW4gc2VlIGFsbCwgdXNlcnMgc2VlIHRoZWlyIG93blxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1BBSUQnLCAnQ0xPU0VEJ10gfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1aXNpdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWlzaXRpb25zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZWxpZ2libGUgcmVxdWlzaXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hQ2xpZW50ID0gcHJpc21hIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjdXN0b21DYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hQ2xpZW50LmN1c3RvbUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IHRydWUgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNhdGVnb3J5TmFtZXMgPSBjdXN0b21DYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiBjLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHsgRVhQRU5TRV9DQVRFR09SSUVTIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9jb25zdGFudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLkVYUEVOU0VfQ0FURUdPUklFUywgLi4uY3VzdG9tQ2F0ZWdvcnlOYW1lc10pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCB7IEVYUEVOU0VfQ0FURUdPUklFUyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvY29uc3RhbnRzXCIpO1xyXG4gICAgICAgIHJldHVybiBFWFBFTlNFX0NBVEVHT1JJRVM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWZW5kb3JzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgbGVhZEJyYW5jaDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJhbmNoTWFuYWdlciA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID09PSAnVEVBTV9MRUFERVInO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJyYW5jaElkID0gdXNlcj8ubGVhZEJyYW5jaD8uaWQgfHwgdXNlcj8uYnJhbmNoSWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7IGlzQWN0aXZlOiB0cnVlIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzQnJhbmNoTWFuYWdlciAmJiBhY3RpdmVCcmFuY2hJZCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZS5icmFuY2hJZCA9IGFjdGl2ZUJyYW5jaElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IGF3YWl0IHByaXNtYS52ZW5kb3IuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFua05hbWU6IHRydWUsIGJhbmtBY2NvdW50OiB0cnVlLCBlbWFpbDogdHJ1ZSwgcGhvbmU6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZlbmRvcnM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZW5kb3JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJyYW5jaEFuZERlcGFydG1lbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIHsgYnJhbmNoOiBcIlwiLCBkZXBhcnRtZW50OiBcIlwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBsZWFkQnJhbmNoOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4geyBicmFuY2g6IFwiXCIsIGRlcGFydG1lbnQ6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgLy8gRm9yIEJyYW5jaCBNYW5hZ2VycyAoVEVBTV9MRUFERVIpLCB0aGVpciBicmFuY2ggaXMgc3RvcmVkIGluIGBsZWFkQnJhbmNoYCBvciBgYnJhbmNoSWRgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IHVzZXIubGVhZEJyYW5jaD8ubmFtZSB8fCB1c2VyLmJyYW5jaElkIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudCB8fCBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geyBicmFuY2g6IGJyYW5jaE5hbWUsIGRlcGFydG1lbnQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgYnJhbmNoICYgZGVwYXJ0bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGJyYW5jaDogXCJcIiwgZGVwYXJ0bWVudDogXCJcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZUFjY291bnRzQWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdHlwZTogJ0VYUEVOU0UnIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29kZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlIGFjY291bnRzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGVBY2NvdW50U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIGlzIHRvbyBzaG9ydFwiKSxcclxuICAgIGNvZGU6IHouc3RyaW5nKCkubWluKDIsIFwiQ29kZSBpcyByZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlZCA9IENyZWF0ZUFjY291bnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcykgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCBpbnB1dCBwcm92aWRlZFwiIH07XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjb2RlIH0gPSB2YWxpZGF0ZWQuZGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGNvZGUgfSB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGVycm9yOiBcIkFuIGFjY291bnQgd2l0aCB0aGlzIEdMIENvZGUgYWxyZWFkeSBleGlzdHMuXCIgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0VYUEVOU0UnLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhY2NvdW50OiBuZXdBY2NvdW50IH07XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYWNjb3VudDpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVVBNGNzQix1TUFBQSJ9
}),
"[project]/src/app/dashboard/requisitions/new/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewRequisitionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/DatePicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$79eef7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:79eef7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$da58e1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:da58e1 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$2cee84__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:2cee84 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$6f05a4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:6f05a4 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$5c1be7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:5c1be7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$1646c3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/requisitions/new/data:1646c3 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function NewRequisitionPage() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [showAccessDenied, setShowAccessDenied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formMessage, setFormMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Quick vs Itemized mode
    const [formMode, setFormMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("quick");
    const [quickAmount, setQuickAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [quickCategory, setQuickCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isQuickCategoryOpen, setIsQuickCategoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quickCategorySearch, setQuickCategorySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Form fields
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("USD");
    const [branch, setBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [department, setDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [expectedDate, setExpectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [vendor, setVendor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSSCAEnabled, setIsSSCAEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStrictApproval, setIsStrictApproval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Payment method state
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [paymentReference, setPaymentReference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Custom Ledger
    const [customAccountId, setCustomAccountId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [expenseAccounts, setExpenseAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Inline account creation
    const [isCreatingAccount, setIsCreatingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAccountName, setNewAccountName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newAccountCode, setNewAccountCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [accountCreateError, setAccountCreateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSavingAccount, setIsSavingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Currency dropdown
    const [isCurrencyOpen, setIsCurrencyOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currencySearch, setCurrencySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const CURRENCIES = [
        // East Africa (prioritized)
        {
            code: 'KES',
            name: 'Kenyan Shilling',
            symbol: 'KSh',
            flag: '🇰🇪'
        },
        {
            code: 'UGX',
            name: 'Ugandan Shilling',
            symbol: 'USh',
            flag: '🇺🇬'
        },
        {
            code: 'TZS',
            name: 'Tanzanian Shilling',
            symbol: 'TSh',
            flag: '🇹🇿'
        },
        {
            code: 'RWF',
            name: 'Rwandan Franc',
            symbol: 'Fr',
            flag: '🇷🇼'
        },
        {
            code: 'ETB',
            name: 'Ethiopian Birr',
            symbol: 'Br',
            flag: '🇪🇹'
        },
        {
            code: 'SSP',
            name: 'South Sudan Pound',
            symbol: 'SSP',
            flag: '🇸🇸'
        },
        {
            code: 'SOS',
            name: 'Somali Shilling',
            symbol: 'Sh',
            flag: '🇸🇴'
        },
        {
            code: 'BIF',
            name: 'Burundian Franc',
            symbol: 'Fr',
            flag: '🇧🇮'
        },
        {
            code: 'DJF',
            name: 'Djiboutian Franc',
            symbol: 'Fr',
            flag: '🇩🇯'
        },
        // Rest of Africa
        {
            code: 'NGN',
            name: 'Nigerian Naira',
            symbol: '₦',
            flag: '🇳🇬'
        },
        {
            code: 'GHS',
            name: 'Ghanaian Cedi',
            symbol: '₵',
            flag: '🇬🇭'
        },
        {
            code: 'ZAR',
            name: 'South African Rand',
            symbol: 'R',
            flag: '🇿🇦'
        },
        {
            code: 'EGP',
            name: 'Egyptian Pound',
            symbol: 'E£',
            flag: '🇪🇬'
        },
        {
            code: 'XOF',
            name: 'West African CFA Franc',
            symbol: 'Fr',
            flag: '🌍'
        },
        // Major World
        {
            code: 'USD',
            name: 'US Dollar',
            symbol: '$',
            flag: '🇺🇸'
        },
        {
            code: 'EUR',
            name: 'Euro',
            symbol: '€',
            flag: '🇪🇺'
        },
        {
            code: 'GBP',
            name: 'British Pound',
            symbol: '£',
            flag: '🇬🇧'
        },
        {
            code: 'AED',
            name: 'UAE Dirham',
            symbol: 'د.إ',
            flag: '🇦🇪'
        },
        {
            code: 'CNY',
            name: 'Chinese Yuan',
            symbol: '¥',
            flag: '🇨🇳'
        },
        {
            code: 'INR',
            name: 'Indian Rupee',
            symbol: '₹',
            flag: '🇮🇳'
        },
        {
            code: 'JPY',
            name: 'Japanese Yen',
            symbol: '¥',
            flag: '🇯🇵'
        },
        {
            code: 'CAD',
            name: 'Canadian Dollar',
            symbol: 'CA$',
            flag: '🇨🇦'
        },
        {
            code: 'AUD',
            name: 'Australian Dollar',
            symbol: 'A$',
            flag: '🇦🇺'
        },
        {
            code: 'CHF',
            name: 'Swiss Franc',
            symbol: 'Fr',
            flag: '🇨🇭'
        },
        {
            code: 'SAR',
            name: 'Saudi Riyal',
            symbol: '﷼',
            flag: '🇸🇦'
        }
    ];
    const getCurrencySymbol = (code)=>{
        return CURRENCIES.find((c)=>c.code === code)?.symbol ?? code;
    };
    const selectedCurrency = CURRENCIES.find((c)=>c.code === currency) ?? CURRENCIES[14]; // USD fallback
    const filteredCurrencies = CURRENCIES.filter((c)=>c.code.toLowerCase().includes(currencySearch.toLowerCase()) || c.name.toLowerCase().includes(currencySearch.toLowerCase()));
    // Vendor list
    const [vendors, setVendors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vendorSearch, setVendorSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isVendorOpen, setIsVendorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedVendorId, setSelectedVendorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Items management
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showItemForm, setShowItemForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Current item being added
    const [itemTitle, setItemTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [itemDescription, setItemDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [itemQuantity, setItemQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1");
    const [itemUnitPrice, setItemUnitPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [itemCategory, setItemCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [itemIsRecurring, setItemIsRecurring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [itemFrequency, setItemFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("MONTHLY");
    const [itemStartDate, setItemStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Categories
    const [allCategories, setAllCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCategoryOpen, setIsCategoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categorySearch, setCategorySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const CATEGORY_GROUPS = [
        {
            label: "📌 Fixed Recurring",
            items: [
                "Rent",
                "Internet & Connectivity",
                "Airtime & Communication",
                "Fuel Allocation",
                "Hired Bike Payments"
            ]
        },
        {
            label: "⚙️ Operational",
            items: [
                "Stationery",
                "Office Supplies",
                "Meetings & Conferences",
                "Accommodation",
                "Emergency Field Expenses"
            ]
        },
        {
            label: "💰 Petty Cash",
            items: [
                "Electricity",
                "Fuel",
                "Repairs",
                "Maintenance",
                "Water"
            ]
        },
        {
            label: "📦 Procurement",
            items: [
                "ICT Equipment",
                "Furniture",
                "Hardware"
            ]
        },
        {
            label: "🗂 General",
            items: allCategories.filter((c)=>![
                    "Rent",
                    "Internet & Connectivity",
                    "Airtime & Communication",
                    "Fuel Allocation",
                    "Hired Bike Payments",
                    "Stationery",
                    "Office Supplies",
                    "Meetings & Conferences",
                    "Accommodation",
                    "Emergency Field Expenses",
                    "Electricity",
                    "Fuel",
                    "Repairs",
                    "Maintenance",
                    "Water",
                    "ICT Equipment",
                    "Furniture",
                    "Hardware"
                ].includes(c))
        }
    ];
    const filteredCategoryGroups = CATEGORY_GROUPS.map((group)=>({
            ...group,
            items: group.items.filter((c)=>c.toLowerCase().includes(categorySearch.toLowerCase()))
        })).filter((group)=>group.items.length > 0);
    // flat list for backwards compat
    const filteredCategories = allCategories.filter((c)=>c.toLowerCase().includes(categorySearch.toLowerCase()));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCategories();
        loadVendors();
        loadUserDetails();
        loadAccounts();
    }, []);
    const loadAccounts = async ()=>{
        const accs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$5c1be7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getExpenseAccountsAction"])();
        setExpenseAccounts(accs);
    };
    const loadUserDetails = async ()=>{
        const details = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$6f05a4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserBranchAndDepartmentAction"])();
        if (details.branch) setBranch(details.branch);
        if (details.department) setDepartment(details.department);
    };
    const loadVendors = async ()=>{
        const vens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$2cee84__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getVendorsAction"])();
        setVendors(vens);
    };
    const loadCategories = async ()=>{
        const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$da58e1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCategoriesAction"])();
        setAllCategories(categories);
    };
    // Auto-fill payment details when vendor changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!vendor || vendors.length === 0) return;
        // Find if this vendor exists in our loaded list
        const matchedVendor = vendors.find((v)=>v.name === vendor);
        if (matchedVendor && matchedVendor.preferredPaymentMethod) {
            setPaymentMethod(matchedVendor.preferredPaymentMethod);
            setPaymentReference(matchedVendor.bankAccount || "");
        } else {
        // Optional: clear if they type a custom vendor that isn't saved
        // setPaymentMethod("");
        // setPaymentReference("");
        }
    }, [
        vendor,
        vendors
    ]);
    const addItem = ()=>{
        if (!itemTitle.trim() || !itemCategory || !itemUnitPrice || parseFloat(itemUnitPrice) <= 0) {
            setFormMessage("Please fill in all item fields");
            return;
        }
        const newItem = {
            id: Date.now().toString(),
            title: itemTitle,
            description: itemDescription,
            quantity: parseInt(itemQuantity) || 1,
            unitPrice: parseFloat(itemUnitPrice),
            category: itemCategory,
            ...itemIsRecurring && {
                isRecurring: true,
                frequency: itemFrequency,
                startDate: itemStartDate?.toISOString() || new Date().toISOString()
            }
        };
        setItems([
            ...items,
            newItem
        ]);
        // Reset item form
        setItemTitle("");
        setItemDescription("");
        setItemQuantity("1");
        setItemUnitPrice("");
        setItemCategory("");
        setItemIsRecurring(false);
        setItemFrequency("MONTHLY");
        setItemStartDate(undefined);
        setShowItemForm(false);
        setFormMessage("");
    };
    const removeItem = (id)=>{
        setItems(items.filter((item)=>item.id !== id));
    };
    const calculateTotal = ()=>{
        return items.reduce((sum, item)=>sum + item.quantity * item.unitPrice, 0);
    };
    const handleCreateAccount = async ()=>{
        setAccountCreateError("");
        if (!newAccountName.trim() || !newAccountCode.trim()) {
            setAccountCreateError("Name and Code are required.");
            return;
        }
        setIsSavingAccount(true);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$1646c3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createExpenseAccountAction"])({
            name: newAccountName,
            code: newAccountCode
        });
        setIsSavingAccount(false);
        if (res?.error) {
            setAccountCreateError(res.error);
        } else if (res?.success && res.account) {
            setExpenseAccounts([
                ...expenseAccounts,
                res.account
            ]);
            setCustomAccountId(res.account.id);
            setIsCreatingAccount(false);
            setNewAccountName("");
            setNewAccountCode("");
        }
    };
    const handleSubmit = async (e)=>{
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
            resolvedItems = [
                {
                    id: Date.now().toString(),
                    title: title,
                    description: description,
                    quantity: 1,
                    unitPrice: amt,
                    category: quickCategory
                }
            ];
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$requisitions$2f$new$2f$data$3a$79eef7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createRequisitionWithItems"])(formData);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto pb-24 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "bg-white border border-gray-300 rounded-xl shadow-sm flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[88px] px-6 flex items-center justify-between bg-gradient-to-r from-green-100 to-white border-b border-gray-200 rounded-t-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard/requisitions",
                                    className: "p-2 rounded-lg hover:bg-white/50 text-gray-500 hover:text-gray-900 transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretLeft"], {
                                        className: "text-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/pos-terminal.png",
                                                alt: "Requisition Icon",
                                                className: "w-14 h-14 object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 387,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-base font-semibold text-gray-900",
                                                    children: "New Requisition"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Submit a purchase or reimbursement request"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                            lineNumber: 381,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                        lineNumber: 380,
                        columnNumber: 17
                    }, this),
                    formMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-rose-50 border-l-4 border-rose-500 p-4 mx-6 mt-6 rounded-r-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                        className: "h-5 w-5 text-rose-400 transform rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-rose-700",
                                        children: formMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 405,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                            lineNumber: 400,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                        lineNumber: 399,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pt-5 pb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center bg-gray-100 rounded-xl p-1 gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setFormMode("quick"),
                                        className: `px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${formMode === "quick" ? "bg-white text-[#29258D] shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                                        children: "⚡ Quick Request"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setFormMode("itemized"),
                                        className: `px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${formMode === "itemized" ? "bg-white text-[#29258D] shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                                        children: "📋 Itemized Request"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 413,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-400 mt-2 mb-0",
                                children: formMode === "quick" ? "For simple requests — just describe what you need and enter the total amount." : "For procurement — add line items with quantities and unit prices."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 437,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                        lineNumber: 412,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 lg:p-8 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4",
                                        children: "Request details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                        children: [
                                                            "Requisition title ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 55
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        required: true,
                                                        value: title,
                                                        onChange: (e)=>setTitle(e.target.value),
                                                        className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:border-[#29258D] focus:ring-[#29258D]/10 transition-all shadow-none placeholder:text-gray-300",
                                                        placeholder: "What is this request for?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 33
                                                    }, this),
                                                    errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-rose-500 mt-1.5 font-medium flex items-center gap-1 leading-none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                                                className: "rotate-45"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 41
                                                            }, this),
                                                            " ",
                                                            errors.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 29
                                            }, this),
                                            ("TURBOPACK compile-time value", "Capital Pay") !== "Pesanest" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `border rounded-xl p-4 transition-all duration-300 ${isSSCAEnabled ? 'bg-[#29258D]/5 border-[#29258D]/20 shadow-sm' : 'bg-white border-gray-200 hover:border-gray-300'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-2 rounded-lg shrink-0 ${isSSCAEnabled ? 'bg-[#29258D] text-white' : 'bg-gray-100 text-gray-500'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                                                className: "text-lg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: "isSSCA",
                                                                                    className: "text-sm font-semibold text-gray-900 block cursor-pointer select-none",
                                                                                    children: "South Sudan civil aviation request"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                    lineNumber: 479,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-gray-500 mt-0.5 leading-tight",
                                                                                    children: "Enable expedited workflow for Civil Aviation fund requests."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                    lineNumber: 482,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                            lineNumber: 478,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative inline-flex items-center cursor-pointer",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "isSSCA",
                                                                                className: "cursor-pointer flex items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        id: "isSSCA",
                                                                                        checked: isSSCAEnabled,
                                                                                        onChange: (e)=>{
                                                                                            if (session?.user?.role !== 'SYSTEM_ADMIN') {
                                                                                                e.preventDefault();
                                                                                                setShowAccessDenied(true);
                                                                                                return;
                                                                                            }
                                                                                            setIsSSCAEnabled(e.target.checked);
                                                                                        },
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 488,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#29258D]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#29258D]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 502,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 487,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                            lineNumber: 486,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 41
                                                                }, this),
                                                                isSSCAEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 pt-4 border-t border-[#29258D]/10 animate-in fade-in slide-in-from-top-2 duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                id: "isStrictApproval",
                                                                                checked: isStrictApproval,
                                                                                onChange: (e)=>setIsStrictApproval(e.target.checked),
                                                                                className: "h-4 w-4 text-[#29258D] focus:ring-[#29258D] border-gray-300 rounded cursor-pointer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 510,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "isStrictApproval",
                                                                                className: "cursor-pointer select-none",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs font-semibold text-gray-900 block",
                                                                                        children: "Require strict approval"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 518,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] text-gray-500 block",
                                                                                        children: "Force Manager + Finance approval regardless of amount."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 519,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 517,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 509,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                        children: [
                                                            "Justification ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 51
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: description,
                                                        onChange: (e)=>setDescription(e.target.value),
                                                        className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-[#29258D] focus:ring-[#29258D]/10 transition-all min-h-[100px] shadow-none resize-none placeholder:text-gray-300",
                                                        placeholder: "Explain the business need and expected impact..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 33
                                                    }, this),
                                                    errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-rose-500 mt-1.5 font-medium flex items-center gap-1 leading-none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                                                className: "rotate-45"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 41
                                                            }, this),
                                                            " ",
                                                            errors.description
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 529,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 449,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 447,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 flex-1",
                                            children: [
                                                formMode === "quick" ? "Amount & Category" : "Items",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 88
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                            lineNumber: 552,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 25
                                    }, this),
                                    formMode === "quick" ? /* ── Quick mode: single amount + category ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                        children: [
                                                            "Total Amount ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 50
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm",
                                                                children: getCurrencySymbol(currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                step: "0.01",
                                                                min: "0",
                                                                value: quickAmount,
                                                                onChange: (e)=>setQuickAmount(e.target.value),
                                                                className: "w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-[#29258D] focus:ring-[#29258D]/10 transition-all font-mono",
                                                                placeholder: "0.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                        children: "Currency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>setIsCurrencyOpen(!isCurrencyOpen),
                                                                className: "w-full bg-white border border-gray-200 rounded-xl min-h-[42px] px-3 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2 text-sm font-semibold text-gray-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-lg leading-none",
                                                                                children: selectedCurrency.flag
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 590,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: selectedCurrency.code
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 591,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-400 font-normal text-xs",
                                                                                children: selectedCurrency.symbol
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 592,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 589,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                                                        className: `text-gray-400 transition-transform text-sm ${isCurrencyOpen ? 'rotate-180' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 594,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 37
                                                            }, this),
                                                            isCurrencyOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100",
                                                                style: {
                                                                    minWidth: '240px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"], {
                                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 599,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                autoFocus: true,
                                                                                placeholder: "Search currency...",
                                                                                value: currencySearch,
                                                                                onChange: (e)=>setCurrencySearch(e.target.value),
                                                                                onClick: (e)=>e.stopPropagation(),
                                                                                className: "w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 600,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 598,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "max-h-52 overflow-y-auto space-y-0.5",
                                                                        children: filteredCurrencies.map((cur)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>{
                                                                                    setCurrency(cur.code);
                                                                                    setIsCurrencyOpen(false);
                                                                                    setCurrencySearch("");
                                                                                },
                                                                                className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${currency === cur.code ? 'bg-[#29258D]/8 border border-[#29258D]/20' : 'hover:bg-gray-50 border border-transparent'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xl leading-none w-7 text-center",
                                                                                        children: cur.flag
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 605,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1 min-w-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: `text-sm font-bold ${currency === cur.code ? 'text-[#29258D]' : 'text-gray-900'}`,
                                                                                                children: cur.code
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 607,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[10px] text-gray-400 truncate",
                                                                                                children: cur.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 608,
                                                                                                columnNumber: 61
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 606,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs font-mono text-gray-400 shrink-0",
                                                                                        children: cur.symbol
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 610,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    currency === cur.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-2 h-2 rounded-full bg-[#29258D] shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 611,
                                                                                        columnNumber: 83
                                                                                    }, this)
                                                                                ]
                                                                            }, cur.code, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 604,
                                                                                columnNumber: 53
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 602,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 597,
                                                                columnNumber: 41
                                                            }, this),
                                                            isCurrencyOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "fixed inset-0 z-40",
                                                                onClick: ()=>setIsCurrencyOpen(false)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 56
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 582,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                        children: [
                                                            "Category ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 624,
                                                                columnNumber: 46
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>setIsQuickCategoryOpen(!isQuickCategoryOpen),
                                                                className: "w-full bg-white border border-gray-200 rounded-xl min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between transition-colors hover:border-[#29258D]",
                                                                children: [
                                                                    quickCategory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-gray-900",
                                                                        children: quickCategory
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 632,
                                                                        columnNumber: 45
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: "Select a category..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 634,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                                                        className: `text-gray-400 transition-transform ${isQuickCategoryOpen ? 'rotate-180' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 636,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 627,
                                                                columnNumber: 37
                                                            }, this),
                                                            isQuickCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"], {
                                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 641,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                autoFocus: true,
                                                                                placeholder: "Search categories...",
                                                                                value: quickCategorySearch,
                                                                                onChange: (e)=>setQuickCategorySearch(e.target.value),
                                                                                onClick: (e)=>e.stopPropagation(),
                                                                                className: "w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 642,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 640,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "max-h-56 overflow-y-auto space-y-3 pr-1",
                                                                        children: CATEGORY_GROUPS.map((group)=>{
                                                                            const filtered = group.items.filter((c)=>c.toLowerCase().includes(quickCategorySearch.toLowerCase()));
                                                                            if (!filtered.length) return null;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 px-1",
                                                                                        children: group.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 650,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-wrap gap-1.5",
                                                                                        children: filtered.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                onClick: ()=>{
                                                                                                    setQuickCategory(cat);
                                                                                                    setIsQuickCategoryOpen(false);
                                                                                                    setQuickCategorySearch("");
                                                                                                },
                                                                                                className: `px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${quickCategory === cat ? 'bg-[#29258D] border-[#29258D] text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-[#29258D]/40 hover:bg-[#29258D]/5 hover:text-[#29258D]'}`,
                                                                                                children: cat
                                                                                            }, cat, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 653,
                                                                                                columnNumber: 69
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 651,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, group.label, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 649,
                                                                                columnNumber: 57
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 644,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 639,
                                                                columnNumber: 41
                                                            }, this),
                                                            isQuickCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "fixed inset-0 z-40",
                                                                onClick: ()=>setIsQuickCategoryOpen(false)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 622,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 559,
                                        columnNumber: 25
                                    }, this) : /* ── Itemized mode: existing multi-item list ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 mb-4",
                                                children: [
                                                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-gray-200 rounded-lg p-4 flex items-start justify-between hover:border-gray-300 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start justify-between mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "font-semibold text-sm text-gray-900",
                                                                                        children: item.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 680,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-500 mt-0.5",
                                                                                        children: item.description
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 682,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 679,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeItem(item.id),
                                                                                className: "p-1.5 hover:bg-rose-50 rounded-lg transition-colors group ml-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiTrash"], {
                                                                                    className: "text-gray-400 group-hover:text-rose-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                    lineNumber: 690,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 685,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-4 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "px-2 py-1 bg-[#29258D]/10 text-[#29258D] rounded-md font-medium",
                                                                                children: item.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 694,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: [
                                                                                    "Qty: ",
                                                                                    item.quantity
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 697,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: [
                                                                                    "@ ",
                                                                                    getCurrencySymbol(currency),
                                                                                    item.unitPrice.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 700,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            item.isRecurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-bold tracking-wide uppercase border border-blue-100",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiArrowsClockwise"], {}, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 705,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    " ",
                                                                                    item.frequency
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 704,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-gray-900 ml-auto",
                                                                                children: [
                                                                                    getCurrencySymbol(currency),
                                                                                    (item.quantity * item.unitPrice).toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 708,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 693,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, item.id, false, {
                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 37
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[#29258D]/5 border border-[#29258D]/20 rounded-lg p-4 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-sm text-gray-900",
                                                                children: "Total Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 718,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-lg text-[#29258D]",
                                                                children: [
                                                                    getCurrencySymbol(currency),
                                                                    calculateTotal().toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 717,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 29
                                            }, this),
                                            showItemForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white border border-[#29258D]/30 rounded-lg p-4 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-sm text-gray-900",
                                                                children: "Add New Item"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 730,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowItemForm(false),
                                                                className: "p-1 hover:bg-gray-100 rounded transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiX"], {
                                                                    className: "text-gray-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                    lineNumber: 736,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 731,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "md:col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                        children: [
                                                                            "Item Title ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-rose-500",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 743,
                                                                                columnNumber: 56
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 742,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: itemTitle,
                                                                        onChange: (e)=>setItemTitle(e.target.value),
                                                                        className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all",
                                                                        placeholder: "e.g., Laptop Computer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 745,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "md:col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                        children: "Description"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 755,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: itemDescription,
                                                                        onChange: (e)=>setItemDescription(e.target.value),
                                                                        className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all",
                                                                        placeholder: "Optional details..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 756,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 754,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                        children: [
                                                                            "Category ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-rose-500",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 767,
                                                                                columnNumber: 54
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 766,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                onClick: ()=>setIsCategoryOpen(!isCategoryOpen),
                                                                                className: "w-full bg-white border border-gray-200 rounded-lg min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between transition-colors hover:border-[#29258D]",
                                                                                children: [
                                                                                    itemCategory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm text-gray-900",
                                                                                        children: itemCategory
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 775,
                                                                                        columnNumber: 53
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm text-gray-400",
                                                                                        children: "Select category..."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 777,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                                                                        className: `text-gray-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 779,
                                                                                        columnNumber: 49
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 770,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            isCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative mb-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"], {
                                                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 785,
                                                                                                columnNumber: 57
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                autoFocus: true,
                                                                                                placeholder: "Search categories...",
                                                                                                value: categorySearch,
                                                                                                onChange: (e)=>setCategorySearch(e.target.value),
                                                                                                onClick: (e)=>e.stopPropagation(),
                                                                                                className: "w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 786,
                                                                                                columnNumber: 57
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 784,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "max-h-56 overflow-y-auto space-y-3 pr-1",
                                                                                        children: filteredCategoryGroups.length > 0 ? filteredCategoryGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 px-1",
                                                                                                        children: group.label
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                        lineNumber: 800,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex flex-wrap gap-1.5",
                                                                                                        children: group.items.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                type: "button",
                                                                                                                onClick: ()=>{
                                                                                                                    setItemCategory(cat);
                                                                                                                    setIsCategoryOpen(false);
                                                                                                                    setCategorySearch("");
                                                                                                                },
                                                                                                                className: `px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${itemCategory === cat ? 'bg-[#29258D] border-[#29258D] text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-[#29258D]/40 hover:bg-[#29258D]/5 hover:text-[#29258D]'}`,
                                                                                                                children: cat
                                                                                                            }, cat, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                                lineNumber: 803,
                                                                                                                columnNumber: 77
                                                                                                            }, this))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                        lineNumber: 801,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, group.label, true, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 799,
                                                                                                columnNumber: 65
                                                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "py-4 text-center text-gray-400 text-xs",
                                                                                            children: "No categories found"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                            lineNumber: 823,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 796,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 783,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            isCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "fixed inset-0 z-40",
                                                                                onClick: ()=>setIsCategoryOpen(false)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 831,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 769,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                        children: "Currency"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 837,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                onClick: ()=>setIsCurrencyOpen(!isCurrencyOpen),
                                                                                className: "w-full bg-white border border-gray-200 rounded-lg min-h-[42px] px-3 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex items-center gap-2 text-sm font-semibold text-gray-900",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-lg leading-none",
                                                                                                children: selectedCurrency.flag
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 844,
                                                                                                columnNumber: 53
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: selectedCurrency.code
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 845,
                                                                                                columnNumber: 53
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-gray-400 font-normal text-xs",
                                                                                                children: selectedCurrency.symbol
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 846,
                                                                                                columnNumber: 53
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 843,
                                                                                        columnNumber: 49
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                                                                        className: `text-gray-400 transition-transform text-sm ${isCurrencyOpen ? 'rotate-180' : ''}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 848,
                                                                                        columnNumber: 49
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 839,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            isCurrencyOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100",
                                                                                style: {
                                                                                    minWidth: '240px'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative mb-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"], {
                                                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 853,
                                                                                                columnNumber: 57
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                autoFocus: true,
                                                                                                placeholder: "Search currency...",
                                                                                                value: currencySearch,
                                                                                                onChange: (e)=>setCurrencySearch(e.target.value),
                                                                                                onClick: (e)=>e.stopPropagation(),
                                                                                                className: "w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 854,
                                                                                                columnNumber: 57
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 852,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "max-h-52 overflow-y-auto space-y-0.5",
                                                                                        children: filteredCurrencies.map((cur)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                onClick: ()=>{
                                                                                                    setCurrency(cur.code);
                                                                                                    setIsCurrencyOpen(false);
                                                                                                    setCurrencySearch("");
                                                                                                },
                                                                                                className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${currency === cur.code ? 'bg-[#29258D]/8 border border-[#29258D]/20' : 'hover:bg-gray-50 border border-transparent'}`,
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-xl leading-none w-7 text-center",
                                                                                                        children: cur.flag
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                        lineNumber: 875,
                                                                                                        columnNumber: 65
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex-1 min-w-0",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: `text-sm font-bold ${currency === cur.code ? 'text-[#29258D]' : 'text-gray-900'}`,
                                                                                                                children: cur.code
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                                lineNumber: 877,
                                                                                                                columnNumber: 69
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "text-[10px] text-gray-400 truncate",
                                                                                                                children: cur.name
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                                lineNumber: 878,
                                                                                                                columnNumber: 69
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                        lineNumber: 876,
                                                                                                        columnNumber: 65
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-xs font-mono text-gray-400 shrink-0",
                                                                                                        children: cur.symbol
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                        lineNumber: 880,
                                                                                                        columnNumber: 65
                                                                                                    }, this),
                                                                                                    currency === cur.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "w-2 h-2 rounded-full bg-[#29258D] shrink-0"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                        lineNumber: 882,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, cur.code, true, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 866,
                                                                                                columnNumber: 61
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 864,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 851,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            isCurrencyOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "fixed inset-0 z-40",
                                                                                onClick: ()=>setIsCurrencyOpen(false)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 889,
                                                                                columnNumber: 64
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 838,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                        children: [
                                                                            "Quantity ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-rose-500",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 895,
                                                                                columnNumber: 54
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 894,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "1",
                                                                        value: itemQuantity,
                                                                        onChange: (e)=>setItemQuantity(e.target.value),
                                                                        className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 897,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 893,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                        children: [
                                                                            "Unit Price ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-rose-500",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 908,
                                                                                columnNumber: 56
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 907,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm",
                                                                                children: getCurrencySymbol(currency)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 911,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                step: "0.01",
                                                                                min: "0",
                                                                                value: itemUnitPrice,
                                                                                onChange: (e)=>setItemUnitPrice(e.target.value),
                                                                                className: "w-full bg-white border border-gray-200 rounded-lg pl-8 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all font-mono",
                                                                                placeholder: "0.00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 914,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 910,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 906,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "md:col-span-2 mt-2 pt-4 border-t border-gray-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                        className: "text-sm font-semibold text-gray-900",
                                                                                        children: "Make Recurring"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 930,
                                                                                        columnNumber: 49
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-500",
                                                                                        children: "Automatically generate a new requisition for this item on a schedule"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 931,
                                                                                        columnNumber: 49
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 929,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>setItemIsRecurring(!itemIsRecurring),
                                                                                className: `relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29258D] focus-visible:ring-offset-2 shadow-inner ${itemIsRecurring ? 'bg-[#29258D]' : 'bg-gray-200 hover:bg-gray-300'}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-300 ease-in-out ${itemIsRecurring ? 'translate-x-5' : 'translate-x-0'}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                    lineNumber: 938,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 933,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 928,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    itemIsRecurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-top-2 duration-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                                        children: "Frequency"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 945,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                        value: itemFrequency,
                                                                                        onChange: (e)=>setItemFrequency(e.target.value),
                                                                                        className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:border-[#29258D] focus:ring-[#29258D] transition-all",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "DAILY",
                                                                                                children: "Daily"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 951,
                                                                                                columnNumber: 57
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "WEEKLY",
                                                                                                children: "Weekly"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 952,
                                                                                                columnNumber: 57
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "MONTHLY",
                                                                                                children: "Monthly"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 953,
                                                                                                columnNumber: 57
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "QUARTERLY",
                                                                                                children: "Quarterly"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 954,
                                                                                                columnNumber: 57
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "YEARLY",
                                                                                                children: "Yearly"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                                lineNumber: 955,
                                                                                                columnNumber: 57
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 946,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 944,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                                        children: "First Run Date"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 959,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatePicker"], {
                                                                                        value: itemStartDate,
                                                                                        onChange: setItemStartDate,
                                                                                        placeholder: "When should this start?",
                                                                                        className: "w-full"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                        lineNumber: 960,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 958,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 943,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 927,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: addItem,
                                                                className: "flex-1 px-4 py-2.5 bg-[#29258D] text-white rounded-lg font-medium text-xs hover:bg-[#29258D]/90 transition-all flex items-center justify-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiPlus"], {
                                                                        className: "text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 978,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    "Add Item"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 973,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowItemForm(false),
                                                                className: "px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium text-xs hover:bg-gray-50 transition-all",
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 981,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 972,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 728,
                                                columnNumber: 29
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowItemForm(true),
                                                className: "w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#29258D] hover:text-[#29258D] hover:bg-[#29258D]/5 transition-all flex items-center justify-center gap-2 font-medium text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiPlus"], {
                                                        className: "text-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 33
                                                    }, this),
                                                    "Add Item"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 991,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 670,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 550,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4",
                                        children: "Logistics & accounting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 1006,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-medium text-gray-700",
                                                                children: "Custom Ledger Account (Optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1010,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setIsCreatingAccount(true),
                                                                className: "text-[#29258D] text-[10px] font-semibold hover:underline flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiPlus"], {}, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1016,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    " Create New"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1011,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1009,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: customAccountId,
                                                        onChange: (e)=>setCustomAccountId(e.target.value),
                                                        className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Default (Auto-mapped by Category)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1024,
                                                                columnNumber: 37
                                                            }, this),
                                                            expenseAccounts.map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: acc.id,
                                                                    children: [
                                                                        acc.code,
                                                                        " - ",
                                                                        acc.name
                                                                    ]
                                                                }, acc.id, true, {
                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                    lineNumber: 1026,
                                                                    columnNumber: 41
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1019,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-gray-500 mt-1",
                                                        children: "Specify an exact GL account for this request to override default behavior."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1031,
                                                        columnNumber: 33
                                                    }, this),
                                                    isCreatingAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 p-4 bg-gray-50 border border-gray-200 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-xs font-bold text-gray-900",
                                                                        children: "Create GL Account"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1036,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setIsCreatingAccount(false),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiX"], {
                                                                            className: "text-gray-400 hover:text-gray-700"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                            lineNumber: 1037,
                                                                            columnNumber: 111
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1037,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1035,
                                                                columnNumber: 41
                                                            }, this),
                                                            accountCreateError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-500 text-[10px] mb-2",
                                                                children: accountCreateError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1039,
                                                                columnNumber: 64
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-3 mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-[10px] font-medium text-gray-700 mb-1",
                                                                                children: "GL Code"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1042,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: newAccountCode,
                                                                                onChange: (e)=>setNewAccountCode(e.target.value),
                                                                                placeholder: "e.g. 6050",
                                                                                className: "w-full text-xs px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-[#29258D]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1043,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1041,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-[10px] font-medium text-gray-700 mb-1",
                                                                                children: "Account Name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1046,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: newAccountName,
                                                                                onChange: (e)=>setNewAccountName(e.target.value),
                                                                                placeholder: "e.g. Special Event",
                                                                                className: "w-full text-xs px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-[#29258D]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1047,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1045,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1040,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleCreateAccount,
                                                                disabled: isSavingAccount,
                                                                className: "w-full bg-[#29258D] text-white text-xs font-medium py-2 rounded flex justify-center items-center hover:bg-[#29258D]/90 disabled:opacity-50 transition-colors",
                                                                children: isSavingAccount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiArrowsClockwise"], {
                                                                    className: "animate-spin text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                    lineNumber: 1056,
                                                                    columnNumber: 64
                                                                }, this) : "Save Account"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1050,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 29
                                            }, this),
                                            ("TURBOPACK compile-time value", "Capital Pay") === "PesaStack" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                children: "Target Branch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1065,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: branch,
                                                                onChange: (e)=>setBranch(e.target.value),
                                                                className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all",
                                                                placeholder: "e.g. Headquarters"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1066,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1064,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                                children: "Department"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1075,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: department,
                                                                onChange: (e)=>setDepartment(e.target.value),
                                                                className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all",
                                                                placeholder: "e.g. IT, Operations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1076,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1074,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                        children: "Expected Delivery Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1087,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatePicker"], {
                                                        value: expectedDate,
                                                        onChange: setExpectedDate,
                                                        placeholder: "When do you need this?",
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1088,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 1086,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                        children: "Preferred Vendor (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1096,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>setIsVendorOpen(!isVendorOpen),
                                                                className: "w-full bg-white border border-gray-200 rounded-lg min-h-[42px] px-4 py-2.5 cursor-pointer flex items-center justify-between hover:border-[#29258D] transition-colors",
                                                                children: [
                                                                    vendor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-gray-900 font-medium flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiStorefront"], {
                                                                                className: "text-[#29258D]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1104,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            " ",
                                                                            vendor
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1103,
                                                                        columnNumber: 45
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-gray-400 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiStorefront"], {}, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1108,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            " Select or search vendor..."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1107,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretDown"], {
                                                                        className: `text-gray-400 transition-transform ${isVendorOpen ? 'rotate-180' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1111,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1098,
                                                                columnNumber: 37
                                                            }, this),
                                                            isVendorOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95 duration-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiMagnifyingGlass"], {
                                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1116,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                autoFocus: true,
                                                                                placeholder: "Search vendors...",
                                                                                value: vendorSearch,
                                                                                onChange: (e)=>setVendorSearch(e.target.value),
                                                                                onClick: (e)=>e.stopPropagation(),
                                                                                className: "w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:bg-white transition-all"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1117,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1115,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "max-h-52 overflow-y-auto space-y-1",
                                                                        children: [
                                                                            vendorSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>{
                                                                                    setVendor(vendorSearch);
                                                                                    setIsVendorOpen(false);
                                                                                    setVendorSearch("");
                                                                                },
                                                                                className: "w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-[#29258D] hover:bg-[#29258D]/5 transition-colors",
                                                                                children: [
                                                                                    '+ Use "',
                                                                                    vendorSearch,
                                                                                    '" as vendor'
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1129,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            vendors.filter((v)=>v.name.toLowerCase().includes(vendorSearch.toLowerCase())).map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        setVendor(v.name);
                                                                                        setSelectedVendorId(v.id);
                                                                                        setIsVendorOpen(false);
                                                                                        setVendorSearch("");
                                                                                        // Auto-populate payment details from vendor
                                                                                        if (v.preferredPaymentMethod) {
                                                                                            setPaymentMethod(v.preferredPaymentMethod);
                                                                                            setPaymentReference(v.bankAccount || "");
                                                                                        }
                                                                                    },
                                                                                    className: "w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-900 group-hover:text-[#29258D] transition-colors",
                                                                                            children: v.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                            lineNumber: 1154,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        v.bankName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[10px] text-gray-400 mt-0.5",
                                                                                            children: [
                                                                                                v.bankName,
                                                                                                v.bankAccount ? ` · Acc: ${v.bankAccount}` : ''
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                            lineNumber: 1156,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, v.id, true, {
                                                                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                    lineNumber: 1138,
                                                                                    columnNumber: 57
                                                                                }, this)),
                                                                            vendors.filter((v)=>v.name.toLowerCase().includes(vendorSearch.toLowerCase())).length === 0 && !vendorSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-center text-xs text-gray-400 py-4",
                                                                                children: "No vendors yet. Type a name to use manually."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                                lineNumber: 1161,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                        lineNumber: 1127,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1114,
                                                                columnNumber: 41
                                                            }, this),
                                                            isVendorOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "fixed inset-0 z-40",
                                                                onClick: ()=>setIsVendorOpen(false)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                                lineNumber: 1166,
                                                                columnNumber: 54
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1097,
                                                        columnNumber: 33
                                                    }, this),
                                                    vendor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setVendor("");
                                                            setSelectedVendorId("");
                                                        },
                                                        className: "text-[10px] text-rose-500 mt-1.5 hover:underline",
                                                        children: "Clear vendor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1169,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 1095,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 1007,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 1005,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-1",
                                        children: "Payment method"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 1179,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mb-4",
                                        children: "How should this be paid when approved? Finance will use this to prepare the right channel."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 1180,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 md:grid-cols-6 gap-2 mb-4",
                                        children: [
                                            {
                                                value: 'MPESA_TILL',
                                                label: 'M-Pesa Till',
                                                img: '/pay/Mpesa-Logo.png'
                                            },
                                            {
                                                value: 'MPESA_PAYBILL',
                                                label: 'M-Pesa Paybill',
                                                img: '/pay/Mpesa-Logo.png'
                                            },
                                            {
                                                value: 'BANK_TRANSFER',
                                                label: 'Bank Transfer',
                                                img: '/pay/accepted.png'
                                            },
                                            {
                                                value: 'AIRTEL_MONEY',
                                                label: 'Airtel Money',
                                                img: '/pay/Airtel-Logo.png'
                                            },
                                            {
                                                value: 'CASH',
                                                label: 'Cash',
                                                img: '/pay/money-stack.png'
                                            },
                                            {
                                                value: 'CHEQUE',
                                                label: 'Cheque',
                                                img: '/pay/cheque.png'
                                            }
                                        ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setPaymentMethod(opt.value);
                                                    setPaymentReference("");
                                                },
                                                className: `relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${paymentMethod === opt.value ? 'border-[#29258D] bg-[#29258D]/5 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'}`,
                                                children: [
                                                    paymentMethod === opt.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-[#29258D] flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                                            className: "text-white text-[8px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                            lineNumber: 1201,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1200,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 relative flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: opt.img,
                                                            alt: opt.label,
                                                            width: 32,
                                                            height: 32,
                                                            className: "object-contain w-full h-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                            lineNumber: 1205,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[10px] font-bold text-center leading-tight ${paymentMethod === opt.value ? 'text-[#29258D]' : 'text-gray-500'}`,
                                                        children: opt.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                        lineNumber: 1213,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, opt.value, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 1190,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 25
                                    }, this),
                                    paymentMethod && paymentMethod !== 'CASH' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1.5",
                                                children: [
                                                    paymentMethod === 'MPESA_TILL' && 'M-Pesa Till Number',
                                                    paymentMethod === 'MPESA_PAYBILL' && 'Paybill Number & Account Number',
                                                    paymentMethod === 'BANK_TRANSFER' && 'Bank Account Number',
                                                    paymentMethod === 'AIRTEL_MONEY' && 'Airtel Money Phone Number',
                                                    paymentMethod === 'CHEQUE' && 'Cheque / Reference Number'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 1222,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: paymentReference,
                                                onChange: (e)=>setPaymentReference(e.target.value),
                                                className: "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] transition-all font-mono tracking-wide",
                                                placeholder: paymentMethod === 'MPESA_TILL' ? 'e.g. 123456' : paymentMethod === 'MPESA_PAYBILL' ? 'e.g. 247247 / account number' : paymentMethod === 'BANK_TRANSFER' ? 'e.g. 01234567890000' : paymentMethod === 'AIRTEL_MONEY' ? 'e.g. +254 712 345 678' : 'Reference number'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                                lineNumber: 1229,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                        lineNumber: 1221,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 1178,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                        lineNumber: 445,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[88px] px-6 bg-white border-t border-gray-200 flex items-center justify-end gap-3 rounded-b-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/requisitions",
                                className: "px-4 py-2.5 rounded-md text-xs font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 1249,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting,
                                className: "px-6 py-2.5 bg-[#29258D] text-white rounded-md font-medium text-xs hover:bg-[#29258D]/90 transition-all disabled:opacity-50 flex items-center gap-2",
                                children: isSubmitting ? "Submitting..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCheckCircle"], {
                                            className: "text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                            lineNumber: 1262,
                                            columnNumber: 33
                                        }, this),
                                        "Submit Requisition"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 1255,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                        lineNumber: 1248,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                lineNumber: 378,
                columnNumber: 13
            }, this),
            showAccessDenied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-xl max-w-sm w-full overflow-hidden scale-100 animate-in zoom-in-95 duration-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "😔"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                    lineNumber: 1276,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 1275,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-900 mb-2",
                                children: "Access Restricted"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 1278,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-6",
                                children: "Sorry, you cannot access this service at the moment. Please request an admin for access."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 1279,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAccessDenied(false),
                                className: "w-full py-2.5 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors",
                                children: "Dismiss"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                                lineNumber: 1282,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                        lineNumber: 1274,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                    lineNumber: 1273,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
                lineNumber: 1272,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/requisitions/new/page.tsx",
        lineNumber: 377,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_627c6052._.js.map
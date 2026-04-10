module.exports = [
"[project]/src/components/finance-studio/EditableImage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditableImage",
    ()=>EditableImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const EditableImage = ({ settingKey, defaultSrc, onUploadSuccess, className, style, alt, ...props })=>{
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultSrc);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch the saved setting on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchSetting = async ()=>{
            try {
                const res = await fetch(`/api/settings?keys=${settingKey}`);
                if (res.ok) {
                    const data = await res.json();
                    if (data[settingKey]) {
                        setSrc(data[settingKey]);
                        if (onUploadSuccess) {
                            onUploadSuccess(data[settingKey]);
                        }
                    }
                }
            } catch (error) {
                console.error("Failed to fetch image setting:", error);
            }
        };
        fetchSetting();
    }, [
        settingKey,
        onUploadSuccess
    ]);
    const handleImageClick = ()=>{
        if (!isUploading) {
            fileInputRef.current?.click();
        }
    };
    const handleFileChange = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setIsUploading(true);
        try {
            // 1. Upload the file
            const formData = new FormData();
            formData.append('file', file);
            const uploadRes = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            if (!uploadRes.ok) {
                throw new Error("File upload failed");
            }
            const uploadData = await uploadRes.json();
            const newUrl = uploadData.url;
            // 2. Save the new URL to settings
            const settingsRes = await fetch('/api/settings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    updates: [
                        {
                            key: settingKey,
                            value: newUrl
                        }
                    ]
                })
            });
            if (!settingsRes.ok) {
                throw new Error("Failed to save setting");
            }
            // 3. Update local state
            setSrc(newUrl);
            if (onUploadSuccess) {
                onUploadSuccess(newUrl);
            }
        } catch (error) {
            console.error("Error updating image:", error);
            alert("Failed to update image. Please try again.");
        } finally{
            setIsUploading(false);
            // Reset input so the same file can be selected again if needed
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };
    const isRemoved = src === '__REMOVE__';
    const handleRemoveClick = async (e)=>{
        e.stopPropagation();
        if (confirm("Are you sure you want to remove this image? It will be hidden in the final document.")) {
            setIsUploading(true);
            try {
                const settingsRes = await fetch('/api/settings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        updates: [
                            {
                                key: settingKey,
                                value: '__REMOVE__'
                            }
                        ]
                    })
                });
                if (!settingsRes.ok) throw new Error("Failed to save setting");
                setSrc('__REMOVE__');
                if (onUploadSuccess) onUploadSuccess('__REMOVE__');
            } catch (error) {
                console.error("Error removing image:", error);
                alert("Failed to remove image.");
            } finally{
                setIsUploading(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group relative cursor-pointer print:!cursor-auto overflow-hidden transition-all duration-200 ${isRemoved ? 'border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50 hover:bg-slate-100 min-h-[40px] px-4 print:hidden' : 'hover:ring-2 hover:ring-[#236A9E] rounded'} ${className || ''}`,
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        onClick: handleImageClick,
        style: {
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                onChange: handleFileChange,
                accept: "image/png, image/jpeg, image/jpg",
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isRemoved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-1 py-2 text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                            lineNumber: 158,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                        lineNumber: 157,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold uppercase tracking-wider",
                        children: "Add Logo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                        lineNumber: 160,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                lineNumber: 156,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt || "Editable Graphic",
                className: `w-full h-full object-contain transition-opacity duration-200 ${isUploading ? 'opacity-50' : 'opacity-100'}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                lineNumber: 163,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !isUploading && isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-opacity duration-200 print:hidden z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        title: "Change Image",
                        className: "p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-white",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                                    lineNumber: 177,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                                    lineNumber: 178,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                            lineNumber: 176,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                        lineNumber: 175,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isRemoved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        title: "Remove Image",
                        onClick: handleRemoveClick,
                        className: "p-2 bg-rose-500/20 hover:bg-rose-500/40 rounded-full transition-colors group/trash",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-white group-hover/trash:text-rose-200",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                                lineNumber: 190,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                            lineNumber: 189,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                        lineNumber: 184,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                lineNumber: 173,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center print:hidden z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                    lineNumber: 200,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
                lineNumber: 199,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/finance-studio/EditableImage.tsx",
        lineNumber: 140,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SouthSudanReceiptTemplate",
    ()=>SouthSudanReceiptTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$EditableImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/finance-studio/EditableImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const SouthSudanReceiptTemplate = ({ receiptNo, date, amount, beneficiary, paymentMode, paymentRef, items, approvals, settings = {}, onSettingChange })=>{
    const formatCurrency = (val)=>new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(val);
    const formatDate = (d)=>d ? new Date(d).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }) : '';
    const formatLongDate = (d)=>d ? new Date(d).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }) : '';
    const totalAmount = items.reduce((sum, item)=>sum + item.amount, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "'Google Sans', 'Roboto', sans-serif",
            fontSize: '11px'
        },
        className: "jsx-3cdf6ad558b5f832" + " " + "text-[#111827] print:text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "3cdf6ad558b5f832",
                children: '@import "https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap";@media print{@page{size:A4;margin:0}body{background:#fff!important;margin:0!important;padding:0!important}.receipt-container{box-shadow:none!important;print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important;border:none!important;width:100%!important;height:100vh!important;margin:0!important}.header,.footer{print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Google Sans', 'Roboto', sans-serif",
                    fontSize: '11px'
                },
                className: "jsx-3cdf6ad558b5f832" + " " + "receipt-container w-[210mm] min-h-[297mm] bg-white shadow-lg flex flex-col overflow-hidden mx-auto relative content-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-3cdf6ad558b5f832" + " " + "header bg-[url('/assets/receipts/abstract-curvy-smooth-blue-lines-layout-banner-design.png')] bg-cover bg-center relative px-[50px] py-[60px] flex justify-between items-center border-b border-[#E5E7EB]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3cdf6ad558b5f832" + " " + "absolute inset-0 bg-gradient-to-br from-[#F3E8FF]/92 to-[#DCFCE7]/92 z-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3cdf6ad558b5f832" + " " + "logo-container relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$EditableImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditableImage"], {
                                    settingKey: "voucher_header_logo",
                                    defaultSrc: ("TURBOPACK compile-time value", "/capitalpay.png") || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "/assets/receipts/cp.png"),
                                    onUploadSuccess: (url)=>onSettingChange?.('voucher_header_logo', url),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-auto block max-w-[250px] object-contain", ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "h-[32px]")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3cdf6ad558b5f832" + " " + "header-meta text-right relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[11px] uppercase tracking-[2px] text-[#374151] font-bold mb-[8px]",
                                        children: "Voucher"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[11px] font-medium text-[#111827] font-mono",
                                        children: receiptNo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3cdf6ad558b5f832" + " " + "body-content px-[50px] py-[60px] bg-white flex-1 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundImage: 'url(/imgi_22_guilloche-background-certificate-diploma-currency-design_462925-336.png)',
                                    backgroundSize: 'auto'
                                },
                                className: "jsx-3cdf6ad558b5f832" + " " + "absolute inset-0 opacity-[0.28] pointer-events-none bg-repeat bg-center"
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3cdf6ad558b5f832" + " " + "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3cdf6ad558b5f832" + " " + "info-grid grid grid-cols-3 gap-[30px] mb-[50px] pb-[30px] border-b border-[#E5E7EB]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cdf6ad558b5f832" + " " + "info-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[10px] uppercase tracking-[1px] text-[#374151] mb-[8px] font-bold",
                                                        children: "Beneficiary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[11px] font-medium leading-relaxed whitespace-pre-line",
                                                        children: [
                                                            beneficiary.name,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                                className: "jsx-3cdf6ad558b5f832"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 55
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            beneficiary.address
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 127,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cdf6ad558b5f832" + " " + "info-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[10px] uppercase tracking-[1px] text-[#374151] mb-[8px] font-bold",
                                                        children: "Disbursement Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[11px] font-medium leading-relaxed",
                                                        children: formatLongDate(date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 134,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cdf6ad558b5f832" + " " + "info-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[10px] uppercase tracking-[1px] text-[#374151] mb-[8px] font-bold",
                                                        children: "Payment Mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[11px] font-medium leading-relaxed",
                                                        children: [
                                                            paymentMode,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                                className: "jsx-3cdf6ad558b5f832"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 50
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3cdf6ad558b5f832" + " " + "text-[#374151] font-semibold",
                                                                children: [
                                                                    "Ref: ",
                                                                    paymentRef
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 140,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-3cdf6ad558b5f832" + " " + "items-table w-full border-separate border-spacing-0 mb-[50px] border border-[#E5E7EB] rounded-[10px] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-3cdf6ad558b5f832",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-3cdf6ad558b5f832" + " " + "bg-[#2d216d]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-3cdf6ad558b5f832" + " " + "text-left text-[10px] uppercase tracking-[1px] text-white font-bold p-[12px_15px] border-b border-[#E5E7EB] w-[45%]",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-3cdf6ad558b5f832" + " " + "text-right text-[10px] uppercase tracking-[1px] text-white font-bold p-[12px_15px] border-b border-[#E5E7EB] w-[15%]",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-3cdf6ad558b5f832" + " " + "text-right text-[10px] uppercase tracking-[1px] text-white font-bold p-[12px_15px] border-b border-[#E5E7EB] w-[20%]",
                                                            children: "Requested Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-3cdf6ad558b5f832" + " " + "text-right text-[10px] uppercase tracking-[1px] text-white font-bold p-[12px_15px] border-b border-[#E5E7EB] w-[20%] border-r-0",
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-3cdf6ad558b5f832",
                                                children: [
                                                    items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-3cdf6ad558b5f832",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-3cdf6ad558b5f832" + " " + "p-[14px_15px] border-r border-[#E5E7EB] border-b border-[#E5E7EB] text-[11px] text-[#111827]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-3cdf6ad558b5f832" + " " + "block font-medium mb-[4px]",
                                                                            children: item.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                            lineNumber: 162,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        item.subtext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-3cdf6ad558b5f832" + " " + "text-[10px] text-[#374151] font-semibold",
                                                                            children: item.subtext
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                            lineNumber: 163,
                                                                            columnNumber: 62
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-3cdf6ad558b5f832" + " " + "p-[14px_15px] border-r border-[#E5E7EB] border-b border-[#E5E7EB] text-[11px] text-[#111827] text-right",
                                                                    children: formatDate(item.date)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-3cdf6ad558b5f832" + " " + "p-[14px_15px] border-r border-[#E5E7EB] border-b border-[#E5E7EB] text-[11px] text-[#111827] text-right",
                                                                    children: formatCurrency(item.amount)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-3cdf6ad558b5f832" + " " + "p-[14px_15px] border-b border-[#E5E7EB] text-[11px] text-[#111827] text-right border-r-0",
                                                                    children: formatCurrency(item.amount)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "bg-[#2d216d]/5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 2,
                                                                className: "jsx-3cdf6ad558b5f832" + " " + "p-[10px_15px] text-[10px] uppercase tracking-[1px] text-[#374151] font-bold border-r border-[#E5E7EB]",
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-3cdf6ad558b5f832" + " " + "p-[10px_15px] text-[11px] font-bold text-[#111827] text-right border-r border-[#E5E7EB]",
                                                                children: formatCurrency(totalAmount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-3cdf6ad558b5f832" + " " + "p-[10px_15px] text-[11px] font-bold text-[#111827] text-right border-r-0",
                                                                children: formatCurrency(totalAmount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                        lineNumber: 149,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3cdf6ad558b5f832" + " " + "approvals-grid grid grid-cols-4 gap-[20px] mt-[40px] pt-[30px] border-t border-[#E5E7EB]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cdf6ad558b5f832" + " " + "approval-box flex flex-col justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "approval-text text-[11px] font-semibold text-[#111827] min-h-[20px] mb-[1px]",
                                                        children: approvals.requestedBy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "approval-line border-b border-[#E5E7EB] w-full mb-[4px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "approval-label text-[9px] uppercase tracking-[1px] text-[#374151] font-bold",
                                                        children: "Requested By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 194,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cdf6ad558b5f832" + " " + "approval-box flex flex-col justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[11px] font-semibold text-[#111827] min-h-[20px] mb-[1px]",
                                                        children: approvals.authorizedBy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "approval-line border-b border-[#E5E7EB] w-full mb-[4px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[9px] uppercase tracking-[1px] text-[#374151] font-bold",
                                                        children: [
                                                            "Authorized By ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3cdf6ad558b5f832" + " " + "text-[8px] text-gray-400 font-normal ml-1",
                                                                children: "(Sign)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 51
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 203,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cdf6ad558b5f832" + " " + "approval-box flex flex-col justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[11px] font-semibold text-[#111827] min-h-[20px] mb-[1px]",
                                                        children: approvals.paidBy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "approval-line border-b border-[#E5E7EB] w-full mb-[4px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[9px] uppercase tracking-[1px] text-[#374151] font-bold",
                                                        children: [
                                                            "Paid By ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3cdf6ad558b5f832" + " " + "text-[8px] text-gray-400 font-normal ml-1",
                                                                children: "(Sign)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 212,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cdf6ad558b5f832" + " " + "approval-box flex flex-col justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[11px] font-semibold text-[#111827] min-h-[20px] mb-[1px]",
                                                        children: approvals.receivedBy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "approval-line border-b border-[#E5E7EB] w-full mb-[4px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[9px] uppercase tracking-[1px] text-[#374151] font-bold",
                                                        children: [
                                                            "Received By ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3cdf6ad558b5f832" + " " + "text-[8px] text-gray-400 font-normal ml-1",
                                                                children: "(Sign)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                                lineNumber: 221,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                        lineNumber: 193,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "jsx-3cdf6ad558b5f832" + " " + "footer bg-gradient-to-br from-[#F3E8FF] to-[#DCFCE7] px-[50px] py-[40px] border-t border-[#E5E7EB] flex justify-between items-end relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundImage: 'url(/imgi_22_guilloche-background-certificate-diploma-currency-design_462925-336.png)',
                                    backgroundSize: 'auto'
                                },
                                className: "jsx-3cdf6ad558b5f832" + " " + "absolute inset-0 opacity-[0.28] pointer-events-none bg-repeat bg-center z-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                lineNumber: 238,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3cdf6ad558b5f832" + " " + "footer-left relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$EditableImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditableImage"], {
                                    settingKey: "voucher_footer_logo",
                                    defaultSrc: ("TURBOPACK compile-time value", "/capitalpay.png") || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "/assets/receipts/cp.png"),
                                    onUploadSuccess: (url)=>onSettingChange?.('voucher_footer_logo', url),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-auto block mb-[10px] max-w-[150px] object-contain", ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "h-[16px]")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                    lineNumber: 249,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                lineNumber: 248,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3cdf6ad558b5f832" + " " + "disclaimer-footer text-right max-w-[450px] ml-auto relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[9px] text-[#374151] font-semibold tracking-wide leading-[1.6] mb-[3px] letter-spacing-[0.5px]",
                                        children: "| OFFICIAL RECORD • CAPITAL PAY SYSTEM |"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                        lineNumber: 260,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3cdf6ad558b5f832" + " " + "text-[7.5px] text-[#374151] font-medium leading-[1.6] tracking-[0.3px]",
                                        children: "Unauthorized alteration or reproduction is subject to legal action"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                        lineNumber: 263,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                                lineNumber: 259,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                        lineNumber: 236,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/finance-studio/StudioDatePicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioDatePicker",
    ()=>StudioDatePicker
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isValid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function StudioDatePicker({ value, onChange, placeholder = "Select date", className, align = 'left' }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewDate, setViewDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(value) ? value : new Date());
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
        if (value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(value)) setViewDate(value);
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(!isOpen),
                className: `flex items-center justify-between w-full h-[42px] px-3 bg-slate-800 border border-slate-700 rounded-lg cursor-pointer transition-all group select-none hover:border-slate-600
                    ${isOpen ? 'ring-2 ring-indigo-500/50 border-indigo-500' : ''}
                `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-medium font-mono ${value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(value) ? 'text-slate-200' : 'text-slate-500'}`,
                        children: value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(value, "dd MMM yyyy") : placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCalendar"], {
                        className: `text-lg transition-colors ${isOpen ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-400'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                lineNumber: 82,
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
                    className: `absolute top-full mt-2 z-[9999] bg-slate-800 rounded-xl shadow-2xl border border-slate-700 p-4 w-[280px] select-none overflow-hidden
                            ${align === 'right' ? 'right-0' : 'left-0'}
                        `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handlePrev,
                                    className: "p-1 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretLeft"], {}, void 0, false, {
                                        fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                        lineNumber: 113,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setViewMode(viewMode === 'month' ? 'day' : 'month'),
                                            className: `text-xs font-bold px-2 py-1 rounded-md transition-colors flex items-center gap-1
                                        ${viewMode === 'month' ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-300 hover:bg-slate-700'}
                                    `,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(viewDate, "MMMM")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                            lineNumber: 117,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setViewMode(viewMode === 'year' ? 'day' : 'year'),
                                            className: `text-xs font-bold px-2 py-1 rounded-md transition-colors flex items-center gap-1
                                        ${viewMode === 'year' ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-300 hover:bg-slate-700'}
                                    `,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(viewDate, "yyyy")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                            lineNumber: 126,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleNext,
                                    className: "p-1 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretRight"], {}, void 0, false, {
                                        fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                        lineNumber: 142,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                    lineNumber: 137,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                            lineNumber: 107,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[220px]",
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
                                                    className: "text-center text-[10px] font-bold text-slate-500 uppercase",
                                                    children: day
                                                }, day, false, {
                                                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                            lineNumber: 155,
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
                                                        h-7 w-7 rounded-md flex items-center justify-center text-xs font-medium transition-all relative
                                                        ${!isCurrentMonth ? 'text-slate-600' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}
                                                        ${isSelected ? '!bg-indigo-600 !text-white shadow-lg shadow-indigo-500/30' : ''}
                                                        ${isTodayDate && !isSelected ? 'text-indigo-400 font-bold bg-indigo-500/10' : ''}
                                                    `,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "d")
                                                }, idx, false, {
                                                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 49
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                            lineNumber: 162,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                    lineNumber: 150,
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
                                    className: "grid grid-cols-3 gap-2 absolute inset-0 content-start",
                                    children: months.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleMonthClick(idx),
                                            className: `
                                                h-10 rounded-lg text-xs font-medium transition-all border
                                                ${viewDate.getMonth() === idx ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200'}
                                            `,
                                            children: month
                                        }, month, false, {
                                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                            lineNumber: 195,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                    lineNumber: 189,
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
                                    className: "grid grid-cols-3 gap-2 absolute inset-0 content-start",
                                    children: years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleYearClick(year),
                                            className: `
                                                h-10 rounded-lg text-xs font-medium transition-all border
                                                ${viewDate.getFullYear() === year ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200'}
                                            `,
                                            children: year
                                        }, year, false, {
                                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                            lineNumber: 218,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                    lineNumber: 212,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                            lineNumber: 147,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 pt-3 border-t border-slate-700 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onChange(new Date());
                                    setIsOpen(false);
                                },
                                className: "text-[10px] font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-wider",
                                children: "Jump to Today"
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                                lineNumber: 236,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                            lineNumber: 235,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                    lineNumber: 97,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/finance-studio/StudioDatePicker.tsx",
        lineNumber: 80,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/actions/data:5f7952 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaymentDetailsForReceipt",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ec5bd400234175c2d27403324726d427df5f5aa2":"getPaymentDetailsForReceipt"},"src/app/actions/receipt-studio.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ec5bd400234175c2d27403324726d427df5f5aa2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPaymentDetailsForReceipt");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVjZWlwdC1zdHVkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkRldGFpbHNGb3JSZWNlaXB0KHJlcXVpc2l0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCAocHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUgYXMgYW55KSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcXVpc2l0aW9uSWQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiB0cnVlLCAvLyBJbmNsdWRlIHJlcXVpc2l0aW9uIGl0ZW1zXHJcbiAgICAgICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmVyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlcSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gQXBwcm92ZXJzXHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAvLyBBdXRob3JpemVkIGJ5IGhpZ2hlc3QgbGV2ZWwgYXBwcm92ZXI/XHJcbiAgICBjb25zdCBhdXRob3JpemVkQnkgPSByZXEuYXBwcm92YWxzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBiLmxldmVsIC0gYS5sZXZlbClbMF0/LmFwcHJvdmVyPy5uYW1lIHx8IFwiUGVuZGluZ1wiO1xyXG5cclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyLm5hbWUgfHwgXCJCZW5lZmljaWFyeVwiO1xyXG4gICAgY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gcmVxLmRlcGFydG1lbnQgPyBgJHtyZXEuZGVwYXJ0bWVudH0gRGVwdGAgOiBcIk4vQVwiO1xyXG5cclxuICAgIC8vIEJ1aWxkIGl0ZW1zIGFycmF5IGZyb20gcmVxdWlzaXRpb24gaXRlbXMgaWYgdGhleSBleGlzdCwgb3RoZXJ3aXNlIHVzZSB0aGUgcmVxdWlzaXRpb24gaXRzZWxmXHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuXHJcbiAgICBpZiAocmVxLml0ZW1zICYmIHJlcS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gTWFwIGVhY2ggcmVxdWlzaXRpb24gaXRlbSB0byB0aGUgcmVjZWlwdCBmb3JtYXRcclxuICAgICAgICBpdGVtcyA9IHJlcS5pdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGAke2l0ZW0uY2F0ZWdvcnl9IC0gUXR5OiAke2l0ZW0ucXVhbnRpdHl9IEAgJHtyZXEuY3VycmVuY3kgfHwgJ1VTRCd9ICR7aXRlbS51bml0UHJpY2UudG9GaXhlZCgyKX1gLFxyXG4gICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiBpdGVtLnRvdGFsUHJpY2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIHNpbmdsZSBpdGVtIChmb3Igb2xkIHJlcXVpc2l0aW9ucyB3aXRob3V0IGl0ZW1zKVxyXG4gICAgICAgIGl0ZW1zID0gW3tcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS50aXRsZSxcclxuICAgICAgICAgICAgc3VidGV4dDogcmVxLmRlc2NyaXB0aW9uIHx8IHJlcS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgZGF0ZTogcmVxLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiByZXEuYW1vdW50XHJcbiAgICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7cmVxLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiByZXEudXBkYXRlZEF0LFxyXG4gICAgICAgIGFtb3VudDogcmVxLmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBSRVEtJHtyZXEuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnksXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeSxcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludm9pY2VEZXRhaWxzRm9yUmVjZWlwdChpbnZvaWNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpbnYgPSBhd2FpdCBwcmlzbWEuaW52b2ljZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaW52b2ljZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB2ZW5kb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWludikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7aW52LmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgYW1vdW50OiBpbnYuYW1vdW50LFxyXG4gICAgICAgIGJlbmVmaWNpYXJ5OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGludi52ZW5kb3IubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogaW52LnZlbmRvci5hZGRyZXNzIHx8IFwiTi9BXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBheW1lbnRNb2RlOiBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSU5WLSR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgICAgIHN1YnRleHQ6IGludi5kZXNjcmlwdGlvbiB8fCBcIlZlbmRvciBQYXltZW50XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGludi5hbW91bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RlZEJ5OiBpbnYuY3JlYXRlZEJ5Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJGaW5hbmNlIE1hbmFnZXJcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VEZXRhaWxzRm9yUmVjZWlwdChleHBlbnNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBleHAgPSBhd2FpdCBwcmlzbWEuZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXhwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtleHAuaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICBhbW91bnQ6IGV4cC5hbW91bnQsXHJcbiAgICAgICAgYmVuZWZpY2lhcnk6IHtcclxuICAgICAgICAgICAgbmFtZTogZXhwLnVzZXIubmFtZSB8fCBcIlVua25vd25cIixcclxuICAgICAgICAgICAgYWRkcmVzczogZXhwLnVzZXIuZGVwYXJ0bWVudCA/IGAke2V4cC51c2VyLmRlcGFydG1lbnR9IERlcHRgIDogXCJOL0FcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBFWFAtJHtleHAuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogZXhwLmRlc2NyaXB0aW9uIHx8IGV4cC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogZXhwLmFtb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IGV4cC51c2VyLm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJEZXBhcnRtZW50IEhlYWRcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bWVudERldGFpbHNGb3JSZWNlaXB0KHBheW1lbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cclxuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBwcmlzbWEucGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0cnVlIC8vIEZldGNoIGl0ZW1zIGZvciBkZXRhaWxlZCBicmVha2Rvd25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW52b2ljZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB2ZW5kb3I6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwZW5zZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbnRobHlCdWRnZXRzOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWtlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY2hlY2tlcjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGF5bWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtIGludG8gUmVjZWlwdCBEYXRhIGZvcm1hdFxyXG4gICAgLy8gRmxhdHRlbiBpdGVtcyBmcm9tIGRpc3BhcmF0ZSBzb3VyY2VzXHJcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG5cclxuICAgIC8vIEFkZCByZXF1aXNpdGlvbnNcclxuICAgIGZvciAoY29uc3QgcmVxIG9mIHBheW1lbnQucmVxdWlzaXRpb25zKSB7XHJcbiAgICAgICAgaWYgKHJlcS5pdGVtcyAmJiByZXEuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBBZGQgaW5kaXZpZHVhbCBpdGVtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVxLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0ZXh0OiBgJHtpdGVtLmNhdGVnb3J5IHx8IHJlcS5jYXRlZ29yeX0gLSBRdHk6ICR7aXRlbS5xdWFudGl0eX0gQCAke3JlcS5jdXJyZW5jeSB8fCAnVVNEJ30gJHtOdW1iZXIoaXRlbS51bml0UHJpY2UpLnRvRml4ZWQoMil9YCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0udG90YWxQcmljZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgcmVxdWlzaXRpb25zIHdpdGhvdXQgaXRlbXNcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYFJlcXVpc2l0aW9uIChSZWY6ICR7cmVxLmlkLnNsaWNlKC02KX0pIC0gJHtyZXEuY2F0ZWdvcnl9YCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHJlcS51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHJlcS5hbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBpbnZvaWNlc1xyXG4gICAgZm9yIChjb25zdCBpbnYgb2YgcGF5bWVudC5pbnZvaWNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgc3VidGV4dDogYFZlbmRvcjogJHtpbnYudmVuZG9yLm5hbWV9YCxcclxuICAgICAgICAgICAgZGF0ZTogaW52LmR1ZURhdGUsXHJcbiAgICAgICAgICAgIGFtb3VudDogaW52LmFtb3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBleHBlbnNlc1xyXG4gICAgZm9yIChjb25zdCBleHAgb2YgcGF5bWVudC5leHBlbnNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICBzdWJ0ZXh0OiBgUmVpbWJ1cnNlbWVudDogJHtleHAudXNlci5uYW1lfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgYW1vdW50OiBleHAuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGJ1ZGdldHNcclxuICAgIGZvciAoY29uc3QgYnVkIG9mIHBheW1lbnQubW9udGhseUJ1ZGdldHMpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBCdWRnZXQgQWxsb2NhdGlvbjogJHtidWQuYnJhbmNofWAsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGBQZXJpb2Q6ICR7YnVkLm1vbnRofS8ke2J1ZC55ZWFyfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGJ1ZC51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgIGFtb3VudDogYnVkLnRvdGFsQW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIEJlbmVmaWNpYXJ5IGxvZ2ljXHJcbiAgICAvLyBXZSB0cnkgdG8gZmluZCBhIGNvbW1vbiBiZW5lZmljaWFyeSBpZiBwb3NzaWJsZVxyXG4gICAgbGV0IGJlbmVmaWNpYXJ5TmFtZSA9IFwiVmFyaW91cyBCZW5lZmljaWFyaWVzXCI7XHJcbiAgICBsZXQgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCJcIjtcclxuXHJcbiAgICAvLyAxLiBDaGVjayBpbnZvaWNlc1xyXG4gICAgaWYgKHBheW1lbnQuaW52b2ljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VmVuZG9ySWQgPSBwYXltZW50Lmludm9pY2VzWzBdLnZlbmRvcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVWZW5kb3IgPSBwYXltZW50Lmludm9pY2VzLmV2ZXJ5KGkgPT4gaS52ZW5kb3JJZCA9PT0gZmlyc3RWZW5kb3JJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVWZW5kb3IpIHtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlOYW1lID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IubmFtZTtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlBZGRyZXNzID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IuYWRkcmVzcyB8fCBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDIuIENoZWNrIGV4cGVuc2VzXHJcbiAgICBlbHNlIGlmIChwYXltZW50LmV4cGVuc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBmaXJzdFVzZXJJZCA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5leHBlbnNlcy5ldmVyeShlID0+IGUudXNlcklkID09PSBmaXJzdFVzZXJJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVVc2VyKSB7XHJcbiAgICAgICAgICAgIGJlbmVmaWNpYXJ5TmFtZSA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlci5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDMuIENoZWNrIHJlcXVpc2l0aW9uc1xyXG4gICAgZWxzZSBpZiAocGF5bWVudC5yZXF1aXNpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VXNlcklkID0gcGF5bWVudC5yZXF1aXNpdGlvbnNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5yZXF1aXNpdGlvbnMuZXZlcnkociA9PiByLnVzZXJJZCA9PT0gZmlyc3RVc2VySWQpO1xyXG4gICAgICAgIGlmIChhbGxTYW1lVXNlcikge1xyXG4gICAgICAgICAgICBiZW5lZmljaWFyeU5hbWUgPSBwYXltZW50LnJlcXVpc2l0aW9uc1swXS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFuIHBheW1lbnQgbWV0aG9kXHJcbiAgICBsZXQgcGF5TWV0aG9kID0gJ0JhbmsgVHJhbnNmZXInO1xyXG4gICAgaWYgKHBheW1lbnQubWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKHBheW1lbnQubWV0aG9kID09PSAnTU9CSUxFX01PTkVZJykgcGF5TWV0aG9kID0gJ01vYmlsZSBNb25leSc7XHJcbiAgICAgICAgZWxzZSBpZiAocGF5bWVudC5tZXRob2QgPT09ICdDQVNIJykgcGF5TWV0aG9kID0gJ0Nhc2gnO1xyXG4gICAgICAgIGVsc2UgcGF5TWV0aG9kID0gcGF5bWVudC5tZXRob2QucmVwbGFjZSgvXy9nLCAnICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVjZWlwdE5vOiBgUkNULSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke3BheW1lbnQuaWQuc2xpY2UoMCwgNikudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IHBheW1lbnQucHJvY2Vzc2VkQXQgfHwgcGF5bWVudC51cGRhdGVkQXQsXHJcbiAgICAgICAgYW1vdW50OiBwYXltZW50LmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHBheU1ldGhvZCxcclxuICAgICAgICBwYXltZW50UmVmOiBwYXltZW50LnJlZmVyZW5jZSB8fCBgVFJYLSR7cGF5bWVudC5pZC5zbGljZSgwLCA4KX1gLFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IHBheW1lbnQubWFrZXI/Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogcGF5bWVudC5jaGVja2VyPy5uYW1lIHx8IFwiUGVuZGluZ1wiLFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IGJlbmVmaWNpYXJ5TmFtZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkl0ZW1EZXRhaWxzRm9yUmVjZWlwdChpdGVtSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uSXRlbS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaXRlbUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgYXBwcm92ZXI6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBsZXZlbDogJ2Rlc2MnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHJlcSA9IGl0ZW0ucmVxdWlzaXRpb247XHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgY29uc3QgYXV0aG9yaXplZEJ5ID0gcmVxLmFwcHJvdmFscz8uWzBdPy5hcHByb3Zlcj8ubmFtZSB8fCBcIlBlbmRpbmdcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiQmVuZWZpY2lhcnlcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5QWRkcmVzcyA9IHJlcS5kZXBhcnRtZW50ID8gYCR7cmVxLmRlcGFydG1lbnR9IERlcHRgIDogKHJlcS5icmFuY2ggfHwgXCJOL0FcIik7XHJcblxyXG4gICAgY29uc3QgY3VycmVuY3kgPSByZXEuY3VycmVuY3kgfHwgXCJVU0RcIjtcclxuICAgIGNvbnN0IGl0ZW1Ub3RhbCA9IGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnVuaXRQcmljZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtpdGVtLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICBhbW91bnQ6IGl0ZW1Ub3RhbCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHJlcS5wYXltZW50TWV0aG9kPy5yZXBsYWNlKC9fL2csIFwiIFwiKSB8fCBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSVRFTS0ke2l0ZW0uaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYCR7aXRlbS5jYXRlZ29yeX0g4oCUIFF0eTogJHtpdGVtLnF1YW50aXR5fSBAICR7Y3VycmVuY3l9ICR7TnVtYmVyKGl0ZW0udW5pdFByaWNlKS50b0ZpeGVkKDIpfWAsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbVRvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICByZXF1ZXN0ZWRCeSxcclxuICAgICAgICAgICAgYXV0aG9yaXplZEJ5LFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBNEpzQix3TUFBQSJ9
}),
"[project]/src/app/actions/data:eda897 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRequisitionDetailsForReceipt",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4081d325fd2ab02683845f516870266f8133f1eacd":"getRequisitionDetailsForReceipt"},"src/app/actions/receipt-studio.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4081d325fd2ab02683845f516870266f8133f1eacd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getRequisitionDetailsForReceipt");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVjZWlwdC1zdHVkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkRldGFpbHNGb3JSZWNlaXB0KHJlcXVpc2l0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCAocHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUgYXMgYW55KSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcXVpc2l0aW9uSWQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiB0cnVlLCAvLyBJbmNsdWRlIHJlcXVpc2l0aW9uIGl0ZW1zXHJcbiAgICAgICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmVyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlcSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gQXBwcm92ZXJzXHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAvLyBBdXRob3JpemVkIGJ5IGhpZ2hlc3QgbGV2ZWwgYXBwcm92ZXI/XHJcbiAgICBjb25zdCBhdXRob3JpemVkQnkgPSByZXEuYXBwcm92YWxzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBiLmxldmVsIC0gYS5sZXZlbClbMF0/LmFwcHJvdmVyPy5uYW1lIHx8IFwiUGVuZGluZ1wiO1xyXG5cclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyLm5hbWUgfHwgXCJCZW5lZmljaWFyeVwiO1xyXG4gICAgY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gcmVxLmRlcGFydG1lbnQgPyBgJHtyZXEuZGVwYXJ0bWVudH0gRGVwdGAgOiBcIk4vQVwiO1xyXG5cclxuICAgIC8vIEJ1aWxkIGl0ZW1zIGFycmF5IGZyb20gcmVxdWlzaXRpb24gaXRlbXMgaWYgdGhleSBleGlzdCwgb3RoZXJ3aXNlIHVzZSB0aGUgcmVxdWlzaXRpb24gaXRzZWxmXHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuXHJcbiAgICBpZiAocmVxLml0ZW1zICYmIHJlcS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gTWFwIGVhY2ggcmVxdWlzaXRpb24gaXRlbSB0byB0aGUgcmVjZWlwdCBmb3JtYXRcclxuICAgICAgICBpdGVtcyA9IHJlcS5pdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGAke2l0ZW0uY2F0ZWdvcnl9IC0gUXR5OiAke2l0ZW0ucXVhbnRpdHl9IEAgJHtyZXEuY3VycmVuY3kgfHwgJ1VTRCd9ICR7aXRlbS51bml0UHJpY2UudG9GaXhlZCgyKX1gLFxyXG4gICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiBpdGVtLnRvdGFsUHJpY2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIHNpbmdsZSBpdGVtIChmb3Igb2xkIHJlcXVpc2l0aW9ucyB3aXRob3V0IGl0ZW1zKVxyXG4gICAgICAgIGl0ZW1zID0gW3tcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS50aXRsZSxcclxuICAgICAgICAgICAgc3VidGV4dDogcmVxLmRlc2NyaXB0aW9uIHx8IHJlcS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgZGF0ZTogcmVxLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiByZXEuYW1vdW50XHJcbiAgICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7cmVxLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiByZXEudXBkYXRlZEF0LFxyXG4gICAgICAgIGFtb3VudDogcmVxLmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBSRVEtJHtyZXEuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnksXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeSxcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludm9pY2VEZXRhaWxzRm9yUmVjZWlwdChpbnZvaWNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpbnYgPSBhd2FpdCBwcmlzbWEuaW52b2ljZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaW52b2ljZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB2ZW5kb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWludikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7aW52LmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgYW1vdW50OiBpbnYuYW1vdW50LFxyXG4gICAgICAgIGJlbmVmaWNpYXJ5OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGludi52ZW5kb3IubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogaW52LnZlbmRvci5hZGRyZXNzIHx8IFwiTi9BXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBheW1lbnRNb2RlOiBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSU5WLSR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgICAgIHN1YnRleHQ6IGludi5kZXNjcmlwdGlvbiB8fCBcIlZlbmRvciBQYXltZW50XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGludi5hbW91bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RlZEJ5OiBpbnYuY3JlYXRlZEJ5Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJGaW5hbmNlIE1hbmFnZXJcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VEZXRhaWxzRm9yUmVjZWlwdChleHBlbnNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBleHAgPSBhd2FpdCBwcmlzbWEuZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXhwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtleHAuaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICBhbW91bnQ6IGV4cC5hbW91bnQsXHJcbiAgICAgICAgYmVuZWZpY2lhcnk6IHtcclxuICAgICAgICAgICAgbmFtZTogZXhwLnVzZXIubmFtZSB8fCBcIlVua25vd25cIixcclxuICAgICAgICAgICAgYWRkcmVzczogZXhwLnVzZXIuZGVwYXJ0bWVudCA/IGAke2V4cC51c2VyLmRlcGFydG1lbnR9IERlcHRgIDogXCJOL0FcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBFWFAtJHtleHAuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogZXhwLmRlc2NyaXB0aW9uIHx8IGV4cC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogZXhwLmFtb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IGV4cC51c2VyLm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJEZXBhcnRtZW50IEhlYWRcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bWVudERldGFpbHNGb3JSZWNlaXB0KHBheW1lbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cclxuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBwcmlzbWEucGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0cnVlIC8vIEZldGNoIGl0ZW1zIGZvciBkZXRhaWxlZCBicmVha2Rvd25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW52b2ljZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB2ZW5kb3I6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwZW5zZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbnRobHlCdWRnZXRzOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWtlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY2hlY2tlcjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGF5bWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtIGludG8gUmVjZWlwdCBEYXRhIGZvcm1hdFxyXG4gICAgLy8gRmxhdHRlbiBpdGVtcyBmcm9tIGRpc3BhcmF0ZSBzb3VyY2VzXHJcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG5cclxuICAgIC8vIEFkZCByZXF1aXNpdGlvbnNcclxuICAgIGZvciAoY29uc3QgcmVxIG9mIHBheW1lbnQucmVxdWlzaXRpb25zKSB7XHJcbiAgICAgICAgaWYgKHJlcS5pdGVtcyAmJiByZXEuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBBZGQgaW5kaXZpZHVhbCBpdGVtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVxLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0ZXh0OiBgJHtpdGVtLmNhdGVnb3J5IHx8IHJlcS5jYXRlZ29yeX0gLSBRdHk6ICR7aXRlbS5xdWFudGl0eX0gQCAke3JlcS5jdXJyZW5jeSB8fCAnVVNEJ30gJHtOdW1iZXIoaXRlbS51bml0UHJpY2UpLnRvRml4ZWQoMil9YCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0udG90YWxQcmljZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgcmVxdWlzaXRpb25zIHdpdGhvdXQgaXRlbXNcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYFJlcXVpc2l0aW9uIChSZWY6ICR7cmVxLmlkLnNsaWNlKC02KX0pIC0gJHtyZXEuY2F0ZWdvcnl9YCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHJlcS51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHJlcS5hbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBpbnZvaWNlc1xyXG4gICAgZm9yIChjb25zdCBpbnYgb2YgcGF5bWVudC5pbnZvaWNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgc3VidGV4dDogYFZlbmRvcjogJHtpbnYudmVuZG9yLm5hbWV9YCxcclxuICAgICAgICAgICAgZGF0ZTogaW52LmR1ZURhdGUsXHJcbiAgICAgICAgICAgIGFtb3VudDogaW52LmFtb3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBleHBlbnNlc1xyXG4gICAgZm9yIChjb25zdCBleHAgb2YgcGF5bWVudC5leHBlbnNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICBzdWJ0ZXh0OiBgUmVpbWJ1cnNlbWVudDogJHtleHAudXNlci5uYW1lfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgYW1vdW50OiBleHAuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGJ1ZGdldHNcclxuICAgIGZvciAoY29uc3QgYnVkIG9mIHBheW1lbnQubW9udGhseUJ1ZGdldHMpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBCdWRnZXQgQWxsb2NhdGlvbjogJHtidWQuYnJhbmNofWAsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGBQZXJpb2Q6ICR7YnVkLm1vbnRofS8ke2J1ZC55ZWFyfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGJ1ZC51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgIGFtb3VudDogYnVkLnRvdGFsQW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIEJlbmVmaWNpYXJ5IGxvZ2ljXHJcbiAgICAvLyBXZSB0cnkgdG8gZmluZCBhIGNvbW1vbiBiZW5lZmljaWFyeSBpZiBwb3NzaWJsZVxyXG4gICAgbGV0IGJlbmVmaWNpYXJ5TmFtZSA9IFwiVmFyaW91cyBCZW5lZmljaWFyaWVzXCI7XHJcbiAgICBsZXQgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCJcIjtcclxuXHJcbiAgICAvLyAxLiBDaGVjayBpbnZvaWNlc1xyXG4gICAgaWYgKHBheW1lbnQuaW52b2ljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VmVuZG9ySWQgPSBwYXltZW50Lmludm9pY2VzWzBdLnZlbmRvcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVWZW5kb3IgPSBwYXltZW50Lmludm9pY2VzLmV2ZXJ5KGkgPT4gaS52ZW5kb3JJZCA9PT0gZmlyc3RWZW5kb3JJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVWZW5kb3IpIHtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlOYW1lID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IubmFtZTtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlBZGRyZXNzID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IuYWRkcmVzcyB8fCBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDIuIENoZWNrIGV4cGVuc2VzXHJcbiAgICBlbHNlIGlmIChwYXltZW50LmV4cGVuc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBmaXJzdFVzZXJJZCA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5leHBlbnNlcy5ldmVyeShlID0+IGUudXNlcklkID09PSBmaXJzdFVzZXJJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVVc2VyKSB7XHJcbiAgICAgICAgICAgIGJlbmVmaWNpYXJ5TmFtZSA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlci5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDMuIENoZWNrIHJlcXVpc2l0aW9uc1xyXG4gICAgZWxzZSBpZiAocGF5bWVudC5yZXF1aXNpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VXNlcklkID0gcGF5bWVudC5yZXF1aXNpdGlvbnNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5yZXF1aXNpdGlvbnMuZXZlcnkociA9PiByLnVzZXJJZCA9PT0gZmlyc3RVc2VySWQpO1xyXG4gICAgICAgIGlmIChhbGxTYW1lVXNlcikge1xyXG4gICAgICAgICAgICBiZW5lZmljaWFyeU5hbWUgPSBwYXltZW50LnJlcXVpc2l0aW9uc1swXS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFuIHBheW1lbnQgbWV0aG9kXHJcbiAgICBsZXQgcGF5TWV0aG9kID0gJ0JhbmsgVHJhbnNmZXInO1xyXG4gICAgaWYgKHBheW1lbnQubWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKHBheW1lbnQubWV0aG9kID09PSAnTU9CSUxFX01PTkVZJykgcGF5TWV0aG9kID0gJ01vYmlsZSBNb25leSc7XHJcbiAgICAgICAgZWxzZSBpZiAocGF5bWVudC5tZXRob2QgPT09ICdDQVNIJykgcGF5TWV0aG9kID0gJ0Nhc2gnO1xyXG4gICAgICAgIGVsc2UgcGF5TWV0aG9kID0gcGF5bWVudC5tZXRob2QucmVwbGFjZSgvXy9nLCAnICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVjZWlwdE5vOiBgUkNULSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke3BheW1lbnQuaWQuc2xpY2UoMCwgNikudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IHBheW1lbnQucHJvY2Vzc2VkQXQgfHwgcGF5bWVudC51cGRhdGVkQXQsXHJcbiAgICAgICAgYW1vdW50OiBwYXltZW50LmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHBheU1ldGhvZCxcclxuICAgICAgICBwYXltZW50UmVmOiBwYXltZW50LnJlZmVyZW5jZSB8fCBgVFJYLSR7cGF5bWVudC5pZC5zbGljZSgwLCA4KX1gLFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IHBheW1lbnQubWFrZXI/Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogcGF5bWVudC5jaGVja2VyPy5uYW1lIHx8IFwiUGVuZGluZ1wiLFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IGJlbmVmaWNpYXJ5TmFtZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkl0ZW1EZXRhaWxzRm9yUmVjZWlwdChpdGVtSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uSXRlbS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaXRlbUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgYXBwcm92ZXI6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBsZXZlbDogJ2Rlc2MnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHJlcSA9IGl0ZW0ucmVxdWlzaXRpb247XHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgY29uc3QgYXV0aG9yaXplZEJ5ID0gcmVxLmFwcHJvdmFscz8uWzBdPy5hcHByb3Zlcj8ubmFtZSB8fCBcIlBlbmRpbmdcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiQmVuZWZpY2lhcnlcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5QWRkcmVzcyA9IHJlcS5kZXBhcnRtZW50ID8gYCR7cmVxLmRlcGFydG1lbnR9IERlcHRgIDogKHJlcS5icmFuY2ggfHwgXCJOL0FcIik7XHJcblxyXG4gICAgY29uc3QgY3VycmVuY3kgPSByZXEuY3VycmVuY3kgfHwgXCJVU0RcIjtcclxuICAgIGNvbnN0IGl0ZW1Ub3RhbCA9IGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnVuaXRQcmljZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtpdGVtLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICBhbW91bnQ6IGl0ZW1Ub3RhbCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHJlcS5wYXltZW50TWV0aG9kPy5yZXBsYWNlKC9fL2csIFwiIFwiKSB8fCBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSVRFTS0ke2l0ZW0uaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYCR7aXRlbS5jYXRlZ29yeX0g4oCUIFF0eTogJHtpdGVtLnF1YW50aXR5fSBAICR7Y3VycmVuY3l9ICR7TnVtYmVyKGl0ZW0udW5pdFByaWNlKS50b0ZpeGVkKDIpfWAsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbVRvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICByZXF1ZXN0ZWRCeSxcclxuICAgICAgICAgICAgYXV0aG9yaXplZEJ5LFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVRBS3NCLDRNQUFBIn0=
}),
"[project]/src/app/actions/data:aa5a1d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInvoiceDetailsForReceipt",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"406d18927a76f90478367160fad865fe778ccca677":"getInvoiceDetailsForReceipt"},"src/app/actions/receipt-studio.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("406d18927a76f90478367160fad865fe778ccca677", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getInvoiceDetailsForReceipt");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVjZWlwdC1zdHVkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkRldGFpbHNGb3JSZWNlaXB0KHJlcXVpc2l0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCAocHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUgYXMgYW55KSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcXVpc2l0aW9uSWQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiB0cnVlLCAvLyBJbmNsdWRlIHJlcXVpc2l0aW9uIGl0ZW1zXHJcbiAgICAgICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmVyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlcSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gQXBwcm92ZXJzXHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAvLyBBdXRob3JpemVkIGJ5IGhpZ2hlc3QgbGV2ZWwgYXBwcm92ZXI/XHJcbiAgICBjb25zdCBhdXRob3JpemVkQnkgPSByZXEuYXBwcm92YWxzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBiLmxldmVsIC0gYS5sZXZlbClbMF0/LmFwcHJvdmVyPy5uYW1lIHx8IFwiUGVuZGluZ1wiO1xyXG5cclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyLm5hbWUgfHwgXCJCZW5lZmljaWFyeVwiO1xyXG4gICAgY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gcmVxLmRlcGFydG1lbnQgPyBgJHtyZXEuZGVwYXJ0bWVudH0gRGVwdGAgOiBcIk4vQVwiO1xyXG5cclxuICAgIC8vIEJ1aWxkIGl0ZW1zIGFycmF5IGZyb20gcmVxdWlzaXRpb24gaXRlbXMgaWYgdGhleSBleGlzdCwgb3RoZXJ3aXNlIHVzZSB0aGUgcmVxdWlzaXRpb24gaXRzZWxmXHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuXHJcbiAgICBpZiAocmVxLml0ZW1zICYmIHJlcS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gTWFwIGVhY2ggcmVxdWlzaXRpb24gaXRlbSB0byB0aGUgcmVjZWlwdCBmb3JtYXRcclxuICAgICAgICBpdGVtcyA9IHJlcS5pdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGAke2l0ZW0uY2F0ZWdvcnl9IC0gUXR5OiAke2l0ZW0ucXVhbnRpdHl9IEAgJHtyZXEuY3VycmVuY3kgfHwgJ1VTRCd9ICR7aXRlbS51bml0UHJpY2UudG9GaXhlZCgyKX1gLFxyXG4gICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiBpdGVtLnRvdGFsUHJpY2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIHNpbmdsZSBpdGVtIChmb3Igb2xkIHJlcXVpc2l0aW9ucyB3aXRob3V0IGl0ZW1zKVxyXG4gICAgICAgIGl0ZW1zID0gW3tcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS50aXRsZSxcclxuICAgICAgICAgICAgc3VidGV4dDogcmVxLmRlc2NyaXB0aW9uIHx8IHJlcS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgZGF0ZTogcmVxLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiByZXEuYW1vdW50XHJcbiAgICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7cmVxLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiByZXEudXBkYXRlZEF0LFxyXG4gICAgICAgIGFtb3VudDogcmVxLmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBSRVEtJHtyZXEuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnksXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeSxcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludm9pY2VEZXRhaWxzRm9yUmVjZWlwdChpbnZvaWNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpbnYgPSBhd2FpdCBwcmlzbWEuaW52b2ljZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaW52b2ljZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB2ZW5kb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWludikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7aW52LmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgYW1vdW50OiBpbnYuYW1vdW50LFxyXG4gICAgICAgIGJlbmVmaWNpYXJ5OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGludi52ZW5kb3IubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogaW52LnZlbmRvci5hZGRyZXNzIHx8IFwiTi9BXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBheW1lbnRNb2RlOiBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSU5WLSR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgICAgIHN1YnRleHQ6IGludi5kZXNjcmlwdGlvbiB8fCBcIlZlbmRvciBQYXltZW50XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGludi5hbW91bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RlZEJ5OiBpbnYuY3JlYXRlZEJ5Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJGaW5hbmNlIE1hbmFnZXJcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VEZXRhaWxzRm9yUmVjZWlwdChleHBlbnNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBleHAgPSBhd2FpdCBwcmlzbWEuZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXhwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtleHAuaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICBhbW91bnQ6IGV4cC5hbW91bnQsXHJcbiAgICAgICAgYmVuZWZpY2lhcnk6IHtcclxuICAgICAgICAgICAgbmFtZTogZXhwLnVzZXIubmFtZSB8fCBcIlVua25vd25cIixcclxuICAgICAgICAgICAgYWRkcmVzczogZXhwLnVzZXIuZGVwYXJ0bWVudCA/IGAke2V4cC51c2VyLmRlcGFydG1lbnR9IERlcHRgIDogXCJOL0FcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBFWFAtJHtleHAuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogZXhwLmRlc2NyaXB0aW9uIHx8IGV4cC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogZXhwLmFtb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IGV4cC51c2VyLm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJEZXBhcnRtZW50IEhlYWRcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bWVudERldGFpbHNGb3JSZWNlaXB0KHBheW1lbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cclxuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBwcmlzbWEucGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0cnVlIC8vIEZldGNoIGl0ZW1zIGZvciBkZXRhaWxlZCBicmVha2Rvd25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW52b2ljZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB2ZW5kb3I6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwZW5zZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbnRobHlCdWRnZXRzOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWtlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY2hlY2tlcjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGF5bWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtIGludG8gUmVjZWlwdCBEYXRhIGZvcm1hdFxyXG4gICAgLy8gRmxhdHRlbiBpdGVtcyBmcm9tIGRpc3BhcmF0ZSBzb3VyY2VzXHJcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG5cclxuICAgIC8vIEFkZCByZXF1aXNpdGlvbnNcclxuICAgIGZvciAoY29uc3QgcmVxIG9mIHBheW1lbnQucmVxdWlzaXRpb25zKSB7XHJcbiAgICAgICAgaWYgKHJlcS5pdGVtcyAmJiByZXEuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBBZGQgaW5kaXZpZHVhbCBpdGVtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVxLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0ZXh0OiBgJHtpdGVtLmNhdGVnb3J5IHx8IHJlcS5jYXRlZ29yeX0gLSBRdHk6ICR7aXRlbS5xdWFudGl0eX0gQCAke3JlcS5jdXJyZW5jeSB8fCAnVVNEJ30gJHtOdW1iZXIoaXRlbS51bml0UHJpY2UpLnRvRml4ZWQoMil9YCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0udG90YWxQcmljZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgcmVxdWlzaXRpb25zIHdpdGhvdXQgaXRlbXNcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYFJlcXVpc2l0aW9uIChSZWY6ICR7cmVxLmlkLnNsaWNlKC02KX0pIC0gJHtyZXEuY2F0ZWdvcnl9YCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHJlcS51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHJlcS5hbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBpbnZvaWNlc1xyXG4gICAgZm9yIChjb25zdCBpbnYgb2YgcGF5bWVudC5pbnZvaWNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgc3VidGV4dDogYFZlbmRvcjogJHtpbnYudmVuZG9yLm5hbWV9YCxcclxuICAgICAgICAgICAgZGF0ZTogaW52LmR1ZURhdGUsXHJcbiAgICAgICAgICAgIGFtb3VudDogaW52LmFtb3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBleHBlbnNlc1xyXG4gICAgZm9yIChjb25zdCBleHAgb2YgcGF5bWVudC5leHBlbnNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICBzdWJ0ZXh0OiBgUmVpbWJ1cnNlbWVudDogJHtleHAudXNlci5uYW1lfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgYW1vdW50OiBleHAuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGJ1ZGdldHNcclxuICAgIGZvciAoY29uc3QgYnVkIG9mIHBheW1lbnQubW9udGhseUJ1ZGdldHMpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBCdWRnZXQgQWxsb2NhdGlvbjogJHtidWQuYnJhbmNofWAsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGBQZXJpb2Q6ICR7YnVkLm1vbnRofS8ke2J1ZC55ZWFyfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGJ1ZC51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgIGFtb3VudDogYnVkLnRvdGFsQW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIEJlbmVmaWNpYXJ5IGxvZ2ljXHJcbiAgICAvLyBXZSB0cnkgdG8gZmluZCBhIGNvbW1vbiBiZW5lZmljaWFyeSBpZiBwb3NzaWJsZVxyXG4gICAgbGV0IGJlbmVmaWNpYXJ5TmFtZSA9IFwiVmFyaW91cyBCZW5lZmljaWFyaWVzXCI7XHJcbiAgICBsZXQgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCJcIjtcclxuXHJcbiAgICAvLyAxLiBDaGVjayBpbnZvaWNlc1xyXG4gICAgaWYgKHBheW1lbnQuaW52b2ljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VmVuZG9ySWQgPSBwYXltZW50Lmludm9pY2VzWzBdLnZlbmRvcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVWZW5kb3IgPSBwYXltZW50Lmludm9pY2VzLmV2ZXJ5KGkgPT4gaS52ZW5kb3JJZCA9PT0gZmlyc3RWZW5kb3JJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVWZW5kb3IpIHtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlOYW1lID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IubmFtZTtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlBZGRyZXNzID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IuYWRkcmVzcyB8fCBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDIuIENoZWNrIGV4cGVuc2VzXHJcbiAgICBlbHNlIGlmIChwYXltZW50LmV4cGVuc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBmaXJzdFVzZXJJZCA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5leHBlbnNlcy5ldmVyeShlID0+IGUudXNlcklkID09PSBmaXJzdFVzZXJJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVVc2VyKSB7XHJcbiAgICAgICAgICAgIGJlbmVmaWNpYXJ5TmFtZSA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlci5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDMuIENoZWNrIHJlcXVpc2l0aW9uc1xyXG4gICAgZWxzZSBpZiAocGF5bWVudC5yZXF1aXNpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VXNlcklkID0gcGF5bWVudC5yZXF1aXNpdGlvbnNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5yZXF1aXNpdGlvbnMuZXZlcnkociA9PiByLnVzZXJJZCA9PT0gZmlyc3RVc2VySWQpO1xyXG4gICAgICAgIGlmIChhbGxTYW1lVXNlcikge1xyXG4gICAgICAgICAgICBiZW5lZmljaWFyeU5hbWUgPSBwYXltZW50LnJlcXVpc2l0aW9uc1swXS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFuIHBheW1lbnQgbWV0aG9kXHJcbiAgICBsZXQgcGF5TWV0aG9kID0gJ0JhbmsgVHJhbnNmZXInO1xyXG4gICAgaWYgKHBheW1lbnQubWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKHBheW1lbnQubWV0aG9kID09PSAnTU9CSUxFX01PTkVZJykgcGF5TWV0aG9kID0gJ01vYmlsZSBNb25leSc7XHJcbiAgICAgICAgZWxzZSBpZiAocGF5bWVudC5tZXRob2QgPT09ICdDQVNIJykgcGF5TWV0aG9kID0gJ0Nhc2gnO1xyXG4gICAgICAgIGVsc2UgcGF5TWV0aG9kID0gcGF5bWVudC5tZXRob2QucmVwbGFjZSgvXy9nLCAnICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVjZWlwdE5vOiBgUkNULSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke3BheW1lbnQuaWQuc2xpY2UoMCwgNikudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IHBheW1lbnQucHJvY2Vzc2VkQXQgfHwgcGF5bWVudC51cGRhdGVkQXQsXHJcbiAgICAgICAgYW1vdW50OiBwYXltZW50LmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHBheU1ldGhvZCxcclxuICAgICAgICBwYXltZW50UmVmOiBwYXltZW50LnJlZmVyZW5jZSB8fCBgVFJYLSR7cGF5bWVudC5pZC5zbGljZSgwLCA4KX1gLFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IHBheW1lbnQubWFrZXI/Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogcGF5bWVudC5jaGVja2VyPy5uYW1lIHx8IFwiUGVuZGluZ1wiLFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IGJlbmVmaWNpYXJ5TmFtZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkl0ZW1EZXRhaWxzRm9yUmVjZWlwdChpdGVtSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uSXRlbS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaXRlbUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgYXBwcm92ZXI6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBsZXZlbDogJ2Rlc2MnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHJlcSA9IGl0ZW0ucmVxdWlzaXRpb247XHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgY29uc3QgYXV0aG9yaXplZEJ5ID0gcmVxLmFwcHJvdmFscz8uWzBdPy5hcHByb3Zlcj8ubmFtZSB8fCBcIlBlbmRpbmdcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiQmVuZWZpY2lhcnlcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5QWRkcmVzcyA9IHJlcS5kZXBhcnRtZW50ID8gYCR7cmVxLmRlcGFydG1lbnR9IERlcHRgIDogKHJlcS5icmFuY2ggfHwgXCJOL0FcIik7XHJcblxyXG4gICAgY29uc3QgY3VycmVuY3kgPSByZXEuY3VycmVuY3kgfHwgXCJVU0RcIjtcclxuICAgIGNvbnN0IGl0ZW1Ub3RhbCA9IGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnVuaXRQcmljZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtpdGVtLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICBhbW91bnQ6IGl0ZW1Ub3RhbCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHJlcS5wYXltZW50TWV0aG9kPy5yZXBsYWNlKC9fL2csIFwiIFwiKSB8fCBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSVRFTS0ke2l0ZW0uaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYCR7aXRlbS5jYXRlZ29yeX0g4oCUIFF0eTogJHtpdGVtLnF1YW50aXR5fSBAICR7Y3VycmVuY3l9ICR7TnVtYmVyKGl0ZW0udW5pdFByaWNlKS50b0ZpeGVkKDIpfWAsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbVRvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICByZXF1ZXN0ZWRCeSxcclxuICAgICAgICAgICAgYXV0aG9yaXplZEJ5LFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBeUVzQix3TUFBQSJ9
}),
"[project]/src/app/actions/data:901c43 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExpenseDetailsForReceipt",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40330b0bc0e9457ad333184e3c03499b6af8f3f22d":"getExpenseDetailsForReceipt"},"src/app/actions/receipt-studio.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40330b0bc0e9457ad333184e3c03499b6af8f3f22d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getExpenseDetailsForReceipt");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVjZWlwdC1zdHVkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkRldGFpbHNGb3JSZWNlaXB0KHJlcXVpc2l0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCAocHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUgYXMgYW55KSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcXVpc2l0aW9uSWQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiB0cnVlLCAvLyBJbmNsdWRlIHJlcXVpc2l0aW9uIGl0ZW1zXHJcbiAgICAgICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmVyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlcSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gQXBwcm92ZXJzXHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAvLyBBdXRob3JpemVkIGJ5IGhpZ2hlc3QgbGV2ZWwgYXBwcm92ZXI/XHJcbiAgICBjb25zdCBhdXRob3JpemVkQnkgPSByZXEuYXBwcm92YWxzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBiLmxldmVsIC0gYS5sZXZlbClbMF0/LmFwcHJvdmVyPy5uYW1lIHx8IFwiUGVuZGluZ1wiO1xyXG5cclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyLm5hbWUgfHwgXCJCZW5lZmljaWFyeVwiO1xyXG4gICAgY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gcmVxLmRlcGFydG1lbnQgPyBgJHtyZXEuZGVwYXJ0bWVudH0gRGVwdGAgOiBcIk4vQVwiO1xyXG5cclxuICAgIC8vIEJ1aWxkIGl0ZW1zIGFycmF5IGZyb20gcmVxdWlzaXRpb24gaXRlbXMgaWYgdGhleSBleGlzdCwgb3RoZXJ3aXNlIHVzZSB0aGUgcmVxdWlzaXRpb24gaXRzZWxmXHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuXHJcbiAgICBpZiAocmVxLml0ZW1zICYmIHJlcS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gTWFwIGVhY2ggcmVxdWlzaXRpb24gaXRlbSB0byB0aGUgcmVjZWlwdCBmb3JtYXRcclxuICAgICAgICBpdGVtcyA9IHJlcS5pdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGAke2l0ZW0uY2F0ZWdvcnl9IC0gUXR5OiAke2l0ZW0ucXVhbnRpdHl9IEAgJHtyZXEuY3VycmVuY3kgfHwgJ1VTRCd9ICR7aXRlbS51bml0UHJpY2UudG9GaXhlZCgyKX1gLFxyXG4gICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiBpdGVtLnRvdGFsUHJpY2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIHNpbmdsZSBpdGVtIChmb3Igb2xkIHJlcXVpc2l0aW9ucyB3aXRob3V0IGl0ZW1zKVxyXG4gICAgICAgIGl0ZW1zID0gW3tcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS50aXRsZSxcclxuICAgICAgICAgICAgc3VidGV4dDogcmVxLmRlc2NyaXB0aW9uIHx8IHJlcS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgZGF0ZTogcmVxLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiByZXEuYW1vdW50XHJcbiAgICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7cmVxLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiByZXEudXBkYXRlZEF0LFxyXG4gICAgICAgIGFtb3VudDogcmVxLmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBSRVEtJHtyZXEuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnksXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeSxcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludm9pY2VEZXRhaWxzRm9yUmVjZWlwdChpbnZvaWNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpbnYgPSBhd2FpdCBwcmlzbWEuaW52b2ljZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaW52b2ljZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB2ZW5kb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWludikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7aW52LmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgYW1vdW50OiBpbnYuYW1vdW50LFxyXG4gICAgICAgIGJlbmVmaWNpYXJ5OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGludi52ZW5kb3IubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogaW52LnZlbmRvci5hZGRyZXNzIHx8IFwiTi9BXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBheW1lbnRNb2RlOiBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSU5WLSR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgICAgIHN1YnRleHQ6IGludi5kZXNjcmlwdGlvbiB8fCBcIlZlbmRvciBQYXltZW50XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGludi5hbW91bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RlZEJ5OiBpbnYuY3JlYXRlZEJ5Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJGaW5hbmNlIE1hbmFnZXJcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VEZXRhaWxzRm9yUmVjZWlwdChleHBlbnNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBleHAgPSBhd2FpdCBwcmlzbWEuZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXhwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtleHAuaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICBhbW91bnQ6IGV4cC5hbW91bnQsXHJcbiAgICAgICAgYmVuZWZpY2lhcnk6IHtcclxuICAgICAgICAgICAgbmFtZTogZXhwLnVzZXIubmFtZSB8fCBcIlVua25vd25cIixcclxuICAgICAgICAgICAgYWRkcmVzczogZXhwLnVzZXIuZGVwYXJ0bWVudCA/IGAke2V4cC51c2VyLmRlcGFydG1lbnR9IERlcHRgIDogXCJOL0FcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBFWFAtJHtleHAuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogZXhwLmRlc2NyaXB0aW9uIHx8IGV4cC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogZXhwLmFtb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IGV4cC51c2VyLm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJEZXBhcnRtZW50IEhlYWRcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bWVudERldGFpbHNGb3JSZWNlaXB0KHBheW1lbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cclxuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBwcmlzbWEucGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0cnVlIC8vIEZldGNoIGl0ZW1zIGZvciBkZXRhaWxlZCBicmVha2Rvd25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW52b2ljZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB2ZW5kb3I6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwZW5zZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbnRobHlCdWRnZXRzOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWtlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY2hlY2tlcjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGF5bWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtIGludG8gUmVjZWlwdCBEYXRhIGZvcm1hdFxyXG4gICAgLy8gRmxhdHRlbiBpdGVtcyBmcm9tIGRpc3BhcmF0ZSBzb3VyY2VzXHJcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG5cclxuICAgIC8vIEFkZCByZXF1aXNpdGlvbnNcclxuICAgIGZvciAoY29uc3QgcmVxIG9mIHBheW1lbnQucmVxdWlzaXRpb25zKSB7XHJcbiAgICAgICAgaWYgKHJlcS5pdGVtcyAmJiByZXEuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBBZGQgaW5kaXZpZHVhbCBpdGVtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVxLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0ZXh0OiBgJHtpdGVtLmNhdGVnb3J5IHx8IHJlcS5jYXRlZ29yeX0gLSBRdHk6ICR7aXRlbS5xdWFudGl0eX0gQCAke3JlcS5jdXJyZW5jeSB8fCAnVVNEJ30gJHtOdW1iZXIoaXRlbS51bml0UHJpY2UpLnRvRml4ZWQoMil9YCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0udG90YWxQcmljZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgcmVxdWlzaXRpb25zIHdpdGhvdXQgaXRlbXNcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYFJlcXVpc2l0aW9uIChSZWY6ICR7cmVxLmlkLnNsaWNlKC02KX0pIC0gJHtyZXEuY2F0ZWdvcnl9YCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHJlcS51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHJlcS5hbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBpbnZvaWNlc1xyXG4gICAgZm9yIChjb25zdCBpbnYgb2YgcGF5bWVudC5pbnZvaWNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgc3VidGV4dDogYFZlbmRvcjogJHtpbnYudmVuZG9yLm5hbWV9YCxcclxuICAgICAgICAgICAgZGF0ZTogaW52LmR1ZURhdGUsXHJcbiAgICAgICAgICAgIGFtb3VudDogaW52LmFtb3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBleHBlbnNlc1xyXG4gICAgZm9yIChjb25zdCBleHAgb2YgcGF5bWVudC5leHBlbnNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICBzdWJ0ZXh0OiBgUmVpbWJ1cnNlbWVudDogJHtleHAudXNlci5uYW1lfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgYW1vdW50OiBleHAuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGJ1ZGdldHNcclxuICAgIGZvciAoY29uc3QgYnVkIG9mIHBheW1lbnQubW9udGhseUJ1ZGdldHMpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBCdWRnZXQgQWxsb2NhdGlvbjogJHtidWQuYnJhbmNofWAsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGBQZXJpb2Q6ICR7YnVkLm1vbnRofS8ke2J1ZC55ZWFyfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGJ1ZC51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgIGFtb3VudDogYnVkLnRvdGFsQW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIEJlbmVmaWNpYXJ5IGxvZ2ljXHJcbiAgICAvLyBXZSB0cnkgdG8gZmluZCBhIGNvbW1vbiBiZW5lZmljaWFyeSBpZiBwb3NzaWJsZVxyXG4gICAgbGV0IGJlbmVmaWNpYXJ5TmFtZSA9IFwiVmFyaW91cyBCZW5lZmljaWFyaWVzXCI7XHJcbiAgICBsZXQgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCJcIjtcclxuXHJcbiAgICAvLyAxLiBDaGVjayBpbnZvaWNlc1xyXG4gICAgaWYgKHBheW1lbnQuaW52b2ljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VmVuZG9ySWQgPSBwYXltZW50Lmludm9pY2VzWzBdLnZlbmRvcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVWZW5kb3IgPSBwYXltZW50Lmludm9pY2VzLmV2ZXJ5KGkgPT4gaS52ZW5kb3JJZCA9PT0gZmlyc3RWZW5kb3JJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVWZW5kb3IpIHtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlOYW1lID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IubmFtZTtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlBZGRyZXNzID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IuYWRkcmVzcyB8fCBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDIuIENoZWNrIGV4cGVuc2VzXHJcbiAgICBlbHNlIGlmIChwYXltZW50LmV4cGVuc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBmaXJzdFVzZXJJZCA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5leHBlbnNlcy5ldmVyeShlID0+IGUudXNlcklkID09PSBmaXJzdFVzZXJJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVVc2VyKSB7XHJcbiAgICAgICAgICAgIGJlbmVmaWNpYXJ5TmFtZSA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlci5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDMuIENoZWNrIHJlcXVpc2l0aW9uc1xyXG4gICAgZWxzZSBpZiAocGF5bWVudC5yZXF1aXNpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VXNlcklkID0gcGF5bWVudC5yZXF1aXNpdGlvbnNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5yZXF1aXNpdGlvbnMuZXZlcnkociA9PiByLnVzZXJJZCA9PT0gZmlyc3RVc2VySWQpO1xyXG4gICAgICAgIGlmIChhbGxTYW1lVXNlcikge1xyXG4gICAgICAgICAgICBiZW5lZmljaWFyeU5hbWUgPSBwYXltZW50LnJlcXVpc2l0aW9uc1swXS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFuIHBheW1lbnQgbWV0aG9kXHJcbiAgICBsZXQgcGF5TWV0aG9kID0gJ0JhbmsgVHJhbnNmZXInO1xyXG4gICAgaWYgKHBheW1lbnQubWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKHBheW1lbnQubWV0aG9kID09PSAnTU9CSUxFX01PTkVZJykgcGF5TWV0aG9kID0gJ01vYmlsZSBNb25leSc7XHJcbiAgICAgICAgZWxzZSBpZiAocGF5bWVudC5tZXRob2QgPT09ICdDQVNIJykgcGF5TWV0aG9kID0gJ0Nhc2gnO1xyXG4gICAgICAgIGVsc2UgcGF5TWV0aG9kID0gcGF5bWVudC5tZXRob2QucmVwbGFjZSgvXy9nLCAnICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVjZWlwdE5vOiBgUkNULSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke3BheW1lbnQuaWQuc2xpY2UoMCwgNikudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IHBheW1lbnQucHJvY2Vzc2VkQXQgfHwgcGF5bWVudC51cGRhdGVkQXQsXHJcbiAgICAgICAgYW1vdW50OiBwYXltZW50LmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHBheU1ldGhvZCxcclxuICAgICAgICBwYXltZW50UmVmOiBwYXltZW50LnJlZmVyZW5jZSB8fCBgVFJYLSR7cGF5bWVudC5pZC5zbGljZSgwLCA4KX1gLFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IHBheW1lbnQubWFrZXI/Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogcGF5bWVudC5jaGVja2VyPy5uYW1lIHx8IFwiUGVuZGluZ1wiLFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IGJlbmVmaWNpYXJ5TmFtZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkl0ZW1EZXRhaWxzRm9yUmVjZWlwdChpdGVtSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uSXRlbS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaXRlbUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgYXBwcm92ZXI6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBsZXZlbDogJ2Rlc2MnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHJlcSA9IGl0ZW0ucmVxdWlzaXRpb247XHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgY29uc3QgYXV0aG9yaXplZEJ5ID0gcmVxLmFwcHJvdmFscz8uWzBdPy5hcHByb3Zlcj8ubmFtZSB8fCBcIlBlbmRpbmdcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiQmVuZWZpY2lhcnlcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5QWRkcmVzcyA9IHJlcS5kZXBhcnRtZW50ID8gYCR7cmVxLmRlcGFydG1lbnR9IERlcHRgIDogKHJlcS5icmFuY2ggfHwgXCJOL0FcIik7XHJcblxyXG4gICAgY29uc3QgY3VycmVuY3kgPSByZXEuY3VycmVuY3kgfHwgXCJVU0RcIjtcclxuICAgIGNvbnN0IGl0ZW1Ub3RhbCA9IGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnVuaXRQcmljZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtpdGVtLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICBhbW91bnQ6IGl0ZW1Ub3RhbCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHJlcS5wYXltZW50TWV0aG9kPy5yZXBsYWNlKC9fL2csIFwiIFwiKSB8fCBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSVRFTS0ke2l0ZW0uaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYCR7aXRlbS5jYXRlZ29yeX0g4oCUIFF0eTogJHtpdGVtLnF1YW50aXR5fSBAICR7Y3VycmVuY3l9ICR7TnVtYmVyKGl0ZW0udW5pdFByaWNlKS50b0ZpeGVkKDIpfWAsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbVRvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICByZXF1ZXN0ZWRCeSxcclxuICAgICAgICAgICAgYXV0aG9yaXplZEJ5LFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBa0hzQix3TUFBQSJ9
}),
"[project]/src/app/actions/data:7905f2 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRequisitionItemDetailsForReceipt",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40425b849ed1e3a38c22f0b7695c8b554371efa9a3":"getRequisitionItemDetailsForReceipt"},"src/app/actions/receipt-studio.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40425b849ed1e3a38c22f0b7695c8b554371efa9a3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getRequisitionItemDetailsForReceipt");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVjZWlwdC1zdHVkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkRldGFpbHNGb3JSZWNlaXB0KHJlcXVpc2l0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCAocHJpc21hLnJlcXVpc2l0aW9uLmZpbmRVbmlxdWUgYXMgYW55KSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcXVpc2l0aW9uSWQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiB0cnVlLCAvLyBJbmNsdWRlIHJlcXVpc2l0aW9uIGl0ZW1zXHJcbiAgICAgICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmVyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlcSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gQXBwcm92ZXJzXHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAvLyBBdXRob3JpemVkIGJ5IGhpZ2hlc3QgbGV2ZWwgYXBwcm92ZXI/XHJcbiAgICBjb25zdCBhdXRob3JpemVkQnkgPSByZXEuYXBwcm92YWxzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBiLmxldmVsIC0gYS5sZXZlbClbMF0/LmFwcHJvdmVyPy5uYW1lIHx8IFwiUGVuZGluZ1wiO1xyXG5cclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyLm5hbWUgfHwgXCJCZW5lZmljaWFyeVwiO1xyXG4gICAgY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gcmVxLmRlcGFydG1lbnQgPyBgJHtyZXEuZGVwYXJ0bWVudH0gRGVwdGAgOiBcIk4vQVwiO1xyXG5cclxuICAgIC8vIEJ1aWxkIGl0ZW1zIGFycmF5IGZyb20gcmVxdWlzaXRpb24gaXRlbXMgaWYgdGhleSBleGlzdCwgb3RoZXJ3aXNlIHVzZSB0aGUgcmVxdWlzaXRpb24gaXRzZWxmXHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuXHJcbiAgICBpZiAocmVxLml0ZW1zICYmIHJlcS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gTWFwIGVhY2ggcmVxdWlzaXRpb24gaXRlbSB0byB0aGUgcmVjZWlwdCBmb3JtYXRcclxuICAgICAgICBpdGVtcyA9IHJlcS5pdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGAke2l0ZW0uY2F0ZWdvcnl9IC0gUXR5OiAke2l0ZW0ucXVhbnRpdHl9IEAgJHtyZXEuY3VycmVuY3kgfHwgJ1VTRCd9ICR7aXRlbS51bml0UHJpY2UudG9GaXhlZCgyKX1gLFxyXG4gICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiBpdGVtLnRvdGFsUHJpY2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIHNpbmdsZSBpdGVtIChmb3Igb2xkIHJlcXVpc2l0aW9ucyB3aXRob3V0IGl0ZW1zKVxyXG4gICAgICAgIGl0ZW1zID0gW3tcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS50aXRsZSxcclxuICAgICAgICAgICAgc3VidGV4dDogcmVxLmRlc2NyaXB0aW9uIHx8IHJlcS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgZGF0ZTogcmVxLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgYW1vdW50OiByZXEuYW1vdW50XHJcbiAgICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7cmVxLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiByZXEudXBkYXRlZEF0LFxyXG4gICAgICAgIGFtb3VudDogcmVxLmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBSRVEtJHtyZXEuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnksXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeSxcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludm9pY2VEZXRhaWxzRm9yUmVjZWlwdChpbnZvaWNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpbnYgPSBhd2FpdCBwcmlzbWEuaW52b2ljZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaW52b2ljZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB2ZW5kb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWludikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWNlaXB0Tm86IGBWQ0gtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7aW52LmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgYW1vdW50OiBpbnYuYW1vdW50LFxyXG4gICAgICAgIGJlbmVmaWNpYXJ5OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGludi52ZW5kb3IubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogaW52LnZlbmRvci5hZGRyZXNzIHx8IFwiTi9BXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBheW1lbnRNb2RlOiBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSU5WLSR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgICAgIHN1YnRleHQ6IGludi5kZXNjcmlwdGlvbiB8fCBcIlZlbmRvciBQYXltZW50XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGludi5hbW91bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RlZEJ5OiBpbnYuY3JlYXRlZEJ5Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJGaW5hbmNlIE1hbmFnZXJcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VEZXRhaWxzRm9yUmVjZWlwdChleHBlbnNlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBleHAgPSBhd2FpdCBwcmlzbWEuZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXhwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtleHAuaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICBhbW91bnQ6IGV4cC5hbW91bnQsXHJcbiAgICAgICAgYmVuZWZpY2lhcnk6IHtcclxuICAgICAgICAgICAgbmFtZTogZXhwLnVzZXIubmFtZSB8fCBcIlVua25vd25cIixcclxuICAgICAgICAgICAgYWRkcmVzczogZXhwLnVzZXIuZGVwYXJ0bWVudCA/IGAke2V4cC51c2VyLmRlcGFydG1lbnR9IERlcHRgIDogXCJOL0FcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IFwiQmFuayBUcmFuc2ZlclwiLFxyXG4gICAgICAgIHBheW1lbnRSZWY6IGBFWFAtJHtleHAuaWQuc2xpY2UoMCwgOCl9YCxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogZXhwLmRlc2NyaXB0aW9uIHx8IGV4cC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogZXhwLmFtb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IGV4cC51c2VyLm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogXCJEZXBhcnRtZW50IEhlYWRcIixcclxuICAgICAgICAgICAgcGFpZEJ5OiBcIkZpbmFuY2UgRGVwdFwiLFxyXG4gICAgICAgICAgICByZWNlaXZlZEJ5OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bWVudERldGFpbHNGb3JSZWNlaXB0KHBheW1lbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cclxuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBwcmlzbWEucGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0cnVlIC8vIEZldGNoIGl0ZW1zIGZvciBkZXRhaWxlZCBicmVha2Rvd25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW52b2ljZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB2ZW5kb3I6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwZW5zZXM6IHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbnRobHlCdWRnZXRzOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWtlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY2hlY2tlcjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGF5bWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtIGludG8gUmVjZWlwdCBEYXRhIGZvcm1hdFxyXG4gICAgLy8gRmxhdHRlbiBpdGVtcyBmcm9tIGRpc3BhcmF0ZSBzb3VyY2VzXHJcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG5cclxuICAgIC8vIEFkZCByZXF1aXNpdGlvbnNcclxuICAgIGZvciAoY29uc3QgcmVxIG9mIHBheW1lbnQucmVxdWlzaXRpb25zKSB7XHJcbiAgICAgICAgaWYgKHJlcS5pdGVtcyAmJiByZXEuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBBZGQgaW5kaXZpZHVhbCBpdGVtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVxLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0ZXh0OiBgJHtpdGVtLmNhdGVnb3J5IHx8IHJlcS5jYXRlZ29yeX0gLSBRdHk6ICR7aXRlbS5xdWFudGl0eX0gQCAke3JlcS5jdXJyZW5jeSB8fCAnVVNEJ30gJHtOdW1iZXIoaXRlbS51bml0UHJpY2UpLnRvRml4ZWQoMil9YCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0udG90YWxQcmljZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgcmVxdWlzaXRpb25zIHdpdGhvdXQgaXRlbXNcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYFJlcXVpc2l0aW9uIChSZWY6ICR7cmVxLmlkLnNsaWNlKC02KX0pIC0gJHtyZXEuY2F0ZWdvcnl9YCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHJlcS51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHJlcS5hbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBpbnZvaWNlc1xyXG4gICAgZm9yIChjb25zdCBpbnYgb2YgcGF5bWVudC5pbnZvaWNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEludm9pY2U6ICR7aW52Lmludm9pY2VOdW1iZXJ9YCxcclxuICAgICAgICAgICAgc3VidGV4dDogYFZlbmRvcjogJHtpbnYudmVuZG9yLm5hbWV9YCxcclxuICAgICAgICAgICAgZGF0ZTogaW52LmR1ZURhdGUsXHJcbiAgICAgICAgICAgIGFtb3VudDogaW52LmFtb3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBleHBlbnNlc1xyXG4gICAgZm9yIChjb25zdCBleHAgb2YgcGF5bWVudC5leHBlbnNlcykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZXhwLnRpdGxlLFxyXG4gICAgICAgICAgICBzdWJ0ZXh0OiBgUmVpbWJ1cnNlbWVudDogJHtleHAudXNlci5uYW1lfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGV4cC5leHBlbnNlRGF0ZSxcclxuICAgICAgICAgICAgYW1vdW50OiBleHAuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGJ1ZGdldHNcclxuICAgIGZvciAoY29uc3QgYnVkIG9mIHBheW1lbnQubW9udGhseUJ1ZGdldHMpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBCdWRnZXQgQWxsb2NhdGlvbjogJHtidWQuYnJhbmNofWAsXHJcbiAgICAgICAgICAgIHN1YnRleHQ6IGBQZXJpb2Q6ICR7YnVkLm1vbnRofS8ke2J1ZC55ZWFyfWAsXHJcbiAgICAgICAgICAgIGRhdGU6IGJ1ZC51cGRhdGVkQXQsXHJcbiAgICAgICAgICAgIGFtb3VudDogYnVkLnRvdGFsQW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIEJlbmVmaWNpYXJ5IGxvZ2ljXHJcbiAgICAvLyBXZSB0cnkgdG8gZmluZCBhIGNvbW1vbiBiZW5lZmljaWFyeSBpZiBwb3NzaWJsZVxyXG4gICAgbGV0IGJlbmVmaWNpYXJ5TmFtZSA9IFwiVmFyaW91cyBCZW5lZmljaWFyaWVzXCI7XHJcbiAgICBsZXQgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCJcIjtcclxuXHJcbiAgICAvLyAxLiBDaGVjayBpbnZvaWNlc1xyXG4gICAgaWYgKHBheW1lbnQuaW52b2ljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VmVuZG9ySWQgPSBwYXltZW50Lmludm9pY2VzWzBdLnZlbmRvcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVWZW5kb3IgPSBwYXltZW50Lmludm9pY2VzLmV2ZXJ5KGkgPT4gaS52ZW5kb3JJZCA9PT0gZmlyc3RWZW5kb3JJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVWZW5kb3IpIHtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlOYW1lID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IubmFtZTtcclxuICAgICAgICAgICAgYmVuZWZpY2lhcnlBZGRyZXNzID0gcGF5bWVudC5pbnZvaWNlc1swXS52ZW5kb3IuYWRkcmVzcyB8fCBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDIuIENoZWNrIGV4cGVuc2VzXHJcbiAgICBlbHNlIGlmIChwYXltZW50LmV4cGVuc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBmaXJzdFVzZXJJZCA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5leHBlbnNlcy5ldmVyeShlID0+IGUudXNlcklkID09PSBmaXJzdFVzZXJJZCk7XHJcbiAgICAgICAgaWYgKGFsbFNhbWVVc2VyKSB7XHJcbiAgICAgICAgICAgIGJlbmVmaWNpYXJ5TmFtZSA9IHBheW1lbnQuZXhwZW5zZXNbMF0udXNlci5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIDMuIENoZWNrIHJlcXVpc2l0aW9uc1xyXG4gICAgZWxzZSBpZiAocGF5bWVudC5yZXF1aXNpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VXNlcklkID0gcGF5bWVudC5yZXF1aXNpdGlvbnNbMF0udXNlcklkO1xyXG4gICAgICAgIGNvbnN0IGFsbFNhbWVVc2VyID0gcGF5bWVudC5yZXF1aXNpdGlvbnMuZXZlcnkociA9PiByLnVzZXJJZCA9PT0gZmlyc3RVc2VySWQpO1xyXG4gICAgICAgIGlmIChhbGxTYW1lVXNlcikge1xyXG4gICAgICAgICAgICBiZW5lZmljaWFyeU5hbWUgPSBwYXltZW50LnJlcXVpc2l0aW9uc1swXS51c2VyLm5hbWUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFuIHBheW1lbnQgbWV0aG9kXHJcbiAgICBsZXQgcGF5TWV0aG9kID0gJ0JhbmsgVHJhbnNmZXInO1xyXG4gICAgaWYgKHBheW1lbnQubWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKHBheW1lbnQubWV0aG9kID09PSAnTU9CSUxFX01PTkVZJykgcGF5TWV0aG9kID0gJ01vYmlsZSBNb25leSc7XHJcbiAgICAgICAgZWxzZSBpZiAocGF5bWVudC5tZXRob2QgPT09ICdDQVNIJykgcGF5TWV0aG9kID0gJ0Nhc2gnO1xyXG4gICAgICAgIGVsc2UgcGF5TWV0aG9kID0gcGF5bWVudC5tZXRob2QucmVwbGFjZSgvXy9nLCAnICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVjZWlwdE5vOiBgUkNULSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke3BheW1lbnQuaWQuc2xpY2UoMCwgNikudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGRhdGU6IHBheW1lbnQucHJvY2Vzc2VkQXQgfHwgcGF5bWVudC51cGRhdGVkQXQsXHJcbiAgICAgICAgYW1vdW50OiBwYXltZW50LmFtb3VudCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHBheU1ldGhvZCxcclxuICAgICAgICBwYXltZW50UmVmOiBwYXltZW50LnJlZmVyZW5jZSB8fCBgVFJYLSR7cGF5bWVudC5pZC5zbGljZSgwLCA4KX1gLFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBhcHByb3ZhbHM6IHtcclxuICAgICAgICAgICAgcmVxdWVzdGVkQnk6IHBheW1lbnQubWFrZXI/Lm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6ZWRCeTogcGF5bWVudC5jaGVja2VyPy5uYW1lIHx8IFwiUGVuZGluZ1wiLFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IGJlbmVmaWNpYXJ5TmFtZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1aXNpdGlvbkl0ZW1EZXRhaWxzRm9yUmVjZWlwdChpdGVtSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHJcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgKHByaXNtYSBhcyBhbnkpLnJlcXVpc2l0aW9uSXRlbS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaXRlbUlkIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICByZXF1aXNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgYXBwcm92ZXI6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBsZXZlbDogJ2Rlc2MnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHJlcSA9IGl0ZW0ucmVxdWlzaXRpb247XHJcbiAgICBjb25zdCByZXF1ZXN0ZWRCeSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiVW5rbm93blwiO1xyXG4gICAgY29uc3QgYXV0aG9yaXplZEJ5ID0gcmVxLmFwcHJvdmFscz8uWzBdPy5hcHByb3Zlcj8ubmFtZSB8fCBcIlBlbmRpbmdcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5TmFtZSA9IHJlcS51c2VyPy5uYW1lIHx8IFwiQmVuZWZpY2lhcnlcIjtcclxuICAgIGNvbnN0IGJlbmVmaWNpYXJ5QWRkcmVzcyA9IHJlcS5kZXBhcnRtZW50ID8gYCR7cmVxLmRlcGFydG1lbnR9IERlcHRgIDogKHJlcS5icmFuY2ggfHwgXCJOL0FcIik7XHJcblxyXG4gICAgY29uc3QgY3VycmVuY3kgPSByZXEuY3VycmVuY3kgfHwgXCJVU0RcIjtcclxuICAgIGNvbnN0IGl0ZW1Ub3RhbCA9IGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnVuaXRQcmljZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY2VpcHRObzogYFZDSC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtpdGVtLmlkLnNsaWNlKDAsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICBhbW91bnQ6IGl0ZW1Ub3RhbCxcclxuICAgICAgICBiZW5lZmljaWFyeToge1xyXG4gICAgICAgICAgICBuYW1lOiBiZW5lZmljaWFyeU5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGJlbmVmaWNpYXJ5QWRkcmVzc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF5bWVudE1vZGU6IHJlcS5wYXltZW50TWV0aG9kPy5yZXBsYWNlKC9fL2csIFwiIFwiKSB8fCBcIkJhbmsgVHJhbnNmZXJcIixcclxuICAgICAgICBwYXltZW50UmVmOiBgSVRFTS0ke2l0ZW0uaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGV4dDogYCR7aXRlbS5jYXRlZ29yeX0g4oCUIFF0eTogJHtpdGVtLnF1YW50aXR5fSBAICR7Y3VycmVuY3l9ICR7TnVtYmVyKGl0ZW0udW5pdFByaWNlKS50b0ZpeGVkKDIpfWAsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbVRvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFwcHJvdmFsczoge1xyXG4gICAgICAgICAgICByZXF1ZXN0ZWRCeSxcclxuICAgICAgICAgICAgYXV0aG9yaXplZEJ5LFxyXG4gICAgICAgICAgICBwYWlkQnk6IFwiRmluYW5jZSBEZXB0XCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVkQnk6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVRBK1NzQixnTkFBQSJ9
}),
"[project]/src/components/finance-studio/VoucherPDF.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "VoucherPDF",
    ()=>VoucherPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__ = __turbopack_context__.i("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import, [project]/node_modules/@react-pdf/renderer)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
/**
 * GOOGLE SANS FONT (via @fontsource npm CDN — woff format for react-pdf compatibility)
 * react-pdf requires woff (not woff2) to avoid "Offset is outside the bounds of the DataView" error.
 */ __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Font"].register({
    family: 'GoogleSans',
    fonts: [
        {
            src: 'https://cdn.jsdelivr.net/npm/@fontsource/google-sans@5.2.1/files/google-sans-latin-400-normal.woff',
            fontWeight: 400
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/@fontsource/google-sans@5.2.1/files/google-sans-latin-500-normal.woff',
            fontWeight: 500
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/@fontsource/google-sans@5.2.1/files/google-sans-latin-700-normal.woff',
            fontWeight: 700
        }
    ]
});
const px = (p)=>p * 0.75;
// Color interpolation for smooth gradients
const hexToRgb = (hex)=>{
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
const lerpColor = (c1, c2, t)=>{
    const rgb1 = hexToRgb(c1);
    const rgb2 = hexToRgb(c2);
    if (!rgb1 || !rgb2) return c1;
    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * t);
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * t);
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * t);
    return `rgb(${r}, ${g}, ${b})`;
};
const styles = __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["StyleSheet"].create({
    page: {
        fontFamily: 'GoogleSans',
        fontSize: px(11),
        color: '#111827',
        backgroundColor: '#ffffff'
    },
    // Header
    header: {
        position: 'relative',
        height: px(180),
        borderBottomWidth: px(1),
        borderBottomColor: '#E5E7EB',
        borderBottomStyle: 'solid',
        overflow: 'hidden'
    },
    // Footer
    footer: {
        position: 'relative',
        height: px(100),
        borderTopWidth: px(1),
        borderTopColor: '#E5E7EB',
        borderTopStyle: 'solid',
        marginTop: 'auto',
        overflow: 'hidden'
    },
    // Fill containers
    absoluteFill: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    bgImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    // Content Overlays (Absolutely Opaque)
    contentOverlay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: px(50),
        height: '100%',
        width: '100%'
    },
    logo: {
        height: px(60),
        width: px(150),
        objectFit: 'contain'
    },
    footerLogo: {
        height: px(30),
        width: px(100),
        objectFit: 'contain'
    },
    headerMeta: {
        textAlign: 'right'
    },
    headerLabel: {
        fontSize: px(11),
        textTransform: 'uppercase',
        letterSpacing: 2,
        color: '#374151',
        fontWeight: 700,
        marginBottom: px(8)
    },
    headerValue: {
        fontSize: px(11),
        fontWeight: 500,
        color: '#111827',
        fontFamily: 'Courier'
    },
    // Body
    body: {
        position: 'relative',
        paddingHorizontal: px(50),
        paddingVertical: px(60),
        flex: 1
    },
    bodyWatermark: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.28
    },
    bodyWatermarkImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    },
    bodyContent: {
        position: 'relative',
        zIndex: 1
    },
    infoGrid: {
        flexDirection: 'row',
        marginBottom: px(50),
        paddingBottom: px(30),
        borderBottomWidth: px(1),
        borderBottomColor: '#E5E7EB',
        borderBottomStyle: 'solid'
    },
    infoItem: {
        flex: 1
    },
    infoLabel: {
        fontSize: px(10),
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#374151',
        marginBottom: px(8),
        fontWeight: 700
    },
    infoValue: {
        fontSize: px(11),
        fontWeight: 500,
        lineHeight: 1.5,
        color: '#111827'
    },
    // Table
    table: {
        marginBottom: px(50),
        borderWidth: px(1),
        borderColor: '#E5E7EB',
        borderStyle: 'solid',
        borderRadius: px(10),
        overflow: 'hidden'
    },
    tableHeaderRow: {
        flexDirection: 'row',
        backgroundColor: '#2d216d'
    },
    tableHeaderCell: {
        paddingVertical: px(12),
        paddingHorizontal: px(15),
        fontSize: px(10),
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#ffffff',
        fontWeight: 600
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: px(1),
        borderBottomColor: '#E5E7EB',
        borderBottomStyle: 'solid'
    },
    tableRowLast: {
        flexDirection: 'row'
    },
    tableCell: {
        paddingVertical: px(14),
        paddingHorizontal: px(15),
        fontSize: px(11),
        color: '#111827',
        borderRightWidth: px(1),
        borderRightColor: '#E5E7EB',
        borderRightStyle: 'solid'
    },
    tableCellLastColumn: {
        paddingVertical: px(14),
        paddingHorizontal: px(15),
        fontSize: px(11),
        color: '#111827'
    },
    itemDescription: {
        fontWeight: 600,
        marginBottom: px(4)
    },
    itemSubtext: {
        fontSize: px(10),
        color: '#374151',
        fontWeight: 600
    },
    // Approvals
    approvalsGrid: {
        flexDirection: 'row',
        marginTop: px(40),
        paddingTop: px(30),
        borderTopWidth: px(1),
        borderTopColor: '#E5E7EB',
        borderTopStyle: 'solid'
    },
    // Total row
    tableTotalRow: {
        flexDirection: 'row',
        backgroundColor: '#F5F3FF'
    },
    tableTotalCell: {
        paddingVertical: px(10),
        paddingHorizontal: px(15),
        fontSize: px(11),
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#374151',
        fontWeight: 700,
        borderRightWidth: px(1),
        borderRightColor: '#E5E7EB',
        borderRightStyle: 'solid'
    },
    tableTotalValueCell: {
        paddingVertical: px(10),
        paddingHorizontal: px(15),
        fontSize: px(13),
        fontWeight: 700,
        color: '#111827',
        borderRightWidth: px(1),
        borderRightColor: '#E5E7EB',
        borderRightStyle: 'solid'
    },
    tableTotalValueCellLast: {
        paddingVertical: px(10),
        paddingHorizontal: px(15),
        fontSize: px(13),
        fontWeight: 700,
        color: '#111827'
    },
    approvalBox: {
        flex: 1,
        justifyContent: 'flex-end',
        marginRight: px(20)
    },
    approvalBoxLast: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    approvalText: {
        fontSize: px(14),
        fontWeight: 600,
        color: '#111827',
        marginBottom: px(8),
        height: px(40),
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    approvalLine: {
        borderBottomWidth: px(1),
        borderBottomColor: '#E5E7EB',
        borderBottomStyle: 'solid',
        marginBottom: px(8),
        height: px(40)
    },
    approvalLabel: {
        fontSize: px(9),
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#374151',
        fontWeight: 700
    },
    footerDisclaimer: {
        fontSize: px(9),
        color: '#374151',
        textAlign: 'right',
        lineHeight: 1.6,
        maxWidth: px(450),
        opacity: 1,
        fontWeight: 500,
        letterSpacing: 0.3
    }
});
const formatCurrency = (val)=>`$${Number(val || 0).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
const formatLongDate = (date)=>{
    if (!date) return '';
    try {
        const d = date instanceof Date ? date : new Date(date);
        if (isNaN(d.getTime())) return String(date);
        return d.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    } catch (e) {
        return String(date);
    }
};
const formatShortDate = (date)=>{
    if (!date) return '';
    try {
        const d = date instanceof Date ? date : new Date(date);
        if (isNaN(d.getTime())) return String(date);
        return d.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        });
    } catch (e) {
        return String(date);
    }
};
const getImageUrl = (path, baseUrl)=>{
    if (!path || path === '__REMOVE__') return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl || ''}${cleanPath}`;
};
const VoucherPDF = ({ data, baseUrl, settings = {} })=>{
    const totalAmount = data?.items?.reduce((sum, item)=>sum + (item.amount || 0), 0) || data?.amount || 0;
    // Generate gradient strips for header (Top-Left to Bottom-Right roughly via linear strips)
    const headerStrips = [];
    const colorFrom = "#F3E8FF";
    const colorTo = "#DCFCE7";
    const STRIP_COUNT = 60;
    for(let i = 0; i < STRIP_COUNT; i++){
        const t = i / (STRIP_COUNT - 1);
        const color = lerpColor(colorFrom, colorTo, t);
        headerStrips.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
            style: {
                flex: 1,
                backgroundColor: color,
                opacity: 0.92
            }
        }, i, false, {
            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
            lineNumber: 357,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)));
    }
    // Generate gradient strips for footer
    const footerStrips = [];
    for(let i = 0; i < STRIP_COUNT; i++){
        const t = i / (STRIP_COUNT - 1);
        const color = lerpColor(colorFrom, colorTo, t);
        footerStrips.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
            style: {
                flex: 1,
                backgroundColor: color,
                opacity: 0.92
            }
        }, i, false, {
            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
            lineNumber: 367,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Document"], {
        title: `Voucher - ${data?.receiptNo || 'DOC'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Page"], {
            size: "A4",
            style: styles.page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                            style: styles.absoluteFill,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Image"], {
                                src: getImageUrl("/assets/receipts/abstract-curvy-smooth-blue-lines-layout-banner-design.png", baseUrl),
                                style: styles.bgImage
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                lineNumber: 379,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                            lineNumber: 378,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                            style: [
                                styles.absoluteFill,
                                {
                                    flexDirection: 'row'
                                }
                            ],
                            children: headerStrips
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                            lineNumber: 386,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                            style: styles.contentOverlay,
                            children: [
                                settings.voucher_header_logo !== '__REMOVE__' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Image"], {
                                    src: getImageUrl(settings.voucher_header_logo || ("TURBOPACK compile-time value", "/capitalpay.png") || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "/assets/receipts/cp.png"), baseUrl),
                                    style: [
                                        styles.logo,
                                        ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {
                                            height: px(28),
                                            width: px(90)
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                    lineNumber: 393,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                    style: styles.headerMeta,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                            style: styles.headerLabel,
                                            children: "Voucher"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 404,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                            style: styles.headerValue,
                                            children: data?.receiptNo || ''
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 405,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                    lineNumber: 403,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                            lineNumber: 391,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                    lineNumber: 376,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                    style: styles.body,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                            style: styles.bodyWatermark,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                style: {
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    width: '100%',
                                    height: '100%'
                                },
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Image"], {
                                        src: getImageUrl("/imgi_22_guilloche-background-certificate-diploma-currency-design_462925-336.png", baseUrl),
                                        style: {
                                            width: '50%',
                                            height: '33.33%',
                                            objectFit: 'cover'
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                        lineNumber: 416,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                lineNumber: 414,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                            lineNumber: 413,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                            style: styles.bodyContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                    style: styles.infoGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.infoItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.infoLabel,
                                                    children: "Beneficiary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.infoValue,
                                                    children: [
                                                        data?.beneficiary?.name || '',
                                                        '\n',
                                                        data?.beneficiary?.address || ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 428,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.infoItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.infoLabel,
                                                    children: "Disbursement Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.infoValue,
                                                    children: formatLongDate(data?.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 435,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.infoItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.infoLabel,
                                                    children: "Payment Mode"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.infoValue,
                                                    children: [
                                                        data?.paymentMode || '',
                                                        '\n',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                            style: {
                                                                color: '#374151',
                                                                fontWeight: 600
                                                            },
                                                            children: [
                                                                "Ref: ",
                                                                data?.paymentRef || ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 441,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                    lineNumber: 427,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                    style: styles.table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.tableHeaderRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: [
                                                        styles.tableHeaderCell,
                                                        {
                                                            width: '45%'
                                                        }
                                                    ],
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: [
                                                        styles.tableHeaderCell,
                                                        {
                                                            width: '15%',
                                                            textAlign: 'right'
                                                        }
                                                    ],
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: [
                                                        styles.tableHeaderCell,
                                                        {
                                                            width: '20%',
                                                            textAlign: 'right'
                                                        }
                                                    ],
                                                    children: "Requested Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: [
                                                        styles.tableHeaderCell,
                                                        {
                                                            width: '20%',
                                                            textAlign: 'right'
                                                        }
                                                    ],
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 451,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        data?.items && data.items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                data.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                        style: styles.tableRow,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                                style: [
                                                                    styles.tableCell,
                                                                    {
                                                                        width: '45%'
                                                                    }
                                                                ],
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                                        style: styles.itemDescription,
                                                                        children: item.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                                        lineNumber: 466,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item.subtext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                                        style: styles.itemSubtext,
                                                                        children: item.subtext
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                                        lineNumber: 467,
                                                                        columnNumber: 66
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                                style: [
                                                                    styles.tableCell,
                                                                    {
                                                                        width: '15%',
                                                                        textAlign: 'right'
                                                                    }
                                                                ],
                                                                children: formatShortDate(item.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                                style: [
                                                                    styles.tableCell,
                                                                    {
                                                                        width: '20%',
                                                                        textAlign: 'right'
                                                                    }
                                                                ],
                                                                children: formatCurrency(item.amount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                                style: [
                                                                    styles.tableCellLastColumn,
                                                                    {
                                                                        width: '20%',
                                                                        textAlign: 'right'
                                                                    }
                                                                ],
                                                                children: formatCurrency(item.amount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                data.items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: styles.tableTotalRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                            style: [
                                                                styles.tableTotalCell,
                                                                {
                                                                    width: '60%'
                                                                }
                                                            ],
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                            style: [
                                                                styles.tableTotalValueCell,
                                                                {
                                                                    width: '20%',
                                                                    textAlign: 'right'
                                                                }
                                                            ],
                                                            children: formatCurrency(totalAmount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                            style: [
                                                                styles.tableTotalValueCellLast,
                                                                {
                                                                    width: '20%',
                                                                    textAlign: 'right'
                                                                }
                                                            ],
                                                            children: formatCurrency(totalAmount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.tableRowLast,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.tableCell,
                                                        {
                                                            width: '45%'
                                                        }
                                                    ],
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                        style: styles.itemDescription,
                                                        children: "General Disbursement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: [
                                                        styles.tableCell,
                                                        {
                                                            width: '15%',
                                                            textAlign: 'right'
                                                        }
                                                    ],
                                                    children: formatShortDate(data?.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: [
                                                        styles.tableCell,
                                                        {
                                                            width: '20%',
                                                            textAlign: 'right'
                                                        }
                                                    ],
                                                    children: formatCurrency(totalAmount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: [
                                                        styles.tableCellLastColumn,
                                                        {
                                                            width: '20%',
                                                            textAlign: 'right'
                                                        }
                                                    ],
                                                    children: formatCurrency(totalAmount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 494,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                    lineNumber: 450,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                    style: styles.approvalsGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.approvalBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.approvalText,
                                                        {
                                                            height: px(20),
                                                            marginBottom: px(4)
                                                        }
                                                    ],
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                        style: {
                                                            fontSize: px(11),
                                                            fontWeight: 600
                                                        },
                                                        children: data?.approvals?.requestedBy || ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.approvalLine,
                                                        {
                                                            height: px(1),
                                                            marginBottom: px(6)
                                                        }
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.approvalLabel,
                                                    children: "Requested By"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 513,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.approvalBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.approvalText,
                                                        {
                                                            height: px(20),
                                                            marginBottom: px(4)
                                                        }
                                                    ],
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                        style: {
                                                            fontSize: px(11),
                                                            fontWeight: 600
                                                        },
                                                        children: data?.approvals?.authorizedBy || ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                        lineNumber: 522,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.approvalLine,
                                                        {
                                                            height: px(1),
                                                            marginBottom: px(6)
                                                        }
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.approvalLabel,
                                                    children: [
                                                        "Authorized By ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                            style: {
                                                                fontSize: px(7),
                                                                fontWeight: 400
                                                            },
                                                            children: "(Sign)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 85
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 520,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.approvalBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.approvalText,
                                                        {
                                                            height: px(20),
                                                            marginBottom: px(4)
                                                        }
                                                    ],
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                        style: {
                                                            fontSize: px(11),
                                                            fontWeight: 600
                                                        },
                                                        children: data?.approvals?.paidBy || ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.approvalLine,
                                                        {
                                                            height: px(1),
                                                            marginBottom: px(6)
                                                        }
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.approvalLabel,
                                                    children: [
                                                        "Paid By ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                            style: {
                                                                fontSize: px(7),
                                                                fontWeight: 400
                                                            },
                                                            children: "(Sign)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 79
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 527,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                            style: styles.approvalBoxLast,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.approvalText,
                                                        {
                                                            height: px(20),
                                                            marginBottom: px(4)
                                                        }
                                                    ],
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                        style: {
                                                            fontSize: px(11),
                                                            fontWeight: 600
                                                        },
                                                        children: data?.approvals?.receivedBy || ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                                    style: [
                                                        styles.approvalLine,
                                                        {
                                                            height: px(1),
                                                            marginBottom: px(6)
                                                        }
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                    style: styles.approvalLabel,
                                                    children: [
                                                        "Received By ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                                            style: {
                                                                fontSize: px(7),
                                                                fontWeight: 400
                                                            },
                                                            children: "(Sign)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 83
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 534,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                    lineNumber: 512,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                            lineNumber: 426,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                    lineNumber: 411,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                    style: styles.footer,
                    fixed: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                            style: [
                                styles.absoluteFill,
                                {
                                    flexDirection: 'row'
                                }
                            ],
                            children: footerStrips
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                            lineNumber: 547,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                            style: styles.contentOverlay,
                            children: [
                                settings.voucher_footer_logo !== '__REMOVE__' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Image"], {
                                    src: getImageUrl(settings.voucher_footer_logo || ("TURBOPACK compile-time value", "/capitalpay.png") || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "/assets/receipts/cp.png"), baseUrl),
                                    style: [
                                        styles.footerLogo,
                                        ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {
                                            height: px(15),
                                            width: px(60)
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                    lineNumber: 553,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["View"], {
                                    style: {
                                        textAlign: 'right',
                                        maxWidth: px(450)
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                            style: [
                                                styles.footerDisclaimer,
                                                {
                                                    fontSize: px(9),
                                                    color: '#374151',
                                                    marginBottom: px(3),
                                                    fontWeight: 600,
                                                    letterSpacing: 0.5
                                                }
                                            ],
                                            children: [
                                                "| OFFICIAL RECORD • ",
                                                (("TURBOPACK compile-time value", "Capital Pay") || 'CAPITAL PAY').toUpperCase(),
                                                " SYSTEM |"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 564,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["Text"], {
                                            style: [
                                                styles.footerDisclaimer,
                                                {
                                                    fontSize: px(8),
                                                    color: '#374151',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.2
                                                }
                                            ],
                                            children: "Unauthorized alteration or reproduction is subject to legal action"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                            lineNumber: 567,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                                    lineNumber: 563,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                            lineNumber: 551,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
                    lineNumber: 546,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
            lineNumber: 373,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/finance-studio/VoucherPDF.tsx",
        lineNumber: 372,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/receipt-studio/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ReceiptStudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$SouthSudanReceiptTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/finance-studio/SouthSudanReceiptTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$StudioDatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/finance-studio/StudioDatePicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5f7952__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5f7952 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$eda897__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:eda897 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$aa5a1d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:aa5a1d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$901c43__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:901c43 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7905f2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:7905f2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__ = __turbopack_context__.i("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import, [project]/node_modules/@react-pdf/renderer)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$VoucherPDF$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/finance-studio/VoucherPDF.tsx [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$VoucherPDF$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$VoucherPDF$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
// Input components matching Finance Studio style
const InputLabel = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block text-[10px] font-bold text-slate-400 mb-1.5 ml-0.5 uppercase tracking-wider",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/receipt-studio/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const TextInput = ({ value, onChange, placeholder, className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "text",
        value: value,
        onChange: onChange,
        className: `w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium shadow-sm hover:border-slate-600 studio-input ${className || ''}`,
        style: {
            color: '#ffffff',
            backgroundColor: '#1e293b',
            caretColor: '#ffffff'
        },
        placeholder: placeholder,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/receipt-studio/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
function ReceiptStudioContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const paymentId = searchParams.get('paymentId');
    const requisitionId = searchParams.get('requisitionId');
    const invoiceId = searchParams.get('invoiceId');
    const expenseId = searchParams.get('expenseId');
    const itemId = searchParams.get('itemId');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [receiptData, setReceiptData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        receiptNo: 'VCH-2026-8892',
        date: new Date(),
        amount: 4250.00,
        beneficiary: {
            name: 'TechFlow Systems Inc.',
            address: '45 Innovation Blvd\nSan Francisco, CA'
        },
        paymentMode: 'Wire Transfer',
        paymentRef: 'TRX-998273',
        items: [
            {
                description: 'Platform Subscription',
                subtext: 'Enterprise Tier - Q1 2026',
                date: new Date(),
                amount: 3000.00
            },
            {
                description: 'Onboarding & Setup',
                subtext: 'One-time professional fee',
                date: new Date(),
                amount: 1250.00
            }
        ],
        approvals: {
            requestedBy: 'Sarah Jenkins',
            authorizedBy: 'James K.',
            paidBy: '',
            receivedBy: ''
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (itemId) {
            setIsLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7905f2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getRequisitionItemDetailsForReceipt"])(itemId).then((data)=>{
                if (data) {
                    setReceiptData({
                        ...data,
                        items: data.items.map((item)=>({
                                ...item,
                                date: new Date(item.date)
                            })),
                        date: new Date(data.date)
                    });
                }
                setIsLoading(false);
            });
        } else if (paymentId) {
            setIsLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5f7952__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPaymentDetailsForReceipt"])(paymentId).then((data)=>{
                if (data) {
                    setReceiptData({
                        ...data,
                        items: data.items.map((item)=>({
                                ...item,
                                date: new Date(item.date)
                            })),
                        date: new Date(data.date)
                    });
                }
                setIsLoading(false);
            });
        } else if (requisitionId) {
            setIsLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$eda897__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getRequisitionDetailsForReceipt"])(requisitionId).then((data)=>{
                if (data) {
                    setReceiptData({
                        ...data,
                        items: data.items.map((item)=>({
                                ...item,
                                date: new Date(item.date)
                            })),
                        date: new Date(data.date)
                    });
                }
                setIsLoading(false);
            });
        } else if (invoiceId) {
            setIsLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$aa5a1d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getInvoiceDetailsForReceipt"])(invoiceId).then((data)=>{
                if (data) {
                    setReceiptData({
                        ...data,
                        items: data.items.map((item)=>({
                                ...item,
                                date: new Date(item.date)
                            })),
                        date: new Date(data.date)
                    });
                }
                setIsLoading(false);
            });
        } else if (expenseId) {
            setIsLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$901c43__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getExpenseDetailsForReceipt"])(expenseId).then((data)=>{
                if (data) {
                    setReceiptData({
                        ...data,
                        items: data.items.map((item)=>({
                                ...item,
                                date: new Date(item.date)
                            })),
                        date: new Date(data.date)
                    });
                }
                setIsLoading(false);
            });
        }
        // Fetch settings required for PDFs so they can match the HTML previews
        const fetchSettings = async ()=>{
            try {
                const keys = [
                    'voucher_header_logo',
                    'voucher_footer_logo',
                    'voucher_watermark_logo'
                ].join(',');
                const res = await fetch(`/api/settings?keys=${keys}`);
                if (res.ok) {
                    const data = await res.json();
                    setSettings(data);
                }
            } catch (err) {
                console.error("Failed to fetch settings:", err);
            }
        };
        fetchSettings();
    }, [
        paymentId,
        requisitionId,
        invoiceId,
        expenseId,
        itemId
    ]);
    const handleAddItem = ()=>{
        setReceiptData((prev)=>({
                ...prev,
                items: [
                    ...prev.items,
                    {
                        description: 'New Item',
                        subtext: '',
                        date: new Date(),
                        amount: 0
                    }
                ]
            }));
    };
    const handleRemoveItem = (index)=>{
        setReceiptData((prev)=>({
                ...prev,
                items: prev.items.filter((_, i)=>i !== index)
            }));
    };
    const handleItemChange = (index, field, value)=>{
        const newItems = [
            ...receiptData.items
        ];
        newItems[index][field] = value;
        setReceiptData({
            ...receiptData,
            items: newItems
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-8bb2f974db78ad0a" + " " + "flex h-screen bg-white overflow-hidden font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "8bb2f974db78ad0a",
                children: '@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap";.studio-input{color:#fff!important;-webkit-text-fill-color:#fff!important;background-color:#1e293b!important;border-color:#334155!important}.studio-input::placeholder{color:#94a3b8!important;-webkit-text-fill-color:#94a3b8!important}@media screen{.studio-workspace{background-color:#020617;background-image:radial-gradient(#334155 1px,#0000 1px);background-size:20px 20px}}@media print{@page{size:A4;margin:0!important}*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}body{visibility:hidden!important;background:#fff!important;margin:0!important;padding:0!important}.print-container-wrapper{visibility:visible!important;width:100%!important;box-shadow:none!important;height:auto!important;min-height:297mm!important;margin:0!important;padding:0!important;position:absolute!important;top:0!important;left:0!important;overflow:visible!important;transform:none!important}.print-container-wrapper *{visibility:visible!important}}.custom-scrollbar::-webkit-scrollbar{width:5px}.custom-scrollbar::-webkit-scrollbar-track{background:0 0}.custom-scrollbar::-webkit-scrollbar-thumb{background:#334155;border-radius:10px}.custom-scrollbar::-webkit-scrollbar-thumb:hover{background:#475569}input:-webkit-autofill{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:white!important;-webkit-box-shadow:inset 0 0 0 30px #1e293b!important}input:-webkit-autofill:hover{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:white!important;-webkit-box-shadow:inset 0 0 0 30px #1e293b!important}input:-webkit-autofill:focus{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:white!important;-webkit-box-shadow:inset 0 0 0 30px #1e293b!important}input:-webkit-autofill:active{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:white!important;-webkit-box-shadow:inset 0 0 0 30px #1e293b!important}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8bb2f974db78ad0a" + " " + "w-[420px] bg-slate-900 border-r border-slate-800 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-20 h-full print:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8bb2f974db78ad0a" + " " + "p-4 bg-slate-900 shrink-0 border-b border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/dashboard'),
                                className: "jsx-8bb2f974db78ad0a" + " " + "flex items-center gap-2 mb-4 text-[10px] font-bold text-slate-500 hover:text-white transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiArrowLeft"], {
                                            className: "text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/receipt-studio/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 25
                                    }, this),
                                    "Back to Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 259,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8bb2f974db78ad0a",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "text-sm font-bold text-white",
                                        children: "Voucher Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "text-[10px] text-slate-400 font-medium",
                                        children: "Create & Issue Official Disbursement Vouchers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 269,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8bb2f974db78ad0a" + " " + "flex-1 overflow-y-auto px-6 pt-6 pb-64 space-y-8 custom-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8bb2f974db78ad0a" + " " + "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "text-xs font-bold text-slate-300 border-b border-slate-800 pb-2",
                                        children: "Voucher Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                        children: "Voucher No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                        value: receiptData.receiptNo,
                                                        onChange: (e)=>setReceiptData({
                                                                ...receiptData,
                                                                receiptNo: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$StudioDatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StudioDatePicker"], {
                                                        value: receiptData.date,
                                                        onChange: (date)=>setReceiptData({
                                                                ...receiptData,
                                                                date
                                                            }),
                                                        align: "right"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 279,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8bb2f974db78ad0a" + " " + "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "text-xs font-bold text-slate-300 border-b border-slate-800 pb-2",
                                        children: "Beneficiary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8bb2f974db78ad0a",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                value: receiptData.beneficiary.name,
                                                onChange: (e)=>setReceiptData({
                                                        ...receiptData,
                                                        beneficiary: {
                                                            ...receiptData.beneficiary,
                                                            name: e.target.value
                                                        }
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8bb2f974db78ad0a",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                children: "Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: receiptData.beneficiary.address,
                                                onChange: (e)=>setReceiptData({
                                                        ...receiptData,
                                                        beneficiary: {
                                                            ...receiptData.beneficiary,
                                                            address: e.target.value
                                                        }
                                                    }),
                                                className: "jsx-8bb2f974db78ad0a" + " " + "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium shadow-sm hover:border-slate-600 min-h-[80px] resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 301,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8bb2f974db78ad0a" + " " + "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "text-xs font-bold text-slate-300 border-b border-slate-800 pb-2",
                                        children: "Payment Info"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                        children: "Mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                        value: receiptData.paymentMode,
                                                        onChange: (e)=>setReceiptData({
                                                                ...receiptData,
                                                                paymentMode: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                        children: "Reference"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                        value: receiptData.paymentRef,
                                                        onChange: (e)=>setReceiptData({
                                                                ...receiptData,
                                                                paymentRef: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 321,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8bb2f974db78ad0a" + " " + "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "flex items-center justify-between border-b border-slate-800 pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-8bb2f974db78ad0a" + " " + "text-xs font-bold text-slate-300",
                                                children: "Line Items"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddItem,
                                                className: "jsx-8bb2f974db78ad0a" + " " + "text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded border border-slate-700 flex items-center gap-1 transition-all font-bold uppercase tracking-wider",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiPlus"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 33
                                                    }, this),
                                                    " Add"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "space-y-3",
                                        children: receiptData.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a" + " " + "bg-slate-800/50 border border-slate-800 rounded-lg p-3 space-y-3 relative group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleRemoveItem(idx),
                                                        className: "jsx-8bb2f974db78ad0a" + " " + "absolute top-2 right-2 text-slate-600 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiTrash"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8bb2f974db78ad0a" + " " + "pr-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                                children: "Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                                value: item.description,
                                                                onChange: (e)=>handleItemChange(idx, 'description', e.target.value),
                                                                placeholder: "Item Name",
                                                                className: "mb-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                                value: item.subtext,
                                                                onChange: (e)=>handleItemChange(idx, 'subtext', e.target.value),
                                                                placeholder: "Subtext (optional)",
                                                                className: "text-xs py-2 bg-slate-900 border-slate-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8bb2f974db78ad0a" + " " + "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8bb2f974db78ad0a",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                                        children: "Amount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: item.amount,
                                                                        onChange: (e)=>handleItemChange(idx, 'amount', parseFloat(e.target.value) || 0),
                                                                        style: {
                                                                            color: '#ffffff',
                                                                            backgroundColor: '#0f172a'
                                                                        },
                                                                        className: "jsx-8bb2f974db78ad0a" + " " + "w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8bb2f974db78ad0a",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                                        children: "Date"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$StudioDatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StudioDatePicker"], {
                                                                        value: item.date,
                                                                        onChange: (date)=>handleItemChange(idx, 'date', date),
                                                                        align: "right"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                        lineNumber: 389,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 352,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 342,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8bb2f974db78ad0a" + " " + "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "text-xs font-bold text-slate-300 border-b border-slate-800 pb-2",
                                        children: "Signatories"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8bb2f974db78ad0a" + " " + "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                        children: "Requested By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                        value: receiptData.approvals.requestedBy,
                                                        onChange: (e)=>setReceiptData({
                                                                ...receiptData,
                                                                approvals: {
                                                                    ...receiptData.approvals,
                                                                    requestedBy: e.target.value
                                                                }
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                        children: "Authorized By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                        value: receiptData.approvals.authorizedBy,
                                                        onChange: (e)=>setReceiptData({
                                                                ...receiptData,
                                                                approvals: {
                                                                    ...receiptData.approvals,
                                                                    authorizedBy: e.target.value
                                                                }
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                        children: "Paid By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                        value: receiptData.approvals.paidBy,
                                                        onChange: (e)=>setReceiptData({
                                                                ...receiptData,
                                                                approvals: {
                                                                    ...receiptData.approvals,
                                                                    paidBy: e.target.value
                                                                }
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 419,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8bb2f974db78ad0a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabel, {
                                                        children: "Received By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                        value: receiptData.approvals.receivedBy,
                                                        onChange: (e)=>setReceiptData({
                                                                ...receiptData,
                                                                approvals: {
                                                                    ...receiptData.approvals,
                                                                    receivedBy: e.target.value
                                                                }
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 402,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                        lineNumber: 276,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8bb2f974db78ad0a" + " " + "p-5 border-t border-slate-800 bg-slate-900 shrink-0 grid grid-cols-2 gap-3 z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] print:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
                                    const data = receiptData.items.map((item)=>({
                                            Description: item.description,
                                            Subtext: item.subtext,
                                            Amount: item.amount,
                                            Date: item.date.toLocaleDateString()
                                        }));
                                    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "Voucher Items");
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"])(wb, `Draft_${receiptData.receiptNo}.xlsx`);
                                },
                                className: "jsx-8bb2f974db78ad0a" + " " + "flex items-center justify-center gap-2 bg-slate-800 text-white font-bold py-2.5 rounded-lg border border-slate-700 hover:bg-slate-700 hover:-translate-y-0.5 transition-all text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiFloppyDisk"], {
                                        className: "text-base"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 25
                                    }, this),
                                    " Save Draft (Short Form)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 440,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: async (e)=>{
                                    const btn = e.currentTarget;
                                    const originalText = btn.innerHTML;
                                    try {
                                        btn.innerHTML = 'Generating High-Fidelity PDF...';
                                        btn.disabled = true;
                                        const origin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
                                        const MyDocument = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$VoucherPDF$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoucherPDF"], {
                                            data: receiptData,
                                            baseUrl: origin,
                                            settings: settings
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/receipt-studio/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 52
                                        }, void 0);
                                        const blob = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$29$__["pdf"])(MyDocument).toBlob();
                                        if (!blob) throw new Error('PDF Generation returned empty blob');
                                        const url = URL.createObjectURL(blob);
                                        window.open(url, '_blank');
                                        btn.innerHTML = originalText;
                                        btn.disabled = false;
                                    } catch (err) {
                                        console.error('PDF Error:', err);
                                        alert(`Failed to generate high-fidelity PDF: ${err.message || 'Unknown Error'}. Falling back to native print.`);
                                        window.print();
                                        btn.innerHTML = originalText;
                                        btn.disabled = false;
                                    }
                                },
                                className: "jsx-8bb2f974db78ad0a" + " " + "flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-2.5 rounded-lg shadow-lg border border-indigo-500 hover:bg-indigo-700 hover:border-indigo-400 hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/adobe.png",
                                        alt: "PDF",
                                        className: "jsx-8bb2f974db78ad0a" + " " + "w-4 h-4 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                                        lineNumber: 487,
                                        columnNumber: 25
                                    }, this),
                                    " Download PDF"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/receipt-studio/page.tsx",
                                lineNumber: 457,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                        lineNumber: 439,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/receipt-studio/page.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8bb2f974db78ad0a" + " " + "flex-1 overflow-auto studio-workspace relative print:bg-white flex flex-col items-center print:block print:overflow-visible",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8bb2f974db78ad0a" + " " + "w-full h-full p-12 flex justify-center items-start print:p-0 print:m-0 overflow-y-auto print:overflow-visible",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '210mm',
                            minHeight: '297mm',
                            transform: 'scale(0.85)',
                            transformOrigin: 'top center'
                        },
                        className: "jsx-8bb2f974db78ad0a" + " " + "preview-canvas bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-10 print:shadow-none print:m-0 print-container-wrapper rounded-sm transition-transform duration-300 print:w-full print:h-full print:transform-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$finance$2d$studio$2f$SouthSudanReceiptTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SouthSudanReceiptTemplate"], {
                            ...receiptData,
                            settings: settings,
                            onSettingChange: (key, value)=>{
                                setSettings((prev)=>({
                                        ...prev,
                                        [key]: value
                                    }));
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/receipt-studio/page.tsx",
                            lineNumber: 502,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/receipt-studio/page.tsx",
                        lineNumber: 495,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/receipt-studio/page.tsx",
                    lineNumber: 494,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/receipt-studio/page.tsx",
                lineNumber: 493,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/receipt-studio/page.tsx",
        lineNumber: 182,
        columnNumber: 9
    }, this);
}
function ReceiptStudioPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-screen bg-slate-950 text-slate-400",
            children: "Loading Studio..."
        }, void 0, false, {
            fileName: "[project]/src/app/receipt-studio/page.tsx",
            lineNumber: 519,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptStudioContent, {}, void 0, false, {
            fileName: "[project]/src/app/receipt-studio/page.tsx",
            lineNumber: 520,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/receipt-studio/page.tsx",
        lineNumber: 519,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__75f063a4._.js.map
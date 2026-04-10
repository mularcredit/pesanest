module.exports = [
"[project]/src/lib/constants.ts [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/src_lib_prisma_ts_6f6401ba._.js",
  "server/chunks/ssr/src_lib_constants_ts_d2b05c0c._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
    });
});
}),
];
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/fetchUtils.ts":
/*!*********************************!*\
  !*** ./src/utils/fetchUtils.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchMeals: function() { return /* binding */ fetchMeals; }\n/* harmony export */ });\n// fetchUtils.js\nconst fetchMeals = async (numPlayers)=>{\n    console.log(players);\n    try {\n        const response = await fetch(\"www.themealdb.com/api/json/v1/1/random.php\");\n        const data = await response.json();\n        return data.meals; // Assuming the API response contains a \"meals\" property with the desired data\n    } catch (error) {\n        throw new Error(\"Failed to fetch meals\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZmV0Y2hVdGlscy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0JBQWdCO0FBQ1QsTUFBTUEsYUFBYSxPQUFPQztJQUM3QkMsUUFBUUMsR0FBRyxDQUFDQztJQUNaLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU87UUFDOUIsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBQ2hDLE9BQU9ELEtBQUtFLEtBQUssRUFBRSw4RUFBOEU7SUFDbkcsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvZmV0Y2hVdGlscy50cz9jNjJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZldGNoVXRpbHMuanNcbmV4cG9ydCBjb25zdCBmZXRjaE1lYWxzID0gYXN5bmMgKG51bVBsYXllcnM6bnVtYmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGxheWVycylcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9yYW5kb20ucGhwYCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGEubWVhbHM7IC8vIEFzc3VtaW5nIHRoZSBBUEkgcmVzcG9uc2UgY29udGFpbnMgYSBcIm1lYWxzXCIgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBkYXRhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBtZWFsc1wiKTtcbiAgICB9XG4gIH07XG4gICJdLCJuYW1lcyI6WyJmZXRjaE1lYWxzIiwibnVtUGxheWVycyIsImNvbnNvbGUiLCJsb2ciLCJwbGF5ZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWVhbHMiLCJlcnJvciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/fetchUtils.ts\n"));

/***/ })

});
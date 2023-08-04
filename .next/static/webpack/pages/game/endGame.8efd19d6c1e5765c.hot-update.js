"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/endGame",{

/***/ "./src/pages/game/endGame.tsx":
/*!************************************!*\
  !*** ./src/pages/game/endGame.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_resultUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resultUtils */ \"./src/utils/resultUtils.ts\");\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst endGame = ()=>{\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const players = (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_3__.loadFromLocalStorage)(\"playerMealData\");\n        console.log(players.numPlayers);\n        const fetchResults = async ()=>{\n            try {\n                const results = await (0,_utils_resultUtils__WEBPACK_IMPORTED_MODULE_2__.resultsUtils)(players.numPlayers);\n                setResults(results);\n            } catch (error) {\n                console.error(\"Error fetching results:\", error);\n            }\n        };\n        fetchResults();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: results.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined),\n                results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: result\n                    }, index, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results found\"\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                lineNumber: 35,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(endGame, \"0Oir8sO9qj6087fqVYj2OrfQH1E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (endGame);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS9lbmRHYW1lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDVztBQUNjO0FBRXJFLE1BQU1JLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFXLEVBQUU7SUFFbkRELGdEQUFTQSxDQUFDO1FBQ1QsTUFBTU8sVUFBVUosOEVBQW9CQSxDQUFDO1FBQ3JDSyxRQUFRQyxHQUFHLENBQUNGLFFBQVFHLFVBQVU7UUFDN0IsTUFBTUMsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1OLFVBQVUsTUFBTUgsZ0VBQVlBLENBQUNLLFFBQVFHLFVBQVU7Z0JBQ3JESixXQUFXRDtZQUNiLEVBQUUsT0FBT08sT0FBTztnQkFDZEosUUFBUUksS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHTixRQUFRUSxNQUFNLEdBQUcsa0JBRWhCLDhEQUFDQzs7OEJBQ0MsOERBQUNDOzs7OztnQkFDQVYsUUFBUVcsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNwQiw4REFBQ0M7a0NBQWVGO3VCQUFSQzs7Ozs7Ozs7OztzQ0FJWiw4REFBQ0o7c0JBQ0MsNEVBQUNLOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFNYjtHQXBDTWY7QUFzQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbWUvZW5kR2FtZS50c3g/N2IzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZXN1bHRzVXRpbHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcmVzdWx0VXRpbHNcIjtcbmltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0xvY2FsU3RvcmFnZVV0aWxzXCI7XG5cbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIGNvbnN0IHBsYXllcnMgPSBsb2FkRnJvbUxvY2FsU3RvcmFnZSgncGxheWVyTWVhbERhdGEnKTtcbiAgIGNvbnNvbGUubG9nKHBsYXllcnMubnVtUGxheWVycylcbiAgICBjb25zdCBmZXRjaFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzdWx0c1V0aWxzKHBsYXllcnMubnVtUGxheWVycyk7XG4gICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcmVzdWx0czpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFJlc3VsdHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXN1bHRzLmxlbmd0aCA+IDAgPyAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+PC9oMT5cbiAgICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PntyZXN1bHR9PC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+Tm8gcmVzdWx0cyBmb3VuZDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgey8qIDxidXR0b24gPnRyeSBhZ2FpbjwvYnV0dG9uPiAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuZEdhbWU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyZXN1bHRzVXRpbHMiLCJsb2FkRnJvbUxvY2FsU3RvcmFnZSIsImVuZEdhbWUiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInBsYXllcnMiLCJjb25zb2xlIiwibG9nIiwibnVtUGxheWVycyIsImZldGNoUmVzdWx0cyIsImVycm9yIiwibGVuZ3RoIiwiZGl2IiwiaDEiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/game/endGame.tsx\n"));

/***/ })

});
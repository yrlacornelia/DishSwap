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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_resultUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resultUtils */ \"./src/utils/resultUtils.ts\");\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst endGame = ()=>{\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const players = (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_3__.loadFromLocalStorage)(\"playerMealData\");\n        console.log(players.numPlayers);\n        const fetchResults = async ()=>{\n            try {\n                const results = await (0,_utils_resultUtils__WEBPACK_IMPORTED_MODULE_2__.resultsUtils)(players.numPlayers);\n                setResults(results);\n            } catch (error) {\n                console.error(\"Error fetching results:\", error);\n            }\n        };\n        fetchResults();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: results.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: result\n                }, index, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results found\"\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(endGame, \"0Oir8sO9qj6087fqVYj2OrfQH1E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (endGame);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS9lbmRHYW1lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDVztBQUNjO0FBRXJFLE1BQU1JLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFXLEVBQUU7SUFFbkRELGdEQUFTQSxDQUFDO1FBQ1QsTUFBTU8sVUFBVUosOEVBQW9CQSxDQUFDO1FBQ3JDSyxRQUFRQyxHQUFHLENBQUNGLFFBQVFHLFVBQVU7UUFDN0IsTUFBTUMsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1OLFVBQVUsTUFBTUgsZ0VBQVlBLENBQUNLLFFBQVFHLFVBQVU7Z0JBQ3JESixXQUFXRDtZQUNiLEVBQUUsT0FBT08sT0FBTztnQkFDZEosUUFBUUksS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHTixRQUFRUSxNQUFNLEdBQUcsa0JBRWhCLDhEQUFDQztzQkFDRVQsUUFBUVUsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNwQiw4REFBQ0M7OEJBQWVGO21CQUFSQzs7Ozs7Ozs7O3NDQUlaLDhEQUFDSDtzQkFDQyw0RUFBQ0k7MEJBQUU7Ozs7Ozs7Ozs7OztBQU1iO0dBbkNNZDtBQXFDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZ2FtZS9lbmRHYW1lLnRzeD83YjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlc3VsdHNVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9yZXN1bHRVdGlsc1wiO1xuaW1wb3J0IHsgbG9hZEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvTG9jYWxTdG9yYWdlVXRpbHNcIjtcblxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgY29uc3QgcGxheWVycyA9IGxvYWRGcm9tTG9jYWxTdG9yYWdlKCdwbGF5ZXJNZWFsRGF0YScpO1xuICAgY29uc29sZS5sb2cocGxheWVycy5udW1QbGF5ZXJzKVxuICAgIGNvbnN0IGZldGNoUmVzdWx0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXN1bHRzVXRpbHMocGxheWVycy5udW1QbGF5ZXJzKTtcbiAgICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZXN1bHRzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoUmVzdWx0cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Jlc3VsdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3Jlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2luZGV4fT57cmVzdWx0fTwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPk5vIHJlc3VsdHMgZm91bmQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHsvKiA8YnV0dG9uID50cnkgYWdhaW48L2J1dHRvbj4gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmRHYW1lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicmVzdWx0c1V0aWxzIiwibG9hZEZyb21Mb2NhbFN0b3JhZ2UiLCJlbmRHYW1lIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJwbGF5ZXJzIiwiY29uc29sZSIsImxvZyIsIm51bVBsYXllcnMiLCJmZXRjaFJlc3VsdHMiLCJlcnJvciIsImxlbmd0aCIsImRpdiIsIm1hcCIsInJlc3VsdCIsImluZGV4IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/game/endGame.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[productId]",{

/***/ "./src/components/game/meal.tsx":
/*!**************************************!*\
  !*** ./src/components/game/meal.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reusableComponents_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusableComponents/tabs */ \"./src/components/reusableComponents/tabs.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reusableComponents_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/loader */ \"./src/components/reusableComponents/loader.tsx\");\n\n\n\n\n\nconst Meal = (param)=>{\n    let { item } = param;\n    const find = ()=>{\n        console.log(item);\n        const array = [];\n        for(let index = 0; index < 20; index++){\n            const ingredient = \"strIngredient\".concat([\n                index + 1\n            ]);\n            const measurement = \"strMeasure\".concat([\n                index + 1\n            ]);\n            const ingredientText = \"\".concat(item[measurement], \" \").concat(item[ingredient]).trim();\n            console.log(ingredientText);\n            if (ingredientText !== \"null null\" && ingredientText !== \"null\") {\n                array.push(ingredientText);\n            }\n        }\n        console.log(array);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: array.split(\",\").join(\"\\n\")\n        }, void 0, false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-10 mt-5 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border border-blue flex gap-2 rounded-md px-5 items-center py-2 hover:bg-blue-light\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/game/endGame\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                \"stroke-width\": \"1.5\",\n                                stroke: \"currentColor\",\n                                className: \"w-5 h-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"stroke-linecap\": \"round\",\n                                    \"stroke-linejoin\": \"round\",\n                                    d: \"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 3\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 114\n                        }, undefined),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Go back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            item ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex flex-col md:flex-row md:justify-center w-3/4 md:w-full m-auto md:items-center md:gap-20 mb-5 mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-lg\",\n                                src: item.strMealThumb,\n                                alt: \"\",\n                                width: 500,\n                                height: 500\n                            }, void 0, false, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: item.strMeal\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: item.strCategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        instructions: item.strInstructions,\n                        ingredients: find()\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Meal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meal);\nvar _c;\n$RefreshReg$(_c, \"Meal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL21lYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFHQTtBQUN0QjtBQUNxQjtBQU1sRCxNQUFNSSxPQUFPO1FBQUMsRUFBQ0MsSUFBSSxFQUFPO0lBQ3hCLE1BQU1DLE9BQU87UUFDWEMsUUFBUUMsR0FBRyxDQUFDSDtRQUNaLE1BQU1JLFFBQVEsRUFBRTtRQUNoQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUSxJQUFJQSxRQUFTO1lBQ3ZDLE1BQU1DLGFBQWEsZ0JBQTRCLE9BQVo7Z0JBQUNELFFBQVE7YUFBRTtZQUM5QyxNQUFNRSxjQUFjLGFBQXlCLE9BQVo7Z0JBQUNGLFFBQVE7YUFBRTtZQUM1QyxNQUFNRyxpQkFBaUIsR0FBd0JSLE9BQXJCQSxJQUFJLENBQUNPLFlBQVksRUFBQyxLQUFvQixPQUFqQlAsSUFBSSxDQUFDTSxXQUFXLEVBQUdHLElBQUk7WUFDdEVQLFFBQVFDLEdBQUcsQ0FBQ0s7WUFDWixJQUFJQSxtQkFBbUIsZUFBZUEsbUJBQW1CLFFBQVE7Z0JBQy9ESixNQUFNTSxJQUFJLENBQUNGO1lBQ2I7UUFDRjtRQUNBTixRQUFRQyxHQUFHLENBQUNDO1FBQ1oscUJBQVE7c0JBQUdBLE1BQU1PLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUM7O0lBQ25DO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFPRCxXQUFVOzt3QkFBc0Y7c0NBQUMsOERBQUNqQixrREFBSUE7NEJBQUVtQixNQUFNO3NDQUN4SCw0RUFBQ0M7Z0NBQUlDLE9BQU07Z0NBQTZCQyxNQUFLO2dDQUFPQyxTQUFRO2dDQUFZQyxnQkFBYTtnQ0FBTUMsUUFBTztnQ0FBZVIsV0FBVTswQ0FDL0gsNEVBQUNTO29DQUFLQyxrQkFBZTtvQ0FBUUMsbUJBQWdCO29DQUFRQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUVsRDtzQ0FBQyw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0QzQixxQkFDRjs7a0NBQ0MsOERBQUNhO3dCQUFJQyxXQUFVOzswQ0FDeEIsOERBQUNjO2dDQUFJZCxXQUFVO2dDQUFhZSxLQUFLN0IsS0FBSzhCLFlBQVk7Z0NBQUVDLEtBQUk7Z0NBQUdDLE9BQU87Z0NBQUtDLFFBQVE7Ozs7OzswQ0FDL0UsOERBQUNwQjs7a0RBQ0QsOERBQUNxQjtrREFBSWxDLEtBQUttQyxPQUFPOzs7Ozs7a0RBQ2pCLDhEQUFDQztrREFBSXBDLEtBQUtxQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2YsOERBQUN6QyxnRUFBU0E7d0JBQUMwQyxjQUFjdEMsS0FBS3VDLGVBQWU7d0JBQUVDLGFBQWF2Qzs7Ozs7Ozs2Q0FHekQ7MEJBQUUsNEVBQUNILGtFQUFNQTs7Ozs7Ozs7Ozs7O0FBSWxCO0tBM0NNQztBQTZDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nYW1lL21lYWwudHN4P2Q3NjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE15T2JqZWN0IH0gZnJvbSBcIi4uLy4uL2xpYi9kYXRhXCI7XG4gXG5pbXBvcnQgQmFzaWNUYWJzIGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvdGFic1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vcmV1c2FibGVDb21wb25lbnRzL2xvYWRlclwiO1xudHlwZSBQcm9wcyA9IHtcbiAgaXRlbTogTXlPYmplY3Q7XG59O1xuXG5cbmNvbnN0IE1lYWwgPSAoe2l0ZW19OlByb3BzKSA9PiB7XG4gIGNvbnN0IGZpbmQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnQgPSBgc3RySW5ncmVkaWVudCR7W2luZGV4ICsgMV19YDtcbiAgICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gYHN0ck1lYXN1cmUke1tpbmRleCArIDFdfWA7XG4gICAgICBjb25zdCBpbmdyZWRpZW50VGV4dCA9IGAke2l0ZW1bbWVhc3VyZW1lbnRdfSAke2l0ZW1baW5ncmVkaWVudF19YC50cmltKCk7XG4gICAgICBjb25zb2xlLmxvZyhpbmdyZWRpZW50VGV4dClcbiAgICAgIGlmIChpbmdyZWRpZW50VGV4dCAhPT0gJ251bGwgbnVsbCcgJiYgaW5ncmVkaWVudFRleHQgIT09ICdudWxsJykge1xuICAgICAgICBhcnJheS5wdXNoKGluZ3JlZGllbnRUZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYXJyYXkpXG4gICAgcmV0dXJuICg8PnthcnJheS5zcGxpdChcIixcIikuam9pbihcIlxcblwiKX08Lz4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgbXQtNSBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsdWUgZmxleCBnYXAtMiByb3VuZGVkLW1kIHB4LTUgaXRlbXMtY2VudGVyIHB5LTIgaG92ZXI6YmctYmx1ZS1saWdodFwiPiA8TGluayAgaHJlZj17XCIvZ2FtZS9lbmRHYW1lXCJ9PlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiPlxuICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgMTVMMyA5bTAgMGw2LTZNMyA5aDEyYTYgNiAwIDAxMCAxMmgtM1wiIC8+XG48L3N2Zz5cbjwvTGluaz4gPHA+R28gYmFjazwvcD48L2J1dHRvbj5cbiAgICAgXG48L2Rpdj5cbiAgICAgICAgeyBpdGVtID8gKFxuICAgICAgICA8PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDpqdXN0aWZ5LWNlbnRlciB3LTMvNCBtZDp3LWZ1bGwgbS1hdXRvIG1kOml0ZW1zLWNlbnRlciBtZDpnYXAtMjAgbWItNSBtdC0xMFwiPlxuPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCIgc3JjPXtpdGVtLnN0ck1lYWxUaHVtYn0gYWx0PVwiXCIgd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9Lz5cbjxkaXY+XG48aDI+e2l0ZW0uc3RyTWVhbH08L2gyPlxuPGgzPntpdGVtLnN0ckNhdGVnb3J5fTwvaDM+XG48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJhc2ljVGFicyBpbnN0cnVjdGlvbnM9e2l0ZW0uc3RySW5zdHJ1Y3Rpb25zfSBpbmdyZWRpZW50cz17ZmluZCgpfSAvPlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICA6XG4gICAgICAgICg8PjxMb2FkZXIvPjwvPikgfVxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lYWw7XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFzaWNUYWJzIiwiTGluayIsIkxvYWRlciIsIk1lYWwiLCJpdGVtIiwiZmluZCIsImNvbnNvbGUiLCJsb2ciLCJhcnJheSIsImluZGV4IiwiaW5ncmVkaWVudCIsIm1lYXN1cmVtZW50IiwiaW5ncmVkaWVudFRleHQiLCJ0cmltIiwicHVzaCIsInNwbGl0Iiwiam9pbiIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImhyZWYiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlLXdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiZCIsInAiLCJpbWciLCJzcmMiLCJzdHJNZWFsVGh1bWIiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwic3RyTWVhbCIsImgzIiwic3RyQ2F0ZWdvcnkiLCJpbnN0cnVjdGlvbnMiLCJzdHJJbnN0cnVjdGlvbnMiLCJpbmdyZWRpZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/game/meal.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reusableComponents_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusableComponents/loader */ \"./src/components/reusableComponents/loader.tsx\");\n/* harmony import */ var _reusableComponents_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/tabs */ \"./src/components/reusableComponents/tabs.tsx\");\n\n\n\n\n\nconst Meal = (param)=>{\n    let { item } = param;\n    const find = ()=>{\n        console.log(item);\n        const array = [];\n        for(let index = 0; index < 20; index++){\n            const ingredient = \"strIngredient\".concat([\n                index + 1\n            ]);\n            const measurement = \"strMeasure\".concat([\n                index + 1\n            ]);\n            const ingredientText = \"\".concat(item[measurement], \" \").concat(item[ingredient]).trim();\n            array.push(ingredientText);\n            const filteredArray = array.filter((item)=>item !== \"\");\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: array.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mb-2 \",\n                    children: item\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 40\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-10 mt-5 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border border-blue flex  gap-2 rounded-md px-5 items-center py-2 hover:bg-blue-light\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/game/endGame\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                \"stroke-width\": \"1.5\",\n                                stroke: \"currentColor\",\n                                className: \"w-5 h-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"stroke-linecap\": \"round\",\n                                    \"stroke-linejoin\": \"round\",\n                                    d: \"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 3\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 115\n                        }, undefined),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Go back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            item ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"   md:w-5/6 lg:w-3/4 md:py-5 mt-10 m-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex relative flex-col md:flex-row md:justify-center w-3/4 md:w-full m-auto md:items-center md:gap-20 mb-5 mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.strMealThumb,\n                                alt: \"\",\n                                width: 400,\n                                height: 400\n                            }, void 0, false, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"  md:relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: item.strMeal\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: item.strCategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        instructions: item.strInstructions,\n                        ingredients: find()\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Meal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meal);\nvar _c;\n$RefreshReg$(_c, \"Meal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL21lYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFJdEI7QUFDcUI7QUFFRDtBQU1qRCxNQUFNSSxPQUFPO1FBQUMsRUFBQ0MsSUFBSSxFQUFPO0lBQ3hCLE1BQU1DLE9BQU87UUFDWEMsUUFBUUMsR0FBRyxDQUFDSDtRQUNaLE1BQU1JLFFBQVEsRUFBRTtRQUNoQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUSxJQUFJQSxRQUFTO1lBQ3ZDLE1BQU1DLGFBQWEsZ0JBQTRCLE9BQVo7Z0JBQUNELFFBQVE7YUFBRTtZQUM5QyxNQUFNRSxjQUFjLGFBQXlCLE9BQVo7Z0JBQUNGLFFBQVE7YUFBRTtZQUM1QyxNQUFNRyxpQkFBaUIsR0FBd0JSLE9BQXJCQSxJQUFJLENBQUNPLFlBQVksRUFBQyxLQUFvQixPQUFqQlAsSUFBSSxDQUFDTSxXQUFXLEVBQUdHLElBQUk7WUFDcEVMLE1BQU1NLElBQUksQ0FBQ0Y7WUFDWCxNQUFNRyxnQkFBZ0JQLE1BQU1RLE1BQU0sQ0FBQ1osQ0FBQUEsT0FBUUEsU0FBUztRQUV4RDtRQUNBLHFCQUFRLDhEQUFDYTtzQkFBS1QsTUFBTVUsR0FBRyxDQUFFLENBQUNkLHFCQUFTLDhEQUFDZTtvQkFBR0MsV0FBVTs4QkFBU2hCOzs7Ozs7Ozs7OztJQUM1RDtJQUVBLHFCQUNFLDhEQUFDaUI7OzBCQUNDLDhEQUFDQTtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQU9GLFdBQVU7O3dCQUF1RjtzQ0FBQyw4REFBQ3BCLGtEQUFJQTs0QkFBRXVCLE1BQU07c0NBQ3pILDRFQUFDQztnQ0FBSUMsT0FBTTtnQ0FBNkJDLE1BQUs7Z0NBQU9DLFNBQVE7Z0NBQVlDLGdCQUFhO2dDQUFNQyxRQUFPO2dDQUFlVCxXQUFVOzBDQUMvSCw0RUFBQ1U7b0NBQUtDLGtCQUFlO29DQUFRQyxtQkFBZ0I7b0NBQVFDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBRWxEO3NDQUFDLDhEQUFDQztzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHRDlCLHFCQUNGLDhEQUFDaUI7Z0JBQUlELFdBQVU7O2tDQUNkLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ3hCLDhEQUFDZTtnQ0FBS0MsS0FBS2hDLEtBQUtpQyxZQUFZO2dDQUFFQyxLQUFJO2dDQUFHQyxPQUFPO2dDQUFLQyxRQUFROzs7Ozs7MENBQ3pELDhEQUFDbkI7Z0NBQUlELFdBQVU7O2tEQUNmLDhEQUFDcUI7a0RBQUlyQyxLQUFLc0MsT0FBTzs7Ozs7O2tEQUNqQiw4REFBQ0M7a0RBQUl2QyxLQUFLd0MsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1mLDhEQUFDMUMsZ0VBQU9BO3dCQUFDMkMsY0FBY3pDLEtBQUswQyxlQUFlO3dCQUFFQyxhQUFhMUM7Ozs7Ozs7Ozs7OzBDQUl2RDswQkFBRSw0RUFBQ0osa0VBQU1BOzs7Ozs7Ozs7Ozs7QUFJbEI7S0E3Q01FO0FBK0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbWUvbWVhbC50c3g/ZDc2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTXlPYmplY3QgfSBmcm9tIFwiLi4vLi4vbGliL2RhdGFcIjtcbiBcbmltcG9ydCBCYXNpY1RhYnMgZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy90YWJzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvbG9hZGVyXCI7XG5pbXBvcnQgVGFic01lYWxzIGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvdGFic1wiO1xuaW1wb3J0IExhYlRhYnMgZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy90YWJzXCI7XG50eXBlIFByb3BzID0ge1xuICBpdGVtOiBNeU9iamVjdDtcbn07XG5cblxuY29uc3QgTWVhbCA9ICh7aXRlbX06UHJvcHMpID0+IHtcbiAgY29uc3QgZmluZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgaW5ncmVkaWVudCA9IGBzdHJJbmdyZWRpZW50JHtbaW5kZXggKyAxXX1gO1xuICAgICAgY29uc3QgbWVhc3VyZW1lbnQgPSBgc3RyTWVhc3VyZSR7W2luZGV4ICsgMV19YDtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnRUZXh0ID0gYCR7aXRlbVttZWFzdXJlbWVudF19ICR7aXRlbVtpbmdyZWRpZW50XX1gLnRyaW0oKTtcbiAgICAgICAgYXJyYXkucHVzaChpbmdyZWRpZW50VGV4dCk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBhcnJheS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBcIlwiKTtcblxuICAgIH1cbiAgICByZXR1cm4gKDx1bCA+e2FycmF5Lm1hcCAoKGl0ZW0pID0+KDxsaSBjbGFzc05hbWU9XCJtYi0yIFwiPntpdGVtfTwvbGk+KSl9PC91bD4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgbXQtNSBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsdWUgZmxleCAgZ2FwLTIgcm91bmRlZC1tZCBweC01IGl0ZW1zLWNlbnRlciBweS0yIGhvdmVyOmJnLWJsdWUtbGlnaHRcIj4gPExpbmsgIGhyZWY9e1wiL2dhbWUvZW5kR2FtZVwifT5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInctNSBoLTVcIj5cbiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk05IDE1TDMgOW0wIDBsNi02TTMgOWgxMmE2IDYgMCAwMTAgMTJoLTNcIiAvPlxuPC9zdmc+XG48L0xpbms+IDxwPkdvIGJhY2s8L3A+PC9idXR0b24+XG4gICAgIFxuPC9kaXY+XG4gICAgICAgIHsgaXRlbSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgICBtZDp3LTUvNiBsZzp3LTMvNCBtZDpweS01IG10LTEwIG0tYXV0b1wiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCByZWxhdGl2ZSBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDpqdXN0aWZ5LWNlbnRlciB3LTMvNCBtZDp3LWZ1bGwgbS1hdXRvIG1kOml0ZW1zLWNlbnRlciBtZDpnYXAtMjAgbWItNSBtdC0xMFwiPlxuPGltZyAgc3JjPXtpdGVtLnN0ck1lYWxUaHVtYn0gYWx0PVwiXCIgd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9Lz5cbjxkaXYgY2xhc3NOYW1lPVwiICBtZDpyZWxhdGl2ZVwiPlxuPGgyPntpdGVtLnN0ck1lYWx9PC9oMj5cbjxoMz57aXRlbS5zdHJDYXRlZ29yeX08L2gzPlxuPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgXCI+XG4gICAgICAgIDxCYXNpY1RhYnMgaW5zdHJ1Y3Rpb25zPXtpdGVtLnN0ckluc3RydWN0aW9uc30gaW5ncmVkaWVudHM9e2ZpbmQoKX0gLz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPExhYlRhYnMgaW5zdHJ1Y3Rpb25zPXtpdGVtLnN0ckluc3RydWN0aW9uc30gaW5ncmVkaWVudHM9e2ZpbmQoKX0gLz5cblxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICA6XG4gICAgICAgICg8PjxMb2FkZXIvPjwvPikgfVxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lYWw7XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxvYWRlciIsIkxhYlRhYnMiLCJNZWFsIiwiaXRlbSIsImZpbmQiLCJjb25zb2xlIiwibG9nIiwiYXJyYXkiLCJpbmRleCIsImluZ3JlZGllbnQiLCJtZWFzdXJlbWVudCIsImluZ3JlZGllbnRUZXh0IiwidHJpbSIsInB1c2giLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVyIiwidWwiLCJtYXAiLCJsaSIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsImhyZWYiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlLXdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiZCIsInAiLCJpbWciLCJzcmMiLCJzdHJNZWFsVGh1bWIiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwic3RyTWVhbCIsImgzIiwic3RyQ2F0ZWdvcnkiLCJpbnN0cnVjdGlvbnMiLCJzdHJJbnN0cnVjdGlvbnMiLCJpbmdyZWRpZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/game/meal.tsx\n"));

/***/ })

});
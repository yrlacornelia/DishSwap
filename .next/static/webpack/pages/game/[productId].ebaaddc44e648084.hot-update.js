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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reusableComponents_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusableComponents/tabs */ \"./src/components/reusableComponents/tabs.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reusableComponents_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/loader */ \"./src/components/reusableComponents/loader.tsx\");\n\n\n\n\n\nconst Meal = (param)=>{\n    let { item } = param;\n    const find = ()=>{\n        console.log(item);\n        const array = [];\n        for(let index = 0; index < 20; index++){\n            const ingredient = \"strIngredient\".concat([\n                index + 1\n            ]);\n            const measurement = \"strMeasure\".concat([\n                index + 1\n            ]);\n            const ingredientText = \"\".concat(item[measurement], \" \").concat(item[ingredient]).trim();\n            console.log(ingredientText);\n            if (ingredientText !== \"null null\" && ingredientText !== \"null\") {\n                array.push(ingredientText);\n            }\n        }\n        console.log(array);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"h-min py-5\",\n            children: array.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 64\n                    }, undefined)\n                }, void 0, false))\n        }, void 0, false, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-10 mt-5 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border border-blue flex gap-2 rounded-md px-5 items-center py-2 hover:bg-blue-light\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/game/endGame\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                \"stroke-width\": \"1.5\",\n                                stroke: \"currentColor\",\n                                className: \"w-5 h-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"stroke-linecap\": \"round\",\n                                    \"stroke-linejoin\": \"round\",\n                                    d: \"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 3\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 114\n                        }, undefined),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Go back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            item ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex flex-col md:flex-row md:justify-center w-3/4 md:w-full m-auto md:items-center md:gap-20 mb-5 mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-lg\",\n                                src: item.strMealThumb,\n                                alt: \"\",\n                                width: 500,\n                                height: 500\n                            }, void 0, false, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: item.strMeal\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: item.strCategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        instructions: item.strInstructions,\n                        ingredients: find()\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/meal.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Meal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meal);\nvar _c;\n$RefreshReg$(_c, \"Meal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL21lYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFHQTtBQUN0QjtBQUNxQjtBQU1sRCxNQUFNSSxPQUFPO1FBQUMsRUFBQ0MsSUFBSSxFQUFPO0lBQ3hCLE1BQU1DLE9BQU87UUFDWEMsUUFBUUMsR0FBRyxDQUFDSDtRQUNaLE1BQU1JLFFBQVEsRUFBRTtRQUNoQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUSxJQUFJQSxRQUFTO1lBQ3ZDLE1BQU1DLGFBQWEsZ0JBQTRCLE9BQVo7Z0JBQUNELFFBQVE7YUFBRTtZQUM5QyxNQUFNRSxjQUFjLGFBQXlCLE9BQVo7Z0JBQUNGLFFBQVE7YUFBRTtZQUM1QyxNQUFNRyxpQkFBaUIsR0FBd0JSLE9BQXJCQSxJQUFJLENBQUNPLFlBQVksRUFBQyxLQUFvQixPQUFqQlAsSUFBSSxDQUFDTSxXQUFXLEVBQUdHLElBQUk7WUFDdEVQLFFBQVFDLEdBQUcsQ0FBQ0s7WUFDWixJQUFJQSxtQkFBbUIsZUFBZUEsbUJBQW1CLFFBQVE7Z0JBQy9ESixNQUFNTSxJQUFJLENBQUNGO1lBQ2I7UUFDRjtRQUNBTixRQUFRQyxHQUFHLENBQUNDO1FBQ1oscUJBQVEsOERBQUNPO1lBQUdDLFdBQVU7c0JBQWNSLE1BQU1TLEdBQUcsQ0FBRSxDQUFDYixxQkFBUzs4QkFBRSw0RUFBQ2M7a0NBQUlkOzs7Ozs7Ozs7Ozs7SUFDbEU7SUFFQSxxQkFDRSw4REFBQ2U7OzBCQUNDLDhEQUFDQTtnQkFBSUgsV0FBVTswQkFDYiw0RUFBQ0k7b0JBQU9KLFdBQVU7O3dCQUFzRjtzQ0FBQyw4REFBQ2Ysa0RBQUlBOzRCQUFFb0IsTUFBTTtzQ0FDeEgsNEVBQUNDO2dDQUFJQyxPQUFNO2dDQUE2QkMsTUFBSztnQ0FBT0MsU0FBUTtnQ0FBWUMsZ0JBQWE7Z0NBQU1DLFFBQU87Z0NBQWVYLFdBQVU7MENBQy9ILDRFQUFDWTtvQ0FBS0Msa0JBQWU7b0NBQVFDLG1CQUFnQjtvQ0FBUUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFFbEQ7c0NBQUMsOERBQUNDO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztZQUdENUIscUJBQ0Y7O2tDQUNDLDhEQUFDZTt3QkFBSUgsV0FBVTs7MENBQ3hCLDhEQUFDaUI7Z0NBQUlqQixXQUFVO2dDQUFha0IsS0FBSzlCLEtBQUsrQixZQUFZO2dDQUFFQyxLQUFJO2dDQUFHQyxPQUFPO2dDQUFLQyxRQUFROzs7Ozs7MENBQy9FLDhEQUFDbkI7O2tEQUNELDhEQUFDb0I7a0RBQUluQyxLQUFLb0MsT0FBTzs7Ozs7O2tEQUNqQiw4REFBQ0M7a0RBQUlyQyxLQUFLc0MsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdmLDhEQUFDMUMsZ0VBQVNBO3dCQUFDMkMsY0FBY3ZDLEtBQUt3QyxlQUFlO3dCQUFFQyxhQUFheEM7Ozs7Ozs7NkNBR3pEOzBCQUFFLDRFQUFDSCxrRUFBTUE7Ozs7Ozs7Ozs7OztBQUlsQjtLQTNDTUM7QUE2Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9tZWFsLnRzeD9kNzYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNeU9iamVjdCB9IGZyb20gXCIuLi8uLi9saWIvZGF0YVwiO1xuIFxuaW1wb3J0IEJhc2ljVGFicyBmcm9tIFwiLi4vcmV1c2FibGVDb21wb25lbnRzL3RhYnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9sb2FkZXJcIjtcbnR5cGUgUHJvcHMgPSB7XG4gIGl0ZW06IE15T2JqZWN0O1xufTtcblxuXG5jb25zdCBNZWFsID0gKHtpdGVtfTpQcm9wcykgPT4ge1xuICBjb25zdCBmaW5kID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpbmdyZWRpZW50ID0gYHN0ckluZ3JlZGllbnQke1tpbmRleCArIDFdfWA7XG4gICAgICBjb25zdCBtZWFzdXJlbWVudCA9IGBzdHJNZWFzdXJlJHtbaW5kZXggKyAxXX1gO1xuICAgICAgY29uc3QgaW5ncmVkaWVudFRleHQgPSBgJHtpdGVtW21lYXN1cmVtZW50XX0gJHtpdGVtW2luZ3JlZGllbnRdfWAudHJpbSgpO1xuICAgICAgY29uc29sZS5sb2coaW5ncmVkaWVudFRleHQpXG4gICAgICBpZiAoaW5ncmVkaWVudFRleHQgIT09ICdudWxsIG51bGwnICYmIGluZ3JlZGllbnRUZXh0ICE9PSAnbnVsbCcpIHtcbiAgICAgICAgYXJyYXkucHVzaChpbmdyZWRpZW50VGV4dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFycmF5KVxuICAgIHJldHVybiAoPHVsIGNsYXNzTmFtZT1cImgtbWluIHB5LTVcIj57YXJyYXkubWFwICgoaXRlbSkgPT4oPD48bGk+e2l0ZW19PC9saT48Lz4pKX08L3VsPik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBtdC01IFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmx1ZSBmbGV4IGdhcC0yIHJvdW5kZWQtbWQgcHgtNSBpdGVtcy1jZW50ZXIgcHktMiBob3ZlcjpiZy1ibHVlLWxpZ2h0XCI+IDxMaW5rICBocmVmPXtcIi9nYW1lL2VuZEdhbWVcIn0+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTUgaC01XCI+XG4gIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOSAxNUwzIDltMCAwbDYtNk0zIDloMTJhNiA2IDAgMDEwIDEyaC0zXCIgLz5cbjwvc3ZnPlxuPC9MaW5rPiA8cD5HbyBiYWNrPC9wPjwvYnV0dG9uPlxuICAgICBcbjwvZGl2PlxuICAgICAgICB7IGl0ZW0gPyAoXG4gICAgICAgIDw+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOmp1c3RpZnktY2VudGVyIHctMy80IG1kOnctZnVsbCBtLWF1dG8gbWQ6aXRlbXMtY2VudGVyIG1kOmdhcC0yMCBtYi01IG10LTEwXCI+XG48aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIiBzcmM9e2l0ZW0uc3RyTWVhbFRodW1ifSBhbHQ9XCJcIiB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0vPlxuPGRpdj5cbjxoMj57aXRlbS5zdHJNZWFsfTwvaDI+XG48aDM+e2l0ZW0uc3RyQ2F0ZWdvcnl9PC9oMz5cbjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8QmFzaWNUYWJzIGluc3RydWN0aW9ucz17aXRlbS5zdHJJbnN0cnVjdGlvbnN9IGluZ3JlZGllbnRzPXtmaW5kKCl9IC8+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIDpcbiAgICAgICAgKDw+PExvYWRlci8+PC8+KSB9XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbDtcblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCYXNpY1RhYnMiLCJMaW5rIiwiTG9hZGVyIiwiTWVhbCIsIml0ZW0iLCJmaW5kIiwiY29uc29sZSIsImxvZyIsImFycmF5IiwiaW5kZXgiLCJpbmdyZWRpZW50IiwibWVhc3VyZW1lbnQiLCJpbmdyZWRpZW50VGV4dCIsInRyaW0iLCJwdXNoIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJsaSIsImRpdiIsImJ1dHRvbiIsImhyZWYiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlLXdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiZCIsInAiLCJpbWciLCJzcmMiLCJzdHJNZWFsVGh1bWIiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwic3RyTWVhbCIsImgzIiwic3RyQ2F0ZWdvcnkiLCJpbnN0cnVjdGlvbnMiLCJzdHJJbnN0cnVjdGlvbnMiLCJpbmdyZWRpZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/game/meal.tsx\n"));

/***/ })

});
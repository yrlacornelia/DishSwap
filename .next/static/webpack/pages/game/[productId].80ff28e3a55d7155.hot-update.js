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

/***/ "./src/components/reusableComponents/tabs.tsx":
/*!****************************************************!*\
  !*** ./src/components/reusableComponents/tabs.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicTabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Tab */ \"./node_modules/@mui/material/Tab/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CustomTabPanel(props) {\n    const { children, value, index, ...other } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        role: \"tabpanel\",\n        hidden: value !== index,\n        id: \"simple-tabpanel-\".concat(index),\n        \"aria-labelledby\": \"simple-tab-\".concat(index),\n        ...other,\n        children: value === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                p: 3,\n                width: \"\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = CustomTabPanel;\nfunction a11yProps(index) {\n    return {\n        id: \"simple-tab-\".concat(index),\n        \"aria-controls\": \"simple-tabpanel-\".concat(index)\n    };\n}\nfunction BasicTabs(param) {\n    let { instructions, ingredients } = param;\n    _s();\n    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const handleChange = (event, newValue)=>{\n        setValue(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            width: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    borderBottom: 1,\n                    borderColor: \"divider\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    value: value,\n                    onChange: handleChange,\n                    \"aria-label\": \"basic tabs example\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"w-1/2\",\n                            label: \"Instructions\",\n                            ...a11yProps(0)\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"w-1/2\",\n                            label: \"Ingredients\",\n                            ...a11yProps(1)\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTabPanel, {\n                value: value,\n                index: 0,\n                children: instructions\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTabPanel, {\n                value: value,\n                index: 1,\n                children: ingredients\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(BasicTabs, \"qPBOvRc2Co1iWTsdTL0g7j/rpjU=\");\n_c1 = BasicTabs;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomTabPanel\");\n$RefreshReg$(_c1, \"BasicTabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yZXVzYWJsZUNvbXBvbmVudHMvdGFicy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTztBQUNGO0FBQ2M7QUFDZDtBQVlwQyxTQUFTSyxlQUFlQyxLQUFvQjtJQUMxQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsT0FBTyxHQUFHSjtJQUU3QyxxQkFDRSw4REFBQ0s7UUFDQ0MsTUFBSztRQUNMQyxRQUFRTCxVQUFVQztRQUNsQkssSUFBSSxtQkFBeUIsT0FBTkw7UUFDdkJNLG1CQUFpQixjQUFvQixPQUFOTjtRQUM5QixHQUFHQyxLQUFLO2tCQUVSRixVQUFVQyx1QkFDVCw4REFBQ0wseURBQUdBO1lBQUVZLElBQUk7Z0JBQUVDLEdBQUU7Z0JBQUdDLE9BQU07WUFBRztzQkFDeEIsNEVBQUNmLGdFQUFVQTswQkFBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkI7S0FsQlNGO0FBb0JULFNBQVNjLFVBQVVWLEtBQWE7SUFDOUIsT0FBTztRQUNMSyxJQUFJLGNBQW9CLE9BQU5MO1FBQ2xCLGlCQUFpQixtQkFBeUIsT0FBTkE7SUFDdEM7QUFDRjtBQUVlLFNBQVNXLFVBQVUsS0FBMEM7UUFBMUMsRUFBQ0MsWUFBWSxFQUFFQyxXQUFXLEVBQWdCLEdBQTFDOztJQUNoQyxNQUFNLENBQUNkLE9BQU9lLFNBQVMsR0FBR3ZCLDJDQUFjLENBQUM7SUFFekMsTUFBTXlCLGVBQWUsQ0FBQ0MsT0FBNkJDO1FBQ2pESixTQUFTSTtJQUNYO0lBRUEscUJBQ0UsOERBQUN2Qix5REFBR0E7UUFBQ1ksSUFBSTtZQUFFRSxPQUFPO1FBQU87OzBCQUN2Qiw4REFBQ2QseURBQUdBO2dCQUFDWSxJQUFJO29CQUFFWSxjQUFjO29CQUFHQyxhQUFhO2dCQUFVOzBCQUNqRCw0RUFBQzVCLDBEQUFJQTtvQkFBQ08sT0FBT0E7b0JBQU9zQixVQUFVTDtvQkFBY00sY0FBVzs7c0NBQ3JELDhEQUFDN0IseURBQUdBOzRCQUFDOEIsV0FBVTs0QkFBUUMsT0FBTTs0QkFBZ0IsR0FBR2QsVUFBVSxFQUFFOzs7Ozs7c0NBQzVELDhEQUFDakIseURBQUdBOzRCQUFDOEIsV0FBVTs0QkFBU0MsT0FBTTs0QkFBZSxHQUFHZCxVQUFVLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdoRSw4REFBQ2Q7Z0JBQWVHLE9BQU9BO2dCQUFPQyxPQUFPOzBCQUNwQ1k7Ozs7OzswQkFFRCw4REFBQ2hCO2dCQUFlRyxPQUFPQTtnQkFBT0MsT0FBTzswQkFDckNhOzs7Ozs7Ozs7Ozs7QUFLTjtHQXhCd0JGO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3JldXNhYmxlQ29tcG9uZW50cy90YWJzLnRzeD8xZjY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcblxuaW50ZXJmYWNlIFRhYlBhbmVsUHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaW5kZXg6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbn1cbnR5cGUgQmFzaWNUYWJzUHJvcHMgPSB7XG4gICAgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XG4gICAgaW5ncmVkaWVudHM6IGFueTsgLy8gQ2hhbmdlIHRoZSB0eXBlIHRvIHN0cmluZ1xuICB9O1xuICBcbmZ1bmN0aW9uIEN1c3RvbVRhYlBhbmVsKHByb3BzOiBUYWJQYW5lbFByb3BzLCApIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XG4gICAgICBpZD17YHNpbXBsZS10YWJwYW5lbC0ke2luZGV4fWB9XG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e2BzaW1wbGUtdGFiLSR7aW5kZXh9YH1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICA+XG4gICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcbiAgICAgICAgPEJveCAgc3g9e3sgcDozLCB3aWR0aDpcIlwiIH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4OiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogYHNpbXBsZS10YWItJHtpbmRleH1gLFxuICAgICdhcmlhLWNvbnRyb2xzJzogYHNpbXBsZS10YWJwYW5lbC0ke2luZGV4fWAsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFicyh7aW5zdHJ1Y3Rpb25zLCBpbmdyZWRpZW50c306QmFzaWNUYWJzUHJvcHMpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBuZXdWYWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgPEJveCBzeD17eyBib3JkZXJCb3R0b206IDEsIGJvcmRlckNvbG9yOiAnZGl2aWRlcicgfX0+XG4gICAgICAgIDxUYWJzIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXJpYS1sYWJlbD1cImJhc2ljIHRhYnMgZXhhbXBsZVwiPlxuICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPSd3LTEvMicgbGFiZWw9XCJJbnN0cnVjdGlvbnNcIiB7Li4uYTExeVByb3BzKDApfSAvPlxuICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPSd3LTEvMicgIGxhYmVsPVwiSW5ncmVkaWVudHNcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L0JveD5cbiAgICAgIDxDdXN0b21UYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cbiAgICAgIHtpbnN0cnVjdGlvbnN9XG4gICAgICA8L0N1c3RvbVRhYlBhbmVsPlxuICAgICAgPEN1c3RvbVRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxuICAgICB7aW5ncmVkaWVudHN9XG4gICAgICA8L0N1c3RvbVRhYlBhbmVsPlxuXG4gICAgPC9Cb3g+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGFicyIsIlRhYiIsIlR5cG9ncmFwaHkiLCJCb3giLCJDdXN0b21UYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJkaXYiLCJyb2xlIiwiaGlkZGVuIiwiaWQiLCJhcmlhLWxhYmVsbGVkYnkiLCJzeCIsInAiLCJ3aWR0aCIsImExMXlQcm9wcyIsIkJhc2ljVGFicyIsImluc3RydWN0aW9ucyIsImluZ3JlZGllbnRzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsIm9uQ2hhbmdlIiwiYXJpYS1sYWJlbCIsImNsYXNzTmFtZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/reusableComponents/tabs.tsx\n"));

/***/ })

});
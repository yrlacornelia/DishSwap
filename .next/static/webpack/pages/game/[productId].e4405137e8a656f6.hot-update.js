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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicTabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Tab */ \"./node_modules/@mui/material/Tab/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CustomTabPanel(props) {\n    const { children, value, index, ...other } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        role: \"tabpanel\",\n        hidden: value !== index,\n        id: \"simple-tabpanel-\".concat(index),\n        \"aria-labelledby\": \"simple-tab-\".concat(index),\n        ...other,\n        children: value === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                alignItems: center,\n                p: 3\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = CustomTabPanel;\nfunction a11yProps(index) {\n    return {\n        id: \"simple-tab-\".concat(index),\n        \"aria-controls\": \"simple-tabpanel-\".concat(index)\n    };\n}\nfunction BasicTabs(param) {\n    let { instructions, ingredients } = param;\n    _s();\n    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const handleChange = (event, newValue)=>{\n        setValue(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            width: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    borderBottom: 1,\n                    borderColor: \"divider\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    value: value,\n                    onChange: handleChange,\n                    \"aria-label\": \"basic tabs example\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            label: \"Instructions\",\n                            ...a11yProps(0)\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            label: \"Ingredients\",\n                            ...a11yProps(1)\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTabPanel, {\n                value: value,\n                index: 0,\n                children: instructions\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTabPanel, {\n                value: value,\n                index: 1,\n                children: ingredients\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/tabs.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(BasicTabs, \"qPBOvRc2Co1iWTsdTL0g7j/rpjU=\");\n_c1 = BasicTabs;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomTabPanel\");\n$RefreshReg$(_c1, \"BasicTabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yZXVzYWJsZUNvbXBvbmVudHMvdGFicy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTztBQUNGO0FBQ2M7QUFDZDtBQVlwQyxTQUFTSyxlQUFlQyxLQUFvQjtJQUMxQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsT0FBTyxHQUFHSjtJQUU3QyxxQkFDRSw4REFBQ0s7UUFDQ0MsTUFBSztRQUNMQyxRQUFRTCxVQUFVQztRQUNsQkssSUFBSSxtQkFBeUIsT0FBTkw7UUFDdkJNLG1CQUFpQixjQUFvQixPQUFOTjtRQUM5QixHQUFHQyxLQUFLO2tCQUVSRixVQUFVQyx1QkFDVCw4REFBQ0wseURBQUdBO1lBQUNZLElBQUk7Z0JBQUVDLFlBQVlDO2dCQUFRQyxHQUFHO1lBQUU7c0JBQ2xDLDRFQUFDaEIsZ0VBQVVBOzBCQUFFSTs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QjtLQWxCU0Y7QUFvQlQsU0FBU2UsVUFBVVgsS0FBYTtJQUM5QixPQUFPO1FBQ0xLLElBQUksY0FBb0IsT0FBTkw7UUFDbEIsaUJBQWlCLG1CQUF5QixPQUFOQTtJQUN0QztBQUNGO0FBRWUsU0FBU1ksVUFBVSxLQUEwQztRQUExQyxFQUFDQyxZQUFZLEVBQUVDLFdBQVcsRUFBZ0IsR0FBMUM7O0lBQ2hDLE1BQU0sQ0FBQ2YsT0FBT2dCLFNBQVMsR0FBR3hCLDJDQUFjLENBQUM7SUFFekMsTUFBTTBCLGVBQWUsQ0FBQ0MsT0FBNkJDO1FBQ2pESixTQUFTSTtJQUNYO0lBRUEscUJBQ0UsOERBQUN4Qix5REFBR0E7UUFBQ1ksSUFBSTtZQUFFYSxPQUFPO1FBQU87OzBCQUN2Qiw4REFBQ3pCLHlEQUFHQTtnQkFBQ1ksSUFBSTtvQkFBRWMsY0FBYztvQkFBR0MsYUFBYTtnQkFBVTswQkFDakQsNEVBQUM5QiwwREFBSUE7b0JBQUNPLE9BQU9BO29CQUFPd0IsVUFBVU47b0JBQWNPLGNBQVc7O3NDQUNyRCw4REFBQy9CLHlEQUFHQTs0QkFBQ2dDLE9BQU07NEJBQWdCLEdBQUdkLFVBQVUsRUFBRTs7Ozs7O3NDQUMxQyw4REFBQ2xCLHlEQUFHQTs0QkFBQ2dDLE9BQU07NEJBQWUsR0FBR2QsVUFBVSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHN0MsOERBQUNmO2dCQUFlRyxPQUFPQTtnQkFBT0MsT0FBTzswQkFDcENhOzs7Ozs7MEJBRUQsOERBQUNqQjtnQkFBZUcsT0FBT0E7Z0JBQU9DLE9BQU87MEJBQ3JDYzs7Ozs7Ozs7Ozs7O0FBS047R0F4QndCRjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yZXVzYWJsZUNvbXBvbmVudHMvdGFicy50c3g/MWY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5cbmludGVyZmFjZSBUYWJQYW5lbFByb3BzIHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGluZGV4OiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG59XG50eXBlIEJhc2ljVGFic1Byb3BzID0ge1xuICAgIGluc3RydWN0aW9uczogc3RyaW5nO1xuICAgIGluZ3JlZGllbnRzOiBhbnk7IC8vIENoYW5nZSB0aGUgdHlwZSB0byBzdHJpbmdcbiAgfTtcbiAgXG5mdW5jdGlvbiBDdXN0b21UYWJQYW5lbChwcm9wczogVGFiUGFuZWxQcm9wcywgKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxuICAgICAgaWQ9e2BzaW1wbGUtdGFicGFuZWwtJHtpbmRleH1gfVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2ltcGxlLXRhYi0ke2luZGV4fWB9XG4gICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXG4gICAgICAgIDxCb3ggc3g9e3sgYWxpZ25JdGVtczogY2VudGVyLCBwOiAzIH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4OiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogYHNpbXBsZS10YWItJHtpbmRleH1gLFxuICAgICdhcmlhLWNvbnRyb2xzJzogYHNpbXBsZS10YWJwYW5lbC0ke2luZGV4fWAsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFicyh7aW5zdHJ1Y3Rpb25zLCBpbmdyZWRpZW50c306QmFzaWNUYWJzUHJvcHMpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBuZXdWYWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgPEJveCBzeD17eyBib3JkZXJCb3R0b206IDEsIGJvcmRlckNvbG9yOiAnZGl2aWRlcicgfX0+XG4gICAgICAgIDxUYWJzIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXJpYS1sYWJlbD1cImJhc2ljIHRhYnMgZXhhbXBsZVwiPlxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJJbnN0cnVjdGlvbnNcIiB7Li4uYTExeVByb3BzKDApfSAvPlxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJJbmdyZWRpZW50c1wiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XG4gICAgICAgIDwvVGFicz5cbiAgICAgIDwvQm94PlxuICAgICAgPEN1c3RvbVRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxuICAgICAge2luc3RydWN0aW9uc31cbiAgICAgIDwvQ3VzdG9tVGFiUGFuZWw+XG4gICAgICA8Q3VzdG9tVGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XG4gICAgIHtpbmdyZWRpZW50c31cbiAgICAgIDwvQ3VzdG9tVGFiUGFuZWw+XG5cbiAgICA8L0JveD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJzIiwiVGFiIiwiVHlwb2dyYXBoeSIsIkJveCIsIkN1c3RvbVRhYlBhbmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsImRpdiIsInJvbGUiLCJoaWRkZW4iLCJpZCIsImFyaWEtbGFiZWxsZWRieSIsInN4IiwiYWxpZ25JdGVtcyIsImNlbnRlciIsInAiLCJhMTF5UHJvcHMiLCJCYXNpY1RhYnMiLCJpbnN0cnVjdGlvbnMiLCJpbmdyZWRpZW50cyIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwid2lkdGgiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsIm9uQ2hhbmdlIiwiYXJpYS1sYWJlbCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/reusableComponents/tabs.tsx\n"));

/***/ })

});
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

/***/ "./src/components/reusableComponents/inputfield.tsx":
/*!**********************************************************!*\
  !*** ./src/components/reusableComponents/inputfield.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Input = (param)=>{\n    let { label, min, max, value, onChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            className: \"py-2 gap-1 flex flex-col\",\n            children: [\n                label,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    required: true,\n                    className: \"flex flex-col w-full p-2\",\n                    type: \"number\",\n                    min: min,\n                    max: max,\n                    value: value,\n                    // onChange={(e) => onChange(parseInt(e.target.value))}\n                    onChange: onChange\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/inputfield.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-600\",\n                    children: errorMessage\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/inputfield.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/inputfield.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/reusableComponents/inputfield.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yZXVzYWJsZUNvbXBvbmVudHMvaW5wdXRmaWVsZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBWTFCLE1BQU1DLFFBQVE7UUFBQyxFQUFFQyxLQUFLLEVBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBUTtJQUVwRCxxQkFDQSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFWCw0RUFBQ047WUFBTU0sV0FBVTs7Z0JBQ2pCTjs4QkFDQSw4REFBQ087b0JBQ0NDLFFBQVE7b0JBQ2RGLFdBQVU7b0JBQ0pHLE1BQUs7b0JBQ0xSLEtBQUtBO29CQUNMQyxLQUFLQTtvQkFDTEMsT0FBT0E7b0JBRVAsdURBQXVEO29CQUN2REMsVUFBVUE7Ozs7OztnQkFFVE0sdUJBQVMsOERBQUNDO29CQUFFTCxXQUFVOzhCQUFnQk07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2pEO0tBckJNYjtBQXVCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yZXVzYWJsZUNvbXBvbmVudHMvaW5wdXRmaWVsZC50c3g/MjdhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIG1pbjogbnVtYmVyO1xuICAgIG1heDpudW1iZXI7XG4gICAgIGVycm9yOiBib29sZWFuO1xuICAgIC8vIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcbiAgb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIH1cblxuY29uc3QgSW5wdXQgPSAoeyBsYWJlbCxtaW4sIG1heCwgdmFsdWUsIG9uQ2hhbmdlIH06UHJvcHMpID0+IHtcbiAgXG4gICAgcmV0dXJuICggXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIFwiID5cblxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHktMiBnYXAtMSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAge2xhYmVsfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICByZXF1aXJlZFxuICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHAtMlwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgbWF4PXttYXh9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiPntlcnJvck1lc3NhZ2V9PC9wPn1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+ICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dCIsImxhYmVsIiwibWluIiwibWF4IiwidmFsdWUiLCJvbkNoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicmVxdWlyZWQiLCJ0eXBlIiwiZXJyb3IiLCJwIiwiZXJyb3JNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/reusableComponents/inputfield.tsx\n"));

/***/ })

});
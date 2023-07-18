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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchMeals: function() { return /* binding */ fetchMeals; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// fetchUtils.js\nconst fetchMeals = async (numPlayers)=>{\n    const [test, setTest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    for(let i = 0; i < numPlayers; i++){\n        try {\n            const response = await fetch(\"https://www.themealdb.com/api/json/v1/1/random.php\");\n            const data = await response.json();\n            setTest((prevArray)=>[\n                    ...prevArray,\n                    data\n                ]); // Add \"No\" to the result array\n            return data.meals; // Assuming the API response contains a \"meals\" property with the desired data\n        } catch (error) {\n            throw new Error(\"Failed to fetch meals\");\n        }\n    }\n    return test;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZmV0Y2hVdGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFFakMsZ0JBQWdCO0FBQ1QsTUFBTUMsYUFBYSxPQUFPQztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQVcsRUFBRTtJQUM3QyxJQUFLLElBQUlLLElBQUksR0FBR0EsSUFBSUgsWUFBWUcsSUFBSztRQUNoQyxJQUFJO1lBQ1AsTUFBTUMsV0FBVyxNQUFNQyxNQUFPO1lBQzlCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsUUFBUU0sQ0FBQUEsWUFBYTt1QkFBSUE7b0JBQVdGO2lCQUFLLEdBQUcsK0JBQStCO1lBQzNFLE9BQU9BLEtBQUtHLEtBQUssRUFBRSw4RUFBOEU7UUFFbkcsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0E7SUFDQSxPQUFPVjtBQUVULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2ZldGNoVXRpbHMudHM/YzYyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBmZXRjaFV0aWxzLmpzXG5leHBvcnQgY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jIChudW1QbGF5ZXJzOm51bWJlcikgPT4ge1xuICAgIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvcmFuZG9tLnBocGApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFRlc3QocHJldkFycmF5ID0+IFsuLi5wcmV2QXJyYXksIGRhdGFdKTsgLy8gQWRkIFwiTm9cIiB0byB0aGUgcmVzdWx0IGFycmF5XG4gICAgICByZXR1cm4gZGF0YS5tZWFsczsgLy8gQXNzdW1pbmcgdGhlIEFQSSByZXNwb25zZSBjb250YWlucyBhIFwibWVhbHNcIiBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIGRhdGFcbiAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBtZWFsc1wiKTtcbiAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXN0XG4gICBcbiAgfTtcbiAgXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJmZXRjaE1lYWxzIiwibnVtUGxheWVycyIsInRlc3QiLCJzZXRUZXN0IiwiaSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByZXZBcnJheSIsIm1lYWxzIiwiZXJyb3IiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/fetchUtils.ts\n"));

/***/ })

});
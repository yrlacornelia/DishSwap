"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/test",{

/***/ "./src/pages/game/test.tsx":
/*!*********************************!*\
  !*** ./src/pages/game/test.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _components_game_nextButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/game/nextButton */ \"./src/components/game/nextButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Test() {\n    _s();\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [resultArray, setResultArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Array to store results\n    const [playersFinished, setPlayersFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [testa, setTesta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"HI\");\n        const localStorageArray = (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)(\"meals\");\n        console.log(localStorageArray);\n        setTesta(localStorageArray);\n    }, []);\n    console.log(testa[0]);\n    const [selectedObjectIndex, setSelectedObjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const selectedObject = testa[selectedObjectIndex];\n    console.log(selectedObject);\n    const handleNextClick = ()=>{\n        setSelectedObjectIndex(selectedObjectIndex + 1);\n    };\n    const handleYesClick = ()=>{\n        handleNextClick();\n        setResultArray((prevArray)=>{\n            var _items_total;\n            return [\n                ...prevArray,\n                (_items_total = items[total]) === null || _items_total === void 0 ? void 0 : _items_total.strMeal\n            ];\n        }); // Add \"No\" to the result array\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"m\\xe5ltid: bild\"\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_nextButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onNextClick: handleYesClick,\n                    title: \"yes\"\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_nextButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onNextClick: handleNextClick,\n                    title: \"no\"\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, this);\n}\n_s(Test, \"gT+7i6bAQ0EckffOeprq3dAzHOA=\");\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS90ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDa0I7QUFDWDtBQTJEM0MsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQVcsRUFBRSxHQUFHLHlCQUF5QjtJQUN2RixNQUFNLENBQUNRLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQSxDQUFDO0lBRXZELE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBVztRQUFDO0tBQUc7SUFDakRELGdEQUFTQSxDQUFDO1FBQ05hLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1DLG9CQUFvQmIsOEVBQW9CQSxDQUFDO1FBQy9DVyxRQUFRQyxHQUFHLENBQUNDO1FBQ1pILFNBQVNHO0lBQ2IsR0FBRyxFQUFFO0lBQ0xGLFFBQVFDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLEVBQUU7SUFDcEIsTUFBTSxDQUFDSyxxQkFBcUJDLHVCQUF1QixHQUFHaEIsK0NBQVFBLENBQVM7SUFDdkUsTUFBTWlCLGlCQUEyQlAsS0FBSyxDQUFDSyxvQkFBb0I7SUFDM0RILFFBQVFDLEdBQUcsQ0FBQ0k7SUFDWixNQUFNQyxrQkFBa0I7UUFDcEJGLHVCQUF1QkQsc0JBQXNCO0lBQy9DO0lBRUEsTUFBTUksaUJBQWlCO1FBQ3JCRDtRQUNBWCxlQUFlYSxDQUFBQTtnQkFBNEJDO21CQUFmO21CQUFJRDtpQkFBV0MsZUFBQUEsS0FBSyxDQUFDakIsTUFBTSxjQUFaaUIsbUNBQUFBLGFBQWNDLE9BQU87YUFBQztZQUFHLCtCQUErQjtJQUVyRztJQUNGLHFCQUNJLDhEQUFDQztrQkFFRzs7OEJBRUksOERBQUNDOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUN0QixtRUFBVUE7b0JBQUN1QixhQUFhTjtvQkFBZ0JPLE9BQU87Ozs7Ozs4QkFDaEQsOERBQUN4QixtRUFBVUE7b0JBQUN1QixhQUFhUDtvQkFBaUJRLE9BQU87Ozs7Ozs7Ozs7Ozs7QUFLakU7R0FyQ3dCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbWUvdGVzdC50c3g/ZGY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbG9hZEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvTG9jYWxTdG9yYWdlVXRpbHNcIjtcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dhbWUvbmV4dEJ1dHRvblwiO1xuXG5pbnRlcmZhY2UgTXlPYmplY3Qge1xuICAgIGRhdGVNb2RpZmllZDogbnVsbCB8IHN0cmluZztcbiAgICBpZE1lYWw6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyQXJlYTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJDYXRlZ29yeTogc3RyaW5nO1xuICAgIHN0ckNyZWF0aXZlQ29tbW9uc0NvbmZpcm1lZDogbnVsbCB8IHN0cmluZztcbiAgICBzdHJEcmlua0FsdGVybmF0ZTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbWFnZVNvdXJjZTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MzogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50NDogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50NTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50NjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50NzogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50ODogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50OTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MTA6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RySW5ncmVkaWVudDExOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQxMjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MTM6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RySW5ncmVkaWVudDE0OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQxNTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MTY6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RySW5ncmVkaWVudDE3OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQxODogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MTk6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RySW5ncmVkaWVudDIwOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluc3RydWN0aW9uczogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFsOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYWxUaHVtYjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMzogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlNDogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlNTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlNjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlNzogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlODogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlOTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMTA6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyTWVhc3VyZTExOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUxMjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMTM6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyTWVhc3VyZTE0OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUxNTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMTY6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyTWVhc3VyZTE3OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUxODogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMTk6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyTWVhc3VyZTIwOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0clNvdXJjZTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJUYWdzOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0cllvdXR1YmU6IG51bGwgfCBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdCgpIHtcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtyZXN1bHRBcnJheSwgc2V0UmVzdWx0QXJyYXldID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTsgLy8gQXJyYXkgdG8gc3RvcmUgcmVzdWx0c1xuICAgIGNvbnN0IFtwbGF5ZXJzRmluaXNoZWQsIHNldFBsYXllcnNGaW5pc2hlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgXG4gICAgY29uc3QgW3Rlc3RhLCBzZXRUZXN0YV0gPSB1c2VTdGF0ZTxNeU9iamVjdD4oW1wiXCJdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhJXCIpXG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUFycmF5ID0gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoXCJtZWFsc1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2VBcnJheSlcbiAgICAgICAgc2V0VGVzdGEobG9jYWxTdG9yYWdlQXJyYXkpXG4gICAgfSwgW10pXG4gICAgY29uc29sZS5sb2codGVzdGFbMF0pXG4gICAgY29uc3QgW3NlbGVjdGVkT2JqZWN0SW5kZXgsIHNldFNlbGVjdGVkT2JqZWN0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgICBjb25zdCBzZWxlY3RlZE9iamVjdDogTXlPYmplY3QgPSB0ZXN0YVtzZWxlY3RlZE9iamVjdEluZGV4XTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdClcbiAgICBjb25zdCBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0SW5kZXgoc2VsZWN0ZWRPYmplY3RJbmRleCArIDEpO1xuICAgICAgfTtcbiAgICBcbiAgICAgIGNvbnN0IGhhbmRsZVllc0NsaWNrID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVOZXh0Q2xpY2soKTtcbiAgICAgICAgc2V0UmVzdWx0QXJyYXkocHJldkFycmF5ID0+IFsuLi5wcmV2QXJyYXksIGl0ZW1zW3RvdGFsXT8uc3RyTWVhbF0pOyAvLyBBZGQgXCJOb1wiIHRvIHRoZSByZXN1bHQgYXJyYXlcbiAgICBcbiAgICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7LyogPHA+bcOlbHRpZDoge2l0ZW0uc3RyTWVhbH08L3A+ICovfVxuICAgICAgICAgICAgICAgIDxwPm3DpWx0aWQ6IGJpbGQ8L3A+XG4gICAgICAgICAgICAgICAgPE5leHRCdXR0b24gb25OZXh0Q2xpY2s9e2hhbmRsZVllc0NsaWNrfSB0aXRsZT17XCJ5ZXNcIn0gLz5cbiAgICAgICAgICAgICAgICA8TmV4dEJ1dHRvbiBvbk5leHRDbGljaz17aGFuZGxlTmV4dENsaWNrfSB0aXRsZT17XCJub1wifSAvPlxuICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImxvYWRGcm9tTG9jYWxTdG9yYWdlIiwiTmV4dEJ1dHRvbiIsIlRlc3QiLCJ0b3RhbCIsInNldFRvdGFsIiwicmVzdWx0QXJyYXkiLCJzZXRSZXN1bHRBcnJheSIsInBsYXllcnNGaW5pc2hlZCIsInNldFBsYXllcnNGaW5pc2hlZCIsInRlc3RhIiwic2V0VGVzdGEiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlQXJyYXkiLCJzZWxlY3RlZE9iamVjdEluZGV4Iiwic2V0U2VsZWN0ZWRPYmplY3RJbmRleCIsInNlbGVjdGVkT2JqZWN0IiwiaGFuZGxlTmV4dENsaWNrIiwiaGFuZGxlWWVzQ2xpY2siLCJwcmV2QXJyYXkiLCJpdGVtcyIsInN0ck1lYWwiLCJkaXYiLCJwIiwib25OZXh0Q2xpY2siLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/game/test.tsx\n"));

/***/ })

});
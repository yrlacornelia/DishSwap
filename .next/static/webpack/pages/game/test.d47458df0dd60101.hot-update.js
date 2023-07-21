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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _components_game_nextButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/game/nextButton */ \"./src/components/game/nextButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Test() {\n    _s();\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [resultArray, setResultArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [playersFinished, setPlayersFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [testa, setTesta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // Initialize as an empty object\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"HI\");\n        const localStorageArray = (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)(\"meals\");\n        console.log(localStorageArray);\n        setTesta(localStorageArray[0] || {}); // Set the first element of the array or an empty object\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (total === testa.length) {\n            setPlayersFinished(playersFinished + 1);\n            alert(\"Game over!\");\n            setTotal(0); // Reset total for the next player\n        }\n    }, [\n        total,\n        testa\n    ]);\n    console.log(testa);\n    const [selectedObjectIndex, setSelectedObjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const selectedObject = testa[selectedObjectIndex];\n    console.log(selectedObject);\n    const handleNextClick = ()=>{\n        setSelectedObjectIndex(selectedObjectIndex + 1);\n    };\n    console.log(selectedObjectIndex);\n    const handleYesClick = ()=>{\n        handleNextClick();\n        setResultArray((prevArray)=>{\n            var _testa;\n            return [\n                ...prevArray,\n                ((_testa = testa) === null || _testa === void 0 ? void 0 : _testa.strMeal) || \"\"\n            ];\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const players = (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)(\"playerMealData\");\n        console.log(players.numPlayers);\n        if (playersFinished === players.numPlayers) {\n            alert(\"Game over!\");\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"results\", resultArray);\n            window.location.href = \"/game/endGame\";\n        }\n    }, [\n        playersFinished\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"m\\xe5ltid: bild\"\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, this),\n                selectedObject.strMeal,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_nextButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onNextClick: handleYesClick,\n                    title: \"yes\"\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_nextButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onNextClick: handleNextClick,\n                    title: \"no\"\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n        lineNumber: 109,\n        columnNumber: 7\n    }, this);\n}\n_s(Test, \"meqjga+dg/LDqbg/kE1/ocUGl6s=\");\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS90ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDc0M7QUFDL0I7QUEyRDNDLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFXLEVBQUU7SUFDM0QsTUFBTSxDQUFDUyxpQkFBaUJDLG1CQUFtQixHQUFHViwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQVcsQ0FBQyxJQUFJLGdDQUFnQztJQUVsRkQsZ0RBQVNBLENBQUM7UUFDUmMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUMsb0JBQW9CZCw4RUFBb0JBLENBQUM7UUFDL0NZLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDWkgsU0FBU0csaUJBQWlCLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSx3REFBd0Q7SUFDaEcsR0FBRyxFQUFFO0lBRUxoQixnREFBU0EsQ0FBQztRQUNSLElBQUlNLFVBQVVNLE1BQU1LLE1BQU0sRUFBRTtZQUMxQk4sbUJBQW1CRCxrQkFBa0I7WUFDckNRLE1BQU07WUFDTlgsU0FBUyxJQUFJLGtDQUFrQztRQUNqRDtJQUNGLEdBQUc7UUFBQ0Q7UUFBT007S0FBTTtJQUVqQkUsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU0sQ0FBQ08scUJBQXFCQyx1QkFBdUIsR0FBR25CLCtDQUFRQSxDQUFTO0lBQ3ZFLE1BQU1vQixpQkFBMkJULEtBQUssQ0FBQ08sb0JBQW9CO0lBQzNETCxRQUFRQyxHQUFHLENBQUNNO0lBRVosTUFBTUMsa0JBQWtCO1FBQ3RCRix1QkFBdUJELHNCQUFzQjtJQUMvQztJQUVBTCxRQUFRQyxHQUFHLENBQUNJO0lBQ1osTUFBTUksaUJBQWlCO1FBQ3JCRDtRQUNBYixlQUFlLENBQUNlO2dCQUE2Qlo7bUJBQWY7bUJBQUlZO2dCQUFXWixFQUFBQSxTQUFBQSxtQkFBQUEsNkJBQUFBLE9BQU9hLE9BQU8sS0FBSTthQUFHOztJQUNwRTtJQUVBekIsZ0RBQVNBLENBQUM7UUFDUixNQUFNMEIsVUFBVXhCLDhFQUFvQkEsQ0FBQztRQUNyQ1ksUUFBUUMsR0FBRyxDQUFDVyxRQUFRQyxVQUFVO1FBQzlCLElBQUlqQixvQkFBb0JnQixRQUFRQyxVQUFVLEVBQUU7WUFDMUNULE1BQU07WUFDTmYsNEVBQWtCQSxDQUFDLFdBQVdLO1lBQzlCb0IsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUk7UUFDMUI7SUFDRixHQUFHO1FBQUNwQjtLQUFnQjtJQUVwQixxQkFDRSw4REFBQ3FCO2tCQUNDOzs4QkFFRSw4REFBQ0M7OEJBQUU7Ozs7OztnQkFDRlgsZUFBZUksT0FBTzs4QkFDdkIsOERBQUNyQixtRUFBVUE7b0JBQUM2QixhQUFhVjtvQkFBZ0JXLE9BQU87Ozs7Ozs4QkFDaEQsOERBQUM5QixtRUFBVUE7b0JBQUM2QixhQUFhWDtvQkFBaUJZLE9BQU87Ozs7Ozs7Ozs7Ozs7QUFJekQ7R0F6RHNCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbWUvdGVzdC50c3g/ZGY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbG9hZEZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VVdGlsc1wiO1xuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2FtZS9uZXh0QnV0dG9uXCI7XG5cbmludGVyZmFjZSBNeU9iamVjdCB7XG4gICAgZGF0ZU1vZGlmaWVkOiBudWxsIHwgc3RyaW5nO1xuICAgIGlkTWVhbDogbnVsbCB8IHN0cmluZztcbiAgICBzdHJBcmVhOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckNhdGVnb3J5OiBzdHJpbmc7XG4gICAgc3RyQ3JlYXRpdmVDb21tb25zQ29uZmlybWVkOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckRyaW5rQWx0ZXJuYXRlOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckltYWdlU291cmNlOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQxOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQyOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQzOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQ0OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQ1OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQ2OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQ3OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQ4OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQ5OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQxMDogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MTE6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RySW5ncmVkaWVudDEyOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQxMzogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MTQ6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RySW5ncmVkaWVudDE1OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQxNjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MTc6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RySW5ncmVkaWVudDE4OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ckluZ3JlZGllbnQxOTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJJbmdyZWRpZW50MjA6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RySW5zdHJ1Y3Rpb25zOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYWw6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyTWVhbFRodW1iOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUxOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUyOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUzOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmU0OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmU1OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmU2OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmU3OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmU4OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmU5OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUxMDogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMTE6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyTWVhc3VyZTEyOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUxMzogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMTQ6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyTWVhc3VyZTE1OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUxNjogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMTc6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyTWVhc3VyZTE4OiBudWxsIHwgc3RyaW5nO1xuICAgIHN0ck1lYXN1cmUxOTogbnVsbCB8IHN0cmluZztcbiAgICBzdHJNZWFzdXJlMjA6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyU291cmNlOiBudWxsIHwgc3RyaW5nO1xuICAgIHN0clRhZ3M6IG51bGwgfCBzdHJpbmc7XG4gICAgc3RyWW91dHViZTogbnVsbCB8IHN0cmluZztcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0KCkge1xuICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Jlc3VsdEFycmF5LCBzZXRSZXN1bHRBcnJheV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtwbGF5ZXJzRmluaXNoZWQsIHNldFBsYXllcnNGaW5pc2hlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdGVzdGEsIHNldFRlc3RhXSA9IHVzZVN0YXRlPE15T2JqZWN0Pih7fSk7IC8vIEluaXRpYWxpemUgYXMgYW4gZW1wdHkgb2JqZWN0XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSElcIik7XG4gICAgICBjb25zdCBsb2NhbFN0b3JhZ2VBcnJheSA9IGxvYWRGcm9tTG9jYWxTdG9yYWdlKFwibWVhbHNcIik7XG4gICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2VBcnJheSk7XG4gICAgICBzZXRUZXN0YShsb2NhbFN0b3JhZ2VBcnJheVswXSB8fCB7fSk7IC8vIFNldCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXkgb3IgYW4gZW1wdHkgb2JqZWN0XG4gICAgfSwgW10pO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRvdGFsID09PSB0ZXN0YS5sZW5ndGgpIHtcbiAgICAgICAgc2V0UGxheWVyc0ZpbmlzaGVkKHBsYXllcnNGaW5pc2hlZCArIDEpO1xuICAgICAgICBhbGVydChcIkdhbWUgb3ZlciFcIik7XG4gICAgICAgIHNldFRvdGFsKDApOyAvLyBSZXNldCB0b3RhbCBmb3IgdGhlIG5leHQgcGxheWVyXG4gICAgICB9XG4gICAgfSwgW3RvdGFsLCB0ZXN0YV0pO1xuICBcbiAgICBjb25zb2xlLmxvZyh0ZXN0YSk7XG4gICAgY29uc3QgW3NlbGVjdGVkT2JqZWN0SW5kZXgsIHNldFNlbGVjdGVkT2JqZWN0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgICBjb25zdCBzZWxlY3RlZE9iamVjdDogTXlPYmplY3QgPSB0ZXN0YVtzZWxlY3RlZE9iamVjdEluZGV4XTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdCk7XG4gIFxuICAgIGNvbnN0IGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcbiAgICAgIHNldFNlbGVjdGVkT2JqZWN0SW5kZXgoc2VsZWN0ZWRPYmplY3RJbmRleCArIDEpO1xuICAgIH07XG4gIFxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkT2JqZWN0SW5kZXgpO1xuICAgIGNvbnN0IGhhbmRsZVllc0NsaWNrID0gKCkgPT4ge1xuICAgICAgaGFuZGxlTmV4dENsaWNrKCk7XG4gICAgICBzZXRSZXN1bHRBcnJheSgocHJldkFycmF5KSA9PiBbLi4ucHJldkFycmF5LCB0ZXN0YT8uc3RyTWVhbCB8fCBcIlwiXSk7XG4gICAgfTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHBsYXllcnMgPSBsb2FkRnJvbUxvY2FsU3RvcmFnZShcInBsYXllck1lYWxEYXRhXCIpO1xuICAgICAgY29uc29sZS5sb2cocGxheWVycy5udW1QbGF5ZXJzKTtcbiAgICAgIGlmIChwbGF5ZXJzRmluaXNoZWQgPT09IHBsYXllcnMubnVtUGxheWVycykge1xuICAgICAgICBhbGVydChcIkdhbWUgb3ZlciFcIik7XG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZShcInJlc3VsdHNcIiwgcmVzdWx0QXJyYXkpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZ2FtZS9lbmRHYW1lYDtcbiAgICAgIH1cbiAgICB9LCBbcGxheWVyc0ZpbmlzaGVkXSk7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiA8cD5tw6VsdGlkOiB7aXRlbS5zdHJNZWFsfTwvcD4gKi99XG4gICAgICAgICAgPHA+bcOlbHRpZDogYmlsZDwvcD5cbiAgICAgICAgICB7c2VsZWN0ZWRPYmplY3Quc3RyTWVhbH1cbiAgICAgICAgICA8TmV4dEJ1dHRvbiBvbk5leHRDbGljaz17aGFuZGxlWWVzQ2xpY2t9IHRpdGxlPXtcInllc1wifSAvPlxuICAgICAgICAgIDxOZXh0QnV0dG9uIG9uTmV4dENsaWNrPXtoYW5kbGVOZXh0Q2xpY2t9IHRpdGxlPXtcIm5vXCJ9IC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibG9hZEZyb21Mb2NhbFN0b3JhZ2UiLCJzYXZlVG9Mb2NhbFN0b3JhZ2UiLCJOZXh0QnV0dG9uIiwiVGVzdCIsInRvdGFsIiwic2V0VG90YWwiLCJyZXN1bHRBcnJheSIsInNldFJlc3VsdEFycmF5IiwicGxheWVyc0ZpbmlzaGVkIiwic2V0UGxheWVyc0ZpbmlzaGVkIiwidGVzdGEiLCJzZXRUZXN0YSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2VBcnJheSIsImxlbmd0aCIsImFsZXJ0Iiwic2VsZWN0ZWRPYmplY3RJbmRleCIsInNldFNlbGVjdGVkT2JqZWN0SW5kZXgiLCJzZWxlY3RlZE9iamVjdCIsImhhbmRsZU5leHRDbGljayIsImhhbmRsZVllc0NsaWNrIiwicHJldkFycmF5Iiwic3RyTWVhbCIsInBsYXllcnMiLCJudW1QbGF5ZXJzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwicCIsIm9uTmV4dENsaWNrIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/game/test.tsx\n"));

/***/ })

});
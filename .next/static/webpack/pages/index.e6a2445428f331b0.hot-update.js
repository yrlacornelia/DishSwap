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

/***/ "./src/components/game/settings.tsx":
/*!******************************************!*\
  !*** ./src/components/game/settings.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchUtils */ \"./src/utils/fetchUtils.ts\");\n/* harmony import */ var _reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/Button */ \"./src/components/reusableComponents/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Settings = ()=>{\n    _s();\n    const [numPlayers, setNumPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numMeals, setNumMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleNumPlayersChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumPlayers(value);\n    };\n    const handleNumMealsChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumMeals(value);\n    };\n    const handleSave = async ()=>{\n        const data = {\n            numPlayers,\n            numMeals\n        };\n        (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"playerMealData\", data);\n        try {\n            const mealArray = await (0,_utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__.fetchMeals)(numMeals);\n            console.log(mealArray);\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"meals\", mealArray);\n            // mealArray.map =>\n            const nextMeal = mealArray[0];\n            console.log(nextMeal.strMeal);\n            window.location.href = \"/game/test\";\n        } catch (error) {\n            console.error(\"Error fetching results:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Number of players (up to 5):\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        min: 1,\n                        max: 5,\n                        value: numPlayers,\n                        onChange: handleNumPlayersChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Number of meals (up to 10):\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        min: 1,\n                        max: 10,\n                        value: numMeals,\n                        onChange: handleNumMealsChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: starta,\n                onNextClick: handleSave\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Settings, \"PzJ7MKsXfYqfkfhpG4lOFUYt77c=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ2tDO0FBQ2Y7QUFDRTtBQUV0RCxNQUFNSSxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQVM7SUFFakQsTUFBTVMseUJBQXlCLENBQUNDO1FBQzlCLE1BQU1DLFFBQVFDLFNBQVNGLE1BQU1HLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFO1FBQzNDTCxjQUFjSztJQUNoQjtJQUVBLE1BQU1HLHVCQUF1QixDQUFDSjtRQUM1QixNQUFNQyxRQUFRQyxTQUFTRixNQUFNRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUMzQ0gsWUFBWUc7SUFDZDtJQUVBLE1BQU1JLGFBQWE7UUFDakIsTUFBTUMsT0FBTztZQUNYWDtZQUNBRTtRQUNGO1FBRUFOLDRFQUFrQkEsQ0FBQyxrQkFBa0JlO1FBQ3JDLElBQUk7WUFDRixNQUFNQyxZQUFZLE1BQU1mLDZEQUFVQSxDQUFDSztZQUNuQ1csUUFBUUMsR0FBRyxDQUFDRjtZQUNaaEIsNEVBQWtCQSxDQUFDLFNBQVNnQjtZQUNsQyxtQkFBbUI7WUFDakIsTUFBTUcsV0FBV0gsU0FBUyxDQUFDLEVBQUU7WUFDekJDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBU0MsT0FBTztZQUUvQkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUk7UUFDdkIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RQLFFBQVFPLEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxLQUFLO3dCQUNMQyxLQUFLO3dCQUNMcEIsT0FBT047d0JBQ1AyQixVQUFVdkI7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ2tCOztvQkFBTTtrQ0FFTCw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLEtBQUs7d0JBQ0xDLEtBQUs7d0JBQ0xwQixPQUFPSjt3QkFDUHlCLFVBQVVsQjs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDWCxrRUFBVUE7Z0JBQUM4QixPQUFPQztnQkFBVUMsYUFBYXBCOzs7Ozs7Ozs7Ozs7QUFHaEQ7R0E1RE1YO0tBQUFBO0FBOEROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbWUvc2V0dGluZ3MudHN4P2UwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VVdGlscyc7XG5pbXBvcnQgeyBmZXRjaE1lYWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hVdGlscyc7XG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tICcuLi9yZXVzYWJsZUNvbXBvbmVudHMvQnV0dG9uJztcblxuY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IFtudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtudW1NZWFscywgc2V0TnVtTWVhbHNdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgc2V0TnVtUGxheWVycyh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTnVtTWVhbHNDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBzZXROdW1NZWFscyh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbnVtUGxheWVycyxcbiAgICAgIG51bU1lYWxzLFxuICAgIH07XG5cbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3BsYXllck1lYWxEYXRhJywgZGF0YSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1lYWxBcnJheSA9IGF3YWl0IGZldGNoTWVhbHMobnVtTWVhbHMpO1xuICAgICAgY29uc29sZS5sb2cobWVhbEFycmF5KVxuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdtZWFscycsIG1lYWxBcnJheSk7XG4vLyBtZWFsQXJyYXkubWFwID0+XG4gIGNvbnN0IG5leHRNZWFsID0gbWVhbEFycmF5WzBdO1xuICAgICAgY29uc29sZS5sb2cobmV4dE1lYWwuc3RyTWVhbClcblxuICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2dhbWUvdGVzdGA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZXN1bHRzOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgTnVtYmVyIG9mIHBsYXllcnMgKHVwIHRvIDUpOlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgbWF4PXs1fVxuICAgICAgICAgIHZhbHVlPXtudW1QbGF5ZXJzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgTnVtYmVyIG9mIG1lYWxzICh1cCB0byAxMCk6XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICBtYXg9ezEwfVxuICAgICAgICAgIHZhbHVlPXtudW1NZWFsc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtTWVhbHNDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPE5leHRCdXR0b24gdGl0bGU9e3N0YXJ0YX0gICBvbk5leHRDbGljaz17aGFuZGxlU2F2ZX0vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzYXZlVG9Mb2NhbFN0b3JhZ2UiLCJmZXRjaE1lYWxzIiwiTmV4dEJ1dHRvbiIsIlNldHRpbmdzIiwibnVtUGxheWVycyIsInNldE51bVBsYXllcnMiLCJudW1NZWFscyIsInNldE51bU1lYWxzIiwiaGFuZGxlTnVtUGxheWVyc0NoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJwYXJzZUludCIsInRhcmdldCIsImhhbmRsZU51bU1lYWxzQ2hhbmdlIiwiaGFuZGxlU2F2ZSIsImRhdGEiLCJtZWFsQXJyYXkiLCJjb25zb2xlIiwibG9nIiwibmV4dE1lYWwiLCJzdHJNZWFsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwidGl0bGUiLCJzdGFydGEiLCJvbk5leHRDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/game/settings.tsx\n"));

/***/ })

});
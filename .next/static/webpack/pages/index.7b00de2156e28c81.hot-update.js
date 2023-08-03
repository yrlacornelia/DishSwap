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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchUtils */ \"./src/utils/fetchUtils.ts\");\n/* harmony import */ var _reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/Button */ \"./src/components/reusableComponents/Button.tsx\");\n/* harmony import */ var _reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reusableComponents/inputfield */ \"./src/components/reusableComponents/inputfield.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Settings = ()=>{\n    _s();\n    const [numPlayers, setNumPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numMeals, setNumMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleNumPlayersChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumPlayers(value);\n    };\n    // const handleNumPlayersChange = () => {\n    //   setNumPlayers(numPlayers);\n    // };\n    console.log(numPlayers);\n    console.log(numMeals);\n    const handleNumMealsChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumMeals(value);\n    };\n    const handleSave = async ()=>{\n        const data = {\n            numPlayers,\n            numMeals\n        };\n        (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"playerMealData\", data);\n        try {\n            const mealArray = await (0,_utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__.fetchMeals)(numMeals);\n            console.log(mealArray);\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"meals\", mealArray);\n            // mealArray.map =>\n            const nextMeal = mealArray[0];\n            console.log(nextMeal.strMeal);\n            window.location.href = \"/game/test\";\n        } catch (error) {\n            console.error(\"Error fetching results:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                value: numPlayers,\n                min: 1,\n                max: 5,\n                label: \"Number of players (up to 5):\",\n                onChange: handleNumPlayersChange\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                value: numMeals,\n                min: 1,\n                max: 10,\n                label: \"Number of meals (up to 10):\",\n                onChange: handleNumMealsChange\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"starta\",\n                onNextClick: handleSave\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Settings, \"PzJ7MKsXfYqfkfhpG4lOFUYt77c=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNrQztBQUNmO0FBQ0U7QUFDRDtBQUVyRCxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQVM7SUFFakQsTUFBTVUseUJBQXlCLENBQUNDO1FBQzlCLE1BQU1DLFFBQVFDLFNBQVNGLE1BQU1HLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFO1FBQzNDTCxjQUFjSztJQUNoQjtJQUNBLHlDQUF5QztJQUN6QywrQkFBK0I7SUFDL0IsS0FBSztJQUNMRyxRQUFRQyxHQUFHLENBQUNWO0lBQ1pTLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixNQUFNUyx1QkFBdUIsQ0FBQ047UUFDNUIsTUFBTUMsUUFBUUMsU0FBU0YsTUFBTUcsTUFBTSxDQUFDRixLQUFLLEVBQUU7UUFDM0NILFlBQVlHO0lBQ2Q7SUFFQSxNQUFNTSxhQUFhO1FBQ2pCLE1BQU1DLE9BQU87WUFDWGI7WUFDQUU7UUFDRjtRQUVBUCw0RUFBa0JBLENBQUMsa0JBQWtCa0I7UUFDckMsSUFBSTtZQUNGLE1BQU1DLFlBQVksTUFBTWxCLDZEQUFVQSxDQUFDTTtZQUNuQ08sUUFBUUMsR0FBRyxDQUFDSTtZQUNabkIsNEVBQWtCQSxDQUFDLFNBQVNtQjtZQUM1QixtQkFBbUI7WUFDbkIsTUFBTUMsV0FBV0QsU0FBUyxDQUFDLEVBQUU7WUFDN0JMLFFBQVFDLEdBQUcsQ0FBQ0ssU0FBU0MsT0FBTztZQUU1QkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUk7UUFDMUIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RYLFFBQVFXLEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQXFCQyw4REFBQ3ZCLHNFQUFLQTtnQkFBQ1EsT0FBT047Z0JBQVlzQixLQUFLO2dCQUM3QkMsS0FBSztnQkFBR0MsT0FBTTtnQkFBK0JDLFVBQVVyQjs7Ozs7OzBCQUV6RCw4REFBQ04sc0VBQUtBO2dCQUFDUSxPQUFPSjtnQkFBVW9CLEtBQUs7Z0JBQzNCQyxLQUFLO2dCQUFJQyxPQUFNO2dCQUE4QkMsVUFBVWQ7Ozs7OzswQkFDekQsOERBQUNkLGtFQUFVQTtnQkFBQzZCLE9BQU87Z0JBQVVDLGFBQWFmOzs7Ozs7Ozs7Ozs7QUFHaEQ7R0FyRU1iO0tBQUFBO0FBdUVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbWUvc2V0dGluZ3MudHN4P2UwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VVdGlscyc7XG5pbXBvcnQgeyBmZXRjaE1lYWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hVdGlscyc7XG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tICcuLi9yZXVzYWJsZUNvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9yZXVzYWJsZUNvbXBvbmVudHMvaW5wdXRmaWVsZCc7XG5cbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBbbnVtUGxheWVycywgc2V0TnVtUGxheWVyc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbbnVtTWVhbHMsIHNldE51bU1lYWxzXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtUGxheWVyc0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIHNldE51bVBsYXllcnModmFsdWUpO1xuICB9O1xuICAvLyBjb25zdCBoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlID0gKCkgPT4ge1xuICAvLyAgIHNldE51bVBsYXllcnMobnVtUGxheWVycyk7XG4gIC8vIH07XG4gIGNvbnNvbGUubG9nKG51bVBsYXllcnMpXG4gIGNvbnNvbGUubG9nKG51bU1lYWxzKVxuICBjb25zdCBoYW5kbGVOdW1NZWFsc0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIHNldE51bU1lYWxzKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBudW1QbGF5ZXJzLFxuICAgICAgbnVtTWVhbHMsXG4gICAgfTtcblxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncGxheWVyTWVhbERhdGEnLCBkYXRhKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbWVhbEFycmF5ID0gYXdhaXQgZmV0Y2hNZWFscyhudW1NZWFscyk7XG4gICAgICBjb25zb2xlLmxvZyhtZWFsQXJyYXkpXG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ21lYWxzJywgbWVhbEFycmF5KTtcbiAgICAgIC8vIG1lYWxBcnJheS5tYXAgPT5cbiAgICAgIGNvbnN0IG5leHRNZWFsID0gbWVhbEFycmF5WzBdO1xuICAgICAgY29uc29sZS5sb2cobmV4dE1lYWwuc3RyTWVhbClcblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2dhbWUvdGVzdGA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZXN1bHRzOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8bGFiZWw+XG4gICAgICAgIE51bWJlciBvZiBwbGF5ZXJzICh1cCB0byA1KTpcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPXsxfVxuICAgICAgICAgIG1heD17NX1cbiAgICAgICAgICB2YWx1ZT17bnVtUGxheWVyc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtUGxheWVyc0NoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+ICovfVxuICAgICAgey8qIDxsYWJlbD5cbiAgICAgICAgTnVtYmVyIG9mIG1lYWxzICh1cCB0byAxMCk6XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICBtYXg9ezEwfVxuICAgICAgICAgIHZhbHVlPXtudW1NZWFsc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtTWVhbHNDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPiAqL31cbiAgICAgIDxJbnB1dCB2YWx1ZT17bnVtUGxheWVyc30gbWluPXsxfVxuICAgICAgICBtYXg9ezV9IGxhYmVsPSdOdW1iZXIgb2YgcGxheWVycyAodXAgdG8gNSk6JyBvbkNoYW5nZT17aGFuZGxlTnVtUGxheWVyc0NoYW5nZX0gLz5cblxuICAgICAgPElucHV0IHZhbHVlPXtudW1NZWFsc30gbWluPXsxfVxuICAgICAgICBtYXg9ezEwfSBsYWJlbD0nTnVtYmVyIG9mIG1lYWxzICh1cCB0byAxMCk6JyBvbkNoYW5nZT17aGFuZGxlTnVtTWVhbHNDaGFuZ2V9IC8+XG4gICAgICA8TmV4dEJ1dHRvbiB0aXRsZT17XCJzdGFydGFcIn0gb25OZXh0Q2xpY2s9e2hhbmRsZVNhdmV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInNhdmVUb0xvY2FsU3RvcmFnZSIsImZldGNoTWVhbHMiLCJOZXh0QnV0dG9uIiwiSW5wdXQiLCJTZXR0aW5ncyIsIm51bVBsYXllcnMiLCJzZXROdW1QbGF5ZXJzIiwibnVtTWVhbHMiLCJzZXROdW1NZWFscyIsImhhbmRsZU51bVBsYXllcnNDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTnVtTWVhbHNDaGFuZ2UiLCJoYW5kbGVTYXZlIiwiZGF0YSIsIm1lYWxBcnJheSIsIm5leHRNZWFsIiwic3RyTWVhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiZGl2IiwibWluIiwibWF4IiwibGFiZWwiLCJvbkNoYW5nZSIsInRpdGxlIiwib25OZXh0Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/game/settings.tsx\n"));

/***/ })

});
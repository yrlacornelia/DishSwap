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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchUtils */ \"./src/utils/fetchUtils.ts\");\n/* harmony import */ var _reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/Button */ \"./src/components/reusableComponents/Button.tsx\");\n/* harmony import */ var _reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reusableComponents/inputfield */ \"./src/components/reusableComponents/inputfield.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Settings = ()=>{\n    _s();\n    const [numPlayers, setNumPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numMeals, setNumMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [errorMeals, setErrorMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errorPlayers, setErrorPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleNumPlayersChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumPlayers(value);\n    };\n    // const handleNumPlayersChange = () => {\n    //   setNumPlayers(numPlayers);\n    // };\n    console.log(numPlayers);\n    console.log(numMeals);\n    const handleNumMealsChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumMeals(value);\n        if (value < 10) {\n            setError(true);\n        } else {\n            setError(false);\n        }\n    };\n    const handleSave = async ()=>{\n        const data = {\n            numPlayers,\n            numMeals\n        };\n        (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"playerMealData\", data);\n        try {\n            const mealArray = await (0,_utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__.fetchMeals)(numMeals);\n            console.log(mealArray);\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"meals\", mealArray);\n            // mealArray.map =>\n            const nextMeal = mealArray[0];\n            console.log(nextMeal.strMeal);\n            window.location.href = \"/game/test\";\n        } catch (error1) {\n            console.error(\"Error fetching results:\", error1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: numPlayers,\n                        min: 1,\n                        error: error,\n                        errorMessage: \"hello\",\n                        max: 5,\n                        label: \"Number of players (up to 5):\",\n                        onChange: handleNumPlayersChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 32\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: numMeals,\n                        min: 1,\n                        error: error,\n                        errorMessage: \"hello\",\n                        max: 10,\n                        label: \"Number of meals (up to 10):\",\n                        onChange: handleNumMealsChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"START\",\n                onNextClick: handleSave\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Settings, \"KpQBidUKRec4X3LEdA3AyydQfxI=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNrQztBQUNmO0FBQ0U7QUFDRDtBQUVyRCxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1jLHlCQUF5QixDQUFDQztRQUM5QixNQUFNQyxRQUFRQyxTQUFTRixNQUFNRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUMzQ1QsY0FBY1M7SUFDaEI7SUFDQSx5Q0FBeUM7SUFDekMsK0JBQStCO0lBQy9CLEtBQUs7SUFDTEcsUUFBUUMsR0FBRyxDQUFDZDtJQUNaYSxRQUFRQyxHQUFHLENBQUNaO0lBQ1osTUFBTWEsdUJBQXVCLENBQUNOO1FBQzVCLE1BQU1DLFFBQVFDLFNBQVNGLE1BQU1HLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFO1FBQzNDUCxZQUFZTztRQUNaLElBQUdBLFFBQVEsSUFBSTtZQUNiTSxTQUFTO1FBQ1gsT0FDSztZQUNIQSxTQUFTO1FBQ1g7SUFDRjtJQUVBLE1BQU1DLGFBQWE7UUFDakIsTUFBTUMsT0FBTztZQUNYbEI7WUFDQUU7UUFDRjtRQUVBUCw0RUFBa0JBLENBQUMsa0JBQWtCdUI7UUFDckMsSUFBSTtZQUNGLE1BQU1DLFlBQVksTUFBTXZCLDZEQUFVQSxDQUFDTTtZQUNuQ1csUUFBUUMsR0FBRyxDQUFDSztZQUNaeEIsNEVBQWtCQSxDQUFDLFNBQVN3QjtZQUM1QixtQkFBbUI7WUFDbkIsTUFBTUMsV0FBV0QsU0FBUyxDQUFDLEVBQUU7WUFDN0JOLFFBQVFDLEdBQUcsQ0FBQ00sU0FBU0MsT0FBTztZQUU1QkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUk7UUFDMUIsRUFBRSxPQUFPQyxRQUFPO1lBQ2RaLFFBQVFZLEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBcUJiLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQVE7a0NBQUUsOERBQUM3QixzRUFBS0E7d0JBQUNZLE9BQU9WO3dCQUFZNEIsS0FBSzt3QkFDeERILE9BQU9BO3dCQUFPSSxjQUFhO3dCQUN6QkMsS0FBSzt3QkFBR0MsT0FBTTt3QkFBK0JDLFVBQVV4Qjs7Ozs7O2tDQUV2RCw4REFBQ1Ysc0VBQUtBO3dCQUFDWSxPQUFPUjt3QkFBVTBCLEtBQUs7d0JBQ3pCSCxPQUFPQTt3QkFBT0ksY0FBYTt3QkFDN0JDLEtBQUs7d0JBQUlDLE9BQU07d0JBQThCQyxVQUFVakI7Ozs7Ozs7Ozs7OzswQkFFM0QsOERBQUNsQixrRUFBVUE7Z0JBQUNvQyxPQUFPO2dCQUFTQyxhQUFhakI7Ozs7Ozs7Ozs7OztBQUcvQztHQS9FTWxCO0tBQUFBO0FBaUZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbWUvc2V0dGluZ3MudHN4P2UwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VVdGlscyc7XG5pbXBvcnQgeyBmZXRjaE1lYWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hVdGlscyc7XG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tICcuLi9yZXVzYWJsZUNvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9yZXVzYWJsZUNvbXBvbmVudHMvaW5wdXRmaWVsZCc7XG5cbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBbbnVtUGxheWVycywgc2V0TnVtUGxheWVyc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbbnVtTWVhbHMsIHNldE51bU1lYWxzXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtlcnJvck1lYWxzLCBzZXRFcnJvck1lYWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yUGxheWVycywgc2V0RXJyb3JQbGF5ZXJzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlTnVtUGxheWVyc0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIHNldE51bVBsYXllcnModmFsdWUpO1xuICB9O1xuICAvLyBjb25zdCBoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlID0gKCkgPT4ge1xuICAvLyAgIHNldE51bVBsYXllcnMobnVtUGxheWVycyk7XG4gIC8vIH07XG4gIGNvbnNvbGUubG9nKG51bVBsYXllcnMpXG4gIGNvbnNvbGUubG9nKG51bU1lYWxzKVxuICBjb25zdCBoYW5kbGVOdW1NZWFsc0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIHNldE51bU1lYWxzKHZhbHVlKTtcbiAgICBpZih2YWx1ZSA8IDEwKSB7XG4gICAgICBzZXRFcnJvcih0cnVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEVycm9yKGZhbHNlKVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBudW1QbGF5ZXJzLFxuICAgICAgbnVtTWVhbHMsXG4gICAgfTtcblxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncGxheWVyTWVhbERhdGEnLCBkYXRhKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbWVhbEFycmF5ID0gYXdhaXQgZmV0Y2hNZWFscyhudW1NZWFscyk7XG4gICAgICBjb25zb2xlLmxvZyhtZWFsQXJyYXkpXG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ21lYWxzJywgbWVhbEFycmF5KTtcbiAgICAgIC8vIG1lYWxBcnJheS5tYXAgPT5cbiAgICAgIGNvbnN0IG5leHRNZWFsID0gbWVhbEFycmF5WzBdO1xuICAgICAgY29uc29sZS5sb2cobmV4dE1lYWwuc3RyTWVhbClcblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2dhbWUvdGVzdGA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZXN1bHRzOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICB7LyogPGxhYmVsPlxuICAgICAgICBOdW1iZXIgb2YgcGxheWVycyAodXAgdG8gNSk6XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICBtYXg9ezV9XG4gICAgICAgICAgdmFsdWU9e251bVBsYXllcnN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU51bVBsYXllcnNDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPiAqL31cbiAgICAgIHsvKiA8bGFiZWw+XG4gICAgICAgIE51bWJlciBvZiBtZWFscyAodXAgdG8gMTApOlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgbWF4PXsxMH1cbiAgICAgICAgICB2YWx1ZT17bnVtTWVhbHN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU51bU1lYWxzQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMTAnPiAgPElucHV0IHZhbHVlPXtudW1QbGF5ZXJzfSBtaW49ezF9ICBcbiAgICAgIGVycm9yPXtlcnJvcn0gZXJyb3JNZXNzYWdlPSdoZWxsbydcbiAgICAgICAgbWF4PXs1fSBsYWJlbD0nTnVtYmVyIG9mIHBsYXllcnMgKHVwIHRvIDUpOicgb25DaGFuZ2U9e2hhbmRsZU51bVBsYXllcnNDaGFuZ2V9IC8+XG5cbiAgICAgICAgPElucHV0IHZhbHVlPXtudW1NZWFsc30gbWluPXsxfSAgICBcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcn0gZXJyb3JNZXNzYWdlPSdoZWxsbycgIFxuICAgICAgICAgIG1heD17MTB9IGxhYmVsPSdOdW1iZXIgb2YgbWVhbHMgKHVwIHRvIDEwKTonIG9uQ2hhbmdlPXtoYW5kbGVOdW1NZWFsc0NoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE5leHRCdXR0b24gdGl0bGU9e1wiU1RBUlRcIn0gb25OZXh0Q2xpY2s9e2hhbmRsZVNhdmV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInNhdmVUb0xvY2FsU3RvcmFnZSIsImZldGNoTWVhbHMiLCJOZXh0QnV0dG9uIiwiSW5wdXQiLCJTZXR0aW5ncyIsIm51bVBsYXllcnMiLCJzZXROdW1QbGF5ZXJzIiwibnVtTWVhbHMiLCJzZXROdW1NZWFscyIsImVycm9yTWVhbHMiLCJzZXRFcnJvck1lYWxzIiwiZXJyb3JQbGF5ZXJzIiwic2V0RXJyb3JQbGF5ZXJzIiwiaGFuZGxlTnVtUGxheWVyc0NoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJwYXJzZUludCIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVOdW1NZWFsc0NoYW5nZSIsInNldEVycm9yIiwiaGFuZGxlU2F2ZSIsImRhdGEiLCJtZWFsQXJyYXkiLCJuZXh0TWVhbCIsInN0ck1lYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIm1pbiIsImVycm9yTWVzc2FnZSIsIm1heCIsImxhYmVsIiwib25DaGFuZ2UiLCJ0aXRsZSIsIm9uTmV4dENsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/game/settings.tsx\n"));

/***/ })

});
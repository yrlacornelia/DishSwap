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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchUtils */ \"./src/utils/fetchUtils.ts\");\n/* harmony import */ var _reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/Button */ \"./src/components/reusableComponents/Button.tsx\");\n/* harmony import */ var _reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reusableComponents/inputfield */ \"./src/components/reusableComponents/inputfield.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Settings = ()=>{\n    _s();\n    const [numPlayers, setNumPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numMeals, setNumMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [errorText, setErrorText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNumPlayersChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumPlayers(value);\n    };\n    // const handleNumPlayersChange = () => {\n    //   setNumPlayers(numPlayers);\n    // };\n    console.log(numPlayers);\n    console.log(numMeals);\n    const handleNumMealsChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumMeals(value);\n    };\n    const handleSave = async ()=>{\n        const data = {\n            numPlayers,\n            numMeals\n        };\n        (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"playerMealData\", data);\n        try {\n            const mealArray = await (0,_utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__.fetchMeals)(numMeals);\n            console.log(mealArray);\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"meals\", mealArray);\n            // mealArray.map =>\n            const nextMeal = mealArray[0];\n            console.log(nextMeal.strMeal);\n            window.location.href = \"/game/test\";\n        } catch (error1) {\n            console.error(\"Error fetching results:\", error1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: numPlayers,\n                        min: 1,\n                        errorMessage: error,\n                        max: 5,\n                        label: \"Number of players (up to 5):\",\n                        onChange: handleNumPlayersChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 32\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: numMeals,\n                        min: 1,\n                        errorMessage: error,\n                        max: 10,\n                        label: \"Number of meals (up to 10):\",\n                        onChange: handleNumMealsChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"START\",\n                onNextClick: handleSave\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Settings, \"xOZvQWJUr1XIGu3HVZaWbp3L1Co=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNrQztBQUNmO0FBQ0U7QUFDRDtBQUVyRCxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1ZLHlCQUF5QixDQUFDQztRQUM5QixNQUFNQyxRQUFRQyxTQUFTRixNQUFNRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUMzQ1AsY0FBY087SUFDaEI7SUFDQSx5Q0FBeUM7SUFDekMsK0JBQStCO0lBQy9CLEtBQUs7SUFDTEcsUUFBUUMsR0FBRyxDQUFDWjtJQUNaVyxRQUFRQyxHQUFHLENBQUNWO0lBQ1osTUFBTVcsdUJBQXVCLENBQUNOO1FBQzVCLE1BQU1DLFFBQVFDLFNBQVNGLE1BQU1HLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFO1FBQzNDTCxZQUFZSztJQUNkO0lBRUEsTUFBTU0sYUFBYTtRQUNqQixNQUFNQyxPQUFPO1lBQ1hmO1lBQ0FFO1FBQ0Y7UUFFQVAsNEVBQWtCQSxDQUFDLGtCQUFrQm9CO1FBQ3JDLElBQUk7WUFDRixNQUFNQyxZQUFZLE1BQU1wQiw2REFBVUEsQ0FBQ007WUFDbkNTLFFBQVFDLEdBQUcsQ0FBQ0k7WUFDWnJCLDRFQUFrQkEsQ0FBQyxTQUFTcUI7WUFDNUIsbUJBQW1CO1lBQ25CLE1BQU1DLFdBQVdELFNBQVMsQ0FBQyxFQUFFO1lBQzdCTCxRQUFRQyxHQUFHLENBQUNLLFNBQVNDLE9BQU87WUFFNUJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFJO1FBQzFCLEVBQUUsT0FBT0MsUUFBTztZQUNkWCxRQUFRVyxLQUFLLENBQUMsMkJBQTJCQTtRQUMzQztJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQXFCYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUFRO2tDQUFFLDhEQUFDMUIsc0VBQUtBO3dCQUFDVSxPQUFPUjt3QkFBWXlCLEtBQUs7d0JBQVVDLGNBQWNKO3dCQUM5RUssS0FBSzt3QkFBR0MsT0FBTTt3QkFBK0JDLFVBQVV2Qjs7Ozs7O2tDQUV2RCw4REFBQ1Isc0VBQUtBO3dCQUFDVSxPQUFPTjt3QkFBVXVCLEtBQUs7d0JBQVVDLGNBQWNKO3dCQUNuREssS0FBSzt3QkFBSUMsT0FBTTt3QkFBOEJDLFVBQVVoQjs7Ozs7Ozs7Ozs7OzBCQUUzRCw4REFBQ2hCLGtFQUFVQTtnQkFBQ2lDLE9BQU87Z0JBQVNDLGFBQWFqQjs7Ozs7Ozs7Ozs7O0FBRy9DO0dBdEVNZjtLQUFBQTtBQXdFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeD9lMDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvTG9jYWxTdG9yYWdlVXRpbHMnO1xuaW1wb3J0IHsgZmV0Y2hNZWFscyB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoVXRpbHMnO1xuaW1wb3J0IE5leHRCdXR0b24gZnJvbSAnLi4vcmV1c2FibGVDb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vcmV1c2FibGVDb21wb25lbnRzL2lucHV0ZmllbGQnO1xuXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcbiAgY29uc3QgW251bVBsYXllcnMsIHNldE51bVBsYXllcnNdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgY29uc3QgW251bU1lYWxzLCBzZXROdW1NZWFsc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbZXJyb3JUZXh0LCBzZXRFcnJvclRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgc2V0TnVtUGxheWVycyh2YWx1ZSk7XG4gIH07XG4gIC8vIGNvbnN0IGhhbmRsZU51bVBsYXllcnNDaGFuZ2UgPSAoKSA9PiB7XG4gIC8vICAgc2V0TnVtUGxheWVycyhudW1QbGF5ZXJzKTtcbiAgLy8gfTtcbiAgY29uc29sZS5sb2cobnVtUGxheWVycylcbiAgY29uc29sZS5sb2cobnVtTWVhbHMpXG4gIGNvbnN0IGhhbmRsZU51bU1lYWxzQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgc2V0TnVtTWVhbHModmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG51bVBsYXllcnMsXG4gICAgICBudW1NZWFscyxcbiAgICB9O1xuXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwbGF5ZXJNZWFsRGF0YScsIGRhdGEpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtZWFsQXJyYXkgPSBhd2FpdCBmZXRjaE1lYWxzKG51bU1lYWxzKTtcbiAgICAgIGNvbnNvbGUubG9nKG1lYWxBcnJheSlcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgnbWVhbHMnLCBtZWFsQXJyYXkpO1xuICAgICAgLy8gbWVhbEFycmF5Lm1hcCA9PlxuICAgICAgY29uc3QgbmV4dE1lYWwgPSBtZWFsQXJyYXlbMF07XG4gICAgICBjb25zb2xlLmxvZyhuZXh0TWVhbC5zdHJNZWFsKVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZ2FtZS90ZXN0YDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJlc3VsdHM6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgIHsvKiA8bGFiZWw+XG4gICAgICAgIE51bWJlciBvZiBwbGF5ZXJzICh1cCB0byA1KTpcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPXsxfVxuICAgICAgICAgIG1heD17NX1cbiAgICAgICAgICB2YWx1ZT17bnVtUGxheWVyc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtUGxheWVyc0NoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+ICovfVxuICAgICAgey8qIDxsYWJlbD5cbiAgICAgICAgTnVtYmVyIG9mIG1lYWxzICh1cCB0byAxMCk6XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICBtYXg9ezEwfVxuICAgICAgICAgIHZhbHVlPXtudW1NZWFsc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtTWVhbHNDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xMCc+ICA8SW5wdXQgdmFsdWU9e251bVBsYXllcnN9IG1pbj17MX0gICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3J9XG4gICAgICAgIG1heD17NX0gbGFiZWw9J051bWJlciBvZiBwbGF5ZXJzICh1cCB0byA1KTonIG9uQ2hhbmdlPXtoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlfSAvPlxuXG4gICAgICAgIDxJbnB1dCB2YWx1ZT17bnVtTWVhbHN9IG1pbj17MX0gICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3J9XG4gICAgICAgICAgbWF4PXsxMH0gbGFiZWw9J051bWJlciBvZiBtZWFscyAodXAgdG8gMTApOicgb25DaGFuZ2U9e2hhbmRsZU51bU1lYWxzQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TmV4dEJ1dHRvbiB0aXRsZT17XCJTVEFSVFwifSBvbk5leHRDbGljaz17aGFuZGxlU2F2ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwiZmV0Y2hNZWFscyIsIk5leHRCdXR0b24iLCJJbnB1dCIsIlNldHRpbmdzIiwibnVtUGxheWVycyIsInNldE51bVBsYXllcnMiLCJudW1NZWFscyIsInNldE51bU1lYWxzIiwiZXJyb3JUZXh0Iiwic2V0RXJyb3JUZXh0IiwiaGFuZGxlTnVtUGxheWVyc0NoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJwYXJzZUludCIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVOdW1NZWFsc0NoYW5nZSIsImhhbmRsZVNhdmUiLCJkYXRhIiwibWVhbEFycmF5IiwibmV4dE1lYWwiLCJzdHJNZWFsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtaW4iLCJlcnJvck1lc3NhZ2UiLCJtYXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidGl0bGUiLCJvbk5leHRDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/game/settings.tsx\n"));

/***/ })

});
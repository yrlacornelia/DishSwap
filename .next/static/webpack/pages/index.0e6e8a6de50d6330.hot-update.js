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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchUtils */ \"./src/utils/fetchUtils.ts\");\n/* harmony import */ var _reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/Button */ \"./src/components/reusableComponents/Button.tsx\");\n/* harmony import */ var _reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reusableComponents/inputfield */ \"./src/components/reusableComponents/inputfield.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Settings = ()=>{\n    _s();\n    const [numPlayers, setNumPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numMeals, setNumMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleNumPlayersChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumPlayers(value);\n    };\n    // const handleNumPlayersChange = () => {\n    //   setNumPlayers(numPlayers);\n    // };\n    console.log(numPlayers);\n    console.log(numMeals);\n    const handleNumMealsChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumMeals(value);\n    };\n    const handleSave = async ()=>{\n        const data = {\n            numPlayers,\n            numMeals\n        };\n        (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"playerMealData\", data);\n        try {\n            const mealArray = await (0,_utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__.fetchMeals)(numMeals);\n            console.log(mealArray);\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"meals\", mealArray);\n            // mealArray.map =>\n            const nextMeal = mealArray[0];\n            console.log(nextMeal.strMeal);\n            window.location.href = \"/game/test\";\n        } catch (error) {\n            console.error(\"Error fetching results:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: numPlayers,\n                        min: 1,\n                        error: true,\n                        errorMessage: \"hello\",\n                        max: 5,\n                        label: \"Number of players (up to 5):\",\n                        onChange: handleNumPlayersChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 32\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: numMeals,\n                        min: 1,\n                        error: true,\n                        errorMessage: \"hello\",\n                        max: 10,\n                        label: \"Number of meals (up to 10):\",\n                        onChange: handleNumMealsChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"START\",\n                onNextClick: handleSave\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Settings, \"ttaCqxi/R81HJuhDabT251LKjpw=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNrQztBQUNmO0FBQ0U7QUFDRDtBQUVyRCxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQTtJQUNsQyxNQUFNWSx5QkFBeUIsQ0FBQ0M7UUFDOUIsTUFBTUMsUUFBUUMsU0FBU0YsTUFBTUcsTUFBTSxDQUFDRixLQUFLLEVBQUU7UUFDM0NQLGNBQWNPO0lBQ2hCO0lBQ0EseUNBQXlDO0lBQ3pDLCtCQUErQjtJQUMvQixLQUFLO0lBQ0xHLFFBQVFDLEdBQUcsQ0FBQ1o7SUFDWlcsUUFBUUMsR0FBRyxDQUFDVjtJQUNaLE1BQU1XLHVCQUF1QixDQUFDTjtRQUM1QixNQUFNQyxRQUFRQyxTQUFTRixNQUFNRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUMzQ0wsWUFBWUs7SUFDZDtJQUVBLE1BQU1NLGFBQWE7UUFDakIsTUFBTUMsT0FBTztZQUNYZjtZQUNBRTtRQUNGO1FBRUFQLDRFQUFrQkEsQ0FBQyxrQkFBa0JvQjtRQUNyQyxJQUFJO1lBQ0YsTUFBTUMsWUFBWSxNQUFNcEIsNkRBQVVBLENBQUNNO1lBQ25DUyxRQUFRQyxHQUFHLENBQUNJO1lBQ1pyQiw0RUFBa0JBLENBQUMsU0FBU3FCO1lBQzVCLG1CQUFtQjtZQUNuQixNQUFNQyxXQUFXRCxTQUFTLENBQUMsRUFBRTtZQUM3QkwsUUFBUUMsR0FBRyxDQUFDSyxTQUFTQyxPQUFPO1lBRTVCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBSTtRQUMxQixFQUFFLE9BQU9qQixPQUFPO1lBQ2RPLFFBQVFQLEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7OzBCQXFCYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUFRO2tDQUFFLDhEQUFDekIsc0VBQUtBO3dCQUFDVSxPQUFPUjt3QkFBWXdCLEtBQUs7d0JBQ3hEcEIsT0FBTzt3QkFBTXFCLGNBQWE7d0JBQ3hCQyxLQUFLO3dCQUFHQyxPQUFNO3dCQUErQkMsVUFBVXRCOzs7Ozs7a0NBRXZELDhEQUFDUixzRUFBS0E7d0JBQUNVLE9BQU9OO3dCQUFVc0IsS0FBSzt3QkFDekJwQixPQUFPO3dCQUFNcUIsY0FBYTt3QkFDNUJDLEtBQUs7d0JBQUlDLE9BQU07d0JBQThCQyxVQUFVZjs7Ozs7Ozs7Ozs7OzBCQUUzRCw4REFBQ2hCLGtFQUFVQTtnQkFBQ2dDLE9BQU87Z0JBQVNDLGFBQWFoQjs7Ozs7Ozs7Ozs7O0FBRy9DO0dBeEVNZjtLQUFBQTtBQTBFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeD9lMDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvTG9jYWxTdG9yYWdlVXRpbHMnO1xuaW1wb3J0IHsgZmV0Y2hNZWFscyB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoVXRpbHMnO1xuaW1wb3J0IE5leHRCdXR0b24gZnJvbSAnLi4vcmV1c2FibGVDb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vcmV1c2FibGVDb21wb25lbnRzL2lucHV0ZmllbGQnO1xuXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcbiAgY29uc3QgW251bVBsYXllcnMsIHNldE51bVBsYXllcnNdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgY29uc3QgW251bU1lYWxzLCBzZXROdW1NZWFsc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGhhbmRsZU51bVBsYXllcnNDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBzZXROdW1QbGF5ZXJzKHZhbHVlKTtcbiAgfTtcbiAgLy8gY29uc3QgaGFuZGxlTnVtUGxheWVyc0NoYW5nZSA9ICgpID0+IHtcbiAgLy8gICBzZXROdW1QbGF5ZXJzKG51bVBsYXllcnMpO1xuICAvLyB9O1xuICBjb25zb2xlLmxvZyhudW1QbGF5ZXJzKVxuICBjb25zb2xlLmxvZyhudW1NZWFscylcbiAgY29uc3QgaGFuZGxlTnVtTWVhbHNDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBzZXROdW1NZWFscyh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbnVtUGxheWVycyxcbiAgICAgIG51bU1lYWxzLFxuICAgIH07XG5cbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3BsYXllck1lYWxEYXRhJywgZGF0YSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1lYWxBcnJheSA9IGF3YWl0IGZldGNoTWVhbHMobnVtTWVhbHMpO1xuICAgICAgY29uc29sZS5sb2cobWVhbEFycmF5KVxuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdtZWFscycsIG1lYWxBcnJheSk7XG4gICAgICAvLyBtZWFsQXJyYXkubWFwID0+XG4gICAgICBjb25zdCBuZXh0TWVhbCA9IG1lYWxBcnJheVswXTtcbiAgICAgIGNvbnNvbGUubG9nKG5leHRNZWFsLnN0ck1lYWwpXG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9nYW1lL3Rlc3RgO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcmVzdWx0czpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwnPlxuICAgICAgey8qIDxsYWJlbD5cbiAgICAgICAgTnVtYmVyIG9mIHBsYXllcnMgKHVwIHRvIDUpOlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgbWF4PXs1fVxuICAgICAgICAgIHZhbHVlPXtudW1QbGF5ZXJzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD4gKi99XG4gICAgICB7LyogPGxhYmVsPlxuICAgICAgICBOdW1iZXIgb2YgbWVhbHMgKHVwIHRvIDEwKTpcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPXsxfVxuICAgICAgICAgIG1heD17MTB9XG4gICAgICAgICAgdmFsdWU9e251bU1lYWxzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1NZWFsc0NoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwJz4gIDxJbnB1dCB2YWx1ZT17bnVtUGxheWVyc30gbWluPXsxfSAgXG4gICAgICBlcnJvcj17dHJ1ZX0gZXJyb3JNZXNzYWdlPSdoZWxsbydcbiAgICAgICAgbWF4PXs1fSBsYWJlbD0nTnVtYmVyIG9mIHBsYXllcnMgKHVwIHRvIDUpOicgb25DaGFuZ2U9e2hhbmRsZU51bVBsYXllcnNDaGFuZ2V9IC8+XG5cbiAgICAgICAgPElucHV0IHZhbHVlPXtudW1NZWFsc30gbWluPXsxfSAgICBcbiAgICAgICAgICAgIGVycm9yPXt0cnVlfSBlcnJvck1lc3NhZ2U9J2hlbGxvJyAgXG4gICAgICAgICAgbWF4PXsxMH0gbGFiZWw9J051bWJlciBvZiBtZWFscyAodXAgdG8gMTApOicgb25DaGFuZ2U9e2hhbmRsZU51bU1lYWxzQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TmV4dEJ1dHRvbiB0aXRsZT17XCJTVEFSVFwifSBvbk5leHRDbGljaz17aGFuZGxlU2F2ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwiZmV0Y2hNZWFscyIsIk5leHRCdXR0b24iLCJJbnB1dCIsIlNldHRpbmdzIiwibnVtUGxheWVycyIsInNldE51bVBsYXllcnMiLCJudW1NZWFscyIsInNldE51bU1lYWxzIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZU51bVBsYXllcnNDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTnVtTWVhbHNDaGFuZ2UiLCJoYW5kbGVTYXZlIiwiZGF0YSIsIm1lYWxBcnJheSIsIm5leHRNZWFsIiwic3RyTWVhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsIm1pbiIsImVycm9yTWVzc2FnZSIsIm1heCIsImxhYmVsIiwib25DaGFuZ2UiLCJ0aXRsZSIsIm9uTmV4dENsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/game/settings.tsx\n"));

/***/ })

});
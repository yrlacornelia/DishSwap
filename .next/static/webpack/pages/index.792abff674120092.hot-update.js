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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchUtils */ \"./src/utils/fetchUtils.ts\");\n/* harmony import */ var _reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/Button */ \"./src/components/reusableComponents/Button.tsx\");\n/* harmony import */ var _reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reusableComponents/inputfield */ \"./src/components/reusableComponents/inputfield.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Settings = ()=>{\n    _s();\n    const [numPlayers, setNumPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numMeals, setNumMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleNumPlayersChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumPlayers(value);\n    };\n    // const handleNumPlayersChange = () => {\n    //   setNumPlayers(numPlayers);\n    // };\n    console.log(numPlayers);\n    console.log(numMeals);\n    const handleNumMealsChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumMeals(value);\n    };\n    const handleSave = async ()=>{\n        const data = {\n            numPlayers,\n            numMeals\n        };\n        (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"playerMealData\", data);\n        try {\n            const mealArray = await (0,_utils_fetchUtils__WEBPACK_IMPORTED_MODULE_3__.fetchMeals)(numMeals);\n            console.log(mealArray);\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"meals\", mealArray);\n            // mealArray.map =>\n            const nextMeal = mealArray[0];\n            console.log(nextMeal.strMeal);\n            window.location.href = \"/game/test\";\n        } catch (error) {\n            console.error(\"Error fetching results:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: numPlayers,\n                        min: 1,\n                        max: 5,\n                        label: \"Number of players (up to 5):\",\n                        onChange: handleNumPlayersChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 32\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_inputfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: numMeals,\n                        min: 1,\n                        max: 10,\n                        label: \"Number of meals (up to 10):\",\n                        onChange: handleNumMealsChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"START\",\n                onNextClick: handleSave\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Settings, \"PzJ7MKsXfYqfkfhpG4lOFUYt77c=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNrQztBQUNmO0FBQ0U7QUFDRDtBQUVyRCxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQVM7SUFFakQsTUFBTVUseUJBQXlCLENBQUNDO1FBQzlCLE1BQU1DLFFBQVFDLFNBQVNGLE1BQU1HLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFO1FBQzNDTCxjQUFjSztJQUNoQjtJQUNBLHlDQUF5QztJQUN6QywrQkFBK0I7SUFDL0IsS0FBSztJQUNMRyxRQUFRQyxHQUFHLENBQUNWO0lBQ1pTLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixNQUFNUyx1QkFBdUIsQ0FBQ047UUFDNUIsTUFBTUMsUUFBUUMsU0FBU0YsTUFBTUcsTUFBTSxDQUFDRixLQUFLLEVBQUU7UUFDM0NILFlBQVlHO0lBQ2Q7SUFFQSxNQUFNTSxhQUFhO1FBQ2pCLE1BQU1DLE9BQU87WUFDWGI7WUFDQUU7UUFDRjtRQUVBUCw0RUFBa0JBLENBQUMsa0JBQWtCa0I7UUFDckMsSUFBSTtZQUNGLE1BQU1DLFlBQVksTUFBTWxCLDZEQUFVQSxDQUFDTTtZQUNuQ08sUUFBUUMsR0FBRyxDQUFDSTtZQUNabkIsNEVBQWtCQSxDQUFDLFNBQVNtQjtZQUM1QixtQkFBbUI7WUFDbkIsTUFBTUMsV0FBV0QsU0FBUyxDQUFDLEVBQUU7WUFDN0JMLFFBQVFDLEdBQUcsQ0FBQ0ssU0FBU0MsT0FBTztZQUU1QkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUk7UUFDMUIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RYLFFBQVFXLEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBcUJiLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQVE7a0NBQUUsOERBQUN4QixzRUFBS0E7d0JBQUNRLE9BQU9OO3dCQUFZdUIsS0FBSzt3QkFDdERDLEtBQUs7d0JBQUdDLE9BQU07d0JBQStCQyxVQUFVdEI7Ozs7OztrQ0FFdkQsOERBQUNOLHNFQUFLQTt3QkFBQ1EsT0FBT0o7d0JBQVVxQixLQUFLO3dCQUMzQkMsS0FBSzt3QkFBSUMsT0FBTTt3QkFBOEJDLFVBQVVmOzs7Ozs7Ozs7Ozs7MEJBRTNELDhEQUFDZCxrRUFBVUE7Z0JBQUM4QixPQUFPO2dCQUFTQyxhQUFhaEI7Ozs7Ozs7Ozs7OztBQUcvQztHQXRFTWI7S0FBQUE7QUF3RU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9zZXR0aW5ncy50c3g/ZTA1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL0xvY2FsU3RvcmFnZVV0aWxzJztcbmltcG9ydCB7IGZldGNoTWVhbHMgfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaFV0aWxzJztcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gJy4uL3JldXNhYmxlQ29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dGZpZWxkJztcblxuY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IFtudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtudW1NZWFscywgc2V0TnVtTWVhbHNdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgc2V0TnVtUGxheWVycyh2YWx1ZSk7XG4gIH07XG4gIC8vIGNvbnN0IGhhbmRsZU51bVBsYXllcnNDaGFuZ2UgPSAoKSA9PiB7XG4gIC8vICAgc2V0TnVtUGxheWVycyhudW1QbGF5ZXJzKTtcbiAgLy8gfTtcbiAgY29uc29sZS5sb2cobnVtUGxheWVycylcbiAgY29uc29sZS5sb2cobnVtTWVhbHMpXG4gIGNvbnN0IGhhbmRsZU51bU1lYWxzQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgc2V0TnVtTWVhbHModmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG51bVBsYXllcnMsXG4gICAgICBudW1NZWFscyxcbiAgICB9O1xuXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwbGF5ZXJNZWFsRGF0YScsIGRhdGEpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtZWFsQXJyYXkgPSBhd2FpdCBmZXRjaE1lYWxzKG51bU1lYWxzKTtcbiAgICAgIGNvbnNvbGUubG9nKG1lYWxBcnJheSlcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgnbWVhbHMnLCBtZWFsQXJyYXkpO1xuICAgICAgLy8gbWVhbEFycmF5Lm1hcCA9PlxuICAgICAgY29uc3QgbmV4dE1lYWwgPSBtZWFsQXJyYXlbMF07XG4gICAgICBjb25zb2xlLmxvZyhuZXh0TWVhbC5zdHJNZWFsKVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZ2FtZS90ZXN0YDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJlc3VsdHM6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgIHsvKiA8bGFiZWw+XG4gICAgICAgIE51bWJlciBvZiBwbGF5ZXJzICh1cCB0byA1KTpcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPXsxfVxuICAgICAgICAgIG1heD17NX1cbiAgICAgICAgICB2YWx1ZT17bnVtUGxheWVyc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtUGxheWVyc0NoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+ICovfVxuICAgICAgey8qIDxsYWJlbD5cbiAgICAgICAgTnVtYmVyIG9mIG1lYWxzICh1cCB0byAxMCk6XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICBtYXg9ezEwfVxuICAgICAgICAgIHZhbHVlPXtudW1NZWFsc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtTWVhbHNDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xMCc+ICA8SW5wdXQgdmFsdWU9e251bVBsYXllcnN9IG1pbj17MX1cbiAgICAgICAgbWF4PXs1fSBsYWJlbD0nTnVtYmVyIG9mIHBsYXllcnMgKHVwIHRvIDUpOicgb25DaGFuZ2U9e2hhbmRsZU51bVBsYXllcnNDaGFuZ2V9IC8+XG5cbiAgICAgICAgPElucHV0IHZhbHVlPXtudW1NZWFsc30gbWluPXsxfVxuICAgICAgICAgIG1heD17MTB9IGxhYmVsPSdOdW1iZXIgb2YgbWVhbHMgKHVwIHRvIDEwKTonIG9uQ2hhbmdlPXtoYW5kbGVOdW1NZWFsc0NoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE5leHRCdXR0b24gdGl0bGU9e1wiU1RBUlRcIn0gb25OZXh0Q2xpY2s9e2hhbmRsZVNhdmV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInNhdmVUb0xvY2FsU3RvcmFnZSIsImZldGNoTWVhbHMiLCJOZXh0QnV0dG9uIiwiSW5wdXQiLCJTZXR0aW5ncyIsIm51bVBsYXllcnMiLCJzZXROdW1QbGF5ZXJzIiwibnVtTWVhbHMiLCJzZXROdW1NZWFscyIsImhhbmRsZU51bVBsYXllcnNDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTnVtTWVhbHNDaGFuZ2UiLCJoYW5kbGVTYXZlIiwiZGF0YSIsIm1lYWxBcnJheSIsIm5leHRNZWFsIiwic3RyTWVhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibWluIiwibWF4IiwibGFiZWwiLCJvbkNoYW5nZSIsInRpdGxlIiwib25OZXh0Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/game/settings.tsx\n"));

/***/ })

});
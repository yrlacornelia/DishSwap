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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/data */ \"./src/lib/data.ts\");\n/* harmony import */ var _utils_fetchUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetchUtils */ \"./src/utils/fetchUtils.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Settings = ()=>{\n    _s();\n    const [numPlayers, setNumPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numMeals, setNumMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleNumPlayersChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumPlayers(value);\n    };\n    const handleNumMealsChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setNumMeals(value);\n    };\n    const handleSave = async ()=>{\n        const data = {\n            numPlayers,\n            numMeals\n        };\n        (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"playerMealData\", data);\n        try {\n            const mealArray = await (0,_utils_fetchUtils__WEBPACK_IMPORTED_MODULE_4__.fetchMeals)(numMeals);\n            const randomMealNames = getRandomMealNames(_lib_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"], numMeals);\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"test\", randomMealNames);\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"meals\", mealArray);\n            const nextMeal = randomMealNames[0];\n        // window.location.href = `/game/${nextMeal}`;\n        } catch (error) {\n            console.error(\"Error fetching results:\", error);\n        }\n    };\n    // Function to get random MealName values\n    function getRandomMealNames(meals, count) {\n        const randomMealNames = [];\n        // Generate unique random indexes\n        const indexes = [];\n        while(indexes.length < count){\n            const randomIndex = Math.floor(Math.random() * meals.length);\n            if (!indexes.includes(randomIndex)) {\n                indexes.push(randomIndex);\n            }\n        }\n        // Get the MealName values at the random indexes\n        for (const index of indexes){\n            randomMealNames.push(meals[index].MealName);\n        }\n        return randomMealNames;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Number of players (up to 5):\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        min: 1,\n                        max: 5,\n                        value: numPlayers,\n                        onChange: handleNumPlayersChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Number of meals (up to 10):\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        min: 1,\n                        max: 10,\n                        value: numMeals,\n                        onChange: handleNumMealsChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"starta\"\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/components/game/settings.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Settings, \"PzJ7MKsXfYqfkfhpG4lOFUYt77c=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ2tDO0FBQ3RCO0FBQ087QUFFcEQsTUFBTUksV0FBVzs7SUFDZixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFTO0lBRWpELE1BQU1TLHlCQUF5QixDQUFDQztRQUM5QixNQUFNQyxRQUFRQyxTQUFTRixNQUFNRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUMzQ0wsY0FBY0s7SUFDaEI7SUFFQSxNQUFNRyx1QkFBdUIsQ0FBQ0o7UUFDNUIsTUFBTUMsUUFBUUMsU0FBU0YsTUFBTUcsTUFBTSxDQUFDRixLQUFLLEVBQUU7UUFDM0NILFlBQVlHO0lBQ2Q7SUFFQSxNQUFNSSxhQUFhO1FBQ2pCLE1BQU1DLE9BQU87WUFDWFg7WUFDQUU7UUFDRjtRQUVBTiw0RUFBa0JBLENBQUMsa0JBQWtCZTtRQUVyQyxJQUFJO1lBQ0YsTUFBTUMsWUFBWSxNQUFNZCw2REFBVUEsQ0FBQ0k7WUFDbkMsTUFBTVcsa0JBQWtCQyxtQkFBbUJqQixpREFBS0EsRUFBRUs7WUFDbEROLDRFQUFrQkEsQ0FBQyxRQUFRaUI7WUFDM0JqQiw0RUFBa0JBLENBQUMsU0FBU2dCO1lBRTVCLE1BQU1HLFdBQVdGLGVBQWUsQ0FBQyxFQUFFO1FBQ25DLDhDQUE4QztRQUNoRCxFQUFFLE9BQU9HLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDM0M7SUFDRjtJQUVBLHlDQUF5QztJQUN6QyxTQUFTRixtQkFBbUJqQixLQUFhLEVBQUVxQixLQUFhO1FBQ3RELE1BQU1MLGtCQUFrQixFQUFFO1FBRTFCLGlDQUFpQztRQUNqQyxNQUFNTSxVQUFVLEVBQUU7UUFDbEIsTUFBT0EsUUFBUUMsTUFBTSxHQUFHRixNQUFPO1lBQzdCLE1BQU1HLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLM0IsTUFBTXVCLE1BQU07WUFDM0QsSUFBSSxDQUFDRCxRQUFRTSxRQUFRLENBQUNKLGNBQWM7Z0JBQ2xDRixRQUFRTyxJQUFJLENBQUNMO1lBQ2Y7UUFDRjtRQUVBLGdEQUFnRDtRQUNoRCxLQUFLLE1BQU1NLFNBQVNSLFFBQVM7WUFDM0JOLGdCQUFnQmEsSUFBSSxDQUFDN0IsS0FBSyxDQUFDOEIsTUFBTSxDQUFDQyxRQUFRO1FBQzVDO1FBRUEsT0FBT2Y7SUFDVDtJQUVBLHFCQUNFLDhEQUFDZ0I7OzBCQUNDLDhEQUFDQzs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxLQUFLO3dCQUNMQyxLQUFLO3dCQUNMNUIsT0FBT047d0JBQ1BtQyxVQUFVL0I7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQzBCOztvQkFBTTtrQ0FFTCw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLEtBQUs7d0JBQ0xDLEtBQUs7d0JBQ0w1QixPQUFPSjt3QkFDUGlDLFVBQVUxQjs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDMkI7Z0JBQU9DLFNBQVMzQjswQkFBWTs7Ozs7Ozs7Ozs7O0FBR25DO0dBakZNWDtLQUFBQTtBQW1GTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nYW1lL3NldHRpbmdzLnRzeD9lMDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvTG9jYWxTdG9yYWdlVXRpbHMnO1xuaW1wb3J0IG1lYWxzLCB7IE1lYWwgfSBmcm9tICcuLi8uLi9saWIvZGF0YSc7XG5pbXBvcnQgeyBmZXRjaE1lYWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hVdGlscyc7XG5cbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBbbnVtUGxheWVycywgc2V0TnVtUGxheWVyc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbbnVtTWVhbHMsIHNldE51bU1lYWxzXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtUGxheWVyc0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIHNldE51bVBsYXllcnModmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU51bU1lYWxzQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgc2V0TnVtTWVhbHModmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG51bVBsYXllcnMsXG4gICAgICBudW1NZWFscyxcbiAgICB9O1xuXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwbGF5ZXJNZWFsRGF0YScsIGRhdGEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1lYWxBcnJheSA9IGF3YWl0IGZldGNoTWVhbHMobnVtTWVhbHMpO1xuICAgICAgY29uc3QgcmFuZG9tTWVhbE5hbWVzID0gZ2V0UmFuZG9tTWVhbE5hbWVzKG1lYWxzLCBudW1NZWFscyk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Rlc3QnLCByYW5kb21NZWFsTmFtZXMpO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdtZWFscycsIG1lYWxBcnJheSk7XG5cbiAgICAgIGNvbnN0IG5leHRNZWFsID0gcmFuZG9tTWVhbE5hbWVzWzBdO1xuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2dhbWUvJHtuZXh0TWVhbH1gO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcmVzdWx0czpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBnZXQgcmFuZG9tIE1lYWxOYW1lIHZhbHVlc1xuICBmdW5jdGlvbiBnZXRSYW5kb21NZWFsTmFtZXMobWVhbHM6IE1lYWxbXSwgY291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJhbmRvbU1lYWxOYW1lcyA9IFtdO1xuICBcbiAgICAvLyBHZW5lcmF0ZSB1bmlxdWUgcmFuZG9tIGluZGV4ZXNcbiAgICBjb25zdCBpbmRleGVzID0gW107XG4gICAgd2hpbGUgKGluZGV4ZXMubGVuZ3RoIDwgY291bnQpIHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWVhbHMubGVuZ3RoKTtcbiAgICAgIGlmICghaW5kZXhlcy5pbmNsdWRlcyhyYW5kb21JbmRleCkpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIEdldCB0aGUgTWVhbE5hbWUgdmFsdWVzIGF0IHRoZSByYW5kb20gaW5kZXhlc1xuICAgIGZvciAoY29uc3QgaW5kZXggb2YgaW5kZXhlcykge1xuICAgICAgcmFuZG9tTWVhbE5hbWVzLnB1c2gobWVhbHNbaW5kZXhdLk1lYWxOYW1lKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiByYW5kb21NZWFsTmFtZXM7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIE51bWJlciBvZiBwbGF5ZXJzICh1cCB0byA1KTpcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPXsxfVxuICAgICAgICAgIG1heD17NX1cbiAgICAgICAgICB2YWx1ZT17bnVtUGxheWVyc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtUGxheWVyc0NoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIE51bWJlciBvZiBtZWFscyAodXAgdG8gMTApOlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgbWF4PXsxMH1cbiAgICAgICAgICB2YWx1ZT17bnVtTWVhbHN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU51bU1lYWxzQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0+c3RhcnRhPC9idXR0b24+ICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwibWVhbHMiLCJmZXRjaE1lYWxzIiwiU2V0dGluZ3MiLCJudW1QbGF5ZXJzIiwic2V0TnVtUGxheWVycyIsIm51bU1lYWxzIiwic2V0TnVtTWVhbHMiLCJoYW5kbGVOdW1QbGF5ZXJzQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiaGFuZGxlTnVtTWVhbHNDaGFuZ2UiLCJoYW5kbGVTYXZlIiwiZGF0YSIsIm1lYWxBcnJheSIsInJhbmRvbU1lYWxOYW1lcyIsImdldFJhbmRvbU1lYWxOYW1lcyIsIm5leHRNZWFsIiwiZXJyb3IiLCJjb25zb2xlIiwiY291bnQiLCJpbmRleGVzIiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbmNsdWRlcyIsInB1c2giLCJpbmRleCIsIk1lYWxOYW1lIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJtaW4iLCJtYXgiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/game/settings.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchMeals: function() { return /* binding */ fetchMeals; },\n/* harmony export */   fetchVegoMeals: function() { return /* binding */ fetchVegoMeals; },\n/* harmony export */   getProductData: function() { return /* binding */ getProductData; },\n/* harmony export */   getProductIds: function() { return /* binding */ getProductIds; }\n/* harmony export */ });\n/* harmony import */ var _pages_game_endGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/game/endGame */ \"./src/pages/game/endGame.tsx\");\n\nconst fetchMeals = async (numMeals)=>{\n    try {\n        const fetchedMeals = [];\n        for(let i = 0; i < numMeals; i++){\n            const response = await fetch(\"https://www.themealdb.com/api/json/v1/1/random.php\");\n            const data = await response.json();\n            fetchedMeals.push(data.meals[0]);\n        }\n        return fetchedMeals;\n    } catch (error) {\n        throw new Error(\"Failed to fetch meals\");\n    }\n};\nconst fetchVegoMeals = async (numMeals)=>{\n    try {\n        const fetchedMeals = [];\n        const response = await fetch(\"https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian\");\n        const data = await response.json();\n        const meals = data.meals;\n        console.log(meals.length);\n        fetchedMeals.push(data.meals);\n        // for (let i = 0; i < numMeals; i++) {\n        const hi = Math.floor(Math.random() * meals.length);\n        console.log(hi);\n        for(let i = 0; i < numMeals; i++){\n            const element = array[i];\n        }\n        // }\n        return fetchedMeals;\n    } catch (error) {\n        throw new Error(\"Failed to fetch meals\");\n    }\n};\nasync function getProductIds(id) {\n    const number = (0,_pages_game_endGame__WEBPACK_IMPORTED_MODULE_0__.getId)(id);\n    return number;\n}\nasync function getProductData(productId) {\n    console.log(productId);\n    try {\n        // Make an API request to get the product data based on the \"productId\"\n        const response = await fetch(\"https://www.themealdb.com/api/json/v1/1/lookup.php?i=\".concat(productId));\n        const data = await response.json();\n        return data.meals[0];\n    } catch (error) {\n        console.error(\"Error fetching product data for productId \".concat(productId, \":\"), error);\n        return null;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZmV0Y2hVdGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUV2QyxNQUFNQyxhQUFhLE9BQU9DO0lBQzdCLElBQUk7UUFDRixNQUFNQyxlQUFlLEVBQUU7UUFDdkIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLFVBQVVFLElBQUs7WUFDakMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsYUFBYU0sSUFBSSxDQUFDRixLQUFLRyxLQUFLLENBQUMsRUFBRTtRQUVqQztRQUNBLE9BQU9QO0lBQ1QsRUFBRSxPQUFPUSxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0YsRUFBRTtBQUNLLE1BQU1DLGlCQUFpQixPQUFPWDtJQUNuQyxJQUFJO1FBQ0YsTUFBTUMsZUFBZSxFQUFFO1FBRXJCLE1BQU1FLFdBQVcsTUFBTUMsTUFBTTtRQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFDaEMsTUFBTUUsUUFBUUgsS0FBS0csS0FBSztRQUN4QkksUUFBUUMsR0FBRyxDQUFDTCxNQUFNTSxNQUFNO1FBQ3hCYixhQUFhTSxJQUFJLENBQUNGLEtBQUtHLEtBQUs7UUFDL0IsdUNBQXVDO1FBQ3ZDLE1BQU1PLEtBQU1DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLVixNQUFNTSxNQUFNO1FBQ25ERixRQUFRQyxHQUFHLENBQUNFO1FBQ1osSUFBSyxJQUFJYixJQUFJLEdBQUdBLElBQUlGLFVBQVVFLElBQUs7WUFDbEMsTUFBTWlCLFVBQVVDLEtBQUssQ0FBQ2xCLEVBQUU7UUFFekI7UUFDQyxJQUFJO1FBRUosT0FBT0Q7SUFDVCxFQUFFLE9BQU9RLE9BQU87UUFDZCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRixFQUFFO0FBRUssZUFBZVcsY0FBY0MsRUFBRTtJQUN4QyxNQUFNQyxTQUFTekIsMERBQUtBLENBQUN3QjtJQUNqQixPQUFPQztBQUNUO0FBQ08sZUFBZUMsZUFBZUMsU0FBUztJQUM1Q2IsUUFBUUMsR0FBRyxDQUFDWTtJQUNaLElBQUk7UUFDRix1RUFBdUU7UUFDdkUsTUFBTXRCLFdBQVcsTUFBTUMsTUFBTSx3REFBa0UsT0FBVnFCO1FBQ3JGLE1BQU1wQixPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFFaEMsT0FBT0QsS0FBS0csS0FBSyxDQUFDLEVBQUU7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RHLFFBQVFILEtBQUssQ0FBQyw2Q0FBdUQsT0FBVmdCLFdBQVUsTUFBSWhCO1FBQ3pFLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9mZXRjaFV0aWxzLnRzP2M2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SWQgfSBmcm9tIFwiLi4vcGFnZXMvZ2FtZS9lbmRHYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lYWxzID0gYXN5bmMgKG51bU1lYWxzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoZWRNZWFscyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1NZWFsczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvcmFuZG9tLnBocFwiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgZmV0Y2hlZE1lYWxzLnB1c2goZGF0YS5tZWFsc1swXSk7XG4gXG4gICAgICB9XG4gICAgICByZXR1cm4gZmV0Y2hlZE1lYWxzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggbWVhbHNcIik7XG4gICAgfVxuICB9O1xuICBleHBvcnQgY29uc3QgZmV0Y2hWZWdvTWVhbHMgPSBhc3luYyAobnVtTWVhbHMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hlZE1lYWxzID0gW107XG4gIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz12ZWdldGFyaWFuXCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBtZWFscyA9IGRhdGEubWVhbHNcbiAgICAgICAgY29uc29sZS5sb2cobWVhbHMubGVuZ3RoKVxuICAgICAgICBmZXRjaGVkTWVhbHMucHVzaChkYXRhLm1lYWxzKTtcbiAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBudW1NZWFsczsgaSsrKSB7XG4gICAgIGNvbnN0IGhpID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1lYWxzLmxlbmd0aCk7XG4gICAgIGNvbnNvbGUubG9nKGhpKVxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU1lYWxzOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpXTtcbiAgICAgIFxuICAgICB9XG4gICAgICAvLyB9XG5cbiAgICAgIHJldHVybiBmZXRjaGVkTWVhbHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBtZWFsc1wiKTtcbiAgICB9XG4gIH07XG4gIFxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdElkcyhpZCkge1xuY29uc3QgbnVtYmVyID0gZ2V0SWQoaWQpXG4gICAgcmV0dXJuIG51bWJlclxuICB9XG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0RGF0YShwcm9kdWN0SWQpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0SWQpXG4gICAgdHJ5IHtcbiAgICAgIC8vIE1ha2UgYW4gQVBJIHJlcXVlc3QgdG8gZ2V0IHRoZSBwcm9kdWN0IGRhdGEgYmFzZWQgb24gdGhlIFwicHJvZHVjdElkXCJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtwcm9kdWN0SWR9YCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBcbiAgICAgIHJldHVybiBkYXRhLm1lYWxzWzBdXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIHByb2R1Y3QgZGF0YSBmb3IgcHJvZHVjdElkICR7cHJvZHVjdElkfTpgLCBlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0iXSwibmFtZXMiOlsiZ2V0SWQiLCJmZXRjaE1lYWxzIiwibnVtTWVhbHMiLCJmZXRjaGVkTWVhbHMiLCJpIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHVzaCIsIm1lYWxzIiwiZXJyb3IiLCJFcnJvciIsImZldGNoVmVnb01lYWxzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImhpIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZWxlbWVudCIsImFycmF5IiwiZ2V0UHJvZHVjdElkcyIsImlkIiwibnVtYmVyIiwiZ2V0UHJvZHVjdERhdGEiLCJwcm9kdWN0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/fetchUtils.ts\n"));

/***/ })

});
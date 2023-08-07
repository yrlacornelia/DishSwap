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

/***/ "./src/pages/game/endGame.tsx":
/*!************************************!*\
  !*** ./src/pages/game/endGame.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getId: function() { return /* binding */ getId; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_resultUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resultUtils */ \"./src/utils/resultUtils.ts\");\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction getId(id) {\n    console.log(\"HI\");\n    console.log(id);\n    return id;\n}\nconst endGame = ()=>{\n    _s();\n    const [five, setfive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Use the useRouter hook inside the functional component\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const players = (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_3__.loadFromLocalStorage)(\"playerMealData\");\n        const fetchResults = async ()=>{\n            try {\n                const results = await (0,_utils_resultUtils__WEBPACK_IMPORTED_MODULE_2__.resultsUtils)(players.numPlayers);\n                console.log(results);\n                setResults(results);\n            } catch (error) {\n                console.error(\"Error fetching results:\", error);\n            }\n        };\n        fetchResults();\n    }, []);\n    console.log(results);\n    const handleRouting = (id)=>{\n        router.push(\"/game/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: results.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-2/4 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-5\",\n                    children: \"Winners\"\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap gap-5 \",\n                    children: results.map((result)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>{\n                                handleRouting(result.idMeal);\n                            },\n                            className: \" m:w-1/3 bg-green  p-2 shadow rounded-xl py-5 flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \" rounded-xl mb-5\",\n                                    src: result.strMealThumb,\n                                    width: 150,\n                                    height: 150\n                                }, void 0, false, {\n                                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            \" \",\n                                            result.strMeal\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, result.idMeal, true, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results found\"\n            }, void 0, false, {\n                fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/endGame.tsx\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(endGame, \"tS21ZGsB7pccsmN8Scg4UrnHJ9U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (endGame);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS9lbmRHYW1lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNXO0FBQ2M7QUFDN0I7QUFFakMsU0FBU0ssTUFBTUMsRUFBVTtJQUNoQ0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFPQTtBQUNQO0FBQ0EsTUFBTUcsVUFBVTs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ2hELE1BQU1hLFNBQVNWLHNEQUFTQSxJQUFJLHlEQUF5RDtJQUdyRkosZ0RBQVNBLENBQUM7UUFDVCxNQUFNZSxVQUFVWiw4RUFBb0JBLENBQUM7UUFDcEMsTUFBTWEsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1KLFVBQVUsTUFBTVYsZ0VBQVlBLENBQUNhLFFBQVFFLFVBQVU7Z0JBQ3JEVixRQUFRQyxHQUFHLENBQUNJO2dCQUNaQyxXQUFXRDtZQUNiLEVBQUUsT0FBT00sT0FBTztnQkFDZFgsUUFBUVcsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBRjtJQUNGLEdBQUcsRUFBRTtJQUNQVCxRQUFRQyxHQUFHLENBQUNJO0lBQ1osTUFBTU8sZ0JBQWdCLENBQUNiO1FBQ3JCUSxPQUFPTSxJQUFJLENBQUMsU0FBWSxPQUFIZDtJQUN2QjtJQUNFLHFCQUNFO2tCQUNHTSxRQUFRUyxNQUFNLEdBQUcsa0JBQ2xCLDhEQUFDQztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQU87Ozs7Ozs4QkFDdkIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNkWCxRQUFRYSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1IsOERBQUNKOzRCQUNBSyxTQUFTO2dDQUFPUixjQUFjTyxPQUFPRSxNQUFNOzRCQUFDOzRCQUMzQ0wsV0FBVTs7OENBQ1YsOERBQUNNO29DQUFJTixXQUFVO29DQUFtQk8sS0FBS0osT0FBT0ssWUFBWTtvQ0FBRUMsT0FBTztvQ0FBS0MsUUFBUTs7Ozs7OzhDQUNoRiw4REFBQ1g7OENBQUssNEVBQUNZOzs0Q0FBRzs0Q0FBRVIsT0FBT1MsT0FBTzs7Ozs7Ozs7Ozs7OzsyQkFKbEJULE9BQU9FLE1BQU07Ozs7Ozs7Ozs7Ozs7OztzQ0FZN0IsOERBQUNOO3NCQUNDLDRFQUFDYzswQkFBRTs7Ozs7Ozs7Ozs7O0FBTWI7R0FsRE0zQjs7UUFHV0wsa0RBQVNBOzs7QUFpRDFCLCtEQUFlSyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9nYW1lL2VuZEdhbWUudHN4PzdiM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVzdWx0c1V0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Jlc3VsdFV0aWxzXCI7XG5pbXBvcnQgeyBsb2FkRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VVdGlsc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZChpZDogbnVtYmVyKSB7XG5jb25zb2xlLmxvZyhcIkhJXCIpXG5jb25zb2xlLmxvZyhpZClcbnJldHVybiBpZFxufVxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgW2ZpdmUsIHNldGZpdmVdID0gdXNlU3RhdGU8bnVtYmVyPigpXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvLyBVc2UgdGhlIHVzZVJvdXRlciBob29rIGluc2lkZSB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnRcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBjb25zdCBwbGF5ZXJzID0gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllck1lYWxEYXRhJyk7XG4gICAgY29uc3QgZmV0Y2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3VsdHNVdGlscyhwbGF5ZXJzLm51bVBsYXllcnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuICAgICAgICBzZXRSZXN1bHRzKHJlc3VsdHMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJlc3VsdHM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hSZXN1bHRzKCk7XG4gIH0sIFtdKTtcbmNvbnNvbGUubG9nKHJlc3VsdHMpXG5jb25zdCBoYW5kbGVSb3V0aW5nID0gKGlkKSA9PiB7XG4gIHJvdXRlci5wdXNoKGAvZ2FtZS8ke2lkfWApO1xufTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Jlc3VsdHMubGVuZ3RoID4gMCA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTIvNCBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNVwiPldpbm5lcnM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC01IFwiPlxuICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17cmVzdWx0LmlkTWVhbH1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVSb3V0aW5nKHJlc3VsdC5pZE1lYWwpfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgbTp3LTEvMyBiZy1ncmVlbiAgcC0yIHNoYWRvdyByb3VuZGVkLXhsIHB5LTUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIiByb3VuZGVkLXhsIG1iLTVcIiBzcmM9e3Jlc3VsdC5zdHJNZWFsVGh1bWJ9IHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfT48L2ltZz5cbiAgICAgICAgICAgICAgICA8ZGl2ID48aDQ+IHtyZXN1bHQuc3RyTWVhbH08L2g0PlxuICAgICAgICAgICAgICAgIHsvKiA8cD5DYXRlZ29yeToge3Jlc3VsdC5zdHJDYXRlZ29yeX08L3A+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5ObyByZXN1bHRzIGZvdW5kPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7LyogPGJ1dHRvbiA+dHJ5IGFnYWluPC9idXR0b24+ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5kR2FtZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInJlc3VsdHNVdGlscyIsImxvYWRGcm9tTG9jYWxTdG9yYWdlIiwidXNlUm91dGVyIiwiZ2V0SWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJlbmRHYW1lIiwiZml2ZSIsInNldGZpdmUiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInJvdXRlciIsInBsYXllcnMiLCJmZXRjaFJlc3VsdHMiLCJudW1QbGF5ZXJzIiwiZXJyb3IiLCJoYW5kbGVSb3V0aW5nIiwicHVzaCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicmVzdWx0Iiwib25DbGljayIsImlkTWVhbCIsImltZyIsInNyYyIsInN0ck1lYWxUaHVtYiIsIndpZHRoIiwiaGVpZ2h0IiwiaDQiLCJzdHJNZWFsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/game/endGame.tsx\n"));

/***/ })

});
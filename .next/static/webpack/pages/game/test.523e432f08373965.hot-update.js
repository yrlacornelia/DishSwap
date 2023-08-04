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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/LocalStorageUtils */ \"./src/utils/LocalStorageUtils.ts\");\n/* harmony import */ var _components_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusableComponents/Button */ \"./src/components/reusableComponents/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Test() {\n    var _selectedObject;\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [numPlayersFinished, setNumPlayersFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [arrayLength, setArrayLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [myObjectArray, setMyObjectArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Provide default value here\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const initialRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true); // Create a ref to track the initial render\n    console.log(currentIndex);\n    console.log(arrayLength);\n    const handleNext = ()=>{\n        setCurrentIndex(currentIndex + 1);\n    // Your logic for \"hi()\" function here if needed\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Loading data from local storage...\");\n        const localStorageArray = (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)(\"meals\");\n        setArrayLength(localStorageArray.length);\n        setMyObjectArray(localStorageArray); // Setting the whole array here\n        setCurrentIndex(0); // Resetting currentIndex when array updates\n    }, []);\n    const selectedObject = myObjectArray[currentIndex];\n    const handleYesClick = ()=>{\n        setResults((prevResults)=>{\n            var _selectedObject;\n            return [\n                ...prevResults,\n                ((_selectedObject = selectedObject) === null || _selectedObject === void 0 ? void 0 : _selectedObject.strMeal) || \"\"\n            ];\n        });\n        handleNext();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initialRender.current) {\n            initialRender.current = false;\n        } else {\n            if (currentIndex === arrayLength) {\n                setNumPlayersFinished(numPlayersFinished + 1);\n                alert(\"Game over!\");\n                setCurrentIndex(0); // Reset currentIndex for the next player\n            }\n        }\n    }, [\n        currentIndex,\n        arrayLength\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const players = (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)(\"playerMealData\");\n        if (numPlayersFinished === players.numPlayers) {\n            alert(\"Game over!\");\n            (0,_utils_LocalStorageUtils__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(\"results\", results);\n            window.location.href = \"/game/endGame\";\n            setCurrentIndex(0); // Reset currentIndex for the next player\n        }\n    }, [\n        numPlayersFinished,\n        results\n    ]); // Add results to the dependency array\n    // console.log(selectedObject.strMealThumb)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center flex flex-col gap-5 mt-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: \"image\",\n                    src: selectedObject,\n                    width: 400,\n                    height: 400,\n                    className: \"border border-black-light border-2 rounded-3xl\"\n                }, void 0, false, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"  \",\n                        (_selectedObject = selectedObject) === null || _selectedObject === void 0 ? void 0 : _selectedObject.strMeal\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onNextClick: handleYesClick,\n                            title: \"yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 10\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusableComponents_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onNextClick: handleNext,\n                            title: \"no\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/yrlahackzell/Desktop/sommarprojekt/DishSwap/src/pages/game/test.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Test, \"j2QM/3ojy41KNwZdlyzI43bBZe8=\");\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS90ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDOEI7QUFDckI7QUFHckQsU0FBU087UUE0RFpDOztJQTNEVixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQVcsRUFBRTtJQUNuRCxNQUFNLENBQUNTLG9CQUFvQkMsc0JBQXNCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBYSxFQUFFLEdBQUcsNkJBQTZCO0lBQ2pHLE1BQU0sQ0FBQ2UsY0FBY0MsZ0JBQWdCLEdBQUdoQiwrQ0FBUUEsQ0FBUztJQUV6RCxNQUFNaUIsZ0JBQWdCaEIsNkNBQU1BLENBQUMsT0FBTywyQ0FBMkM7SUFFL0VpQixRQUFRQyxHQUFHLENBQUNKO0lBQ1pHLFFBQVFDLEdBQUcsQ0FBQ1I7SUFFWixNQUFNUyxhQUFhO1FBQ2pCSixnQkFBZ0JELGVBQWU7SUFDL0IsZ0RBQWdEO0lBQ2xEO0lBRUFoQixnREFBU0EsQ0FBQztRQUNSbUIsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUUsb0JBQW9CbkIsOEVBQW9CQSxDQUFDO1FBQy9DVSxlQUFlUyxrQkFBa0JDLE1BQU07UUFDdkNSLGlCQUFpQk8sb0JBQW9CLCtCQUErQjtRQUNwRUwsZ0JBQWdCLElBQUksNENBQTRDO0lBQ2xFLEdBQUcsRUFBRTtJQUVMLE1BQU1WLGlCQUEyQk8sYUFBYSxDQUFDRSxhQUFhO0lBRTVELE1BQU1RLGlCQUFpQjtRQUNyQmYsV0FBVyxDQUFDZ0I7Z0JBQWlDbEI7bUJBQWpCO21CQUFJa0I7Z0JBQWFsQixFQUFBQSxrQkFBQUEsNEJBQUFBLHNDQUFBQSxnQkFBZ0JtQixPQUFPLEtBQUk7YUFBRzs7UUFDM0VMO0lBQ0Y7SUFFQXJCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWtCLGNBQWNTLE9BQU8sRUFBRTtZQUN6QlQsY0FBY1MsT0FBTyxHQUFHO1FBQzFCLE9BQU87WUFDTCxJQUFJWCxpQkFBaUJKLGFBQWE7Z0JBQ2hDRCxzQkFBc0JELHFCQUFxQjtnQkFDM0NrQixNQUFNO2dCQUNOWCxnQkFBZ0IsSUFBSSx5Q0FBeUM7WUFDL0Q7UUFDRjtJQUNGLEdBQUc7UUFBQ0Q7UUFBY0o7S0FBWTtJQUU5QlosZ0RBQVNBLENBQUM7UUFDUixNQUFNNkIsVUFBVTFCLDhFQUFvQkEsQ0FBQztRQUNyQyxJQUFJTyx1QkFBdUJtQixRQUFRQyxVQUFVLEVBQUU7WUFDN0NGLE1BQU07WUFDTnhCLDRFQUFrQkEsQ0FBQyxXQUFXSTtZQUM5QnVCLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFJO1lBQ3hCaEIsZ0JBQWdCLElBQUkseUNBQXlDO1FBQy9EO0lBQ0YsR0FBRztRQUFDUDtRQUFvQkY7S0FBUSxHQUFHLHNDQUFzQztJQUMzRSwyQ0FBMkM7SUFDekMscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVO2tCQUNiOzs4QkFHRSw4REFBQ0M7b0JBQUtDLEtBQUk7b0JBQVFDLEtBQUsvQjtvQkFBZ0JnQyxPQUFPO29CQUFLQyxRQUFRO29CQUFLTCxXQUFVOzs7Ozs7OEJBQzVFLDhEQUFDTTs7d0JBQUU7eUJBQUdsQyxrQkFBQUEsNEJBQUFBLHNDQUFBQSxnQkFBZ0JtQixPQUFPOzs7Ozs7OzhCQUM3Qiw4REFBQ1E7b0JBQUlDLFdBQVU7O3NDQUNaLDhEQUFDOUIsNkVBQVVBOzRCQUFDcUMsYUFBYWxCOzRCQUFnQm1CLE9BQU87Ozs7OztzQ0FDakQsOERBQUN0Qyw2RUFBVUE7NEJBQUNxQyxhQUFhckI7NEJBQVlzQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BEO0dBcEV3QnJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9nYW1lL3Rlc3QudHN4P2RmODMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvTG9jYWxTdG9yYWdlVXRpbHNcIjtcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlQ29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IE15T2JqZWN0LCBlbXB0eU15T2JqZWN0IH0gZnJvbSBcIi4uLy4uL2xpYi9kYXRhXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QoKSB7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtudW1QbGF5ZXJzRmluaXNoZWQsIHNldE51bVBsYXllcnNGaW5pc2hlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FycmF5TGVuZ3RoLCBzZXRBcnJheUxlbmd0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbbXlPYmplY3RBcnJheSwgc2V0TXlPYmplY3RBcnJheV0gPSB1c2VTdGF0ZTxNeU9iamVjdFtdPihbXSk7IC8vIFByb3ZpZGUgZGVmYXVsdCB2YWx1ZSBoZXJlXG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IGluaXRpYWxSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7IC8vIENyZWF0ZSBhIHJlZiB0byB0cmFjayB0aGUgaW5pdGlhbCByZW5kZXJcblxuICBjb25zb2xlLmxvZyhjdXJyZW50SW5kZXgpO1xuICBjb25zb2xlLmxvZyhhcnJheUxlbmd0aCk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XG4gICAgLy8gWW91ciBsb2dpYyBmb3IgXCJoaSgpXCIgZnVuY3Rpb24gaGVyZSBpZiBuZWVkZWRcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZS4uLlwiKTtcbiAgICBjb25zdCBsb2NhbFN0b3JhZ2VBcnJheSA9IGxvYWRGcm9tTG9jYWxTdG9yYWdlKFwibWVhbHNcIik7XG4gICAgc2V0QXJyYXlMZW5ndGgobG9jYWxTdG9yYWdlQXJyYXkubGVuZ3RoKTtcbiAgICBzZXRNeU9iamVjdEFycmF5KGxvY2FsU3RvcmFnZUFycmF5KTsgLy8gU2V0dGluZyB0aGUgd2hvbGUgYXJyYXkgaGVyZVxuICAgIHNldEN1cnJlbnRJbmRleCgwKTsgLy8gUmVzZXR0aW5nIGN1cnJlbnRJbmRleCB3aGVuIGFycmF5IHVwZGF0ZXNcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNlbGVjdGVkT2JqZWN0OiBNeU9iamVjdCA9IG15T2JqZWN0QXJyYXlbY3VycmVudEluZGV4XTtcblxuICBjb25zdCBoYW5kbGVZZXNDbGljayA9ICgpID0+IHtcbiAgICBzZXRSZXN1bHRzKChwcmV2UmVzdWx0cykgPT4gWy4uLnByZXZSZXN1bHRzLCBzZWxlY3RlZE9iamVjdD8uc3RyTWVhbCB8fCBcIlwiXSk7XG4gICAgaGFuZGxlTmV4dCgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxSZW5kZXIuY3VycmVudCkge1xuICAgICAgaW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IGFycmF5TGVuZ3RoKSB7XG4gICAgICAgIHNldE51bVBsYXllcnNGaW5pc2hlZChudW1QbGF5ZXJzRmluaXNoZWQgKyAxKTtcbiAgICAgICAgYWxlcnQoXCJHYW1lIG92ZXIhXCIpO1xuICAgICAgICBzZXRDdXJyZW50SW5kZXgoMCk7IC8vIFJlc2V0IGN1cnJlbnRJbmRleCBmb3IgdGhlIG5leHQgcGxheWVyXG4gICAgICB9XG4gICAgfVxuICB9LCBbY3VycmVudEluZGV4LCBhcnJheUxlbmd0aF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGxheWVycyA9IGxvYWRGcm9tTG9jYWxTdG9yYWdlKFwicGxheWVyTWVhbERhdGFcIik7XG4gICAgaWYgKG51bVBsYXllcnNGaW5pc2hlZCA9PT0gcGxheWVycy5udW1QbGF5ZXJzKSB7XG4gICAgICBhbGVydChcIkdhbWUgb3ZlciFcIik7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoXCJyZXN1bHRzXCIsIHJlc3VsdHMpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2dhbWUvZW5kR2FtZWA7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoMCk7IC8vIFJlc2V0IGN1cnJlbnRJbmRleCBmb3IgdGhlIG5leHQgcGxheWVyXG4gICAgfVxuICB9LCBbbnVtUGxheWVyc0ZpbmlzaGVkLCByZXN1bHRzXSk7IC8vIEFkZCByZXN1bHRzIHRvIHRoZSBkZXBlbmRlbmN5IGFycmF5XG4vLyBjb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdC5zdHJNZWFsVGh1bWIpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGdhcC01IG10LTEwXCI+XG4gICAgICA8PlxuICAgICAgICB7LyogPHA+bcOlbHRpZDoge2l0ZW0uc3RyTWVhbH08L3A+ICovfVxuICAgICAgICB7LyogPHA+bcOlbHRpZDogPC9wPiAqL31cbiAgICAgICAgPGltZyAgYWx0PVwiaW1hZ2VcIiBzcmM9e3NlbGVjdGVkT2JqZWN0fSB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFjay1saWdodCBib3JkZXItMiByb3VuZGVkLTN4bFwiLz5cbiAgICAgIDxwPiAge3NlbGVjdGVkT2JqZWN0Py5zdHJNZWFsfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgIDxOZXh0QnV0dG9uIG9uTmV4dENsaWNrPXtoYW5kbGVZZXNDbGlja30gdGl0bGU9e1wieWVzXCJ9IC8+XG4gICAgICAgIDxOZXh0QnV0dG9uIG9uTmV4dENsaWNrPXtoYW5kbGVOZXh0fSB0aXRsZT17XCJub1wifSAvPlxuPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImxvYWRGcm9tTG9jYWxTdG9yYWdlIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwiTmV4dEJ1dHRvbiIsIlRlc3QiLCJzZWxlY3RlZE9iamVjdCIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwibnVtUGxheWVyc0ZpbmlzaGVkIiwic2V0TnVtUGxheWVyc0ZpbmlzaGVkIiwiYXJyYXlMZW5ndGgiLCJzZXRBcnJheUxlbmd0aCIsIm15T2JqZWN0QXJyYXkiLCJzZXRNeU9iamVjdEFycmF5IiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiaW5pdGlhbFJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVOZXh0IiwibG9jYWxTdG9yYWdlQXJyYXkiLCJsZW5ndGgiLCJoYW5kbGVZZXNDbGljayIsInByZXZSZXN1bHRzIiwic3RyTWVhbCIsImN1cnJlbnQiLCJhbGVydCIsInBsYXllcnMiLCJudW1QbGF5ZXJzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwib25OZXh0Q2xpY2siLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/game/test.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/concertCoverage",{

/***/ "./components/Navbars/VerticalNavbar.js":
/*!**********************************************!*\
  !*** ./components/Navbars/VerticalNavbar.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n// components\nvar oldScrollY = 0;\nfunction Navbar(props) {\n    _s();\n    // const [navbarOpen, setNavbarOpen] = React.useState(false);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"up\"), direction = ref[0], setDirection = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n            document.getElementsByClassName(\"vertical-nav\")[0].style.scrollY = window.scrollY;\n        });\n        console.log(window.scrollY);\n        return function() {\n            window.removeEventListener(\"scroll\", controlDirection);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"vertical-nav bg-white\",\n            id: \"sidebar\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"py-4 px-3 mb-4 bg-light\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"media d-flex align-items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"media-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        class: \"m-0\",\n                                        children: \"Afonso Carvalho\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 30\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    class: \"font-weight-light text-muted mb-0\",\n                                    children: \"Video and Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0\",\n                    children: \"Main\"\n                }, void 0, false, {\n                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    class: \"nav flex-column bg-white mb-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            class: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                class: \"nav-link text-dark font-italic bg-light\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        class: \"fa fa-th-large mr-3 text-primary fa-fw\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"Works\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            class: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                class: \"nav-link text-dark font-italic\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        class: \"fa fa-address-card mr-3 text-primary fa-fw\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"About\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0\",\n                    children: \"Works\"\n                }, void 0, false, {\n                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    class: \"nav flex-column bg-white mb-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            class: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                class: \"nav-link text-dark font-italic\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        class: \"fa fa-area-chart mr-3 text-primary fa-fw\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"Music Videos\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/concertCoverage\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                class: \"nav-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        class: \"fa fa-bar-chart mr-3 text-primary fa-fw\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"Concert Coverage\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/VPort/components/Navbars/VerticalNavbar.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Navbar, \"m2wE/7PWJniDNS7OrtYbnGaxSoU=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhcnMvVmVydGljYWxOYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ3BCOztBQUM3QixhQUFhO0FBRWIsSUFBSUksVUFBVSxHQUFHLENBQUM7QUFNSCxTQUFTQyxNQUFNLENBQUNDLEtBQUssRUFBRTs7SUFDcEMsNkRBQTZEO0lBQzdELElBQWtDSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDSyxTQUFTLEdBQWtCTCxHQUFjLEdBQWhDLEVBQUVNLFlBQVksR0FBSU4sR0FBYyxHQUFsQjtJQUU5QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RRLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFHLFdBQVU7WUFDM0NDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHTCxNQUFNLENBQUNLLE9BQU87U0FBQyxDQUFDLENBQUM7UUFDcEZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxNQUFNLENBQUNLLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sV0FBTTtZQUNUTCxNQUFNLENBQUNRLG1CQUFtQixDQUFDLFFBQVEsRUFBRUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMxRCxDQUFDO0tBQ0wsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUVKLHFCQUNFO2tCQUNFLDRFQUFDQyxLQUFHO1lBQUNDLEtBQUssRUFBQyx1QkFBdUI7WUFBQ0MsRUFBRSxFQUFDLFNBQVM7OzhCQUM3Qyw4REFBQ0YsS0FBRztvQkFBQ0MsS0FBSyxFQUFDLHlCQUF5Qjs4QkFDbEMsNEVBQUNELEtBQUc7d0JBQUNDLEtBQUssRUFBQyxpQ0FBaUM7a0NBQzFDLDRFQUFDRCxLQUFHOzRCQUFDQyxLQUFLLEVBQUMsWUFBWTs7OENBQ3JCLDhEQUFDakIsa0RBQUk7b0NBQUNtQixJQUFJLEVBQUMsR0FBRzs4Q0FBQyw0RUFBQ0MsSUFBRTt3Q0FBQ0gsS0FBSyxFQUFDLEtBQUs7a0RBQUMsaUJBQWU7Ozs7OzRDQUFLOzs7Ozt3Q0FBTzs4Q0FFMUQsOERBQUNJLEdBQUM7b0NBQUNKLEtBQUssRUFBQyxtQ0FBbUM7OENBQUMsaUJBQWU7Ozs7O3dDQUFJOzs7Ozs7Z0NBQzVEOzs7Ozs0QkFDRjs7Ozs7d0JBQ0Y7OEJBRU4sOERBQUNJLEdBQUM7b0JBQUNKLEtBQUssRUFBQyxnRUFBZ0U7OEJBQUMsTUFBSTs7Ozs7d0JBQUk7OEJBRWxGLDhEQUFDSyxJQUFFO29CQUFDTCxLQUFLLEVBQUMsK0JBQStCOztzQ0FDdkMsOERBQUNNLElBQUU7NEJBQUNOLEtBQUssRUFBQyxVQUFVO3NDQUNsQiw0RUFBQ08sR0FBQztnQ0FBQ0wsSUFBSSxFQUFDLEdBQUc7Z0NBQUNGLEtBQUssRUFBQyx5Q0FBeUM7O2tEQUN6RCw4REFBQ1EsR0FBQzt3Q0FBQ1IsS0FBSyxFQUFDLHdDQUF3Qzs7Ozs7NENBQUs7b0NBQUEsT0FFeEQ7Ozs7OztvQ0FBSTs7Ozs7Z0NBQ0Q7c0NBQ0wsOERBQUNNLElBQUU7NEJBQUNOLEtBQUssRUFBQyxVQUFVO3NDQUNsQiw0RUFBQ08sR0FBQztnQ0FBQ0wsSUFBSSxFQUFDLEdBQUc7Z0NBQUNGLEtBQUssRUFBQyxnQ0FBZ0M7O2tEQUNoRCw4REFBQ1EsR0FBQzt3Q0FBQ1IsS0FBSyxFQUFDLDRDQUE0Qzs7Ozs7NENBQUs7b0NBQUEsT0FFNUQ7Ozs7OztvQ0FBSTs7Ozs7Z0NBQ0Q7Ozs7Ozt3QkFRRjs4QkFFTCw4REFBQ0ksR0FBQztvQkFBQ0osS0FBSyxFQUFDLGdFQUFnRTs4QkFBQyxPQUFLOzs7Ozt3QkFBSTs4QkFFbkYsOERBQUNLLElBQUU7b0JBQUNMLEtBQUssRUFBQywrQkFBK0I7O3NDQUN2Qyw4REFBQ00sSUFBRTs0QkFBQ04sS0FBSyxFQUFDLFVBQVU7c0NBQ2xCLDRFQUFDTyxHQUFDO2dDQUFDTCxJQUFJLEVBQUMsR0FBRztnQ0FBQ0YsS0FBSyxFQUFDLGdDQUFnQzs7a0RBQ2hELDhEQUFDUSxHQUFDO3dDQUFDUixLQUFLLEVBQUMsMENBQTBDOzs7Ozs0Q0FBSztvQ0FBQSxjQUUxRDs7Ozs7O29DQUFJOzs7OztnQ0FDRDtzQ0FDTCw4REFBQ2pCLGtEQUFJOzRCQUFDbUIsSUFBSSxFQUFDLGtCQUFrQjtzQ0FDM0IsNEVBQUNJLElBQUU7Z0NBQUNOLEtBQUssRUFBQyxVQUFVOztrREFFbEIsOERBQUNRLEdBQUM7d0NBQUNSLEtBQUssRUFBQyx5Q0FBeUM7Ozs7OzRDQUFLO29DQUFBLGtCQUV6RDs7Ozs7O29DQUFLOzs7OztnQ0FDQTs7Ozs7O3dCQUdKOzs7Ozs7Z0JBQ0Q7cUJBQ0wsQ0FDSDtDQUNIO0dBeEV1QmYsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFycy9WZXJ0aWNhbE5hdmJhci5qcz9jODA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gY29tcG9uZW50c1xuXG5sZXQgb2xkU2Nyb2xsWSA9IDA7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHByb3BzKSB7XG4gIC8vIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKCd1cCcpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgIGZ1bmN0aW9uKCl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidmVydGljYWwtbmF2XCIpWzBdLnN0eWxlLnNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWX0pO1xuICAgICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjb250cm9sRGlyZWN0aW9uKTtcbiAgICB9O1xufSxbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzcz1cInZlcnRpY2FsLW5hdiBiZy13aGl0ZVwiIGlkPVwic2lkZWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHktNCBweC0zIG1iLTQgYmctbGlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48aDQgY2xhc3M9XCJtLTBcIj5BZm9uc28gQ2FydmFsaG88L2g0PjwvTGluaz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC13ZWlnaHQtbGlnaHQgdGV4dC1tdXRlZCBtYi0wXCI+VmlkZW8gYW5kIFBob3RvPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgcHgtMyBzbWFsbCBwYi00IG1iLTBcIj5NYWluPC9wPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBiZy13aGl0ZSBtYi0wXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXYtbGluayB0ZXh0LWRhcmsgZm9udC1pdGFsaWMgYmctbGlnaHRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aC1sYXJnZSBtci0zIHRleHQtcHJpbWFyeSBmYS1md1wiPjwvaT5cbiAgICAgICAgICAgICAgV29ya3NcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2LWxpbmsgdGV4dC1kYXJrIGZvbnQtaXRhbGljXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYWRkcmVzcy1jYXJkIG1yLTMgdGV4dC1wcmltYXJ5IGZhLWZ3XCI+PC9pPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgey8qIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2LWxpbmsgdGV4dC1kYXJrIGZvbnQtaXRhbGljXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY3ViZXMgbXItMyB0ZXh0LXByaW1hcnkgZmEtZndcIj48L2k+XG4gICAgICAgICAgICAgIFNlcnZpY2VzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT4gKi99XG5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheSBmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIHB4LTMgc21hbGwgcHktNCBtYi0wXCI+V29ya3M8L3A+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibmF2IGZsZXgtY29sdW1uIGJnLXdoaXRlIG1iLTBcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdi1saW5rIHRleHQtZGFyayBmb250LWl0YWxpY1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFyZWEtY2hhcnQgbXItMyB0ZXh0LXByaW1hcnkgZmEtZndcIj48L2k+XG4gICAgICAgICAgICAgIE11c2ljIFZpZGVvc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb25jZXJ0Q292ZXJhZ2VcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1iYXItY2hhcnQgbXItMyB0ZXh0LXByaW1hcnkgZmEtZndcIj48L2k+XG4gICAgICAgICAgICAgIENvbmNlcnQgQ292ZXJhZ2VcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuXG5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwib2xkU2Nyb2xsWSIsIk5hdmJhciIsInByb3BzIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbERpcmVjdGlvbiIsImRpdiIsImNsYXNzIiwiaWQiLCJocmVmIiwiaDQiLCJwIiwidWwiLCJsaSIsImEiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbars/VerticalNavbar.js\n"));

/***/ })

});
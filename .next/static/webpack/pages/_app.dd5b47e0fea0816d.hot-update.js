"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/mainPage.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/mainPage.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n* ==========================================\\n* CUSTOM UTIL CLASSES\\n* ==========================================\\n*\\n*/\\n\\n.vertical-nav {\\n    min-width: 17rem;\\n    width: 17rem;\\n    height: 100vh;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\\n    transition: all 0.4s;\\n}\\n\\n.page-content {\\n    width: calc(100% - 17rem);\\n    margin-left: 17rem;\\n    transition: all 0.4s;\\n}\\n\\n/* for toggle behavior */\\n\\n#sidebar.active {\\n    margin-left: -17rem;\\n}\\n\\n#content.active {\\n    width: 100%;\\n    margin: 0;\\n}\\n\\n.bg_musicVideo {\\n\\n    background-size: cover;\\n}\\n\\n@media (max-width: 768px) {\\n    #sidebar {\\n        margin-left: -17rem;\\n    }\\n\\n    #sidebar.active {\\n        margin-left: 0;\\n    }\\n\\n    #content {\\n        width: 100%;\\n        margin: 0;\\n    }\\n\\n    #content.active {\\n        margin-left: 17rem;\\n        width: calc(100% - 17rem);\\n    }\\n}\\n\\n.gallery_adjust {\\n    width: 80%;\\n    margin: auto;\\n    margin-top: 10px;\\n    border: 1px solid rgba(0, 0, 0, .1);\\n\\n}\\n\\n.gallery_adjust p {\\n    text-align: center;\\n    padding: 4px;\\n    font-family: monospace;\\n    background: #222;\\n    color: #efefef;\\n}\\n.gallery_img{\\n    transform: rotate(0);\\n    transition: all ease 0.4s;\\n}\\n.gallery_img:hover{\\n    transform: rotate(\\\"2deg\\\");\\n    transition: all ease 0.4s;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/mainPage.css\"],\"names\":[],\"mappings\":\"AAAA;;;;;CAKC;;AAED;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;IACP,2CAA2C;IAC3C,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA,wBAAwB;;AAExB;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,SAAS;AACb;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,WAAW;QACX,SAAS;IACb;;IAEA;QACI,kBAAkB;QAClB,yBAAyB;IAC7B;AACJ;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,mCAAmC;;AAEvC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B\",\"sourcesContent\":[\"/*\\n* ==========================================\\n* CUSTOM UTIL CLASSES\\n* ==========================================\\n*\\n*/\\n\\n.vertical-nav {\\n    min-width: 17rem;\\n    width: 17rem;\\n    height: 100vh;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\\n    transition: all 0.4s;\\n}\\n\\n.page-content {\\n    width: calc(100% - 17rem);\\n    margin-left: 17rem;\\n    transition: all 0.4s;\\n}\\n\\n/* for toggle behavior */\\n\\n#sidebar.active {\\n    margin-left: -17rem;\\n}\\n\\n#content.active {\\n    width: 100%;\\n    margin: 0;\\n}\\n\\n.bg_musicVideo {\\n\\n    background-size: cover;\\n}\\n\\n@media (max-width: 768px) {\\n    #sidebar {\\n        margin-left: -17rem;\\n    }\\n\\n    #sidebar.active {\\n        margin-left: 0;\\n    }\\n\\n    #content {\\n        width: 100%;\\n        margin: 0;\\n    }\\n\\n    #content.active {\\n        margin-left: 17rem;\\n        width: calc(100% - 17rem);\\n    }\\n}\\n\\n.gallery_adjust {\\n    width: 80%;\\n    margin: auto;\\n    margin-top: 10px;\\n    border: 1px solid rgba(0, 0, 0, .1);\\n\\n}\\n\\n.gallery_adjust p {\\n    text-align: center;\\n    padding: 4px;\\n    font-family: monospace;\\n    background: #222;\\n    color: #efefef;\\n}\\n.gallery_img{\\n    transform: rotate(0);\\n    transition: all ease 0.4s;\\n}\\n.gallery_img:hover{\\n    transform: rotate(\\\"2deg\\\");\\n    transition: all ease 0.4s;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL21haW5QYWdlLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EseUxBQXlMLHVCQUF1QixtQkFBbUIsb0JBQW9CLHNCQUFzQixhQUFhLGNBQWMsa0RBQWtELDJCQUEyQixHQUFHLG1CQUFtQixnQ0FBZ0MseUJBQXlCLDJCQUEyQixHQUFHLGtEQUFrRCwwQkFBMEIsR0FBRyxxQkFBcUIsa0JBQWtCLGdCQUFnQixHQUFHLG9CQUFvQiwrQkFBK0IsR0FBRywrQkFBK0IsZ0JBQWdCLDhCQUE4QixPQUFPLHlCQUF5Qix5QkFBeUIsT0FBTyxrQkFBa0Isc0JBQXNCLG9CQUFvQixPQUFPLHlCQUF5Qiw2QkFBNkIsb0NBQW9DLE9BQU8sR0FBRyxxQkFBcUIsaUJBQWlCLG1CQUFtQix1QkFBdUIsMENBQTBDLEtBQUssdUJBQXVCLHlCQUF5QixtQkFBbUIsNkJBQTZCLHVCQUF1QixxQkFBcUIsR0FBRyxlQUFlLDJCQUEyQixnQ0FBZ0MsR0FBRyxxQkFBcUIsa0NBQWtDLGdDQUFnQyxHQUFHLE9BQU8sd0ZBQXdGLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLHlLQUF5Syx1QkFBdUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsYUFBYSxjQUFjLGtEQUFrRCwyQkFBMkIsR0FBRyxtQkFBbUIsZ0NBQWdDLHlCQUF5QiwyQkFBMkIsR0FBRyxrREFBa0QsMEJBQTBCLEdBQUcscUJBQXFCLGtCQUFrQixnQkFBZ0IsR0FBRyxvQkFBb0IsK0JBQStCLEdBQUcsK0JBQStCLGdCQUFnQiw4QkFBOEIsT0FBTyx5QkFBeUIseUJBQXlCLE9BQU8sa0JBQWtCLHNCQUFzQixvQkFBb0IsT0FBTyx5QkFBeUIsNkJBQTZCLG9DQUFvQyxPQUFPLEdBQUcscUJBQXFCLGlCQUFpQixtQkFBbUIsdUJBQXVCLDBDQUEwQyxLQUFLLHVCQUF1Qix5QkFBeUIsbUJBQW1CLDZCQUE2Qix1QkFBdUIscUJBQXFCLEdBQUcsZUFBZSwyQkFBMkIsZ0NBQWdDLEdBQUcscUJBQXFCLGtDQUFrQyxnQ0FBZ0MsR0FBRyxtQkFBbUI7QUFDOTZHO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21haW5QYWdlLmNzcz8zMGNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKiBDVVNUT00gVVRJTCBDTEFTU0VTXFxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qXFxuKi9cXG5cXG4udmVydGljYWwtbmF2IHtcXG4gICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gICAgd2lkdGg6IDE3cmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTdyZW0pO1xcbiAgICBtYXJnaW4tbGVmdDogMTdyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4vKiBmb3IgdG9nZ2xlIGJlaGF2aW9yICovXFxuXFxuI3NpZGViYXIuYWN0aXZlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcXG59XFxuXFxuI2NvbnRlbnQuYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJnX211c2ljVmlkZW8ge1xcblxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcXG4gICAgfVxcblxcbiAgICAjc2lkZWJhci5hY3RpdmUge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQuYWN0aXZlIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxN3JlbTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XFxuICAgIH1cXG59XFxuXFxuLmdhbGxlcnlfYWRqdXN0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcXG5cXG59XFxuXFxuLmdhbGxlcnlfYWRqdXN0IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgY29sb3I6ICNlZmVmZWY7XFxufVxcbi5nYWxsZXJ5X2ltZ3tcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XFxufVxcbi5nYWxsZXJ5X2ltZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoXFxcIjJkZWdcXFwiKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9tYWluUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O0NBS0M7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCwyQ0FBMkM7SUFDM0Msb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUEsd0JBQXdCOztBQUV4QjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKiBDVVNUT00gVVRJTCBDTEFTU0VTXFxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qXFxuKi9cXG5cXG4udmVydGljYWwtbmF2IHtcXG4gICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gICAgd2lkdGg6IDE3cmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTdyZW0pO1xcbiAgICBtYXJnaW4tbGVmdDogMTdyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4vKiBmb3IgdG9nZ2xlIGJlaGF2aW9yICovXFxuXFxuI3NpZGViYXIuYWN0aXZlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcXG59XFxuXFxuI2NvbnRlbnQuYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJnX211c2ljVmlkZW8ge1xcblxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcXG4gICAgfVxcblxcbiAgICAjc2lkZWJhci5hY3RpdmUge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQuYWN0aXZlIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxN3JlbTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XFxuICAgIH1cXG59XFxuXFxuLmdhbGxlcnlfYWRqdXN0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcXG5cXG59XFxuXFxuLmdhbGxlcnlfYWRqdXN0IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgY29sb3I6ICNlZmVmZWY7XFxufVxcbi5nYWxsZXJ5X2ltZ3tcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XFxufVxcbi5nYWxsZXJ5X2ltZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoXFxcIjJkZWdcXFwiKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/mainPage.css\n"));

/***/ })

});
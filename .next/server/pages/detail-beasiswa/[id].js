(function() {
var exports = {};
exports.id = "pages/detail-beasiswa/[id]";
exports.ids = ["pages/detail-beasiswa/[id]"];
exports.modules = {

/***/ "./pages/detail-beasiswa/[id].js":
/*!***************************************!*\
  !*** ./pages/detail-beasiswa/[id].js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\pages\\detail-beasiswa\\[id].js";
// import { Button } from "@material-ui/core";





const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();
  const paths = data.map(beasiswa => {
    return {
      params: {
        id: beasiswa.id.toString()
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/comments/' + id);
  const data = await res.json(); //console.log(res)

  let coko = js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get();
  console.log(coko);
  return {
    props: {
      beasiswa: data
    }
  };
};

const Details = ({
  beasiswa
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      href: "/form",
      className: "font-sans text-3xl m-10",
      children: "Detail Beasiswa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "font-sans text-2xl m-5",
        children: beasiswa.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-sans text-3xl m-10",
      children: "Persyaratan Beasiswa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "font-sans text-2xl m-5",
        children: beasiswa.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "daftar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: {
          pathname: '/form',
          query: {
            data: JSON.stringify(beasiswa.id)
          }
        },
        children: "Daftar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 36
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ "@material-tailwind/react/Button":
/*!**************************************************!*\
  !*** external "@material-tailwind/react/Button" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Button");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/detail-beasiswa/[id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc2JvLy4vcGFnZXMvZGV0YWlsLWJlYXNpc3dhL1tpZF0uanMiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wc2JvL2lnbm9yZWR8RDpcXERhdGFcXEt1bGlhaFxcUFNCT1xcQWtoaXJcXFBTQk9cXHBzYm9cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwYXRocyIsIm1hcCIsImJlYXNpc3dhIiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiY29rbyIsIkNvb2tpZXMiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJEZXRhaWxzIiwibmFtZSIsImVtYWlsIiwiYm9keSIsInBhdGhuYW1lIiwicXVlcnkiLCJKU09OIiwic3Ry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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQThCSCxDQS9CRDs7QUFpQ0EsK0RBQWVVLE9BQWYsRTs7Ozs7Ozs7Ozs7QUN2RUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2RldGFpbC1iZWFzaXN3YS9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHMnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoYmVhc2lzd2EgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge2lkOiBiZWFzaXN3YS5pZC50b1N0cmluZygpIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSAgYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzLycgKyBpZCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIC8vY29uc29sZS5sb2cocmVzKVxyXG4gICAgbGV0IGNva28gPSBDb29raWVzLmdldCgpXHJcbiAgICBjb25zb2xlLmxvZyhjb2tvKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBiZWFzaXN3YTogZGF0YSB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBEZXRhaWxzID0gKHsgYmVhc2lzd2EgfSkgPT4ge1xyXG4gICAgcmV0dXJuICggIFxyXG4gICAgPGRpdiA+XHJcbiAgICAgICAgPGgxIGhyZWY9XCIvZm9ybVwiIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LTN4bCBtLTEwXCI+RGV0YWlsIEJlYXNpc3dhPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtMnhsIG0tNVwiPnsgYmVhc2lzd2EubmFtZSB9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtYmFzZSBtLTVcIj57IGJlYXNpc3dhLmVtYWlsIH08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2UgbS01XCI+eyBiZWFzaXN3YS5ib2R5IH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC0zeGwgbS0xMFwiPlBlcnN5YXJhdGFuIEJlYXNpc3dhPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtMnhsIG0tNVwiPnsgYmVhc2lzd2EubmFtZSB9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtYmFzZSBtLTVcIj57IGJlYXNpc3dhLmVtYWlsIH08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2UgbS01XCI+eyBiZWFzaXN3YS5ib2R5IH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJkYWZ0YXJcIj48TGluayBocmVmPXt7cGF0aG5hbWU6ICcvZm9ybScsIHF1ZXJ5OntkYXRhOiBKU09OLnN0cmluZ2lmeShiZWFzaXN3YS5pZCl9fX0+RGFmdGFyPC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgIHsvKiA8QnV0dG9uIGhyZWY9XCIvZm9ybVwiIGNsYXNzTmFtZT1cImRhZnRhclwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgIHJvdW5kZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBibG9jaz17ZmFsc2V9XHJcbiAgICAgICAgICAgIGljb25Pbmx5PXtmYWxzZX1cclxuICAgICAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRGFmdGFyXHJcbiAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
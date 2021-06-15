self["webpackHotUpdate_N_E"]("pages/detail-beasiswa/[id]",{

/***/ "./pages/detail-beasiswa/[id].js":
/*!***************************************!*\
  !*** ./pages/detail-beasiswa/[id].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\pages\\detail-beasiswa\\[id].js",
    _this = undefined;

// import { Button } from "@material-ui/core";






var Details = function Details(_ref) {
  var beasiswa = _ref.beasiswa;
  var cookie = (js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get);
  console.log(cookie);
  var data = {
    username: "user",
    beasiswa_id: beasiswa.id
  };
  axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:3001/beasiswa/cek", data).then(function (response) {
    console.log(response.data.message);
  })["catch"](function (error) {
    console.log(error);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      href: "/form",
      className: "font-sans text-3xl m-10",
      children: "Detail Beasiswa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "font-sans text-2xl m-5",
        children: beasiswa.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-sans text-3xl m-10",
      children: "Persyaratan Beasiswa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "font-sans text-2xl m-5",
        children: beasiswa.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
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
        lineNumber: 69,
        columnNumber: 36
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, _this);
};

_c = Details;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Details);

var _c;

$RefreshReg$(_c, "Details");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsLWJlYXNpc3dhL1tpZF0uanMiXSwibmFtZXMiOlsiRGV0YWlscyIsImJlYXNpc3dhIiwiY29va2llIiwiQ29va2llcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlcm5hbWUiLCJiZWFzaXN3YV9pZCIsImlkIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZXJyb3IiLCJuYW1lIiwiZW1haWwiLCJib2R5IiwicGF0aG5hbWUiLCJxdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUErQkEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOUIsTUFBSUMsTUFBTSxHQUFHQyxzREFBYjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBLE1BQU1JLElBQUksR0FBRztBQUNUQyxZQUFRLEVBQUUsTUFERDtBQUVUQyxlQUFXLEVBQUVQLFFBQVEsQ0FBQ1E7QUFGYixHQUFiO0FBS0FDLG1EQUFBLENBQ00sb0NBRE4sRUFDMkNKLElBRDNDLEVBRUNLLElBRkQsQ0FFTSxVQUFBQyxRQUFRLEVBQUk7QUFDZFIsV0FBTyxDQUFDQyxHQUFSLENBQVlPLFFBQVEsQ0FBQ04sSUFBVCxDQUFjTyxPQUExQjtBQUNILEdBSkQsV0FLTyxVQUFBQyxLQUFLLEVBQUk7QUFDWlYsV0FBTyxDQUFDQyxHQUFSLENBQVlTLEtBQVo7QUFDSCxHQVBEO0FBU0Esc0JBQ0E7QUFBQSw0QkFDSTtBQUFJLFVBQUksRUFBQyxPQUFUO0FBQWlCLGVBQVMsRUFBQyx5QkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0JBQWQ7QUFBQSxrQkFBeUNiLFFBQVEsQ0FBQ2M7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLHlCQUFiO0FBQUEsa0JBQXlDZCxRQUFRLENBQUNlO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUcsaUJBQVMsRUFBQyx5QkFBYjtBQUFBLGtCQUF5Q2YsUUFBUSxDQUFDZ0I7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBUUk7QUFBSSxlQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQVNJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0JBQWQ7QUFBQSxrQkFBeUNoQixRQUFRLENBQUNjO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUcsaUJBQVMsRUFBQyx5QkFBYjtBQUFBLGtCQUF5Q2QsUUFBUSxDQUFDZTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFHLGlCQUFTLEVBQUMseUJBQWI7QUFBQSxrQkFBeUNmLFFBQVEsQ0FBQ2dCO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixlQWNJLDhEQUFDLG9FQUFEO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQUEsNkJBQTJCLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUNDLGtCQUFRLEVBQUUsT0FBWDtBQUFvQkMsZUFBSyxFQUFDO0FBQUNiLGdCQUFJLEVBQUVjLElBQUksQ0FBQ0MsU0FBTCxDQUFlcEIsUUFBUSxDQUFDUSxFQUF4QjtBQUFQO0FBQTFCLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBOEJILENBL0NEOztLQUFNVCxPOztBQWlETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwtYmVhc2lzd2EvW2lkXS4yMjhhMjVhNmJiYmM1YTQ3NDQzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHMnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoYmVhc2lzd2EgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge2lkOiBiZWFzaXN3YS5pZC50b1N0cmluZygpIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSAgYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzLycgKyBpZCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIC8vY29uc29sZS5sb2cocmVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBiZWFzaXN3YTogZGF0YSB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBEZXRhaWxzID0gKHsgYmVhc2lzd2EgfSkgPT4ge1xyXG4gICAgbGV0IGNvb2tpZSA9IENvb2tpZXMuZ2V0XHJcbiAgICBjb25zb2xlLmxvZyhjb29raWUpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcInVzZXJcIixcclxuICAgICAgICBiZWFzaXN3YV9pZDogYmVhc2lzd2EuaWRcclxuICAgIH1cclxuXHJcbiAgICBheGlvc1xyXG4gICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYmVhc2lzd2EvY2VrXCIsZGF0YSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgPGRpdiA+XHJcbiAgICAgICAgPGgxIGhyZWY9XCIvZm9ybVwiIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LTN4bCBtLTEwXCI+RGV0YWlsIEJlYXNpc3dhPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtMnhsIG0tNVwiPnsgYmVhc2lzd2EubmFtZSB9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtYmFzZSBtLTVcIj57IGJlYXNpc3dhLmVtYWlsIH08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2UgbS01XCI+eyBiZWFzaXN3YS5ib2R5IH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC0zeGwgbS0xMFwiPlBlcnN5YXJhdGFuIEJlYXNpc3dhPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtMnhsIG0tNVwiPnsgYmVhc2lzd2EubmFtZSB9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtYmFzZSBtLTVcIj57IGJlYXNpc3dhLmVtYWlsIH08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2UgbS01XCI+eyBiZWFzaXN3YS5ib2R5IH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJkYWZ0YXJcIj48TGluayBocmVmPXt7cGF0aG5hbWU6ICcvZm9ybScsIHF1ZXJ5OntkYXRhOiBKU09OLnN0cmluZ2lmeShiZWFzaXN3YS5pZCl9fX0+RGFmdGFyPC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgIHsvKiA8QnV0dG9uIGhyZWY9XCIvZm9ybVwiIGNsYXNzTmFtZT1cImRhZnRhclwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgIHJvdW5kZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBibG9jaz17ZmFsc2V9XHJcbiAgICAgICAgICAgIGljb25Pbmx5PXtmYWxzZX1cclxuICAgICAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRGFmdGFyXHJcbiAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzOyJdLCJzb3VyY2VSb290IjoiIn0=
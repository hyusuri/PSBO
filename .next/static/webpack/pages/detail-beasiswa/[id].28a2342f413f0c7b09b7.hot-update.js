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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\pages\\detail-beasiswa\\[id].js",
    _this = undefined;

// import { Button } from "@material-ui/core";





var Details = function Details(_ref) {
  var beasiswa = _ref.beasiswa;
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
      lineNumber: 52,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "font-sans text-2xl m-5",
        children: beasiswa.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-sans text-3xl m-10",
      children: "Persyaratan Beasiswa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "font-sans text-2xl m-5",
        children: beasiswa.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
        lineNumber: 65,
        columnNumber: 36
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsLWJlYXNpc3dhL1tpZF0uanMiXSwibmFtZXMiOlsiRGV0YWlscyIsImJlYXNpc3dhIiwiYXhpb3MiLCJkYXRhIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlcnJvciIsIm5hbWUiLCJlbWFpbCIsImJvZHkiLCJwYXRobmFtZSIsInF1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFrQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFFOUJDLG1EQUFBLENBQ00sb0NBRE4sRUFDMkNDLElBRDNDLEVBRUNDLElBRkQsQ0FFTSxVQUFBQyxRQUFRLEVBQUk7QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0YsSUFBVCxDQUFjSyxPQUExQjtBQUNILEdBSkQsV0FLTyxVQUFBQyxLQUFLLEVBQUk7QUFDWkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDSCxHQVBEO0FBU0Esc0JBQ0E7QUFBQSw0QkFDSTtBQUFJLFVBQUksRUFBQyxPQUFUO0FBQWlCLGVBQVMsRUFBQyx5QkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0JBQWQ7QUFBQSxrQkFBeUNSLFFBQVEsQ0FBQ1M7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLHlCQUFiO0FBQUEsa0JBQXlDVCxRQUFRLENBQUNVO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUcsaUJBQVMsRUFBQyx5QkFBYjtBQUFBLGtCQUF5Q1YsUUFBUSxDQUFDVztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFRSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBU0k7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx3QkFBZDtBQUFBLGtCQUF5Q1gsUUFBUSxDQUFDUztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFHLGlCQUFTLEVBQUMseUJBQWI7QUFBQSxrQkFBeUNULFFBQVEsQ0FBQ1U7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBRyxpQkFBUyxFQUFDLHlCQUFiO0FBQUEsa0JBQXlDVixRQUFRLENBQUNXO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixlQWNJLDhEQUFDLG9FQUFEO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQUEsNkJBQTJCLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUNDLGtCQUFRLEVBQUUsT0FBWDtBQUFvQkMsZUFBSyxFQUFDO0FBQUNYLGdCQUFJLEVBQUVZLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixRQUFRLENBQUNnQixFQUF4QjtBQUFQO0FBQTFCLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBOEJILENBekNEOztLQUFNakIsTzs7QUEyQ04sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsLWJlYXNpc3dhL1tpZF0uMjhhMjM0MmY0MTNmMGM3YjA5YjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzJyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGJlYXNpc3dhID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtpZDogYmVhc2lzd2EuaWQudG9TdHJpbmcoKSB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gIGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9jb21tZW50cy8nICsgaWQpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlcylcclxuICAgIGxldCBjb2tvID0gQ29va2llcy5nZXQoKVxyXG4gICAgY29uc29sZS5sb2coY29rbylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgYmVhc2lzd2E6IGRhdGEgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgRGV0YWlscyA9ICh7IGJlYXNpc3dhIH0pID0+IHtcclxuICAgIFxyXG4gICAgYXhpb3NcclxuICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2JlYXNpc3dhL2Nla1wiLGRhdGEpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoICBcclxuICAgIDxkaXYgPlxyXG4gICAgICAgIDxoMSBocmVmPVwiL2Zvcm1cIiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC0zeGwgbS0xMFwiPkRldGFpbCBCZWFzaXN3YTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LTJ4bCBtLTVcIj57IGJlYXNpc3dhLm5hbWUgfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2UgbS01XCI+eyBiZWFzaXN3YS5lbWFpbCB9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1iYXNlIG0tNVwiPnsgYmVhc2lzd2EuYm9keSB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtM3hsIG0tMTBcIj5QZXJzeWFyYXRhbiBCZWFzaXN3YTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LTJ4bCBtLTVcIj57IGJlYXNpc3dhLm5hbWUgfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2UgbS01XCI+eyBiZWFzaXN3YS5lbWFpbCB9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1iYXNlIG0tNVwiPnsgYmVhc2lzd2EuYm9keSB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZGFmdGFyXCI+PExpbmsgaHJlZj17e3BhdGhuYW1lOiAnL2Zvcm0nLCBxdWVyeTp7ZGF0YTogSlNPTi5zdHJpbmdpZnkoYmVhc2lzd2EuaWQpfX19PkRhZnRhcjwvTGluaz48L0J1dHRvbj5cclxuICAgICAgICB7LyogPEJ1dHRvbiBocmVmPVwiL2Zvcm1cIiBjbGFzc05hbWU9XCJkYWZ0YXJcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICBidXR0b25UeXBlPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICByb3VuZGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgYmxvY2s9e2ZhbHNlfVxyXG4gICAgICAgICAgICBpY29uT25seT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIERhZnRhclxyXG4gICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwic291cmNlUm9vdCI6IiJ9
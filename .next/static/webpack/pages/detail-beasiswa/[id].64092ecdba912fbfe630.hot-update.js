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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsLWJlYXNpc3dhL1tpZF0uanMiXSwibmFtZXMiOlsiRGV0YWlscyIsImJlYXNpc3dhIiwiZGF0YSIsInVzZXJuYW1lIiwiYmVhc2lzd2FfaWQiLCJpZCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlcnJvciIsIm5hbWUiLCJlbWFpbCIsImJvZHkiLCJwYXRobmFtZSIsInF1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBa0NBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzlCLE1BQU1DLElBQUksR0FBRztBQUNUQyxZQUFRLEVBQUUsTUFERDtBQUVUQyxlQUFXLEVBQUVILFFBQVEsQ0FBQ0k7QUFGYixHQUFiO0FBS0FDLG1EQUFBLENBQ00sb0NBRE4sRUFDMkNKLElBRDNDLEVBRUNLLElBRkQsQ0FFTSxVQUFBQyxRQUFRLEVBQUk7QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ04sSUFBVCxDQUFjUyxPQUExQjtBQUNILEdBSkQsV0FLTyxVQUFBQyxLQUFLLEVBQUk7QUFDWkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDSCxHQVBEO0FBU0Esc0JBQ0E7QUFBQSw0QkFDSTtBQUFJLFVBQUksRUFBQyxPQUFUO0FBQWlCLGVBQVMsRUFBQyx5QkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0JBQWQ7QUFBQSxrQkFBeUNYLFFBQVEsQ0FBQ1k7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLHlCQUFiO0FBQUEsa0JBQXlDWixRQUFRLENBQUNhO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUcsaUJBQVMsRUFBQyx5QkFBYjtBQUFBLGtCQUF5Q2IsUUFBUSxDQUFDYztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFRSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBU0k7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx3QkFBZDtBQUFBLGtCQUF5Q2QsUUFBUSxDQUFDWTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFHLGlCQUFTLEVBQUMseUJBQWI7QUFBQSxrQkFBeUNaLFFBQVEsQ0FBQ2E7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBRyxpQkFBUyxFQUFDLHlCQUFiO0FBQUEsa0JBQXlDYixRQUFRLENBQUNjO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixlQWNJLDhEQUFDLG9FQUFEO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQUEsNkJBQTJCLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUNDLGtCQUFRLEVBQUUsT0FBWDtBQUFvQkMsZUFBSyxFQUFDO0FBQUNmLGdCQUFJLEVBQUVnQixJQUFJLENBQUNDLFNBQUwsQ0FBZWxCLFFBQVEsQ0FBQ0ksRUFBeEI7QUFBUDtBQUExQixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQThCSCxDQTdDRDs7S0FBTUwsTzs7QUErQ04sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsLWJlYXNpc3dhL1tpZF0uNjQwOTJlY2RiYTkxMmZiZmU2MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzJyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGJlYXNpc3dhID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtpZDogYmVhc2lzd2EuaWQudG9TdHJpbmcoKSB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gIGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IENvb2tpZXMuZ2V0SXRlbSgndXNlcm5hbWUnKVxyXG4gICAgY29uc29sZS5sb2codXNlcm5hbWUpXHJcbiAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9jb21tZW50cy8nICsgaWQpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlcylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgYmVhc2lzd2E6IGRhdGEgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgRGV0YWlscyA9ICh7IGJlYXNpc3dhIH0pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwidXNlclwiLFxyXG4gICAgICAgIGJlYXNpc3dhX2lkOiBiZWFzaXN3YS5pZFxyXG4gICAgfVxyXG5cclxuICAgIGF4aW9zXHJcbiAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9iZWFzaXN3YS9jZWtcIixkYXRhKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICA8ZGl2ID5cclxuICAgICAgICA8aDEgaHJlZj1cIi9mb3JtXCIgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtM3hsIG0tMTBcIj5EZXRhaWwgQmVhc2lzd2E8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC0yeGwgbS01XCI+eyBiZWFzaXN3YS5uYW1lIH08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1iYXNlIG0tNVwiPnsgYmVhc2lzd2EuZW1haWwgfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtYmFzZSBtLTVcIj57IGJlYXNpc3dhLmJvZHkgfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LTN4bCBtLTEwXCI+UGVyc3lhcmF0YW4gQmVhc2lzd2E8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC0yeGwgbS01XCI+eyBiZWFzaXN3YS5uYW1lIH08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1iYXNlIG0tNVwiPnsgYmVhc2lzd2EuZW1haWwgfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtYmFzZSBtLTVcIj57IGJlYXNpc3dhLmJvZHkgfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImRhZnRhclwiPjxMaW5rIGhyZWY9e3twYXRobmFtZTogJy9mb3JtJywgcXVlcnk6e2RhdGE6IEpTT04uc3RyaW5naWZ5KGJlYXNpc3dhLmlkKX19fT5EYWZ0YXI8L0xpbms+PC9CdXR0b24+XHJcbiAgICAgICAgey8qIDxCdXR0b24gaHJlZj1cIi9mb3JtXCIgY2xhc3NOYW1lPVwiZGFmdGFyXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgcm91bmRlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGJsb2NrPXtmYWxzZX1cclxuICAgICAgICAgICAgaWNvbk9ubHk9e2ZhbHNlfVxyXG4gICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBEYWZ0YXJcclxuICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==
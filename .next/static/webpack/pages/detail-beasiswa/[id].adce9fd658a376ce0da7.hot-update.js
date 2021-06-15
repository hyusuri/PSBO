self["webpackHotUpdate_N_E"]("pages/detail-beasiswa/[id]",{

/***/ "./pages/detail-beasiswa/[id].js":
/*!***************************************!*\
  !*** ./pages/detail-beasiswa/[id].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
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
  //let cookie = Cookies.get()
  //console.log(cookie.username)
  var data = {
    username: "username",
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
      lineNumber: 57,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "font-sans text-2xl m-5",
        children: beasiswa.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-sans text-3xl m-10",
      children: "Persyaratan Beasiswa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "font-sans text-2xl m-5",
        children: beasiswa.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "font-sans text-base m-5",
        children: beasiswa.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
        lineNumber: 70,
        columnNumber: 36
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_c = Details;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsLWJlYXNpc3dhL1tpZF0uanMiXSwibmFtZXMiOlsiRGV0YWlscyIsImJlYXNpc3dhIiwiZGF0YSIsInVzZXJuYW1lIiwiYmVhc2lzd2FfaWQiLCJpZCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlcnJvciIsIm5hbWUiLCJlbWFpbCIsImJvZHkiLCJwYXRobmFtZSIsInF1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBa0NBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzlCO0FBQ0E7QUFDQSxNQUFNQyxJQUFJLEdBQUc7QUFDVEMsWUFBUSxFQUFFLFVBREQ7QUFFVEMsZUFBVyxFQUFFSCxRQUFRLENBQUNJO0FBRmIsR0FBYjtBQUlBQyxtREFBQSxDQUNNLG9DQUROLEVBQzJDSixJQUQzQyxFQUVDSyxJQUZELENBRU0sVUFBQUMsUUFBUSxFQUFJO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNOLElBQVQsQ0FBY1MsT0FBMUI7QUFDSCxHQUpELFdBS08sVUFBQUMsS0FBSyxFQUFJO0FBQ1pILFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0gsR0FQRDtBQVNBLHNCQUNBO0FBQUEsNEJBQ0k7QUFBSSxVQUFJLEVBQUMsT0FBVDtBQUFpQixlQUFTLEVBQUMseUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLHdCQUFkO0FBQUEsa0JBQXlDWCxRQUFRLENBQUNZO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUcsaUJBQVMsRUFBQyx5QkFBYjtBQUFBLGtCQUF5Q1osUUFBUSxDQUFDYTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFHLGlCQUFTLEVBQUMseUJBQWI7QUFBQSxrQkFBeUNiLFFBQVEsQ0FBQ2M7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBUUk7QUFBSSxlQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQVNJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0JBQWQ7QUFBQSxrQkFBeUNkLFFBQVEsQ0FBQ1k7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLHlCQUFiO0FBQUEsa0JBQXlDWixRQUFRLENBQUNhO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUcsaUJBQVMsRUFBQyx5QkFBYjtBQUFBLGtCQUF5Q2IsUUFBUSxDQUFDYztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosZUFjSSw4REFBQyxvRUFBRDtBQUFRLGVBQVMsRUFBQyxRQUFsQjtBQUFBLDZCQUEyQiw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRTtBQUFDQyxrQkFBUSxFQUFFLE9BQVg7QUFBb0JDLGVBQUssRUFBQztBQUFDZixnQkFBSSxFQUFFZ0IsSUFBSSxDQUFDQyxTQUFMLENBQWVsQixRQUFRLENBQUNJLEVBQXhCO0FBQVA7QUFBMUIsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUE4QkgsQ0E5Q0Q7O0tBQU1MLE87O0FBZ0ROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC1iZWFzaXN3YS9baWRdLmFkY2U5ZmQ2NThhMzc2Y2UwZGE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5cclxuLy9leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHMnKTtcclxuICAgIC8vY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgLy9jb25zdCBwYXRocyA9IGRhdGEubWFwKGJlYXNpc3dhID0+IHtcclxuICAgICAgLy8gIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgcGFyYW1zOiB7aWQ6IGJlYXNpc3dhLmlkLnRvU3RyaW5nKCkgfVxyXG4gICAgICAgLy8gfVxyXG4gICAgLy99KVxyXG5cclxuICAgIC8vcmV0dXJuIHtcclxuICAgICAgLy8gIHBhdGhzLFxyXG4gICAgICAgLy8gZmFsbGJhY2s6IGZhbHNlXHJcbiAgICAvL31cclxuXHJcbi8vfVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9ICBhc3luYyAoeyByZXEsIHJlc3V0IH0pID0+IHtcclxuICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5jb29raWVzO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9jb21tZW50cy8nICsgaWQpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlcylcclxuICAgIGxldCBjb2tvID0gQ29va2llcy5nZXQoKVxyXG4gICAgY29uc29sZS5sb2coY29rbylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgYmVhc2lzd2E6IGRhdGEgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgRGV0YWlscyA9ICh7IGJlYXNpc3dhIH0pID0+IHtcclxuICAgIC8vbGV0IGNvb2tpZSA9IENvb2tpZXMuZ2V0KClcclxuICAgIC8vY29uc29sZS5sb2coY29va2llLnVzZXJuYW1lKVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB1c2VybmFtZTogXCJ1c2VybmFtZVwiLFxyXG4gICAgICAgIGJlYXNpc3dhX2lkOiBiZWFzaXN3YS5pZFxyXG4gICAgfVxyXG4gICAgYXhpb3NcclxuICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2JlYXNpc3dhL2Nla1wiLGRhdGEpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoICBcclxuICAgIDxkaXYgPlxyXG4gICAgICAgIDxoMSBocmVmPVwiL2Zvcm1cIiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC0zeGwgbS0xMFwiPkRldGFpbCBCZWFzaXN3YTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LTJ4bCBtLTVcIj57IGJlYXNpc3dhLm5hbWUgfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2UgbS01XCI+eyBiZWFzaXN3YS5lbWFpbCB9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1iYXNlIG0tNVwiPnsgYmVhc2lzd2EuYm9keSB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtM3hsIG0tMTBcIj5QZXJzeWFyYXRhbiBCZWFzaXN3YTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LTJ4bCBtLTVcIj57IGJlYXNpc3dhLm5hbWUgfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2UgbS01XCI+eyBiZWFzaXN3YS5lbWFpbCB9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1iYXNlIG0tNVwiPnsgYmVhc2lzd2EuYm9keSB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZGFmdGFyXCI+PExpbmsgaHJlZj17e3BhdGhuYW1lOiAnL2Zvcm0nLCBxdWVyeTp7ZGF0YTogSlNPTi5zdHJpbmdpZnkoYmVhc2lzd2EuaWQpfX19PkRhZnRhcjwvTGluaz48L0J1dHRvbj5cclxuICAgICAgICB7LyogPEJ1dHRvbiBocmVmPVwiL2Zvcm1cIiBjbGFzc05hbWU9XCJkYWZ0YXJcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICBidXR0b25UeXBlPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICByb3VuZGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgYmxvY2s9e2ZhbHNlfVxyXG4gICAgICAgICAgICBpY29uT25seT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIERhZnRhclxyXG4gICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwic291cmNlUm9vdCI6IiJ9
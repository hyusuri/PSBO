exports.id = "component_navbar_js";
exports.ids = ["component_navbar_js"];
exports.modules = {

/***/ "./component/navbar.js":
/*!*****************************!*\
  !*** ./component/navbar.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\component\\navbar.js";





const Navbar = () => {
  const handleLogout = () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("username");
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("counter"); // setUser(null);

    localStorage.clear();
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "font-sans",
        href: "/home",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "font-sans",
        href: "/profile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "font-sans",
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          onClick: handleLogout,
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "font-sans",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "logo",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "/ipbscholar.png",
        width: 150,
        height: 60
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("token") === null || js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("token") === undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "font-sans",
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "font-sans",
        href: "/home",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "font-sans",
        href: "/profile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "font-sans",
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          onClick: handleLogout,
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc2JvLy4vY29tcG9uZW50L25hdmJhci5qcyIsIndlYnBhY2s6Ly9wc2JvL2lnbm9yZWR8RDpcXERhdGFcXEt1bGlhaFxcUFNCT1xcQWtoaXJcXFBTQk9cXHBzYm9cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJoYW5kbGVMb2dvdXQiLCJDb29raWVzIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixRQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QkMsMkRBQUEsQ0FBZSxPQUFmO0FBQ0FBLDJEQUFBLENBQWUsVUFBZjtBQUNBQSwyREFBQSxDQUFlLFNBQWYsRUFIeUIsQ0FJekI7O0FBQ0FDLGdCQUFZLENBQUNDLEtBQWI7QUFFQSx3QkFDRTtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUE0QixZQUFJLEVBQUMsT0FBakM7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQyxrREFBRDtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBNEIsWUFBSSxFQUFDLFVBQWpDO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBT0UsOERBQUMsa0RBQUQ7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQTRCLFlBQUksRUFBQyxRQUFqQztBQUFBLCtCQUNFO0FBQUcsaUJBQU8sRUFBRUgsWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQSxvQkFERjtBQWFELEdBcEJEOztBQXNCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFDLGlCQUFYO0FBQTZCLGFBQUssRUFBRSxHQUFwQztBQUF5QyxjQUFNLEVBQUU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFLR0Msb0RBQUEsQ0FBWSxPQUFaLE1BQXlCLElBQXpCLElBQWlDQSxvREFBQSxDQUFZLE9BQVosTUFBeUJHLFNBQTFELGdCQUNDO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQTRCLFlBQUksRUFBQyxRQUFqQztBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURELGdCQU9DO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQTRCLFlBQUksRUFBQyxPQUFqQztBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLDhEQUFDLGtEQUFEO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUE0QixZQUFJLEVBQUMsVUFBakM7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFPRSw4REFBQyxrREFBRDtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBNEIsWUFBSSxFQUFDLFFBQWpDO0FBQUEsK0JBQ0U7QUFBRyxpQkFBTyxFQUFFSixZQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBLG9CQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkJELENBbEREOztBQW9EQSwrREFBZUQsTUFBZixFOzs7Ozs7Ozs7O0FDekRBLGUiLCJmaWxlIjoiY29tcG9uZW50X25hdmJhcl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJuYW1lXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJjb3VudGVyXCIpO1xyXG4gICAgLy8gc2V0VXNlcihudWxsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiZm9udC1zYW5zXCIgaHJlZj1cIi9ob21lXCI+XHJcbiAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJmb250LXNhbnNcIiBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgIDxhPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImZvbnQtc2Fuc1wiIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZvbnQtc2Fuc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2lwYnNjaG9sYXIucG5nXCIgd2lkdGg9ezE1MH0gaGVpZ2h0PXs2MH0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Q29va2llcy5nZXQoXCJ0b2tlblwiKSA9PT0gbnVsbCB8fCBDb29raWVzLmdldChcInRva2VuXCIpID09PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImZvbnQtc2Fuc1wiIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgPGE+TG9naW48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImZvbnQtc2Fuc1wiIGhyZWY9XCIvaG9tZVwiPlxyXG4gICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiZm9udC1zYW5zXCIgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxhPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJmb250LXNhbnNcIiBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./component/adminNavbar.js":
/*!**********************************!*\
  !*** ./component/adminNavbar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdminNavbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Icon */ "@material-tailwind/react/Icon");
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/NavbarInput */ "@material-tailwind/react/NavbarInput");
/* harmony import */ var _material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Image */ "@material-tailwind/react/Image");
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Dropdown */ "@material-tailwind/react/Dropdown");
/* harmony import */ var _material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/DropdownItem */ "@material-tailwind/react/DropdownItem");
/* harmony import */ var _material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\component\\adminNavbar.js";






 // import ProfilePicture from "../public/profil.png";

function AdminNavbar({
  showSidebar,
  setShowSidebar
}) {
  //   const location = useLocation().pathname;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "bg-light-blue-500 md:ml-64 py-6 px-3",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "md:hidden",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
          color: "transparent",
          buttonType: "link",
          size: "lg",
          iconOnly: true,
          rounded: true,
          ripple: "light",
          onClick: () => setShowSidebar("left-0"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default()), {
            name: "menu",
            size: "2xl",
            color: "white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `absolute top-2 md:hidden ${showSidebar === "left-0" ? "left-64" : "-left-64"} z-50 transition-all duration-300`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
            color: "transparent",
            buttonType: "link",
            size: "lg",
            iconOnly: true,
            rounded: true,
            ripple: "light",
            onClick: () => setShowSidebar("-left-64"),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default()), {
              name: "close",
              size: "2xl",
              color: "white"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-between items-center w-full",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "uppercase text-white text-sm tracking-wider mt-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_4___default()), {
            placeholder: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "-mr-4 ml-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_6___default()), {
              color: "transparent",
              buttonText: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-12",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_5___default()), {
                  src: "./public/profil.png",
                  rounded: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this),
              rounded: true,
              style: {
                padding: 0,
                color: "transparent"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                color: "lightBlue",
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                color: "lightBlue",
                children: "Another Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                color: "lightBlue",
                children: "Something Else"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./component/sidebar.js":
/*!******************************!*\
  !*** ./component/sidebar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _material_tailwind_react_NavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/NavItem */ "@material-tailwind/react/NavItem");
/* harmony import */ var _material_tailwind_react_NavItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_NavItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/NavLink */ "@material-tailwind/react/NavLink");
/* harmony import */ var _material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _adminNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminNavbar */ "./component/adminNavbar.js");
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Icon */ "@material-tailwind/react/Icon");
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_Heading6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Heading6 */ "@material-tailwind/react/Heading6");
/* harmony import */ var _material_tailwind_react_Heading6__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Heading6__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\component\\sidebar.js";




 // import { Link } from "react-router-dom";




 // import { Link } from "@material-ui/icons";

function Sidebar() {
  const {
    0: showSidebar,
    1: setShowSidebar
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("-left-64");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-col items-stretch min-h-full flex-nowrap px-0 relative",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          target: "_blank",
          rel: "noreferrer",
          className: "mt-2 text-center w-full inline-block",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Heading6__WEBPACK_IMPORTED_MODULE_6___default()), {
            color: "gray",
            children: "IPB Scholar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "my-4 min-w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "flex-col min-w-full flex list-none",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "px-4 rounded-lg mb-2 text-gray-700",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "http://localhost:3000/admin" //   target="_blank"
                //   rel="noreferrer"
                ,
                className: "flex items-center gap-4 text-sm font-light py-3" //   active="blue"
                //   onMouseMove="dark"
                ,
                activeClassName: "bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdDashboard, {
                  size: "24px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, this), "Dashboard"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "px-4 rounded-lg mb-2 text-gray-700",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "http://localhost:3000/admin/tambah-beasiswa" //   target="_blank"
                //   rel="noreferrer"
                ,
                className: "flex items-center gap-4 text-sm font-light py-3",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdAddCircle, {
                  size: "24px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "blue",
                  children: "Tambah Beasiswa"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./component/table.js":
/*!****************************!*\
  !*** ./component/table.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScholarCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/Card */ "@material-tailwind/react/Card");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "@material-tailwind/react/CardHeader");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "@material-tailwind/react/CardBody");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\component\\table.js";





function ScholarCard() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2___default()), {
      color: "blue",
      contentPosition: "none",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-full flex items-center justify-between",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-white text-2xl",
          children: "Daftar Beasiswa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "items-center w-full bg-amber border-collapse",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "No"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Nama Beasiswa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Detail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Dakota Rice"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "amber",
                  buttonType: "link",
                  size: "lg",
                  style: {
                    padding: 8
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/admin/edit-beasiswa",
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "blueGray",
                  buttonType: "link",
                  size: "lg",
                  style: {
                    padding: 8
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/admin/list-pendaftar",
                    children: "Detail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Minerva Hooper"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "amber",
                  buttonType: "link",
                  size: "lg",
                  style: {
                    padding: 8
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/admin/edit-beasiswa",
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "blueGray",
                  buttonType: "link",
                  size: "lg",
                  style: {
                    padding: 8
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/admin/list-pendaftar",
                    children: "Detail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Sage Rodriguez"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "amber",
                  buttonType: "link",
                  size: "lg",
                  style: {
                    padding: 8
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/admin/edit-beasiswa",
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "blueGray",
                  buttonType: "link",
                  size: "lg",
                  style: {
                    padding: 8
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/admin/list-pendaftar",
                    children: "Detail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Philip Chaney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "amber",
                  buttonType: "link",
                  size: "lg",
                  style: {
                    padding: 8
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/admin/edit-beasiswa",
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "blueGray",
                  buttonType: "link",
                  size: "lg",
                  style: {
                    padding: 8
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/admin/list-pendaftar",
                    children: "Detail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_adminNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/adminNavbar */ "./component/adminNavbar.js");
/* harmony import */ var _component_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/sidebar */ "./component/sidebar.js");
/* harmony import */ var _component_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/table */ "./component/table.js");

var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\pages\\admin\\index.js";






const AdminPage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "IPB Scholar | Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_sidebar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mt-20 ml-72 mr-16",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_table__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/navbar */ "./component/navbar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./pages/login.js");
/* harmony import */ var _admin_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/index */ "./pages/admin/index.js");

var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\pages\\index.js";








const Dashboard = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "@material-tailwind/react/Button":
/*!**************************************************!*\
  !*** external "@material-tailwind/react/Button" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Button");;

/***/ }),

/***/ "@material-tailwind/react/Card":
/*!************************************************!*\
  !*** external "@material-tailwind/react/Card" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Card");;

/***/ }),

/***/ "@material-tailwind/react/CardBody":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/CardBody" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/CardBody");;

/***/ }),

/***/ "@material-tailwind/react/CardFooter":
/*!******************************************************!*\
  !*** external "@material-tailwind/react/CardFooter" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/CardFooter");;

/***/ }),

/***/ "@material-tailwind/react/CardHeader":
/*!******************************************************!*\
  !*** external "@material-tailwind/react/CardHeader" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/CardHeader");;

/***/ }),

/***/ "@material-tailwind/react/Dropdown":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/Dropdown" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Dropdown");;

/***/ }),

/***/ "@material-tailwind/react/DropdownItem":
/*!********************************************************!*\
  !*** external "@material-tailwind/react/DropdownItem" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/DropdownItem");;

/***/ }),

/***/ "@material-tailwind/react/Heading5":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/Heading5" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Heading5");;

/***/ }),

/***/ "@material-tailwind/react/Heading6":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/Heading6" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Heading6");;

/***/ }),

/***/ "@material-tailwind/react/Icon":
/*!************************************************!*\
  !*** external "@material-tailwind/react/Icon" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Icon");;

/***/ }),

/***/ "@material-tailwind/react/Image":
/*!*************************************************!*\
  !*** external "@material-tailwind/react/Image" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Image");;

/***/ }),

/***/ "@material-tailwind/react/Input":
/*!*************************************************!*\
  !*** external "@material-tailwind/react/Input" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Input");;

/***/ }),

/***/ "@material-tailwind/react/InputIcon":
/*!*****************************************************!*\
  !*** external "@material-tailwind/react/InputIcon" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/InputIcon");;

/***/ }),

/***/ "@material-tailwind/react/NavItem":
/*!***************************************************!*\
  !*** external "@material-tailwind/react/NavItem" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/NavItem");;

/***/ }),

/***/ "@material-tailwind/react/NavLink":
/*!***************************************************!*\
  !*** external "@material-tailwind/react/NavLink" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/NavLink");;

/***/ }),

/***/ "@material-tailwind/react/NavbarInput":
/*!*******************************************************!*\
  !*** external "@material-tailwind/react/NavbarInput" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/NavbarInput");;

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons");;

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

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_image_js","vendors-node_modules_next_link_js","vendors-node_modules_react-icons_md_index_esm_js","component_navbar_js","pages_login_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc2JvLy4vY29tcG9uZW50L2FkbWluTmF2YmFyLmpzIiwid2VicGFjazovL3BzYm8vLi9jb21wb25lbnQvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9wc2JvLy4vY29tcG9uZW50L3RhYmxlLmpzIiwid2VicGFjazovL3BzYm8vLi9wYWdlcy9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc2JvLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRCb2R5XCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkRm9vdGVyXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Ecm9wZG93blwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvRHJvcGRvd25JdGVtXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9IZWFkaW5nNVwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSGVhZGluZzZcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0ljb25cIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0ltYWdlXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRJY29uXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9OYXZJdGVtXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9OYXZMaW5rXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9OYXZiYXJJbnB1dFwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFkbWluTmF2YmFyIiwic2hvd1NpZGViYXIiLCJzZXRTaG93U2lkZWJhciIsInBhZGRpbmciLCJjb2xvciIsIlNpZGViYXIiLCJ1c2VTdGF0ZSIsIlNjaG9sYXJDYXJkIiwiQWRtaW5QYWdlIiwiRGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVlLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUMsYUFBRjtBQUFlQztBQUFmLENBQXJCLEVBQXNEO0FBQ25FO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxpRkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0UsOERBQUMsd0VBQUQ7QUFDRSxlQUFLLEVBQUMsYUFEUjtBQUVFLG9CQUFVLEVBQUMsTUFGYjtBQUdFLGNBQUksRUFBQyxJQUhQO0FBSUUsa0JBQVEsTUFKVjtBQUtFLGlCQUFPLE1BTFQ7QUFNRSxnQkFBTSxFQUFDLE9BTlQ7QUFPRSxpQkFBTyxFQUFFLE1BQU1BLGNBQWMsQ0FBQyxRQUFELENBUC9CO0FBQUEsaUNBU0UsOERBQUMsc0VBQUQ7QUFBTSxnQkFBSSxFQUFDLE1BQVg7QUFBa0IsZ0JBQUksRUFBQyxLQUF2QjtBQUE2QixpQkFBSyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUU7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Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JY29uXCI7XHJcbmltcG9ydCBOYXZiYXJJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L05hdmJhcklucHV0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0ltYWdlXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Ecm9wZG93bkl0ZW1cIjtcclxuLy8gaW1wb3J0IFByb2ZpbGVQaWN0dXJlIGZyb20gXCIuLi9wdWJsaWMvcHJvZmlsLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5OYXZiYXIoeyBzaG93U2lkZWJhciwgc2V0U2hvd1NpZGViYXIgfSkge1xyXG4gIC8vICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpLnBhdGhuYW1lO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy1saWdodC1ibHVlLTUwMCBtZDptbC02NCBweS02IHB4LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctZnVsbCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtZDpwci04IG1kOnBsLTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgaWNvbk9ubHlcclxuICAgICAgICAgICAgcm91bmRlZFxyXG4gICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTaWRlYmFyKFwibGVmdC0wXCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwibWVudVwiIHNpemU9XCIyeGxcIiBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMiBtZDpoaWRkZW4gJHtcclxuICAgICAgICAgICAgICBzaG93U2lkZWJhciA9PT0gXCJsZWZ0LTBcIiA/IFwibGVmdC02NFwiIDogXCItbGVmdC02NFwiXHJcbiAgICAgICAgICAgIH0gei01MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgaWNvbk9ubHlcclxuICAgICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTaWRlYmFyKFwiLWxlZnQtNjRcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xvc2VcIiBzaXplPVwiMnhsXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXdoaXRlIHRleHQtc20gdHJhY2tpbmctd2lkZXIgbXQtMVwiPlxyXG4gICAgICAgICAgICB7Lyoge2xvY2F0aW9uID09PSBcIi9cIlxyXG4gICAgICAgICAgICAgID8gXCJEQVNIQk9BUkRcIlxyXG4gICAgICAgICAgICAgIDogbG9jYXRpb24udG9VcHBlckNhc2UoKS5yZXBsYWNlKFwiL1wiLCBcIlwiKX0gKi99XHJcbiAgICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFySW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItNCBtbC02XCI+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiLi9wdWJsaWMvcHJvZmlsLnBuZ1wiIHJvdW5kZWQgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGNvbG9yPVwibGlnaHRCbHVlXCI+QWN0aW9uPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGNvbG9yPVwibGlnaHRCbHVlXCI+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gY29sb3I9XCJsaWdodEJsdWVcIj5Tb21ldGhpbmcgRWxzZTwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZERhc2hib2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBNZEFkZENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgTmF2SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L05hdkl0ZW1cIjtcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9OYXZMaW5rXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCBBZG1pbk5hdmJhciBmcm9tIFwiLi9hZG1pbk5hdmJhclwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0ljb25cIjtcclxuaW1wb3J0IEg2IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSGVhZGluZzZcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBbc2hvd1NpZGViYXIsIHNldFNob3dTaWRlYmFyXSA9IHVzZVN0YXRlKFwiLWxlZnQtNjRcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8QWRtaW5OYXZiYXIgc2hvd1NpZGViYXI9e3Nob3dTaWRlYmFyfSBzZXRTaG93U2lkZWJhcj17c2V0U2hvd1NpZGViYXJ9IC8+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaC1zY3JlZW4gZml4ZWQgdG9wLTAgbWQ6bGVmdC0wICR7c2hvd1NpZGViYXJ9IG92ZXJmbG93LXktYXV0byBmbGV4LXJvdyBmbGV4LW5vd3JhcCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIGJnLXdoaXRlIHctNjQgei0xMCBweS00IHB4LTYgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwYH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgaXRlbXMtc3RyZXRjaCBtaW4taC1mdWxsIGZsZXgtbm93cmFwIHB4LTAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHRleHQtY2VudGVyIHctZnVsbCBpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SDYgY29sb3I9XCJncmF5XCI+SVBCIFNjaG9sYXI8L0g2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS00IG1pbi13LWZ1bGxcIiAvPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgtY29sIG1pbi13LWZ1bGwgZmxleCBsaXN0LW5vbmVcIj5cclxuICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgdG89XCIvXCJcclxuICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGZvbnQtbGlnaHQgcHgtNCBweS0zIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by10ciBmcm9tLWxpZ2h0LWJsdWUtNTAwIHRvLWxpZ2h0LWJsdWUtNzAwIHRleHQtd2hpdGUgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1kRGFzaGJvYXJkIHNpemU9XCIyNHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgdG89XCIvc2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgZm9udC1saWdodCBweC00IHB5LTMgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXRyIGZyb20tbGlnaHQtYmx1ZS01MDAgdG8tbGlnaHQtYmx1ZS03MDAgdGV4dC13aGl0ZSBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2V0dGluZ3NcIiBzaXplPVwiMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG1iLTIgXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICB0bz1cIi90YWJsZXNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgZm9udC1saWdodCBweC00IHB5LTMgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXRyIGZyb20tbGlnaHQtYmx1ZS01MDAgdG8tbGlnaHQtYmx1ZS03MDAgdGV4dC13aGl0ZSBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidG9jXCIgc2l6ZT1cIjJ4bFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIFRhYmxlc1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgbWItMiB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICB0bz1cIi9tYXBzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGZvbnQtbGlnaHQgcHgtNCBweS0zIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by10ciBmcm9tLWxpZ2h0LWJsdWUtNTAwIHRvLWxpZ2h0LWJsdWUtNzAwIHRleHQtd2hpdGUgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cIm1hcFwiIHNpemU9XCIyeGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICBNYXBzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTQgcm91bmRlZC1sZyBtYi0yIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYWRtaW5cIlxyXG4gICAgICAgICAgICAgICAgICAvLyAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHRleHQtc20gZm9udC1saWdodCBweS0zXCJcclxuICAgICAgICAgICAgICAgICAgLy8gICBhY3RpdmU9XCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgLy8gICBvbk1vdXNlTW92ZT1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by10ciBmcm9tLWxpZ2h0LWJsdWUtNTAwIHRvLWxpZ2h0LWJsdWUtNzAwIHRleHQtd2hpdGUgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1kRGFzaGJvYXJkIHNpemU9XCIyNHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTQgcm91bmRlZC1sZyBtYi0yIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYWRtaW4vdGFtYmFoLWJlYXNpc3dhXCJcclxuICAgICAgICAgICAgICAgICAgLy8gICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAvLyAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktM1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNZEFkZENpcmNsZSBzaXplPVwiMjRweFwiPjwvTWRBZGRDaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsdWVcIj5UYW1iYWggQmVhc2lzd2E8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkQm9keVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjaG9sYXJDYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXIgY29sb3I9XCJibHVlXCIgY29udGVudFBvc2l0aW9uPVwibm9uZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5EYWZ0YXIgQmVhc2lzd2E8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciB3LWZ1bGwgYmctYW1iZXIgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMiB0ZXh0LXRlYWwtNTAwIGFsaWduLW1pZGRsZSBib3JkZXItYiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMjAwIHB5LTMgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBmb250LWxpZ2h0IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBOb1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC0yIHRleHQtdGVhbC01MDAgYWxpZ24tbWlkZGxlIGJvcmRlci1iIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS0yMDAgcHktMyB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwIGZvbnQtbGlnaHQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIE5hbWEgQmVhc2lzd2FcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMiB0ZXh0LXRlYWwtNTAwIGFsaWduLW1pZGRsZSBib3JkZXItYiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMjAwIHB5LTMgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBmb250LWxpZ2h0IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTIgdGV4dC10ZWFsLTUwMCBhbGlnbi1taWRkbGUgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTIwMCBweS0zIHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgZm9udC1saWdodCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgRGV0YWlsXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGFsaWduLW1pZGRsZSBmb250LWxpZ2h0IHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgcHgtMiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBhbGlnbi1taWRkbGUgZm9udC1saWdodCB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwIHB4LTIgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgRGFrb3RhIFJpY2VcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGFsaWduLW1pZGRsZSBmb250LWxpZ2h0IHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgcHgtMiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJhbWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogOCB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9lZGl0LWJlYXNpc3dhXCI+RWRpdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBhbGlnbi1taWRkbGUgZm9udC1saWdodCB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwIHB4LTIgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZUdyYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDggfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vbGlzdC1wZW5kYWZ0YXJcIj5EZXRhaWw8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgYWxpZ24tbWlkZGxlIGZvbnQtbGlnaHQgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBweC0yIHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGFsaWduLW1pZGRsZSBmb250LWxpZ2h0IHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgcHgtMiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBNaW5lcnZhIEhvb3BlclxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgYWxpZ24tbWlkZGxlIGZvbnQtbGlnaHQgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBweC0yIHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImFtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiA4IH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL2VkaXQtYmVhc2lzd2FcIj5FZGl0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGFsaWduLW1pZGRsZSBmb250LWxpZ2h0IHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgcHgtMiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibHVlR3JheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogOCB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9saXN0LXBlbmRhZnRhclwiPkRldGFpbDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBhbGlnbi1taWRkbGUgZm9udC1saWdodCB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwIHB4LTIgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgYWxpZ24tbWlkZGxlIGZvbnQtbGlnaHQgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBweC0yIHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFNhZ2UgUm9kcmlndWV6XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBhbGlnbi1taWRkbGUgZm9udC1saWdodCB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwIHB4LTIgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDggfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vZWRpdC1iZWFzaXN3YVwiPkVkaXQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgYWxpZ24tbWlkZGxlIGZvbnQtbGlnaHQgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBweC0yIHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWVHcmF5XCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiA4IH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL2xpc3QtcGVuZGFmdGFyXCI+RGV0YWlsPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGFsaWduLW1pZGRsZSBmb250LWxpZ2h0IHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgcHgtMiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBhbGlnbi1taWRkbGUgZm9udC1saWdodCB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwIHB4LTIgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgUGhpbGlwIENoYW5leVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgYWxpZ24tbWlkZGxlIGZvbnQtbGlnaHQgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBweC0yIHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImFtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiA4IH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL2VkaXQtYmVhc2lzd2FcIj5FZGl0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGFsaWduLW1pZGRsZSBmb250LWxpZ2h0IHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgcHgtMiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibHVlR3JheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogOCB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9saXN0LXBlbmRhZnRhclwiPkRldGFpbDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFiIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBBZG1pbk5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50L2FkbWluTmF2YmFyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnQvc2lkZWJhclwiO1xyXG5pbXBvcnQgU2Nob2xhckNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC90YWJsZVwiO1xyXG5cclxuY29uc3QgQWRtaW5QYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SVBCIFNjaG9sYXIgfCBBZG1pbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIHsvKiA8QWRtaW5OYXZiYXI+PC9BZG1pbk5hdmJhcj4gKi99XHJcbiAgICAgIDxTaWRlYmFyPjwvU2lkZWJhcj5cclxuICAgICAgey8qIDxUYWJiPjwvVGFiYj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgbWwtNzIgbXItMTZcIj5cclxuICAgICAgICA8U2Nob2xhckNhcmQ+PC9TY2hvbGFyQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5QYWdlO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnQvbmF2YmFyXCI7XHJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4vbG9naW5cIjtcclxuaW1wb3J0IEFkbWluUGFnZSBmcm9tIFwiLi9hZG1pbi9pbmRleFwiO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TG9naW5QYWdlPjwvTG9naW5QYWdlPlxyXG4gICAgICB7LyogPEFkbWluUGFnZT48L0FkbWluUGFnZT4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRCb2R5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEZvb3RlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRIZWFkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Ecm9wZG93blwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0Ryb3Bkb3duSXRlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSGVhZGluZzZcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JY29uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW1hZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L05hdkl0ZW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9OYXZMaW5rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTmF2YmFySW5wdXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
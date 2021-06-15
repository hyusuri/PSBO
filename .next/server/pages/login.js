(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
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
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Input */ "@material-tailwind/react/Input");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Card */ "@material-tailwind/react/Card");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "@material-tailwind/react/CardHeader");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "@material-tailwind/react/CardBody");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-tailwind/react/CardFooter */ "@material-tailwind/react/CardFooter");
/* harmony import */ var _material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-tailwind/react/InputIcon */ "@material-tailwind/react/InputIcon");
/* harmony import */ var _material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-tailwind/react/Heading5 */ "@material-tailwind/react/Heading5");
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\pages\\login.js";
// import { Button } from "@material-ui/core";


















const LoginPage = () => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");

  const dismissError = () => {
    setError({
      error: ""
    });
  };

  const handleUserChange = evt => {
    setUsername(evt.target.value);
  };

  const handlePassChange = evt => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const postData = {
      Username: username,
      Password: password
    };

    if (username === "") {
      alert("Username is required"); // return setError({ error: "Username is required" });
    }

    if (password === "") {
      alert("Password is required"); // return setState({ error: "Password is required" });
    }

    const axiosConfig = {
      headers: {
        "X-IPBAPI-TOKEN": "Bearer 1f70343f-5478-38da-8aa7-47d662d2078a",
        "Content-Type": "application/json"
      }
    };
    const api_call = await axios__WEBPACK_IMPORTED_MODULE_12___default().post("https://api.ipb.ac.id/v1/Authentication/LoginMahasiswa", postData, axiosConfig).then(res => {
      console.log("Login Success", res.data);
      const {
        Token,
        Username
      } = res.data;
      js_cookie__WEBPACK_IMPORTED_MODULE_13___default().set("token", Token, {
        sameSite: "strict",
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_13___default().set("username", Username, {
        sameSite: "strict",
        expires: 1
      });
      setError({
        error: ""
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_13___default().set("counter", 0);
      setUser(localStorage.getItem("userAuth"));
      localStorage.setItem("userAuth", res.data.Username);
      localStorage.setItem("token", Token);
      router.push("/home");
    }).catch(err => {
      console.log("API login error : ", err);
      setError({
        error: "Something went wrong"
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    // Prefetch the dashboard page
    router.prefetch("/home");
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "login grid justify-items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "IPB Scholar | Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      className: "sm:mx-10 md:mx-40 lg:mx-80 mt-32",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_5___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_6___default()), {
          color: "lightBlue",
          size: "lg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_10___default()), {
            color: "gray",
            children: "IPB Scholar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_7___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mt-4 mb-8 px-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
              type: "text",
              color: "lightBlue",
              placeholder: "Username",
              value: username,
              onChange: handleUserChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mb-4 px-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
              type: "password",
              color: "lightBlue",
              placeholder: "Password",
              value: password,
              onChange: handlePassChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_8___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
              color: "lightBlue",
              buttonType: "link",
              size: "lg",
              ripple: "dark",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

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

/***/ "@material-tailwind/react/Heading5":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/Heading5" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Heading5");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./pages/login.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc2JvLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRCb2R5XCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkRm9vdGVyXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9IZWFkaW5nNVwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImRpc21pc3NFcnJvciIsImhhbmRsZVVzZXJDaGFuZ2UiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3NDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3REYXRhIiwiVXNlcm5hbWUiLCJQYXNzd29yZCIsImFsZXJ0IiwiYXhpb3NDb25maWciLCJoZWFkZXJzIiwiYXBpX2NhbGwiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIlRva2VuIiwiQ29va2llcyIsInNhbWVTaXRlIiwiZXhwaXJlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicHVzaCIsImNhdGNoIiwiZXJyIiwidXNlRWZmZWN0IiwicHJlZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxnREFBUSxDQUFDLElBQUQsQ0FBaEM7QUFFQSxRQUFNQyxNQUFNLEdBQUdDLHVEQUFTLEVBQXhCO0FBQ0EsUUFBTTtB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Q0UsOERBQUMsd0VBQUQ7QUFDRSxtQkFBSyxFQUFDLFdBRFI7QUFFRSx3QkFBVSxFQUFDLE1BRmI7QUFHRSxrQkFBSSxFQUFDLElBSFA7QUFJRSxvQkFBTSxFQUFDLE1BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFERCxDQTNIRDs7QUE2SEEsK0RBQWVqQixTQUFmLEU7Ozs7Ozs7Ozs7O0FDbEpBLDZEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCI7XHJcbmltcG9ydCB7IE1kTG9jayB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkQm9keVwiO1xyXG5pbXBvcnQgQ2FyZEZvb3RlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRGb290ZXJcIjtcclxuaW1wb3J0IElucHV0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiO1xyXG5pbXBvcnQgSDUgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9IZWFkaW5nNVwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGRpc21pc3NFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yKHsgZXJyb3I6IFwiXCIgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVVc2VyQ2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgc2V0VXNlcm5hbWUoZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVQYXNzQ2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQoZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IHtcclxuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBQYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9O1xyXG4gICAgaWYgKHVzZXJuYW1lID09PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgIC8vIHJldHVybiBzZXRFcnJvcih7IGVycm9yOiBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAocGFzc3dvcmQgPT09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgLy8gcmV0dXJuIHNldFN0YXRlKHsgZXJyb3I6IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIiB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUlQQkFQSS1UT0tFTlwiOiBcIkJlYXJlciAxZjcwMzQzZi01NDc4LTM4ZGEtOGFhNy00N2Q2NjJkMjA3OGFcIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBhcGlfY2FsbCA9IGF3YWl0IGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuaXBiLmFjLmlkL3YxL0F1dGhlbnRpY2F0aW9uL0xvZ2luTWFoYXNpc3dhXCIsXHJcbiAgICAgICAgcG9zdERhdGEsXHJcbiAgICAgICAgYXhpb3NDb25maWdcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBTdWNjZXNzXCIsIHJlcy5kYXRhKTtcclxuICAgICAgICBjb25zdCB7IFRva2VuLCBVc2VybmFtZSB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgQ29va2llcy5zZXQoXCJ0b2tlblwiLCBUb2tlbiwgeyBzYW1lU2l0ZTogXCJzdHJpY3RcIiwgZXhwaXJlczogMSB9KTtcclxuICAgICAgICBDb29raWVzLnNldChcInVzZXJuYW1lXCIsIFVzZXJuYW1lLCB7IHNhbWVTaXRlOiBcInN0cmljdFwiLCBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAgIHNldEVycm9yKHsgZXJyb3I6IFwiXCIgfSk7XHJcblxyXG4gICAgICAgIENvb2tpZXMuc2V0KFwiY291bnRlclwiLCAwKTtcclxuXHJcbiAgICAgICAgc2V0VXNlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJBdXRoXCIpKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyQXV0aFwiLCByZXMuZGF0YS5Vc2VybmFtZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBUb2tlbik7XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBUEkgbG9naW4gZXJyb3IgOiBcIiwgZXJyKTtcclxuICAgICAgICBzZXRFcnJvcih7IGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBQcmVmZXRjaCB0aGUgZGFzaGJvYXJkIHBhZ2VcclxuICAgIHJvdXRlci5wcmVmZXRjaChcIi9ob21lXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4gZ3JpZCBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SVBCIFNjaG9sYXIgfCBMb2dpbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBjbGFzc05hbWU9XCJzbTpteC0xMCBtZDpteC00MCBsZzpteC04MCBtdC0zMlwiXHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyIGNvbG9yPVwibGlnaHRCbHVlXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgIDxINSBjb2xvcj1cImdyYXlcIj5JUEIgU2Nob2xhcjwvSDU+XHJcbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcblxyXG4gICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItOCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0SWNvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVXNlckNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRJY29uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFzc0NoYW5nZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPE1kTG9jayBzaXplPVwiMjBweFwiPjwvTWRMb2NrPiAqL31cclxuICAgICAgICAgICAgICA8L0lucHV0SWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPENhcmRGb290ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkRm9vdGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEhlYWRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dEljb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
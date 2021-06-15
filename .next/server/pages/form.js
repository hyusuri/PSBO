(function() {
var exports = {};
exports.id = "pages/form";
exports.ids = ["pages/form"];
exports.modules = {

/***/ "./component/form.js":
/*!***************************!*\
  !*** ./component/form.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Input */ "@material-tailwind/react/Input");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! autoprefixer */ "autoprefixer");
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\component\\form.js";



 // import cookie from "cookie";





const Formulir = () => {
  const {
    0: nama,
    1: setNama
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: nim,
    1: setNIM
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: fakultas,
    1: setFakultas
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: departemen,
    1: setDepartemen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: ipk,
    1: setIPK
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: rekening,
    1: setRekening
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: semester,
    1: setSemester
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: link_kk,
    1: setLink_kk
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: link_ktm,
    1: setLink_ktm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  let cookies = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get(); // console.log("token", cookies.token);

  let axiosConfig = {
    headers: {
      "X-IPBAPI-TOKEN": "Bearer 1f70343f-5478-38da-8aa7-47d662d2078a",
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies.token
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://api.ipb.ac.id/v1/Orang/Mahasiswa/BiodataSaya", axiosConfig).then(res => {
      console.log("GET Orang", res.data);
      const {
        Nama,
        NIM,
        Fakultas,
        Departemen
      } = res.data;
      setNama(Nama);
      setNIM(NIM);
      setFakultas(Fakultas);
      setDepartemen(Departemen);
      setLink_kk(cookies.link_kk);
      setLink_ktm(cookies.link_ktm);
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://api.ipb.ac.id/v1/nilai/Akademik/IndeksPrestasiSaya", axiosConfig).then(res => {
      let data = res.data;

      for (var i = 0; i < res.data.length; i++) {
        if (data[i].IP === 0.0) {
          data = data[i];
          break;
        }
      }

      let lastIndex = res.data.length; // console.log("GET API Nilai", res.data[lastIndex - 1]);

      let last = res.data[lastIndex - 1]; // console.log(last.IPK);

      setIPK(data.IPK);
      setSemester(data.SemesterMahasiswa);
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://api.ipb.ac.id/v1/nilai/Akademik/NilaiSaya", axiosConfig).then(res => {
      // let last = res.data.length - 1;
      console.log("GET API Akademik", res.data);
    });
  }, []);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const foo = params.get('data');

  const handleSubmit = evt => {
    evt.preventDefault();
    let counter = count + 1;
    setCount(counter);
    console.log("submitCount", counter);
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("counter", counter);
    const postdata = {
      username: cookies.username,
      beasiswa_id: foo,
      nama: nama,
      nim: nim,
      fakultas: fakultas,
      departemen: departemen,
      ipk: ipk,
      semester: semester,
      no_rekening: rekening,
      link_ktm: link_ktm,
      link_kk: link_kk
    };
    console.log(postdata);
    axios__WEBPACK_IMPORTED_MODULE_5___default().post('http://localhost:3001/beasiswa/daftar', postdata).then(response => {
      console.log(response.data.message);

      if (response.data.message == "Sudah Terdaftar") {
        alert("Anda Sudah Terdaftar");
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_7___default().push("/detail-beasiswa/" + foo);
      }
    }).catch(err => {
      console.log(err.response);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid justify-items-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "input_section",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Formulir Beasiswa"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        id: "inputBeasiswa",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
            type: "text",
            color: "lightBlue",
            size: "regular",
            outline: true,
            placeholder: "Nama",
            value: nama,
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
            type: "text",
            color: "lightBlue",
            size: "regular",
            outline: true,
            placeholder: "NIM",
            value: nim,
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
            type: "text",
            color: "lightBlue",
            size: "regular",
            outline: true,
            placeholder: "Fakultas",
            value: fakultas,
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
            type: "text",
            color: "lightBlue",
            size: "regular",
            outline: true,
            placeholder: "Departemen",
            value: departemen,
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
            type: "number",
            color: "lightBlue",
            size: "regular",
            outline: true,
            placeholder: "IPK",
            value: ipk,
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
            type: "number",
            color: "lightBlue",
            size: "regular",
            outline: true,
            placeholder: "Semester",
            value: semester,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
            type: "number",
            color: "lightBlue",
            size: "regular",
            onChange: e => setRekening(e.target.value),
            outline: true,
            placeholder: "Nomor Rekening",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "mr-5",
            for: "ktm",
            children: "Scan Kartu Tanda Mahasiswa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            id: "ktm",
            name: "cars",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "",
              selected: true,
              disabled: true,
              hidden: true,
              children: "Pilih Berkas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "ktm",
              children: "Kartu Tanda Mahasiswa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "kk",
              children: "Kartu Keluarga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "mr-5",
            for: "ktm",
            children: "Scan Kartu Keluarga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "md:mx-16 sm:mr-16",
            id: "ktm",
            name: "cars",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "",
              selected: true,
              disabled: true,
              hidden: true,
              children: "Pilih Berkas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: link_ktm,
              children: "Kartu Tanda Mahasiswa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: link_kk,
              children: "Kartu Keluarga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
          id: "beasiswaSubmit",
          type: "submit",
          children: "Daftar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Formulir);

/***/ }),

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/form */ "./component/form.js");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Input */ "@material-tailwind/react/Input");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\pages\\form.js";
// import { Button } from "@material-ui/core";








const formSubmit = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "IPB Scholar | Daftar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl m-10",
        children: "Daftar Beasiswa"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_form__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (formSubmit);

/***/ }),

/***/ "@material-tailwind/react/Button":
/*!**************************************************!*\
  !*** external "@material-tailwind/react/Button" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Button");;

/***/ }),

/***/ "@material-tailwind/react/Input":
/*!*************************************************!*\
  !*** external "@material-tailwind/react/Input" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Input");;

/***/ }),

/***/ "autoprefixer":
/*!*******************************!*\
  !*** external "autoprefixer" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("autoprefixer");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./pages/form.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc2JvLy4vY29tcG9uZW50L2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHNiby8uL3BhZ2VzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0XCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcImF1dG9wcmVmaXhlclwiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vcHNiby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3BzYm8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wc2JvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9ybXVsaXIiLCJuYW1hIiwic2V0TmFtYSIsInVzZVN0YXRlIiwibmltIiwic2V0TklNIiwiZmFrdWx0YXMiLCJzZXRGYWt1bHRhcyIsImRlcGFydGVtZW4iLCJzZXREZXBhcnRlbWVuIiwiaXBrIiwic2V0SVBLIiwicmVrZW5pbmciLCJzZXRSZWtlbmluZyIsInNlbWVzdGVyIiwic2V0U2VtZXN0ZXIiLCJjb3VudCIsInNldENvdW50IiwibGlua19rayIsInNldExpbmtfa2siLCJsaW5rX2t0bSIsInNldExpbmtfa3RtIiwiY29va2llcyIsIkNvb2tpZXMiLCJheGlvc0NvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIk5hbWEiLCJOSU0iLCJGYWt1bHRhcyIsIkRlcGFydGVtZW4iLCJpIiwibGVuZ3RoIiwiSVAiLCJsYXN0SW5kZXgiLCJsYXN0IiwiSVBLIiwiU2VtZXN0ZXJNYWhhc2lzd2EiLCJzZWFyY2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZvbyIsImdldCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY291bnRlciIsInBvc3RkYXRhIiwidXNlcm5hbWUiLCJiZWFzaXN3YV9pZCIsIm5vX3Jla2VuaW5nIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiYWxlcnQiLCJyb3V0ZXIiLCJjYXRjaCIsImVyciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDSyxVQUFEO0FBQUEsT0FBYUM7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QVJGO0FBQUEsa0JBREY7QUFZRCxDQWJEOztBQWVBLCtEQUFlQSxVQUFmLEU7Ozs7Ozs7Ozs7O0FDeEJBLDZEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuLy8gaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEZvcm11bGlyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1hLCBzZXROYW1hXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuaW0sIHNldE5JTV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmFrdWx0YXMsIHNldEZha3VsdGFzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXBhcnRlbWVuLCBzZXREZXBhcnRlbWVuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpcGssIHNldElQS10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVrZW5pbmcsIHNldFJla2VuaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZW1lc3Rlciwgc2V0U2VtZXN0ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbGlua19raywgc2V0TGlua19ra10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua19rdG0sIHNldExpbmtfa3RtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBsZXQgY29va2llcyA9IENvb2tpZXMuZ2V0KCk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJ0b2tlblwiLCBjb29raWVzLnRva2VuKTtcclxuXHJcbiAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlgtSVBCQVBJLVRPS0VOXCI6IFwiQmVhcmVyIDFmNzAzNDNmLTU0NzgtMzhkYS04YWE3LTQ3ZDY2MmQyMDc4YVwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBjb29raWVzLnRva2VuLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHBzOi8vYXBpLmlwYi5hYy5pZC92MS9PcmFuZy9NYWhhc2lzd2EvQmlvZGF0YVNheWFcIiwgYXhpb3NDb25maWcpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdFVCBPcmFuZ1wiLCByZXMuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgeyBOYW1hLCBOSU0sIEZha3VsdGFzLCBEZXBhcnRlbWVuIH0gPSByZXMuZGF0YTtcclxuICAgICAgICBzZXROYW1hKE5hbWEpO1xyXG4gICAgICAgIHNldE5JTShOSU0pO1xyXG4gICAgICAgIHNldEZha3VsdGFzKEZha3VsdGFzKTtcclxuICAgICAgICBzZXREZXBhcnRlbWVuKERlcGFydGVtZW4pO1xyXG4gICAgICAgIHNldExpbmtfa2soY29va2llcy5saW5rX2trKTtcclxuICAgICAgICBzZXRMaW5rX2t0bShjb29raWVzLmxpbmtfa3RtKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuaXBiLmFjLmlkL3YxL25pbGFpL0FrYWRlbWlrL0luZGVrc1ByZXN0YXNpU2F5YVwiLFxyXG4gICAgICAgIGF4aW9zQ29uZmlnXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGlmIChkYXRhW2ldLklQID09PSAwLjApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IHJlcy5kYXRhLmxlbmd0aDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdFVCBBUEkgTmlsYWlcIiwgcmVzLmRhdGFbbGFzdEluZGV4IC0gMV0pO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcmVzLmRhdGFbbGFzdEluZGV4IC0gMV07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGFzdC5JUEspO1xyXG4gICAgICAgIHNldElQSyhkYXRhLklQSyk7XHJcbiAgICAgICAgc2V0U2VtZXN0ZXIoZGF0YS5TZW1lc3Rlck1haGFzaXN3YSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwczovL2FwaS5pcGIuYWMuaWQvdjEvbmlsYWkvQWthZGVtaWsvTmlsYWlTYXlhXCIsIGF4aW9zQ29uZmlnKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGxhc3QgPSByZXMuZGF0YS5sZW5ndGggLSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIEFQSSBBa2FkZW1pa1wiLCByZXMuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKTtcclxuICAgIGNvbnN0IGZvbyA9IHBhcmFtcy5nZXQoJ2RhdGEnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY291bnRlciA9IGNvdW50ICsgMTtcclxuICAgIHNldENvdW50KGNvdW50ZXIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzdWJtaXRDb3VudFwiLCBjb3VudGVyKTtcclxuICAgIENvb2tpZXMuc2V0KFwiY291bnRlclwiLCBjb3VudGVyKTtcclxuXHJcbiAgICBjb25zdCBwb3N0ZGF0YT17XHJcbiAgICAgIHVzZXJuYW1lOiBjb29raWVzLnVzZXJuYW1lLFxyXG4gICAgICBiZWFzaXN3YV9pZDogZm9vLFxyXG4gICAgICBuYW1hOiBuYW1hLFxyXG4gICAgICBuaW06IG5pbSxcclxuICAgICAgZmFrdWx0YXM6IGZha3VsdGFzLFxyXG4gICAgICBkZXBhcnRlbWVuOiBkZXBhcnRlbWVuLFxyXG4gICAgICBpcGs6IGlwayxcclxuICAgICAgc2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICBub19yZWtlbmluZzogcmVrZW5pbmcsXHJcbiAgICAgIGxpbmtfa3RtOiBsaW5rX2t0bSxcclxuICAgICAgbGlua19razogbGlua19ra1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocG9zdGRhdGEpXHJcblxyXG4gICAgYXhpb3NcclxuXHRcdFx0LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9iZWFzaXN3YS9kYWZ0YXInLCBwb3N0ZGF0YSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT0gXCJTdWRhaCBUZXJkYWZ0YXJcIil7XHJcbiAgICAgICAgICBhbGVydChcIkFuZGEgU3VkYWggVGVyZGFmdGFyXCIpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9kZXRhaWwtYmVhc2lzd2EvXCIrZm9vKVxyXG4gICAgICAgIH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyLnJlc3BvbnNlKVxyXG5cdFx0XHR9KVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW5wdXRfc2VjdGlvblwiPlxyXG4gICAgICAgIDxoMj5Gb3JtdWxpciBCZWFzaXN3YTwvaDI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJpbnB1dEJlYXNpc3dhXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1hXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtYX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOSU1cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuaW19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmFrdWx0YXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmYWt1bHRhc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXBhcnRlbWVuXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0ZW1lbn1cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgICAgb3V0bGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklQS1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lwa31cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgICAgb3V0bGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbWVzdGVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VtZXN0ZXJ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFJla2VuaW5nKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tb3IgUmVrZW5pbmdcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTVcIiBmb3I9XCJrdG1cIj5cclxuICAgICAgICAgICAgICBTY2FuIEthcnR1IFRhbmRhIE1haGFzaXN3YVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwia3RtXCIgbmFtZT1cImNhcnNcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgUGlsaWggQmVya2FzXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImt0bVwiPkthcnR1IFRhbmRhIE1haGFzaXN3YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJra1wiPkthcnR1IEtlbHVhcmdhPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtci01XCIgZm9yPVwia3RtXCI+XHJcbiAgICAgICAgICAgICAgU2NhbiBLYXJ0dSBLZWx1YXJnYVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cIm1kOm14LTE2IHNtOm1yLTE2XCIgaWQ9XCJrdG1cIiBuYW1lPVwiY2Fyc1wiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICBQaWxpaCBCZXJrYXNcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtsaW5rX2t0bX0+S2FydHUgVGFuZGEgTWFoYXNpc3dhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bGlua19ra30+S2FydHUgS2VsdWFyZ2E8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b24gaWQ9XCJiZWFzaXN3YVN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgRGFmdGFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxpcjtcclxuIiwiLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtdWxpciBmcm9tIFwiLi4vY29tcG9uZW50L2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiO1xyXG5cclxuY29uc3QgZm9ybVN1Ym1pdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPklQQiBTY2hvbGFyIHwgRGFmdGFyPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtLTEwXCI+RGFmdGFyIEJlYXNpc3dhPC9oMT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Rm9ybXVsaXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtU3VibWl0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF1dG9wcmVmaXhlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
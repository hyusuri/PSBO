self["webpackHotUpdate_N_E"]("pages/form",{

/***/ "./component/form.js":
/*!***************************!*\
  !*** ./component/form.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Input */ "./node_modules/@material-tailwind/react/Input.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! autoprefixer */ "./node_modules/autoprefixer/lib/autoprefixer.js");
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Data\\Kuliah\\PSBO\\Akhir\\PSBO\\psbo\\component\\form.js",
    _this = undefined,
    _s = $RefreshSig$();




 // import cookie from "cookie";





var Formulir = function Formulir() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      nama = _useState[0],
      setNama = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      nim = _useState2[0],
      setNIM = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      fakultas = _useState3[0],
      setFakultas = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      departemen = _useState4[0],
      setDepartemen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      ipk = _useState5[0],
      setIPK = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      rekening = _useState6[0],
      setRekening = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      semester = _useState7[0],
      setSemester = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      count = _useState8[0],
      setCount = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      link_kk = _useState9[0],
      setLink_kk = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      link_ktm = _useState10[0],
      setLink_ktm = _useState10[1];

  var cookies = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get(); // console.log("token", cookies.token);

  var axiosConfig = {
    headers: {
      "X-IPBAPI-TOKEN": "Bearer 1f70343f-5478-38da-8aa7-47d662d2078a",
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies.token
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://api.ipb.ac.id/v1/Orang/Mahasiswa/BiodataSaya", axiosConfig).then(function (res) {
      console.log("GET Orang", res.data);
      var _res$data = res.data,
          Nama = _res$data.Nama,
          NIM = _res$data.NIM,
          Fakultas = _res$data.Fakultas,
          Departemen = _res$data.Departemen;
      setNama(Nama);
      setNIM(NIM);
      setFakultas(Fakultas);
      setDepartemen(Departemen);
      setLink_kk(cookies.link_kk);
      setLink_ktm(cookies.link_ktm);
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://api.ipb.ac.id/v1/nilai/Akademik/IndeksPrestasiSaya", axiosConfig).then(function (res) {
      var data = res.data;

      for (var i = 0; i < res.data.length; i++) {
        if (data[i].IP === 0.0) {
          data = data[i];
          break;
        }
      }

      var lastIndex = res.data.length; // console.log("GET API Nilai", res.data[lastIndex - 1]);

      var last = res.data[lastIndex - 1]; // console.log(last.IPK);

      setIPK(data.IPK);
      setSemester(data.SemesterMahasiswa);
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://api.ipb.ac.id/v1/nilai/Akademik/NilaiSaya", axiosConfig).then(function (res) {
      // let last = res.data.length - 1;
      console.log("GET API Akademik", res.data);
    });
  }, []);
  var search = window.location.search;
  var params = new URLSearchParams(search);
  var foo = params.get('data');

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    var counter = count + 1;
    setCount(counter);
    console.log("submitCount", counter);
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("counter", counter);
    var postdata = {
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
    axios__WEBPACK_IMPORTED_MODULE_5___default().post('http://localhost:3001/beasiswa/daftar', postdata).then(function (response) {
      console.log(response.data.message);

      if (response.data.message == "Sudah Terdaftar") {
        alert("Anda Sudah Terdaftar");
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_7___default().push("/detail-beasiswa/" + foo);
      }
    })["catch"](function (err) {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        id: "inputBeasiswa",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
            type: "number",
            color: "lightBlue",
            size: "regular",
            onChange: function onChange(e) {
              return setRekening(e.target.value);
            },
            outline: true,
            placeholder: "Nomor Rekening",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "mr-5",
            "for": "ktm",
            children: "Scan Kartu Tanda Mahasiswa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "ktm",
              children: "Kartu Tanda Mahasiswa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "kk",
              children: "Kartu Keluarga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "mr-5",
            "for": "ktm",
            children: "Scan Kartu Keluarga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: link_ktm,
              children: "Kartu Tanda Mahasiswa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: link_kk,
              children: "Kartu Keluarga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          id: "beasiswaSubmit",
          type: "submit",
          children: "Daftar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_s(Formulir, "fmipSrSBMo57OqYrVUnS2t7MdMI=");

_c = Formulir;
/* harmony default export */ __webpack_exports__["default"] = (Formulir);

var _c;

$RefreshReg$(_c, "Formulir");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybXVsaXIiLCJ1c2VTdGF0ZSIsIm5hbWEiLCJzZXROYW1hIiwibmltIiwic2V0TklNIiwiZmFrdWx0YXMiLCJzZXRGYWt1bHRhcyIsImRlcGFydGVtZW4iLCJzZXREZXBhcnRlbWVuIiwiaXBrIiwic2V0SVBLIiwicmVrZW5pbmciLCJzZXRSZWtlbmluZyIsInNlbWVzdGVyIiwic2V0U2VtZXN0ZXIiLCJjb3VudCIsInNldENvdW50IiwibGlua19rayIsInNldExpbmtfa2siLCJsaW5rX2t0bSIsInNldExpbmtfa3RtIiwiY29va2llcyIsIkNvb2tpZXMiLCJheGlvc0NvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIk5hbWEiLCJOSU0iLCJGYWt1bHRhcyIsIkRlcGFydGVtZW4iLCJpIiwibGVuZ3RoIiwiSVAiLCJsYXN0SW5kZXgiLCJsYXN0IiwiSVBLIiwiU2VtZXN0ZXJNYWhhc2lzd2EiLCJzZWFyY2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZvbyIsImdldCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY291bnRlciIsInBvc3RkYXRhIiwidXNlcm5hbWUiLCJiZWFzaXN3YV9pZCIsIm5vX3Jla2VuaW5nIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiYWxlcnQiLCJyb3V0ZXIiLCJlcnIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNH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YWdlcy9mb3JtLjg3YmE4MGY3MDY0NTAzYzZmMTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuLy8gaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEZvcm11bGlyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1hLCBzZXROYW1hXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuaW0sIHNldE5JTV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmFrdWx0YXMsIHNldEZha3VsdGFzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXBhcnRlbWVuLCBzZXREZXBhcnRlbWVuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpcGssIHNldElQS10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVrZW5pbmcsIHNldFJla2VuaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZW1lc3Rlciwgc2V0U2VtZXN0ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbGlua19raywgc2V0TGlua19ra10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua19rdG0sIHNldExpbmtfa3RtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBsZXQgY29va2llcyA9IENvb2tpZXMuZ2V0KCk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJ0b2tlblwiLCBjb29raWVzLnRva2VuKTtcclxuXHJcbiAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlgtSVBCQVBJLVRPS0VOXCI6IFwiQmVhcmVyIDFmNzAzNDNmLTU0NzgtMzhkYS04YWE3LTQ3ZDY2MmQyMDc4YVwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBjb29raWVzLnRva2VuLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHBzOi8vYXBpLmlwYi5hYy5pZC92MS9PcmFuZy9NYWhhc2lzd2EvQmlvZGF0YVNheWFcIiwgYXhpb3NDb25maWcpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdFVCBPcmFuZ1wiLCByZXMuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgeyBOYW1hLCBOSU0sIEZha3VsdGFzLCBEZXBhcnRlbWVuIH0gPSByZXMuZGF0YTtcclxuICAgICAgICBzZXROYW1hKE5hbWEpO1xyXG4gICAgICAgIHNldE5JTShOSU0pO1xyXG4gICAgICAgIHNldEZha3VsdGFzKEZha3VsdGFzKTtcclxuICAgICAgICBzZXREZXBhcnRlbWVuKERlcGFydGVtZW4pO1xyXG4gICAgICAgIHNldExpbmtfa2soY29va2llcy5saW5rX2trKTtcclxuICAgICAgICBzZXRMaW5rX2t0bShjb29raWVzLmxpbmtfa3RtKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuaXBiLmFjLmlkL3YxL25pbGFpL0FrYWRlbWlrL0luZGVrc1ByZXN0YXNpU2F5YVwiLFxyXG4gICAgICAgIGF4aW9zQ29uZmlnXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGlmIChkYXRhW2ldLklQID09PSAwLjApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IHJlcy5kYXRhLmxlbmd0aDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdFVCBBUEkgTmlsYWlcIiwgcmVzLmRhdGFbbGFzdEluZGV4IC0gMV0pO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcmVzLmRhdGFbbGFzdEluZGV4IC0gMV07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGFzdC5JUEspO1xyXG4gICAgICAgIHNldElQSyhkYXRhLklQSyk7XHJcbiAgICAgICAgc2V0U2VtZXN0ZXIoZGF0YS5TZW1lc3Rlck1haGFzaXN3YSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwczovL2FwaS5pcGIuYWMuaWQvdjEvbmlsYWkvQWthZGVtaWsvTmlsYWlTYXlhXCIsIGF4aW9zQ29uZmlnKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGxhc3QgPSByZXMuZGF0YS5sZW5ndGggLSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIEFQSSBBa2FkZW1pa1wiLCByZXMuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKTtcclxuICAgIGNvbnN0IGZvbyA9IHBhcmFtcy5nZXQoJ2RhdGEnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY291bnRlciA9IGNvdW50ICsgMTtcclxuICAgIHNldENvdW50KGNvdW50ZXIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzdWJtaXRDb3VudFwiLCBjb3VudGVyKTtcclxuICAgIENvb2tpZXMuc2V0KFwiY291bnRlclwiLCBjb3VudGVyKTtcclxuXHJcbiAgICBjb25zdCBwb3N0ZGF0YT17XHJcbiAgICAgIHVzZXJuYW1lOiBjb29raWVzLnVzZXJuYW1lLFxyXG4gICAgICBiZWFzaXN3YV9pZDogZm9vLFxyXG4gICAgICBuYW1hOiBuYW1hLFxyXG4gICAgICBuaW06IG5pbSxcclxuICAgICAgZmFrdWx0YXM6IGZha3VsdGFzLFxyXG4gICAgICBkZXBhcnRlbWVuOiBkZXBhcnRlbWVuLFxyXG4gICAgICBpcGs6IGlwayxcclxuICAgICAgc2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICBub19yZWtlbmluZzogcmVrZW5pbmcsXHJcbiAgICAgIGxpbmtfa3RtOiBsaW5rX2t0bSxcclxuICAgICAgbGlua19razogbGlua19ra1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocG9zdGRhdGEpXHJcblxyXG4gICAgYXhpb3NcclxuXHRcdFx0LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9iZWFzaXN3YS9kYWZ0YXInLCBwb3N0ZGF0YSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT0gXCJTdWRhaCBUZXJkYWZ0YXJcIil7XHJcbiAgICAgICAgICBhbGVydChcIkFuZGEgU3VkYWggVGVyZGFmdGFyXCIpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9kZXRhaWwtYmVhc2lzd2EvXCIrZm9vKVxyXG4gICAgICAgIH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyLnJlc3BvbnNlKVxyXG5cdFx0XHR9KVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW5wdXRfc2VjdGlvblwiPlxyXG4gICAgICAgIDxoMj5Gb3JtdWxpciBCZWFzaXN3YTwvaDI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJpbnB1dEJlYXNpc3dhXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1hXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtYX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOSU1cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuaW19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmFrdWx0YXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmYWt1bHRhc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXBhcnRlbWVuXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0ZW1lbn1cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgICAgb3V0bGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklQS1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lwa31cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgICAgb3V0bGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbWVzdGVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VtZXN0ZXJ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFJla2VuaW5nKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tb3IgUmVrZW5pbmdcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTVcIiBmb3I9XCJrdG1cIj5cclxuICAgICAgICAgICAgICBTY2FuIEthcnR1IFRhbmRhIE1haGFzaXN3YVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwia3RtXCIgbmFtZT1cImNhcnNcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgUGlsaWggQmVya2FzXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImt0bVwiPkthcnR1IFRhbmRhIE1haGFzaXN3YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJra1wiPkthcnR1IEtlbHVhcmdhPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtci01XCIgZm9yPVwia3RtXCI+XHJcbiAgICAgICAgICAgICAgU2NhbiBLYXJ0dSBLZWx1YXJnYVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cIm1kOm14LTE2IHNtOm1yLTE2XCIgaWQ9XCJrdG1cIiBuYW1lPVwiY2Fyc1wiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICBQaWxpaCBCZXJrYXNcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtsaW5rX2t0bX0+S2FydHUgVGFuZGEgTWFoYXNpc3dhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bGlua19ra30+S2FydHUgS2VsdWFyZ2E8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b24gaWQ9XCJiZWFzaXN3YVN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgRGFmdGFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxpcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
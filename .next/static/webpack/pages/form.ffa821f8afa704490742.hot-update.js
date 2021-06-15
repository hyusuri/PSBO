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
      console.log(response.data);
      next_router__WEBPACK_IMPORTED_MODULE_7___default().push("/detail-beasiswa/" + foo);
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
        lineNumber: 118,
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
            lineNumber: 121,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
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
            lineNumber: 132,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
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
            lineNumber: 143,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
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
            lineNumber: 154,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
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
            lineNumber: 165,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
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
            lineNumber: 176,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
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
            lineNumber: 187,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "mr-5",
            "for": "ktm",
            children: "Scan Kartu Tanda Mahasiswa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
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
              lineNumber: 202,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "ktm",
              children: "Kartu Tanda Mahasiswa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "kk",
              children: "Kartu Keluarga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "mr-5",
            "for": "ktm",
            children: "Scan Kartu Keluarga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
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
              lineNumber: 214,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: link_ktm,
              children: "Kartu Tanda Mahasiswa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: link_kk,
              children: "Kartu Keluarga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          id: "beasiswaSubmit",
          type: "submit",
          children: "Daftar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybXVsaXIiLCJ1c2VTdGF0ZSIsIm5hbWEiLCJzZXROYW1hIiwibmltIiwic2V0TklNIiwiZmFrdWx0YXMiLCJzZXRGYWt1bHRhcyIsImRlcGFydGVtZW4iLCJzZXREZXBhcnRlbWVuIiwiaXBrIiwic2V0SVBLIiwicmVrZW5pbmciLCJzZXRSZWtlbmluZyIsInNlbWVzdGVyIiwic2V0U2VtZXN0ZXIiLCJjb3VudCIsInNldENvdW50IiwibGlua19rayIsInNldExpbmtfa2siLCJsaW5rX2t0bSIsInNldExpbmtfa3RtIiwiY29va2llcyIsIkNvb2tpZXMiLCJheGlvc0NvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIk5hbWEiLCJOSU0iLCJGYWt1bHRhcyIsIkRlcGFydGVtZW4iLCJpIiwibGVuZ3RoIiwiSVAiLCJsYXN0SW5kZXgiLCJsYXN0IiwiSVBLIiwiU2VtZXN0ZXJNYWhhc2lzd2EiLCJzZWFyY2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZvbyIsImdldCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY291bnRlciIsInBvc3RkYXRhIiwidXNlcm5hbWUiLCJiZWFzaXN3YV9pZCIsIm5vX3Jla2VuaW5nIiwicmVzcG9uc2UiLCJyb3V0ZXIiLCJlcnIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNHQywrQ0FBUSxDQUFDLEVBQUQs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aUJBOUVGLGVBMEZFO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsa0NBQ0U7QUFBTyxxQkFBUyxFQUFDLE1BQWpCO0FBQXdCLG1CQUFJLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBUSxxQkFBUyxFQUFDLG1CQUFsQjtBQUFzQyxjQUFFLEVBQUMsS0FBekM7QUFBK0MsZ0JBQUksRUFBQyxNQUFwRDtBQUFBLG9DQUNFO0FBQVEsbUJBQUssRUFBQyxFQUFkO0FBQWlCLHNCQUFRLE1BQXpCO0FBQTBCLHNCQUFRLE1BQWxDO0FBQW1DLG9CQUFNLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBUSxtQkFBSyxFQUFFOUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQUtFO0FBQVEsbUJBQUssRUFBRUYsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFGRixlQXNHRSw4REFBQyxvRUFBRDtBQUFRLFlBQUUsRUFBQyxnQkFBWDtBQUE0QixjQUFJLEVBQUMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlIRCxDQTFORDs7R0FBTWxCLFE7O0tBQUFBLFE7QUE0Tk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybS5mZmE4MjFmOGFmYTcwNDQ5MDc0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbi8vIGltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBGb3JtdWxpciA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtYSwgc2V0TmFtYV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmltLCBzZXROSU1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Zha3VsdGFzLCBzZXRGYWt1bHRhc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVwYXJ0ZW1lbiwgc2V0RGVwYXJ0ZW1lbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXBrLCBzZXRJUEtdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jla2VuaW5nLCBzZXRSZWtlbmluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VtZXN0ZXIsIHNldFNlbWVzdGVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xpbmtfa2ssIHNldExpbmtfa2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtfa3RtLCBzZXRMaW5rX2t0bV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgbGV0IGNvb2tpZXMgPSBDb29raWVzLmdldCgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgY29va2llcy50b2tlbik7XHJcblxyXG4gIGxldCBheGlvc0NvbmZpZyA9IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJYLUlQQkFQSS1UT0tFTlwiOiBcIkJlYXJlciAxZjcwMzQzZi01NDc4LTM4ZGEtOGFhNy00N2Q2NjJkMjA3OGFcIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgY29va2llcy50b2tlbixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwczovL2FwaS5pcGIuYWMuaWQvdjEvT3JhbmcvTWFoYXNpc3dhL0Jpb2RhdGFTYXlhXCIsIGF4aW9zQ29uZmlnKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHRVQgT3JhbmdcIiwgcmVzLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHsgTmFtYSwgTklNLCBGYWt1bHRhcywgRGVwYXJ0ZW1lbiB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgc2V0TmFtYShOYW1hKTtcclxuICAgICAgICBzZXROSU0oTklNKTtcclxuICAgICAgICBzZXRGYWt1bHRhcyhGYWt1bHRhcyk7XHJcbiAgICAgICAgc2V0RGVwYXJ0ZW1lbihEZXBhcnRlbWVuKTtcclxuICAgICAgICBzZXRMaW5rX2trKGNvb2tpZXMubGlua19rayk7XHJcbiAgICAgICAgc2V0TGlua19rdG0oY29va2llcy5saW5rX2t0bSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmlwYi5hYy5pZC92MS9uaWxhaS9Ba2FkZW1pay9JbmRla3NQcmVzdGFzaVNheWFcIixcclxuICAgICAgICBheGlvc0NvbmZpZ1xyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCByZXMuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBpZiAoZGF0YVtpXS5JUCA9PT0gMC4wKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSByZXMuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJHRVQgQVBJIE5pbGFpXCIsIHJlcy5kYXRhW2xhc3RJbmRleCAtIDFdKTtcclxuICAgICAgICBsZXQgbGFzdCA9IHJlcy5kYXRhW2xhc3RJbmRleCAtIDFdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxhc3QuSVBLKTtcclxuICAgICAgICBzZXRJUEsoZGF0YS5JUEspO1xyXG4gICAgICAgIHNldFNlbWVzdGVyKGRhdGEuU2VtZXN0ZXJNYWhhc2lzd2EpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9hcGkuaXBiLmFjLmlkL3YxL25pbGFpL0FrYWRlbWlrL05pbGFpU2F5YVwiLCBheGlvc0NvbmZpZylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vIGxldCBsYXN0ID0gcmVzLmRhdGEubGVuZ3RoIC0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdFVCBBUEkgQWthZGVtaWtcIiwgcmVzLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHNlYXJjaCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCk7XHJcbiAgICBjb25zdCBmb28gPSBwYXJhbXMuZ2V0KCdkYXRhJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNvdW50ZXIgPSBjb3VudCArIDE7XHJcbiAgICBzZXRDb3VudChjb3VudGVyKTtcclxuICAgIGNvbnNvbGUubG9nKFwic3VibWl0Q291bnRcIiwgY291bnRlcik7XHJcbiAgICBDb29raWVzLnNldChcImNvdW50ZXJcIiwgY291bnRlcik7XHJcblxyXG4gICAgY29uc3QgcG9zdGRhdGE9e1xyXG4gICAgICB1c2VybmFtZTogY29va2llcy51c2VybmFtZSxcclxuICAgICAgYmVhc2lzd2FfaWQ6IGZvbyxcclxuICAgICAgbmFtYTogbmFtYSxcclxuICAgICAgbmltOiBuaW0sXHJcbiAgICAgIGZha3VsdGFzOiBmYWt1bHRhcyxcclxuICAgICAgZGVwYXJ0ZW1lbjogZGVwYXJ0ZW1lbixcclxuICAgICAgaXBrOiBpcGssXHJcbiAgICAgIHNlbWVzdGVyOiBzZW1lc3RlcixcclxuICAgICAgbm9fcmVrZW5pbmc6IHJla2VuaW5nLFxyXG4gICAgICBsaW5rX2t0bTogbGlua19rdG0sXHJcbiAgICAgIGxpbmtfa2s6IGxpbmtfa2tcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHBvc3RkYXRhKVxyXG5cclxuICAgIGF4aW9zXHJcblx0XHRcdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYmVhc2lzd2EvZGFmdGFyJywgcG9zdGRhdGEpXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2RldGFpbC1iZWFzaXN3YS9cIitmb28pXHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSlcclxuXHRcdFx0fSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImlucHV0X3NlY3Rpb25cIj5cclxuICAgICAgICA8aDI+Rm9ybXVsaXIgQmVhc2lzd2E8L2gyPlxyXG4gICAgICAgIDxmb3JtIGlkPVwiaW5wdXRCZWFzaXN3YVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtYVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWF9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTklNXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmltfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgICAgb3V0bGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZha3VsdGFzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZmFrdWx0YXN9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVwYXJ0ZW1lblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RlcGFydGVtZW59XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJUEtcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpcGt9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW1lc3RlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbWVzdGVyfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRSZWtlbmluZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgb3V0bGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbW9yIFJla2VuaW5nXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtci01XCIgZm9yPVwia3RtXCI+XHJcbiAgICAgICAgICAgICAgU2NhbiBLYXJ0dSBUYW5kYSBNYWhhc2lzd2FcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImt0bVwiIG5hbWU9XCJjYXJzXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkIGRpc2FibGVkIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgIFBpbGloIEJlcmthc1xyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrdG1cIj5LYXJ0dSBUYW5kYSBNYWhhc2lzd2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2tcIj5LYXJ0dSBLZWx1YXJnYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXItNVwiIGZvcj1cImt0bVwiPlxyXG4gICAgICAgICAgICAgIFNjYW4gS2FydHUgS2VsdWFyZ2FcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJtZDpteC0xNiBzbTptci0xNlwiIGlkPVwia3RtXCIgbmFtZT1cImNhcnNcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgUGlsaWggQmVya2FzXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bGlua19rdG19PkthcnR1IFRhbmRhIE1haGFzaXN3YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2xpbmtfa2t9PkthcnR1IEtlbHVhcmdhPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QnV0dG9uIGlkPVwiYmVhc2lzd2FTdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIERhZnRhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsaXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
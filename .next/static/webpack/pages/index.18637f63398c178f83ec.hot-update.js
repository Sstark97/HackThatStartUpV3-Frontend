/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var _home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/odinsonthn/ULPGC/Otras cosas/dev/HackTheStartUpV3/Frontend/pages/login.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Login() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var emailRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  function handleLoginUser() {\n    return _handleLoginUser.apply(this, arguments);\n  }\n\n  function _handleLoginUser() {\n    _handleLoginUser = (0,_home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var _emailRef$current, _passwordRef$current;\n\n      var email, password, res, data, _user;\n\n      return _home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(emailRef === undefined || emailRef.current === undefined || emailRef.current === null)) {\n                _context.next = 4;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 4:\n              if (!(passwordRef === undefined || passwordRef.current === undefined || passwordRef.current === null)) {\n                _context.next = 6;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 6:\n              email = (_emailRef$current = emailRef.current) === null || _emailRef$current === void 0 ? void 0 : _emailRef$current.value;\n              password = (_passwordRef$current = passwordRef.current) === null || _passwordRef$current === void 0 ? void 0 : _passwordRef$current.value;\n\n              if (!(email === \"\" || password === \"\")) {\n                _context.next = 10;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 10:\n              console.log('hola');\n\n              if (!(typeof email !== 'undefined' && typeof password !== 'undefined')) {\n                _context.next = 30;\n                break;\n              }\n\n              _context.prev = 12;\n              _context.next = 15;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"http://localhost:3004/users?email=\".concat(email));\n\n            case 15:\n              res = _context.sent;\n              data = res.data;\n              console.log(data);\n              _user = data[0];\n              console.log(_user);\n\n              if (!(email !== _user.email && password !== _user.password)) {\n                _context.next = 22;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 22:\n              _context.next = 27;\n              break;\n\n            case 24:\n              _context.prev = 24;\n              _context.t0 = _context[\"catch\"](12);\n              console.log(_context.t0);\n\n            case 27:\n              next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/home');\n              emailRef.current.value = '';\n              passwordRef.current.value = '';\n\n            case 30:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[12, 24]]);\n    }));\n    return _handleLoginUser.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"d-flex flex-column w-100 justify-content-center align-items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        className: \"mt-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"mb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n            className: \"form-label\",\n            children: \"Email address\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            ref: emailRef,\n            type: \"email\",\n            className: \"form-control\",\n            id: \"exampleInputEmail1\",\n            \"aria-describedby\": \"emailHelp\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            id: \"emailHelp\",\n            className: \"form-text\",\n            children: \"We'll never share your email with anyone else.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"mb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n            className: \"form-label\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            ref: passwordRef,\n            type: \"password\",\n            className: \"form-control\",\n            id: \"exampleInputPassword1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: handleLoginUser,\n        className: \"btn btn-primary\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Login, \"6DhxLZ+GJDCkkkhhvbMVioCopn8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4udHN4P2Q3NWYiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZW1haWxSZWYiLCJ1c2VSZWYiLCJwYXNzd29yZFJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUxvZ2luVXNlciIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJlbWFpbCIsInZhbHVlIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJyZXMiLCJkYXRhIiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ05DLCtDQUFRLEVBREY7QUFBQSxNQUN2QkMsSUFEdUI7QUFBQSxNQUNqQkMsT0FEaUI7O0FBRTlCLE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7QUFDQSxNQUFNQyxXQUFXLEdBQUdELDZDQUFNLENBQW1CLElBQW5CLENBQTFCO0FBQ0EsTUFBTUUsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFKOEIsV0FNZkMsZUFOZTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyVkFNOUI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNLTCxRQUFRLEtBQUtNLFNBQWIsSUFBMEJOLFFBQVEsQ0FBQ08sT0FBVCxLQUFxQkQsU0FBL0MsSUFBNEROLFFBQVEsQ0FBQ08sT0FBVCxLQUFxQixJQUR0RjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLG9CQUdZTCxXQUFXLEtBQUtJLFNBQWhCLElBQTZCSixXQUFXLENBQUNLLE9BQVosS0FBd0JELFNBQXJELElBQWtFSixXQUFXLENBQUNLLE9BQVosS0FBd0IsSUFIdEc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFNUUMsbUJBTlIsd0JBTWdCUixRQUFRLENBQUNPLE9BTnpCLHNEQU1nQixrQkFBa0JFLEtBTmxDO0FBT1FDLHNCQVBSLDJCQU9tQlIsV0FBVyxDQUFDSyxPQVAvQix5REFPbUIscUJBQXFCRSxLQVB4Qzs7QUFBQSxvQkFTTUQsS0FBSyxLQUFLLEVBQVYsSUFBZ0JFLFFBQVEsS0FBSyxFQVRuQztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVlFQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjs7QUFaRixvQkFhSyxPQUFPSixLQUFQLEtBQWlCLFdBQWpCLElBQWdDLE9BQU9FLFFBQVAsS0FBb0IsV0FiekQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQWUwQkcsZ0RBQUEsNkNBQXVETCxLQUF2RCxFQWYxQjs7QUFBQTtBQWVjTSxpQkFmZDtBQWdCY0Msa0JBaEJkLEdBZ0I0QkQsR0FBRyxDQUFDQyxJQWhCaEM7QUFpQlFKLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWjtBQUNNakIsbUJBbEJkLEdBa0IyQmlCLElBQUksQ0FBQyxDQUFELENBbEIvQjtBQW1CUUoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaOztBQW5CUixvQkFvQldVLEtBQUssS0FBS1YsS0FBSSxDQUFDVSxLQUFmLElBQXdCRSxRQUFRLEtBQUtaLEtBQUksQ0FBQ1ksUUFwQnJEO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUEwQlFDLHFCQUFPLENBQUNDLEdBQVI7O0FBMUJSO0FBNEJJSSxxRUFBQSxDQUFZLE9BQVo7QUFDQWhCLHNCQUFRLENBQUNPLE9BQVQsQ0FBaUJFLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0FQLHlCQUFXLENBQUNLLE9BQVosQ0FBb0JFLEtBQXBCLEdBQTRCLEVBQTVCOztBQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU44QjtBQUFBO0FBQUE7O0FBMkM5QixzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG9FQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVBO0FBQU0saUJBQVMsRUFBQyxNQUFoQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0k7QUFBTyxxQkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBTyxlQUFHLEVBQUVULFFBQVo7QUFBc0IsZ0JBQUksRUFBQyxPQUEzQjtBQUFtQyxxQkFBUyxFQUFDLGNBQTdDO0FBQTRELGNBQUUsRUFBQyxvQkFBL0Q7QUFBb0YsZ0NBQWlCO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFLLGNBQUUsRUFBQyxXQUFSO0FBQW9CLHFCQUFTLEVBQUMsV0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBTUk7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDSTtBQUFPLHFCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFPLGVBQUcsRUFBRUUsV0FBWjtBQUF5QixnQkFBSSxFQUFDLFVBQTlCO0FBQXlDLHFCQUFTLEVBQUMsY0FBbkQ7QUFBa0UsY0FBRSxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBY0E7QUFBUSxlQUFPLEVBQUVHLGVBQWpCO0FBQWtDLGlCQUFTLEVBQUMsaUJBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFxQkQ7O0dBaEV1QlQsSztVQUlQUSxrRDs7O0tBSk9SLEsiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IEdpdEh1YlByb2ZpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0dpdEh1YlByb2ZpbGUnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVsL3R5cGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2dpblVzZXIoKSA6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmKGVtYWlsUmVmID09PSB1bmRlZmluZWQgfHwgZW1haWxSZWYuY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGVtYWlsUmVmLmN1cnJlbnQgPT09IG51bGwpe1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZihwYXNzd29yZFJlZiA9PT0gdW5kZWZpbmVkIHx8IHBhc3N3b3JkUmVmLmN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBwYXNzd29yZFJlZi5jdXJyZW50ID09PSBudWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZW1haWwgPSBlbWFpbFJlZi5jdXJyZW50Py52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkUmVmLmN1cnJlbnQ/LnZhbHVlO1xuXG4gICAgaWYgKGVtYWlsID09PSBcIlwiIHx8IHBhc3N3b3JkID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdob2xhJylcbiAgICBpZih0eXBlb2YgZW1haWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXNzd29yZCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldDxVc2VyW10+KGBodHRwOi8vbG9jYWxob3N0OjMwMDQvdXNlcnM/ZW1haWw9JHtlbWFpbH1gKTtcbiAgICAgICAgICBjb25zdCBkYXRhOlVzZXJbXSA9IHJlcy5kYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IGRhdGFbMF07XG4gICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICBpZihlbWFpbCAhPT0gdXNlci5lbWFpbCAmJiBwYXNzd29yZCAhPT0gdXNlci5wYXNzd29yZCl7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgICBSb3V0ZXIucHVzaCgnL2hvbWUnKTtcbiAgICAgIGVtYWlsUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICAgIHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICAgIFxuICAgIH1cbiAgfVxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDI+TG9naW48L2gyPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtlbWFpbFJlZn0gdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIvPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHJlZj17cGFzc3dvcmRSZWZ9IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW5Vc2VyfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ })

});
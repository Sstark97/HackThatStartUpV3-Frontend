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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var _home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/odinsonthn/ULPGC/Otras cosas/dev/HackTheStartUpV3/Frontend/pages/login.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Login() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var emailRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  function handleLoginUser() {\n    return _handleLoginUser.apply(this, arguments);\n  }\n\n  function _handleLoginUser() {\n    _handleLoginUser = (0,_home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var _emailRef$current, _passwordRef$current;\n\n      var email, password, res, data, user;\n      return _home_odinsonthn_ULPGC_Otras_cosas_dev_HackTheStartUpV3_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(emailRef === undefined || emailRef.current === undefined || emailRef.current === null)) {\n                _context.next = 4;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 4:\n              if (!(passwordRef === undefined || passwordRef.current === undefined || passwordRef.current === null)) {\n                _context.next = 6;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 6:\n              email = (_emailRef$current = emailRef.current) === null || _emailRef$current === void 0 ? void 0 : _emailRef$current.value;\n              password = (_passwordRef$current = passwordRef.current) === null || _passwordRef$current === void 0 ? void 0 : _passwordRef$current.value;\n\n              if (!(email === \"\" || password === \"\")) {\n                _context.next = 10;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 10:\n              console.log('hola');\n\n              if (!(typeof email !== 'undefined' && typeof password !== 'undefined')) {\n                _context.next = 31;\n                break;\n              }\n\n              _context.prev = 12;\n              _context.next = 15;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"http://localhost:3004/users?email=\".concat(email));\n\n            case 15:\n              res = _context.sent;\n              data = res.data;\n              console.log(data);\n              user = data[0];\n              console.log(user);\n\n              if (!(email !== user.email && password !== user.password)) {\n                _context.next = 22;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 22:\n              _context.next = 28;\n              break;\n\n            case 24:\n              _context.prev = 24;\n              _context.t0 = _context[\"catch\"](12);\n              console.log('jdjd');\n              return _context.abrupt(\"return\");\n\n            case 28:\n              next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/home');\n              emailRef.current.value = '';\n              passwordRef.current.value = '';\n\n            case 31:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[12, 24]]);\n    }));\n    return _handleLoginUser.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"d-flex flex-column w-100 justify-content-center align-items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        className: \"mt-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"mb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n            className: \"form-label\",\n            children: \"Email address\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            ref: emailRef,\n            type: \"email\",\n            className: \"form-control\",\n            id: \"exampleInputEmail1\",\n            \"aria-describedby\": \"emailHelp\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            id: \"emailHelp\",\n            className: \"form-text\",\n            children: \"We'll never share your email with anyone else.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"mb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n            className: \"form-label\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            ref: passwordRef,\n            type: \"password\",\n            className: \"form-control\",\n            id: \"exampleInputPassword1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: handleLoginUser,\n        className: \"btn btn-primary\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Login, \"c5837C3DQQBMjcUfHqUXBk/W0pc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4udHN4P2Q3NWYiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlbWFpbFJlZiIsInVzZVJlZiIsInBhc3N3b3JkUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTG9naW5Vc2VyIiwidW5kZWZpbmVkIiwiY3VycmVudCIsImVtYWlsIiwidmFsdWUiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInJlcyIsImRhdGEiLCJ1c2VyIiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ0pDLCtDQUFRLENBQVUsS0FBVixDQURKO0FBQUEsTUFDdkJDLEtBRHVCO0FBQUEsTUFDaEJDLFFBRGdCOztBQUU5QixNQUFNQyxRQUFRLEdBQUdDLDZDQUFNLENBQW1CLElBQW5CLENBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCw2Q0FBTSxDQUFtQixJQUFuQixDQUExQjtBQUNBLE1BQU1FLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBSjhCLFdBTWZDLGVBTmU7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlZBTTlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNLTCxRQUFRLEtBQUtNLFNBQWIsSUFBMEJOLFFBQVEsQ0FBQ08sT0FBVCxLQUFxQkQsU0FBL0MsSUFBNEROLFFBQVEsQ0FBQ08sT0FBVCxLQUFxQixJQUR0RjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLG9CQUdZTCxXQUFXLEtBQUtJLFNBQWhCLElBQTZCSixXQUFXLENBQUNLLE9BQVosS0FBd0JELFNBQXJELElBQWtFSixXQUFXLENBQUNLLE9BQVosS0FBd0IsSUFIdEc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7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Ii4vcGFnZXMvbG9naW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBHaXRIdWJQcm9maWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9HaXRIdWJQcm9maWxlJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbC90eXBlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxvZ2luVXNlcigpe1xuICAgIGlmKGVtYWlsUmVmID09PSB1bmRlZmluZWQgfHwgZW1haWxSZWYuY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGVtYWlsUmVmLmN1cnJlbnQgPT09IG51bGwpe1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZihwYXNzd29yZFJlZiA9PT0gdW5kZWZpbmVkIHx8IHBhc3N3b3JkUmVmLmN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBwYXNzd29yZFJlZi5jdXJyZW50ID09PSBudWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZW1haWwgPSBlbWFpbFJlZi5jdXJyZW50Py52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkUmVmLmN1cnJlbnQ/LnZhbHVlO1xuXG4gICAgaWYgKGVtYWlsID09PSBcIlwiIHx8IHBhc3N3b3JkID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdob2xhJylcbiAgICBpZih0eXBlb2YgZW1haWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXNzd29yZCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldDxVc2VyW10+KGBodHRwOi8vbG9jYWxob3N0OjMwMDQvdXNlcnM/ZW1haWw9JHtlbWFpbH1gKTtcbiAgICAgICAgICBjb25zdCBkYXRhOlVzZXJbXSA9IHJlcy5kYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IGRhdGFbMF07XG4gICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICBpZihlbWFpbCAhPT0gdXNlci5lbWFpbCAmJiBwYXNzd29yZCAhPT0gdXNlci5wYXNzd29yZCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdqZGpkJylcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgUm91dGVyLnB1c2goJy9ob21lJyk7XG4gICAgICBlbWFpbFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgICBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgICBcbiAgICB9XG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHJlZj17ZW1haWxSZWZ9IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiLz5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZWY9e3Bhc3N3b3JkUmVmfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICA8L2Zvcm0+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2luVXNlcn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ })

});
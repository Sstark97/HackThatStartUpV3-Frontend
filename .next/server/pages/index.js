/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/GitHubProfile.tsx":
/*!**************************************!*\
  !*** ./components/GitHubProfile.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GitHubProfile\": function() { return /* binding */ GitHubProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _GitHubRepos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GitHubRepos */ \"./components/GitHubRepos.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/odinsonthn/ULPGC/Otras cosas/dev/HackTheStartUpV3/Frontend/components/GitHubProfile.tsx\";\n\n\n\n\n\nfunction GitHubProfile() {\n  const {\n    0: profileRender,\n    1: setProfile\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    login: \"Hola\",\n    avatar_url: \"fewf\",\n    repos_url: '',\n    public_repos: 0\n  });\n  const {\n    0: reposRender,\n    1: setRepos\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: reposToShow,\n    1: setReposToShow\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: index,\n    1: setIndex\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8);\n  const profileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  async function profileToSearch() {\n    var _profileRef$current;\n\n    if (profileRef === undefined || profileRef.current === undefined || profileRef.current === null) {\n      return;\n    }\n\n    const profile = (_profileRef$current = profileRef.current) === null || _profileRef$current === void 0 ? void 0 : _profileRef$current.value;\n\n    if (profile === \"\") {\n      return;\n    }\n\n    if (typeof profile !== 'undefined') {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`https://api.github.com/users/${profile}`);\n        const data = res.data;\n        const prf = {\n          login: data.login,\n          avatar_url: data.avatar_url,\n          repos_url: data.repos_url,\n          public_repos: data.public_repos\n        };\n        setProfile(prf);\n        handleSearchRepos(prf);\n      } catch (err) {\n        console.log(err);\n      }\n\n      profileRef.current.value = '';\n    }\n  }\n\n  async function handleSearchRepos(profile) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(profile.repos_url);\n    const data = res.data;\n    const repos = data.map(repo => {\n      return {\n        name: repo.name,\n        description: repo.description,\n        html_url: repo.html_url,\n        id: repo.id\n      };\n    });\n    setRepos(repos);\n    console.log(index);\n    setReposToShow(repos.slice(0, 8));\n    setIndex(8);\n  }\n\n  function handleNextRepos() {\n    const newPos = index + 8;\n    const repos = reposRender.slice(index, newPos);\n    setIndex(newPos);\n    setReposToShow(repos);\n  }\n\n  function handlePrevRepos() {\n    const newPos = index - 8;\n    const prePos = index - 16;\n    const repos = reposRender.slice(prePos, newPos);\n    setIndex(prePos);\n    setReposToShow(repos);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: profileRender.login === 'Hola' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Introduce your github\",\n        ref: profileRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 25\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: profileToSearch,\n        children: \"Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 25\n      }, this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"d-flex w-75\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card h-25\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: profileRender.avatar_url,\n          className: \"card-img-top\",\n          alt: \"...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 29\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card-body w-100 p-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n            className: \"card-title\",\n            children: [\"User: \", profileRender.login]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"card-subtitle\",\n            children: [\"Repos: \", profileRender.public_repos]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"text\",\n            placeholder: \"Introduce your github\",\n            ref: profileRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: profileToSearch,\n            children: \"Search\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 29\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 25\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"row\",\n          children: reposToShow.map(repo => {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GitHubRepos__WEBPACK_IMPORTED_MODULE_4__.GitHubRepos, {\n              name: repo.name,\n              description: repo.description,\n              html_url: repo.html_url,\n              id: repo.id\n            }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(), false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 48\n            }, this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 29\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"d-flex w-100 justify-content-center mt-4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"d-flex w-25\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"btn btn-primary w-25 m-2\",\n              onClick: handlePrevRepos,\n              children: \"Prev\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 37\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"btn btn-primary w-25 m-2\",\n              onClick: handleNextRepos,\n              children: \"Next\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 37\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 33\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 29\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 25\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrLXRoZS1zdGFydHVwLXYzLy4vY29tcG9uZW50cy9HaXRIdWJQcm9maWxlLnRzeD83NWU0Il0sIm5hbWVzIjpbIkdpdEh1YlByb2ZpbGUiLCJwcm9maWxlUmVuZGVyIiwic2V0UHJvZmlsZSIsInVzZVN0YXRlIiwibG9naW4iLCJhdmF0YXJfdXJsIiwicmVwb3NfdXJsIiwicHVibGljX3JlcG9zIiwicmVwb3NSZW5kZXIiLCJzZXRSZXBvcyIsInJlcG9zVG9TaG93Iiwic2V0UmVwb3NUb1Nob3ciLCJpbmRleCIsInNldEluZGV4IiwicHJvZmlsZVJlZiIsInVzZVJlZiIsInByb2ZpbGVUb1NlYXJjaCIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJwcm9maWxlIiwidmFsdWUiLCJyZXMiLCJheGlvcyIsImRhdGEiLCJwcmYiLCJoYW5kbGVTZWFyY2hSZXBvcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXBvcyIsIm1hcCIsInJlcG8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJodG1sX3VybCIsImlkIiwic2xpY2UiLCJoYW5kbGVOZXh0UmVwb3MiLCJuZXdQb3MiLCJoYW5kbGVQcmV2UmVwb3MiLCJwcmVQb3MiLCJ1dWlkdjQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxTQUFTQSxhQUFULEdBQXdCO0FBRTNCLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQThCQywrQ0FBUSxDQUFVO0FBQUNDLFNBQUssRUFBQyxNQUFQO0FBQWNDLGNBQVUsRUFBQyxNQUF6QjtBQUFnQ0MsYUFBUyxFQUFDLEVBQTFDO0FBQTZDQyxnQkFBWSxFQUFDO0FBQTFELEdBQVYsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBMEJOLCtDQUFRLENBQVMsRUFBVCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDTyxXQUFEO0FB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QSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQWVJO0FBQUssaUJBQVMsRUFBRSxXQUFoQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsb0JBRVFOLFdBQVcsQ0FBQ29CLEdBQVosQ0FBZ0JDLElBQUksSUFBSTtBQUNwQixnQ0FBTyw4REFBQyxxREFBRDtBQUE0QixrQkFBSSxFQUFFQSxJQUFJLENBQUNDLElBQXZDO0FBQTZDLHlCQUFXLEVBQUlELElBQUksQ0FBQ0UsV0FBakU7QUFBOEUsc0JBQVEsRUFBSUYsSUFBSSxDQUFDRyxRQUEvRjtBQUF5RyxnQkFBRSxFQUFJSCxJQUFJLENBQUNJO0FBQXBILGVBQWtCTSx3Q0FBTSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0gsV0FGRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFRSTtBQUFLLG1CQUFTLEVBQUMsMENBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG9DQUNJO0FBQVEsdUJBQVMsRUFBQywwQkFBbEI7QUFBNkMscUJBQU8sRUFBRUYsZUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFRLHVCQUFTLEVBQUMsMEJBQWxCO0FBQTZDLHFCQUFPLEVBQUVGLGVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlQsbUJBQVA7QUE4Q0giLCJmaWxlIjoiLi9jb21wb25lbnRzL0dpdEh1YlByb2ZpbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgUHJvZmlsZSwgUmVwbyB9IGZyb20gJy4uL21vZGVsL3R5cGVzJztcbmltcG9ydCB7IEdpdEh1YlJlcG9zIH0gZnJvbSAnLi9HaXRIdWJSZXBvcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGZ1bmN0aW9uIEdpdEh1YlByb2ZpbGUoKXtcblxuICAgIGNvbnN0IFtwcm9maWxlUmVuZGVyLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlPFByb2ZpbGU+KHtsb2dpbjpcIkhvbGFcIixhdmF0YXJfdXJsOlwiZmV3ZlwiLHJlcG9zX3VybDonJyxwdWJsaWNfcmVwb3M6MH0pXG4gICAgY29uc3QgW3JlcG9zUmVuZGVyLCBzZXRSZXBvc10gPSB1c2VTdGF0ZTxSZXBvW10+KFtdKTtcbiAgICBjb25zdCBbcmVwb3NUb1Nob3csIHNldFJlcG9zVG9TaG93XSA9IHVzZVN0YXRlPFJlcG9bXT4oW10pO1xuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoOCk7XG4gICAgY29uc3QgcHJvZmlsZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHByb2ZpbGVUb1NlYXJjaCgpIHtcbiAgICAgICAgaWYocHJvZmlsZVJlZiA9PT0gdW5kZWZpbmVkIHx8IHByb2ZpbGVSZWYuY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IHByb2ZpbGVSZWYuY3VycmVudCA9PT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IHByb2ZpbGVSZWYuY3VycmVudD8udmFsdWU7XG4gIFxuICAgICAgICBpZiAocHJvZmlsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZih0eXBlb2YgcHJvZmlsZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldDxQcm9maWxlPihgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3Byb2ZpbGV9YClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJmOlByb2ZpbGUgPSB7bG9naW46ZGF0YS5sb2dpbiwgYXZhdGFyX3VybDogZGF0YS5hdmF0YXJfdXJsLCByZXBvc191cmw6ZGF0YS5yZXBvc191cmwscHVibGljX3JlcG9zOmRhdGEucHVibGljX3JlcG9zfTtcbiAgICAgICAgICAgICAgICBzZXRQcm9maWxlKHByZik7XG4gICAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoUmVwb3MocHJmKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZmlsZVJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTZWFyY2hSZXBvcyhwcm9maWxlOlByb2ZpbGUpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHByb2ZpbGUucmVwb3NfdXJsKTtcbiAgICAgICAgY29uc3QgZGF0YTpSZXBvW10gPSByZXMuZGF0YTtcblxuICAgICAgICBjb25zdCByZXBvczpSZXBvW10gPSBkYXRhLm1hcChyZXBvID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7bmFtZTpyZXBvLm5hbWUsIGRlc2NyaXB0aW9uOiByZXBvLmRlc2NyaXB0aW9uLCBodG1sX3VybDpyZXBvLmh0bWxfdXJsLGlkOnJlcG8uaWR9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFJlcG9zKHJlcG9zKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBzZXRSZXBvc1RvU2hvdyhyZXBvcy5zbGljZSgwLDgpKTtcbiAgICAgICAgc2V0SW5kZXgoOCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTmV4dFJlcG9zKCl7XG4gICAgICAgIGNvbnN0IG5ld1BvczpudW1iZXIgPSBpbmRleCArIDg7XG4gICAgICAgIGNvbnN0IHJlcG9zOlJlcG9bXSA9IHJlcG9zUmVuZGVyLnNsaWNlKGluZGV4LG5ld1Bvcyk7XG4gICAgICAgIHNldEluZGV4KG5ld1Bvcyk7XG4gICAgICAgIHNldFJlcG9zVG9TaG93KHJlcG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQcmV2UmVwb3MoKXtcbiAgICAgICAgY29uc3QgbmV3UG9zOm51bWJlciA9IGluZGV4IC0gODtcbiAgICAgICAgY29uc3QgcHJlUG9zOm51bWJlciA9IGluZGV4IC0gMTY7XG4gICAgICAgIGNvbnN0IHJlcG9zOlJlcG9bXSA9IHJlcG9zUmVuZGVyLnNsaWNlKHByZVBvcyxuZXdQb3MpO1xuICAgICAgICBzZXRJbmRleChwcmVQb3MpO1xuICAgICAgICBzZXRSZXBvc1RvU2hvdyhyZXBvcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAge3Byb2ZpbGVSZW5kZXIubG9naW4gPT09ICdIb2xhJyBcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgeW91ciBnaXRodWJcIiByZWY9e3Byb2ZpbGVSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb2ZpbGVUb1NlYXJjaH0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctNzVcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTI1XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGVSZW5kZXIuYXZhdGFyX3VybH0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB3LTEwMCBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Vc2VyOiB7cHJvZmlsZVJlbmRlci5sb2dpbn08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlXCI+UmVwb3M6IHtwcm9maWxlUmVuZGVyLnB1YmxpY19yZXBvc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIHlvdXIgZ2l0aHViXCIgcmVmPXtwcm9maWxlUmVmfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb2ZpbGVUb1NlYXJjaH0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPXtodG1sX3VybH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+R28gdG8gUmVwbzwvYT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3NUb1Nob3cubWFwKHJlcG8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8R2l0SHViUmVwb3Mga2V5PXt1dWlkdjQoKX0gbmFtZT17cmVwby5uYW1lfSBkZXNjcmlwdGlvbiA9IHtyZXBvLmRlc2NyaXB0aW9ufSBodG1sX3VybCA9IHtyZXBvLmh0bWxfdXJsfSBpZCA9IHtyZXBvLmlkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctMjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHctMjUgbS0yXCIgb25DbGljaz17aGFuZGxlUHJldlJlcG9zfT5QcmV2PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB3LTI1IG0tMlwiIG9uQ2xpY2s9e2hhbmRsZU5leHRSZXBvc30+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgPC8+XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GitHubProfile.tsx\n");

/***/ }),

/***/ "./components/GitHubRepos.tsx":
/*!************************************!*\
  !*** ./components/GitHubRepos.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GitHubRepos\": function() { return /* binding */ GitHubRepos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/odinsonthn/ULPGC/Otras cosas/dev/HackTheStartUpV3/Frontend/components/GitHubRepos.tsx\";\n\nfunction GitHubRepos({\n  name,\n  description,\n  html_url,\n  id\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \" w-25\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card mt-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"https://www.muylinux.com/wp-content/uploads/2017/06/github.png\",\n        className: \"card-img-top\",\n        alt: \"...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-body\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n          className: \"card-title\",\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"card-text\",\n          children: id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: html_url,\n          className: \"btn btn-primary\",\n          children: \"Go to Repo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrLXRoZS1zdGFydHVwLXYzLy4vY29tcG9uZW50cy9HaXRIdWJSZXBvcy50c3g/NGRiMyJdLCJuYW1lcyI6WyJHaXRIdWJSZXBvcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImh0bWxfdXJsIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUlPLFNBQVNBLFdBQVQsQ0FBcUI7QUFBQ0MsTUFBRDtBQUFPQyxhQUFQO0FBQW9CQyxVQUFwQjtBQUE4QkM7QUFBOUIsQ0FBckIsRUFBdUU7QUFFMUUsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDJCQUVJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBQyxnRUFBVDtBQUEwRSxpQkFBUyxFQUFDLGNBQXBGO0FBQW1HLFdBQUcsRUFBQztBQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxZQUFkO0FBQUEsb0JBQTRCSDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLFdBQWI7QUFBQSxvQkFBMEJHO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFJSTtBQUFHLGNBQUksRUFBRUQsUUFBVDtBQUFtQixtQkFBUyxFQUFDLGlCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2l0SHViUmVwb3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgUHJvZmlsZSwgUHJvZmlsZVByb3BzIH0gZnJvbSAnLi4vbW9kZWwvdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBHaXRIdWJSZXBvcyh7bmFtZSwgZGVzY3JpcHRpb24sIGh0bWxfdXJsLCBpZH0gOiBQcm9maWxlUHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctMjVcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG10LTJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3Lm11eWxpbnV4LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi9naXRodWIucG5nXCIgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntuYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntpZH08L3A+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGVzY3JpcHRpb259PC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aHRtbF91cmx9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkdvIHRvIFJlcG88L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GitHubRepos.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_GitHubProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GitHubProfile */ \"./components/GitHubProfile.tsx\");\n\nvar _jsxFileName = \"/home/odinsonthn/ULPGC/Otras cosas/dev/HackTheStartUpV3/Frontend/pages/index.tsx\";\n\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GitHubProfile__WEBPACK_IMPORTED_MODULE_2__.GitHubProfile, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrLXRoZS1zdGFydHVwLXYzLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDBFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQU0sZUFBUyxFQUFFQSxxRUFBakI7QUFBQSw2QkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IEdpdEh1YlByb2ZpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0dpdEh1YlByb2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHaXRIdWJQcm9maWxlIC8+XG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrLXRoZS1zdGFydHVwLXYzLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9jZjU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
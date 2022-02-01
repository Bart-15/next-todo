"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos",{

/***/ "./pages/todos/index.js":
/*!******************************!*\
  !*** ./pages/todos/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoItem */ \"./pages/todos/TodoItem.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Todos = function(param) {\n    var BASE_URL = param.BASE_URL;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), todo1 = ref[0], setTodo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref1[0], setTodos = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counter = ref2[0], setCounter = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchTodos();\n    }, []);\n    var fetchTodos = function() {\n        var _ref = _asyncToGenerator(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, data;\n            return C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"\".concat(BASE_URL, \"/api/v1/todos\"));\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.data.todos;\n                    case 5:\n                        data = _ctx.sent;\n                        setCounter(0);\n                        setTodos(data);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchTodos() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var deleteTodo = function() {\n        var _ref = _asyncToGenerator(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.warn('Todo Deleted Successfully!', {\n                            position: \"top-right\",\n                            autoClose: 2000,\n                            hideProgressBar: false,\n                            closeOnClick: true,\n                            pauseOnHover: false,\n                            draggable: true,\n                            progress: undefined\n                        });\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default()[\"delete\"](\"\".concat(BASE_URL, \"/api/v1/todo/\").concat(id));\n                    case 4:\n                        fetchTodos();\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function deleteTodo(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var toggleCompleted = function() {\n        var _ref = _asyncToGenerator(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setCounter(counter + 1);\n                        if (!(counter === 1)) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().patch(\"\".concat(BASE_URL, \"/api/v1/todo/completed/\").concat(id));\n                    case 4:\n                        fetchTodos();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function toggleCompleted(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var newTodo;\n            return C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (todo1) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert(\"Todo field is required.\"));\n                    case 3:\n                        newTodo = {\n                            title: todo1\n                        };\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Todo Created Successfully!', {\n                            position: \"top-right\",\n                            autoClose: 2000,\n                            hideProgressBar: false,\n                            closeOnClick: true,\n                            pauseOnHover: false,\n                            draggable: true,\n                            progress: undefined\n                        });\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"\".concat(BASE_URL, \"/api/v1/todos\"), newTodo);\n                    case 7:\n                        setTodo(\"\");\n                        fetchTodos();\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                container: true,\n                spacing: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                    item: true,\n                    xs: 12,\n                    sm: 12,\n                    md: 6,\n                    lg: 8,\n                    alignItems: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                            type: \"text\",\n                            name: \"todo\",\n                            fullWidth: true,\n                            label: \"Enter Todo\",\n                            id: \"fullWidth\",\n                            value: todo1,\n                            onChange: function(e) {\n                                return setTodo(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, _this),\n            todos.map(function(todo) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TodoItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    todo: todo,\n                    deleteTodo: deleteTodo,\n                    toggleCompleted: toggleCompleted\n                }, todo._id, false, {\n                    fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 90,\n                    columnNumber: 25\n                }, _this1));\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, _this));\n};\n_s(Todos, \"N7GPrhEvwrg+J7WzGBWgq9MoZB4=\");\n_c = Todos;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDb0QsR0FBRzs7Ozs7WUFNekIsQ0FBQzs7Ozs7OztBQUlqQixDQUFDO0dBN0ZLdEQsS0FBSztLQUFMQSxLQUFLOztBQXlHWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG9zL2luZGV4LmpzPzVhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbnRhaW5lciwgR3JpZCwgVGV4dEZpZWxkfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSdcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5jb25zdCBUb2RvcyA9ICh7QkFTRV9VUkx9KSA9PiB7XHJcbiAgICBjb25zdCBbdG9kbywgc2V0VG9kb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFRvZG9zKCk7XHJcbiAgIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBmZXRjaFRvZG9zID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS9hcGkvdjEvdG9kb3NgKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuZGF0YS50b2RvcztcclxuICAgICAgICBzZXRDb3VudGVyKDApXHJcbiAgICAgICAgc2V0VG9kb3MoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jKGlkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybignVG9kbyBEZWxldGVkIFN1Y2Nlc3NmdWxseSEnLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke0JBU0VfVVJMfS9hcGkvdjEvdG9kby8ke2lkfWApXHJcbiAgICAgICAgICBmZXRjaFRvZG9zKCk7XHJcbiAgICAgICAgfWNhdGNoKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9IGFzeW5jKGlkKSA9PiB7XHJcbiAgICAgICBzZXRDb3VudGVyKGNvdW50ZXIgKyAxKVxyXG4gICAgICAgaWYoY291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKGAke0JBU0VfVVJMfS9hcGkvdjEvdG9kby9jb21wbGV0ZWQvJHtpZH1gKVxyXG4gICAgICAgIGZldGNoVG9kb3MoKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCF0b2RvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRvZG8gZmllbGQgaXMgcmVxdWlyZWQuXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdUb2RvID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogdG9kb1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdUb2RvIENyZWF0ZWQgU3VjY2Vzc2Z1bGx5IScsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vYXBpL3YxL3RvZG9zYCwgbmV3VG9kbylcclxuICAgICAgICBzZXRUb2RvKFwiXCIpXHJcbiAgICAgICAgZmV0Y2hUb2RvcygpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0gbGc9ezh9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0b2RvXCIgZnVsbFdpZHRoIGxhYmVsPVwiRW50ZXIgVG9kb1wiIGlkPVwiZnVsbFdpZHRoXCIgdmFsdWU9e3RvZG99IG9uQ2hhbmdlPXtlID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9kb0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RvZG8uX2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG89e3RvZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUb2RvPXtkZWxldGVUb2RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ29tcGxldGVkPXt0b2dnbGVDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoKSA9PiB7XHJcbiAgICBjb25zdCBCQVNFX1VSTCA9IHByb2Nlc3MuZW52LkFQSVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgQkFTRV9VUkxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiR3JpZCIsIlRleHRGaWVsZCIsIlRvZG9JdGVtIiwidG9hc3QiLCJheGlvcyIsIlRvZG9zIiwiQkFTRV9VUkwiLCJ0b2RvIiwic2V0VG9kbyIsInRvZG9zIiwic2V0VG9kb3MiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImZldGNoVG9kb3MiLCJyZXMiLCJkYXRhIiwiZ2V0IiwiZGVsZXRlVG9kbyIsImlkIiwid2FybiIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJkZWxldGUiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlQ29tcGxldGVkIiwicGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJlIiwibmV3VG9kbyIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJ0aXRsZSIsInN1Y2Nlc3MiLCJwb3N0IiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsInNtIiwibWQiLCJsZyIsImFsaWduSXRlbXMiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwibmFtZSIsImZ1bGxXaWR0aCIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1hcCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todos/index.js\n");

/***/ })

});
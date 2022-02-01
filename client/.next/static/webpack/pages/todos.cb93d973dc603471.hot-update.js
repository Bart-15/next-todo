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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoItem */ \"./pages/todos/TodoItem.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Todos = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), todo1 = ref[0], setTodo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref1[0], setTodos = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counter = ref2[0], setCounter = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchTodos();\n    }, []);\n    var fetchTodos = function() {\n        var _ref = _asyncToGenerator(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, data;\n            return C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"\".concat(BASE_URL, \"/api/v1/todos\"));\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.data.todos;\n                    case 5:\n                        data = _ctx.sent;\n                        setCounter(0);\n                        setTodos(data);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchTodos() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var deleteTodo = function() {\n        var _ref = _asyncToGenerator(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.warn('Todo Deleted Successfully!', {\n                            position: \"top-right\",\n                            autoClose: 2000,\n                            hideProgressBar: false,\n                            closeOnClick: true,\n                            pauseOnHover: false,\n                            draggable: true,\n                            progress: undefined\n                        });\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default()[\"delete\"](\"\".concat(BASE_URL, \"/api/v1/todo/\").concat(id));\n                    case 4:\n                        fetchTodos();\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function deleteTodo(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var toggleCompleted = function() {\n        var _ref = _asyncToGenerator(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setCounter(counter + 1);\n                        if (!(counter === 1)) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().patch(\"\".concat(BASE_URL, \"/api/v1/todo/completed/\").concat(id));\n                    case 4:\n                        fetchTodos();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function toggleCompleted(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var newTodo;\n            return C_Users_Bart_Desktop_next_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (todo1) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert(\"Todo field is required.\"));\n                    case 3:\n                        newTodo = {\n                            title: todo1\n                        };\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Todo Created Successfully!', {\n                            position: \"top-right\",\n                            autoClose: 2000,\n                            hideProgressBar: false,\n                            closeOnClick: true,\n                            pauseOnHover: false,\n                            draggable: true,\n                            progress: undefined\n                        });\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"\".concat(BASE_URL, \"/api/v1/todos\"), newTodo);\n                    case 7:\n                        setTodo(\"\");\n                        fetchTodos();\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                container: true,\n                spacing: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                    item: true,\n                    xs: 12,\n                    sm: 12,\n                    md: 6,\n                    lg: 8,\n                    alignItems: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                            type: \"text\",\n                            name: \"todo\",\n                            fullWidth: true,\n                            label: \"Enter Todo\",\n                            id: \"fullWidth\",\n                            value: todo1,\n                            onChange: function(e) {\n                                return setTodo(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, _this),\n            todos.map(function(todo) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TodoItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    todo: todo,\n                    deleteTodo: deleteTodo,\n                    toggleCompleted: toggleCompleted\n                }, todo._id, false, {\n                    fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 92,\n                    columnNumber: 25\n                }, _this1));\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Bart\\\\Desktop\\\\next-todo\\\\client\\\\pages\\\\todos\\\\index.js\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, _this));\n};\n_s(Todos, \"N7GPrhEvwrg+J7WzGBWgq9MoZB4=\");\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7Ozs7O0FBSWpCLENBQUM7R0E3Rkt0RCxLQUFLO0tBQUxBLEtBQUs7QUErRlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy9pbmRleC5qcz81YWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb250YWluZXIsIEdyaWQsIFRleHRGaWVsZH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vVG9kb0l0ZW0nXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBUb2RvcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b2RvLCBzZXRUb2RvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoVG9kb3MoKTtcclxuICAgXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoVG9kb3MgPSBhc3luYygpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7QkFTRV9VUkx9L2FwaS92MS90b2Rvc2ApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhLnRvZG9zO1xyXG4gICAgICAgIHNldENvdW50ZXIoMClcclxuICAgICAgICBzZXRUb2RvcyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMoaWQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0b2FzdC53YXJuKCdUb2RvIERlbGV0ZWQgU3VjY2Vzc2Z1bGx5IScsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7QkFTRV9VUkx9L2FwaS92MS90b2RvLyR7aWR9YClcclxuICAgICAgICAgIGZldGNoVG9kb3MoKTtcclxuICAgICAgICB9Y2F0Y2goZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gYXN5bmMoaWQpID0+IHtcclxuICAgICAgIHNldENvdW50ZXIoY291bnRlciArIDEpXHJcbiAgICAgICBpZihjb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucGF0Y2goYCR7QkFTRV9VUkx9L2FwaS92MS90b2RvL2NvbXBsZXRlZC8ke2lkfWApXHJcbiAgICAgICAgZmV0Y2hUb2RvcygpO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIXRvZG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVG9kbyBmaWVsZCBpcyByZXF1aXJlZC5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0b2RvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1RvZG8gQ3JlYXRlZCBTdWNjZXNzZnVsbHkhJywge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0VfVVJMfS9hcGkvdjEvdG9kb3NgLCBuZXdUb2RvKVxyXG4gICAgICAgIHNldFRvZG8oXCJcIilcclxuICAgICAgICBmZXRjaFRvZG9zKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBsZz17OH0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRvZG9cIiBmdWxsV2lkdGggbGFiZWw9XCJFbnRlciBUb2RvXCIgaWQ9XCJmdWxsV2lkdGhcIiB2YWx1ZT17dG9kb30gb25DaGFuZ2U9e2UgPT4gc2V0VG9kbyhlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvZG9zLm1hcCgodG9kbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb2RvSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dG9kby5faWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kbz17dG9kb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRvZG89e2RlbGV0ZVRvZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDb21wbGV0ZWQ9e3RvZ2dsZUNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiR3JpZCIsIlRleHRGaWVsZCIsIlRvZG9JdGVtIiwidG9hc3QiLCJheGlvcyIsIlRvZG9zIiwidG9kbyIsInNldFRvZG8iLCJ0b2RvcyIsInNldFRvZG9zIiwiY291bnRlciIsInNldENvdW50ZXIiLCJmZXRjaFRvZG9zIiwicmVzIiwiZGF0YSIsImdldCIsIkJBU0VfVVJMIiwiZGVsZXRlVG9kbyIsImlkIiwid2FybiIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJkZWxldGUiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlQ29tcGxldGVkIiwicGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJlIiwibmV3VG9kbyIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJ0aXRsZSIsInN1Y2Nlc3MiLCJwb3N0IiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsInNtIiwibWQiLCJsZyIsImFsaWduSXRlbXMiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwibmFtZSIsImZ1bGxXaWR0aCIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1hcCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todos/index.js\n");

/***/ })

});
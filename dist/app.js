/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about.tsx":
/*!******************************!*\
  !*** ./components/about.tsx ***!
  \******************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var About = function About() {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row about-page" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "jumbotron" }, "10 SpinnerAsync"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "This sample takes as starting point sample \"09 Redux\".")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "we will display a busy indicator when an ajax request is in progress.")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12 top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Highlights"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "The most interesting parts worth to take a look"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12 top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Actions:")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, "./src/middlewares/http/actions.ts: ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "Create actions for http middleware"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Middlewares:")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, "./src/middlewares/http/middleware.ts: ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "Create http middleware"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Reducers:")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, "./src/reducers/http.ts: ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "Manage http state"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Store:")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, "./store.ts: ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "Update store to use in http middleware"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Components:")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "top-buffer" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, "./src/common/components/spinner/spinner.tsx: ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "Presentational component"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, "./src/common/components/spinner/spinnerContainer.tsx: ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null, "Container component"))))))));
};

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./components/about.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _about__WEBPACK_IMPORTED_MODULE_0__["About"]; });



/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./router.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_router__WEBPACK_IMPORTED_MODULE_2__["AppRouter"], null), document.getElementById('root'));

/***/ }),

/***/ "./middlewares/http/actionTypes.ts":
/*!*****************************************!*\
  !*** ./middlewares/http/actionTypes.ts ***!
  \*****************************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
var actionTypes = {
    HTTP_CALL_START: 'HTTP_CALL_START',
    HTTP_CALL_END: 'HTTP_CALL_END'
};

/***/ }),

/***/ "./middlewares/http/actions.ts":
/*!*************************************!*\
  !*** ./middlewares/http/actions.ts ***!
  \*************************************/
/*! exports provided: httpCallStartAction, httpCallEndAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpCallStartAction", function() { return httpCallStartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpCallEndAction", function() { return httpCallEndAction; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./middlewares/http/actionTypes.ts");

var httpCallStartAction = function httpCallStartAction() {
    return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].HTTP_CALL_START
    };
};
var httpCallEndAction = function httpCallEndAction() {
    return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].HTTP_CALL_END
    };
};

/***/ }),

/***/ "./middlewares/http/middleware.ts":
/*!****************************************!*\
  !*** ./middlewares/http/middleware.ts ***!
  \****************************************/
/*! exports provided: httpMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpMiddleware", function() { return httpMiddleware; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./middlewares/http/actions.ts");

var httpMiddleware = function httpMiddleware(_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
        return function (action) {
            return dispatchHttpCallEndAction(dispatch, next, action);
        };
    };
};
var dispatchHttpCallEndAction = function dispatchHttpCallEndAction(dispatch, next, action) {
    var httpEnd = action.meta && action.meta.httpEnd;
    if (!httpEnd) {
        return next(action);
    } else {
        var nextAction = cleanAction(action);
        next(nextAction);
        return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["httpCallEndAction"])());
    }
};
var cleanAction = function cleanAction(action) {
    return Object.assign({}, action, { meta: Object.assign({}, action.meta, { httpEnd: null }) });
};

/***/ }),

/***/ "./middlewares/index.ts":
/*!******************************!*\
  !*** ./middlewares/index.ts ***!
  \******************************/
/*! exports provided: httpMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http/middleware */ "./middlewares/http/middleware.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpMiddleware", function() { return _http_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"]; });



/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");

;
var state = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({});

/***/ }),

/***/ "./router.tsx":
/*!********************!*\
  !*** ./router.tsx ***!
  \********************/
/*! exports provided: AppRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouter", function() { return AppRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./store.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./components/index.ts");





var AppRouter = function AppRouter() {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: _store__WEBPACK_IMPORTED_MODULE_3__["store"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/", component: _components__WEBPACK_IMPORTED_MODULE_4__["About"] })))));
};

/***/ }),

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ "./middlewares/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./reducers/index.ts");




var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], _middlewares__WEBPACK_IMPORTED_MODULE_2__["httpMiddleware"]];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["state"], composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(undefined, middlewares)));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hYm91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZXMvaHR0cC9hY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlcy9odHRwL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZXMvaHR0cC9taWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3JvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU0sUUFBc0MsU0FBdEMsS0FBc0MsR0FBSztBQUN0RCxXQUNFLDZEQUFLLFdBQVUsZ0JBQWYsSUFDRSw0REFBSSxXQUFVLFdBQWQsSUFBeUIsaUJBQXpCLENBREYsRUFHRSw2REFBSyxXQUFVLFdBQWYsSUFDRSxnRUFDRSw4SEFERixDQURGLEVBSUUsNkRBQUssV0FBVSxXQUFmLElBQ0UsZ0VBQ0UsMklBREYsQ0FERixDQUpGLENBSEYsRUFjRSw2REFBSyxXQUFVLHNCQUFmLElBQ0UsNkVBREYsRUFFRSwrREFGRixFQUdFLGdFQUNFLHFIQURGLENBSEYsQ0FkRixFQXNCRSw2REFBSyxXQUFVLHNCQUFmLElBQ0UsZ0VBQ0UsNERBQUksV0FBVSxZQUFkLElBQ0UsZ0VBQUksMEVBQUosQ0FERixFQUVFLDREQUFJLFdBQVUsWUFBZCxJQUNFLGdFQUNFLGdFLHFDQUFBLEVBQ3FDLHdHQURyQyxDQURGLENBREYsQ0FGRixDQURGLEVBV0UsNERBQUksV0FBVSxZQUFkLElBQ0UsZ0VBQUksOEVBQUosQ0FERixFQUVFLDREQUFJLFdBQVUsWUFBZCxJQUNFLGdFQUNFLGdFLHdDQUFBLEVBQ3dDLDRGQUR4QyxDQURGLENBREYsQ0FGRixDQVhGLEVBcUJFLDREQUFJLFdBQVUsWUFBZCxJQUNFLGdFQUFJLDJFQUFKLENBREYsRUFFRSw0REFBSSxXQUFVLFlBQWQsSUFDRSxnRUFDRSxnRSwwQkFBQSxFQUMwQix1RkFEMUIsQ0FERixDQURGLENBRkYsQ0FyQkYsRUErQkUsNERBQUksV0FBVSxZQUFkLElBQ0UsZ0VBQUksd0VBQUosQ0FERixFQUVFLDREQUFJLFdBQVUsWUFBZCxJQUNFLGdFQUNFLGdFLGNBQUEsRUFDYyw0R0FEZCxDQURGLENBREYsQ0FGRixDQS9CRixFQXlDRSw0REFBSSxXQUFVLFlBQWQsSUFDRSxnRUFBSSw2RUFBSixDQURGLEVBRUUsNERBQUksV0FBVSxZQUFkLElBQ0UsZ0VBQ0UsZ0UsK0NBQUEsRUFDK0MsOEZBRC9DLENBREYsQ0FERixFQU1FLGdFQUNFLGdFLHdEQUFBLEVBQ3dELHlGQUR4RCxDQURGLENBTkYsQ0FGRixDQXpDRixDQURGLENBdEJGLENBREY7QUFvRkQsQ0FyRk0sQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxpREFDRSxvREFBQyxpREFBRCxFQUFVLElBQVYsQ0FERixFQUVJLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUZKLEU7Ozs7Ozs7Ozs7Ozs7O0FDSk8sSUFBTSxjQUFjO0FBQ3pCLHFCQUFpQixpQkFEUTtBQUV6QixtQkFBZTtBQUZVLENBQXBCLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNLHNCQUFzQixTQUF0QixtQkFBc0I7QUFBQSxXQUFPO0FBQ3hDLGNBQU0sd0RBQVcsQ0FBQztBQURzQixLQUFQO0FBQUEsQ0FBNUI7QUFJQSxJQUFNLG9CQUFvQixTQUFwQixpQkFBb0I7QUFBQSxXQUFPO0FBQ3RDLGNBQU0sd0RBQVcsQ0FBQztBQURvQixLQUFQO0FBQUEsQ0FBMUIsQzs7Ozs7Ozs7Ozs7O0FDTlA7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNLGlCQUFpQixTQUFqQixjQUFpQjtBQUFBLFFBQUcsUUFBSCxRQUFHLFFBQUg7QUFBQSxXQUFrQixVQUFDLElBQUQ7QUFBQSxlQUFVLFVBQUMsTUFBRCxFQUFXO0FBQ25FLG1CQUFPLDBCQUEwQixRQUExQixFQUFvQyxJQUFwQyxFQUEwQyxNQUExQyxDQUFQO0FBQ0QsU0FGK0M7QUFBQSxLQUFsQjtBQUFBLENBQXZCO0FBSVAsSUFBTSw0QkFBNEIsU0FBNUIseUJBQTRCLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsTUFBakIsRUFBMkI7QUFDM0QsUUFBTSxVQUFVLE9BQU8sSUFBUCxJQUFlLE9BQU8sSUFBUCxDQUFZLE9BQTNDO0FBRUEsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLGVBQU8sS0FBSyxNQUFMLENBQVA7QUFDRCxLQUZELE1BR0s7QUFDSCxZQUFNLGFBQWEsWUFBWSxNQUFaLENBQW5CO0FBQ0EsYUFBSyxVQUFMO0FBQ0EsZUFBTyxTQUFTLGtFQUFpQixFQUExQixDQUFQO0FBQ0Q7QUFDRixDQVhEO0FBYUEsSUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLE1BQUQ7QUFBQSxXQUFZLGtCQUMzQixNQUQyQixFQUNyQixFQUNULE1BQUksa0JBQ0MsT0FBTyxJQURSLEVBQ1ksRUFDZCxTQUFTLElBREssRUFEWixDQURLLEVBRHFCLENBQVo7QUFBQSxDQUFwQixDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQU1DO0FBRU0sSUFBTSxRQUFRLDZEQUFlLENBQVEsRUFBdkIsQ0FBZCxDOzs7Ozs7Ozs7Ozs7QUNSUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU0sWUFBMEMsU0FBMUMsU0FBMEMsR0FBSztBQUMxRCxXQUNFLG9EQUFDLG9EQUFELEVBQVMsRUFBQyxPQUFPLDRDQUFSLEVBQVQsRUFDRSxvREFBQyw4REFBRCxFQUFjLElBQWQsRUFDRSxpRUFDRSxvREFBQyx1REFBRCxFQUFPLElBQVAsRUFDRSxvREFBQyxzREFBRCxFQUFNLEVBQUMsTUFBSyxHQUFOLEVBQVUsV0FBVyxpREFBckIsRUFBTixDQURGLENBREYsQ0FERixDQURGLENBREY7QUFXRCxDQVpNLEM7Ozs7Ozs7Ozs7OztBQ05QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTSxtQkFBb0IsT0FBZSxvQ0FBZixJQUF1RCw2Q0FBakY7QUFFQSxJQUFNLGNBQWMsQ0FDbEIsbURBRGtCLEVBRWxCLDJEQUZrQixDQUFwQjtBQUtPLElBQU0sUUFBc0IseURBQVcsQ0FDNUMsK0NBRGlDLEVBRWpDLGlCQUNFLHFEQUFlLGtCQUFJLFdBQW5CLENBREYsQ0FGaUMsQ0FBNUIsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXgudHN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBBYm91dDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhYm91dC1wYWdlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+MTAgU3Bpbm5lckFzeW5jPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIDxzbWFsbD5UaGlzIHNhbXBsZSB0YWtlcyBhcyBzdGFydGluZyBwb2ludCBzYW1wbGUgXCIwOSBSZWR1eFwiLjwvc21hbGw+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPHNtYWxsPndlIHdpbGwgZGlzcGxheSBhIGJ1c3kgaW5kaWNhdG9yIHdoZW4gYW4gYWpheCByZXF1ZXN0IGlzIGluIHByb2dyZXNzLjwvc21hbGw+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgdG9wLWJ1ZmZlclwiPlxuICAgICAgICA8aDM+SGlnaGxpZ2h0czwvaDM+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgPHNtYWxsPlRoZSBtb3N0IGludGVyZXN0aW5nIHBhcnRzIHdvcnRoIHRvIHRha2UgYSBsb29rPC9zbWFsbD5cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiB0b3AtYnVmZmVyXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wLWJ1ZmZlclwiPlxuICAgICAgICAgICAgPGg0PjxiPkFjdGlvbnM6PC9iPjwvaDQ+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wLWJ1ZmZlclwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgLi9zcmMvbWlkZGxld2FyZXMvaHR0cC9hY3Rpb25zLnRzOiA8c21hbGw+Q3JlYXRlIGFjdGlvbnMgZm9yIGh0dHAgbWlkZGxld2FyZTwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wLWJ1ZmZlclwiPlxuICAgICAgICAgICAgPGg0PjxiPk1pZGRsZXdhcmVzOjwvYj48L2g0PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcC1idWZmZXJcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgIC4vc3JjL21pZGRsZXdhcmVzL2h0dHAvbWlkZGxld2FyZS50czogPHNtYWxsPkNyZWF0ZSBodHRwIG1pZGRsZXdhcmU8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvcC1idWZmZXJcIj5cbiAgICAgICAgICAgIDxoND48Yj5SZWR1Y2Vyczo8L2I+PC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3AtYnVmZmVyXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAuL3NyYy9yZWR1Y2Vycy9odHRwLnRzOiA8c21hbGw+TWFuYWdlIGh0dHAgc3RhdGU8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvcC1idWZmZXJcIj5cbiAgICAgICAgICAgIDxoND48Yj5TdG9yZTo8L2I+PC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3AtYnVmZmVyXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAuL3N0b3JlLnRzOiA8c21hbGw+VXBkYXRlIHN0b3JlIHRvIHVzZSBpbiBodHRwIG1pZGRsZXdhcmU8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvcC1idWZmZXJcIj5cbiAgICAgICAgICAgIDxoND48Yj5Db21wb25lbnRzOjwvYj48L2g0PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcC1idWZmZXJcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgIC4vc3JjL2NvbW1vbi9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci50c3g6IDxzbWFsbD5QcmVzZW50YXRpb25hbCBjb21wb25lbnQ8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAuL3NyYy9jb21tb24vY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXJDb250YWluZXIudHN4OiA8c21hbGw+Q29udGFpbmVyIGNvbXBvbmVudDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hYm91dCc7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHBSb3V0ZXIgLz5cbiAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgSFRUUF9DQUxMX1NUQVJUOiAnSFRUUF9DQUxMX1NUQVJUJyxcbiAgSFRUUF9DQUxMX0VORDogJ0hUVFBfQ0FMTF9FTkQnLFxufTtcbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBodHRwQ2FsbFN0YXJ0QWN0aW9uID0gKCkgPT4gKHtcbiAgdHlwZTogYWN0aW9uVHlwZXMuSFRUUF9DQUxMX1NUQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBodHRwQ2FsbEVuZEFjdGlvbiA9ICgpID0+ICh7XG4gIHR5cGU6IGFjdGlvblR5cGVzLkhUVFBfQ0FMTF9FTkQsXG59KTtcbiIsImltcG9ydCB7IGh0dHBDYWxsRW5kQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGh0dHBNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2ggfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoSHR0cENhbGxFbmRBY3Rpb24oZGlzcGF0Y2gsIG5leHQsIGFjdGlvbik7XG59O1xuXG5jb25zdCBkaXNwYXRjaEh0dHBDYWxsRW5kQWN0aW9uID0gKGRpc3BhdGNoLCBuZXh0LCBhY3Rpb24pID0+IHtcbiAgY29uc3QgaHR0cEVuZCA9IGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLmh0dHBFbmQ7XG5cbiAgaWYgKCFodHRwRW5kKSB7XG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBuZXh0QWN0aW9uID0gY2xlYW5BY3Rpb24oYWN0aW9uKTtcbiAgICBuZXh0KG5leHRBY3Rpb24pO1xuICAgIHJldHVybiBkaXNwYXRjaChodHRwQ2FsbEVuZEFjdGlvbigpKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYW5BY3Rpb24gPSAoYWN0aW9uKSA9PiAoe1xuICAuLi5hY3Rpb24sXG4gIG1ldGE6IHtcbiAgICAuLi5hY3Rpb24ubWV0YSxcbiAgICBodHRwRW5kOiBudWxsLFxuICB9LFxufSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2h0dHAvbWlkZGxld2FyZSc7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBNZW1iZXJFbnRpdHksIE1lbWJlckVycm9ycyB9IGZyb20gJy4uL21vZGVsJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiBcbn07XG5cbmV4cG9ydCBjb25zdCBzdGF0ZSA9IGNvbWJpbmVSZWR1Y2VyczxTdGF0ZT4oe1xuIFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IEFib3V0IH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEFwcFJvdXRlcjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IHsgU3RvcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcmVkdXhUaHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBodHRwTWlkZGxld2FyZSB9IGZyb20gJy4vbWlkZGxld2FyZXMnO1xuaW1wb3J0IHsgc3RhdGUsIFN0YXRlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbmNvbnN0IG1pZGRsZXdhcmVzID0gW1xuICByZWR1eFRodW5rLFxuICBodHRwTWlkZGxld2FyZSxcbl07XG5cbmV4cG9ydCBjb25zdCBzdG9yZTogU3RvcmU8U3RhdGU+ID0gY3JlYXRlU3RvcmUoXG4gIHN0YXRlLFxuICBjb21wb3NlRW5oYW5jZXJzKFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyksXG4gICksXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
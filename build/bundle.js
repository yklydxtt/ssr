/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _Header = _interopRequireDefault(__webpack_require__(/*! ./containers/components/Header */ \"./src/containers/components/Header/index.js\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar App = function App(props) {\n  return _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(_Header[\"default\"], null), (0, _reactRouterConfig.renderRoutes)(props.route.routes));\n};\n\nvar _default = App;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _Home = _interopRequireDefault(__webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\"));\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ \"./src/App.js\"));\n\nvar _Login = _interopRequireDefault(__webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar Routes = [{\n  path: '/',\n  component: _App[\"default\"],\n  key: 'app',\n  routes: [{\n    path: \"/\",\n    component: _Home[\"default\"],\n    exact: true,\n    loadData: function loadData(store) {\n      return _Home[\"default\"].loadData(store);\n    },\n    key: 1\n  }, {\n    path: \"/Login\",\n    component: _Login[\"default\"],\n    exact: true,\n    key: 2\n  }]\n}];\nvar _default = Routes;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _axios[\"default\"].create({\n  baseURL: '/'\n});\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar Home = function Home(props) {\n  (0, _react.useEffect)(function () {\n    props.getList();\n  }, []);\n\n  var renderList = function renderList() {\n    return props.newsList.map(function (item) {\n      return _react[\"default\"].createElement(\"div\", {\n        key: item.id\n      }, item.title);\n    });\n  };\n\n  return _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"div\", null, \"hello,\", props.name), renderList(), _react[\"default\"].createElement(\"button\", {\n    onClick: function onClick() {\n      alert('hello');\n    }\n  }, \"\\u70B9\\u6211\\u8BD5\\u8BD5\"));\n};\n\nHome.loadData = function (store) {\n  return store.dispatch((0, _actions.getList)());\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    newsList: state.home.newsList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getList: function getList() {\n      return dispatch((0, _actions.getList)(dispatch));\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getList = void 0;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nvar _constans = __webpack_require__(/*! ./constans */ \"./src/containers/Home/store/constans.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar getList = function getList() {\n  return function (dispatch, getState, request) {\n    return request.get('/api/news.json?secret=PP87ANTIPIRATE').then(function (data) {\n      var list = data.data.data;\n      dispatch({\n        type: _constans.CHANGE_LIST,\n        list: list\n      });\n    });\n  };\n};\n\nexports.getList = getList;\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constans.js":
/*!***********************************************!*\
  !*** ./src/containers/Home/store/constans.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CHANGE_LIST = void 0;\nvar CHANGE_LIST = 'CHANGE_LIST';\nexports.CHANGE_LIST = CHANGE_LIST;\n\n//# sourceURL=webpack:///./src/containers/Home/store/constans.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"reducer\", {\n  enumerable: true,\n  get: function get() {\n    return _reducer[\"default\"];\n  }\n});\n\nvar _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _constans = __webpack_require__(/*! ./constans */ \"./src/containers/Home/store/constans.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaultState = {\n  name: 'xiaoguoguo',\n  newsList: []\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constans.CHANGE_LIST:\n      return _objectSpread({}, state, {\n        newsList: action.list\n      });\n\n    default:\n      return state;\n  }\n};\n\nvar _default = reducer;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar Login = function Login() {\n  return _react[\"default\"].createElement(\"div\", null, \"Login\");\n};\n\nvar _default = Login;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/components/Header/index.js":
/*!***************************************************!*\
  !*** ./src/containers/components/Header/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar Header = function Header() {\n  return _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(_reactRouterDom.Link, {\n    to: \"/\"\n  }, \"home\"), _react[\"default\"].createElement(\"br\", null), _react[\"default\"].createElement(_reactRouterDom.Link, {\n    to: \"/Login\"\n  }, \"login\"));\n};\n\nvar _default = Header;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/containers/components/Header/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _expressHttpProxy = _interopRequireDefault(__webpack_require__(/*! express-http-proxy */ \"express-http-proxy\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = _interopRequireDefault(__webpack_require__(/*! ../Routes */ \"./src/Routes.js\"));\n\nvar _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ \"./src/server/utils.js\"));\n\nvar _index = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar app = (0, _express[\"default\"])();\nvar port = 3000;\napp.use(_express[\"default\"][\"static\"]('public'));\napp.use('/api', (0, _expressHttpProxy[\"default\"])('http://47.95.113.63', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    var parts = req.url.split('?');\n    var queryString = parts[1];\n    var updatedPath = \"/ssr/api\".concat(parts[0]);\n    return updatedPath + (queryString ? '?' + queryString : '');\n  }\n}));\napp.get('*', function (req, res) {\n  var store = (0, _index.serverStore)();\n  var branch = (0, _reactRouterConfig.matchRoutes)(_Routes[\"default\"], req.path);\n  var promises = branch.map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : Promise.resolve(null);\n  });\n  Promise.all(promises).then(function () {\n    res.send((0, _utils[\"default\"])(req, _Routes[\"default\"], store));\n  });\n});\napp.listen(port, function () {\n  return console.log(\"Example app listening on port \".concat(port, \"!\"));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _axios[\"default\"].create({\n  baseURL: 'http://47.95.113.63/ssr/'\n});\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar render = function render(req, Routes, store) {\n  var content = (0, _server.renderToString)(_react[\"default\"].createElement(_reactRedux.Provider, {\n    store: store\n  }, _react[\"default\"].createElement(_reactRouterDom.StaticRouter, {\n    location: req.url,\n    context: {}\n  }, (0, _reactRouterConfig.renderRoutes)(Routes))));\n  return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>Document</title>\\n    </head>\\n    <body>\\n        <div id=\\\"root\\\">\".concat(content, \"</div>\\n        <script>\\n        window.context ={\\n             state:\").concat(JSON.stringify(store.getState()), \"\\n        }\\n        </script>\\n        <script src=\\\"/index.js\\\" ></script>\\n    </body>\\n    </html>\\n    \");\n};\n\nvar _default = render;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.clientStore = exports.serverStore = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _index = __webpack_require__(/*! ../containers/Home/store/index */ \"./src/containers/Home/store/index.js\");\n\nvar _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\n\nvar _request = _interopRequireDefault(__webpack_require__(/*! ../server/request */ \"./src/server/request.js\"));\n\nvar _request2 = _interopRequireDefault(__webpack_require__(/*! ../client/request */ \"./src/client/request.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _index.reducer\n});\n\nvar serverStore = function serverStore() {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk[\"default\"].withExtraArgument(_request[\"default\"])));\n};\n\nexports.serverStore = serverStore;\n\nvar clientStore = function clientStore() {\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk[\"default\"].withExtraArgument(_request2[\"default\"])));\n};\n\nexports.clientStore = clientStore;\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });
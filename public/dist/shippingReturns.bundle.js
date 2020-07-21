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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/components/shippingReturns.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/details.jsx":
/*!***************************************!*\
  !*** ./client/components/details.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// functional component to display info\nvar Details = function Details(props) {\n  return React.createElement(\"div\", {\n    id: \"short-reviews\"\n  }, \"Free standard shipping and free 60-day returns for Nike Members. \", React.createElement(\"a\", null, \"Learn more. Return policy exclusions apply.\"), React.createElement(\"ul\", null, React.createElement(\"li\", null, \"Standard / Arrives 2-4 Business Days\"), React.createElement(\"li\", null, \"Two-Day / Arrives 2-3 Business Days\"), React.createElement(\"li\", null, \"Next-Day / Arrives 1-2 Business Days\")), React.createElement(\"a\", null, \"Pick-up available at select Nike Stores.\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9kZXRhaWxzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2RldGFpbHMuanN4PzFhMjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb25hbCBjb21wb25lbnQgdG8gZGlzcGxheSBpbmZvXG52YXIgRGV0YWlscyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J3Nob3J0LXJldmlld3MnPlxuICAgICAgRnJlZSBzdGFuZGFyZCBzaGlwcGluZyBhbmQgZnJlZSA2MC1kYXkgcmV0dXJucyBmb3IgTmlrZSBNZW1iZXJzLiA8YT5MZWFybiBtb3JlLiBSZXR1cm4gcG9saWN5IGV4Y2x1c2lvbnMgYXBwbHkuPC9hPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+U3RhbmRhcmQgLyBBcnJpdmVzIDItNCBCdXNpbmVzcyBEYXlzPC9saT5cbiAgICAgICAgPGxpPlR3by1EYXkgLyBBcnJpdmVzIDItMyBCdXNpbmVzcyBEYXlzPC9saT5cbiAgICAgICAgPGxpPk5leHQtRGF5IC8gQXJyaXZlcyAxLTIgQnVzaW5lc3MgRGF5czwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGE+UGljay11cCBhdmFpbGFibGUgYXQgc2VsZWN0IE5pa2UgU3RvcmVzLjwvYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/details.jsx\n");

/***/ }),

/***/ "./client/components/shippingReturns.jsx":
/*!***********************************************!*\
  !*** ./client/components/shippingReturns.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShippingReturns; });\n/* harmony import */ var _details_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.jsx */ \"./client/components/details.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n// import React from 'react';\n // stateful class component for displaying shipping and return info\n\nvar ShippingReturns = /*#__PURE__*/function (_React$Component) {\n  _inherits(ShippingReturns, _React$Component);\n\n  function ShippingReturns(props) {\n    var _this;\n\n    _classCallCheck(this, ShippingReturns);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShippingReturns).call(this, props));\n    _this.state = {\n      extended: false\n    };\n    return _this;\n  }\n\n  _createClass(ShippingReturns, [{\n    key: \"showInfo\",\n    value: function showInfo() {\n      this.setState({\n        extended: !this.state.extended\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", {\n        className: \"breaker-line\"\n      }, React.createElement(\"div\", {\n        id: \"reviews-header\",\n        onClick: function onClick() {\n          return _this2.showInfo();\n        }\n      }, React.createElement(\"span\", null, \"Free Shipping & Returns\"), React.createElement(\"span\", null, this.state.extended ? React.createElement(\"i\", {\n        className: \"arrow up\"\n      }) : React.createElement(\"i\", {\n        className: \"arrow down\"\n      }))), this.state.extended ? React.createElement(_details_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null) : null);\n    }\n  }]);\n\n  return ShippingReturns;\n}(React.Component);\n\n\n;\nwindow.ShippingReturns = ShippingReturns;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9zaGlwcGluZ1JldHVybnMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc2hpcHBpbmdSZXR1cm5zLmpzeD83NmNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2RldGFpbHMuanN4JztcblxuLy8gc3RhdGVmdWwgY2xhc3MgY29tcG9uZW50IGZvciBkaXNwbGF5aW5nIHNoaXBwaW5nIGFuZCByZXR1cm4gaW5mb1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdSZXR1cm5zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4dGVuZGVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHNob3dJbmZvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHRlbmRlZDogIXRoaXMuc3RhdGUuZXh0ZW5kZWQgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JyZWFrZXItbGluZSc+XG4gICAgICAgIDxkaXYgaWQ9XCJyZXZpZXdzLWhlYWRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd0luZm8oKX0+XG4gICAgICAgICAgPHNwYW4+RnJlZSBTaGlwcGluZyAmIFJldHVybnM8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5leHRlbmRlZCA/IDxpIGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9pPjogPGkgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvaT59XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuZXh0ZW5kZWQgPyA8RGV0YWlscy8+OiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICApXG4gIH1cbn07XG5cblxud2luZG93LlNoaXBwaW5nUmV0dXJucyA9IFNoaXBwaW5nUmV0dXJuczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7O0FBMUJBO0FBQ0E7QUFEQTtBQTJCQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/shippingReturns.jsx\n");

/***/ })

/******/ });
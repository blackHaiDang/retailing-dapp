module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "83SU":
/***/ (function(module, exports) {

module.exports = require("ethereumjs-tx");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CIUX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Button({
  title,
  onClick,
  full = false
}) {
  let classNames = "text-sm font-bold tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-12 border-2 border-black hover:border-transparent";

  if (full) {
    classNames = `${classNames} w-full`;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    onClick: onClick,
    className: classNames,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: title
    })
  });
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IF/j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slugify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return titleIfy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTrimmedString; });
function slugify(string) {
  const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
  const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return string.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
  .replace(/&/g, '-and-') // Replace & with 'and'
  .replace(/[^\w-]+/g, '') // Remove all non-word characters
  .replace(/--+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text
}

function titleIfy(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}

function getTrimmedString(string, length = 8) {
  if (string.length <= length) {
    return string;
  } else {
    return string.substring(0, length) + '...';
  }
}



/***/ }),

/***/ "LaK9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

let inventory = [{
  categories: ['new arrivals'],
  name: 'Timber Gray Sofa 2.0',
  price: '1000',
  image: '/products/couch1.png',
  description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.',
  brand: 'Jason Bourne',
  currentInventory: 4
}, {
  categories: ['sofas', 'living room'],
  name: 'Carmel Brown Sofa',
  price: '1000',
  image: '/products/couch5.png',
  description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.',
  brand: 'Jason Bourne',
  currentInventory: 2
}, {
  categories: ['new arrivals', 'sofas'],
  name: 'Mod Leather Sofa',
  price: '800',
  image: '/products/couch6.png',
  description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.',
  brand: 'Jason Bourne',
  currentInventory: 8
}, {
  categories: ['new arrivals', 'sofas'],
  name: 'Thetis Gray Love Seat',
  price: '900',
  image: '/products/couch7.png',
  description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.',
  brand: 'Jason Bourne',
  currentInventory: 10
}, {
  categories: ['on sale', 'sofas'],
  name: 'Sven Tan Matte',
  price: '1200',
  image: '/products/couch8.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 7
}, {
  categories: ['on sale', 'sofas'],
  name: 'Otis Malt Sofa',
  price: '500',
  image: '/products/couch9.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 13
}, {
  categories: ['on sale', 'sofas'],
  name: 'Ceni Brown 3 Seater',
  price: '650',
  image: '/products/couch10.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 9
}, {
  categories: ['sofas', 'living room'],
  name: 'Jameson Jack Lounger',
  price: '1230',
  image: '/products/couch11.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 24
}, {
  categories: ['sofas'],
  name: 'Galaxy Blue Sofa',
  price: '800',
  image: '/products/couch2.png',
  description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.',
  brand: 'Jason Bourne',
  currentInventory: 43
}, {
  categories: ['new arrivals', 'sofas'],
  name: 'Markus Green Love Seat',
  price: '900',
  image: '/products/couch3.png',
  description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.',
  brand: 'Jason Bourne',
  currentInventory: 2
}, {
  categories: ['on sale', 'sofas'],
  name: 'Dabit Matte Black',
  price: '1200',
  image: '/products/couch4.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  currentInventory: 14
}, {
  categories: ['on sale', 'chairs'],
  name: 'Embrace Blue',
  price: '300',
  image: '/products/chair1.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 12
}, {
  categories: ['on sale', 'chairs'],
  name: 'Nord Lounger',
  price: '825',
  image: '/products/chair2.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 13
}, {
  categories: ['on sale', 'chairs'],
  name: 'Ceni Matte Oranve',
  price: '720',
  image: '/products/chair3.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 33
}, {
  categories: ['on sale', 'chairs'],
  name: 'Abisko Green Recliner',
  price: '2000',
  image: '/products/chair4.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 23
}, {
  categories: ['on sale', 'chairs'],
  name: 'Denim on Denim Single',
  price: '1100',
  image: '/products/chair5.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 13
}, {
  categories: ['on sale', 'chairs'],
  name: 'Levo Tan Lounge Chair',
  price: '600',
  image: '/products/chair6.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 15
}, {
  categories: ['on sale', 'chairs'],
  name: 'Anime Tint Recliner',
  price: '775',
  image: '/products/chair7.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 44
}, {
  categories: ['on sale', 'chairs'],
  name: 'Josh Jones Red Chair',
  price: '1200',
  image: '/products/chair8.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 17
}, {
  categories: ['on sale', 'chairs'],
  name: 'Black Sand Lounge',
  price: '1600',
  image: '/products/chair9.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 28
}, {
  categories: ['on sale', 'chairs'],
  name: 'Mint Beige Workchair',
  price: '550',
  image: '/products/chair10.png',
  description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
  brand: 'Jason Bourne',
  currentInventory: 31
} // { 
];
inventory.map(i => {
  i.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
  return i;
});
/* harmony default export */ __webpack_exports__["a"] = (inventory);

/***/ }),

/***/ "MDWq":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("e+cM");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IF/j");
/* harmony import */ var _utils_inventoryProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UN/x");
/* harmony import */ var _components_CartLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("d9Pb");
/* harmony import */ var _components_transaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("aBcW");










const Home = ({
  inventoryData = [],
  categories: categoryData = []
}) => {
  const inventory = inventoryData.slice(0, 4);
  const categories = categoryData.slice(0, 2);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_CartLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "w-full",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
          children: "ECommerce Dapp"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          name: "description",
          content: "Jamstack ECommerce Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          property: "og:title",
          content: "Jamstack ECommerce"
        }, "title")]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
        onClick: _components_transaction__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
        children: "TX"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "bg-blue-300\r p-6 pb-10 smpb-6\r flex lg:flex-row flex-col",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Tag */ "g"], {
            year: "2021",
            category: "SOFAS"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Center */ "b"], {
            price: "200",
            title: inventory[2].name,
            link: `/product/${Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* slugify */ "b"])(inventory[2].name)}`
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Footer */ "e"], {
            designer: "Jason Bourne"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "flex flex-1 justify-center items-center relative",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Showcase */ "f"], {
            imageSrc: inventory[2].image
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "absolute\r w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88\r bg-white z-0 rounded-full"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "\r lg:my-8 lg:grid-cols-2\r grid-cols-1\r grid gap-4 my-4 \r ",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* DisplayMedium */ "c"], {
        imageSrc: categories[0].image,
        subtitle: `${categories[0].itemCount} items`,
        title: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* titleIfy */ "c"])(categories[0].name),
        link: `/category/${Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* slugify */ "b"])(categories[0].name)}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* DisplayMedium */ "c"], {
        imageSrc: categories[1].image,
        subtitle: `${categories[1].itemCount} items`,
        title: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* titleIfy */ "c"])(categories[1].name),
        link: `/category/${Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* slugify */ "b"])(categories[1].name)}`
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "pt-10 pb-6 flex flex-col items-center",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        className: "text-4xl mb-3",
        children: "Trending Now"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        className: "text-gray-600 text-sm",
        children: "Find the perfect piece or accessory to finish off your favorite room in the house."
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "my-8 flex flex-col lg:flex-row justify-between",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* DisplaySmall */ "d"], {
        imageSrc: inventory[0].image,
        title: inventory[0].name,
        subtitle: inventory[0].categories[0],
        link: `/product/${Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* slugify */ "b"])(inventory[0].name)}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* DisplaySmall */ "d"], {
        imageSrc: inventory[1].image,
        title: inventory[1].name,
        subtitle: inventory[1].categories[0],
        link: `/product/${Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* slugify */ "b"])(inventory[1].name)}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* DisplaySmall */ "d"], {
        imageSrc: inventory[2].image,
        title: inventory[2].name,
        subtitle: inventory[2].categories[0],
        link: `/product/${Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* slugify */ "b"])(inventory[2].name)}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* DisplaySmall */ "d"], {
        imageSrc: inventory[3].image,
        title: inventory[3].name,
        subtitle: inventory[3].categories[0],
        link: `/product/${Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* slugify */ "b"])(inventory[3].name)}`
      })]
    })]
  });
};

async function getStaticProps() {
  const inventory = await Object(_utils_inventoryProvider__WEBPACK_IMPORTED_MODULE_4__[/* fetchInventory */ "a"])();
  const inventoryCategorized = inventory.reduce((acc, next) => {
    const categories = next.categories;
    categories.forEach(c => {
      const index = acc.findIndex(item => item.name === c);

      if (index !== -1) {
        const item = acc[index];
        item.itemCount = item.itemCount + 1;
        acc[index] = item;
      } else {
        const item = {
          name: c,
          image: next.image,
          itemCount: 1
        };
        acc.push(item);
      }
    });
    return acc;
  }, []);
  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "UN/x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchInventory; });
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LaK9");

/*
Inventory items should adhere to the following schema:
type Product {
  id: ID!
  categories: [String]!
  price: Float!
  name: String!
  image: String!
  description: String!
  currentInventory: Int!
  brand: String
  sku: ID
}
*/

async function fetchInventory() {
  // const inventory = API.get(apiUrl)
  return Promise.resolve(_inventory__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
}



/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VnCb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SiteContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextProviderComponent; });
/* unused harmony export calculateTotal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const STORAGE_KEY = 'NEXT_ECOMMERCE_STARTER_';
const initialState = {
  cart: [],
  numberOfItemsInCart: 0,
  total: 0
};
const SiteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();

function calculateTotal(cart) {
  const total = cart.reduce((acc, next) => {
    const quantity = next.quantity;
    acc = acc + JSON.parse(next.price) * quantity;
    return acc;
  }, 0);
  return total;
}

class ContextProviderComponent extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "setItemQuantity", item => {
      const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      const {
        cart
      } = storageState;
      const index = cart.findIndex(cartItem => cartItem.id === item.id);
      cart[index].quantity = item.quantity;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart)
      }));
      this.forceUpdate();
    });

    _defineProperty(this, "addToCart", item => {
      const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      const {
        cart
      } = storageState;

      if (cart.length) {
        const index = cart.findIndex(cartItem => cartItem.id === item.id);

        if (index >= Number(0)) {
          /* If this item is already in the cart, update the quantity */
          cart[index].quantity = cart[index].quantity + item.quantity;
        } else {
          /* If this item is not yet in the cart, add it */
          cart.push(item);
        }
      } else {
        /* If no items in the cart, add the first item. */
        cart.push(item);
      }

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart)
      }));
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])("Successfully added item to cart!", {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT
      });
      this.forceUpdate();
    });

    _defineProperty(this, "removeFromCart", item => {
      const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      let {
        cart
      } = storageState;
      cart = cart.filter(c => c.id !== item.id);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart)
      }));
      this.forceUpdate();
    });

    _defineProperty(this, "clearCart", () => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState));
      this.forceUpdate();
    });
  }

  componentDidMount() {
    if (false) {}
  }

  render() {
    let state = initialState;

    if (false) {}

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SiteContext.Provider, {
      value: _objectSpread(_objectSpread({}, state), {}, {
        addToCart: this.addToCart,
        clearCart: this.clearCart,
        removeFromCart: this.removeFromCart,
        setItemQuantity: this.setItemQuantity
      }),
      children: this.props.children
    });
  }

}



/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "aBcW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MDWq");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
 //var web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/')

var Tx = __webpack_require__("83SU").Transaction;

const {
  abi
} = __webpack_require__("em+P");

const tokenContractAddress = '0xa24cc613Ecd1be73B474b12EEb9592388e8509b2';
const toAddress = '0x57102EB7596D54cE2C139C7b047024286ca8Ba54';

function tx() {
  if (window.ethereum && window.ethereum.chainId == '0x5') {
    window.ethereum.request({
      method: "eth_requestAccounts"
    });
    window.web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum); // // set token source, destination and amount

    const account = web3.eth.accounts;
    const fromAddress = account.givenProvider.selectedAddress; // var toAddress = "0x57102EB7596D54cE2C139C7b047024286ca8Ba54"
    // var amount = web3.utils.toHex(1e16)
    // // get transaction count, later will used as nonce
    // web3.eth.getTransactionCount(myAddress).then(function(v){console.log(v)})  
    // // set your private key here, we'll sign the transaction below
    // var privateKey = '2EFb54Fd77dc2BE0B2463F8E049502330d5C9791'
    // var privateKeyBuffer = new Buffer.from('2EFb54Fd77dc2BE0B2463F8E049502330d5C9791', 'hex')  
    // // Get abi array here https://etherscan.io/address/0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0#code
    // var abiArray = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint128"}],"name":"push","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"bytes32"}],"name":"setName","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint128"}],"name":"mint","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint128"}],"name":"pull","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint128"}],"name":"burn","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"symbol_","type":"bytes32"}],"payable":false,"type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]
    // // Here you may get the abicode from a string or a file, here is a string case
    // var abiArray = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint128"}],"name":"push","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"bytes32"}],"name":"setName","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint128"}],"name":"mint","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint128"}],"name":"pull","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint128"}],"name":"burn","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"symbol_","type":"bytes32"}],"payable":false,"type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]', 'utf-8')
    // var contractAddress = '0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0'
    // var contract = new web3.eth.Contract(abiArray, contractAddress, {from: myAddress})
    // var rawTransaction = {"from":myAddress,
    //  "gasPrice":web3.utils.toHex(2 * 1e9),
    //  "gasLimit":web3.utils.toHex(210000),
    //  "to":contractAddress,
    //  "value":"0x0",
    //  "data":contract.methods.transfer(toAddress, amount).encodeABI(),
    //  "nonce": 1} 
    // // const transaction = new Tx(rawTransaction)
    // // transaction.sign(privateKeyBuffer)
    // web3.eth.accounts.signTransaction(rawTransaction, privateKey).then(signedTx => {
    //     web3.eth.sendSignedTransaction(signedTx);
    // })
    // //web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
    // // check the balance
    // contract.methods.balanceOf(myAddress).call().then(function(balance){console.log(balance)})
  }

  const contract = new web3.eth.Contract(abi, tokenContractAddress);

  if (window.ethereum.chainId == '0x5') {
    window.ethereum.request({
      method: "eth_requestAccounts"
    });
    window.web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum); // // set token source, destination and amount

    const account = web3.eth.accounts;
    const fromAddress = account.givenProvider.selectedAddress;
    contract.methods.paid(toAddress, 10).send({
      from: fromAddress
    }).on('receipt', receipt => {
      console.log(receipt);
    });
  } else {
    ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: '0x5'
      }]
    });
  } //0x61:BSC; 0x5: Goerli

}

/* harmony default export */ __webpack_exports__["a"] = (tx);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d9Pb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./context/mainContext.js
var mainContext = __webpack_require__("VnCb");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./theme.js
const colors = {
  primary: '#89bdf9'
};

// CONCATENATED MODULE: ./components/CartLink.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  primary
} = colors;

function CartLink(props) {
  const {
    0: renderClientSideComponent,
    1: setRenderClientSideComponent
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setRenderClientSideComponent(true);
  }, []);
  let {
    context: {
      numberOfItemsInCart = 0
    }
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "fixed\r sm:top-53 right-24 desktop:right-flexiblemargin\r top-40 z-10",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-1 justify-end pr-4 relative",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/cart",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            "aria-label": "Cart",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaShoppingCart"], {})
          })
        }), renderClientSideComponent && numberOfItemsInCart > Number(0) && /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaCircle"], {
          color: primary,
          size: 12,
          suppressHydrationWarning: true
        })]
      })
    })
  });
}

function CartLinkWithContext(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(mainContext["a" /* ContextProviderComponent */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(mainContext["b" /* SiteContext */].Consumer, {
      children: context => /*#__PURE__*/Object(jsx_runtime_["jsx"])(CartLink, _objectSpread(_objectSpread({}, props), {}, {
        context: context
      }))
    })
  });
}

/* harmony default export */ var components_CartLink = __webpack_exports__["a"] = (CartLinkWithContext);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ heroComponents_Tag; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ heroComponents_Center; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ heroComponents_Footer; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Button["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ heroComponents_Showcase; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ heroComponents_DisplaySmall; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ heroComponents_DisplayMedium; });

// UNUSED EXPORTS: Image, Spacer

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/heroComponents/Tag.js



const Tag = ({
  category,
  year
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "border-l border-gray-900 px-3 pt-1 mb-10",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "text-xs tracking-wider m-0 leading-tight",
      children: category
    }), year && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "text-xs tracking-wider m-0 leading-tight",
      children: year
    })]
  });
};

/* harmony default export */ var heroComponents_Tag = (Tag);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/heroComponents/Center.js





const Center = ({
  price,
  title,
  link
}) => {
  const router = Object(router_["useRouter"])();

  function navigate() {
    router.push(link);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "text-4xl xl:text-5xl font-bold tracking-widest leading-none",
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "py-6 tracking-wide",
      children: ["FROM ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        children: ["$", price]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
      onClick: navigate,
      title: "Shop Now"
    })]
  });
};

/* harmony default export */ var heroComponents_Center = (Center);
// CONCATENATED MODULE: ./components/heroComponents/Footer.js



const Footer = ({
  designer
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex flex-1 flex-col justify-end pb-10 mt-4",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "font-light text-xs tracking-tight m-0 leading-tight mb-2",
      children: "Design by"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "text-xxs font-semibold tracking-tight m-0 leading-tight",
      children: designer
    })]
  });
};

/* harmony default export */ var heroComponents_Footer = (Footer);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__("xY5u");

// CONCATENATED MODULE: ./components/heroComponents/Showcase.js



const Showcase = ({
  imageSrc
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "z-10",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Image["a" /* default */], {
      src: imageSrc,
      className: "w-136",
      alt: "Showcase item"
    })
  });
};

/* harmony default export */ var heroComponents_Showcase = (Showcase);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./utils/helpers.js
var helpers = __webpack_require__("IF/j");

// CONCATENATED MODULE: ./components/heroComponents/DisplaySmall.js






const DisplaySmall = ({
  link,
  title,
  subtitle,
  imageSrc
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: "lg:w-flex-fourth bg-light\r px-6 pt-10 pb-2 lg:p-6 lg:pb-0\r hover:bg-light-200 lg:mb-0 mb-4",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
    href: link,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
      "aria-label": title,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-column justify-center items-center h-32",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Image["a" /* default */], {
          alt: title,
          src: imageSrc,
          className: "w-3/5"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-xl font-semibold mb-1",
          children: title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-xs text-gray-700 mb-4",
          children: Object(helpers["a" /* getTrimmedString */])(subtitle, 150)
        })]
      })]
    })
  })
});

/* harmony default export */ var heroComponents_DisplaySmall = (DisplaySmall);
// CONCATENATED MODULE: ./components/heroComponents/DisplayMedium.js





const DisplayMedium = ({
  imageSrc,
  title,
  subtitle,
  link
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "\r mb-4 lg:mb-0\r bg-light p-8 pb-0 hover:bg-light-200",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: `${link}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        "aria-label": title,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-column justify-center items-center h-56",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Image["a" /* default */], {
            src: imageSrc,
            alt: title,
            className: "w-3/5"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "mb-8",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-3xl font-semibold mb-1",
            children: title
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-xs text-gray-700",
            children: subtitle
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var heroComponents_DisplayMedium = (DisplayMedium);
// CONCATENATED MODULE: ./components/heroComponents/Spacer.js


const Spacer = ({
  width
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: `m-${width}`
});

/* harmony default export */ var heroComponents_Spacer = (Spacer);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__("CIUX");

// CONCATENATED MODULE: ./components/index.js











/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "em+P":
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"Retailing\",\"abi\":[{\"inputs\":[],\"name\":\"customer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"value\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"paid\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.8.17+commit.8df45f5f\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"name\\\":\\\"customer\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"owner\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"buyer\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"paid\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"value\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"project:/contracts/Retailing.sol\\\":\\\"Retailing\\\"},\\\"evmVersion\\\":\\\"london\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"project:/contracts/Retailing.sol\\\":{\\\"keccak256\\\":\\\"0x2d4c5b042c087cac88ab3c534836e8b1bc6db1e4e2009dca801918d663490bc3\\\",\\\"license\\\":\\\"MIT\\\",\\\"urls\\\":[\\\"bzz-raw://00d314e407ebaa59c102cadc453bc47af10c4bb4c76118ee2ce9ff2578d17885\\\",\\\"dweb:/ipfs/Qmb7wkbZCAD9qpipXzfjTPpDD81Soj2MwgHapAZEjAgoFy\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b5061030c806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632804b2c0146100515780633fa4f2451461006f5780638c7266181461008d5780638da5cb5b146100a9575b600080fd5b6100596100c7565b60405161006691906101ea565b60405180910390f35b6100776100eb565b604051610084919061021e565b60405180910390f35b6100a760048036038101906100a29190610296565b6100f1565b005b6100b1610183565b6040516100be91906101ea565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600181106100fe57600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d4826101a9565b9050919050565b6101e4816101c9565b82525050565b60006020820190506101ff60008301846101db565b92915050565b6000819050919050565b61021881610205565b82525050565b6000602082019050610233600083018461020f565b92915050565b600080fd5b610247816101c9565b811461025257600080fd5b50565b6000813590506102648161023e565b92915050565b61027381610205565b811461027e57600080fd5b50565b6000813590506102908161026a565b92915050565b600080604083850312156102ad576102ac610239565b5b60006102bb85828601610255565b92505060206102cc85828601610281565b915050925092905056fea264697066735822122085bfb8a2acf185cf18fe85604fad95185ce7e50dc8f8afd9cdec02c5410125a064736f6c63430008110033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80632804b2c0146100515780633fa4f2451461006f5780638c7266181461008d5780638da5cb5b146100a9575b600080fd5b6100596100c7565b60405161006691906101ea565b60405180910390f35b6100776100eb565b604051610084919061021e565b60405180910390f35b6100a760048036038101906100a29190610296565b6100f1565b005b6100b1610183565b6040516100be91906101ea565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600181106100fe57600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d4826101a9565b9050919050565b6101e4816101c9565b82525050565b60006020820190506101ff60008301846101db565b92915050565b6000819050919050565b61021881610205565b82525050565b6000602082019050610233600083018461020f565b92915050565b600080fd5b610247816101c9565b811461025257600080fd5b50565b6000813590506102648161023e565b92915050565b61027381610205565b811461027e57600080fd5b50565b6000813590506102908161026a565b92915050565b600080604083850312156102ad576102ac610239565b5b60006102bb85828601610255565b92505060206102cc85828601610281565b915050925092905056fea264697066735822122085bfb8a2acf185cf18fe85604fad95185ce7e50dc8f8afd9cdec02c5410125a064736f6c63430008110033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[{\"ast\":{\"nodeType\":\"YulBlock\",\"src\":\"0:2378:6\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"52:81:6\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"62:65:6\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"77:5:6\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"84:42:6\",\"type\":\"\",\"value\":\"0xffffffffffffffffffffffffffffffffffffffff\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"73:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"73:54:6\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"62:7:6\"}]}]},\"name\":\"cleanup_t_uint160\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"34:5:6\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"44:7:6\",\"type\":\"\"}],\"src\":\"7:126:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"184:51:6\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"194:35:6\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"223:5:6\"}],\"functionName\":{\"name\":\"cleanup_t_uint160\",\"nodeType\":\"YulIdentifier\",\"src\":\"205:17:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"205:24:6\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"194:7:6\"}]}]},\"name\":\"cleanup_t_address\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"166:5:6\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"176:7:6\",\"type\":\"\"}],\"src\":\"139:96:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"306:53:6\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"323:3:6\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"346:5:6\"}],\"functionName\":{\"name\":\"cleanup_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"328:17:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"328:24:6\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"316:6:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"316:37:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"316:37:6\"}]},\"name\":\"abi_encode_t_address_to_t_address_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"294:5:6\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"301:3:6\",\"type\":\"\"}],\"src\":\"241:118:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"463:124:6\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"473:26:6\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"485:9:6\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"496:2:6\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"481:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"481:18:6\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"473:4:6\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"553:6:6\"},{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"566:9:6\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"577:1:6\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"562:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"562:17:6\"}],\"functionName\":{\"name\":\"abi_encode_t_address_to_t_address_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"509:43:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"509:71:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"509:71:6\"}]},\"name\":\"abi_encode_tuple_t_address__to_t_address__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"435:9:6\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"447:6:6\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"458:4:6\",\"type\":\"\"}],\"src\":\"365:222:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"638:32:6\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"648:16:6\",\"value\":{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"659:5:6\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"648:7:6\"}]}]},\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"620:5:6\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"630:7:6\",\"type\":\"\"}],\"src\":\"593:77:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"741:53:6\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"758:3:6\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"781:5:6\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"763:17:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"763:24:6\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"751:6:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"751:37:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"751:37:6\"}]},\"name\":\"abi_encode_t_uint256_to_t_uint256_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"729:5:6\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"736:3:6\",\"type\":\"\"}],\"src\":\"676:118:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"898:124:6\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"908:26:6\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"920:9:6\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"931:2:6\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"916:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"916:18:6\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"908:4:6\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"988:6:6\"},{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1001:9:6\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1012:1:6\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"997:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"997:17:6\"}],\"functionName\":{\"name\":\"abi_encode_t_uint256_to_t_uint256_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"944:43:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"944:71:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"944:71:6\"}]},\"name\":\"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"870:9:6\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"882:6:6\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"893:4:6\",\"type\":\"\"}],\"src\":\"800:222:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1068:35:6\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1078:19:6\",\"value\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1094:2:6\",\"type\":\"\",\"value\":\"64\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"1088:5:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1088:9:6\"},\"variableNames\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1078:6:6\"}]}]},\"name\":\"allocate_unbounded\",\"nodeType\":\"YulFunctionDefinition\",\"returnVariables\":[{\"name\":\"memPtr\",\"nodeType\":\"YulTypedName\",\"src\":\"1061:6:6\",\"type\":\"\"}],\"src\":\"1028:75:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1198:28:6\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1215:1:6\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1218:1:6\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"1208:6:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1208:12:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1208:12:6\"}]},\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"1109:117:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1321:28:6\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1338:1:6\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1341:1:6\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"1331:6:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1331:12:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1331:12:6\"}]},\"name\":\"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"1232:117:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1398:79:6\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1455:16:6\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1464:1:6\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1467:1:6\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"1457:6:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1457:12:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1457:12:6\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1421:5:6\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1446:5:6\"}],\"functionName\":{\"name\":\"cleanup_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"1428:17:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1428:24:6\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"1418:2:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1418:35:6\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"1411:6:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1411:43:6\"},\"nodeType\":\"YulIf\",\"src\":\"1408:63:6\"}]},\"name\":\"validator_revert_t_address\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"1391:5:6\",\"type\":\"\"}],\"src\":\"1355:122:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1535:87:6\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1545:29:6\",\"value\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"1567:6:6\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"1554:12:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1554:20:6\"},\"variableNames\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1545:5:6\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1610:5:6\"}],\"functionName\":{\"name\":\"validator_revert_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"1583:26:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1583:33:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1583:33:6\"}]},\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"1513:6:6\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"1521:3:6\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"1529:5:6\",\"type\":\"\"}],\"src\":\"1483:139:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1671:79:6\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1728:16:6\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1737:1:6\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1740:1:6\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"1730:6:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1730:12:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1730:12:6\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1694:5:6\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1719:5:6\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"1701:17:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1701:24:6\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"1691:2:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1691:35:6\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"1684:6:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1684:43:6\"},\"nodeType\":\"YulIf\",\"src\":\"1681:63:6\"}]},\"name\":\"validator_revert_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"1664:5:6\",\"type\":\"\"}],\"src\":\"1628:122:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1808:87:6\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1818:29:6\",\"value\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"1840:6:6\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"1827:12:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1827:20:6\"},\"variableNames\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1818:5:6\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1883:5:6\"}],\"functionName\":{\"name\":\"validator_revert_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"1856:26:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1856:33:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1856:33:6\"}]},\"name\":\"abi_decode_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"1786:6:6\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"1794:3:6\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"1802:5:6\",\"type\":\"\"}],\"src\":\"1756:139:6\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1984:391:6\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2030:83:6\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulIdentifier\",\"src\":\"2032:77:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2032:79:6\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2032:79:6\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"2005:7:6\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2014:9:6\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"2001:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2001:23:6\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2026:2:6\",\"type\":\"\",\"value\":\"64\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"1997:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1997:32:6\"},\"nodeType\":\"YulIf\",\"src\":\"1994:119:6\"},{\"nodeType\":\"YulBlock\",\"src\":\"2123:117:6\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"2138:15:6\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2152:1:6\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"2142:6:6\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"2167:63:6\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2202:9:6\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2213:6:6\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2198:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2198:22:6\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"2222:7:6\"}],\"functionName\":{\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"2177:20:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2177:53:6\"},\"variableNames\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"2167:6:6\"}]}]},{\"nodeType\":\"YulBlock\",\"src\":\"2250:118:6\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"2265:16:6\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2279:2:6\",\"type\":\"\",\"value\":\"32\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"2269:6:6\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"2295:63:6\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2330:9:6\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2341:6:6\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2326:3:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2326:22:6\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"2350:7:6\"}],\"functionName\":{\"name\":\"abi_decode_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"2305:20:6\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2305:53:6\"},\"variableNames\":[{\"name\":\"value1\",\"nodeType\":\"YulIdentifier\",\"src\":\"2295:6:6\"}]}]}]},\"name\":\"abi_decode_tuple_t_addresst_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"1946:9:6\",\"type\":\"\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulTypedName\",\"src\":\"1957:7:6\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"1969:6:6\",\"type\":\"\"},{\"name\":\"value1\",\"nodeType\":\"YulTypedName\",\"src\":\"1977:6:6\",\"type\":\"\"}],\"src\":\"1901:474:6\"}]},\"contents\":\"{\\n\\n    function cleanup_t_uint160(value) -> cleaned {\\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\\n    }\\n\\n    function cleanup_t_address(value) -> cleaned {\\n        cleaned := cleanup_t_uint160(value)\\n    }\\n\\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_address(value))\\n    }\\n\\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function cleanup_t_uint256(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint256(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function allocate_unbounded() -> memPtr {\\n        memPtr := mload(64)\\n    }\\n\\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\\n        revert(0, 0)\\n    }\\n\\n    function validator_revert_t_address(value) {\\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\\n    }\\n\\n    function abi_decode_t_address(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_address(value)\\n    }\\n\\n    function validator_revert_t_uint256(value) {\\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\\n    }\\n\\n    function abi_decode_t_uint256(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_uint256(value)\\n    }\\n\\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\\n        }\\n\\n        {\\n\\n            let offset := 32\\n\\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n}\\n\",\"id\":6,\"language\":\"Yul\",\"name\":\"#utility.yul\"}],\"sourceMap\":\"62:243:5:-:0;;;;;;;;;;;;;;;;;;;\",\"deployedSourceMap\":\"62:243:5:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;88:23;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;145:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;172:130;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;118:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;88:23;;;;;;;;;;;;:::o;145:20::-;;;;:::o;172:130::-;246:1;238:5;:9;230:18;;;;;;264:10;256:5;;:18;;;;;;;;;;;;;;;;;;293:5;282:8;;:16;;;;;;;;;;;;;;;;;;172:130;;:::o;118:20::-;;;;;;;;;;;;;:::o;7:126:6:-;44:7;84:42;77:5;73:54;62:65;;7:126;;;:::o;139:96::-;176:7;205:24;223:5;205:24;:::i;:::-;194:35;;139:96;;;:::o;241:118::-;328:24;346:5;328:24;:::i;:::-;323:3;316:37;241:118;;:::o;365:222::-;458:4;496:2;485:9;481:18;473:26;;509:71;577:1;566:9;562:17;553:6;509:71;:::i;:::-;365:222;;;;:::o;593:77::-;630:7;659:5;648:16;;593:77;;;:::o;676:118::-;763:24;781:5;763:24;:::i;:::-;758:3;751:37;676:118;;:::o;800:222::-;893:4;931:2;920:9;916:18;908:26;;944:71;1012:1;1001:9;997:17;988:6;944:71;:::i;:::-;800:222;;;;:::o;1109:117::-;1218:1;1215;1208:12;1355:122;1428:24;1446:5;1428:24;:::i;:::-;1421:5;1418:35;1408:63;;1467:1;1464;1457:12;1408:63;1355:122;:::o;1483:139::-;1529:5;1567:6;1554:20;1545:29;;1583:33;1610:5;1583:33;:::i;:::-;1483:139;;;;:::o;1628:122::-;1701:24;1719:5;1701:24;:::i;:::-;1694:5;1691:35;1681:63;;1740:1;1737;1730:12;1681:63;1628:122;:::o;1756:139::-;1802:5;1840:6;1827:20;1818:29;;1856:33;1883:5;1856:33;:::i;:::-;1756:139;;;;:::o;1901:474::-;1969:6;1977;2026:2;2014:9;2005:7;2001:23;1997:32;1994:119;;;2032:79;;:::i;:::-;1994:119;2152:1;2177:53;2222:7;2213:6;2202:9;2198:22;2177:53;:::i;:::-;2167:63;;2123:117;2279:2;2305:53;2350:7;2341:6;2330:9;2326:22;2305:53;:::i;:::-;2295:63;;2250:118;1901:474;;;;;:::o\",\"source\":\"// SPDX-License-Identifier: MIT\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\n\\r\\ncontract Retailing {\\r\\n    address public customer;\\r\\n    address public owner;\\r\\n    uint256 public value;\\r\\n\\r\\n\\r\\nfunction paid(address buyer, uint256 value) public {\\r\\n    require(value < 1);\\r\\n     owner = msg.sender;\\r\\n     customer = buyer;\\r\\n}\\r\\n} \",\"sourcePath\":\"C:\\\\Users\\\\Admin\\\\Desktop\\\\ecommerce-dapp\\\\contracts\\\\Retailing.sol\",\"ast\":{\"absolutePath\":\"project:/contracts/Retailing.sol\",\"exportedSymbols\":{\"Retailing\":[765]},\"id\":766,\"license\":\"MIT\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":735,\"literals\":[\"solidity\",\"^\",\"0.8\",\".1\"],\"nodeType\":\"PragmaDirective\",\"src\":\"33:23:5\"},{\"abstract\":false,\"baseContracts\":[],\"canonicalName\":\"Retailing\",\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":765,\"linearizedBaseContracts\":[765],\"name\":\"Retailing\",\"nameLocation\":\"71:9:5\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"2804b2c0\",\"id\":737,\"mutability\":\"mutable\",\"name\":\"customer\",\"nameLocation\":\"103:8:5\",\"nodeType\":\"VariableDeclaration\",\"scope\":765,\"src\":\"88:23:5\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":736,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"88:7:5\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"8da5cb5b\",\"id\":739,\"mutability\":\"mutable\",\"name\":\"owner\",\"nameLocation\":\"133:5:5\",\"nodeType\":\"VariableDeclaration\",\"scope\":765,\"src\":\"118:20:5\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":738,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"118:7:5\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"3fa4f245\",\"id\":741,\"mutability\":\"mutable\",\"name\":\"value\",\"nameLocation\":\"160:5:5\",\"nodeType\":\"VariableDeclaration\",\"scope\":765,\"src\":\"145:20:5\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":740,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"145:7:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"body\":{\"id\":763,\"nodeType\":\"Block\",\"src\":\"223:79:5\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":751,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":749,\"name\":\"value\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":745,\"src\":\"238:5:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":750,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"246:1:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"238:9:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":748,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"230:7:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":752,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"nameLocations\":[],\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"230:18:5\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":753,\"nodeType\":\"ExpressionStatement\",\"src\":\"230:18:5\"},{\"expression\":{\"id\":757,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":754,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":739,\"src\":\"256:5:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"expression\":{\"id\":755,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"264:3:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":756,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberLocation\":\"268:6:5\",\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"264:10:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"256:18:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":758,\"nodeType\":\"ExpressionStatement\",\"src\":\"256:18:5\"},{\"expression\":{\"id\":761,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":759,\"name\":\"customer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":737,\"src\":\"282:8:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":760,\"name\":\"buyer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":743,\"src\":\"293:5:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"282:16:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":762,\"nodeType\":\"ExpressionStatement\",\"src\":\"282:16:5\"}]},\"functionSelector\":\"8c726618\",\"id\":764,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"paid\",\"nameLocation\":\"181:4:5\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":746,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":743,\"mutability\":\"mutable\",\"name\":\"buyer\",\"nameLocation\":\"194:5:5\",\"nodeType\":\"VariableDeclaration\",\"scope\":764,\"src\":\"186:13:5\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":742,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"186:7:5\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":745,\"mutability\":\"mutable\",\"name\":\"value\",\"nameLocation\":\"209:5:5\",\"nodeType\":\"VariableDeclaration\",\"scope\":764,\"src\":\"201:13:5\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":744,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"201:7:5\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"185:30:5\"},\"returnParameters\":{\"id\":747,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"223:0:5\"},\"scope\":765,\"src\":\"172:130:5\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":766,\"src\":\"62:243:5\",\"usedErrors\":[]}],\"src\":\"33:273:5\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.8.17+commit.8df45f5f.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.4.11\",\"updatedAt\":\"2022-12-30T07:22:36.869Z\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xY5u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const ImageComponent = (_ref) => {
  let {
    src
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", _objectSpread({
    src: src
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (ImageComponent);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// const DOMNodeCollection = require('./dom_node_collection.js');

// import DOMNodeCollection from './dom_node_collection.js';

const functionQueue = [];
const _docReady = false;

  let tester = document.querySelectorAll("li");

  // document.addEventListener("DOMContentLoaded", () => {
  //   _docReady = true;
  //   functionQueue.forEach(event => {
  //     event();
  //   });
  //   functionQueue = [];
  // });

  // window.$maryQuery = $maryQuery;

  window.$maryQuery = (arg) => {
      if (arg instanceof HTMLElement) {
      return new DOMNodeCollection([arg]);
    } else if (arg instanceof Function) {
      if (document.readyState === "complete") {
        arg();
      } else {
        functionQueue.push(arg);
        document.addEventListener("DOMContentLoaded", executeFunctions);
      }
    } else {
      return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
    }
  };


  $maryQuery.extend = (base, ...otherObjs) => {
    otherObjs.forEach((obj) => {
      for (const key in obj) {
        base[key] = obj[key];
      }
    });
    return base;
  };

  toQueryString = (obj) => {
    let string = "";
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        string += `${key}=${obj[key]}&`;
      }
    }
    return string.substring(0, string.length - 1);
  };

   $maryQuery.ajax = (options) => {
     return new Promise((resolve, reject) => {
       const request = new XMLHttpRequest();
       const method = options.method ? `${options.method}`.toUpperCase() : "GET";
       const data = options.data ? options.data : {};
       const url = options.url;
       const success = options.success ? options.success : {};
       // debugger
       request.open(method, url);
       request.onload = () => {
         if (request.status >= 200 && request.status < 300) {
           resolve(JSON.parse(request.response));
           options.success(request.response);
           // return request.response;
         } else {
           // options.error(request.response);
           // return request.response;

           reject({
             status: request.status,
             statusText: request.statusText
           });
         }};

         request.onerror = () => {
           reject({
             status: request.status,
             statusText: request.statusText
           });
         };
         request.send(JSON.stringify(options.data));
         // request.send(data);
     });
  };

    function executeFunctions () {
      functionQueue.forEach(el => el());
    }


/***/ })
/******/ ]);
//# sourceMappingURL=maryQuery_lite.js.map
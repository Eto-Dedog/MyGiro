/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n/* harmony import */ var _modules_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/db */ \"./src/modules/db.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/db.js":
/*!***************************!*\
  !*** ./src/modules/db.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst db = () => {\r\n  let cards = document.querySelector('.cards'),\r\n  requestURL = '../db/hero.json',\r\n  request = new XMLHttpRequest();\r\nrequest.open('GET', requestURL);\r\nrequest.onload = function(e) {\r\n  if (request.readyState === 4) {\r\n      if (request.status === 200) {\r\n          // console.log(request.response);\r\n          let dataCards = JSON.parse(request.responseText);\r\n          getTableInfo(dataCards);\r\n      } else {\r\n          console.error(request.statusText);\r\n      }\r\n  }\r\n};\r\nrequest.send();\r\nfunction getTableInfo(data) {\r\n  data.forEach(function(item){\r\n    cards.innerHTML += \r\n      `\r\n      <div class=\"card\">\r\n      <img src=\"${item.фото}\" class=\"card__img\" alt=\"card__img\">\r\n      <h4 class=\"card__name\">${item.название}</h4>\r\n      <span class=\"card__type\">${item.тип}</span>\r\n      <span class=\"card__battery\">${item.батарея}</span>\r\n      <span class=\"card__power\">${item.мощность}</span>\r\n      <span class=\"card__wheel\">${item.колёса}</span>\r\n      <span class=\"card__weight\">${item.вес}</span>\r\n      <p class=\"card__info\">${item.описание}</p>\r\n      </div>\r\n      `\r\n    // `\r\n    // `\r\n    // if (item.тип === \"гироскутер\") {\r\n    //   `\r\n    //   <div class=\"card gyro\">\r\n    //   <img src=\"${item.фото}\" class=\"card__img\" alt=\"card__img\">\r\n    //   <h4 class=\"card__name\">${item.название}</h4>\r\n    //   <span class=\"card__type\">${item.тип}</span>\r\n    //   <span class=\"card__battery\">${item.батарея}</span>\r\n    //   <span class=\"card__power\">${item.мощность}</span>\r\n    //   <span class=\"card__wheel\">${item.колёса}</span>\r\n    //   <span class=\"card__weight\">${item.вес}</span>\r\n    //   <p class=\"card__info\">${item.описание}</p>\r\n    //   </div>\r\n    //   `\r\n    // } else if (item.тип === \"электросамокат\") {\r\n    //   `\r\n    //   <div class=\"card samokat\">\r\n    //   <img src=\"${item.фото}\" class=\"card__img\" alt=\"card__img\">\r\n    //   <h4 class=\"card__name\">${item.название}</h4>\r\n    //   <span class=\"card__type\">${item.тип}</span>\r\n    //   <span class=\"card__battery\">${item.батарея}</span>\r\n    //   <span class=\"card__power\">${item.мощность}</span>\r\n    //   <span class=\"card__wheel\">${item.колёса}</span>\r\n    //   <span class=\"card__weight\">${item.вес}</span>\r\n    //   <p class=\"card__info\">${item.описание}</p>\r\n    //   </div>\r\n    //   `\r\n    // } else if (item.тип === \"сегвей\") {\r\n    //   `\r\n    //   <div class=\"card segway\">\r\n    //   <img src=\"${item.фото}\" class=\"card__img\" alt=\"card__img\">\r\n    //   <h4 class=\"card__name\">${item.название}</h4>\r\n    //   <span class=\"card__type\">${item.тип}</span>\r\n    //   <span class=\"card__battery\">${item.батарея}</span>\r\n    //   <span class=\"card__power\">${item.мощность}</span>\r\n    //   <span class=\"card__wheel\">${item.колёса}</span>\r\n    //   <span class=\"card__weight\">${item.вес}</span>\r\n    //   <p class=\"card__info\">${item.описание}</p>\r\n    //   </div>\r\n    //   `\r\n    // }\r\n    // `\r\n    // `\r\n    // console.log(item.название);\r\n  })\r\n}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n\n//# sourceURL=webpack://3dglo/./src/modules/db.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filter = () => {\r\n    let select = document.querySelector('select')\r\n    let cardSams = document.querySelectorAll('.samokat')\r\n    let cardSegs = document.querySelectorAll('.segway')\r\n    let cardGyrs = document.querySelectorAll('.gyro')\r\n    select.addEventListener('change', () => {\r\n      if (select.value === 'filter1') {\r\n        for (let cardSam of cardSams) {\r\n            cardSam.classList.remove('d-none')\r\n        }\r\n        for (let cardSeg of cardSegs) {\r\n            cardSeg.classList.remove('d-none')\r\n        }\r\n        for (let cardGyr of cardGyrs) {\r\n            cardGyr.classList.remove('d-none')\r\n        }\r\n      } else if (select.value === 'filter2') {\r\n        for (let cardSam of cardSams) {\r\n            cardSam.classList.add('d-none')\r\n        }\r\n        for (let cardSeg of cardSegs) {\r\n            cardSeg.classList.add('d-none')\r\n        }\r\n        for (let cardGyr of cardGyrs) {\r\n            cardGyr.classList.remove('d-none')\r\n        }\r\n      } else if (select.value === 'filter3') {\r\n        for (let cardSam of cardSams) {\r\n            cardSam.classList.remove('d-none')\r\n        }\r\n        for (let cardSeg of cardSegs) {\r\n            cardSeg.classList.add('d-none')\r\n        }\r\n        for (let cardGyr of cardGyrs) {\r\n            cardGyr.classList.add('d-none')\r\n        }\r\n      } else if (select.value === 'filter4') {\r\n        for (let cardSam of cardSams) {\r\n            cardSam.classList.add('d-none')\r\n        }\r\n        for (let cardSeg of cardSegs) {\r\n            cardSeg.classList.remove('d-none')\r\n        }\r\n        for (let cardGyr of cardGyrs) {\r\n            cardGyr.classList.add('d-none')\r\n        }\r\n      }\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://3dglo/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    let btnOpen = document.querySelector('.order')\r\n    let modal = document.querySelector('.modal')\r\n    let btnClose = document.querySelector('.close')\r\n    let sends = document.querySelectorAll('.input-btn')\r\n    btnOpen.addEventListener('click', function () {\r\n        if (modal.style.visibility = \"hidden\") {\r\n            modal.style.visibility = \"visible\"\r\n        } else {\r\n            modal.style.visibility = \"hidden\"\r\n        }\r\n    })\r\n    btnClose.addEventListener('click', function () {\r\n        if (modal.style.visibility = \"visible\") {\r\n            modal.style.visibility = \"hidden\"\r\n        } else {\r\n            modal.style.visibility = \"visible\"\r\n        }\r\n    })\r\n    btnClose.addEventListener('click', function () {\r\n        if (modal.style.visibility = \"visible\") {\r\n            modal.style.visibility = \"hidden\"\r\n        } else {\r\n            modal.style.visibility = \"visible\"\r\n        }\r\n    })\r\n    for (let send of sends) {\r\n        send.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            if (modal.style.visibility = \"visible\") {\r\n                modal.style.visibility = \"hidden\"\r\n            } else {\r\n                modal.style.visibility = \"visible\"\r\n            }\r\n        })\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const smoothLinks = document.querySelectorAll('a[href^=\"#up\"]');\r\n    for (let smoothLink of smoothLinks) {\r\n        smoothLink.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            const id = smoothLink.getAttribute('href');\r\n            document.querySelector(id).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        });\r\n    };\r\n  }\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://3dglo/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sldier = () => {\r\nlet btnRight = document.querySelector(\".arr__right\");\r\nlet slides = document.querySelectorAll(\".slide\");\r\nlet i = 0;\r\nbtnRight.addEventListener(\"click\", function () {\r\n    ++i\r\n    if (i >= slides.length) {\r\n        slides[i-1].classList.remove(\"flex\");\r\n        i = 0;\r\n        slides[i].classList.add(\"flex\");\r\n    } else { // Иначе\r\n        slides[i-1].classList.remove(\"flex\");\r\n        slides[i].classList.add(\"flex\");\r\n    }\r\n})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sldier);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
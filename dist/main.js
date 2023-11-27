/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _harry_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./harry.jpeg */ "./src/harry.jpeg");
/* harmony import */ var _ron_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ron.jpeg */ "./src/ron.jpeg");
/* harmony import */ var _hermione_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hermione.jpeg */ "./src/hermione.jpeg");




const contacts = () => {
  function createContactDiv(personObject) {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const elementTypes = {
      name: 'h3',
      title: 'h3',
      phone: 'p',
      email: 'p',
      picture: 'img'
    };

    for (const key in personObject) {
      const element = document.createElement(elementTypes[key]);
      if (key !== 'picture') {
        element.classList.add(key)
        element.innerText = personObject[key];
      } else {
        element.src = personObject[key];
      }
      contactDiv.appendChild(element);
    };

    return contactDiv;
  };

  const addressBook = [
    { name: 'Harry Potter', title: 'Manager', phone: 1231231234, email: 'test@test.com', picture: _harry_jpeg__WEBPACK_IMPORTED_MODULE_0__ },
    { name: 'Ron Weasley', title: 'Chef', phone: 3453453456, email: 'test2@test.com', picture: _ron_jpeg__WEBPACK_IMPORTED_MODULE_1__ },
    { name: 'Hermione Granger', title: 'Waiter', phone: 6786786789, email: 'test3@test.com', picture: _hermione_jpeg__WEBPACK_IMPORTED_MODULE_2__ },
  ];

  function renderContactsItems(items) {
    const content = document.querySelector('div#content');
    items.forEach((item) => content.appendChild(createContactDiv(item)));
  };

  renderContactsItems(addressBook);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");


const generatePage = () => {
  const content = document.querySelector('#content');

  // append restaurant picture
  const dogPic = new Image();
  dogPic.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
  content.appendChild(dogPic);

  // append header
  const heading = document.createElement('h1');
  heading.innerText = 'Welcome to this restaurant!'
  content.appendChild(heading);

  // append description
  const description = document.createElement('p');
  description.innerText = 'Sample test goes here. This is a description of this retaurant. Welcome and enjoy your stay.';
  content.appendChild(description);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coke_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coke.jpeg */ "./src/coke.jpeg");
/* harmony import */ var _pepsi_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pepsi.jpeg */ "./src/pepsi.jpeg");
/* harmony import */ var _dr_pepper_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dr_pepper.jpeg */ "./src/dr_pepper.jpeg");





const menu = () => {
  function createMenuItemDiv(foodObject) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menuItem');

    const elementTypes = {
      name: 'h3',
      price: 'h3',
      description: 'p',
      picture: 'img'
    }

    for (const key in foodObject) {
      const element = document.createElement(elementTypes[key])
      if (key !== 'picture') {
        element.classList.add(key)
        element.innerText = foodObject[key];
      } else {
        element.src = foodObject[key];
      }
      menuItemDiv.appendChild(element)
    }

    return menuItemDiv;
  }

  const beverages = [
    { name: 'Coke', price: 2, description: 'Bottle of Coke', picture: _coke_jpeg__WEBPACK_IMPORTED_MODULE_0__ },
    { name: 'Pepsi', price: 3, description: 'Bottle of Pepsi', picture: _pepsi_jpeg__WEBPACK_IMPORTED_MODULE_1__ },
    { name: 'Dr. Pepper', price: 4, description: 'Bottle of Dr. Pepper', picture: _dr_pepper_jpeg__WEBPACK_IMPORTED_MODULE_2__ }
  ]

  function renderMenuItems(items) {
    const content = document.querySelector('div#content');
    items.forEach((item) => content.appendChild(createMenuItemDiv(item)));
  }

  renderMenuItems(beverages);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/coke.jpeg":
/*!***********************!*\
  !*** ./src/coke.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43c6b3cdc461d32c0a8a.jpeg";

/***/ }),

/***/ "./src/dr_pepper.jpeg":
/*!****************************!*\
  !*** ./src/dr_pepper.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b823d60c08195d54f75.jpeg";

/***/ }),

/***/ "./src/harry.jpeg":
/*!************************!*\
  !*** ./src/harry.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbda104888848b7efcd1.jpeg";

/***/ }),

/***/ "./src/hermione.jpeg":
/*!***************************!*\
  !*** ./src/hermione.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "891107ac015697ac92d0.jpeg";

/***/ }),

/***/ "./src/pepsi.jpeg":
/*!************************!*\
  !*** ./src/pepsi.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a217061d7bf53e5afe4.jpeg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0a9d935eeaca965f329.jpg";

/***/ }),

/***/ "./src/ron.jpeg":
/*!**********************!*\
  !*** ./src/ron.jpeg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "059c374e35978d06eef6.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




console.log('Test statement');

(0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNKO0FBQ1U7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sNEZBQTRGLHdDQUFLLEVBQUU7QUFDekcsTUFBTSx5RkFBeUYsc0NBQUcsRUFBRTtBQUNwRyxNQUFNLGdHQUFnRywyQ0FBUSxFQUFFO0FBQ2hIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NjOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDRDQUFPO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkc7QUFDRTtBQUNPOzs7QUFHeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sZ0VBQWdFLHVDQUFJLEVBQUU7QUFDNUUsTUFBTSxrRUFBa0Usd0NBQUssRUFBRTtBQUMvRSxNQUFNLDRFQUE0RSw0Q0FBUTtBQUMxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJrQztBQUNSO0FBQ087O0FBRWpDOztBQUVBLG9EQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFycnkgZnJvbSAnLi9oYXJyeS5qcGVnJztcbmltcG9ydCBSb24gZnJvbSAnLi9yb24uanBlZyc7XG5pbXBvcnQgSGVybWlvbmUgZnJvbSAnLi9oZXJtaW9uZS5qcGVnJztcblxuY29uc3QgY29udGFjdHMgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3REaXYocGVyc29uT2JqZWN0KSB7XG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgZWxlbWVudFR5cGVzID0ge1xuICAgICAgbmFtZTogJ2gzJyxcbiAgICAgIHRpdGxlOiAnaDMnLFxuICAgICAgcGhvbmU6ICdwJyxcbiAgICAgIGVtYWlsOiAncCcsXG4gICAgICBwaWN0dXJlOiAnaW1nJ1xuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwZXJzb25PYmplY3QpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlc1trZXldKTtcbiAgICAgIGlmIChrZXkgIT09ICdwaWN0dXJlJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoa2V5KVxuICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHBlcnNvbk9iamVjdFtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zcmMgPSBwZXJzb25PYmplY3Rba2V5XTtcbiAgICAgIH1cbiAgICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJldHVybiBjb250YWN0RGl2O1xuICB9O1xuXG4gIGNvbnN0IGFkZHJlc3NCb29rID0gW1xuICAgIHsgbmFtZTogJ0hhcnJ5IFBvdHRlcicsIHRpdGxlOiAnTWFuYWdlcicsIHBob25lOiAxMjMxMjMxMjM0LCBlbWFpbDogJ3Rlc3RAdGVzdC5jb20nLCBwaWN0dXJlOiBIYXJyeSB9LFxuICAgIHsgbmFtZTogJ1JvbiBXZWFzbGV5JywgdGl0bGU6ICdDaGVmJywgcGhvbmU6IDM0NTM0NTM0NTYsIGVtYWlsOiAndGVzdDJAdGVzdC5jb20nLCBwaWN0dXJlOiBSb24gfSxcbiAgICB7IG5hbWU6ICdIZXJtaW9uZSBHcmFuZ2VyJywgdGl0bGU6ICdXYWl0ZXInLCBwaG9uZTogNjc4Njc4Njc4OSwgZW1haWw6ICd0ZXN0M0B0ZXN0LmNvbScsIHBpY3R1cmU6IEhlcm1pb25lIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ29udGFjdHNJdGVtcyhpdGVtcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdERpdihpdGVtKSkpO1xuICB9O1xuXG4gIHJlbmRlckNvbnRhY3RzSXRlbXMoYWRkcmVzc0Jvb2spO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0cztcbiIsImltcG9ydCBQaWN0dXJlIGZyb20gJy4vcmVzdGF1cmFudC5qcGcnXG5cbmNvbnN0IGdlbmVyYXRlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgLy8gYXBwZW5kIHJlc3RhdXJhbnQgcGljdHVyZVxuICBjb25zdCBkb2dQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgZG9nUGljLnNyYyA9IFBpY3R1cmU7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9nUGljKTtcblxuICAvLyBhcHBlbmQgaGVhZGVyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkaW5nLmlubmVyVGV4dCA9ICdXZWxjb21lIHRvIHRoaXMgcmVzdGF1cmFudCEnXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgLy8gYXBwZW5kIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnU2FtcGxlIHRlc3QgZ29lcyBoZXJlLiBUaGlzIGlzIGEgZGVzY3JpcHRpb24gb2YgdGhpcyByZXRhdXJhbnQuIFdlbGNvbWUgYW5kIGVuam95IHlvdXIgc3RheS4nO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQYWdlO1xuIiwiaW1wb3J0IENva2UgZnJvbSAnLi9jb2tlLmpwZWcnO1xuaW1wb3J0IFBlcHNpIGZyb20gJy4vcGVwc2kuanBlZyc7XG5pbXBvcnQgRHJQZXBwZXIgZnJvbSAnLi9kcl9wZXBwZXIuanBlZyc7XG5cblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW1EaXYoZm9vZE9iamVjdCkge1xuICAgIGNvbnN0IG1lbnVJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICAgIGNvbnN0IGVsZW1lbnRUeXBlcyA9IHtcbiAgICAgIG5hbWU6ICdoMycsXG4gICAgICBwcmljZTogJ2gzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAncCcsXG4gICAgICBwaWN0dXJlOiAnaW1nJ1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIGZvb2RPYmplY3QpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlc1trZXldKVxuICAgICAgaWYgKGtleSAhPT0gJ3BpY3R1cmUnKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChrZXkpXG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gZm9vZE9iamVjdFtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zcmMgPSBmb29kT2JqZWN0W2tleV07XG4gICAgICB9XG4gICAgICBtZW51SXRlbURpdi5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBtZW51SXRlbURpdjtcbiAgfVxuXG4gIGNvbnN0IGJldmVyYWdlcyA9IFtcbiAgICB7IG5hbWU6ICdDb2tlJywgcHJpY2U6IDIsIGRlc2NyaXB0aW9uOiAnQm90dGxlIG9mIENva2UnLCBwaWN0dXJlOiBDb2tlIH0sXG4gICAgeyBuYW1lOiAnUGVwc2knLCBwcmljZTogMywgZGVzY3JpcHRpb246ICdCb3R0bGUgb2YgUGVwc2knLCBwaWN0dXJlOiBQZXBzaSB9LFxuICAgIHsgbmFtZTogJ0RyLiBQZXBwZXInLCBwcmljZTogNCwgZGVzY3JpcHRpb246ICdCb3R0bGUgb2YgRHIuIFBlcHBlcicsIHBpY3R1cmU6IERyUGVwcGVyIH1cbiAgXVxuXG4gIGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtcyhpdGVtcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1EaXYoaXRlbSkpKTtcbiAgfVxuXG4gIHJlbmRlck1lbnVJdGVtcyhiZXZlcmFnZXMpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZ2VuZXJhdGVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjb250YWN0cyBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnNvbGUubG9nKCdUZXN0IHN0YXRlbWVudCcpO1xuXG5jb250YWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
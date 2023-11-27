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

function createNavBar() {
  const navBar = document.createElement('nav');
  const list = document.createElement('ol');
  const homeLink = document.createElement('li');
  const menuLink = document.createElement('li');
  const contactLink = document.createElement('li');

  navBar.appendChild(list);
  list.appendChild(homeLink);
  list.appendChild(menuLink);
  list.appendChild(contactLink);

  homeLink.id = 'id';
  homeLink.innerText = 'home';
  menuLink.id = 'menu';
  menuLink.innerText = 'menu';
  contactLink.id = 'contact';
  contactLink.innerText = 'contact';

  homeLink.onclick = () => {
    clearContent();
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  menuLink.onclick = () => {
    clearContent();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }

  contactLink.onclick = () => {
    clearContent();
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }

  return navBar;
}

function clearContent() {
  const content = document.querySelector('div#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function renderNavBar() {
  const nav = document.querySelector('nav');
  nav.appendChild(createNavBar());
}

renderNavBar();
(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNKO0FBQ1U7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sNEZBQTRGLHdDQUFLLEVBQUU7QUFDekcsTUFBTSx5RkFBeUYsc0NBQUcsRUFBRTtBQUNwRyxNQUFNLGdHQUFnRywyQ0FBUSxFQUFFO0FBQ2hIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NjOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDRDQUFPO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkc7QUFDRTtBQUNPOzs7QUFHeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sZ0VBQWdFLHVDQUFJLEVBQUU7QUFDNUUsTUFBTSxrRUFBa0Usd0NBQUssRUFBRTtBQUMvRSxNQUFNLDRFQUE0RSw0Q0FBUTtBQUMxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJrQztBQUNSO0FBQ087O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaURBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLElBQUksaURBQUk7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxvREFBUTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYXJyeSBmcm9tICcuL2hhcnJ5LmpwZWcnO1xuaW1wb3J0IFJvbiBmcm9tICcuL3Jvbi5qcGVnJztcbmltcG9ydCBIZXJtaW9uZSBmcm9tICcuL2hlcm1pb25lLmpwZWcnO1xuXG5jb25zdCBjb250YWN0cyA9ICgpID0+IHtcbiAgZnVuY3Rpb24gY3JlYXRlQ29udGFjdERpdihwZXJzb25PYmplY3QpIHtcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBlbGVtZW50VHlwZXMgPSB7XG4gICAgICBuYW1lOiAnaDMnLFxuICAgICAgdGl0bGU6ICdoMycsXG4gICAgICBwaG9uZTogJ3AnLFxuICAgICAgZW1haWw6ICdwJyxcbiAgICAgIHBpY3R1cmU6ICdpbWcnXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHBlcnNvbk9iamVjdCkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGVzW2tleV0pO1xuICAgICAgaWYgKGtleSAhPT0gJ3BpY3R1cmUnKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChrZXkpXG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gcGVyc29uT2JqZWN0W2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNyYyA9IHBlcnNvbk9iamVjdFtrZXldO1xuICAgICAgfVxuICAgICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbnRhY3REaXY7XG4gIH07XG5cbiAgY29uc3QgYWRkcmVzc0Jvb2sgPSBbXG4gICAgeyBuYW1lOiAnSGFycnkgUG90dGVyJywgdGl0bGU6ICdNYW5hZ2VyJywgcGhvbmU6IDEyMzEyMzEyMzQsIGVtYWlsOiAndGVzdEB0ZXN0LmNvbScsIHBpY3R1cmU6IEhhcnJ5IH0sXG4gICAgeyBuYW1lOiAnUm9uIFdlYXNsZXknLCB0aXRsZTogJ0NoZWYnLCBwaG9uZTogMzQ1MzQ1MzQ1NiwgZW1haWw6ICd0ZXN0MkB0ZXN0LmNvbScsIHBpY3R1cmU6IFJvbiB9LFxuICAgIHsgbmFtZTogJ0hlcm1pb25lIEdyYW5nZXInLCB0aXRsZTogJ1dhaXRlcicsIHBob25lOiA2Nzg2Nzg2Nzg5LCBlbWFpbDogJ3Rlc3QzQHRlc3QuY29tJywgcGljdHVyZTogSGVybWlvbmUgfSxcbiAgXTtcblxuICBmdW5jdGlvbiByZW5kZXJDb250YWN0c0l0ZW1zKGl0ZW1zKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0RGl2KGl0ZW0pKSk7XG4gIH07XG5cbiAgcmVuZGVyQ29udGFjdHNJdGVtcyhhZGRyZXNzQm9vayk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RzO1xuIiwiaW1wb3J0IFBpY3R1cmUgZnJvbSAnLi9yZXN0YXVyYW50LmpwZydcblxuY29uc3QgZ2VuZXJhdGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAvLyBhcHBlbmQgcmVzdGF1cmFudCBwaWN0dXJlXG4gIGNvbnN0IGRvZ1BpYyA9IG5ldyBJbWFnZSgpO1xuICBkb2dQaWMuc3JjID0gUGljdHVyZTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkb2dQaWMpO1xuXG4gIC8vIGFwcGVuZCBoZWFkZXJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8gdGhpcyByZXN0YXVyYW50ISdcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAvLyBhcHBlbmQgZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdTYW1wbGUgdGVzdCBnb2VzIGhlcmUuIFRoaXMgaXMgYSBkZXNjcmlwdGlvbiBvZiB0aGlzIHJldGF1cmFudC4gV2VsY29tZSBhbmQgZW5qb3kgeW91ciBzdGF5Lic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVBhZ2U7XG4iLCJpbXBvcnQgQ29rZSBmcm9tICcuL2Nva2UuanBlZyc7XG5pbXBvcnQgUGVwc2kgZnJvbSAnLi9wZXBzaS5qcGVnJztcbmltcG9ydCBEclBlcHBlciBmcm9tICcuL2RyX3BlcHBlci5qcGVnJztcblxuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbURpdihmb29kT2JqZWN0KSB7XG4gICAgY29uc3QgbWVudUl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuXG4gICAgY29uc3QgZWxlbWVudFR5cGVzID0ge1xuICAgICAgbmFtZTogJ2gzJyxcbiAgICAgIHByaWNlOiAnaDMnLFxuICAgICAgZGVzY3JpcHRpb246ICdwJyxcbiAgICAgIHBpY3R1cmU6ICdpbWcnXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZm9vZE9iamVjdCkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGVzW2tleV0pXG4gICAgICBpZiAoa2V5ICE9PSAncGljdHVyZScpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGtleSlcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBmb29kT2JqZWN0W2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNyYyA9IGZvb2RPYmplY3Rba2V5XTtcbiAgICAgIH1cbiAgICAgIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbnVJdGVtRGl2O1xuICB9XG5cbiAgY29uc3QgYmV2ZXJhZ2VzID0gW1xuICAgIHsgbmFtZTogJ0Nva2UnLCBwcmljZTogMiwgZGVzY3JpcHRpb246ICdCb3R0bGUgb2YgQ29rZScsIHBpY3R1cmU6IENva2UgfSxcbiAgICB7IG5hbWU6ICdQZXBzaScsIHByaWNlOiAzLCBkZXNjcmlwdGlvbjogJ0JvdHRsZSBvZiBQZXBzaScsIHBpY3R1cmU6IFBlcHNpIH0sXG4gICAgeyBuYW1lOiAnRHIuIFBlcHBlcicsIHByaWNlOiA0LCBkZXNjcmlwdGlvbjogJ0JvdHRsZSBvZiBEci4gUGVwcGVyJywgcGljdHVyZTogRHJQZXBwZXIgfVxuICBdXG5cbiAgZnVuY3Rpb24gcmVuZGVyTWVudUl0ZW1zKGl0ZW1zKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbURpdihpdGVtKSkpO1xuICB9XG5cbiAgcmVuZGVyTWVudUl0ZW1zKGJldmVyYWdlcyk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBnZW5lcmF0ZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNvbnRhY3RzIGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc29sZS5sb2coJ1Rlc3Qgc3RhdGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIG5hdkJhci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgbGlzdC5hcHBlbmRDaGlsZChob21lTGluayk7XG4gIGxpc3QuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuICBsaXN0LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcblxuICBob21lTGluay5pZCA9ICdpZCc7XG4gIGhvbWVMaW5rLmlubmVyVGV4dCA9ICdob21lJztcbiAgbWVudUxpbmsuaWQgPSAnbWVudSc7XG4gIG1lbnVMaW5rLmlubmVyVGV4dCA9ICdtZW51JztcbiAgY29udGFjdExpbmsuaWQgPSAnY29udGFjdCc7XG4gIGNvbnRhY3RMaW5rLmlubmVyVGV4dCA9ICdjb250YWN0JztcblxuICBob21lTGluay5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGdlbmVyYXRlUGFnZSgpO1xuICB9XG5cbiAgbWVudUxpbmsub25jbGljayA9ICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBtZW51KCk7XG4gIH1cblxuICBjb250YWN0TGluay5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNvbnRhY3RzKCk7XG4gIH1cblxuICByZXR1cm4gbmF2QmFyO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5hdkJhcigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG59XG5cbnJlbmRlck5hdkJhcigpO1xuZ2VuZXJhdGVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
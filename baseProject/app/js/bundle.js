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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_dashboard__ = __webpack_require__(1);

class App {
  constructor() {
    document.body.style.background = 'url("/images/background.png") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    let content = document.getElementById('content')
    content.append()

    let dashboard = new __WEBPACK_IMPORTED_MODULE_0__containers_dashboard__["a" /* default */]()
    content.append(dashboard.getContent())
  }

}
/* harmony export (immutable) */ __webpack_exports__["default"] = App;


let app = new App()
window.app = app


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);

class Dashboard {
  constructor(){
  }

  getData(){

  }

  getContent(){
    let container = document.createElement('div')
    container.id = 'container'
    
    //create 'flex' container to hold content
        
    let title = document.createElement('h1')
    title.style.color = '#dddddd'
    title.append('Jarvis Web Container Title')
    title.style.textAlign = 'center'
    title.style.textDecoration = 'underline'

    //content.append(title)
    container.appendChild(title)

    let card1 = new __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]({
      name:'name placeholder',
      description:'description placeholder',
      image: 'image placeholder'
    })
    container.append(card1.getContent())
  
      
    let card2 = new __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]({
      name:'name placeholder 2',
      description: 'description2 placeholder',
      image: 'image 2 placeholder'
    })
    container.append(card2.getContent())
      
    let card3 = new __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]({
      name:'name placeholder 3',
      description: 'description3 placeholder',
      image: 'image 3 placeholder'
    })
    container.append(card3.getContent())


  return container

  }

  animate(){

  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dashboard;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Card{
  constructor(options){
    this.options = options
  }
  getContent(){
    let card = document.createElement('div')

    card.classList.add('col-3')
    card.style.height = '300px'
    card.style.margin = '1%'
    card.style.cursor = 'pointer'
    card.style.boxShadow = '0px 0px 3px #888888'
    card.style.borderWidth = '2px'
    card.style.borderStyle = 'none'
    card.style.borderColor = 'gold'
    card.style.background  = 'rgba(0, 0, 0, 0.4)'
    card.style.borderRadius = '25px'

    //Create card header
    let cardHeader = document.createElement('div')
    cardHeader.style.height = '15%'

    //-->Create card title
    let headerTitle = document.createElement('div')
    headerTitle.append(this.options.name)
    headerTitle.style.textAlign = 'center'
    headerTitle.style.color = '#dddddd'
    cardHeader.append(headerTitle)
    
    card.append(cardHeader)
    //Create card body
    //-->Create card description
    //-->Add card link
    
  return card
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Card;



/***/ })
/******/ ]);
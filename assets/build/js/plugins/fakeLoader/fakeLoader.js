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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/_assets/js/fakeLoader.js":
/*!*****************************************!*\
  !*** ./source/_assets/js/fakeLoader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
-----------------------------------------------------------------------*/
(function ($) {
  $.fn.fakeLoader = function (options) {
    //Defaults
    var settings = $.extend({
      timeToHide: 1200,
      // Default Time to hide fakeLoader
      pos: 'fixed',
      // Default Position
      top: '0px',
      // Default Top value
      left: '0px',
      // Default Left value
      width: '100%',
      // Default width 
      height: '100%',
      // Default Height
      zIndex: '999',
      // Default zIndex 
      bgColor: '#2ecc71',
      // Default background color
      spinner: 'spinner7',
      // Default Spinner
      imagePath: '' // Default Path custom image

    }, options); //Customized Spinners

    var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
    var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
    var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
    var spinner04 = '<div class="fl spinner4"></div>';
    var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>';
    var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
    var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; //The target

    var el = $(this); //Init styles

    var initStyles = {
      'position': settings.pos,
      'width': settings.width,
      'height': settings.height,
      'top': settings.top,
      'left': settings.left
    }; //Apply styles

    el.css(initStyles); //Each 

    el.each(function () {
      var a = settings.spinner; //console.log(a)

      switch (a) {
        case 'spinner1':
          el.html(spinner01);
          break;

        case 'spinner2':
          el.html(spinner02);
          break;

        case 'spinner3':
          el.html(spinner03);
          break;

        case 'spinner4':
          el.html(spinner04);
          break;

        case 'spinner5':
          el.html(spinner05);
          break;

        case 'spinner6':
          el.html(spinner06);
          break;

        case 'spinner7':
          el.html(spinner07);
          break;

        default:
          el.html(spinner01);
      } //Add customized loader image


      if (settings.imagePath != '') {
        el.html('<div class="fl"><img src="' + settings.imagePath + '"></div>');
      }

      centerLoader();
    }); //Time to hide fakeLoader

    setTimeout(function () {
      $(el).fadeOut();
    }, settings.timeToHide); //Return Styles 

    return this.css({
      'backgroundColor': settings.bgColor,
      'zIndex': settings.zIndex
    });
  }; // End Fake Loader
  //Center Spinner


  function centerLoader() {
    var winW = $(window).width();
    var winH = $(window).height();
    var spinnerW = $('.fl').outerWidth();
    var spinnerH = $('.fl').outerHeight();
    $('.fl').css({
      'position': 'absolute',
      'left': winW / 2 - spinnerW / 2,
      'top': winH / 2 - spinnerH / 2
    });
  }

  $(window).on('load', function () {
    centerLoader();
    $(window).resize(function () {
      centerLoader();
    });
  });
})(jQuery);

/***/ }),

/***/ 1:
/*!***********************************************!*\
  !*** multi ./source/_assets/js/fakeLoader.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/davert/projects/bugira3/landing/source/_assets/js/fakeLoader.js */"./source/_assets/js/fakeLoader.js");


/***/ })

/******/ });
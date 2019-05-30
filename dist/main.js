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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loading_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sticky_topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _sticky_topbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sticky_topbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auto_slide_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _auto_slide_up__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_auto_slide_up__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smoothly_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _smoothly_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smoothly_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _init_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _init_swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_init_swiper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_message__WEBPACK_IMPORTED_MODULE_6__);







$(function () {
  siteWelcome.classList.remove('active'); // 移除offset完成偏移动画

  window.autoSlideUp.findClosestAndRemoveOffset();
  document.documentElement.style.overflow = '';
  window.addEventListener('pageshow', function () {
    window.scrollTo(window.scrollY, window.scrollY + 1);
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

!function () {
  let view = View('#topNavBar'); // 控制导航栏黏在顶部

  let controller = Controller({
    init: function (view) {},
    bindEvents: function () {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          this.active();
        } else {
          this.deactive();
        }
      });
    },
    active: function () {
      this.view.classList.add('sticky');
    },
    deactive: function () {
      this.view.classList.remove('sticky');
    }
  });
  controller.init(view);
}.call();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

!function () {
  let specialTags = document.querySelectorAll('[data-x]');

  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
  }

  window.addEventListener('scroll', function () {
    findClosestAndRemoveOffset();
  }); // 移除距离顶部最近的属性，达到偏移动画的效果

  function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;

    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i;
      }
    }

    specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#' + id + '"]');
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children;

    for (let i = 0; i < brothersAndMe.length; i++) {
      brothersAndMe[i].classList.remove('highlight');
    }

    li.classList.add('highlight');
  } // 监听鼠标在导航栏上移动


  let liTags = document.querySelectorAll('nav.menu > ul > li');

  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active');
    };

    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active');
    };
  }

  window.autoSlideUp = {
    findClosestAndRemoveOffset: findClosestAndRemoveOffset
  };
}.call();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

!function () {
  let view = View('nav.menu');
  let controller = Controller({
    init: function (view) {
      this.initAnimation();
    },
    initAnimation: function () {
      // 注册tween
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
    },
    bindEvents: function () {
      let aTags = this.view.querySelectorAll('ul > li > a'); // 监听导航栏点击事件,控制锚点跳转

      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = x => {
          x.preventDefault();
          let a = x.currentTarget;
          let href = a.getAttribute('href'); // #siteAbout

          let element = document.querySelector(href);
          this.scrollToElement(element);
        };
      }
    },
    scrollToElement: function (element) {
      let top = element.offsetTop;
      let currentTop = window.scrollY;
      let targetTop = top - 80;
      let s = targetTop - currentTop;
      let coords = {
        y: currentTop
      };
      let t = Math.abs(s / 100 * 300);
      t = t > 500 ? 500 : t; // 使用tween缓动动画

      let tween = new TWEEN.Tween(coords).to({
        y: targetTop
      }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
        window.scrollTo(0, coords.y);
      }).start();
    }
  });
  controller.init(view);
}.call();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

!function () {
  let view = View('.swiper-container');
  let controller = Controller({
    swiper: null,
    init: function (view) {
      this.initSwiper();
    },
    initSwiper: function () {
      this.swiper = new Swiper(this.view, {
        direction: 'horizontal',
        loop: true,
        effect: 'cube',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  });
  controller.init(view);
}.call();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

!function () {
  let view = View('#siteMessage');
  let model = Model({
    resourceName: 'Message'
  });
  let controller = Controller({
    messageList: null,
    form: null,
    init: function (view, model) {
      this.messageList = view.querySelector('#messageList');
      this.form = view.querySelector('#postMessageForm');
      this.loadMessages();
    },
    loadMessages: function () {
      this.model.fetch().then(messages => {
        let array = messages.map(item => item.attributes);
        array.forEach(item => {
          let li = document.createElement('li');
          li.innerText = `${item.name}:${item.content}`;
          this.messageList.append(li);
        });
      });
    },
    bindEvents: function () {
      this.form.addEventListener('submit', e => {
        e.preventDefault();
        this.saveMessage();
      });
    },
    saveMessage: function () {
      let myForm = this.form;
      let name = myForm.querySelector('input[name=name]').value;
      let content = myForm.querySelector('input[name=content]').value;
      this.model.save({
        name,
        content
      }).then(object => {
        this.updateMessage(object); // 置空内容栏

        myForm.querySelector('input[name=content]').value = '';
      });
    },
    updateMessage: function (object) {
      let li = document.createElement('li');
      li.innerText = `${object.attributes.name}:${object.attributes.content}`;
      let messageList = document.querySelector('#messageList');
      messageList.append(li);
    }
  });
  controller.init(view, model);
}.call();

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
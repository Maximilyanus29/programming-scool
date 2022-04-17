/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about.html */ "./about.html");
/* harmony import */ var _3d_unity_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../3d-unity.html */ "./3d-unity.html");
/* harmony import */ var _3d_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../3d.html */ "./3d.html");
/* harmony import */ var _anime_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../anime.html */ "./anime.html");
/* harmony import */ var _design_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../design.html */ "./design.html");
/* harmony import */ var _digital_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../digital.html */ "./digital.html");
/* harmony import */ var _math_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../math.html */ "./math.html");
/* harmony import */ var _minecraft_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../minecraft.html */ "./minecraft.html");
/* harmony import */ var _python_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../python.html */ "./python.html");
/* harmony import */ var _roblox_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../roblox.html */ "./roblox.html");
/* harmony import */ var _modules_mymodal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/mymodal */ "./js/modules/mymodal.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/sliders */ "./js/modules/sliders.js");














document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_mymodal__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_13__["default"])();
});

/***/ }),

/***/ "./js/modules/mymodal.js":
/*!*******************************!*\
  !*** ./js/modules/mymodal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var mymodal = function mymodal() {
  var overlay = document.getElementById("overlay");
  var modal = document.getElementById("modal");

  var toggleModal = function toggleModal() {
    overlay.classList.toggle("show");
    modal.classList.toggle("show");
  };

  document.querySelectorAll(".open-modal").forEach(function (el) {
    el.addEventListener("click", function (evt) {
      toggleModal();
    });
  });
  overlay.addEventListener("click", function (evt) {
    console.log(123);
    toggleModal();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mymodal);

/***/ }),

/***/ "./js/modules/sliders.js":
/*!*******************************!*\
  !*** ./js/modules/sliders.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
// import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
// import 'swiper/css';
// core version + navigation, pagination modules:
 // import Swiper and modules styles
//   import 'swiper/css';
//   import 'swiper/css/navigation';
//   import 'swiper/css/pagination';

var sliders = function sliders() {
  // Главный слайдер
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
    speed: 500,
    // spaceBetween: 11,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 11
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 11
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ }),

/***/ "./3d-unity.html":
/*!***********************!*\
  !*** ./3d-unity.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики \u2028в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями \u2028и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./3d.html":
/*!*****************!*\
  !*** ./3d.html ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики \u2028в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями \u2028и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./about.html":
/*!********************!*\
  !*** ./about.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./anime.html":
/*!********************!*\
  !*** ./anime.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики \u2028в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями \u2028и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./design.html":
/*!*********************!*\
  !*** ./design.html ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики \u2028в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями \u2028и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./digital.html":
/*!**********************!*\
  !*** ./digital.html ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики \u2028в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями \u2028и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/main-image.png */ "./img/main-image.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (1).svg */ "./img/svg/coolicon (1).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (2).svg */ "./img/svg/coolicon (2).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (3).svg */ "./img/svg/coolicon (3).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Coil (Traced).svg */ "./img/svg/Coil (Traced).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (4).svg */ "./img/svg/coolicon (4).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo2.jpg */ "./img/photo2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector.svg */ "./img/svg/Vector.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo3.png */ "./img/photo3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo5.jpg */ "./img/photo5.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo6.jpg */ "./img/photo6.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo7.jpg */ "./img/photo7.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo8.png */ "./img/photo8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo9.jpg */ "./img/photo9.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo10.jpg */ "./img/photo10.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo11.jpg */ "./img/photo11.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo12.jpg */ "./img/photo12.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo13.jpg */ "./img/photo13.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/review.png */ "./img/review.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/star.svg */ "./img/svg/star.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photos/Мария Агалакова.jpg */ "./img/photos/Мария Агалакова.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photos/Полина-Домрачева.jpg */ "./img/photos/Полина-Домрачева.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photos/Ксения-Блюдёнова.jpg */ "./img/photos/Ксения-Блюдёнова.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photos/Роман-Семенов.jpg */ "./img/photos/Роман-Семенов.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photos/Виктория-Боровикова.jpg */ "./img/photos/Виктория-Боровикова.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photos/Мария-Боброва.jpg */ "./img/photos/Мария-Боброва.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photos/Амина-Евлоева.jpg */ "./img/photos/Амина-Евлоева.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photos/Семен-Федонов.jpg */ "./img/photos/Семен-Федонов.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/arrow-to-right.svg */ "./img/svg/arrow-to-right.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assignments\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"main container\">\r\n\t\t\t<div class=\"text\">\r\n\t\t\t\t<h1>Летние городские лагеря в центре Москвы</h1>\r\n\t\t\t\t<p>программирование, олимпиадная математика, <br>бизнес навыки</p>\r\n\t\t\t\t<button class=\"open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></div>\r\n\t\t\t<button class=\"open-modal sm\">Записаться</button>\r\n\t\t</section>\r\n\t\t<section class=\"questions \">\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t\t<div class=\"answer\">06.06 - 26.08</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t\t\t<div class=\"answer\">понедельник-пятница<br>9.00- 19.00</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\"></div>\r\n\t\t\t\t<div class=\"answer\">м. Спортивная<br>м. Ленинский проспект<br>м. Шелепиха<br></div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\"></div>\r\n\t\t\t\t<div class=\"answer\">от 4 000 ₽</div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<section class=\"about \">\r\n\t\t\t<h2>Почему выбирают наш лагерь?</h2>\r\n\r\n\t\t\t<div class=\"about-items \">\r\n\t\t\t\t<div class=\"col1\">\r\n\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"text\">Возраст</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"description\">Мы приглашаем ребят от 7 до 16 лет провести летний период увлекательно и с пользой. Каждая смена нашего лагеря составлена с учетом возрастных особенностей и основана на самых популярных игровых методиках.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"text\">Творчество</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"description\">Дети раскроют свой творческий потенциал, используя современные компьютерные технологии. Кроме того, в каждой смене предусмотрены творческие мастер-классы и досуговые мероприятия.</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col2\">\r\n\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"text\">Инфраструктура</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"description\">Наши площадки совмещают в себе все необходимое для комфортного летнего времяпрепровождения: оборудованные для обучения классы, места для досуга, организованное горячее питание, близлежащие парки и детские площадки для прогулок.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"text\">Уникальность</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"description\">Мы собрали лучшие обучающие методики для детей в области программирования от ведущей школы программирования CODDY, математическую программу от платформы Uchi.ru и разработали уникальную программу по основам бизнеса для подростков. </div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col3\">\r\n\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"text\">Развитие</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"description\">Наши ученики развивают математическое мышление, компьютерную грамотность и навыки программирования, необходимые <br>в современном технологичном мире. <br>Для подростков мы подготовили смену по аналогии лучших MBA программ, которая поможет понять бизнес-процессы.</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"text\">Результат</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"description\">Наша основная задача – создать условия эффективного обучения. Мы стремимся к тому, чтобы все участники лагеря приобрели полезные знания: сделали собственный проект, развили свой потенциал, открыли новые горизонты, получили практические навыки.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t\t</section>\r\n\t\t<section class=\"assignments\" id=\"assignments\">\r\n\t\t\t<div class=\"mask\">\r\n\t\t\t\t<div class=\"ellipse1\"></div>\r\n\t\t\t\t<div class=\"ellipse2\"></div>\r\n\t\t\t\t<div class=\"ellipse3\"></div>\r\n\t\t\t\t<div class=\"ellipse4\"></div>\r\n\t\t\t\t<div class=\"ellipse5\"></div>\r\n\t\t\t\t<div class=\"ellipse6\"></div>\r\n\t\t\t\t<div class=\"ellipse7\"></div>\r\n\t\t\t\t<div class=\"ellipse8\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\" titles\">\r\n\t\t\t\t<h2>Наши смены</h2>\r\n\t\t\t\t<p>программирование, олимпиадная математика, бизнес навыки</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"card-wrap\">\r\n\t\t\t\t<div class=\"card col1\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col1\">\r\n\t\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">Программирование в Minecraft и олимпиадная математика</a>\r\n\t\t\t\t\t\t<p class=\"description col1\">В результате занятий дети создадут командный проект в общем мире Minecraft, изучат базовые понятия программирования и разберут важные темы математики в игровой форме.\r\n\t\t\t\t\t\t\tОни познакомятся с базовыми принципами программирования: алгоритм, цикл, функция, координаты.\r\n\t\t\t\t\t\t\tПриобретут навыки командной работы. \r\n\t\t\t\t\t\t\tРазовьют логическое и математическое мышление, раскроют творческий потенциал.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t<div class=\"text\">м. Спортивная, Ленинский проспект</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<p class=\"interval\">06.06-17.06, 06.06-17.06, 06.06-17.06, 06.06-17.06</p>\r\n\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card col1\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col1\">\r\n\t\t\t\t\t\t<p class=\"age\">10-12 лет</p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">Программирование в Roblox и олимпиадная математика</a>\r\n\t\t\t\t\t\t<p class=\"description col1\">В результате обучения дети изучат программирование на языке LUA, создадут совместный проект и опубликуют его на всемирном портале компании Roblox.\r\n\t\t\t\t\t\t\tА также пройдут важные темы математики в игровой форме.\r\n\t\t\t\t\t\t\tОни сделают первые шаги в одном из самых популярных направлении Game Dev.\r\n\t\t\t\t\t\t\tПознакомятся с понятием «Проектная деятельность» от идеи до конечного результата.\r\n\t\t\t\t\t\t\tРазовьют логическое и математическое мышление и раскроют творческий потенциал.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"text\">м. Спортивная</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p class=\"interval\">20.06-01.07</p>\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card col1\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col1\">\r\n\t\t\t\t\t\t<p class=\"age\">7-10 лет</p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">Компьютерная грамотность и математика </a>\r\n\t\t\t\t\t\t<p class=\"description col1\">Дети познакомятся с устройством компьютера и с основными рабочими программами, применяемые в школьном обучении. Узнают, как безопасно пользоваться интернетом и научатся уверенно пользоваться клавиатурой и мышкой. А также повторят важные разделы математики в игровой форме.\r\n\t\t\t\t\t\t\tЗанятия помогут ребенку почувствовать себя более уверенным и самостоятельным, повысят эффективность обучающего процесса в школе и дома.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"text\">м Хамовники, Ленинский проспект, Шелепиха</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<p class=\"interval\">06.06-17.06, 06.06-17.06, 06.06-17.06, 06.06-17.06</p>\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"card col2\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col2\">\r\n\t\t\t\t\t\t<p class=\"age\">12 – 15 лет</p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">Программирование в Python и основы бизнеса</a>\r\n\t\t\t\t\t\t<p class=\"description col2\">В результате комплексного подхода, ребята не только овладеют практическими инструментами современного программиста, но и будут иметь представление о том, как работает бизнес-среда.\r\n\t\t\t\t\t\t\tОни познакомятся со всеми основными темами, которые изучают в современных MBA программах.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"text\">м Ленинский проспект, Шелепиха\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<p class=\"interval\">06.06-17.06, 06.06-17.06, 06.06-17.06, 06.06-17.06</p>\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card col2\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col2\">\r\n\t\t\t\t\t\t<p class=\"age\">12-15 лет </p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">Web-дизайн и основы бизнеса </a>\r\n\t\t\t\t\t\t<p class=\"description col2\">\r\n\t\t\t\t\t\t\tВ результате комплексного подхода, ребята не только овладеют практическими инструментами современного дизайнера, но и будут иметь представление о том, как работает бизнес-среда.\r\n\t\t\t\t\t\t\tОни познакомятся со всеми основными темами, которые изучают в современных MBA программах.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"text\">м Ленинский проспект</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<p class=\"interval\">06.06-17.06, 06.06-17.06, 06.06-17.06, 06.06-17.06</p>\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card col2\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col2\">\r\n\t\t\t\t\t\t<p class=\"age\">8-12 лет</p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">Digital art: рисование на графическом планшете</a>\r\n\t\t\t\t\t\t<p class=\"description col2\">Ваш ребенок сделает первые шаги в такой востребованной профессии как графический дизайнер. \r\n\t\t\t\t\t\t\tРаскроет творческий потенциал, реализуя свои самые смелые идеи, используя современные компьютерные технологии.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"text\">м Шелепиха</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p class=\"interval\">06.06-11.06</p>\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card col3\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col3\">\r\n\t\t\t\t\t\t<p class=\"age\">12-15 лет</p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">3D моделирование в Blender</a>\r\n\t\t\t\t\t\t<p class=\"description col3\">Ребенок познакомится с новым перспективным направлением - 3D моделирование. Создаст собственный проект в популярной программе Blender.\r\n\t\t\t\t\t\t\tРаскроет творческий потенциал, реализуя свои самые смелые идеи и используя современные компьютерные технологии.\r\n\t\t\t\t\t\t\tПознакомится с аддитивными технологиями и получит навыки 3D печати.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"text\">м Шелепиха</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"interval\">06.06-17.06, 06.06-17.06, 06.06-17.06, 06.06-17.06</p>\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card col3\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col3\">\r\n\t\t\t\t\t\t<p class=\"age\">12-15 лет</p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">Создание 3D игры в Unity + освоение космоса </a>\r\n\t\t\t\t\t\t<p class=\"description col3\">Ребенок получит практические навыки профессионального разработчика игровых приложений и создаст собственный проект.\r\n\t\t\t\t\t\t\tУзнает о том, какие передовые технологии используются в современной космической отрасли и как они связаны с программированием.\r\n\t\t\t\t\t\t\tПознакомится с перспективами профессионального развития в космической индустрии.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"text\">м Спортивная</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p class=\"interval\">18.07-29.07</p>\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card col3\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content col3\">\r\n\t\t\t\t\t\t<p class=\"age\">10-14 лет</p>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"title\">Рисование в стиле Аниме </a>\r\n\t\t\t\t\t\t<p class=\"description col3\">Ребенок изучит академические основы композиции, колористики, свето-тени. Научится рисовать  пропорции человека, позы в статике, динамике и перспективе. Узнает, как отображать эмоции персонажа.\r\n\t\t\t\t\t\t\tРазовьет креативное мышление и генерацию новых идей.\r\n\t\t\t\t\t\t\tНаучится создавать индивидуальные интересные проекты в стиле Аниме.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"text\">м Ленинский проспект</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p class=\"interval\">15.08-26.08</p>\r\n\t\t\t\t\t\t<button class=\"open-modal\">Узнать подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<section  class=\"points \" id=\"points\">\r\n\t\t\t<h2 class=\"\">Адрес</h2>\r\n\r\n\t\t\t<div class=\"card-points\">\r\n\t\t\t\t<div class=\"card-point\">\r\n\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t\t<div class=\"title\">м. Спортивная</div>\r\n\t\t\t\t\t\t<div class=\"description\">ул. Хамовнический вал, 12</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card-point\">\r\n\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t\t<div class=\"title\">м. Ленинский проспект</div>\r\n\t\t\t\t\t\t<div class=\"description\">Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card-point\">\r\n\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t\t<div class=\"title\">м. Шелепиха</div>\r\n\t\t\t\t\t\t<div class=\"description\">Мукомольный проезд, 9</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\t\t<section class=\"reviews container\">\r\n\t\t\t<!-- <div class=\"ellipse1\"></div>\r\n\t\t\t<div class=\"ellipse2\"></div> -->\r\n\t\t\t<h2>Отзывы о нас</h2>\r\n\r\n\r\n\r\n\t\t\t<div class=\"reviews swiper\">\r\n\t\t\t\t<!-- <div class=\"background\"></div> -->\r\n\r\n\t\t\t\t\r\n\t\t\t\t<!-- <div class=\"slider-control main-slider__control\">\r\n\t\t\t\t\t<div class=\"swiper-button-prev\"><img src=\"img/svg/arrow-right.svg\" alt=\"\"></div>\r\n\t\t\t\t\t<div class=\"swiper-button-next\"><img src=\"img/svg/arrow-left.svg\" alt=\"\"></div>\r\n\t\t\t\t</div> -->\r\n\r\n\t\t\t\t<div class=\"swiper-wrapper\">\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"review swiper-slide\">\r\n\t\t\t\t\t\t<div class=\"parent\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"meta\">\r\n\t\t\t\t\t\t\t\t<div class=\"name\">Денис</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description\">папа Федора (10 лет), Roblox</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"stars\">\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"text\">«Спасибо Вам преогромнейшее! Фёдору всё очень нравится! Все преподаватели в школе очень хорошие, добрые и чуткие!»</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"review swiper-slide\">\r\n\t\t\t\t\t\t<div class=\"parent\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"meta\">\r\n\t\t\t\t\t\t\t\t<div class=\"name\">Татьяна</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description\">мама Юры (8 лет), Minecraft</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"stars\">\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"text\">«Нам все очень понравилось. Ребёнок был счастлив и доволен!»</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\r\n\t\t\t\t\t<div class=\"review swiper-slide\">\r\n\t\t\t\t\t\t<div class=\"parent\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"meta\">\r\n\t\t\t\t\t\t\t\t<div class=\"name\">Юлия</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description\">Мама Лиона (15 лет), Python</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"stars\">\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"text\">«Все отлично, все понравилось! Дружелюбная атмосфера на занятиях, понятная и доступная подача материала, все легко усваивалось. Еда хорошая тоже, спасибо большое!»</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"review swiper-slide\">\r\n\t\t\t\t\t\t<div class=\"parent\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"meta\">\r\n\t\t\t\t\t\t\t\t<div class=\"name\">Юлия</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description\">Мама Кирилла (12 лет), Unity</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"stars\">\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"text\">«От лагеря в восторге. Преподаватели молодые и увлечённые с отличным подходом к детям.»</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"review swiper-slide\">\r\n\t\t\t\t\t\t<div class=\"parent\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"meta\">\r\n\t\t\t\t\t\t\t\t<div class=\"name\">Анна</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description\">Мама Даны (15 лет), Рисование в стиле Аниме</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"stars\">\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"text\">«Дочке очень все понравилось, просилась ещё на одну смену.»</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"review swiper-slide\">\r\n\t\t\t\t\t\t<div class=\"parent\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"meta\">\r\n\t\t\t\t\t\t\t\t<div class=\"name\">Любовь</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description\">Мама Марии (10 лет), Рисование на графическом планшете</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"stars\">\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t\t<span class=\"star\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"text\">«Ребёнок с большим удовольствием посещал занятия. Очень увлекательно и познавательно проходили уроки. Спасибо.»</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</section>\r\n\t\t<section class=\"team container\" id=\"team\">\r\n\t\t\t<h2>Команда</h2>\r\n\t\t\t<p class=\"description\">Мы – опытные наставники и молодые увлеченные преподаватели, которые вдохновлены высокими технологиями.\r\n\t\t\t\tНаша задача – давать детям самые актуальные практические знания в доступной форме.\r\n\t\t\t\t</p>\r\n\t\t\r\n\r\n\t\t\t<div class=\"teachers\">\r\n\t\t\t\t<div class=\"teacher\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t<div class=\"name\">Мария Агалакова</div>\r\n\t\t\t\t\t\t<div class=\"education\">Физфак МГУ им. Ломоносова</div>\r\n\t\t\t\t\t\t<div class=\"profession\">Minecraft, Roblox, математика</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"teacher\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t<div class=\"name\">Полина Домрачева</div>\r\n\t\t\t\t\t\t<div class=\"education\">Организатор</div>\r\n\t\t\t\t\t\t<div class=\"profession\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"teacher\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t<div class=\"name\">Ксения Блюденова</div>\r\n\t\t\t\t\t\t<div class=\"education\">МГТУ им. Баумана</div>\r\n\t\t\t\t\t\t<div class=\"profession\">Web-дизайн, Рисование в стиле Аниме</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"teacher\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t<div class=\"name\">Роман Семенов</div>\r\n\t\t\t\t\t\t<div class=\"education\">Московский политех</div>\r\n\t\t\t\t\t\t<div class=\"profession\">Minecraft, Python</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"teacher\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t<div class=\"name\">Виктория Боровикова</div>\r\n\t\t\t\t\t\t<div class=\"education\">Директор по работе с клиентами Siemens MBA, The Open University</div>\r\n\t\t\t\t\t\t<div class=\"profession\">Основы бизнеса</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"teacher\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t<div class=\"name\">Мария Боброва</div>\r\n\t\t\t\t\t\t<div class=\"education\">МГТУ им. Баумана</div>\r\n\t\t\t\t\t\t<div class=\"profession\">Digital art, 3D моделирование в Blender</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"teacher\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t<div class=\"name\">Амина Евлоева</div>\r\n\t\t\t\t\t\t<div class=\"education\">МГТУ им. Баумана</div>\r\n\t\t\t\t\t\t<div class=\"profession\">Компьютерная грамотность, математика</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"teacher\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t<div class=\"name\">Семен Федонов</div>\r\n\t\t\t\t\t\t<div class=\"education\">МГТУ им. Баумана,\r\n\t\t\t\t\t\t\tПобедитель Олимпиад по астрономии</div>\r\n\t\t\t\t\t\t<div class=\"profession\">Создание 3D игры в Unity + освоение космоса</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</section>\r\n\t\t<section class=\"cost container\" id=\"cost\">\r\n\t\t\t<h2>Стоимость</h2>\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\tМы разработали гибкую систему оплаты, чтобы сделать пребывание в лагере максимально доступным.\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"programms\">\r\n\t\t\t\t<div class=\"programm\">\r\n\t\t\t\t\t<div class=\"title\">1 день</div>\r\n\t\t\t\t\t<div class=\"cost\">4 000 ₽</div>\r\n\t\t\t\t\t<button class=\"open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"programm\">\r\n\t\t\t\t\t<div class=\"title\">1 неделя</div>\r\n\t\t\t\t\t<div class=\"cost\">22 000 ₽</div>\r\n\t\t\t\t\t<button class=\"open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"programm\">\r\n\t\t\t\t\t<div class=\"title\">1 смена</div>\r\n\t\t\t\t\t<div class=\"cost\">39 500 ₽</div>\r\n\t\t\t\t\t<button class=\"open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<button class=\"button open-modal\">Записаться</button>\r\n\t\t</section>\r\n\t</div>\r\n\r\n\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./math.html":
/*!*******************!*\
  !*** ./math.html ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики \u2028в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями \u2028и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./minecraft.html":
/*!************************!*\
  !*** ./minecraft.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./python.html":
/*!*********************!*\
  !*** ./python.html ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики \u2028в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями \u2028и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./roblox.html":
/*!*********************!*\
  !*** ./roblox.html ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 3.svg */ "./img/svg/Vector 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon.svg */ "./img/svg/coolicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/coolicon (5).svg */ "./img/svg/coolicon (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/Vector 9.svg */ "./img/svg/Vector 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo4.jpg */ "./img/photo4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/unsplash_e5sTz361Jzg.png */ "./img/unsplash_e5sTz361Jzg.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>123</title>\r\n</head>\r\n<body>\r\n\t<div class=\"overlay\" id=\"overlay\"></div>\r\n\r\n\t<!-- <div class=\"background-gradient\"></div> -->\r\n\t<!-- <div class=\"background-gradient2\"></div> -->\r\n\t<div class=\"wrapper container-gradient-width\">\r\n\t\t<header>\r\n\r\n\t\t\t<nav>\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#points\">Смены <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#team\">Адреса <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#assginments\">Команда <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu-item\">\r\n\t\t\t\t\t<span class=\"title\"><a href=\"#cost\">Стоимость  <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a></span>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">gasg</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\r\n\t\t\t<div class=\"button-block\">\r\n\t\t\t\t<a class=\"phone-number\" href=\"https://wa.me/84951064600\"><img class=\"icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">8 495 106 46 00</a>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"sign-up open-modal\">Записаться</button>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<section class=\"course-page\">\r\n\r\n\t\t\t<div class=\"welcome\">\r\n\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t<p class=\"age\">7-9 лет</p>\r\n\t\t\t\t\t<h1 class=\"title\">Программирование в Minecraft<br> и олимпиадная математика</h1>\r\n\t\t\t\t\t<p class=\"description\">В результате занятий дети создадут командный проект в общем<br> мире Minecraft, изучат базовые понятия программирования<br> и разберут важные темы математики в игровой форме.</p>\r\n\t\t\t\t\t<div class=\"location\">\r\n\t\t\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></div>\r\n\t\t\t\t\t\t<div class=\"text-location\">м Спортивная, ул. Хамовнический вал, 12\r\n\t\t\t\t\t\t\t<br>м Ленинский проспект, Ленинский проспект, 38А</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">21r1d</p>\r\n\t\t\t\t\t<button class=\"button open-modal\">Записаться <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"benefits\">\r\n\t\t\t<div class=\"item col1\">\r\n\t\t\t\t<p class=\"title\">От 7 до 9 лет</p>\r\n\t\t\t\t<p class=\"description\">Интенсивная обучающая программа в игровой форме</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col2\">\r\n\t\t\t\t<p class=\"title sm\">Пн-пят,<br> 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"title xl\">Пн-пят, 9.00 – 19.00</p>\r\n\t\t\t\t<p class=\"description\">Сбалансированная нагрузка<br>Трехразовое питание, безопасность </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"item col3\">\r\n\t\t\t\t<p class=\"title\">от 3950  ₽/д</p>\r\n\t\t\t\t<p class=\"description\">Возможность провести демо-<br>день, 1 или 2 недели</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<div class=\"row1\">\r\n\t\t\t\t<h2>Как проходит обучение программированию?</h2>\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Дети составляют простую визуальную программу из блоков, похожих на разноцветные кирпичики \u2028в обучающем редакторе, разработанном компанией Microsoft.</li>\r\n\t\t\t\t\t<li>Составленная программа задает действия специальному агенту, который выполняет алгоритм внутри любимой игры Minecraft (например, строит забор, дом, ферму).</li>\r\n\t\t\t\t\t<li>Дети работают в общем мире Minecraft и составляют вместе командный проект.</li>\r\n\t\t\t\t\t<li>В итоге каждый ребенок делает свою постройку и получается общий город.</li>\r\n\t\t\t\t\t<li>По итогам обучения, дети презентуют родителям свой проект.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Что получает ребенок?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Знакомство с базовыми принципами программирования: алгоритм, цикл, функция, координаты.</li>\r\n\t\t\t\t\t\t<li>Командная работа над общим проектом – это ценный навык в современном мире.</li>\r\n\t\t\t\t\t\t<li>Развитие логического и математического мышления.</li>\r\n\t\t\t\t\t\t<li>Раскрытие творческого потенциала.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row2\">\r\n\t\t\t\t<h2>Как проходит обучение олимпиадной математике?</h2>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"sub_header\">\r\n\t\t\t\t\t<li>Каждый день дети проходят увлекательный квест на тему любимых игр Minecraft и Roblox.</li>\r\n\t\t\t\t\t<li>Обучение включает в себя работу со обучающими пособиями, головоломками, творческими заданиями \u2028и выполнение специальных заданий на платформе учи.ру</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Какие темы входят в программу?</h3>\r\n\t\t\t\t\t<ul class=\"list\">\r\n\t\t\t\t\t\t<li>Тренировка устного счета, графический диктант, лабиринты, танграм, судоку.</li>\r\n\t\t\t\t\t\t<li>Величины и единицы измерения: длина, периметр, площадь, масса.</li>\r\n\t\t\t\t\t\t<li>Геометрические фигуры и пространственное мышление.</li>\r\n\t\t\t\t\t\t<li>Решение олимпиадных задач на различные темы.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<div class=\"modal\" id=\"modal\">\r\n\r\n\t\t<div class=\"img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<div class=\"question_title\">Введите номер телефона</div>\r\n\t\t\t<p>Алминистратор свяжется с вами, чтобы выбрать для вас лучший курс и ответить на все вопросы</p>\r\n\t\t\t<form action=\"\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"Ваш телефон\" name=\"phone\" class=\"input-phone\">\r\n\t\t\t\t<button type=\"submit\">Запрос на звонок</button>\r\n\r\n\t\t\t</form>\r\n\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</body></html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/main-image.png":
/*!****************************!*\
  !*** ./img/main-image.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/main-image.png";

/***/ }),

/***/ "./img/photo10.jpg":
/*!*************************!*\
  !*** ./img/photo10.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo10.jpg";

/***/ }),

/***/ "./img/photo11.jpg":
/*!*************************!*\
  !*** ./img/photo11.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo11.jpg";

/***/ }),

/***/ "./img/photo12.jpg":
/*!*************************!*\
  !*** ./img/photo12.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo12.jpg";

/***/ }),

/***/ "./img/photo13.jpg":
/*!*************************!*\
  !*** ./img/photo13.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo13.jpg";

/***/ }),

/***/ "./img/photo2.jpg":
/*!************************!*\
  !*** ./img/photo2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo2.jpg";

/***/ }),

/***/ "./img/photo3.png":
/*!************************!*\
  !*** ./img/photo3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo3.png";

/***/ }),

/***/ "./img/photo4.jpg":
/*!************************!*\
  !*** ./img/photo4.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo4.jpg";

/***/ }),

/***/ "./img/photo5.jpg":
/*!************************!*\
  !*** ./img/photo5.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo5.jpg";

/***/ }),

/***/ "./img/photo6.jpg":
/*!************************!*\
  !*** ./img/photo6.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo6.jpg";

/***/ }),

/***/ "./img/photo7.jpg":
/*!************************!*\
  !*** ./img/photo7.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo7.jpg";

/***/ }),

/***/ "./img/photo8.png":
/*!************************!*\
  !*** ./img/photo8.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo8.png";

/***/ }),

/***/ "./img/photo9.jpg":
/*!************************!*\
  !*** ./img/photo9.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo9.jpg";

/***/ }),

/***/ "./img/photos/Амина-Евлоева.jpg":
/*!**************************************!*\
  !*** ./img/photos/Амина-Евлоева.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Амина-Евлоева.jpg";

/***/ }),

/***/ "./img/photos/Виктория-Боровикова.jpg":
/*!********************************************!*\
  !*** ./img/photos/Виктория-Боровикова.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Виктория-Боровикова.jpg";

/***/ }),

/***/ "./img/photos/Ксения-Блюдёнова.jpg":
/*!*****************************************!*\
  !*** ./img/photos/Ксения-Блюдёнова.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Ксения-Блюдёнова.jpg";

/***/ }),

/***/ "./img/photos/Мария Агалакова.jpg":
/*!****************************************!*\
  !*** ./img/photos/Мария Агалакова.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Мария Агалакова.jpg";

/***/ }),

/***/ "./img/photos/Мария-Боброва.jpg":
/*!**************************************!*\
  !*** ./img/photos/Мария-Боброва.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Мария-Боброва.jpg";

/***/ }),

/***/ "./img/photos/Полина-Домрачева.jpg":
/*!*****************************************!*\
  !*** ./img/photos/Полина-Домрачева.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Полина-Домрачева.jpg";

/***/ }),

/***/ "./img/photos/Роман-Семенов.jpg":
/*!**************************************!*\
  !*** ./img/photos/Роман-Семенов.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Роман-Семенов.jpg";

/***/ }),

/***/ "./img/photos/Семен-Федонов.jpg":
/*!**************************************!*\
  !*** ./img/photos/Семен-Федонов.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Семен-Федонов.jpg";

/***/ }),

/***/ "./img/review.png":
/*!************************!*\
  !*** ./img/review.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/review.png";

/***/ }),

/***/ "./img/svg/Coil (Traced).svg":
/*!***********************************!*\
  !*** ./img/svg/Coil (Traced).svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Coil (Traced).svg";

/***/ }),

/***/ "./img/svg/Vector 3.svg":
/*!******************************!*\
  !*** ./img/svg/Vector 3.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Vector 3.svg";

/***/ }),

/***/ "./img/svg/Vector 9.svg":
/*!******************************!*\
  !*** ./img/svg/Vector 9.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Vector 9.svg";

/***/ }),

/***/ "./img/svg/Vector.svg":
/*!****************************!*\
  !*** ./img/svg/Vector.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Vector.svg";

/***/ }),

/***/ "./img/svg/arrow-to-right.svg":
/*!************************************!*\
  !*** ./img/svg/arrow-to-right.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/arrow-to-right.svg";

/***/ }),

/***/ "./img/svg/coolicon (1).svg":
/*!**********************************!*\
  !*** ./img/svg/coolicon (1).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/coolicon (1).svg";

/***/ }),

/***/ "./img/svg/coolicon (2).svg":
/*!**********************************!*\
  !*** ./img/svg/coolicon (2).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/coolicon (2).svg";

/***/ }),

/***/ "./img/svg/coolicon (3).svg":
/*!**********************************!*\
  !*** ./img/svg/coolicon (3).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/coolicon (3).svg";

/***/ }),

/***/ "./img/svg/coolicon (4).svg":
/*!**********************************!*\
  !*** ./img/svg/coolicon (4).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/coolicon (4).svg";

/***/ }),

/***/ "./img/svg/coolicon (5).svg":
/*!**********************************!*\
  !*** ./img/svg/coolicon (5).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/coolicon (5).svg";

/***/ }),

/***/ "./img/svg/coolicon.svg":
/*!******************************!*\
  !*** ./img/svg/coolicon.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/coolicon.svg";

/***/ }),

/***/ "./img/svg/star.svg":
/*!**************************!*\
  !*** ./img/svg/star.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/star.svg";

/***/ }),

/***/ "./img/unsplash_e5sTz361Jzg.png":
/*!**************************************!*\
  !*** ./img/unsplash_e5sTz361Jzg.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/unsplash_e5sTz361Jzg.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_normalize_css_normalize_-abc2f4"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
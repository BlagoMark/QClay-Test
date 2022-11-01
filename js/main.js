/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const burger = $(\".burger\");\nconst navigation = $(\".header__right\");\nconst navlinks = $(\".header__navigation a\");\nconst introBg = $(\".intro__bg\");\nconst bgEllipses = $(\".bg-ellipses\");\nconst wrapper = $(\".wrapper\");\n\nburger.on(\"click\", function () {\n  navigation.toggleClass(\"active\");\n  navigation.hasClass(\"active\")\n    ? $(\"html, body\").css(\"overflow\", \"hidden\")\n    : $(\"html, body\").css(\"overflow\", \"auto\");\n});\n\nnavlinks.on(\"click\", function () {\n  navigation.removeClass(\"active\");\n  $(\"html, body\").css(\"overflow\", \"hidden\");\n});\n\nwrapper.mousemove(function (e) {\n  const valueX = (e.pageX * -1) / 20;\n  const valueY = (e.pageY * -1) / 20;\n  introBg.css({\n    transform: `translate(-48%, 0) translate3d(\n            ${valueX / 1.5}px, ${valueY / 1.5}px, 0)`,\n  });\n  bgEllipses.css({\n    transform: `translate(0, 0) translate3d(\n            ${valueX - valueX * 2}px, ${valueY - valueY * 2}px, 0)`,\n  });\n});\n\n\n//# sourceURL=webpack://gulp-assembly/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;
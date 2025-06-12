/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/clock.js":
/*!*************************!*\
  !*** ./src/js/clock.js ***!
  \*************************/
/***/ (() => {

eval("let timeoutId = null;\nconst SECOND_HAND = document.getElementById('second');\nconst MINUTE_HAND = document.getElementById('minute');\nconst HOUR_HAND = document.getElementById('hour');\nfunction updateClock() {\n  const now = new Date();\n  const seconds = now.getSeconds();\n  const minutes = now.getMinutes();\n  const hours = now.getHours();\n  const secondDeg = 6 * seconds;\n  const minuteDeg = 6 * minutes + 0.1 * seconds;\n  const hourDeg = 30 * (hours % 12) + 0.5 * minutes;\n  SECOND_HAND.style.transform = `rotate(${secondDeg}deg)`;\n  MINUTE_HAND.style.transform = `rotate(${minuteDeg}deg)`;\n  HOUR_HAND.style.transform = `rotate(${hourDeg}deg)`;\n  timeoutId = setTimeout(updateClock, 1000 - now.getMilliseconds());\n}\nwindow.onload = function () {\n  document.addEventListener('click', documentActions);\n  function documentActions(e) {\n    if (e.target.classList.contains('startBtn')) {\n      if (!timeoutId) {\n        updateClock();\n      }\n    } else if (e.target.classList.contains('pauseBtn')) {\n      clearTimeout(timeoutId);\n      timeoutId = null;\n    }\n  }\n};\n\n//# sourceURL=webpack://project_purrweb/./src/js/clock.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/clock.js"]();
/******/ 	
/******/ })()
;
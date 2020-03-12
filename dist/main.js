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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: render, openModel, openModelAI, closeModel, closeModelAI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openModel\", function() { return openModel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openModelAI\", function() { return openModelAI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModel\", function() { return closeModel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModelAI\", function() { return closeModelAI; });\nfunction render(board) {\n  let tableRows = '';\n  for (let i = 0; i <= 2; i += 1) {\n    tableRows += '<tr class=\"table-rows\">';\n    for (let j = 0; j <= 2; j += 1) {\n      if (board.getValue(i * 3 + j) === 0) {\n        tableRows += `<th class=\"board-border\" id=\"space-${i * 3 + j}\"></th>`;\n      } else if (board.getValue(i * 3 + j) === 1) {\n        tableRows += '<th class=\"board-border text-center background-X\"></th>';\n      } else {\n        tableRows += '<th class=\"board-border text-center background-O\"></th>';\n      }\n    }\n    tableRows += '</tr>';\n  }\n  document.getElementById('table-rows').innerHTML = tableRows;\n}\n\n\nfunction openModel() {\n  document.getElementById('model').style.display = 'block';\n}\n\nfunction openModelAI() {\n  document.getElementById('modelAI').style.display = 'block';\n}\n\nfunction closeModel() {\n  document.getElementById('model').style.display = 'none';\n}\n\nfunction closeModelAI() {\n  document.getElementById('modelAI').style.display = 'none';\n}\n\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: gameBoard, playGame, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoard\", function() { return gameBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playGame\", function() { return playGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst gameBoard = () => {\n  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];\n  let play1 = 'Player1';\n  let play2 = 'Player2';\n\n  const changeSpace = (space, value) => {\n    board[space] = value;\n  };\n  const getValue = (space) => (board[space]);\n\n  const setPlayerName = (name, value) => {\n    if (value === true) {\n      play1 = name;\n    } else {\n      play2 = name;\n    }\n  };\n\n  const getPlayerName = (value) => {\n    let play;\n    if (value === true) {\n      play = play1;\n    } else {\n      play = play2;\n    }\n    return play;\n  };\n\n  return {\n    board, changeSpace, getValue, play1, play2, setPlayerName, getPlayerName,\n  };\n};\n\nconst player = (name) => {\n  const turn = (player) => (player.name);\n  return { name, turn };\n};\n\nconst playTurn = (value) => {\n  let playerTurn = value;\n\n  const setPlayerTurn = (value) => {\n    playerTurn = value;\n  };\n  const getPlayerTurn = () => (playerTurn);\n\n  return { playerTurn, setPlayerTurn, getPlayerTurn };\n};\n\nconst playTurnAI = (value) => {\n  let playerAI = value;\n\n  const setPlayerTurnAI = (value) => {\n    playerAI = value;\n  };\n  const getPlayerTurnAI = () => (playerAI);\n\n  return { playerAI, setPlayerTurnAI, getPlayerTurnAI };\n};\n\nfunction init() {\n  const board = gameBoard();\n  return (board);\n}\n\nfunction initPlayTurn() {\n  const playerTurn = playTurn(1);\n  return (playerTurn);\n}\n\nfunction initPlayTurnAI() {\n  const playAI = playTurnAI(true);\n  return (playAI);\n}\n\nfunction updateSpace(board, space, value) {\n  board.changeSpace(space, value);\n}\n\nfunction checkBoard(board) {\n  for (let i = 0; i <= 2; i += 1) {\n    if ((board.getValue(i * 3) === board.getValue(i * 3 + 1)\n        && board.getValue(i * 3) === board.getValue(i * 3 + 2)\n        && board.getValue(i * 3) !== 0)\n        || (board.getValue(i) === board.getValue(i + 3)\n        && board.getValue(i) === board.getValue(i + 6)\n        && board.getValue(i) !== 0)) {\n      return true;\n    }\n  }\n\n  if ((board.getValue(0) === board.getValue(4)\n      && board.getValue(0) === board.getValue(8)\n      && board.getValue(0) !== 0)\n      || (board.getValue(2) === board.getValue(4)\n      && board.getValue(2) === board.getValue(6)\n      && board.getValue(2) !== 0)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction changeTurn(playerTurn) {\n  if (playerTurn.getPlayerTurn() === 1) {\n    playerTurn.setPlayerTurn(2);\n  } else {\n    playerTurn.setPlayerTurn(1);\n  }\n  return playerTurn;\n}\n\nfunction setEventListeners(board, playerTurn) {\n  for (let i = 0; i < 9; i += 1) {\n    if (board.getValue(i) === 0) {\n      // eslint-disable-next-line no-use-before-define\n      document.getElementById(`space-${i}`).addEventListener('click', () => { movement(i, board, playerTurn); });\n    }\n  }\n}\n\nfunction movement(value, board, playerTurn) {\n  updateSpace(board, value, playerTurn.getPlayerTurn());\n  Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(board);\n  setEventListeners(board, playerTurn);\n  if (checkBoard(board) === false) {\n    playerTurn = changeTurn(playerTurn);\n    if (board.board.every(value => value !== 0)) {\n      document.getElementById('player-turn').innerHTML = 'Tied! start again';\n    } else if (playerTurn.getPlayerTurn() === 1) {\n      document.getElementById('player-turn').innerHTML = `${board.getPlayerName(true)}'s turn`;\n    } else {\n      // if (this.playerTurnAI.getPlayerTurnAI() === true) {\n      //   let random = Math.floor(Math.random() * 9);\n      //   while (board.getValue(random) !== 0) {\n      //     random = Math.floor(Math.random() * 9);\n      //   }\n      //   updateSpace(board, random, playerTurn.getPlayerTurn());\n      //   changeTurn(playerTurn);\n      // }\n      Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(board);\n      setEventListeners(board, playerTurn);\n      document.getElementById('player-turn').innerHTML = `${board.getPlayerName(false)}'s turn`;\n    }\n  } else if (playerTurn.getPlayerTurn() === 1) {\n    document.getElementById('player-turn').innerHTML = `${board.getPlayerName(true)} won!!!`;\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(board);\n  } else {\n    document.getElementById('player-turn').innerHTML = `${board.getPlayerName(false)} won!!!`;\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(board);\n  }\n  return playerTurn.getPlayerTurn();\n}\n\n// function playGameAI() {\n//   closeModelAI();\n//   board = init();\n//   playerTurn = initPlayTurn();\n//   playerTurnAI = initPlayTurnAI();\n//   playerTurnAI.setPlayerTurnAI(true);\n\n//   let pName = document.getElementById('player').value;\n\n//   if (pName === '') {\n//     pName = 'Player';\n//   }\n\n//   this.player1 = initPlayers(pName);\n//   this.player2 = initPlayers('AI');\n\n//   document.getElementById('player-turn').innerHTML = `${this.player1.name}'s turn`;\n\n//   render(board, playerTurn);\n// }\n\nfunction playGame() {\n  Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"closeModel\"])();\n  const board = init();\n  const playerTurn = initPlayTurn();\n  // const playerTurnAI = initPlayTurnAI();\n  // playerTurnAI.setPlayerTurnAI(false);\n\n  board.setPlayerName(document.getElementById('player1').value, true);\n  board.setPlayerName(document.getElementById('player2').value, false);\n\n  if (board.getPlayerName(true) === '') {\n    board.setPlayerName('Player1', true);\n  }\n\n  if (board.getPlayerName(false) === '') {\n    board.setPlayerName('Player2', false);\n  }\n\n  document.getElementById('player-turn').innerHTML = `${board.getPlayerName(true)}'s turn`;\n\n  Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(board);\n  setEventListeners(board, playerTurn);\n}\n\nfunction initialize() {\n  document.getElementById('button-playGame').addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__[\"openModel\"]);\n  document.getElementById('button-playGame-AI').addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__[\"openModelAI\"]);\n  document.getElementById('submit').addEventListener('click', playGame);\n}\n\ninitialize();\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
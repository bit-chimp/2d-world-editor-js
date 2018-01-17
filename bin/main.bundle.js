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
/***/ (function(module, exports, __webpack_require__) {

window.onload = function () {
  var editor = __webpack_require__(1);
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Grid__ = __webpack_require__(2);

var App = /** @class */ (function () {
    function App() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "app", this);
    }
    App.prototype.preload = function () { };
    App.prototype.create = function () {
        var _this = this;
        this.grid = new __WEBPACK_IMPORTED_MODULE_0__core_Grid__["a" /* default */](10, 10);
        this
            .game
            .state
            .add("Grid", this.grid, true);
        var pauseKey = this
            .game
            .input
            .keyboard
            .addKey(Phaser.KeyCode.UP);
        pauseKey.onDown.add(function () { console.log("PUASE KEY"), _this.game; });
        this.game.input.enabled = true;
        pauseKey.enabled = true;
        pauseKey
            .onDown
            .add(this.test, this);
    };
    App.prototype.test = function () {
        console.log("Pressed Key ");
    };
    App.prototype.update = function () { };
    return App;
}());
var app = new App();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector2__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(xSize, ySize) {
        var _this = _super.call(this) || this;
        _this.xSize = xSize;
        _this.ySize = ySize;
        return _this;
    }
    Grid.prototype.update = function () {
        if (this.graphics == null) {
            this.graphics = this.game.add.graphics(0, 0);
        }
        this.graphics.clear();
        var size = new __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* default */](this.game.world.width / this.xSize, this.game.world.height / this.ySize);
        for (var x = 0; x < this.xSize; x++) {
            for (var y = 0; y < this.ySize; y++) {
                var pos = new __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* default */](x * size.x, y * size.y);
                this.graphics.beginFill(Math.random() * 0xFFFFFF, 1);
                this.graphics.drawRect(pos.x, pos.y, size.x, size.y);
                this.graphics.endFill();
            }
        }
        window.graphics = this.graphics;
    };
    Grid.prototype.create = function () {
    };
    Grid.prototype.render = function () {
        this.game.time.advancedTiming = true;
        var test = this.game.time.fps.toString();
        this.game.debug.text('FPS ' + test, 50, 50, 'red');
    };
    return Grid;
}(Phaser.State));
/* harmony default export */ __webpack_exports__["a"] = (Grid);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    return Vector2;
}());
/* harmony default export */ __webpack_exports__["a"] = (Vector2);


/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map
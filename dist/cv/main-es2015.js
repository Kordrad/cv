(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"content\"><router-outlet></router-outlet></div>\r\n</div>\r\n<app-control-menu></app-control-menu>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-menu/control-menu.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-menu/control-menu.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"control-menu\">\r\n  <div>\r\n    <span>Theme selector: </span>\r\n    <button class=\"white-theme\" (click)=\"setTheme('')\"></button>\r\n    <button class=\"dark-theme\" (click)=\"setTheme('dark')\"></button>\r\n  </div>\r\n  <div class=\"lang\">\r\n    <img\r\n      src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAz%0D%0AMCI+CjxjbGlwUGF0aCBpZD0idCI+CjxwYXRoIGQ9Ik0zMCwxNSBoMzAgdjE1IHogdjE1IGgtMzAg%0D%0AeiBoLTMwIHYtMTUgeiB2LTE1IGgzMCB6Ii8+CjwvY2xpcFBhdGg+CjxwYXRoIGQ9Ik0wLDAgdjMw%0D%0AIGg2MCB2LTMwIHoiIGZpbGw9IiMwMDI0N2QiLz4KPHBhdGggZD0iTTAsMCBMNjAsMzAgTTYwLDAg%0D%0ATDAsMzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI2Ii8+CjxwYXRoIGQ9Ik0wLDAgTDYw%0D%0ALDMwIE02MCwwIEwwLDMwIiBjbGlwLXBhdGg9InVybCgjdCkiIHN0cm9rZT0iI2NmMTQyYiIgc3Ry%0D%0Ab2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0zMCwwIHYzMCBNMCwxNSBoNjAiIHN0cm9rZT0iI2Zm%0D%0AZiIgc3Ryb2tlLXdpZHRoPSIxMCIvPgo8cGF0aCBkPSJNMzAsMCB2MzAgTTAsMTUgaDYwIiBzdHJv%0D%0Aa2U9IiNjZjE0MmIiIHN0cm9rZS13aWR0aD0iNiIvPgo8L3N2Zz4K\"\r\n      alt=\"EN\"\r\n      routerLink=\"/en\"\r\n      (click)=\"changeLang('en')\"\r\n    />\r\n    <img\r\n      src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJGbGFnIG9mIFBvbGFu%0D%0AZCIgdmlld0JveD0iMCAwIDE2IDEwIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiBmaWxs%0D%0APSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSI1IiBmaWxsPSIjZGMxNDNjIiB5PSI1%0D%0AIi8+Cjwvc3ZnPgo=\"\r\n      alt=\"PL\"\r\n      routerLink=\"/pl\"\r\n      (click)=\"changeLang('pl')\"\r\n    />\r\n  </div>\r\n  <i antIcon [type]=\"'printer'\" theme=\"fill\" (click)=\"print()\"></i>\r\n</section>\r\n<ng-content></ng-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<span>{{'langTest' | translate}}</span>-->\r\n<header>\r\n  <img src=\"./assets/img/user.jpg\" alt=\"User\"/>\r\n\r\n  <div>\r\n    <h1 [innerHTML]=\"'name' | translate | bold\"></h1>\r\n\r\n  </div>\r\n  <h2>\r\n    {{'position' | translate}}\r\n  </h2>\r\n</header>\r\n\r\n<section id=\"content\">\r\n  <aside>\r\n    <section id=\"contact\">\r\n      <h3>{{'contact.title' | translate}}</h3>\r\n      <ul>\r\n        <li *ngFor=\"let contact of 'contact.child' | translate\">\r\n          <i antIcon [type]=\"contact.icon\" theme=\"fill\"></i>\r\n          <a [href]=\"contact.link\" target=\"_blank\">{{ contact.title | translate}}</a></li>\r\n      </ul>\r\n    </section>\r\n\r\n    <section id=\"skills\">\r\n      <h3>{{'skills.title' | translate}}</h3>\r\n      <ul>\r\n        <li *ngFor=\"let skill of 'skills.child' | translate\">\r\n          <h4>{{skill.level}}</h4>\r\n          <p> {{skill.name.sort() | join: ', '}} </p>\r\n        </li>\r\n      </ul>\r\n    </section>\r\n\r\n    <section id=\"languages\">\r\n      <h3>{{'languages.title' | translate}}</h3>\r\n      <ul>\r\n        <li *ngFor=\"let language of 'languages.child' | translate\">\r\n          {{language.language}} <span>{{language.level}}</span>\r\n        </li>\r\n      </ul>\r\n    </section>\r\n\r\n    <section id=\"hobbies\">\r\n      <h3>{{'hobbies.title' | translate}}</h3>\r\n      <p>{{'hobbies.child' | translate | join: ', ' }}</p>\r\n    </section>\r\n  </aside>\r\n  <main>\r\n    <section id=\"objective\">\r\n      <h3 [innerHTML]=\"'objective.title' | translate | bold\"></h3>\r\n      <p>{{'objective.description' | translate}}</p>\r\n    </section>\r\n    <section id=\"experience\">\r\n      <h3 [innerHTML]=\"'experience.title' | translate | bold\"></h3>\r\n      <ul *ngFor=\"let jobs of 'experience.child' | translate | sortByDate\">\r\n        <li *ngFor=\"let job of jobs\">\r\n          <span class=\"end\">{{job.date[1] ? job.date[1] : job.date[0]}}</span>\r\n          <span class=\"start\" *ngIf=\"job.date[1]\">{{job.date[0]}}</span>\r\n          <h4>{{job.title}}</h4>\r\n          <p *ngIf=\"job.description\" [innerHTML]=\"job.description\"></p>\r\n        </li>\r\n      </ul>\r\n    </section>\r\n    <section id=\"projects\">\r\n      <h3 [innerHTML]=\"'projects.title' | translate | bold\"></h3>\r\n      <aside>\r\n        <div class=\"project\" *ngFor=\"let project of 'projects.child' | translate\">\r\n          <h5>{{project.title}}</h5>\r\n          <a [href]=\"project.link.to\">{{project.link.title || project.link.to}}</a>\r\n          <b>{{project.details.join(', ')}}</b>\r\n          <p>\r\n            {{project.description}}\r\n          </p>\r\n          <small><a [href]=\"project.link['gitTo']\">{{project.link['gitTitle']}}</a></small>\r\n        </div>\r\n      </aside>\r\n    </section>\r\n    <p *ngIf=\"'clause' | translate\">\r\n      {{'clause' | translate}}\r\n    </p>\r\n  </main>\r\n</section>\r\n\r\n<app-control-menu [ngClass]=\"activeMenu ? 'active' : ''\">\r\n  <button id=\"toggle\" (click)=\"toggleMenu()\">\r\n    <i antIcon [type]=\"'caret-up'\" theme=\"fill\"></i>\r\n  </button>\r\n</app-control-menu>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");




// Pages
const routes = [
    { path: ':lang', component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"] },
    { path: '', redirectTo: '/en', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  min-height: 100vh;\n  min-width: 100vw;\n  position: relative;\n  padding: 5px 0;\n}\n.container:before, .container:after {\n  content: \"\";\n  width: 100%;\n  height: 25vh;\n  max-height: 250px;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.container:before {\n  top: 0;\n}\n.container:after {\n  bottom: 0;\n}\n.container .content {\n  z-index: 1;\n  position: relative;\n  margin: auto;\n  width: calc(100% - 10px);\n  border: 1px solid #5c5d5b;\n  padding: 39px;\n  box-sizing: border-box;\n}\napp-control-menu {\n  display: none;\n}\n@media (min-width: 576px) {\n  .container {\n    padding: 7px 0;\n  }\n  .container .content {\n    width: calc(100% - 14px);\n  }\n}\n@media (min-width: 8.29in), print {\n  .container {\n    max-height: 11.7in;\n    width: 8.29in;\n    min-width: unset;\n    min-height: unset;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    left: 50%;\n    position: absolute;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    box-shadow: 0 0 40px 5px rgba(0, 0, 0, 0.75);\n  }\n\n  app-control-menu {\n    background-color: unset;\n    display: unset;\n    position: fixed;\n    top: 50%;\n    right: 10px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n}\n@media print {\n  app-control-menu {\n    display: none;\n  }\n\n  .container {\n    margin: 0;\n    height: 98.75%;\n    overflow: hidden;\n    box-shadow: none;\n  }\n  .container .content {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByYWNhXFxuZy1jdlxcY3Yvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNDSjtBREVFO0VBQ0UsTUFBQTtBQ0FKO0FER0U7RUFDRSxTQUFBO0FDREo7QURJRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRko7QURNQTtFQUNFLGFBQUE7QUNIRjtBRE1BO0VBQ0U7SUFDRSxjQUFBO0VDSEY7RURLRTtJQUNFLHdCQUFBO0VDSEo7QUFDRjtBRE9BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSw0Q0FBQTtFQ0xGOztFRE9BO0lBQ0UsdUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UsYUFBQTtFQ0xGOztFRE9BO0lBQ0UsU0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDSkY7RURLRTtJQUNFLFlBQUE7RUNISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcblxyXG4gICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB9XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1YzVkNWI7XHJcbiAgICBwYWRkaW5nOiAzOXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbn1cclxuXHJcbmFwcC1jb250cm9sLW1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogN3B4IDA7XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOC4yOWluKSwgcHJpbnR7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMS43aW47XHJcbiAgICB3aWR0aDogOC4yOWluO1xyXG4gICAgbWluLXdpZHRoOiB1bnNldDtcclxuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB9XHJcbiAgYXBwLWNvbnRyb2wtbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgYXBwLWNvbnRyb2wtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogOTguNzUlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmNvbnRhaW5lcjpiZWZvcmUsIC5jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXZoO1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgdG9wOiAwO1xufVxuLmNvbnRhaW5lcjphZnRlciB7XG4gIGJvdHRvbTogMDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWM1ZDViO1xuICBwYWRkaW5nOiAzOXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hcHAtY29udHJvbC1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDdweCAwO1xuICB9XG4gIC5jb250YWluZXIgLmNvbnRlbnQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNHB4KTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDguMjlpbiksIHByaW50IHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogMTEuN2luO1xuICAgIHdpZHRoOiA4LjI5aW47XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIH1cblxuICBhcHAtY29udHJvbC1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBkaXNwbGF5OiB1bnNldDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICBhcHAtY29udHJvbC1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogOTguNzUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAuY29udGFpbmVyIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(route, translate) {
        this.route = route;
        this.translate = translate;
        translate.addLangs(['en', 'pl']);
        translate.setDefaultLang('en');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons-angular */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular.js");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _pipe_bold_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/bold.pipe */ "./src/app/pipe/bold.pipe.ts");
/* harmony import */ var _pipe_join_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe/join.pipe */ "./src/app/pipe/join.pipe.ts");
/* harmony import */ var _components_control_menu_control_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/control-menu/control-menu.component */ "./src/app/components/control-menu/control-menu.component.ts");
/* harmony import */ var _pipe_sort_by_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/sort-by-date.pipe */ "./src/app/pipe/sort-by-date.pipe.ts");














// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"],
            _pipe_bold_pipe__WEBPACK_IMPORTED_MODULE_10__["BoldPipe"],
            _pipe_join_pipe__WEBPACK_IMPORTED_MODULE_11__["JoinPipe"],
            _components_control_menu_control_menu_component__WEBPACK_IMPORTED_MODULE_12__["ControlMenuComponent"],
            _pipe_sort_by_date_pipe__WEBPACK_IMPORTED_MODULE_13__["SortByDatePipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            }),
            _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/control-menu/control-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/control-menu/control-menu.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  padding: 14px 3%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n  background-color: gray;\n}\nsection * {\n  margin: 0;\n}\nsection button {\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n}\nsection button.white-theme {\n  background-color: #fff;\n  margin-right: 10px;\n}\nsection button.dark-theme {\n  background-color: #343637;\n}\nsection .lang {\n  display: -webkit-box;\n  display: flex;\n}\nsection .lang img {\n  height: 20px;\n  max-width: 100%;\n}\nsection .lang img:nth-of-type(2) {\n  margin-left: 10px;\n  background-color: black;\n}\nsection i {\n  font-size: 1.25rem;\n}\n@media (min-width: 8.29in), print {\n  section {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    height: 200px;\n    background: unset;\n    text-align: center;\n  }\n  section * {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    position: relative;\n    text-align: center;\n  }\n  section span {\n    display: none;\n  }\n  section .dark-theme {\n    margin-top: 15px;\n  }\n  section .lang img:nth-of-type(2) {\n    block-size: auto;\n    margin: 10px 0 0;\n  }\n  section i {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLW1lbnUvRTpcXFByYWNhXFxuZy1jdlxcY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRyb2wtbWVudVxcY29udHJvbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtbWVudS9jb250cm9sLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1tZW51L0U6XFxQcmFjYVxcbmctY3ZcXGN2L3NyY1xcc3R5bGVzXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNERjtBREVFO0VBQ0UsU0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDREo7QURHSTtFQUNFLHNCRWxCUTtFRm1CUixrQkFBQTtBQ0ROO0FESUk7RUFDRSx5QkV4Qk87QURzQmI7QURPRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0xKO0FET0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0xOO0FET007RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDTFI7QURVRTtFQUNFLGtCQUFBO0FDUko7QURZQTtFQUNFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNURjtFRFdFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDVEo7RURXRTtJQUNFLGFBQUE7RUNUSjtFRFlFO0lBQ0UsZ0JBQUE7RUNWSjtFRGFFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ1hKO0VEY0U7SUFDRSxlQUFBO0VDWko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1tZW51L2NvbnRyb2wtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMTRweCAzJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG5cclxuICAgICYud2hpdGUtdGhlbWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmRhcmstdGhlbWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAubGFuZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOC4yOWluKSwgcHJpbnR7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICoge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGFyay10aGVtZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhbmcgaW1nOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgYmxvY2stc2l6ZTogYXV0bztcclxuICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJzZWN0aW9uIHtcbiAgcGFkZGluZzogMTRweCAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5zZWN0aW9uICoge1xuICBtYXJnaW46IDA7XG59XG5zZWN0aW9uIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cbnNlY3Rpb24gYnV0dG9uLndoaXRlLXRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuc2VjdGlvbiBidXR0b24uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM2Mzc7XG59XG5zZWN0aW9uIC5sYW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbnNlY3Rpb24gLmxhbmcgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uIC5sYW5nIGltZzpudGgtb2YtdHlwZSgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbnNlY3Rpb24gaSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDguMjlpbiksIHByaW50IHtcbiAgc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBzZWN0aW9uICoge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgc2VjdGlvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIHNlY3Rpb24gLmRhcmstdGhlbWUge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgc2VjdGlvbiAubGFuZyBpbWc6bnRoLW9mLXR5cGUoMikge1xuICAgIGJsb2NrLXNpemU6IGF1dG87XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgfVxuICBzZWN0aW9uIGkge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufSIsIiR0aGVtZS1kYXJrOiAjMzQzNjM3O1xyXG4kdGhlbWUtd2hpdGU6ICNmZmY7XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/control-menu/control-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/control-menu/control-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: ControlMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMenuComponent", function() { return ControlMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-angular */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");





let ControlMenuComponent = class ControlMenuComponent {
    constructor(translate, iconService) {
        this.translate = translate;
        this.iconService = iconService;
        this.setTheme = (theme) => {
            document.body.className = theme;
        };
        this.changeLang = (lang) => {
            this.translate.use(lang);
        };
        this.print = () => {
            alert('To print CV, please remove margins in print settings.');
            window.print();
        };
        this.iconService.addIcon(...[_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_4__["PrinterFill"]]);
    }
    ngOnInit() {
    }
};
ControlMenuComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconService"] }
];
ControlMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-control-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./control-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-menu/control-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./control-menu.component.scss */ "./src/app/components/control-menu/control-menu.component.scss")).default]
    })
], ControlMenuComponent);



/***/ }),

/***/ "./src/app/components/page/page.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/page/page.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-template-rows: auto;\n  grid-template-areas: \"img name\" \"description description\";\n  text-transform: uppercase;\n}\nheader img {\n  max-width: 100%;\n  border: 1px solid #5c5d5b;\n  grid-area: img;\n}\nheader div {\n  grid-area: name;\n  margin: auto;\n}\nheader div h1 {\n  font-weight: normal;\n  text-align: center;\n  font-size: 1.75rem;\n  margin: 0;\n  padding-bottom: 4px;\n}\nheader div h1 span {\n  font-weight: bold;\n}\nheader h2 {\n  font-size: 1rem;\n  grid-area: description;\n  margin-bottom: 25px;\n}\nsection#content aside section, section#content main section {\n  margin-bottom: 50px;\n}\nsection#content aside section h3, section#content main section h3 {\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 1.2rem;\n}\nsection#content aside ul {\n  list-style: none;\n  padding: 0;\n  margin-left: 15px;\n}\nsection#content aside ul li:not(:last-of-type) {\n  margin-bottom: 15px;\n}\nsection#content aside section#contact ul li {\n  display: grid;\n  grid-template-columns: 1.5rem 1fr;\n  grid-template-areas: \"icon any\";\n  grid-template-rows: auto;\n  grid-gap: 20px;\n}\nsection#content aside section#contact ul li i {\n  grid-area: icon;\n  text-align: center;\n  font-size: 1.5rem;\n  display: -webkit-box;\n  display: flex;\n}\nsection#content aside section#contact ul li > * {\n  grid-area: any;\n  text-decoration: none;\n  margin: auto 0;\n}\nsection#content aside section#languages ul {\n  list-style: circle;\n  margin-left: 36px;\n}\nsection#content aside section#languages ul li span {\n  opacity: 0.65;\n}\nsection#content main section#experience ul {\n  list-style: circle;\n  padding-left: 88px;\n  position: relative;\n}\nsection#content main section#experience ul li {\n  position: relative;\n}\nsection#content main section#experience ul li span {\n  position: absolute;\n  left: -90px;\n  text-align: center;\n  display: block;\n  width: 66px;\n}\nsection#content main section#experience ul li span.start {\n  bottom: 0;\n}\nsection#content main section#experience ul li::before {\n  content: \"\";\n  height: calc(100% + 14px);\n  position: absolute;\n  bottom: -26px;\n  left: -14px;\n}\nsection#content main section#experience ul li:last-of-type::before {\n  height: calc(100% - 12px);\n  bottom: 0;\n}\nsection#content main section#projects aside div {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  grid-template-areas: \"title\" \"link\" \"details\" \"description\" \"project-link\";\n  grid-gap: 10px;\n  margin-bottom: 50px;\n}\nsection#content main section#projects aside div h5 {\n  grid-area: title;\n  font-size: 1rem;\n  text-transform: uppercase;\n  margin: 0;\n}\nsection#content main section#projects aside div a {\n  grid-area: link;\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-decoration: none;\n}\nsection#content main section#projects aside div b {\n  grid-area: details;\n  font-size: 0.75rem;\n  opacity: 0.5;\n}\nsection#content main section#projects aside div p {\n  grid-area: description;\n  margin: 0;\n}\nsection#content main section#projects aside div small {\n  grid-area: project-link;\n}\nsection#content main section#projects aside div small a {\n  font-weight: normal;\n}\napp-control-menu {\n  position: fixed;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 0 22px 0 rgba(0, 0, 0, 0.75);\n  padding: 0;\n  margin: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\napp-control-menu #toggle {\n  position: absolute;\n  top: -45px;\n  right: 27px;\n  border-radius: 50%;\n  min-width: 25px;\n  min-height: 25px;\n}\napp-control-menu #toggle i {\n  display: block;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\napp-control-menu.active {\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n}\napp-control-menu.active #toggle i {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n@media (min-width: 576px) {\n  header {\n    grid-template-columns: 1fr 2fr;\n    grid-template-areas: \"img name\" \"img description\";\n    margin-bottom: 50px;\n  }\n  header h2 {\n    text-align: center;\n  }\n\n  section#content section#languages ul {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n  section#content main section#projects aside div {\n    grid-template-columns: 1fr 2fr;\n    grid-template-areas: \"title link\" \"details project-link\" \". description\";\n  }\n}\n@media (min-width: 768px), print {\n  header {\n    grid-template-columns: 1fr 3fr;\n    grid-column-gap: 100px;\n  }\n\n  section#content {\n    display: grid;\n    grid-template-columns: 240px auto;\n    grid-template-rows: auto;\n    grid-template-areas: \"aside mian\";\n    grid-gap: 20px;\n  }\n  section#content aside {\n    grid-area: aside;\n  }\n  section#content aside section#languages ul {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  section#content main {\n    grid-area: mian;\n    border: none;\n    border-left: 2px solid;\n    padding: 0 20px;\n  }\n  section#content main section#experience ul li::before {\n    height: calc(100% + 10px);\n    bottom: -18px;\n    left: -11.5px;\n  }\n  section#content main section#experience ul li:last-of-type::before {\n    height: calc(100% - 8px);\n  }\n}\n@media (min-width: 8.29in), print {\n  .container {\n    max-height: 11.7in;\n    width: 8.29in;\n    min-width: unset;\n    min-height: unset;\n    margin-top: 25px;\n    left: 50%;\n    position: absolute;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n\n  section#content main section#projects aside div {\n    margin-bottom: 25px;\n  }\n\n  app-control-menu {\n    display: none;\n  }\n}\n@media print {\n  .container {\n    max-height: 100vh;\n  }\n\n  section#content main {\n    min-height: 110%;\n    max-height: 110%;\n  }\n  section#content main section#experience ul li::before {\n    left: -12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL0U6XFxQcmFjYVxcbmctY3ZcXGN2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlXFxwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EseURBQUE7RUFDQSx5QkFBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNFLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FESU07RUFDRSxpQkFBQTtBQ0ZSO0FET0U7RUFFRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ05KO0FEZ0JFO0VBQ0UsbUJBQUE7QUNiSjtBRGVJO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDYk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ2xCTjtBRG9CTTtFQUNFLG1CQUFBO0FDbEJSO0FEd0JNO0VBRUUsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUN2QlI7QUR5QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFWVTtFQVdWLG9CQUFBO0VBQUEsYUFBQTtBQ3ZCVjtBRDBCUTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUN4QlY7QUQ4Qk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDNUJSO0FEOEJRO0VBQ0UsYUFBQTtBQzVCVjtBRHFDTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ25DUjtBRHFDUTtFQUNFLGtCQUFBO0FDbkNWO0FEcUNVO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ25DWjtBRHFDWTtFQUNFLFNBQUE7QUNuQ2Q7QUR1Q1U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDckNaO0FEeUNZO0VBRUUseUJBQUE7RUFDQSxTQUFBO0FDeENkO0FEaURNO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwRUFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtBQ2hEUjtBRGtEUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQ2hEVjtBRG1EUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNqRFY7QURvRFE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2xEVjtBRHFEUTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtBQ25EVjtBRHNEUTtFQUNFLHVCQUFBO0FDcERWO0FEc0RVO0VBQ0UsbUJBQUE7QUNwRFo7QUQ0REE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDekRGO0FEMkRFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDekRKO0FEMkRJO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUN6RE47QUQ2REU7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0FDM0RKO0FENkRJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQzNETjtBRGdFQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxpREFBQTtJQUNBLG1CQUFBO0VDN0RGO0VEK0RFO0lBQ0Usa0JBQUE7RUM3REo7O0VEaUVFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSw4QkFBQTtFQzlESjtFRG1FSTtJQUNFLDhCQUFBO0lBQ0Esd0VBQUE7RUNqRU47QUFDRjtBRHVFQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxzQkFBQTtFQ3JFRjs7RUR1RUE7SUFDRSxhQUFBO0lBQ0EsaUNBQUE7SUFDQSx3QkFBQTtJQUNBLGlDQUFBO0lBQ0EsY0FBQTtFQ3BFRjtFRHNFRTtJQUNFLGdCQUFBO0VDcEVKO0VEdUVJO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDckVOO0VEeUVFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUN2RUo7RUQ0RVU7SUFDRSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0VDMUVaO0VEOEVZO0lBQ0Usd0JBQUE7RUM1RWQ7QUFDRjtBRHNGQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ3BGRjs7RUR5Rkk7SUFDRSxtQkFBQTtFQ3RGTjs7RUQyRkE7SUFDRSxhQUFBO0VDeEZGO0FBQ0Y7QUQyRkE7RUFDRTtJQUNFLGlCQUFBO0VDekZGOztFRCtGRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUM1Rko7RURrR1U7SUFHRSxXQUFBO0VDbEdaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib3JkZXI6IDJweCBzb2xpZDtcclxuaGVhZGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaW1nIG5hbWUnICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbic7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1YzVkNWI7XHJcbiAgICBncmlkLWFyZWE6IGltZztcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICBncmlkLWFyZWE6IG5hbWU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAvL2JvcmRlci1ib3R0b206ICRib3JkZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgLy9mb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5zZWN0aW9uI2NvbnRlbnQge1xyXG4gIC8vYm9yZGVyLXRvcDogJGJvcmRlcjtcclxuXHJcbiAgYXNpZGUgc2VjdGlvbiwgbWFpbiBzZWN0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzaWRlIHtcclxuXHJcblxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgICAgIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZWN0aW9uI2NvbnRhY3QgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgJGljb24tc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkaWNvbi1zaXplIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaWNvbiBhbnknO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICBncmlkLWdhcDogMjBweDtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGljb247XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6ICRpY29uLXNpemU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBhbnk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uI2xhbmd1YWdlcyB7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XHJcblxyXG4gICAgICAgIGxpIHNwYW4ge1xyXG4gICAgICAgICAgb3BhY2l0eTogLjY1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG1haW4ge1xyXG4gICAgc2VjdGlvbiNleHBlcmllbmNlIHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDg4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTkwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG5cclxuICAgICAgICAgICAgJi5zdGFydCB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMTRweCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtMjZweDtcclxuICAgICAgICAgICAgbGVmdDogLTE0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG5cclxuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uI3Byb2plY3RzIHtcclxuICAgICAgYXNpZGUgZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUnICdsaW5rJyAnZGV0YWlscycgJ2Rlc2NyaXB0aW9uJyAncHJvamVjdC1saW5rJztcclxuICAgICAgICBncmlkLWdhcDogMTBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogbGluaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogZGV0YWlscztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogcHJvamVjdC1saW5rO1xyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXBwLWNvbnRyb2wtbWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogLTJweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuXHJcbiAgI3RvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgcmlnaHQ6IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcblxyXG4gICAgI3RvZ2dsZSBpIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaW1nIG5hbWUnICdpbWcgZGVzY3JpcHRpb24nO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgc2VjdGlvbiNjb250ZW50IHtcclxuICAgIHNlY3Rpb24jbGFuZ3VhZ2VzIHVsIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtYWluIHNlY3Rpb24jcHJvamVjdHMge1xyXG4gICAgICBhc2lkZSBkaXYge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgbGluaycgJ2RldGFpbHMgcHJvamVjdC1saW5rJyAnLiBkZXNjcmlwdGlvbic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpLCBwcmludCB7XHJcbiAgaGVhZGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMTAwcHg7XHJcbiAgfVxyXG4gIHNlY3Rpb24jY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNDBweCBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2FzaWRlIG1pYW4nO1xyXG4gICAgZ3JpZC1nYXA6IDIwcHg7XHJcblxyXG4gICAgYXNpZGUge1xyXG4gICAgICBncmlkLWFyZWE6IGFzaWRlO1xyXG5cclxuXHJcbiAgICAgIHNlY3Rpb24jbGFuZ3VhZ2VzIHVsIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgIGdyaWQtYXJlYTogbWlhbjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkO1xyXG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICBzZWN0aW9uI2V4cGVyaWVuY2Uge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTE4cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTExLjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhweCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDguMjlpbiksIHByaW50IHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDExLjdpbjtcclxuICAgIHdpZHRoOiA4LjI5aW47XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiNjb250ZW50IG1haW4ge1xyXG4gICAgc2VjdGlvbiNwcm9qZWN0cyB7XHJcbiAgICAgIGFzaWRlIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLWNvbnRyb2wtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcblxyXG4gIHNlY3Rpb24jY29udGVudCB7XHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDExMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDExMCU7XHJcblxyXG5cclxuICAgICAgc2VjdGlvbiNleHBlcmllbmNlIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgLy9oZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgICAgICAgICAgIC8vYm90dG9tOiAtMThweDtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMTJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWcgbmFtZVwiIFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmhlYWRlciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YzVkNWI7XG4gIGdyaWQtYXJlYTogaW1nO1xufVxuaGVhZGVyIGRpdiB7XG4gIGdyaWQtYXJlYTogbmFtZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaGVhZGVyIGRpdiBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5oZWFkZXIgZGl2IGgxIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuc2VjdGlvbiNjb250ZW50IGFzaWRlIHNlY3Rpb24sIHNlY3Rpb24jY29udGVudCBtYWluIHNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuc2VjdGlvbiNjb250ZW50IGFzaWRlIHNlY3Rpb24gaDMsIHNlY3Rpb24jY29udGVudCBtYWluIHNlY3Rpb24gaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbnNlY3Rpb24jY29udGVudCBhc2lkZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuc2VjdGlvbiNjb250ZW50IGFzaWRlIHVsIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5zZWN0aW9uI2NvbnRlbnQgYXNpZGUgc2VjdGlvbiNjb250YWN0IHVsIGxpIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVyZW0gMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImljb24gYW55XCI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC1nYXA6IDIwcHg7XG59XG5zZWN0aW9uI2NvbnRlbnQgYXNpZGUgc2VjdGlvbiNjb250YWN0IHVsIGxpIGkge1xuICBncmlkLWFyZWE6IGljb247XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5zZWN0aW9uI2NvbnRlbnQgYXNpZGUgc2VjdGlvbiNjb250YWN0IHVsIGxpID4gKiB7XG4gIGdyaWQtYXJlYTogYW55O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuc2VjdGlvbiNjb250ZW50IGFzaWRlIHNlY3Rpb24jbGFuZ3VhZ2VzIHVsIHtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cbnNlY3Rpb24jY29udGVudCBhc2lkZSBzZWN0aW9uI2xhbmd1YWdlcyB1bCBsaSBzcGFuIHtcbiAgb3BhY2l0eTogMC42NTtcbn1cbnNlY3Rpb24jY29udGVudCBtYWluIHNlY3Rpb24jZXhwZXJpZW5jZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcbiAgcGFkZGluZy1sZWZ0OiA4OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5zZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI2V4cGVyaWVuY2UgdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5zZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI2V4cGVyaWVuY2UgdWwgbGkgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2NnB4O1xufVxuc2VjdGlvbiNjb250ZW50IG1haW4gc2VjdGlvbiNleHBlcmllbmNlIHVsIGxpIHNwYW4uc3RhcnQge1xuICBib3R0b206IDA7XG59XG5zZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI2V4cGVyaWVuY2UgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMTRweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjZweDtcbiAgbGVmdDogLTE0cHg7XG59XG5zZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI2V4cGVyaWVuY2UgdWwgbGk6bGFzdC1vZi10eXBlOjpiZWZvcmUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xuICBib3R0b206IDA7XG59XG5zZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI3Byb2plY3RzIGFzaWRlIGRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGl0bGVcIiBcImxpbmtcIiBcImRldGFpbHNcIiBcImRlc2NyaXB0aW9uXCIgXCJwcm9qZWN0LWxpbmtcIjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5zZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI3Byb2plY3RzIGFzaWRlIGRpdiBoNSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwO1xufVxuc2VjdGlvbiNjb250ZW50IG1haW4gc2VjdGlvbiNwcm9qZWN0cyBhc2lkZSBkaXYgYSB7XG4gIGdyaWQtYXJlYTogbGluaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5zZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI3Byb2plY3RzIGFzaWRlIGRpdiBiIHtcbiAgZ3JpZC1hcmVhOiBkZXRhaWxzO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cbnNlY3Rpb24jY29udGVudCBtYWluIHNlY3Rpb24jcHJvamVjdHMgYXNpZGUgZGl2IHAge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICBtYXJnaW46IDA7XG59XG5zZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI3Byb2plY3RzIGFzaWRlIGRpdiBzbWFsbCB7XG4gIGdyaWQtYXJlYTogcHJvamVjdC1saW5rO1xufVxuc2VjdGlvbiNjb250ZW50IG1haW4gc2VjdGlvbiNwcm9qZWN0cyBhc2lkZSBkaXYgc21hbGwgYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmFwcC1jb250cm9sLW1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLTJweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMCAyMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5hcHAtY29udHJvbC1tZW51ICN0b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQ1cHg7XG4gIHJpZ2h0OiAyN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cbmFwcC1jb250cm9sLW1lbnUgI3RvZ2dsZSBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5hcHAtY29udHJvbC1tZW51LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG59XG5hcHAtY29udHJvbC1tZW51LmFjdGl2ZSAjdG9nZ2xlIGkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWcgbmFtZVwiIFwiaW1nIGRlc2NyaXB0aW9uXCI7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICBoZWFkZXIgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIHNlY3Rpb24jY29udGVudCBzZWN0aW9uI2xhbmd1YWdlcyB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgc2VjdGlvbiNjb250ZW50IG1haW4gc2VjdGlvbiNwcm9qZWN0cyBhc2lkZSBkaXYge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGxlIGxpbmtcIiBcImRldGFpbHMgcHJvamVjdC1saW5rXCIgXCIuIGRlc2NyaXB0aW9uXCI7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCksIHByaW50IHtcbiAgaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMDBweDtcbiAgfVxuXG4gIHNlY3Rpb24jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0MHB4IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYXNpZGUgbWlhblwiO1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICB9XG4gIHNlY3Rpb24jY29udGVudCBhc2lkZSB7XG4gICAgZ3JpZC1hcmVhOiBhc2lkZTtcbiAgfVxuICBzZWN0aW9uI2NvbnRlbnQgYXNpZGUgc2VjdGlvbiNsYW5ndWFnZXMgdWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgc2VjdGlvbiNjb250ZW50IG1haW4ge1xuICAgIGdyaWQtYXJlYTogbWlhbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbiAgc2VjdGlvbiNjb250ZW50IG1haW4gc2VjdGlvbiNleHBlcmllbmNlIHVsIGxpOjpiZWZvcmUge1xuICAgIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7XG4gICAgYm90dG9tOiAtMThweDtcbiAgICBsZWZ0OiAtMTEuNXB4O1xuICB9XG4gIHNlY3Rpb24jY29udGVudCBtYWluIHNlY3Rpb24jZXhwZXJpZW5jZSB1bCBsaTpsYXN0LW9mLXR5cGU6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cHgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOC4yOWluKSwgcHJpbnQge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiAxMS43aW47XG4gICAgd2lkdGg6IDguMjlpbjtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cblxuICBzZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI3Byb2plY3RzIGFzaWRlIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG4gIGFwcC1jb250cm9sLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgc2VjdGlvbiNjb250ZW50IG1haW4ge1xuICAgIG1pbi1oZWlnaHQ6IDExMCU7XG4gICAgbWF4LWhlaWdodDogMTEwJTtcbiAgfVxuICBzZWN0aW9uI2NvbnRlbnQgbWFpbiBzZWN0aW9uI2V4cGVyaWVuY2UgdWwgbGk6OmJlZm9yZSB7XG4gICAgbGVmdDogLTEycHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons-angular */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");






let PageComponent = class PageComponent {
    constructor(route, translate, iconService) {
        this.route = route;
        this.translate = translate;
        this.iconService = iconService;
        this.activeMenu = false;
        this.toggleMenu = () => this.activeMenu = !this.activeMenu;
        const lang = this.route.snapshot.paramMap.get('lang');
        this.translate.use(`${lang}`);
        this.iconService.addIcon(...[_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_5__["PhoneFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_5__["MailFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_5__["LinkedinFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_5__["GithubFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_5__["CaretUpFill"]]);
    }
};
PageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconService"] }
];
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page.component.scss */ "./src/app/components/page/page.component.scss")).default]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/pipe/bold.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/bold.pipe.ts ***!
  \***********************************/
/*! exports provided: BoldPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoldPipe", function() { return BoldPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoldPipe = class BoldPipe {
    transform(value, start = 1) {
        if (value === '') {
            return '';
        }
        let text = '';
        let bold = '';
        const val = value.trim().split(' ');
        val.map((word, id) => id >= start ? bold += ` ${word}` : text += ` ${word}`);
        return `${text.trim()} <b>${bold.trim()}</b>`;
    }
};
BoldPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'bold'
    })
], BoldPipe);



/***/ }),

/***/ "./src/app/pipe/join.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/join.pipe.ts ***!
  \***********************************/
/*! exports provided: JoinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JoinPipe = class JoinPipe {
    transform(value, separator = ',', splitter) {
        if (value === '') {
            return '';
        }
        if (typeof value === 'string') {
            value.split(splitter);
        }
        if (Array.isArray(value)) {
            value = value.join(separator);
        }
        return value;
    }
};
JoinPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'join'
    })
], JoinPipe);



/***/ }),

/***/ "./src/app/pipe/sort-by-date.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipe/sort-by-date.pipe.ts ***!
  \*******************************************/
/*! exports provided: SortByDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByDatePipe", function() { return SortByDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortByDatePipe = class SortByDatePipe {
    transform(value) {
        if (typeof value === 'string') {
            return value;
        }
        return value.map((job) => job.sort(((jobPositionA, jobPositionB) => {
            let dateA = new Date(jobPositionA.date[0]).getTime();
            let dateB = new Date(jobPositionB.date[0]).getTime();
            dateA = isNaN(dateA) ? new Date().getTime() : dateA;
            dateB = isNaN(dateB) ? new Date().getTime() : dateB;
            return dateB - dateA;
        })))
            .sort((jobA, jobB) => {
            let dateJob1 = new Date(jobA[0].date[0]).getTime();
            let dateJob2 = new Date(jobB[0].date[0]).getTime();
            dateJob1 = isNaN(dateJob1) ? new Date().getTime() : dateJob1;
            dateJob2 = isNaN(dateJob2) ? new Date().getTime() : dateJob2;
            return dateJob2 - dateJob1;
        });
    }
};
SortByDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sortByDate'
    })
], SortByDatePipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Praca\ng-cv\cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
(self["webpackChunkcv"] = self["webpackChunkcv"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 4882)).then((m) => m.HomeModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ 2096);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/nav/nav.component */ 6044);





class AppComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.linksKey = 'contact.data';
        this.consoleInfo = [
            {
                text: ' Hello!',
                style: `
              font-weight: bold;
              font-size: 50px;
              color: red;
              text-shadow:
                3px 3px 0 rgb(217,31,38) ,
                6px 6px 0 rgb(226,91,14) ,
                9px 9px 0 rgb(245,221,8) ,
                12px 12px 0 rgb(5,148,68) ,
                15px 15px 0 rgb(2,135,206) ,
                18px 18px 0 rgb(4,77,145) ,
                21px 21px 0 rgb(42,21,113)
               `
            },
            {
                text: 'Thanks for your interest in my CV.\n' +
                    'Hope you have a nice time checking my site.\n' +
                    'I also encourage you to visit my pages:',
                style: 'color: rgba(255,255,255,0.5)'
            }
        ];
    }
    ngOnInit() {
        this.handleLinks();
    }
    handleLinks() {
        this.translateService
            .selectTranslate(this.linksKey)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((e) => e.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)())
            .subscribe((links) => {
            const urls = links
                .filter(({ link }) => link.includes('http'))
                .map(({ link: text }) => ({ text }));
            this.displayConsoleInfo(urls);
        });
    }
    displayConsoleInfo(urls) {
        const space = { text: '\n' };
        [space, ...this.consoleInfo, ...urls, space].forEach(({ text, style }) => 
        // eslint-disable-next-line no-restricted-syntax
        console.info(`%c${text}`, style));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-nav");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/nav/nav.component */ 6044);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 2096);
/* harmony import */ var _modules_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/transloco/transloco-root.module */ 153);
/* harmony import */ var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons-angular */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoModule,
            _modules_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_3__.TranslocoRootModule,
            _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_8__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoModule,
        _modules_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_3__.TranslocoRootModule,
        _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_8__.IconModule] }); })();


/***/ }),

/***/ 6044:
/*!*******************************************!*\
  !*** ./src/app/core/nav/nav.component.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": function() { return /* binding */ NavComponent; }
/* harmony export */ });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 6390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 2096);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons-angular */ 3935);






class NavComponent {
    constructor(route, translate, titleService, iconService) {
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.iconService = iconService;
        this.title = this.titleService.getTitle();
        this.iconService.addIcon(...[_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.PrinterFill]);
    }
    changeLang(lang) {
        const userName = this.translate.translate('user.name');
        this.translate.setActiveLang(lang);
        this.title = `${userName} - CV ${lang.toUpperCase()}`;
        this.titleService.setTitle(this.title);
    }
    print() {
        window.print();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_5__.IconService)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 8, vars: 2, consts: [[1, "nav"], ["antIcon", "", "theme", "fill", 3, "type", "click"], [1, "nav__country"], ["routerLink", "/pl", "src", "https://raw.githubusercontent.com/madebybowtie/FlagKit/master/Assets/PNG/PL%402x.png", "alt", "Poland", 3, "click"], ["routerLink", "/en", "src", "https://raw.githubusercontent.com/madebybowtie/FlagKit/master/Assets/PNG/GB%402x.png", "alt", "English", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_i_click_4_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_img_click_6_listener() { return ctx.changeLang("pl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_img_click_7_listener() { return ctx.changeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "printer");
    } }, directives: [_ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_5__.IconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: #323639;\n  z-index: 999;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 30px;\n  box-sizing: border-box;\n  color: white;\n}\nnav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 20px;\n}\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 10px;\n}\n@media screen and (min-width: 640px) {\n  nav[_ngcontent-%COMP%] {\n    bottom: unset;\n    top: 0;\n  }\n}\n@media print {\n  nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFhQSxXQUFBO0FBb0JBLFdBQUE7QUMvQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFFSjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsTUFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9CSUxFIFNJWklORyAqL1xyXG4vLyR4czogMzIwcHg7IC8vbW9iaWxlXHJcbi8vJHNtOiA0ODFweDsgLy90YWJsZXRzXHJcbi8vJG1kOiA3NjlweDsgLy9zbWFsbCBkZXZpY2VzXHJcbi8vJGxnOiAxMDI1cHg7IC8vbGFyZ2UgLyBQQ1xyXG4vLyR4bDogMTIwMXB4OyAgLy9leHRyYSBsYXJnZVxyXG5cclxuJHhzOiAzMjBweDsgLy9tb2JpbGVcclxuJHNtOiA2NDBweDsgLy90YWJsZXRzXHJcbiRtZDogNzIwcHg7IC8vc21hbGwgZGV2aWNlc1xyXG4kbGc6IDIwOW1tOyAvL2xhcmdlIC8gUENcclxuLy8keGw6IDEyMDFweDsgIC8vZXh0cmEgbGFyZ2VcclxuXHJcbi8qIFNJWklORyAqL1xyXG4kcGFnZS1oZWlnaHQ6IDI5N21tO1xyXG4kc3BhY2U6IDMycHg7XHJcbiRzcGFjZS1iZXR3ZWVuLWVsZW1lbnRzOiAxOHB4O1xyXG4kYm9yZGVyLXNpemU6IDVweDtcclxuJGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4kcGFyYWdyYXBoLW1hcmdpbjogMTJweDtcclxuJGxpbmUtc3BhY2U6IDhweDtcclxuXHJcbiRhdmF0YXItc2l6ZTogMTI1cHg7XHJcblxyXG4vL2ZvbnRcclxuJGZvbnQtc2l6ZTogMTBweDtcclxuJGZvbnQtc2l6ZS14czogMTJweDtcclxuXHJcbiR0ZXh0LWhlYWRlci1mb250LXNpemU6IDEuN3JlbTtcclxuJHRleHQtZm9udC1zaXplOiAxLjJyZW07XHJcbiR0ZXh0LWRhdGUtc2l6ZTogMS4xcmVtO1xyXG4kdXNlci1kZXRhaWxzLWZvbnQtc2l6ZTogM3JlbTtcclxuXHJcbi8qIENPTE9SUyAqL1xyXG5cclxuJHRoZW1lLWRhcms6ICMzNDM2Mzc7XHJcbiR0aGVtZS13aGl0ZTogI2ZmZjtcclxuJG1haW4tY29sb3I6ICNlNmU2ZTg7XHJcbiRjb2xvcjogIzM2MmQyZTtcclxuJGNvbG9yLWludmVydGVkOiAjZmZmO1xyXG5cclxuJGZvbnQtYWNjZW50LTE6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJGZvbnQtYWNjZW50LTI6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNTQsIDU3KTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc20pIHtcclxuICBuYXYge1xyXG4gICAgYm90dG9tOiB1bnNldDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 153:
/*!************************************************************!*\
  !*** ./src/app/modules/transloco/transloco-root.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslocoHttpLoader": function() { return /* binding */ TranslocoHttpLoader; },
/* harmony export */   "TranslocoRootModule": function() { return /* binding */ TranslocoRootModule; }
/* harmony export */ });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 2096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);




class TranslocoHttpLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        return this.http.get(`/assets/i18n/${lang}.json`);
    }
}
TranslocoHttpLoader.ɵfac = function TranslocoHttpLoader_Factory(t) { return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TranslocoHttpLoader.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TranslocoHttpLoader, factory: TranslocoHttpLoader.ɵfac, providedIn: 'root' });
class TranslocoRootModule {
}
TranslocoRootModule.ɵfac = function TranslocoRootModule_Factory(t) { return new (t || TranslocoRootModule)(); };
TranslocoRootModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TranslocoRootModule });
TranslocoRootModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TRANSLOCO_CONFIG,
            useValue: (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.translocoConfig)({
                availableLangs: ['en', 'pl'],
                defaultLang: 'en',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
                fallbackLang: 'en',
                missingHandler: {
                    // It will use the first language set in the `fallbackLang` property
                    useFallbackTranslation: true,
                    logMissingKey: false
                },
            })
        },
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
    ], imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TranslocoRootModule, { exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map
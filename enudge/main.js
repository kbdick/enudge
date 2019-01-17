(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/page-not-found/page-not-found.component.html":
/*!******************************************************************!*\
  !*** ./src/app/404/page-not-found/page-not-found.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-4\">\n    </div>\n    <div class=\"col-4\">\n        <h3>\n            Derp. I didn't code something well, or you didn't type something well. This page doesn't exist.\n        </h3>    \n    </div>\n    <div class=\"col-4\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/404/page-not-found/page-not-found.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/404/page-not-found/page-not-found.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/404/page-not-found/page-not-found.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/404/page-not-found/page-not-found.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/404/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/404/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-3\">\n    </div>\n    <div class=\"col-6\">\n      <h1>\n      Welcome to {{ title }}!\n      </h1>\n      <p>\n        eNudge displays your energy stats to help you know when you should be turning off appliances to be most environmentally friendly.\n      </p>\n    </div>\n    <div class=\"col-3\">\n    </div>      \n  </div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.title = 'eNudge';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/user/user.component */ "./src/app/auth/user/user.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _404_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../404/page-not-found/page-not-found.component */ "./src/app/404/page-not-found/page-not-found.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _nudge_nudge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nudge/nudge.component */ "./src/app/nudge/nudge.component.ts");
/* harmony import */ var _carbon_carbon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../carbon/carbon.component */ "./src/app/carbon/carbon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _nudge_nudge_component__WEBPACK_IMPORTED_MODULE_9__["NudgeComponent"] },
    { path: 'nudge', component: _nudge_nudge_component__WEBPACK_IMPORTED_MODULE_9__["NudgeComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user', component: _auth_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'carbon', component: _carbon_carbon_component__WEBPACK_IMPORTED_MODULE_10__["CarbonComponent"] },
    { path: '**', component: _404_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">eNudge</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"dashboard\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"about\">About</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Reports\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"prices\">Prices</a>\n          <a class=\"dropdown-item\" href=\"carbon\">Carbon</a>\n          <a class=\"dropdown-item\" href=\"generation\">Generation</a>\n          <a class=\"dropdown-item\" href=\"demand\">Demand</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"dashboard\">Snapshot</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'eNudge';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/user/user.component */ "./src/app/auth/user/user.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _404_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./404/page-not-found/page-not-found.component */ "./src/app/404/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _nudge_nudge_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nudge/nudge.component */ "./src/app/nudge/nudge.component.ts");
/* harmony import */ var _carbon_carbon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./carbon/carbon.component */ "./src/app/carbon/carbon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig;











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _auth_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _404_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _nudge_nudge_component__WEBPACK_IMPORTED_MODULE_16__["NudgeComponent"],
                _carbon_carbon_component__WEBPACK_IMPORTED_MODULE_17__["CarbonComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<h1 class=\"header\">Login with Firebase or Social Providers</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n          <label class=\"error\">{{errorMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-default\">Login</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"tryFacebookLogin()\">Login with Facebook</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"tryGoogleLogin()\">Login with Google</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"tryTwitterLogin()\">Login with Twitter</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <p>No account yet? <a href=\"/register\">Create an account</a></p>\n    </div>\n  </div>\n</div>\n-->"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px; }\n\n.row {\n  margin-top: 10px; }\n\n.error {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\">\n   <div class=\"form-group\">\n     <label>Email address</label>\n     <input type=\"email\" formControlName=\"email\" class=\"form-control\" required>\n   </div>\n   <div class=\"form-group\">\n     <label>Password</label>\n     <input type=\"password\" class=\"form-control\" formControlName=\"password\" required>\n     <label class=\"error\">{{errorMessage}}</label>\n     <label class=\"success\">{{successMessage}}</label>\n   </div>\n   <button type=\"submit\" (click)=\"tryRegister(registerForm.value)\" class=\"btn btn-default\">Register</button>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px; }\n\n.row {\n  margin-top: 10px; }\n\n.error {\n  color: red; }\n\n.success {\n  color: green; }\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.successMessage = '';
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RegisterComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created";
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/user/user.component.html":
/*!***********************************************!*\
  !*** ./src/app/auth/user/user.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <div class=\"card\" style=\"width: 20rem;\">\n        <img class=\"card-img-top image\" [src]=\"user.image\" alt=\"Card image cap\">\n        <div *ngIf='user.provider != \"password\"'class=\"card-body\">\n          <h4 class=\"card-title\">{{user.name}}</h4>\n          <p class=\"card-text\">This is an example of Social Authentication using Firebase in an Angular 5 web app. </p>\n        </div>\n        <div *ngIf='user.provider == \"password\"'class=\"card-body\">\n          <form [formGroup]=\"profileForm\">\n            <div class=\"form-group\">\n              <label>Your name</label>\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\" required>\n            </div>\n          </form>\n          <a (click)=\"save(profileForm.value)\" class=\"btn btn-primary\">Save</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <button type=\"button\" (click)=\"logout()\" class=\"btn btn-link\">Logout</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/user/user.component.scss":
/*!***********************************************!*\
  !*** ./src/app/auth/user/user.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/auth/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/user.model */ "./src/app/core/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserComponent = /** @class */ (function () {
    function UserComponent(userService, authService, route, location, fb) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseUserModel"]();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.user = data;
                _this.createForm(_this.user.name);
            }
        });
    };
    UserComponent.prototype.createForm = function (name) {
        this.profileForm = this.fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    UserComponent.prototype.save = function (value) {
        this.userService.updateCurrentUser(value)
            .then(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    UserComponent.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.location.back();
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/auth/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/auth/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/carbon/carbon.component.html":
/*!**********************************************!*\
  !*** ./src/app/carbon/carbon.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 *ngFor=\"let users of users | async\">\n      Your current stats at {{users.address1}} are:\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <table class=\"table\">\n        <thead class=\"dark\">\n          <tr>\n            <th scope=\"col\">\n                Mean\n            </th>\n            <th scope=\"col\">\n                Median\n            </th>\n            <th scope=\"col\">\n                High\n            </th>\n            <th scope=\"col\">\n                Low\n            </th>\n        </thead>\n        <tbody>\n          <tr>\n            <td *ngFor=\"let carbons of carbons | async\" [ngStyle]=\"{'color': setCarbonColor(carbons.percent)}\">\n              {{ calculateAverage(carbons.percent) }}\n            </td>\n            <td *ngFor=\"let carbons of carbons | async\" [ngStyle]=\"{'color': setCarbonColor(carbons.percent)}\">\n              {{carbons.median / 100 | percent}}\n            </td>\n            <td *ngFor=\"let carbons of carbons | async\" [ngStyle]=\"{'color': setCarbonColor(carbons.percent)}\">\n              {{carbons.max / 100 | percent}}\n            </td>\n            <td *ngFor=\"let carbons of carbons | async\" [ngStyle]=\"{'color': setCarbonColor(carbons.percent)}\">\n              {{carbons.min / 100 | percent}}\n            </td>\n          </tr>\n          <tr>\n          <td *ngFor=\"let carbons of carbons | async\">\n            Mean percent {{carbons.ba}} ISO.\n          </td>\n          <td *ngFor=\"let carbons of carbons | async\">\n            Median percent {{carbons.ba}} ISO.\n          </td>\n          <td *ngFor=\"let carbons of carbons | async\">\n            High percent {{carbons.ba}} ISO.\n          </td>\n          <td *ngFor=\"let carbons of carbons | async\">\n            Low percent {{carbons.ba}} ISO.\n          </td>\n          <tr>\n        </tbody>\n      </table>\n    </div>\n  </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/carbon/carbon.component.scss":
/*!**********************************************!*\
  !*** ./src/app/carbon/carbon.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carbon/carbon.component.ts":
/*!********************************************!*\
  !*** ./src/app/carbon/carbon.component.ts ***!
  \********************************************/
/*! exports provided: CarbonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarbonComponent", function() { return CarbonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarbonComponent = /** @class */ (function () {
    function CarbonComponent(afs) {
        this.afs = afs;
        // timestamp in milliseconds
        var currentTime = new Date().getTime();
        this.carbonsCol = this.afs.collection('carbons', function (ref) {
            return ref
                .orderBy('validUntil', 'desc')
                .limit(1);
        });
        this.carbons = this.carbonsCol.valueChanges();
    }
    CarbonComponent.prototype.setCarbonColor = function (percent) {
        switch (true) {
            case percent > .75:
                return 'red';
            case percent > .50 && percent <= .75:
                return 'orange';
            case percent <= .50:
                return 'green';
            case percent != null:
                return 'gray';
        }
    };
    CarbonComponent.prototype.ngOnInit = function () {
    };
    CarbonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carbon',
            template: __webpack_require__(/*! ./carbon.component.html */ "./src/app/carbon/carbon.component.html"),
            styles: [__webpack_require__(/*! ./carbon.component.scss */ "./src/app/carbon/carbon.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], CarbonComponent);
    return CarbonComponent;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/user.model.ts":
/*!************************************!*\
  !*** ./src/app/core/user.model.ts ***!
  \************************************/
/*! exports provided: FirebaseUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function() { return FirebaseUserModel; });
var FirebaseUserModel = /** @class */ (function () {
    function FirebaseUserModel() {
        this.image = "";
        this.name = "";
        this.provider = "";
    }
    return FirebaseUserModel;
}());



/***/ }),

/***/ "./src/app/core/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService.prototype.updateCurrentUser = function (value) {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h2 *ngFor=\"let users of users | async\">\n      Your current stats at {{users.address1}} are:\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <table class=\"table\">\n        <thead class=\"dark\">\n          <tr>\n            <th scope=\"col\">\n              Hourly Price\n            </th>\n            <th scope=\"col\">\n              Grid Fossil Fuel Footprint\n            </th>\n            <th scope=\"col\">\n              Solar Generation\n            </th>\n            <th scope=\"col\">\n              Demand\n            </th>\n        </thead>\n        <tbody>\n          <tr>\n            <td *ngFor=\"let prices of prices | async\" [ngStyle]=\"{'color': setPriceColor(prices.price)}\">\n              {{prices.price * 0.01 | currency}}\n            </td>\n            <td *ngFor=\"let carbons of carbons | async\" [ngStyle]=\"{'color': setCarbonColor(carbons.percent)}\">\n              {{carbons.percent / 100 | percent}}\n            </td>\n            <td *ngFor=\"let solars of solars | async\" [ngStyle]=\"{'color': setGenerationColor(solars.generation)}\">\n              {{solars.generation | number : '1.0-2'}} W\n            </td>\n            <td *ngFor=\"let uses of uses | async\" [ngStyle]=\"{'color': setDemandColor(uses.demand)}\">\n              {{uses.demand / 10000000000 | number : '1.0-2'}} W\n            </td>\n          </tr>\n          <tr>\n          <td *ngFor=\"let carbons of carbons | async\">\n            Current hourly price in the {{carbons.ba}} ComEd node.\n          </td>\n          <td *ngFor=\"let carbons of carbons | async\">\n            Current % of fossil fuel generation in the {{carbons.ba}} ISO.\n          </td>\n          <td *ngFor=\"let users of users | async\">\n             Current solar generation at {{users.address1}}.\n           </td>\n           <td *ngFor=\"let users of users | async\">\n             Current demand net of generation at {{users.address1}}.\n           </td>\n          <tr>\n        </tbody>\n      </table>\n    </div>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(afs) {
        this.afs = afs;
        // timestamp in milliseconds
        var currentTime = new Date().getTime();
        this.pricesCol = this.afs.collection('prices', function (ref) {
            return ref
                .orderBy('timestamp', 'desc')
                .limit(1);
        });
        this.prices = this.pricesCol.valueChanges();
        this.carbonsCol = this.afs.collection('carbons', function (ref) {
            return ref
                .orderBy('validUntil', 'desc')
                .limit(1);
        });
        this.carbons = this.carbonsCol.valueChanges();
        this.solarsCol = this.afs.collection('solars', function (ref) {
            return ref
                .orderBy('timestamp', 'desc')
                .limit(1);
        });
        this.solars = this.solarsCol.valueChanges();
        this.usesCol = this.afs.collection('uses', function (ref) {
            return ref
                .orderBy('timestamp', 'desc')
                .limit(1);
        });
        this.uses = this.usesCol.valueChanges();
        this.usersCol = this.afs.collection('users');
        this.users = this.usersCol.valueChanges();
    }
    DashboardComponent.prototype.setPriceColor = function (price) {
        switch (true) {
            case price > 7:
                return 'red';
            case price > 3 && price <= 7:
                return 'orange';
            case price <= 3:
                return 'green';
            case price != null:
                return 'gray';
        }
    };
    DashboardComponent.prototype.setCarbonColor = function (percent) {
        switch (true) {
            case percent > .75:
                return 'red';
            case percent > .50 && percent <= .75:
                return 'orange';
            case percent <= .50:
                return 'green';
            case percent != null:
                return 'gray';
        }
    };
    DashboardComponent.prototype.setGenerationColor = function (generation) {
        switch (true) {
            case generation < 0:
                return 'black';
            case generation <= 500 && generation < 1750:
                return 'orange';
            case generation >= 1075:
                return 'green';
            case generation != null:
                return 'gray';
        }
    };
    DashboardComponent.prototype.setDemandColor = function (demand, generation) {
        switch (true) {
            case (parseInt(demand) / 1000000000) > generation:
                return 'red';
            case (parseInt(demand) / 1000000000) >= generation && (parseInt(demand) / 1000000000) > 0:
                return 'orange';
            case (parseInt(demand) / 1000000000) <= generation:
                return 'green';
            case demand != null:
                return 'gray';
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/nudge/nudge.component.html":
/*!********************************************!*\
  !*** ./src/app/nudge/nudge.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n  </div>\n  <div class=\"col-4 m-4\">\n     <div *ngIf=\"isEnvironmental | async; let isEnvironmental; else notEnvironmental\">\n        <h1><i class=\"material-icons md-48 pr-2\">thumb_up</i>Use Electricity</h1>\n        <div class=\"alert-success\">\n          <h2 *ngFor=\"let carbons of carbons | async\" class=\"p-4\">You can use electricity now. It's environmentally friendly. The grid is using {{ carbons.percent / 100 | percent }} fossil fuel generation.</h2>\n        </div>\n    </div>\n      \n      <ng-template #notEnvironmental>\n        <h1><i class=\"material-icons md-48 pr-2\">warning</i>Conserve Electricity</h1>\n        <div class=\"alert-danger\">\n          <h2 *ngFor=\"let carbons of carbons | async\" class=\"p-4\">You should not use electricity now. It's not environmentally friendly. The grid is using {{ carbons.percent / 100 | percent }} fossil fuel generation.</h2>\n        </div>\n      </ng-template>\n  </div>\n  <div class=\"col-4\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/nudge/nudge.component.scss":
/*!********************************************!*\
  !*** ./src/app/nudge/nudge.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nudge/nudge.component.ts":
/*!******************************************!*\
  !*** ./src/app/nudge/nudge.component.ts ***!
  \******************************************/
/*! exports provided: NudgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NudgeComponent", function() { return NudgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NudgeComponent = /** @class */ (function () {
    function NudgeComponent(afs) {
        this.afs = afs;
        this.pricesCol = this.afs.collection('prices', function (ref) {
            return ref
                .orderBy('timestamp', 'desc')
                .limit(1);
        });
        this.prices = this.pricesCol.valueChanges();
        this.carbonsCol = this.afs.collection('carbons', function (ref) {
            return ref
                .orderBy('validUntil', 'desc')
                .limit(1);
        });
        this.carbons = this.carbonsCol.valueChanges();
        this.solarsCol = this.afs.collection('solars', function (ref) {
            return ref
                .orderBy('timestamp', 'desc')
                .limit(1);
        });
        this.solars = this.solarsCol.valueChanges();
        this.usesCol = this.afs.collection('uses', function (ref) {
            return ref
                .orderBy('timestamp', 'desc')
                .limit(1);
        });
        this.uses = this.usesCol.valueChanges();
        this.usersCol = this.afs.collection('users');
        this.users = this.usersCol.valueChanges();
        var isEnvironmental = true;
        var carbonCheck = 100;
        var carbonSwitch = 81;
        var isEnvironmentalCheck = function (carbonCheck, carbonSwitch) { return carbonCheck >= carbonSwitch; };
        isEnvironmental = isEnvironmentalCheck(carbonCheck, carbonSwitch);
        console.log(isEnvironmental);
    }
    NudgeComponent.prototype.ngOnInit = function () {
    };
    NudgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nudge',
            template: __webpack_require__(/*! ./nudge.component.html */ "./src/app/nudge/nudge.component.html"),
            styles: [__webpack_require__(/*! ./nudge.component.scss */ "./src/app/nudge/nudge.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], NudgeComponent);
    return NudgeComponent;
}());

/*

// A more complicated switch with price, etc.
  let isEnvironmentalCheck: boolean = setConsumeBoolean(price, percent, generation, demand) {
    switch (true) {
      case price > 3 || percent > 0.75 || generation < 500 || (parseInt(demand) / 1000) > generation:
        return false;
      case (price > 3 && price <=7) || (percent > .50 && percent <= .75) || (generation <= 500 && generation < 1750) || ((parseInt(demand) / 1000) >= generation && (parseInt(demand) / 1000) > 0):
        return false;
      case price <= 3 || percent <= .50 || generation >= 1075 || (parseInt(demand) / 1000) <= generation:
        return true;
      case price != null:
        return false;
    }
  };
*/


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBAPhL8eElvPTETTud0TRgHwYyvBuVs4n0",
        authDomain: "enudge-85fea.firebaseapp.com",
        databaseURL: "https://enudge-85fea.firebaseio.com",
        projectId: "enudge-85fea",
        storageBucket: "enudge-85fea.appspot.com",
        messagingSenderId: "446417700762"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/workspace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "header {\r\n    margin-bottom: .5em;\r\n    background-color: #E9E9E9;\r\n    color: #4E4D4D;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 0;\r\n    color: #4E4D4D;\r\n    font-weight: 500;\r\n}\r\n\r\n.navbar>.container {\r\n    display: inline-block;\r\n}\r\n\r\n.navbar>.container>.nav-item {\r\n    padding-top: .5em;\r\n    padding-bottom: .4em;\r\n    padding-right: 1em;\r\n    padding-left: 1em;\r\n    color: #4E4D4D;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.navbar>.container>.nav-item:hover {\r\n    text-decoration: none;\r\n    color: #ABAAAA;\r\n}\r\n\r\na.active-link,\r\n.navbar>.container>.nav-item>.active-link {\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n#logo {\r\n    height: 44px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <header>\r\n      <nav class=\"navbar navbar-light d-md-flex\">\r\n      <div class=\"container pl-0\">\r\n        <a routerLink=\"/\" class=\"navbar-brand\">\r\n          <img id=\"logo\" src=\"./assets/images/DataDVR.png\"><!-- src=\"../assets/images/DataDVR.png\" -->\r\n        </a>\r\n        <a routerLink=\"/contact\" routerLinkActive=\"active-link\" class=\"nav-item float-right\">Contact</a>\r\n        <a routerLink=\"/about\" routerLinkActive=\"active-link\" class=\"nav-item float-right\">About</a>\r\n        <a routerLink=\"/games\" routerLinkActive=\"active-link\" class=\"nav-item float-right\">Games</a>\r\n      </div>\r\n    </nav>\r\n  </header>\r\n\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Data DVR';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_regular_season_games_2017_service__ = __webpack_require__("./src/app/model/regular-season-games-2017.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_regular_season_plays_2017_service__ = __webpack_require__("./src/app/model/regular-season-plays-2017.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_regular_season_active_players_2017_service__ = __webpack_require__("./src/app/model/regular-season-active-players-2017.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_team_service__ = __webpack_require__("./src/app/model/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_games_games_component__ = __webpack_require__("./src/app/components/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { CommonModule } from '@angular/common';








var appRoutes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'games', component: __WEBPACK_IMPORTED_MODULE_11__components_games_games_component__["a" /* GamesComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__["a" /* AboutComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_games_games_component__["a" /* GamesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__model_regular_season_games_2017_service__["a" /* RegularSeasonGames2017Service */], __WEBPACK_IMPORTED_MODULE_8__model_regular_season_plays_2017_service__["a" /* RegularSeasonPlays2017Service */], __WEBPACK_IMPORTED_MODULE_9__model_regular_season_active_players_2017_service__["a" /* RegularSeasonActivePlayers2017Service */], __WEBPACK_IMPORTED_MODULE_10__model_team_service__["a" /* TeamService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "li.btn {\r\n    padding: .5em .2em;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-5\">\r\n    <h3>About</h3>\r\n    <p>\r\n      Data DVR allows you to see information about a play as you stream it or watch it on DVR. Currently, you can watch a game\r\n      real time or on-demand. You can get data real time, but you can't really get it on demand. If you were to look up play\r\n      by play information about a game, you would more than likely see the outcome of the game, thus ruining the experience\r\n      of watching it on demand.\r\n    </p>\r\n    <p>\r\n      Currently, this is only implemented for the NFL and the 2017 regular season. In the future, I plan to add all available seasons\r\n      and, perhaps, other sports as well.\r\n    </p>\r\n    <p>\r\n      Eventually, I'd like to add the use case of importing your fantasy teams and seeing the scores of your games but ONLY for\r\n      the games and plays you've watched so far.\r\n    </p>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <h3>Directions</h3>\r\n    <ol>\r\n      <li class=\"mb-2\">Select a week\r\n        <select class=\"btn btn-primary ml-2\">\r\n          <option selected>Select Week</option>\r\n        </select>\r\n      </li>\r\n      <li class=\"mb-3\">Select a game\r\n        <ul class=\"list-group\" style=\"display: inline-block\">\r\n          <li class=\"list-group-item btn btn-link btn-sm hoverable\" style=\"width: 9em\" >\r\n            Away @ Home\r\n          </li>\r\n        </ul>\r\n         (click)  \r\n        <ul class=\"list-group active\" style=\"display: inline-block\">\r\n            <li class=\"list-group-item btn btn-sm hoverable bg-primary btn-dark\" style=\"width: 9em\">\r\n              Away @ Home\r\n            </li>\r\n          </ul>\r\n      </li>\r\n      <li>Click <button class=\"btn btn-success ml-1\">Next Play</button> and \r\n        <button class=\"btn btn-default\">Previous Play</button> as you watch the game</li>\r\n    </ol>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".social-list {\r\n    padding-left: 0px;\r\n}\r\n\r\n.social-list > li {\r\n    font-size: 1.2em;\r\n    list-style-type: none;\r\n    padding: 3px;\r\n}\r\n\r\n.social-icon{\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-right: .5em;\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <h3>Contact</h3>\r\n        <address>\r\n            Tony Leif<br />\r\n            <a href=\"mailto:tony.leif@gmail.com\">tony.leif@gmail.com</a>\r\n        </address>\r\n        <h3>Issues and Feature Requests</h3>\r\n        Please post issues and feature on the <a href=\"https://github.com/tonyleif/701TermProject/issues\" target=\"_blank\">\r\n          issues page for this project at GitHub\r\n        </a>\r\n        <h3 class=\"mt-3\">Course</h3>\r\n        Boston University<br />\r\n        MET CS 701 Rich Internet Application Development<br />\r\n        <br />\r\n        <a href=\"http://www.bu.edu\" target=\"_blank\">\r\n            <img src=\"/assets/images/bulogo.png\" />\r\n        </a>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <h3>Find me online</h3>\r\n        <ul class=\"social-list\">\r\n            <!-- Heights as widths were set for the icons per best practice. The icons are the favicon.ico files from each site.\r\n             I needed to resize the StackOverflow and Google+ icon in image editing software per best practice as they were\r\n             too large. -->\r\n            <li>\r\n                <a href=\"http://stackoverflow.com/users/3347858/tony-l\" target=\"_blank\">\r\n                    <!-- I switched back to the original icon because my new one didn't have a transparent background -->\r\n                    <img src=\"assets/images/stackoverflow.png\" alt=\"StackOverflow icon\" class=\"social-icon\">\r\n                    StackOverflow\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://github.com/tonyleif\" target=\"_blank\">\r\n                    <!-- I switched back to the original icon because my new one didn't have a transparent background -->\r\n                    <img src=\"/assets/images/github.png\" alt=\"GitHub icon\" class=\"social-icon\">\r\n                    GitHub\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.linkedin.com/in/tonyleif\" target=\"_blank\">\r\n                    <img src=\"../assets/images/linkedin.png\" alt=\"LinkedIn icon\" class=\"social-icon\">\r\n                    LinkedIn\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.facebook.com/tony.leif\" target=\"_blank\">\r\n                    <img src=\"../../assets/images/facebook.png\" alt=\"Facebook icon\" class=\"social-icon\">\r\n                    Facebook\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://plus.google.com/u/0/117039834557708105106/posts\" target=\"_blank\">\r\n                    <img src=\"/../../assets/images/googleplus.png\" alt=\"Google plus icon\" class=\"social-icon\">\r\n                    Google+\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://twitter.com/tony_leif\" target=\"_blank\">\r\n                    <img src=\"../../../assets/images/twitter.png\" alt=\"Twitter icon\" class=\"social-icon\">\r\n                    Twitter\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.youtube.com/channel/UC5x63YG9gSSZI6QHOXfUqKg\" target=\"_blank\">\r\n                    <img src=\"../../../assets/images/youtube.png\" alt=\"YouTube icon\" class=\"social-icon\">\r\n                    YouTube\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/games/games.component.css":
/***/ (function(module, exports) {

module.exports = ".left-col-btn {\r\n    width: 112px;\r\n}\r\n\r\n#buttonHeader,\r\n.play {\r\n    width: 35em;\r\n    margin-left: .8em;\r\n    padding-left: 0;\r\n}\r\n\r\n.game-alert {\r\n    width: 34em;\r\n    margin-left: .8em;\r\n}\r\n\r\n.current-play {\r\n    padding-right: 0;\r\n    margin-right: 0 !important;\r\n}\r\n\r\n#weekSelect,\r\n#games {\r\n    width: 6.8em;\r\n}\r\n\r\n#weekSelect li,\r\n#games li {\r\n    padding: .25em .2em;\r\n}\r\n\r\n.not-selected:hover {\r\n    background-color: lightgray;\r\n}\r\n\r\n.watched {\r\n    color: white;\r\n    background-color: dimgray;\r\n}\r\n\r\n.play-data {\r\n    padding: .25em .75em;\r\n}\r\n\r\n.play-data label {\r\n    color: darkgray;\r\n    padding-right: .25em;\r\n}\r\n\r\n.play-data p {\r\n    margin-bottom: 0;\r\n    font-size: .8em;\r\n}\r\n\r\nselect.btn-primary option {\r\n    color: black;\r\n    background-color: white;\r\n    /* padding-top: 20px !important;\r\n    padding-bottom: 1em !important; */\r\n}\r\n\r\n.list-group-item {\r\n    padding: .5em 1em;\r\n}\r\n\r\n.jumbotron {\r\n    padding: 1rem;\r\n}\r\n\r\n.team-logo {\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n\r\n.crop {\r\n    width: 100px;\r\n    height: 100px;\r\n    overflow: hidden;\r\n}\r\n\r\n.crop img {\r\n    width: 65px;\r\n    height: 65px;\r\n    margin-top: -32px;\r\n    margin-bottom: -27px;\r\n}\r\n\r\n#gameHeader {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.player-image {\r\n    margin-right: 1.5em;\r\n    display: inline;\r\n}\r\n\r\n.player-image img,\r\n.player-image-2 img {\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n\r\n.player-image-2 {\r\n    margin-left: 0;\r\n    margin-right: .5em;\r\n    display: inline;\r\n}\r\n\r\n.receiver {\r\n    margin-left: 1.5em;\r\n    width: 15em;\r\n}\r\n\r\n.player-data {\r\n    width: 8em;\r\n    white-space: nowrap;\r\n}\r\n\r\n.player-data span {\r\n    vertical-align: top;\r\n}\r\n\r\n.single-player-data {\r\n    width: 20em;\r\n    white-space: nowrap;\r\n}\r\n\r\n.jumbotron {\r\n    padding-top: .7em;\r\n}\r\n\r\n#buttonHeader {\r\n    width: 34em;\r\n    display: inline-block;\r\n    /* float: left; */\r\n}\r\n\r\n#playHeader {\r\n    padding-bottom: .8em;\r\n}\r\n\r\n/* #gameHeader {\r\n    display: inline-block;\r\n} */\r\n\r\n.team-header {\r\n    display: inline-block;\r\n    width: 9em;\r\n}\r\n\r\n.stat-table {\r\n    float: left;\r\n    border-radius: 5px;\r\n    padding-left: .25em;\r\n}\r\n\r\n.stat-table thead {\r\n    border-radius: 5px;\r\n}\r\n\r\n.stat-table thead > tr {\r\n    height: 1.8em;\r\n    background-color: #e9ecef;\r\n    border-radius: 5px !important;\r\n    -webkit-border-radius:5px;\r\n    /* border-style: solid; */\r\n    /* border-width: 1px; */\r\n    border-collapse: separate;\r\n}\r\n\r\n.stat-table tr > td,\r\n.stat-table tr > th {\r\n    /* width: 2.7em; */\r\n    text-align: right;\r\n    font-size: .7em;\r\n    padding-top: .2em;\r\n    padding-bottom: .2em;\r\n}\r\n\r\n.stat-table tr > td:first-child,\r\n.stat-table tr > th:first-child {\r\n    width: 7.5em;\r\n    text-align: left;\r\n}\r\n\r\n/* .stat-table tr > td:first-child.dst-name,\r\n.stat-table tr > th:first-child.dst-name {\r\n    width: 3m;\r\n} */\r\n\r\n.stat-table tr > th.dst-name,\r\n.stat-table tr > td.dst-name {\r\n    width: 5.2em;\r\n}\r\n\r\n.stat-table tr > td:nth-child(2),\r\n.stat-table tr > th:nth-child(2){\r\n    width: 3.3em;\r\n}\r\n\r\n.stat-table tr > td:nth-child(3),\r\n.stat-table tr > th:nth-child(3){\r\n    width: 3.3em;\r\n}\r\n\r\n.stat-table tr > td:nth-child(4),\r\n.stat-table tr > th:nth-child(4){\r\n    width: 3.3em;\r\n}\r\n\r\n.stat-table tr > td:nth-child(5),\r\n.stat-table tr > th:nth-child(5){\r\n    width: 2.1em;\r\n}\r\n\r\n/* .stat-table tr > td:nth-child(6),\r\n.stat-table tr > th:nth-child(6) {\r\n    width: 2.2em;\r\n} */\r\n\r\n@-webkit-keyframes highlight {\r\n    from {background-color: white }\r\n    to {background-color: #45B85E;} \r\n    }\r\n\r\n@keyframes highlight {\r\n    from {background-color: white }\r\n    to {background-color: #45B85E;} \r\n    }\r\n\r\n.last-play-stat {\r\n    -webkit-animation: highlight 1s ease-out;\r\n            animation: highlight 1s ease-out;\r\n    color: white;\r\n    background-color: #45B85E;\r\n}"

/***/ }),

/***/ "./src/app/components/games/games.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row container\">\r\n  <!-- Left column -->\r\n  <div class=\"mb-2 ml-0\" style=\"width: 6.5em\">\r\n    <!-- Weeks dropdown -->\r\n    <div class=\"row mb-2\">\r\n      <p *ngIf=\"!doneLoadingSchedule\">Loading schedule...</p>\r\n      <select *ngIf=\"doneLoadingSchedule\" id=\"weekSelect\" [(ngModel)]=\"selectedWeek\" class=\"btn btn-primary left-col-btn\">\r\n        <option value=\"undefined\">Select</option>\r\n        <option *ngFor=\"let week of weeks; i as index\" [value]=\"week\">\r\n          Week {{week}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <!-- Game List -->\r\n    <div class=\"row\">\r\n      <ul id=\"games\" class=\"list-group\">\r\n        <li *ngFor=\"let game of games\" class=\"list-group-item btn btn-link btn-sm hoverable\" [ngClass]=\"{'active': this.selectedGameId == game.id, \r\n                      'not-selected': this.selectedGameId != game.id,\r\n                      'watched': game.watched && (this.selectedGameId != game.id)\r\n                       }\" (click)=\"setGame(game.id)\">\r\n          {{game.awayTeam.Abbreviation}} @ {{game.homeTeam.Abbreviation}}\r\n          <!-- <div *ngIf=\"this.watched\">watched</div> -->\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- Main part of page -->\r\n  <div>\r\n    <!-- Game Header -->\r\n    <div *ngIf=\"selectedGame\" class=\"row \">\r\n      <!-- d-inline -->\r\n      <span *ngIf=\"loadingPlays\" class=\"ml-3 mt-2\">\r\n        Loading...\r\n      </span>\r\n      <div id=\"buttonHeader\" *ngIf=\"showPlays\">\r\n        <!-- class=\"d-inline\" -->\r\n        <button (click)=\"previousPlay()\" [disabled]=\"currentPlayIndex < 0\" class=\"btn btn-default\">Previous Play\r\n        </button>\r\n        <button (click)=\"nextPlay()\" [disabled]=\"this.currentPlayIndex == this.plays.length - 1\" class=\"btn btn-success ml-1\">Next\r\n          Play\r\n        </button>\r\n        <select #quarter class=\"btn btn-primary ml-1\" [(ngModel)]=\"goToValue\">\r\n          <!-- (change)=\"goTo(quarter.value)\" value={{this.goToValue}}  -->\r\n          <option value=\"GoTo\">Go to...</option><!-- selected -->\r\n          <option value=\"1\">Q1</option>\r\n          <option value=\"2\">Q2</option>\r\n          <option value=\"3\">Q3</option>\r\n          <option value=\"4\">Q4</option>\r\n          <option value=\"End\">End</option>\r\n        </select>\r\n        <button (click)=\"markGameAsWatched()\" class=\"btn ml-1\" [ngClass]=\"{ 'btn-primary': selectedGame.watched }\">\r\n          <span *ngIf=\"selectedGame.watched\">Not </span>Done\r\n        </button>\r\n        <!-- This button was here for testing end of game -->\r\n        <!-- <button (click)=\"goToLastPlay()\" class=\"btn btn-primary ml-1\">\r\n          Q1\r\n        </button>\r\n        <button (click)=\"goToLastPlay()\" class=\"btn btn-primary ml-1\">\r\n          Q2\r\n        </button>\r\n        <button (click)=\"goToLastPlay()\" class=\"btn btn-primary ml-1\">\r\n          Q3\r\n        </button>\r\n        <button (click)=\"goToLastPlay()\" class=\"btn btn-primary ml-1\">\r\n          Q4\r\n        </button>\r\n        <button (click)=\"goToLastPlay()\" class=\"btn btn-primary ml-1\">\r\n          Go to last play\r\n        </button> -->\r\n      </div>\r\n      <div id=\"gameHeader\">\r\n        <!--class=\"d-inline\" float-right -->\r\n        <div id=\"awayTeam\" class=\"team-header \">\r\n          <!-- d-inline -->\r\n          <div class=\"crop d-inline\">\r\n            <img src='{{awayTeamObject.officialImageSrc}}' class=\"team-logo\" />\r\n          </div>\r\n          {{selectedGame.awayTeam.City}}\r\n        </div>\r\n        <div id=\"homeTeam\" class=\"team-header\">\r\n          <div class=\"crop d-inline\">\r\n            <img src='{{homeTeamObject.officialImageSrc}}' class=\"team-logo\" />\r\n          </div>\r\n          {{selectedGame.homeTeam.City}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <!-- Plays -->\r\n      <div class=\"float-left\">\r\n        <div class=\"container-fluid mb-0 mt-2 pl-0\">\r\n          <div *ngIf=\"(showPlays && this.currentPlayIndex == this.plays.length - 1)\" class=\"alert alert-success game-alert mb-0\">\r\n            Game Over\r\n          </div>\r\n        </div>\r\n        <!-- Current Play -->\r\n        <!-- Needed to make these single play objects into a single object array to make the animations work -->\r\n        <div *ngFor=\"let currentPlay of [currentPlay]\" class=\"container-fluid play\">\r\n          <div *ngIf=\"currentPlayIndex > -1\" [@flyInOut]=\"direction\" class=\"jumbotron my-2\">\r\n            <div id=\"playHeader\" class=\"text-secondary\">Q{{currentPlay.quarter}} {{currentPlay.clock}} {{currentPlay.downAndDistance}}\r\n            </div>\r\n            <div *ngIf=\"currentPlay.playType === 0\" class=\"container row current-play\">\r\n              <!-- Kicker -->\r\n              <div class=\"player-image\">\r\n                <img *ngIf=\"!currentPlay.kickingPlay.kickingPlayer.noImageUrl\" src={{currentPlay.kickingPlay.kickingPlayer.officialImageSrc}}\r\n                  class=\"rounded\" />\r\n              </div>\r\n              <!-- Add returner in future -->\r\n            </div>\r\n            <div *ngIf=\"currentPlay.playType === 1\" class=\"container row current-play\">\r\n              <!-- Rusher -->\r\n              <div class=\"player-image\">\r\n                <img *ngIf=\"!currentPlay.rushingPlay.rushingPlayer.noImageUrl\" src={{currentPlay.rushingPlay.rushingPlayer.officialImageSrc}}\r\n                  class=\"rounded d-inline\" />\r\n                <!-- <div *ngIf=\"currentPlay.rushingPlay.rushingPlayer.noImageUrl\" class=\"ml-3\">\r\n                  <div class=\"row text-center\">\r\n                    {{currentPlay.rushingPlay.rushingPlayer.firstName}}\r\n                  </div>\r\n                  <div class=\"row text-center\">\r\n                    {{currentPlay.rushingPlay.rushingPlayer.lastName}}\r\n                  </div>\r\n                  <div class=\"row text-center\">\r\n                    (No Image)\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"player-data\">\r\n                <div class=\"row\">\r\n                  {{currentPlay.rushingPlay.rushingPlayer.firstName}} {{currentPlay.rushingPlay.rushingPlayer.lastName}}\r\n                </div>\r\n                <div class=\"row\">\r\n                  <strong>{{currentPlay.rushingPlay.yardsRushed}}</strong>&nbsp;rushing yards\r\n                </div>\r\n                <div *ngIf=\"currentPlay.rushingPlay.isEndedWithTouchdown\" class=\"row\">\r\n                  <strong class=\"alert alert-success\">TOUCHDOWN!</strong>\r\n                </div>\r\n                <div *ngIf=\"currentPlay.rushingPlay.isTwoPointConversion\" class=\"row\">\r\n                  <strong class=\"alert alert-success\">2 pt conversion</strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"currentPlay.playType === 2\" class=\"container row current-play\">\r\n              <!-- Passer -->\r\n              <div class=\"player-image\">\r\n                <img *ngIf=\"!currentPlay.passingPlay.passingPlayer.noImageUrl\" src={{currentPlay.passingPlay.passingPlayer.officialImageSrc}}\r\n                  class=\"rounded\" />\r\n                <!-- <div *ngIf=\"currentPlay.passingPlay.passingPlayer.noImageUrl\">\r\n                  <div class=\"row text-center\">\r\n                    {{currentPlay.passingPlay.passingPlayer.firstName}}\r\n                  </div>\r\n                  <div class=\"row text-center\">\r\n                    {{currentPlay.passingPlay.passingPlayer.lastName}}\r\n                  </div>\r\n                  <div class=\"row text-center\">\r\n                    (No Image)\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"player-data\">\r\n                <div class=\"row\">\r\n                  {{currentPlay.passingPlay.passingPlayer.firstName}} {{currentPlay.passingPlay.passingPlayer.lastName}}\r\n                </div>\r\n                <div *ngIf=\"!currentPlay.passingPlay.isCompleted\" class=\"row\">\r\n                  <strong class=\"alert alert-danger\">Incomplete</strong>\r\n                </div>\r\n                <div *ngIf=\"currentPlay.passingPlay.isCompleted\" class=\"row\">\r\n                  <strong>{{currentPlay.passingPlay.totalYardsGained}}</strong>&nbsp;passing yards\r\n                </div>\r\n                <div *ngIf=\"currentPlay.passingPlay.isEndedWithTouchdown\" class=\"row\">\r\n                  <strong class=\"alert alert-success\">TOUCHDOWN!</strong>\r\n                </div>\r\n                <div *ngIf=\"currentPlay.passingPlay.isTwoPointConversion\" class=\"row\">\r\n                  <strong class=\"alert alert-success\">2 pt conversion</strong>\r\n                </div>\r\n              </div>\r\n              <!-- Receiver -->\r\n              <div *ngIf=\"!currentPlay.passingPlay.noReceivingPlayer\" class=\"player-image-2\">\r\n                <img *ngIf=\"!currentPlay.passingPlay.receivingPlayer.noImageUrl\" src={{currentPlay.passingPlay.receivingPlayer.officialImageSrc}}\r\n                  class=\"rounded\" />\r\n                <!-- <div *ngIf=\"currentPlay.passingPlay.receivingPlayer.noImageUrl\" class=\"ml-6\">\r\n                  <div class=\"row text-center\">\r\n                    {{currentPlay.passingPlay.receivingPlayer.firstName}}\r\n                  </div>\r\n                  <div class=\"row text-center\">\r\n                    {{currentPlay.passingPlay.receivingPlayer.lastName}}\r\n                  </div>\r\n                  <div class=\"row text-center\">\r\n                    (No Image)\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n              <div *ngIf=\"!currentPlay.passingPlay.noReceivingPlayer\" class=\"player-data d-inline\">\r\n                <div>{{currentPlay.passingPlay.receivingPlayer.firstName}} {{currentPlay.passingPlay.receivingPlayer.lastName}}\r\n                </div>\r\n                <div *ngIf=\"currentPlay.passingPlay.isCompleted\">\r\n                  <strong>{{currentPlay.passingPlay.totalYardsGained}}</strong>&nbsp;receiving yards\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"currentPlay.playType === 3\" class=\"container row current-play\">\r\n              <!-- Kicker -->\r\n              <div class=\"player-image\">\r\n                <img src={{currentPlay.kickAttempt.kickingPlayer.officialImageSrc}} class=\"rounded\" />\r\n              </div>\r\n              <div *ngIf=\"currentPlay.kickAttempt.kickingPlayer.noImageUrl\" class=\"ml-3\">\r\n                <div class=\"row text-center\">\r\n                  {{currentPlay.kickAttempt.kickingPlayer.firstName}}\r\n                </div>\r\n                <div class=\"row text-center\">\r\n                  {{currentPlay.kickAttempt.kickingPlayer.lastName}}\r\n                </div>\r\n                <div class=\"row text-center\">\r\n                  (No Image)\r\n                </div>\r\n              </div>\r\n              <div class=\"player-data\">\r\n                <div class=\"row\">\r\n                  {{currentPlay.kickAttempt.kickingPlayer.firstName}} {{currentPlay.kickAttempt.kickingPlayer.lastName}}\r\n                </div>\r\n                <div *ngIf=\"currentPlay.kickAttempt.isFieldGoal\" class=\"row\">\r\n                  <strong *ngIf=\"currentPlay.kickAttempt.isGood\" class=\"alert alert-success\">{{currentPlay.kickAttempt.yardsKicked}}\r\n                    yard FG is good!</strong>\r\n                  <strong *ngIf=\"!currentPlay.kickAttempt.isGood\" class=\"alert alert-danger\">{{currentPlay.kickAttempt.yardsKicked}}\r\n                    yard FG is NO good</strong>\r\n                </div>\r\n                <div *ngIf=\"currentPlay.kickAttempt.isExtraPoint\" class=\"row\">\r\n                  <strong *ngIf=\"currentPlay.kickAttempt.isGood\" class=\"alert alert-success\">Extra point is good!</strong>\r\n                  <strong *ngIf=\"!currentPlay.kickAttempt.isGood\" class=\"alert alert-danger\">Extra point is NO good</strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"mt-3\">{{currentPlay.description}}</div>\r\n          </div>\r\n        </div>\r\n        <!-- Previous plays -->\r\n        <div *ngFor=\"let oneAgo of [onePlayAgo]\" class=\"container-fluid play\">\r\n          <div *ngIf=\"onePlayAgo\" [@flyInOut]=\"direction\" class=\"list-group-item\">\r\n            <small>\r\n              <div class=\"text-secondary\">Q{{oneAgo.quarter}} {{oneAgo.clock}} {{oneAgo.downAndDistance}}</div>\r\n              {{oneAgo.description}}\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div *ngFor=\"let twoAgo of [twoPlaysAgo]\" class=\"container-fluid play\">\r\n          <div *ngIf=\"twoPlaysAgo\" [@flyInOut]=\"direction\" class=\"list-group-item\">\r\n            <small>\r\n              <div class=\"text-secondary\">Q{{twoAgo.quarter}} {{twoAgo.clock}} {{twoAgo.downAndDistance}}</div>\r\n              {{twoAgo.description}}\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <!-- <div *ngFor=\"let threeAgo of [threePlaysAgo]\" class=\"container-fluid play\">\r\n          <div *ngIf=\"threePlaysAgo\" [@flyInOut]=\"direction\" class=\"list-group-item\">\r\n            <small>\r\n              <div class=\"text-secondary\">Q{{threeAgo.quarter}} {{threeAgo.clock}} {{threeAgo.downAndDistance}}</div>\r\n              {{threeAgo.description}}\r\n            </small>\r\n          </div>\r\n        </div> -->\r\n        <!-- <div *ngFor=\"let fourAgo of [fourPlaysAgo]\" class=\"container-fluid play\">\r\n          <div *ngIf=\"fourPlaysAgo\" [@flyInOut]=\"direction\" class=\"list-group-item\">\r\n            <small>\r\n              <div class=\"text-secondary\">Q{{fourAgo.quarter}} {{fourAgo.clock}} {{fourAgo.downAndDistance}}</div>\r\n              {{fourAgo.description}}\r\n            </small>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n      <!-- Stats -->\r\n      <div *ngIf=\"hasPlayersStats\" class=\"ml-1 pt-2\">\r\n        <!-- QBs -->\r\n        <div class=\"row\">\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr style=\"border-radius: 5px;\">\r\n                <th colspan=\"2\">QB</th>\r\n                <th>Pass</th>\r\n                <th>Rush</th>\r\n                <th>PaTD</th>\r\n                <th>TD</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.awayTeamQBsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.passYardsNoZero}}</td>\r\n                <td>{{playerStat.rushYardsNoZero}}</td>\r\n                <td>{{playerStat.passingTouchdownsNoZero}}</td>\r\n                <td>{{playerStat.touchdownsNoZero}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\"></th>\r\n                <th>Pass</th>\r\n                <th>Rush</th>\r\n                <th>PaTD</th>\r\n                <th>TD</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.homeTeamQBsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.passYardsNoZero}}</td>\r\n                <td>{{playerStat.rushYardsNoZero}}</td>\r\n                <td>{{playerStat.passingTouchdownsNoZero}}</td>\r\n                <td>{{playerStat.touchdownsNoZero}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- RBs -->\r\n        <div class=\"row\">\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\">RB</th>\r\n                <th>Rush</th>\r\n                <th>Rec</th>\r\n                <th>TD</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.awayTeamRBsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.rushYardsNoZero}}</td>\r\n                <td>{{playerStat.recYardsNoZero}}</td>\r\n                <td>{{playerStat.touchdownsNoZero}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\"></th>\r\n                <th>Rush</th>\r\n                <th>Rec</th>\r\n                <th>TD</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.homeTeamRBsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.rushYardsNoZero}}</td>\r\n                <td>{{playerStat.recYardsNoZero}}</td>\r\n                <td>{{playerStat.touchdownsNoZero}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- WRs -->\r\n        <div class=\"row\">\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\">WR</th>\r\n                <th>Rec</th>\r\n                <th>Rush</th>\r\n                <th>TD</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.awayTeamWRsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.recYardsNoZero}}</td>\r\n                <td>{{playerStat.rushYardsNoZero}}</td>\r\n                <td>{{playerStat.touchdownsNoZero}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\"></th>\r\n                <th>Rec</th>\r\n                <th>Rush</th>\r\n                <th>TD</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.homeTeamWRsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.recYardsNoZero}}</td>\r\n                <td>{{playerStat.rushYardsNoZero}}</td>\r\n                <td>{{playerStat.touchdownsNoZero}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- TEs -->\r\n        <div class=\"row\">\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\">TE</th>\r\n                <th>Rec</th>\r\n                <th>Rush</th>\r\n                <th>TD</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.awayTeamTEsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.recYardsNoZero}}</td>\r\n                <td>{{playerStat.rushYardsNoZero}}</td>\r\n                <td>{{playerStat.touchdownsNoZero}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\"></th>\r\n                <th>Rec</th>\r\n                <th>Rush</th>\r\n                <th>TD</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.homeTeamTEsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.recYardsNoZero}}</td>\r\n                <td>{{playerStat.rushYardsNoZero}}</td>\r\n                <td>{{playerStat.touchdownsNoZero}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- Kickers -->\r\n        <div class=\"row\">\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\">K</th>\r\n                <th>FG</th>\r\n                <th>50+</th>\r\n                <th>XP</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.awayTeamKsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.fieldGoalsNoZero}}</td>\r\n                <td>{{playerStat.fieldGoals50PlusNoZero}}</td>\r\n                <td>{{playerStat.extraPointsNoZero}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th colspan=\"2\"></th>\r\n                <th>FG</th>\r\n                <th>50+</th>\r\n                <th>XP</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let playerStat of currentPlayersStats.homeTeamKsStats\" [ngClass]=\"{ 'last-play-stat': playerStat.accruedStatsOnLastPlay }\">\r\n                <td colspan=\"2\">{{playerStat.player.lastName}}</td>\r\n                <td>{{playerStat.fieldGoalsNoZero}}</td>\r\n                <td>{{playerStat.fieldGoals50PlusNoZero}}</td>\r\n                <td>{{playerStat.extraPointsNoZero}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- DSTs -->\r\n        <div class=\"row\">\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th class=\"dst-name\">DST</th>\r\n                <th>Sack</th>\r\n                <th>Int</th>\r\n                <th title=\"Blocked Kicks\">BK</th>\r\n                <th title=\"Fumbles Recovered\">FR</th>\r\n                <th>TD</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr [ngClass]=\"{ 'last-play-stat': this.currentPlayersStats.awayDSTStats.accruedStatsOnLastPlay }\">\r\n                <td class=\"dst-name\">{{this.currentPlayersStats.awayDSTStats.teamAbbreviation}}</td>\r\n                <td>{{this.currentPlayersStats.awayDSTStats.sacksNoZero}}</td>\r\n                <td>{{this.currentPlayersStats.awayDSTStats.interceptionsNoZero}}</td>\r\n                <td>{{this.currentPlayersStats.awayDSTStats.blockedKicksNoZero}}</td>\r\n                <td>{{this.currentPlayersStats.awayDSTStats.fumblesRecoveredNoZero}}</td>\r\n                <td>{{this.currentPlayersStats.awayDSTStats.touchDownsNoZero}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table-sm stat-table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th class=\"dst-name\"></th>\r\n                <th>Sack</th>\r\n                <th>Int</th>\r\n                <th title=\"Blocked Kicks\">BK</th>\r\n                <th title=\"Fumbles Recovered\">FR</th>\r\n                <th>TD</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr [ngClass]=\"{ 'last-play-stat': this.currentPlayersStats.homeDSTStats.accruedStatsOnLastPlay }\">\r\n                <td class=\"dst-name\">{{this.currentPlayersStats.homeDSTStats.teamAbbreviation}}</td>\r\n                <td>{{this.currentPlayersStats.homeDSTStats.sacksNoZero}}</td>\r\n                <td>{{this.currentPlayersStats.homeDSTStats.interceptionsNoZero}}</td>\r\n                <td>{{this.currentPlayersStats.homeDSTStats.blockedKicksNoZero}}</td>\r\n                <td>{{this.currentPlayersStats.homeDSTStats.fumblesRecoveredNoZero}}</td>\r\n                <td>{{this.currentPlayersStats.homeDSTStats.touchDownsNoZero}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/games/games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_regular_season_games_2017_service__ = __webpack_require__("./src/app/model/regular-season-games-2017.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_regular_season_plays_2017_service__ = __webpack_require__("./src/app/model/regular-season-plays-2017.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_regular_season_active_players_2017_service__ = __webpack_require__("./src/app/model/regular-season-active-players-2017.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_team_service__ = __webpack_require__("./src/app/model/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Game__ = __webpack_require__("./src/app/model/Game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Play__ = __webpack_require__("./src/app/model/Play.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_PlayersStats__ = __webpack_require__("./src/app/model/PlayersStats.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 // , ChangeDetectorRef








var GamesComponent = /** @class */ (function () {
    function GamesComponent(gamesService, playsService, activePlayersService, teamService) {
        this.gamesService = gamesService;
        this.playsService = playsService;
        this.activePlayersService = activePlayersService;
        this.teamService = teamService;
        this.plays = [];
        this.currentPlayIndex = -1;
        // this.changeDetectorRef = changeDetectorRef;
        // this was from some testing for Angular animations. May still need this in the future
        this.direction = 'none';
        this._goToValue = 'GoTo';
    }
    GamesComponent.prototype.ngOnInit = function () {
        this.loadSchedule();
        this.loadPlayers();
    };
    GamesComponent.prototype.loadSchedule = function () {
        var _this = this;
        if (localStorage.getItem('fullgameschedule')) {
            this.weeks = this.gamesService.getWeeks();
        }
        else {
            this.gamesService.getScheduleFromAPI().subscribe(function (result) {
                _this.weeks = _this.gamesService.getWeeks();
            });
        }
    };
    GamesComponent.prototype.loadPlayers = function () {
        if (!localStorage.getItem('activeplayers')) {
            this.activePlayersService.getActivePlayersFromAPI().subscribe(function (result) { return result; });
        }
    };
    Object.defineProperty(GamesComponent.prototype, "doneLoadingSchedule", {
        get: function () {
            return (localStorage.getItem('fullgameschedule') !== null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "selectedWeek", {
        get: function () {
            return this._selectedWeek;
        },
        set: function (weekNumber) {
            if (this._selectedWeek !== weekNumber) {
                this.selectedGame = null;
                // this updates the original array so the reference is not lost per
                // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
                this.plays.length = 0;
            }
            if (weekNumber > 0) {
                // const tempGames: Game[] = new Array<Game>();
                // this.gamesService.getGamesByWeek(weekNumber).forEach(g => tempGames.push(new Game(g.json)));
                // this.games = tempGames;
                this.games = this.gamesService.getGamesByWeek(weekNumber);
            }
            else {
                this.games = null;
            }
            this._selectedWeek = weekNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "selectedGame", {
        get: function () {
            return this._selectedGame;
        },
        set: function (value) {
            if (this._selectedGame !== value) {
                // this updates the original array so the reference is not lost per
                // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
                this._selectedGame = value;
                this.currentPlayIndex = -1;
                if (value !== null) {
                    this.loadPlayArray();
                }
            }
            if (this._selectedGame) {
                var team = this.awayTeamObject;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "selectedGameId", {
        get: function () {
            if (this._selectedGame) {
                return this._selectedGame.id;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    GamesComponent.prototype.setGame = function (id) {
        // console.log('setGame');
        // Don't bother doing this work if the button clicked was already selected
        if (this.selectedGame && this.selectedGame.id !== id) {
            // // Browsers have storage limits so clear out the data from last game
            // localStorage.removeItem(this.selectedGame.gameid);
            // Iterate over localStorage and remove items that start with 'watched'
            for (var i = 0; i < localStorage.length; i++) {
                // console.log(localStorage.key(i).substring(0, 4));
                if (localStorage.key(i).substring(0, 4) === 'game') {
                    // console.log(localStorage.key(i));
                    localStorage.removeItem(localStorage.key(i));
                }
            }
            this.selectedGame = new __WEBPACK_IMPORTED_MODULE_5__model_Game__["a" /* Game */](this.gamesService.getGame(id));
        }
        else if (!this.selectedGame) {
            this.selectedGame = new __WEBPACK_IMPORTED_MODULE_5__model_Game__["a" /* Game */](this.gamesService.getGame(id));
        }
    };
    Object.defineProperty(GamesComponent.prototype, "awayTeamObject", {
        get: function () {
            if (this._selectedGame) {
                var team = this.teamService.getTeam(this.selectedGame.awayTeam.ID);
                return team;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "homeTeamObject", {
        get: function () {
            return this.teamService.getTeam(this.selectedGame.homeTeam.ID);
        },
        enumerable: true,
        configurable: true
    });
    GamesComponent.prototype.loadPlayArray = function () {
        var _this = this;
        this.plays.length = 0; // empty the array without making a new array
        // create a local variable because this.plays can't be referenced inside
        // the observable subscription
        if (localStorage.getItem('game' + this.selectedGame.gameid)) {
            var jsonPlays = this.playsService.getPlaysFromLocal('game' + this.selectedGame.gameid);
            jsonPlays.forEach(function (jsonPlay, i) {
                var play = new __WEBPACK_IMPORTED_MODULE_6__model_Play__["b" /* Play */](jsonPlay, i);
                // I want this array in reverse order and unshift pushes to the front of the array
                // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
                this.plays.unshift(play);
            }, this); // Not sure I really like adding this reference here. It works but hard to follow.
        }
        else {
            this.playsService.getPlaysFromAPI(this.selectedGame.gameid).subscribe(function (result) {
                localStorage.setItem('game' + _this.selectedGame.gameid, JSON.stringify(result));
                var jsonPlays = _this.playsService.getPlaysFromLocal('game' + _this.selectedGame.gameid);
                jsonPlays.forEach(function (jsonPlay, i) {
                    var play = new __WEBPACK_IMPORTED_MODULE_6__model_Play__["b" /* Play */](jsonPlay, i);
                    // I want this array in revers order and unshift pushes to the front of the array
                    // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
                    this.plays.unshift(play);
                }, _this);
            });
        }
    };
    Object.defineProperty(GamesComponent.prototype, "playList", {
        get: function () {
            return this.plays;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "showPlays", {
        get: function () {
            return (this.plays.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "loadingPlays", {
        get: function () {
            return (this.selectedGame && this.plays.length === 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "currentPlay", {
        get: function () {
            if (this._currentPlay !== undefined) {
                return this._currentPlay;
            }
            this._currentPlay = this.plays[this.plays.length - this.currentPlayIndex - 1];
            if (this._currentPlay) {
                switch (this._currentPlay.playType) {
                    case __WEBPACK_IMPORTED_MODULE_6__model_Play__["c" /* PlayType */].KickingPlay:
                        var kickingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.kickingPlay.kickingPlayer.ID);
                        this._currentPlay.kickingPlay.kickingPlayer = kickingPlayer;
                        break;
                    case __WEBPACK_IMPORTED_MODULE_6__model_Play__["c" /* PlayType */].RushingPlay:
                        var rushingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.rushingPlay.rushingPlayer.ID);
                        this._currentPlay.rushingPlay.rushingPlayer = rushingPlayer;
                        break;
                    case __WEBPACK_IMPORTED_MODULE_6__model_Play__["c" /* PlayType */].PassingPlay:
                        var passingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.passingPlayer.ID);
                        this._currentPlay.passingPlay.passingPlayer = passingPlayer;
                        if (this._currentPlay.json.passingPlay.receivingPlayer) {
                            var receivingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.receivingPlayer.ID);
                            this._currentPlay.passingPlay.receivingPlayer = receivingPlayer;
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_6__model_Play__["c" /* PlayType */].KickAttempt:
                        var kicker = this.activePlayersService.getPlayer(this._currentPlay.json.kickAttempt.kickingPlayer.ID);
                        this._currentPlay.kickAttempt.kickingPlayer = kicker;
                        break;
                    case __WEBPACK_IMPORTED_MODULE_6__model_Play__["c" /* PlayType */].LateralPass:
                        var lateralPassingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.passingPlayer.ID);
                        this._currentPlay.lateralPass.passingPlayer = passingPlayer;
                        if (this._currentPlay.json.passingPlay.receivingPlayer) {
                            var lateralReceivingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.receivingPlayer.ID);
                            this._currentPlay.lateralPass.receivingPlayer = lateralReceivingPlayer;
                        }
                        break;
                }
            }
            return this._currentPlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "playsToShow", {
        get: function () {
            return this.plays.slice(this.plays.length - this.currentPlayIndex, this.plays.length - this.currentPlayIndex + 4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "currentPlayersStats", {
        get: function () {
            if (this.currentPlayIndex >= 0) {
                var playsWatched = this.plays.slice(this.plays.length - this.currentPlayIndex - 1, this.plays.length);
                return new __WEBPACK_IMPORTED_MODULE_8__model_PlayersStats__["a" /* PlayersStats */](playsWatched, this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "hasPlayersStats", {
        get: function () {
            return (this.currentPlayIndex >= 0); // (this.currentPlayersStats != null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "onePlayAhead", {
        get: function () {
            return this.plays[this.plays.length - this.currentPlayIndex - 2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "onePlayAgo", {
        get: function () {
            return this.plays[this.plays.length - this.currentPlayIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "twoPlaysAgo", {
        get: function () {
            return this.plays[this.plays.length - this.currentPlayIndex + 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "threePlaysAgo", {
        get: function () {
            return this.plays[this.plays.length - this.currentPlayIndex + 2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesComponent.prototype, "fourPlaysAgo", {
        get: function () {
            return this.plays[this.plays.length - this.currentPlayIndex + 3];
        },
        enumerable: true,
        configurable: true
    });
    GamesComponent.prototype.nextPlay = function () {
        // this.direction = 'backward';
        // this.changeDetectorRef.detectChanges();
        this.direction = 'forward';
        // this.changeDetectorRef.detectChanges();
        this._currentPlay = undefined;
        this.currentPlayIndex++;
        // this.changeDetectorRef.detectChanges();
        // this.direction = 'none';
        this._goToValue = 'GoTo';
    };
    GamesComponent.prototype.previousPlay = function () {
        // Left commented code to show work
        // this.direction = 'forward';
        // this.changeDetectorRef.detectChanges();
        this.direction = 'backward';
        // this.changeDetectorRef.detectChanges();
        this._currentPlay = undefined;
        this.currentPlayIndex--;
        // this.changeDetectorRef.detectChanges();
        // this.direction = 'none';
        this._goToValue = 'GoTo';
    };
    // This is for a hidden button to speed up testing how the final plays of the game appears
    GamesComponent.prototype.goToLastPlay = function () {
        this.direction = 'forward';
        this._currentPlay = undefined;
        this.currentPlayIndex = this.plays.length - 1;
    };
    GamesComponent.prototype.goTo = function (quarter) {
        this._currentPlay = undefined;
        if (quarter === 'End') {
            this.currentPlayIndex = this.plays.length - 1;
        }
        else {
            for (var i = this.plays.length - 1; i > -1; i--) {
                if (this.plays[i].quarter === quarter) {
                    this.currentPlayIndex = this.plays.length - i - 1;
                    break;
                }
            }
        }
    };
    Object.defineProperty(GamesComponent.prototype, "goToValue", {
        get: function () {
            return this._goToValue;
        },
        set: function (location) {
            if (location !== 'GoTo') {
                this._currentPlay = undefined;
                if (location === 'End') {
                    this.currentPlayIndex = this.plays.length - 1;
                }
                else {
                    for (var i = this.plays.length - 1; i > -1; i--) {
                        if (this.plays[i].quarter.toString() === location) {
                            this.currentPlayIndex = this.plays.length - i - 1;
                            break;
                        }
                    }
                }
                location = 'GoTo';
                this._goToValue = 'GoTo';
            }
        },
        enumerable: true,
        configurable: true
    });
    GamesComponent.prototype.markGameAsWatched = function () {
        this.selectedGame.watched = !this.selectedGame.watched;
        this.updated = true;
    };
    GamesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-games',
            template: __webpack_require__("./src/app/components/games/games.component.html"),
            styles: [__webpack_require__("./src/app/components/games/games.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* trigger */])('flyInOut', [
                    // this is for making the plays appear to be moving up and down
                    // it makes the order more apparent
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* transition */])('void => backward', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* style */])({ transform: 'translateY(50%)', opacity: 0.0, zIndex: 2 }),
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* style */])({ transform: 'translateY(0)', opacity: 1.0, zIndex: 2 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* transition */])('void => forward', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* style */])({ transform: 'translateY(-50%)', opacity: 0.0, zIndex: 2 }),
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* style */])({ transform: 'translateY(0)', opacity: 1.0, zIndex: 2 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_regular_season_games_2017_service__["a" /* RegularSeasonGames2017Service */],
            __WEBPACK_IMPORTED_MODULE_2__model_regular_season_plays_2017_service__["a" /* RegularSeasonPlays2017Service */],
            __WEBPACK_IMPORTED_MODULE_3__model_regular_season_active_players_2017_service__["a" /* RegularSeasonActivePlayers2017Service */],
            __WEBPACK_IMPORTED_MODULE_4__model_team_service__["a" /* TeamService */]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/model/DefenseSpecialTeamsStats.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefenseSepecialTeamsStats; });
var DefenseSepecialTeamsStats = /** @class */ (function () {
    function DefenseSepecialTeamsStats(teamAbbr) {
        this.teamAbbreviation = teamAbbr;
        this.sacks = 0;
        this.fumblesRecovered = 0;
        this.interceptions = 0;
        this.blockedKicks = 0;
        this.touchDowns = 0;
        this.twoPointConversionReturns = 0;
        this.safeties = 0;
        this.accruedStatsOnLastPlay = false;
    }
    Object.defineProperty(DefenseSepecialTeamsStats.prototype, "sacksNoZero", {
        get: function () {
            if (this.sacks !== 0) {
                return this.sacks.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefenseSepecialTeamsStats.prototype, "fumblesRecoveredNoZero", {
        get: function () {
            if (this.fumblesRecovered !== 0) {
                return this.fumblesRecovered.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefenseSepecialTeamsStats.prototype, "interceptionsNoZero", {
        get: function () {
            if (this.interceptions !== 0) {
                return this.interceptions.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefenseSepecialTeamsStats.prototype, "blockedKicksNoZero", {
        get: function () {
            if (this.blockedKicks !== 0) {
                return this.blockedKicks.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefenseSepecialTeamsStats.prototype, "touchDownsNoZero", {
        get: function () {
            if (this.touchDowns !== 0) {
                return this.touchDowns.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefenseSepecialTeamsStats.prototype, "twoPointConversionReturnsNoZero", {
        get: function () {
            if (this.twoPointConversionReturns !== 0) {
                return this.twoPointConversionReturns.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefenseSepecialTeamsStats.prototype, "safetiesNoZero", {
        get: function () {
            if (this.safeties !== 0) {
                return this.safeties.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefenseSepecialTeamsStats.prototype, "fantasyPoints", {
        get: function () {
            var total = 0;
            total += this.sacks;
            total += this.fumblesRecovered * 2;
            total += this.interceptions * 2;
            total += this.touchDowns * 6;
            total += this.blockedKicks * 2;
            total += this.safeties * 2;
            total += this.twoPointConversionReturns * 2;
            return total;
        },
        enumerable: true,
        configurable: true
    });
    return DefenseSepecialTeamsStats;
}());



/***/ }),

/***/ "./src/app/model/Game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(json) {
        this.json = json;
        this.id = json.id;
        this.date = json.date;
        this.awayTeam = json.awayTeam;
        this.homeTeam = json.homeTeam;
        this.week = json.week;
        // gameid is the string used to call the gameplaybyplay service
        var dateNoHyphens = this.date.toString().split('-').join('');
        this.gameid = dateNoHyphens + '-' + this.awayTeam.Abbreviation + '-' + this.homeTeam.Abbreviation;
    }
    Object.defineProperty(Game.prototype, "watched", {
        get: function () {
            if (localStorage.getItem('watched' + this.gameid)) {
                if (localStorage.getItem('watched' + this.gameid) === 'true') {
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        },
        set: function (watch) {
            localStorage.setItem('watched' + this.gameid, watch.toString());
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}());



/***/ }),

/***/ "./src/app/model/LineOfScrimmage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineOfScrimmage; });
var LineOfScrimmage = /** @class */ (function () {
    function LineOfScrimmage(json) {
        this.team = json.team;
        this.yardLine = json.yardLine;
    }
    return LineOfScrimmage;
}());



/***/ }),

/***/ "./src/app/model/Play.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PlayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RushingPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassingPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SackingPlay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_LineOfScrimmage__ = __webpack_require__("./src/app/model/LineOfScrimmage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Player__ = __webpack_require__("./src/app/model/Player.ts");


// import { Http } from '@angular/http';
var PlayType;
(function (PlayType) {
    PlayType[PlayType["KickingPlay"] = 0] = "KickingPlay";
    PlayType[PlayType["RushingPlay"] = 1] = "RushingPlay";
    PlayType[PlayType["PassingPlay"] = 2] = "PassingPlay";
    PlayType[PlayType["KickAttempt"] = 3] = "KickAttempt";
    PlayType[PlayType["SackingPlay"] = 4] = "SackingPlay";
    PlayType[PlayType["PenatlyPlay"] = 5] = "PenatlyPlay";
    PlayType[PlayType["LateralPass"] = 6] = "LateralPass";
})(PlayType || (PlayType = {}));
var Play = /** @class */ (function () {
    function Play(json, i) {
        this.json = json;
        this.index = i;
        this.description = json.description;
        this.quarter = json.quarter;
        this.time = json.time;
        this.currentDown = json.currentDown;
        this.yardsRemaining = json.yardsRemaining;
        if (json.lineOfScrimmage) {
            this.lineOfScrimmage = new __WEBPACK_IMPORTED_MODULE_0__model_LineOfScrimmage__["a" /* LineOfScrimmage */](json.lineOfScrimmage);
        }
        if (json.kickingPlay) {
            this.playType = PlayType.KickingPlay;
            this.kickingPlay = new KickingPlay(json.kickingPlay);
        }
        else if (json.rushingPlay) {
            this.playType = PlayType.RushingPlay;
            this.rushingPlay = new RushingPlay(json.rushingPlay);
        }
        else if (json.passingPlay) {
            this.playType = PlayType.PassingPlay;
            this.passingPlay = new PassingPlay(json.passingPlay);
        }
        else if (json.kickAttempt) {
            this.playType = PlayType.KickAttempt;
            this.kickAttempt = new KickAttempt(json.kickAttempt);
        }
        else if (json.sackingPlay) {
            this.playType = PlayType.SackingPlay;
            this.sackingPlay = new SackingPlay(json.sackingPlay);
        }
        else if (json.penaltyPlay) {
            this.playType = PlayType.PenatlyPlay;
        }
        else if (json.lateralPass) {
            this.playType = PlayType.LateralPass;
            this.lateralPass = new LateralPass();
        }
    }
    Object.defineProperty(Play.prototype, "minutes", {
        get: function () {
            var minuteNumber = parseInt(this.time.split(':')[0], 10);
            return minuteNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Play.prototype, "seconds", {
        get: function () {
            return parseInt(this.time.split(':')[1], 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Play.prototype, "clock", {
        // The time property in the json was how much time had run off the clock but football fans
        // are used to see how much time is left on the clock which what this property shows
        get: function () {
            var clockString = '';
            var clockMinutes = 15 - this.minutes - 1;
            var clockSeconds = 60 - this.seconds;
            if (this.seconds === 0) {
                clockMinutes++;
            }
            if (clockMinutes < 10) {
                clockString = '0';
            }
            clockString += clockMinutes.toString() + ':';
            if (clockSeconds === 60) {
                clockString += '00';
            }
            else if (clockSeconds < 10) {
                clockString += '0' + clockSeconds.toString();
            }
            else {
                clockString += clockSeconds.toString();
            }
            return clockString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Play.prototype, "downAndDistance", {
        get: function () {
            var dnd;
            switch (+this.currentDown) {
                case 1:
                    dnd = '1st and ' + this.yardsRemaining + ' at ' + this.lineOfScrimmage.team + ' ' + this.lineOfScrimmage.yardLine;
                    break;
                case 2:
                    dnd = '2nd and ' + this.yardsRemaining + ' at ' + this.lineOfScrimmage.team + ' ' + this.lineOfScrimmage.yardLine;
                    break;
                case 3:
                    dnd = '3rd and ' + this.yardsRemaining + ' at ' + this.lineOfScrimmage.team + ' ' + this.lineOfScrimmage.yardLine;
                    break;
                case 4:
                    dnd = '4th and ' + this.yardsRemaining + ' at ' + this.lineOfScrimmage.team + ' ' + this.lineOfScrimmage.yardLine;
                    break;
                default:
                    dnd = '';
                    break;
            }
            return dnd;
        },
        enumerable: true,
        configurable: true
    });
    return Play;
}());

var KickingPlay = /** @class */ (function () {
    function KickingPlay(json) {
        this.teamAbbreviation = json.kickingTeamAbbreviation;
        this.isBlocked = json.isBlocked;
        if (json.subPlays) {
            this.subPlays = new Array();
            if (json.subPlays.fumble) {
                var fum = new Fumble(json.subPlays.fumble);
                this.subPlays.push(fum);
            }
        }
    }
    Object.defineProperty(KickingPlay.prototype, "fumbleSubPlay", {
        get: function () {
            if (this.subPlays.length > 0) {
                return this.subPlays[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    return KickingPlay;
}());
var RushingPlay = /** @class */ (function () {
    function RushingPlay(json) {
        this.teamAbbreviation = json.teamAbbreviation;
        this.yardsRushed = json.yardsRushed;
        this.isEndedWithTouchdown = (json.isEndedWithTouchdown === 'true');
        this.isTwoPointConversion = (json.isTwoPointConversion === 'true');
        this.rushingPlayer = new __WEBPACK_IMPORTED_MODULE_1__model_Player__["a" /* Player */](json.rushingPlayer);
        this.subPlays = new Array();
        if (json.subPlays) {
            if (json.subPlays.fumble) {
                var fum = new Fumble(json.subPlays.fumble);
                this.subPlays.push(fum);
            }
        }
    }
    Object.defineProperty(RushingPlay.prototype, "fumbleSubPlay", {
        get: function () {
            if (this.subPlays.length > 0) {
                return this.subPlays[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    return RushingPlay;
}());

var PassingPlay = /** @class */ (function () {
    function PassingPlay(json) {
        this.teamAbbreviation = json.teamAbbreviation;
        this.isCompleted = (json.isCompleted === 'true');
        this.totalYardsGained = json.totalYardsGained;
        this.isEndedWithTouchdown = (json.isEndedWithTouchdown === 'true');
        this.isTwoPointConversion = (json.isTwoPointConversion === 'true');
        this.isNoPlay = (json.isNoPlay === 'true');
        if (json.passingPlayer != null) {
            this.passingPlayer = new __WEBPACK_IMPORTED_MODULE_1__model_Player__["a" /* Player */](json.passingPlayer);
        }
        if (json.receivingPlayer != null) {
            this.receivingPlayer = new __WEBPACK_IMPORTED_MODULE_1__model_Player__["a" /* Player */](json.receivingPlayer);
        }
        this.intercepted = (json.interceptingPlayer != null);
        this.subPlays = new Array();
        if (json.subPlays) {
            // console.log('json.subPlays.fumble: ' + JSON.stringify(json.subPlays.fumble));
            if (json.subPlays.fumble) {
                var fum = new Fumble(json.subPlays.fumble);
                this.subPlays.push(fum);
            }
        }
    }
    Object.defineProperty(PassingPlay.prototype, "noReceivingPlayer", {
        get: function () {
            return (this.receivingPlayer === undefined || this.receivingPlayer == null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassingPlay.prototype, "fumbleSubPlay", {
        get: function () {
            if (this.subPlays.length > 0) {
                return this.subPlays[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    return PassingPlay;
}());

var KickAttempt = /** @class */ (function () {
    function KickAttempt(json) {
        this.teamAbbreviation = json.teamAbbreviation;
        this.isFieldGoal = (json.isFieldGoal === 'true');
        this.isExtraPoint = (json.isExtraPoint === 'true');
        this.isGood = (json.isGood === 'true');
        this.yardsKicked = json.yardsKicked;
        if (json.kickingPlayer != null) {
            this.kickingPlayer = new __WEBPACK_IMPORTED_MODULE_1__model_Player__["a" /* Player */](json.kickingPlayer);
        }
        this.isNoPlay = json.isNoPlay;
    }
    Object.defineProperty(KickAttempt.prototype, "fieldGoal50Plus", {
        get: function () {
            return this.yardsKicked >= 50;
        },
        enumerable: true,
        configurable: true
    });
    return KickAttempt;
}());
var SackingPlay = /** @class */ (function () {
    function SackingPlay(json) {
        // console.log('json.subPlays ' + JSON.stringify(json.subPlays));
        this.teamAbbreviation = json.teamAbbreviation;
        this.isNoPlay = (json.isNoPlay.toString() === 'true');
        this.subPlays = new Array();
        // console.log('json.subPlays ' + JSON.stringify(json.subPlays));
        if (json.subPlays) {
            // console.log('json.subPlays.fumble: ' + JSON.stringify(json.subPlays.fumble));
            if (json.subPlays.fumble) {
                var fum = new Fumble(json.subPlays.fumble);
                this.subPlays.push(fum);
            }
        }
    }
    Object.defineProperty(SackingPlay.prototype, "fumbleSubPlay", {
        get: function () {
            // console.log('this.subPlays.length: ' + this.subPlays.length);
            if (this.subPlays.length > 0) {
                return this.subPlays[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    return SackingPlay;
}());

var LateralPass = /** @class */ (function () {
    function LateralPass() {
    }
    Object.defineProperty(LateralPass.prototype, "noReceivingPlayer", {
        get: function () {
            return (this.receivingPlayer === undefined || this.receivingPlayer == null);
        },
        enumerable: true,
        configurable: true
    });
    return LateralPass;
}());
var Fumble = /** @class */ (function () {
    function Fumble(json) {
        this.fumblingTeamAbbreviation = json.fumblingTeamAbbreviation;
        this.recoveringTeamAbbreviation = json.recoveringTeamAbbreviation;
        this.isEndedWithTouchdown = (json.isEndedWithTouchdown.toString() === 'true');
    }
    Object.defineProperty(Fumble.prototype, "recoveredByOtherTeam", {
        get: function () {
            return (this.fumblingTeamAbbreviation !== this.recoveringTeamAbbreviation);
        },
        enumerable: true,
        configurable: true
    });
    return Fumble;
}());


/***/ }),

/***/ "./src/app/model/Player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(json) {
        this.id = json.ID;
        if (json.officialImageSrc) {
            this.officialImageSrc = json.officialImageSrc;
        }
        this.lastName = json.LastName;
        this.firstName = json.FirstName;
        this.position = json.Position;
    }
    Object.defineProperty(Player.prototype, "noImageUrl", {
        get: function () {
            return (this.officialImageSrc == null);
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());



/***/ }),

/***/ "./src/app/model/PlayerStats.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerStats; });
var PlayerStats = /** @class */ (function () {
    function PlayerStats(player, teamAbbr) {
        this.player = player;
        this.teamAbbreviation = teamAbbr;
        this.passingYards = 0;
        this.rushingYards = 0;
        this.receivingYards = 0;
        this.passingTouchdowns = 0;
        this.touchdowns = 0;
        this.extraPoints = 0;
        this.fieldGoals = 0;
        this.fieldGoals50Plus = 0;
        this.interceptions = 0;
        this.accruedStatsOnLastPlay = false;
    }
    Object.defineProperty(PlayerStats.prototype, "passYardsNoZero", {
        get: function () {
            if (this.passingYards !== 0) {
                return this.passingYards.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStats.prototype, "rushYardsNoZero", {
        get: function () {
            if (this.rushingYards !== 0) {
                return this.rushingYards.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStats.prototype, "recYardsNoZero", {
        get: function () {
            if (this.receivingYards !== 0) {
                return this.receivingYards.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStats.prototype, "passingTouchdownsNoZero", {
        get: function () {
            if (this.passingTouchdowns !== 0) {
                return this.passingTouchdowns.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStats.prototype, "touchdownsNoZero", {
        get: function () {
            if (this.touchdowns !== 0) {
                return this.touchdowns.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStats.prototype, "extraPointsNoZero", {
        get: function () {
            if (this.extraPoints !== 0) {
                return this.extraPoints.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStats.prototype, "fieldGoalsNoZero", {
        get: function () {
            if (this.fieldGoals !== 0) {
                return this.fieldGoals.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStats.prototype, "fieldGoals50PlusNoZero", {
        get: function () {
            if (this.fieldGoals50Plus !== 0) {
                return this.fieldGoals50Plus.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStats.prototype, "interceptionsNoZero", {
        get: function () {
            if (this.interceptions !== 0) {
                return this.interceptions.toString();
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    return PlayerStats;
}());



/***/ }),

/***/ "./src/app/model/PlayersStats.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersStats; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlayerStats__ = __webpack_require__("./src/app/model/PlayerStats.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Play__ = __webpack_require__("./src/app/model/Play.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DefenseSpecialTeamsStats__ = __webpack_require__("./src/app/model/DefenseSpecialTeamsStats.ts");



var PlayersStats = /** @class */ (function () {
    function PlayersStats(playsWatched, awayTeamAbbr, homeTeamAbbr) {
        var tempPlayersStats = new Set();
        this.awayDSTStats = new __WEBPACK_IMPORTED_MODULE_2__DefenseSpecialTeamsStats__["a" /* DefenseSepecialTeamsStats */](awayTeamAbbr);
        var awayDSTStatsLocal = this.awayDSTStats;
        this.homeDSTStats = new __WEBPACK_IMPORTED_MODULE_2__DefenseSpecialTeamsStats__["a" /* DefenseSepecialTeamsStats */](homeTeamAbbr);
        var homeDSTStatsLocal = this.homeDSTStats;
        this.awayTeamAbbreviation = awayTeamAbbr;
        this.homeTeamAbbreviation = homeTeamAbbr;
        var currentPlayerStats;
        playsWatched.forEach(function (p, idx, array) {
            if (!p.isCancelsPlay) {
                switch (p.playType) {
                    case __WEBPACK_IMPORTED_MODULE_1__Play__["c" /* PlayType */].PassingPlay:
                        var passingPlay = new __WEBPACK_IMPORTED_MODULE_1__Play__["a" /* PassingPlay */](p.json.passingPlay);
                        if (!p.passingPlay.isNoPlay) {
                            if (p.passingPlay.isCompleted) {
                                // Passing player
                                currentPlayerStats = PlayersStats.findPlayerStats(p.passingPlay.passingPlayer, p.passingPlay.teamAbbreviation, tempPlayersStats);
                                currentPlayerStats.passingYards += +p.passingPlay.totalYardsGained;
                                if (p.passingPlay.isEndedWithTouchdown) {
                                    currentPlayerStats.passingTouchdowns++;
                                }
                                if (idx === 0) {
                                    currentPlayerStats.accruedStatsOnLastPlay = true;
                                }
                                // Receiving player
                                if (p.passingPlay.receivingPlayer != null) {
                                    currentPlayerStats = PlayersStats.findPlayerStats(p.passingPlay.receivingPlayer, p.passingPlay.teamAbbreviation, tempPlayersStats);
                                    currentPlayerStats.receivingYards += +p.passingPlay.totalYardsGained;
                                    if (p.passingPlay.isEndedWithTouchdown) {
                                        currentPlayerStats.touchdowns++;
                                    }
                                    if (idx === 0) {
                                        currentPlayerStats.accruedStatsOnLastPlay = true;
                                    }
                                }
                                if (passingPlay.fumbleSubPlay !== undefined) {
                                    // console.log(p.description);
                                    // console.log('passingPlay.fumbleSubPlay: ' + JSON.stringify(passingPlay.subPlays));
                                    if (passingPlay.fumbleSubPlay.recoveredByOtherTeam) {
                                        var defenseTeamStats = void 0;
                                        if (passingPlay.teamAbbreviation === awayTeamAbbr) {
                                            defenseTeamStats = homeDSTStatsLocal;
                                        }
                                        else {
                                            defenseTeamStats = awayDSTStatsLocal;
                                        }
                                        defenseTeamStats.fumblesRecovered += 1;
                                        if (passingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                            defenseTeamStats.touchDowns += 1;
                                        }
                                        if (idx === 0) {
                                            defenseTeamStats.accruedStatsOnLastPlay = true;
                                        }
                                    }
                                }
                            }
                            else {
                                // DST
                                if (p.passingPlay.intercepted) {
                                    // Passing player
                                    currentPlayerStats = PlayersStats.findPlayerStats(p.passingPlay.passingPlayer, p.passingPlay.teamAbbreviation, tempPlayersStats);
                                    currentPlayerStats.interceptions += 1;
                                    // console.log('this.awayDSTStats.teamAbbreviation: ' + awayDSTStatsLocal.teamAbbreviation);
                                    // console.log('this.awayDSTStats.interceptions: ' + awayDSTStatsLocal.interceptions);
                                    if (p.passingPlay.teamAbbreviation === awayTeamAbbr) {
                                        homeDSTStatsLocal.interceptions += 1;
                                        // console.log(p.passingPlay.isEndedWithTouchdown);
                                        // console.log(('p.passingPlay.isEndedWithTouchdown === "true": '
                                        //     + p.passingPlay.isEndedWithTouchdown === 'true'));
                                        if (p.passingPlay.isEndedWithTouchdown === true) {
                                            homeDSTStatsLocal.touchDowns += 1;
                                            // console.log(homeDSTStatsLocal.touchDowns);
                                        }
                                        if (idx === 0) {
                                            homeDSTStatsLocal.accruedStatsOnLastPlay = true;
                                        }
                                    }
                                    else {
                                        awayDSTStatsLocal.interceptions += 1;
                                        // console.log(p.passingPlay.isEndedWithTouchdown);
                                        // console.log(('p.passingPlay.isEndedWithTouchdown == "true": '
                                        //     + p.passingPlay.isEndedWithTouchdown === 'true'));
                                        if (p.passingPlay.isEndedWithTouchdown === true) {
                                            awayDSTStatsLocal.touchDowns += 1;
                                            // console.log(homeDSTStatsLocal.touchDowns);
                                        }
                                        if (idx === 0) {
                                            awayDSTStatsLocal.accruedStatsOnLastPlay = true;
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__Play__["c" /* PlayType */].RushingPlay:
                        // Rushing player
                        var rushingPlay = new __WEBPACK_IMPORTED_MODULE_1__Play__["d" /* RushingPlay */](p.json.rushingPlay);
                        if (!(p.rushingPlay.isNoPlay === 'true')) {
                            var defenseTeamStats = void 0;
                            if (rushingPlay.teamAbbreviation === awayTeamAbbr) {
                                defenseTeamStats = homeDSTStatsLocal;
                            }
                            else {
                                defenseTeamStats = awayDSTStatsLocal;
                            }
                            currentPlayerStats = PlayersStats.findPlayerStats(p.rushingPlay.rushingPlayer, p.rushingPlay.teamAbbreviation, tempPlayersStats);
                            currentPlayerStats.rushingYards += +p.rushingPlay.yardsRushed;
                            if (p.rushingPlay.isEndedWithTouchdown) {
                                currentPlayerStats.touchdowns++;
                            }
                            if (rushingPlay.fumbleSubPlay != null) {
                                if (rushingPlay.fumbleSubPlay.recoveredByOtherTeam) {
                                    defenseTeamStats.fumblesRecovered += 1;
                                    if (rushingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                        defenseTeamStats.touchDowns += 1;
                                    }
                                    if (idx === 0) {
                                        defenseTeamStats.accruedStatsOnLastPlay = true;
                                    }
                                }
                            }
                            if (idx === 0) {
                                currentPlayerStats.accruedStatsOnLastPlay = true;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__Play__["c" /* PlayType */].KickAttempt:
                        // Kicking player
                        if (!(p.kickAttempt.isNoPlay === 'true')) {
                            currentPlayerStats = PlayersStats.findPlayerStats(p.kickAttempt.kickingPlayer, p.kickAttempt.teamAbbreviation, tempPlayersStats);
                            if (p.kickAttempt.isGood) {
                                if (p.kickAttempt.isExtraPoint) {
                                    currentPlayerStats.extraPoints += 1;
                                }
                                else {
                                    if (p.kickAttempt.isFieldGoal) {
                                        currentPlayerStats.fieldGoals += 1;
                                        if (p.kickAttempt.fieldGoal50Plus) {
                                            currentPlayerStats.fieldGoals50Plus += 1;
                                        }
                                    }
                                }
                            }
                            if (idx === 0) {
                                currentPlayerStats.accruedStatsOnLastPlay = true;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__Play__["c" /* PlayType */].KickingPlay:
                        if (!(p.kickingPlay.isNoPlay === 'true')) {
                            // DST
                            if (p.kickingPlay.isBlocked === 'true') {
                                if (p.kickingPlay.teamAbbreviation === awayTeamAbbr) {
                                    homeDSTStatsLocal.blockedKicks += 1;
                                    if (p.kickingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                        if (p.kickingPlay.fumbleSubPlay.recoveringTeamAbbreviation === awayTeamAbbr) {
                                            awayDSTStatsLocal.touchDowns += 1;
                                        }
                                        else {
                                            homeDSTStatsLocal.touchDowns += 1;
                                        }
                                    }
                                    if (idx === 0) {
                                        homeDSTStatsLocal.accruedStatsOnLastPlay = true;
                                    }
                                }
                                else {
                                    awayDSTStatsLocal.blockedKicks += 1;
                                    if (p.kickingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                        if (p.kickingPlay.fumbleSubPlay.recoveringTeamAbbreviation === awayTeamAbbr) {
                                            awayDSTStatsLocal.touchDowns += 1;
                                        }
                                        else {
                                            homeDSTStatsLocal.touchDowns += 1;
                                        }
                                    }
                                    if (idx === 0) {
                                        awayDSTStatsLocal.accruedStatsOnLastPlay = true;
                                    }
                                }
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__Play__["c" /* PlayType */].SackingPlay:
                        var sackingPlay = new __WEBPACK_IMPORTED_MODULE_1__Play__["e" /* SackingPlay */](p.json.sackingPlay);
                        if (!(sackingPlay.isNoPlay)) {
                            var sackingTeamStats = void 0;
                            if (sackingPlay.teamAbbreviation === awayTeamAbbr) {
                                sackingTeamStats = homeDSTStatsLocal;
                            }
                            else {
                                sackingTeamStats = awayDSTStatsLocal;
                            }
                            sackingTeamStats.sacks += 1;
                            if (sackingPlay.fumbleSubPlay != null) {
                                if (sackingPlay.fumbleSubPlay.recoveredByOtherTeam) {
                                    sackingTeamStats.fumblesRecovered += 1;
                                    if (sackingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                        sackingTeamStats.touchDowns += 1;
                                    }
                                }
                            }
                            if (idx === 0) {
                                sackingTeamStats.accruedStatsOnLastPlay = true;
                            }
                        }
                        break;
                }
            }
        });
        this.playersStats = tempPlayersStats;
    }
    PlayersStats.findPlayerStats = function (player, teamAbbr, playerStatsSet) {
        if (player == null) {
            return null;
        }
        // Find player in set
        var newPlayerStats;
        if (playerStatsSet.size > 0) {
            playerStatsSet.forEach(function (ps) {
                if (ps.player.id === player.id) {
                    newPlayerStats = ps;
                    return ps;
                }
            });
        }
        if (newPlayerStats != null) {
            return newPlayerStats;
        }
        // Add player to set if not found
        newPlayerStats = new __WEBPACK_IMPORTED_MODULE_0__PlayerStats__["a" /* PlayerStats */](player, teamAbbr);
        playerStatsSet.add(newPlayerStats);
        return newPlayerStats;
    };
    Object.defineProperty(PlayersStats.prototype, "sortedPlayersStats", {
        get: function () {
            var nonSortedArray = Array.from(this.playersStats);
            var sortedArray = nonSortedArray.sort(function (ps1, ps2) {
                if (ps1.passingYards < ps2.passingYards) {
                    return 1;
                }
                if (ps1.passingYards > ps2.passingYards) {
                    return -1;
                }
                if (ps1.rushingYards < ps2.rushingYards) {
                    return 1;
                }
                if (ps1.rushingYards > ps2.rushingYards) {
                    return -1;
                }
                if (ps1.receivingYards < ps2.receivingYards) {
                    return 1;
                }
                if (ps1.receivingYards > ps2.receivingYards) {
                    return -1;
                }
                return 0;
            });
            return sortedArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "awayTeamPlayersStats", {
        get: function () {
            return this.getTeamPlayersStats(this.awayTeamAbbreviation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "homeTeamPlayersStats", {
        get: function () {
            return this.getTeamPlayersStats(this.homeTeamAbbreviation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "awayTeamQBsStats", {
        get: function () {
            return this.awayTeamPlayersStats.filter(function (ps) { return ps.player.position === 'QB'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "homeTeamQBsStats", {
        get: function () {
            return this.homeTeamPlayersStats.filter(function (ps) { return ps.player.position === 'QB'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "awayTeamRBsStats", {
        get: function () {
            return this.awayTeamPlayersStats.filter(function (ps) { return ps.player.position === 'RB' || ps.player.position === 'FB'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "homeTeamRBsStats", {
        get: function () {
            return this.homeTeamPlayersStats.filter(function (ps) { return ps.player.position === 'RB' || ps.player.position === 'FB'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "awayTeamWRsStats", {
        get: function () {
            return this.awayTeamPlayersStats.filter(function (ps) { return ps.player.position === 'WR'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "homeTeamWRsStats", {
        get: function () {
            return this.homeTeamPlayersStats.filter(function (ps) { return ps.player.position === 'WR'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "awayTeamTEsStats", {
        get: function () {
            return this.awayTeamPlayersStats.filter(function (ps) { return ps.player.position === 'TE'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "homeTeamTEsStats", {
        get: function () {
            return this.homeTeamPlayersStats.filter(function (ps) { return ps.player.position === 'TE'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "awayTeamKsStats", {
        get: function () {
            return this.awayTeamPlayersStats.filter(function (ps) { return ps.player.position === 'K'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayersStats.prototype, "homeTeamKsStats", {
        get: function () {
            return this.homeTeamPlayersStats.filter(function (ps) { return ps.player.position === 'K'; });
        },
        enumerable: true,
        configurable: true
    });
    PlayersStats.prototype.getTeamPlayersStats = function (teamAbbr) {
        var filteredArray = new Array();
        // const homeTeamAbbr = this.homeTeamAbbreviation;
        this.playersStats.forEach(function (ps) {
            if (ps.teamAbbreviation === teamAbbr) {
                filteredArray.push(ps);
            }
        });
        var sortedArray = filteredArray.sort(function (ps1, ps2) {
            if (ps1.passingYards < ps2.passingYards) {
                return 1;
            }
            if (ps1.passingYards > ps2.passingYards) {
                return -1;
            }
            if (ps1.rushingYards < ps2.rushingYards) {
                return 1;
            }
            if (ps1.rushingYards > ps2.rushingYards) {
                return -1;
            }
            if (ps1.receivingYards < ps2.receivingYards) {
                return 1;
            }
            if (ps1.receivingYards > ps2.receivingYards) {
                return -1;
            }
            return 0;
        });
        return sortedArray;
        // return filteredArray;
    };
    return PlayersStats;
}());



/***/ }),

/***/ "./src/app/model/Team-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TEAMS; });
var TEAMS = [
    { 'ID': 48, 'City': 'Buffalo', 'Name': 'Bills', 'Abbreviation': 'BUF',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/BUF.svg' },
    { 'ID': 49, 'City': 'Miami', 'Name': 'Dolphins', 'Abbreviation': 'MIA',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/MIA.svg' },
    { 'ID': 50, 'City': 'New England', 'Name': 'Patriots', 'Abbreviation': 'NE',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NE.svg' },
    { 'ID': 51, 'City': 'New York', 'Name': 'Jets', 'Abbreviation': 'NYJ',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NYJ.svg' },
    { 'ID': 52, 'City': 'Dallas', 'Name': 'Cowboys', 'Abbreviation': 'DAL',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DAL.svg' },
    { 'ID': 53, 'City': 'New York', 'Name': 'Giants', 'Abbreviation': 'NYG',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NYG.svg' },
    { 'ID': 54, 'City': 'Philadelphia', 'Name': 'Eagles', 'Abbreviation': 'PHI',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/PHI.svg' },
    { 'ID': 55, 'City': 'Washington', 'Name': 'Redskins', 'Abbreviation': 'WAS',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/WAS.svg' },
    { 'ID': 56, 'City': 'Baltimore', 'Name': 'Ravens', 'Abbreviation': 'BAL',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/BAL.svg' },
    { 'ID': 57, 'City': 'Cincinnati', 'Name': 'Bengals', 'Abbreviation': 'CIN',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CIN.svg' },
    { 'ID': 58, 'City': 'Cleveland', 'Name': 'Browns', 'Abbreviation': 'CLE',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CLE.svg' },
    { 'ID': 59, 'City': 'Pittsburgh', 'Name': 'Steelers', 'Abbreviation': 'PIT',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/PIT.svg' },
    { 'ID': 60, 'City': 'Chicago', 'Name': 'Bears', 'Abbreviation': 'CHI',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CHI.svg' },
    { 'ID': 61, 'City': 'Detroit', 'Name': 'Lions', 'Abbreviation': 'DET',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DET.svg' },
    { 'ID': 62, 'City': 'Green Bay', 'Name': 'Packers', 'Abbreviation': 'GB',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/GB.svg' },
    { 'ID': 63, 'City': 'Minnesota', 'Name': 'Vikings', 'Abbreviation': 'MIN',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/MIN.svg' },
    { 'ID': 64, 'City': 'Houston', 'Name': 'Texans', 'Abbreviation': 'HOU',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg' },
    { 'ID': 65, 'City': 'Indianapolis', 'Name': 'Colts', 'Abbreviation': 'IND',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/IND.svg' },
    { 'ID': 66, 'City': 'Jacksonville', 'Name': 'Jaguars', 'Abbreviation': 'JAX',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/JAX.svg' },
    { 'ID': 67, 'City': 'Tennessee', 'Name': 'Titans', 'Abbreviation': 'TEN',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/TEN.svg' },
    { 'ID': 68, 'City': 'Atlanta', 'Name': 'Falcons', 'Abbreviation': 'ATL',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/ATL.svg' },
    { 'ID': 69, 'City': 'Carolina', 'Name': 'Panthers', 'Abbreviation': 'CAR',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CAR.svg' },
    { 'ID': 70, 'City': 'New Orleans', 'Name': 'Saints', 'Abbreviation': 'NO',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NO.svg' },
    { 'ID': 71, 'City': 'Tampa Bay', 'Name': 'Buccaneers', 'Abbreviation': 'TB',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/TB.svg' },
    { 'ID': 72, 'City': 'Denver', 'Name': 'Broncos', 'Abbreviation': 'DEN',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DEN.svg' },
    { 'ID': 73, 'City': 'Kansas City', 'Name': 'Cheifs', 'Abbreviation': 'KC',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/KC.svg' },
    { 'ID': 74, 'City': 'Oakland', 'Name': 'Raiders', 'Abbreviation': 'OAK',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/OAK.svg' },
    { 'ID': 75, 'City': 'Los Angeles', 'Name': 'Chargers', 'Abbreviation': 'LAC',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/LAC.svg' },
    { 'ID': 76, 'City': 'Arizona', 'Name': 'Cardinals', 'Abbreviation': 'ARI',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/ARI.svg' },
    { 'ID': 77, 'City': 'Los Angeles', 'Name': 'Rams', 'Abbreviation': 'LA',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/LA.svg' },
    { 'ID': 78, 'City': 'San Francisco', 'Name': '49ers', 'Abbreviation': 'SF',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/SF.svg' },
    { 'ID': 79, 'City': 'Seattle', 'Name': 'Seahawks', 'Abbreviation': 'SEA',
        'officialImageSrc': 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/SEA.svg' },
];


/***/ }),

/***/ "./src/app/model/regular-season-active-players-2017.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularSeasonActivePlayers2017Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Player__ = __webpack_require__("./src/app/model/Player.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegularSeasonActivePlayers2017Service = /** @class */ (function () {
    function RegularSeasonActivePlayers2017Service(http) {
        this.http = http;
    }
    RegularSeasonActivePlayers2017Service.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('tonyleif:00password'));
    };
    RegularSeasonActivePlayers2017Service.prototype.getActivePlayersFromAPI = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http
            .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/active_players.json', { headers: headers })
            .map(function (res) {
            localStorage.activeplayers = JSON.stringify(res.json());
            var allPlayers = res.json().activeplayers.playerentry;
            var playerObject;
            for (var i = 0; i < allPlayers.length; i++) {
                playerObject = allPlayers[i];
                localStorage.setItem(playerObject.player.ID + 'ap', JSON.stringify(playerObject.player));
            }
            return res.json();
        });
    };
    RegularSeasonActivePlayers2017Service.prototype.getPlayer = function (id) {
        // Commented out but left to show work. This way was slow
        // const jsonObject: any = JSON.parse(localStorage.activeplayers);
        // const allPlayers: Array<string> = jsonObject.activeplayers.playerentry;
        // let playerObject: any;
        var playerObject = new __WEBPACK_IMPORTED_MODULE_3__Player__["a" /* Player */](JSON.parse(localStorage.getItem(id + 'ap')));
        return playerObject;
    };
    RegularSeasonActivePlayers2017Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegularSeasonActivePlayers2017Service);
    return RegularSeasonActivePlayers2017Service;
}());



/***/ }),

/***/ "./src/app/model/regular-season-games-2017.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularSeasonGames2017Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Game__ = __webpack_require__("./src/app/model/Game.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegularSeasonGames2017Service = /** @class */ (function () {
    function RegularSeasonGames2017Service(http) {
        this.http = http;
    }
    RegularSeasonGames2017Service.prototype.createAuthorizationHeader = function (headers) {
        // Is there a way to secure this information better?
        headers.append('Authorization', 'Basic ' +
            btoa('tonyleif:00password'));
    };
    RegularSeasonGames2017Service.prototype.getWeeks = function () {
        // I get the weeks from the schedule because even though the season has 17 weeks,
        // I only want to show the weeks that are in the data. So if we've just completed
        // week 10, only show 10 weeks.
        var weekSet = new Set();
        var games = this.getGames();
        games.forEach(function (game) {
            weekSet.add(game.week);
        });
        return weekSet;
    };
    RegularSeasonGames2017Service.prototype.getGames = function () {
        var jsonObject = JSON.parse(localStorage.fullgameschedule); // JSON.parse(this.getGamesJSON());
        var games = jsonObject.fullgameschedule.gameentry;
        return games;
    };
    RegularSeasonGames2017Service.prototype.getGamesByWeek = function (week) {
        var jsonObject = JSON.parse(localStorage.getItem('fullgameschedule')); // JSON.parse(this.getGamesJSON());
        var allGames = jsonObject.fullgameschedule.gameentry;
        var games = new Array();
        allGames.forEach(function (game) {
            // console.log(game);
            var gameObject = new __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* Game */](game);
            // console.log(gameObject.week);
            // console.log(gameObject.watched);
            if (gameObject.week === week) {
                games.push(gameObject);
            }
        });
        return games;
    };
    RegularSeasonGames2017Service.prototype.getScheduleFromAPI = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        // A future enhancement for allowing user to select any season is needed here.
        // Generally speaking, users will only want the most recent season but
        // I'd like to give them the option
        return this.http
            .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/full_game_schedule.json', { headers: headers })
            .map(function (res) {
            localStorage.fullgameschedule = JSON.stringify(res.json());
            return res.json();
        });
    };
    RegularSeasonGames2017Service.prototype.getGame = function (id) {
        var jsonObject = JSON.parse(localStorage.fullgameschedule); // JSON.parse(this.getGamesJSON());
        var allGames = jsonObject.fullgameschedule.gameentry;
        var gameObject;
        for (var i = 0; i < allGames.length; i++) {
            gameObject = allGames[i];
            if (gameObject.id === id) {
                return gameObject;
            }
        }
        return null;
    };
    RegularSeasonGames2017Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegularSeasonGames2017Service);
    return RegularSeasonGames2017Service;
}());



/***/ }),

/***/ "./src/app/model/regular-season-plays-2017.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularSeasonPlays2017Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegularSeasonPlays2017Service = /** @class */ (function () {
    function RegularSeasonPlays2017Service(http) {
        this.http = http;
    }
    RegularSeasonPlays2017Service.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('tonyleif:00password'));
    };
    RegularSeasonPlays2017Service.prototype.getPlaysJSON = function (dateWithHyphens, awayAbbr, homeAbbr) {
        // const dateNoHyphens: string = dateWithHyphens.replace('-', '');
        var dateNoHyphens = dateWithHyphens.split('-').join('');
        var gameid = dateNoHyphens + '-' + awayAbbr + '-' + homeAbbr;
        if (!localStorage.getItem(gameid)) {
            // console.log('getPlaysJSON: Getting plays for ' + gameid + ' from API');
            // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
            this.getPlaysFromAPI(gameid).subscribe(function (result) {
                // console.log(result);
                localStorage.setItem(gameid, JSON.stringify(result));
            });
        }
        else {
            // console.log('getPlaysJSON: Got it from local storage');
        }
        // console.log('getPlaysJSON: this should be LAST');
        return localStorage.getItem(gameid);
    };
    RegularSeasonPlays2017Service.prototype.getPlaysJSONById = function (gameid) {
        // console.log('getPlaysJSONById');
        if (!localStorage.getItem(gameid)) {
            // console.log('getPlaysJSON: Getting plays for ' + gameid + ' from API');
            // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
            this.getPlaysFromAPI(gameid).subscribe(function (result) {
                // console.log(result);
                localStorage.setItem(gameid, JSON.stringify(result));
            });
        }
        else {
            // console.log('getPlaysJSON: Got it from local storage');
        }
        // console.log('getPlaysJSON: this should be LAST');
        return localStorage.getItem(gameid);
    };
    RegularSeasonPlays2017Service.prototype.getPlaysFromAPI = function (gameid) {
        var getUrl = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/game_playbyplay.json?gameid=' + gameid;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http
            .get(getUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RegularSeasonPlays2017Service.prototype.getPlays = function (dateWithHyphens, awayAbbr, homeAbbr) {
        var jsonObject = JSON.parse(this.getPlaysJSON(dateWithHyphens, awayAbbr, homeAbbr));
        var allPlays = jsonObject.gameplaybyplay.plays.play;
        var plays = new Array();
        allPlays.forEach(function (play) {
            plays.push(play);
        });
        return plays;
    };
    RegularSeasonPlays2017Service.prototype.getPlaysById = function (gameid) {
        var jsonObject = JSON.parse(this.getPlaysJSONById(gameid));
        var allPlays = jsonObject.gameplaybyplay.plays.play;
        var plays = new Array();
        allPlays.forEach(function (play) {
            plays.push(play);
        });
        return plays;
    };
    RegularSeasonPlays2017Service.prototype.getPlaysFromLocal = function (gameid) {
        var jsonObject = JSON.parse(localStorage.getItem(gameid));
        var allPlays = jsonObject.gameplaybyplay.plays.play;
        var plays = new Array();
        allPlays.forEach(function (play) {
            plays.push(play);
        });
        return plays;
    };
    RegularSeasonPlays2017Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegularSeasonPlays2017Service);
    return RegularSeasonPlays2017Service;
}());



/***/ }),

/***/ "./src/app/model/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Team_data__ = __webpack_require__("./src/app/model/Team-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamService = /** @class */ (function () {
    function TeamService() {
    }
    TeamService.prototype.getTeams = function () {
        return __WEBPACK_IMPORTED_MODULE_1__Team_data__["a" /* TEAMS */];
    };
    TeamService.prototype.getTeam = function (id) {
        // console.log('getTeam ' + id);
        var teams = this.getTeams();
        var team = teams.find(function (t) { return t.ID == id; });
        return Object.assign({}, team);
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
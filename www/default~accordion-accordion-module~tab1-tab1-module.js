(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~accordion-accordion-module~tab1-tab1-module"],{

/***/ "6CKH":
/*!*********************************************!*\
  !*** ./src/app/accordion/accordion.page.ts ***!
  \*********************************************/
/*! exports provided: AccordionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPage", function() { return AccordionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_accordion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./accordion.page.html */ "tfbX");
/* harmony import */ var _accordion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.page.scss */ "f27T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");






let AccordionPage = class AccordionPage {
    constructor(storage, modalCtrl) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.shownGroup = null;
        this.menuLevel1 = null;
        this.menuLevel2 = null;
        this.menuLevel3 = null;
        this.eventSource = [];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.storage.get('toDos').then(data => {
            console.log('data', data);
            this.eventSource = data;
        });
    }
    ngOnInit() {
        this.storage.get('toDos').then(data => {
            console.log('data', data);
            this.eventSource = data;
        });
    }
    levelNav1(navX) {
        if (this.isNav1Displayed(navX)) {
            this.menuLevel1 = null;
        }
        else {
            this.menuLevel1 = navX;
        }
    }
    isNav1Displayed(navX) {
        return this.menuLevel1 === navX;
    }
    levelNav2(navX) {
        if (this.isNav2Displayed(navX)) {
            this.menuLevel2 = null;
        }
        else {
            this.menuLevel1 = navX;
            this.menuLevel2 = navX;
        }
    }
    isNav2Displayed(navX) {
        return this.menuLevel2 === navX;
    }
    levelNav3(navX) {
        if (this.isNav3Displayed(navX)) {
            this.menuLevel3 = null;
        }
        else {
            this.menuLevel2 = navX;
            this.menuLevel3 = navX;
        }
    }
    isNav3Displayed(navX) {
        return this.menuLevel3 === navX;
    }
    clearAccordionNav() {
        this.menuLevel1 = null;
        this.menuLevel2 = null;
        this.menuLevel3 = null;
    }
    getDays(month) {
        var date = new Date(2021, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date).getDate());
            date.setDate(date.getDate() + 1);
        }
        //const getDaysInMonth = (month, 2021) => (new Array(31)).fill('').map((v,i)=>new Date(2021,month-1,i+1)).filter(v=>v.getMonth()===month-1);
        console.log(days);
        return days;
    }
    getEvents(month, day) {
        console.log('event source:', this.eventSource);
        var date = new Date(2021, month, day);
        console.log('day:', date);
        const currentEvents = this.eventSource.filter(obj => {
            //console.log('obj.endTime',this.convert(obj.endTime));
            return this.convert(obj.endTime) == this.convert(date);
        });
        return currentEvents;
    }
    convert(str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
AccordionPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AccordionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-accordion',
        template: _raw_loader_accordion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accordion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccordionPage);



/***/ }),

/***/ "f27T":
/*!***********************************************!*\
  !*** ./src/app/accordion/accordion.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.list .item.item-accordion {\n  line-height: 38px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: 0.09s all linear;\n}\n.list .item.item-accordion.ng-hide {\n  line-height: 0px;\n}\n.list .item.item-accordion.ng-hide-add,\n.list .item.item-accordion.ng-hide-remove {\n  display: block !important;\n}\n.accordion {\n  width: 100%;\n  max-width: 360px;\n  margin: auto;\n  background: #fff;\n  border-radius: 4px;\n}\n.accordion .menu {\n  position: relative;\n  padding: 15px 15px 15px 45px;\n  color: #4d4d4d;\n  font-weight: bold;\n  border-bottom: 1px solid #ccc;\n  cursor: pointer;\n  transition: all 0.4s ease;\n}\n.accordion li:last-child .menu {\n  border-bottom: 0;\n}\n.accordion li i {\n  position: absolute;\n  top: 1.2rem;\n  left: 1rem;\n  color: #595959;\n  transition: all 0.4s ease;\n}\n.accordion li i.fa-chevron-down {\n  right: 1rem;\n  left: auto;\n}\n.accordion li.active i.fa-chevron-down {\n  transform: rotate(180deg);\n}\n.accordion li.active .menu {\n  color: #b63b4d;\n}\n.accordion li.active i {\n  color: #b63b4d;\n}\n/* Show submenu */\n.accordion li.active .submenu {\n  /*\n    height: 0 -> height: auto;는 transition이 동작하지 않는다.\n    max-height: 임의의 높이;를 지정하면 transition이 동작하지만 타이밍이 망가진다.\n    max-height: 1000px;과 max-height: 133px;을 비교해 보라!\n    height를 1000px으로 transition할 시간에 실제로는 133px정도만 transition하므로 여는 시간이 닫는 시간보다 빠르다.\n  */\n  /* max-height: 1000px; */\n  /* max-height: 133px; */\n}\n.submenu {\n  height: 0;\n  overflow: hidden;\n  background: #444359;\n  font-size: 14px;\n  transition: height 0.4s ease;\n}\n.submenu li {\n  border-bottom: 1px solid #4b4a5e;\n}\n.accordion li:last-child .submenu {\n  border-radius: 0 0 4px 4px;\n}\n.accordion li:last-child .submenu li:last-child {\n  border-bottom: 0;\n}\n.submenu a {\n  display: block;\n  text-decoration: none;\n  color: #d9d9d9;\n  padding: 12px;\n  padding-left: 42px;\n  transition: all 0.25s ease-in-out;\n}\n.submenu a:hover {\n  background: #b63b4d;\n  color: #fff;\n}\n.nav1,\n.nav2,\n.nav3 {\n  list-style: none;\n  padding: 10px;\n}\n.nav1 li,\n.nav2 li,\n.nav3 li {\n  padding: 10px 0 10px 10px;\n  border-top: solid 1px #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjY29yZGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQ0E7RUFDRSxnQkFBQTtBQUVGO0FBQUE7O0VBRUUseUJBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJRjtBQURBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSUY7QUFEQTtFQUNFLGdCQUFBO0FBSUY7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFJRjtBQURBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFJRjtBQURBO0VBQ0UseUJBQUE7QUFJRjtBQURBO0VBQ0UsY0FBQTtBQUlGO0FBREE7RUFDRSxjQUFBO0FBSUY7QUFEQSxpQkFBQTtBQUNBO0VBQ0U7Ozs7O0dBQUE7RUFNQSx3QkFBQTtFQUNBLHVCQUFBO0FBSUY7QUFEQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBSUY7QUFEQTtFQUNFLGdDQUFBO0FBSUY7QUFEQTtFQUNFLDBCQUFBO0FBSUY7QUFEQTtFQUNFLGdCQUFBO0FBSUY7QUFEQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUlGO0FBREE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFJRjtBQUZBOzs7RUFHRSxnQkFBQTtFQUNBLGFBQUE7QUFLRjtBQUpFOzs7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBUU4iLCJmaWxlIjoiYWNjb3JkaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uIHtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogMC4wOXMgYWxsIGxpbmVhcjtcbn1cblxuLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ubmctaGlkZSB7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uLm5nLWhpZGUtYWRkLFxuLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ubmctaGlkZS1yZW1vdmUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYWNjb3JkaW9uIC5tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA0NXB4O1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG59XG5cbi5hY2NvcmRpb24gbGk6bGFzdC1jaGlsZCAubWVudSB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5hY2NvcmRpb24gbGkgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjJyZW07XG4gIGxlZnQ6IDFyZW07XG4gIGNvbG9yOiAjNTk1OTU5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuXG4uYWNjb3JkaW9uIGxpIGkuZmEtY2hldnJvbi1kb3duIHtcbiAgcmlnaHQ6IDFyZW07XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5hY2NvcmRpb24gbGkuYWN0aXZlIGkuZmEtY2hldnJvbi1kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmFjY29yZGlvbiBsaS5hY3RpdmUgLm1lbnUge1xuICBjb2xvcjogI2I2M2I0ZDtcbn1cblxuLmFjY29yZGlvbiBsaS5hY3RpdmUgaSB7XG4gIGNvbG9yOiAjYjYzYjRkO1xufVxuXG4vKiBTaG93IHN1Ym1lbnUgKi9cbi5hY2NvcmRpb24gbGkuYWN0aXZlIC5zdWJtZW51IHtcbiAgLypcbiAgICBoZWlnaHQ6IDAgLT4gaGVpZ2h0OiBhdXRvO+uKlCB0cmFuc2l0aW9u7J20IOuPmeyeke2VmOyngCDslYrripTri6QuXG4gICAgbWF4LWhlaWdodDog7J6E7J2Y7J2YIOuGkuydtDvrpbwg7KeA7KCV7ZWY66m0IHRyYW5zaXRpb27snbQg64+Z7J6R7ZWY7KeA66eMIO2DgOydtOuwjeydtCDrp53qsIDsp4Tri6QuXG4gICAgbWF4LWhlaWdodDogMTAwMHB4O+qzvCBtYXgtaGVpZ2h0OiAxMzNweDvsnYQg67mE6rWQ7ZW0IOuztOudvCFcbiAgICBoZWlnaHTrpbwgMTAwMHB47Jy866GcIHRyYW5zaXRpb27tlaAg7Iuc6rCE7JeQIOyLpOygnOuhnOuKlCAxMzNweOygleuPhOunjCB0cmFuc2l0aW9u7ZWY66+A66GcIOyXrOuKlCDsi5zqsITsnbQg64ur64qUIOyLnOqwhOuztOuLpCDruaDrpbTri6QuXG4gICovXG4gIC8qIG1heC1oZWlnaHQ6IDEwMDBweDsgKi9cbiAgLyogbWF4LWhlaWdodDogMTMzcHg7ICovXG59XG5cbi5zdWJtZW51IHtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjNDQ0MzU5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjRzIGVhc2U7XG59XG5cbi5zdWJtZW51IGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRhNWU7XG59XG5cbi5hY2NvcmRpb24gbGk6bGFzdC1jaGlsZCAuc3VibWVudSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xufVxuXG4uYWNjb3JkaW9uIGxpOmxhc3QtY2hpbGQgLnN1Ym1lbnUgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5zdWJtZW51IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgcGFkZGluZzogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiA0MnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zdWJtZW51IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjYzYjRkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdjEsXG4ubmF2Mixcbi5uYXYzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5uYXYxIGxpLFxuLm5hdjIgbGksXG4ubmF2MyBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDEwcHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjY2NjO1xufSJdfQ== */");

/***/ }),

/***/ "pvM+":
/*!***********************************************!*\
  !*** ./src/app/accordion/accordion.module.ts ***!
  \***********************************************/
/*! exports provided: AccordionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPageModule", function() { return AccordionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _accordion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion-routing.module */ "t8F7");
/* harmony import */ var _accordion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accordion.page */ "6CKH");







let AccordionPageModule = class AccordionPageModule {
};
AccordionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _accordion_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccordionPageRoutingModule"]
        ],
        declarations: [_accordion_page__WEBPACK_IMPORTED_MODULE_6__["AccordionPage"]]
    })
], AccordionPageModule);



/***/ }),

/***/ "t8F7":
/*!*******************************************************!*\
  !*** ./src/app/accordion/accordion-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AccordionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPageRoutingModule", function() { return AccordionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _accordion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.page */ "6CKH");




const routes = [
    {
        path: '',
        component: _accordion_page__WEBPACK_IMPORTED_MODULE_3__["AccordionPage"]
    }
];
let AccordionPageRoutingModule = class AccordionPageRoutingModule {
};
AccordionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccordionPageRoutingModule);



/***/ }),

/***/ "tfbX":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"close()\">\n      <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title>Events</ion-title>\n\n</ion-toolbar>\n<ion-content>\n  <!-- <ion-list>\n    <ion-item *ngFor=\"let month of months;let i=index;\" (click)=\"toggleGroup(i)\" class=\"item-stable\" [ngClass]=\"{active: isGroupShown(i)}\">\n      <h3>\n        {{month}}\n        <ion-icon color=\"success\" item-right [name]=\"isGroupShown(i) ? 'arrow-dropdown' : 'arrow-dropright'\"></ion-icon>\n      </h3>\n      <div *ngIf=\"isGroupShown(i)\">\n        <ion-item *ngFor=\"let month of months;let j=index;\" (click)=\"toggleSubGroup(j)\" class=\"item-accordion\">\n          <h3>\n            {{month}}\n            <ion-icon color=\"success\" item-right [name]=\"isGroupSubShown(j) ? 'arrow-dropdown' : 'arrow-dropright'\"></ion-icon>\n          </h3>\n          <div *ngIf=\"isGroupSubShown(j)\">\n            <div *ngFor=\"let month of months\" class=\"item-accordion\">\n              {{month}}\n            </div>\n          </div>\n        </ion-item>\n\n      </div>\n    </ion-item>\n  </ion-list> -->\n  <!-- <div *ngFor=\"let month of months\">\n    {{month}}\n  </div> -->\n  <ion-list lines=\"full\">\n\n    <ion-menu-toggle auto-hide=\"false\" class=\"first-menu\"></ion-menu-toggle>\n\n    <ion-item *ngFor=\"let p of months; let i=index;\" (click)=\"levelNav1('navX'+i)\" [ngClass]=\"{active: isNav1Displayed('navX'+i)}\">\n      <ion-label>\n        <ion-icon [name]=\"isNav1Displayed('navX'+i) ? 'chevron-down-outline' : 'chevron-forward-outline'\" slot=\"end\"></ion-icon>\n        {{p}}\n        <ul *ngIf=\"isNav1Displayed('navX'+i)\" class=\"nav1\">\n          <li *ngFor=\"let i1 of getDays(i); let j=index;\" (click)=\"levelNav2('navX'+i+'navX'+j)\" [ngClass]=\"{active: isNav2Displayed('navX'+i+'navX'+j)}\">\n              <ion-icon [name]=\"isNav2Displayed('navX'+i+'navX'+j) ? 'chevron-down-outline' : 'chevron-forward-outline'\" slot=\"end\"></ion-icon>\n            {{i1}}\n            <ul *ngIf=\"isNav2Displayed('navX'+i+'navX'+j)\" class=\"nav2\">\n\n              <li *ngFor=\"let toDo of getEvents(i,i1); let k=index;\" (click)=\"levelNav3('navX'+i+'navX'+j+'navX'+k)\" [ngClass]=\"{active: isNav3Displayed('navX'+i+'navX'+j+'navX'+k)}\">\n\n                <!-- {{i2.title}} -->\n                <ion-label>\n                  <h3>{{toDo.title}}</h3>\n                  <p>{{toDo.desc}} <br> {{toDo.startTime}} to {{toDo.endTime}}</p>\n                </ion-label>\n                <!-- <ul *ngIf=\"isNav3Displayed('navX'+i+'navX'+j+'navX'+k)\" class=\"nav3\">\n                  <li *ngFor=\"let i3 of i2.nav; let l=index;\" [routerLink]=\"[i3.url]\">\n                    <ion-menu-toggle auto-hide=\"false\" class=\"first-menu\">{{i3.name}}</ion-menu-toggle>\n                  </li>\n                </ul> -->\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default~accordion-accordion-module~tab1-tab1-module.js.map
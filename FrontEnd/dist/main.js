(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact-page/add-contact-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact-page/add-contact-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\"\n    integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\" />\n<div class=\"container-fluid\" style=\" height: 100vh;\nbackground-image: linear-gradient(to right, #000000, #0f0c0e, #181518, #1e1c21, #24242a, #272a31, #293038, #2b373f, #2b3d44, #2b4348, #2c484b, #2f4e4c);\n\">\n\n    <div class=\"row\">\n\n        <div class=\"col-8 heading lbl\">\n            <h2 style=\"font-weight: bold; margin: auto !important;\">Add Contact</h2>\n        </div>\n\n    </div>\n    <div class=\"card card-3\"\n        style=\"background-image: radial-gradient(circle, #0e1616, #151d1e, #1b2326, #222a2e, #2a3136, #2d363d, #313c44, #34414b, #304751, #2b4d55, #265357, #255956);\">\n        <div class=\"card-heading\"></div>\n        <div class=\"card-body\">\n            <!-- <h2 class=\"title\">Annual Bill</h2> -->\n            <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"lbl\">First Name</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"firstName\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Last Name</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"lastName\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Address</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"address\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Email</label>\n                    <input class=\"form-control\" type=\"email\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"email\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Contact Number</label>\n                    <input class=\"form-control\" type=\"tel\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"phone\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Contact Type</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"phonetype\" />\n                </div>\n\n\n                <div class=\"p-t-10\">\n                    <button class=\"btn btn-outline-success btn-round\" style=\"font-size: large; font-weight: bold;\"\n                        [disabled]=\"!contactForm.valid\" type=\"submit\">\n                        Save\n                    </button>\n                    <button class=\"btn btn-outline-success btn-round\" style=\"font-size: large; font-weight: bold; float: right;\"\n                        (click)=\"navBack()\" type=\"submit\">\n                        Cancel\n                    </button>\n                </div>\n            </form>\n            <br />\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-list-page/contact-list-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-list-page/contact-list-page.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\" height: 100vh;\nbackground-image: radial-gradient(circle, #0e1616, #151d1e, #1b2326, #222a2e, #2a3136, #2d363d, #313c44, #34414b, #304751, #2b4d55, #265357, #255956);\n\">\n<h1 class=\"headClass\">CONTACTS</h1>\n<br>\n<div *ngFor=\"let ann of allSavingGoal\" class=\"col-md-12\">\n    <div class=\"card\" style=\"background-image: linear-gradient(to right, #000000, #0f0c0e, #181518, #1e1c21, #24242a, #272a31, #293038, #2b373f, #2b3d44, #2b4348, #2c484b, #2f4e4c);\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-8 textColor\" >\n                    <h5 class=\"card-title gradPatch\" [routerLink]=\"['/editContact', ann.id]\">\n                        {{ann.fullName}}\n                    </h5>\n                    <h6>\n                        {{ann.phone}} || {{ann.phonetype}} || {{ann.address}} ||\n\n                    </h6>\n                </div>\n                <div class=\"col-2\">\n\n                </div>\n\n                <div class=\"col-2\">\n                    <button id=\"imgBtn\" (click)=\"toggleDelete(ann.id)\"\n                        onclick=\"document.getElementById('id01').style.display='block'\" type=\"button\"\n                        class=\"btn btn-info btn-just-icon\">\n                        <i class=\"fa fa-trash\" id='danger' aria-hidden=\"true\"></i>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"id01\" class=\"modal\">\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\n    <form class=\"modal-content\">\n        <div class=\"container\">\n            <h1>Delete Contact ?</h1>\n            <p>Are you sure you want to delete your contact?</p>\n\n            <div class=\"clearfix\">\n                <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\"\n                    class=\"btn btn-primary\" (click)=\"toggle()\">Cancel</button>\n                <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\"\n                    class=\"btn btn-danger blacktone\" (click)=\"deleteDocument()\">Delete</button>\n            </div>\n            <br>\n\n        </div>\n    </form>\n</div>\n\n<button type=\"button\" class=\"btn btn-outline-success btn-round\" style=\"font-size: large; font-weight: bold; margin:auto; display:block;\" (click)=\"AddContact()\">Add Contact</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-contact-page/edit-contact-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-contact-page/edit-contact-page.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\"\n    integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\" />\n    <div class=\"container-fluid\" style=\" height: 100vh;\n    background-image: linear-gradient(to right, #000000, #0f0c0e, #181518, #1e1c21, #24242a, #272a31, #293038, #2b373f, #2b3d44, #2b4348, #2c484b, #2f4e4c);\n    \">\n\n    <div class=\"row \">\n     \n        <div class=\"col-8 heading lbl\">\n            <h2 style=\"font-weight: bold; margin: auto !important;\">EDIT CONTACT</h2>\n        </div>\n     \n    </div>\n    <div class=\"card card-3\" style=\"background-image: radial-gradient(circle, #0e1616, #151d1e, #1b2326, #222a2e, #2a3136, #2d363d, #313c44, #34414b, #304751, #2b4d55, #265357, #255956);\">\n\n        <div class=\"card-heading\"></div>\n        <div class=\"card-body\" >\n            <!-- <h2 class=\"title\">Annual Bill</h2> -->\n            <form [formGroup]=\"editcontactForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"lbl\">First Name</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"firstName\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Last Name</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"lastName\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Address</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"address\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Email</label>\n                    <input class=\"form-control\" type=\"email\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"email\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Contact Number</label>\n                    <input class=\"form-control\" type=\"tel\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"phone\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"lbl\">Contact Type</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Here\" name=\"name\"\n                        formControlName=\"phonetype\" />\n                </div>\n\n\n                <div class=\"p-t-10\">\n                    <button class=\"btn btn-outline-success btn-round\" style=\"font-size: large; font-weight: bold;\" [disabled]=\"!editcontactForm.valid\" type=\"submit\">\n                        Save\n                    </button>\n                    <button class=\"btn btn-outline-success btn-round\" style=\"font-size: large; font-weight: bold; float: right;\" (click)=\"navBack()\" type=\"submit\">\n                        Cancel\n                    </button>\n                </div>\n            </form>\n            <br />\n           \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\" height: 100vh;\n background-image: url('../../assets/img/antoine-barres.jpg');\">\n\n    <p style=\"margin-top: auto; font-size: 5rem; font-weight: bold; color: white;\">Contact App</p>\n    <div id=\"wrapper\" >\n        <button type=\"button\" class=\"btn btn-info btn-round t1\"  (click)=\"navContactPage()\">\n            <i class=\"fa fa-heart\"></i> Let's Go</button>\n    </div>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-info-page/project-info-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-info-page/project-info-page.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>project-info-page works!</p>\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"navLandingPage()\">Regular</button>\n");

/***/ }),

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

/***/ "./src/app/add-contact-page/add-contact-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/add-contact-page/add-contact-page.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lbl{\n    color: white;\n    font-size: large;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRhY3QtcGFnZS9hZGQtY29udGFjdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jb250YWN0LXBhZ2UvYWRkLWNvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxibHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-contact-page/add-contact-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-contact-page/add-contact-page.component.ts ***!
  \****************************************************************/
/*! exports provided: AddContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactPageComponent", function() { return AddContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! providers/authentication.service */ "./src/providers/authentication.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var Toast = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Toast;
var AddContactPageComponent = /** @class */ (function () {
    function AddContactPageComponent(_authService, formBuilder, modalService, router) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.router = router;
        this.formData = new FormData();
    }
    AddContactPageComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonetype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    Object.defineProperty(AddContactPageComponent.prototype, "f", {
        get: function () { return this.contactForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddContactPageComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var register;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.contactForm.invalid) {
                            return [2 /*return*/];
                        }
                        register = {
                            firstName: this.f.firstName.value,
                            lastName: this.f.lastName.value,
                            email: this.f.email.value,
                            address: this.f.address.value,
                            phone: this.f.phone.value,
                            phonetype: this.f.phonetype.value,
                        };
                        return [4 /*yield*/, this._authService.registerContact(register)
                                .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('response.token', response);
                                            console.log('created sucessfully');
                                            return [4 /*yield*/, Toast.show({
                                                    text: 'Outgoing Created!'
                                                })];
                                        case 1:
                                            _a.sent();
                                            this.router.navigate(['/contactlist']);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('Error in creating project');
                                            return [4 /*yield*/, Toast.show({
                                                    text: 'Something Went Wrong!'
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddContactPageComponent.prototype.navBack = function () {
        this.router.navigateByUrl('contactlist');
    };
    AddContactPageComponent.ctorParameters = function () { return [
        { type: providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddContactPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contact-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-contact-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact-page/add-contact-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-contact-page.component.css */ "./src/app/add-contact-page/add-contact-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddContactPageComponent);
    return AddContactPageComponent;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-list-page/contact-list-page.component */ "./src/app/contact-list-page/contact-list-page.component.ts");
/* harmony import */ var _add_contact_page_add_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-contact-page/add-contact-page.component */ "./src/app/add-contact-page/add-contact-page.component.ts");
/* harmony import */ var _project_info_page_project_info_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project-info-page/project-info-page.component */ "./src/app/project-info-page/project-info-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _edit_contact_page_edit_contact_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-contact-page/edit-contact-page.component */ "./src/app/edit-contact-page/edit-contact-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_8__["ContactListPageComponent"],
                _add_contact_page_add_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["AddContactPageComponent"],
                _project_info_page_project_info_page_component__WEBPACK_IMPORTED_MODULE_10__["ProjectInfoPageComponent"],
                _edit_contact_page_edit_contact_page_component__WEBPACK_IMPORTED_MODULE_12__["EditContactPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-list-page/contact-list-page.component */ "./src/app/contact-list-page/contact-list-page.component.ts");
/* harmony import */ var _add_contact_page_add_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-contact-page/add-contact-page.component */ "./src/app/add-contact-page/add-contact-page.component.ts");
/* harmony import */ var _project_info_page_project_info_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-info-page/project-info-page.component */ "./src/app/project-info-page/project-info-page.component.ts");
/* harmony import */ var _edit_contact_page_edit_contact_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-contact-page/edit-contact-page.component */ "./src/app/edit-contact-page/edit-contact-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: 'contactlist', component: _contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactListPageComponent"] },
    { path: 'addcontact', component: _add_contact_page_add_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["AddContactPageComponent"] },
    { path: 'infopage', component: _project_info_page_project_info_page_component__WEBPACK_IMPORTED_MODULE_7__["ProjectInfoPageComponent"] },
    {
        path: 'editContact/:outId',
        component: _edit_contact_page_edit_contact_page_component__WEBPACK_IMPORTED_MODULE_8__["EditContactPageComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/contact-list-page/contact-list-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/contact-list-page/contact-list-page.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textColor{\n  color: white;\n}\n.gradPatch{\ncolor: white;\nfont-weight: bold;\n}\n.headClass{\n  margin-top: 0 !important; \ncolor: white;\nfont-weight: bold;\n}\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgba(0, 0, 0, 0.5);\n    padding-top: 50px;\n  }\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n/* Style the horizontal ruler */\nhr {\n    border: 1px solid #f1f1f1;\n    margin-bottom: 25px;\n  }\n/* The Modal Close Button (x) */\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    font-size: 40px;\n    font-weight: bold;\n    color: #f1f1f1;\n  }\n.close:hover,\n  .close:focus {\n    color: #f44336;\n    cursor: pointer;\n  }\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n.blacktone{\n      background-color: black;\n      border: 1px solid black;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1saXN0LXBhZ2UvY29udGFjdC1saXN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCLFlBQVk7QUFDWixpQkFBaUI7QUFDakI7QUFDQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1QyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0VBQ25CO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QixFQUFFLHNEQUFzRDtJQUNoRixzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtFQUNsRTtBQUVBLCtCQUErQjtBQUMvQjtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7QUFFQSwrQkFBK0I7QUFDL0I7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFFQTs7SUFFRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjtBQUNBO01BQ0ksdUJBQXVCO01BQ3ZCLHVCQUF1QjtJQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtbGlzdC1wYWdlL2NvbnRhY3QtbGlzdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dENvbG9ye1xuICBjb2xvcjogd2hpdGU7XG59XG4uZ3JhZFBhdGNoe1xuY29sb3I6IHdoaXRlO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZENsYXNze1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7IFxuY29sb3I6IHdoaXRlO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxuICBcbiAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xuICBociB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gICBcbiAgLyogVGhlIE1vZGFsIENsb3NlIEJ1dHRvbiAoeCkgKi9cbiAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM1cHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2YxZjFmMTtcbiAgfVxuICBcbiAgLmNsb3NlOmhvdmVyLFxuICAuY2xvc2U6Zm9jdXMge1xuICAgIGNvbG9yOiAjZjQ0MzM2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLyogQ2xlYXIgZmxvYXRzICovXG4gIC5jbGVhcmZpeDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgLmJsYWNrdG9uZXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/contact-list-page/contact-list-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/contact-list-page/contact-list-page.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPageComponent", function() { return ContactListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! providers/authentication.service */ "./src/providers/authentication.service.ts");
/* harmony import */ var providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var Toast = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Toast;
var ContactListPageComponent = /** @class */ (function () {
    function ContactListPageComponent(_authService, router, configService) {
        this._authService = _authService;
        this.router = router;
        this.configService = configService;
        this.displayImage = false;
        this.showDialog = false;
        this.goalToDelete = '';
        this.userId = '';
        this.noDocuments = false;
        this.allSavingGoal = [];
    }
    ContactListPageComponent.prototype.ngOnInit = function () {
        this.getAllContact();
    };
    ContactListPageComponent.prototype.getAllContact = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.savingGoal = [];
                        this.allSavingGoal = [];
                        return [4 /*yield*/, this._authService.getAllContacts()
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (newData) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    // if (!newData) {
                                    console.log('newData', newData);
                                    //   this.noDocuments = true;
                                    // } else {
                                    // this.noDocuments = false;
                                    this.savingGoalData = newData;
                                    this.savingGoalData.forEach(function (i) {
                                        _this.allSavingGoal.push({
                                            id: i.id,
                                            firstName: i.firstName,
                                            lastName: i.lastName,
                                            address: i.address,
                                            fullName: i.fullName,
                                            phone: i.phone,
                                            phonetype: i.phonetype,
                                        });
                                        console.log('this.allDocuments', _this.allSavingGoal);
                                    });
                                    return [2 /*return*/];
                                });
                            }); }, function (err) {
                                console.log('error');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactListPageComponent.prototype.AddContact = function () {
        this.router.navigateByUrl('addcontact');
    };
    ContactListPageComponent.prototype.toggleDelete = function (id) {
        this.showDialog = true;
        this.idToDelete = id;
    };
    ContactListPageComponent.prototype.deleteDocument = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._authService.deleteContact(this.idToDelete).subscribe(function (newData) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // this.toggle();
                            return [4 /*yield*/, Toast.show({
                                    text: 'Contact Deleted!'
                                })];
                            case 1:
                                // this.toggle();
                                _a.sent();
                                this.showDialog = false;
                                this.getAllContact();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log('error');
                });
                return [2 /*return*/];
            });
        });
    };
    ContactListPageComponent.ctorParameters = function () { return [
        { type: providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ContactListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contact-list-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-list-page/contact-list-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contact-list-page.component.css */ "./src/app/contact-list-page/contact-list-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ContactListPageComponent);
    return ContactListPageComponent;
}());



/***/ }),

/***/ "./src/app/edit-contact-page/edit-contact-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/edit-contact-page/edit-contact-page.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back1{\n  background-image: linear-gradient(to right, #000000, #0f0c0e, #181518, #1e1c21, #24242a, #272a31, #293038, #2b373f, #2b3d44, #2b4348, #2c484b, #2f4e4c);\n}\n.lbl{\n  color: white;\n  font-size: large;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1jb250YWN0LXBhZ2UvZWRpdC1jb250YWN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVKQUF1SjtBQUN6SjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWNvbnRhY3QtcGFnZS9lZGl0LWNvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sxe1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDAsICMwZjBjMGUsICMxODE1MTgsICMxZTFjMjEsICMyNDI0MmEsICMyNzJhMzEsICMyOTMwMzgsICMyYjM3M2YsICMyYjNkNDQsICMyYjQzNDgsICMyYzQ4NGIsICMyZjRlNGMpO1xufVxuLmxibHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit-contact-page/edit-contact-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/edit-contact-page/edit-contact-page.component.ts ***!
  \******************************************************************/
/*! exports provided: EditContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactPageComponent", function() { return EditContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var providers_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! providers/authentication.service */ "./src/providers/authentication.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var Toast = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Toast;
var EditContactPageComponent = /** @class */ (function () {
    function EditContactPageComponent(_authService, formBuilder, router, activatedRoute) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formData = new FormData();
    }
    EditContactPageComponent.prototype.ngOnInit = function () {
        this.editcontactForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonetype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.selectedContactId = this.activatedRoute.snapshot.paramMap.get('outId');
        console.log('this.selectedContactId', this.selectedContactId);
        this.getSelectedSavingGoal();
    };
    EditContactPageComponent.prototype.getSelectedSavingGoal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._authService.getSelectedContact(this.selectedContactId)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (newData) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log('newData in getsaving', newData);
                                this.editcontactForm.setValue({
                                    firstName: newData.firstName,
                                    lastName: newData.lastName,
                                    email: newData.email,
                                    address: newData.address,
                                    phone: newData.phone,
                                    phonetype: newData.phonetype,
                                });
                                return [2 /*return*/];
                            });
                        }); }, function (err) {
                            console.log('Error !');
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(EditContactPageComponent.prototype, "f", {
        get: function () { return this.editcontactForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditContactPageComponent.prototype.navBack = function () {
        this.router.navigateByUrl('contactlist');
    };
    EditContactPageComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        formData = {
                            firstName: this.f.firstName.value,
                            lastName: this.f.lastName.value,
                            email: this.f.email.value,
                            address: this.f.address.value,
                            phone: this.f.phone.value,
                            phonetype: this.f.phonetype.value,
                        };
                        return [4 /*yield*/, this._authService.editContact(this.selectedContactId, formData)
                                .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Toast.show({
                                                text: 'Saving Updated!'
                                            })];
                                        case 1:
                                            _a.sent();
                                            this.router.navigateByUrl('landing');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('Error in creating expense');
                                            return [4 /*yield*/, Toast.show({
                                                    text: 'Error !'
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditContactPageComponent.ctorParameters = function () { return [
        { type: providers_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    EditContactPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-contact-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-contact-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-contact-page/edit-contact-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-contact-page.component.css */ "./src/app/edit-contact-page/edit-contact-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [providers_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditContactPageComponent);
    return EditContactPageComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-background {\n   \n    display: block;\n    height: 100vh;\n    width: auto;\n  }\n\n  #wrapper{\n    width:100%; height:50%; }\n\n  .t1{\n    position:relative; margin: -20px -50px; width:100px; top:50%; left:50%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVSxFQUFFLFVBQVUsRUFBRTs7RUFDMUI7SUFDRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFFBQVE7RUFDeEUiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWJhY2tncm91bmQge1xuICAgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICN3cmFwcGVye1xuICAgIHdpZHRoOjEwMCU7IGhlaWdodDo1MCU7IH1cbiAgLnQxe1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46IC0yMHB4IC01MHB4OyB3aWR0aDoxMDBweDsgdG9wOjUwJTsgbGVmdDo1MCU7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router) {
        this.router = router;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.navContactPage = function () {
        this.router.navigateByUrl('contactlist');
    };
    LandingPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/project-info-page/project-info-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/project-info-page/project-info-page.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtaW5mby1wYWdlL3Byb2plY3QtaW5mby1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/project-info-page/project-info-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/project-info-page/project-info-page.component.ts ***!
  \******************************************************************/
/*! exports provided: ProjectInfoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoPageComponent", function() { return ProjectInfoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProjectInfoPageComponent = /** @class */ (function () {
    function ProjectInfoPageComponent() {
    }
    ProjectInfoPageComponent.prototype.ngOnInit = function () {
    };
    ProjectInfoPageComponent.prototype.navLandingPage = function () { };
    ProjectInfoPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-info-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./project-info-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-info-page/project-info-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./project-info-page.component.css */ "./src/app/project-info-page/project-info-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectInfoPageComponent);
    return ProjectInfoPageComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "./src/providers/authentication.service.ts":
/*!*************************************************!*\
  !*** ./src/providers/authentication.service.ts ***!
  \*************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, _configService) {
        this.http = http;
        this._configService = _configService;
        this.authStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    AuthenticationService.prototype.registerContact = function (register) {
        console.log('register in auth', register);
        return this.http.post(this._configService.url + 'user/addContact', register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
        }));
    };
    AuthenticationService.prototype.editContact = function (id, contact) {
        return this.http.put(this._configService.url + 'user/editContactList/' + id, contact);
    };
    AuthenticationService.prototype.deleteContact = function (id) {
        return this.http.delete(this._configService.url + 'user/' + id);
    };
    AuthenticationService.prototype.getAllContacts = function () {
        return this.http.get(this._configService.url + 'user/getAllcontact/');
    };
    AuthenticationService.prototype.getSelectedContact = function (id) {
        return this.http.get(this._configService.url + 'user/getSelectedContact/' + id);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _config_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _config_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/providers/config/config.service.ts":
/*!************************************************!*\
  !*** ./src/providers/config/config.service.ts ***!
  \************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.filesurl = 'http://172.19.97.121:8080/'; // aashu LAN
        this.url = this.filesurl + 'v1/';
    }
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashutoshmishra/Desktop/FINALAPP/FrontEnd-Project-/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_recipe__ = __webpack_require__(277);

var RecipesService = (function () {
    function RecipesService() {
        this.recipes = [];
    }
    RecipesService.prototype.addRecipe = function (title, description, difficulty, ingredients) {
        this.recipes.push(new __WEBPACK_IMPORTED_MODULE_0__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredients));
        console.log(this.recipes);
    };
    RecipesService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipesService.prototype.updateRecipes = function (index, title, description, difficulty, ingredients) {
        this.recipes[index] = new __WEBPACK_IMPORTED_MODULE_0__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredients);
    };
    RecipesService.prototype.removeRecipe = function (index) {
        this.recipes.splice(index, 1);
    };
    return RecipesService;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipes_recipes__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = (function () {
    function TabsPage() {
        this.slPage = __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list__["a" /* ShoppingListPage */];
        this.recipesPage = __WEBPACK_IMPORTED_MODULE_1__recipes_recipes__["a" /* RecipesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="slPage" tabIcon="list-box" tabTitle="Shopping List"></ion-tab>\n  <ion-tab [root]="recipesPage" tabIcon="book" tabTitle="Recipes"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_recipe__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipesPage = (function () {
    function RecipesPage(navCtrl, recipesService) {
        this.navCtrl = navCtrl;
        this.recipesService = recipesService;
    }
    RecipesPage.prototype.ionViewWillEnter = function () {
        this.recipes = this.recipesService.getRecipes();
    };
    RecipesPage.prototype.onNewRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'New' });
    };
    RecipesPage.prototype.onLoadRecipe = function (recipe, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_recipe__["a" /* RecipePage */], { recipe: recipe, index: index });
    };
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipes',template:/*ion-inline-start:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\recipes\recipes.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="onNewRecipe()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Recipes</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list>\n      <button ion-item *ngFor="let recipe of recipes; let i = index" (click)="onLoadRecipe(recipe, i)">\n        <h2> {{ recipe.title }} </h2>\n        <ion-note> {{ recipe.difficulty }} </ion-note>\n      </button>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\recipes\recipes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */]])
    ], RecipesPage);
    return RecipesPage;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recipes__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipePage = (function () {
    function RecipePage(navCtrl, navParams, slService, recipesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slService = slService;
        this.recipesService = recipesService;
    }
    RecipePage.prototype.ngOnInit = function () {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    };
    RecipePage.prototype.onEditRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'Edit', recipe: this.recipe, index: this.index });
    };
    RecipePage.prototype.onAddIngredients = function () {
        this.slService.addItems(this.recipe.ingredients);
    };
    RecipePage.prototype.onDeleteRecipe = function () {
        this.recipesService.removeRecipe(this.index);
        this.navCtrl.popToRoot();
    };
    RecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe',template:/*ion-inline-start:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\recipe\recipe.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> {{recipe.title}} </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <h2> {{recipe.title}} </h2>\n        <div class="subtitle"> {{recipe.difficulty}} </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <p> {{ recipe.description }} </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor="let ingredient of recipe.ingredients"> {{ ingredient.name }} </ion-item>\n          \n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="recipe.ingredients.length > 0">\n      <ion-col text-center>\n        <button ion-button clear (click)="onAddIngredients()">Add ingredients to shopping list</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button outline block (click)="onEditRecipe()">Edit recipe</button>\n        <button ion-button outline block (click)="onDeleteRecipe()" color="danger">Delete recipe</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\recipe\recipe.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shopping_list__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shopping_list__["a" /* ShoppingListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recipes__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_recipes__["a" /* RecipesService */]) === "function" && _d || Object])
    ], RecipePage);
    return RecipePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_list__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListPage = (function () {
    function ShoppingListPage(slService) {
        this.slService = slService;
    }
    ShoppingListPage.prototype.ionViewWillEnter = function () {
        this.loadItems();
    };
    ShoppingListPage.prototype.onAddItem = function (form) {
        this.slService.addItem(form.value.ingredientName, form.value.amount);
        form.reset();
        this.loadItems();
    };
    ShoppingListPage.prototype.onCheckItem = function (index) {
        this.slService.removeItem(index);
        this.loadItems();
    };
    ShoppingListPage.prototype.loadItems = function () {
        this.listItems = this.slService.getItems();
    };
    ShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\shopping-list\shopping-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Shopping List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onAddItem(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed >Name</ion-label>\n        <ion-input type="text" name="ingredientName" placeholder="Milk" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed >Amout</ion-label>\n        <ion-input type="number" name="amount" placeholder="2" ngModel required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" block [disabled]="!f.valid">Add Item</button>\n  </form>\n\n  <ion-list>\n    <ion-item *ngFor="let item of listItems; let i = index" (click)="onCheckItem(i)">\n      <h3 icon-right>{{ item.name }}  ( {{ item.amount }} )</h3>\n      \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\shopping-list\shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shopping_list__["a" /* ShoppingListService */]])
    ], ShoppingListPage);
    return ShoppingListPage;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ingredient__ = __webpack_require__(278);

var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredients = [];
    }
    ShoppingListService.prototype.addItem = function (name, amount) {
        this.ingredients.push(new __WEBPACK_IMPORTED_MODULE_0__models_ingredient__["a" /* Ingredient */](name, amount));
        console.log(this.ingredients);
    };
    ShoppingListService.prototype.addItems = function (items) {
        (_a = this.ingredients).push.apply(_a, items);
        var _a;
    };
    ShoppingListService.prototype.getItems = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.removeItem = function (index) {
        this.ingredients.splice(index, 1);
    };
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_recipe_edit_recipe__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shopping_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_recipes__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_shopping_list__["a" /* ShoppingListService */],
                __WEBPACK_IMPORTED_MODULE_12__services_recipes__["a" /* RecipesService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(title, description, difficulty, ingredients) {
        this.title = title;
        this.description = description;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=ingredient.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRecipePage = (function () {
    function EditRecipePage(navParams, actionSheetCtrl, alertCtrl, toastCtrl, recipesService, navCtrl) {
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.recipesService = recipesService;
        this.navCtrl = navCtrl;
        this.mode = 'New';
        this.selectOptions = ['Easy', 'Medium', 'Hard'];
    }
    EditRecipePage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        if (this.mode == 'Edit') {
            this.recipe = this.navParams.get('recipe');
            this.index = this.navParams.get('index');
        }
        this.initializeForm();
    };
    EditRecipePage.prototype.onSubmit = function () {
        var value = this.recipeForm.value;
        var ingredients = [];
        if (value.ingredients.length > 0) {
            ingredients = value.ingredients.map(function (name) {
                return { name: name, amount: 1 };
            });
        }
        if (this.mode == 'Edit') {
            this.recipesService.updateRecipes(this.index, value.title, value.description, value.difficulty, ingredients);
        }
        else {
            this.recipesService.addRecipe(value.title, value.description, value.difficulty, ingredients);
        }
        this.recipeForm.reset();
        this.navCtrl.popToRoot();
    };
    EditRecipePage.prototype.createNewIngredientAlert = function () {
        var _this = this;
        return this.alertCtrl.create({
            title: 'Add ingredient',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (data.name.trim() == '' || null) {
                            var toast_1 = _this.toastCtrl.create({
                                message: 'Please a valid value!',
                                duration: 1500,
                                position: 'bottom'
                            });
                            toast_1.present();
                            return;
                        }
                        _this.recipeForm.get('ingredients').push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](data.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
                        var toast = _this.toastCtrl.create({
                            message: 'Item added!',
                            duration: 1500,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }
            ]
        });
    };
    EditRecipePage.prototype.onManageIngredients = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Add Ingredient',
                    handler: function () {
                        _this.createNewIngredientAlert().present();
                    }
                },
                {
                    text: 'Remove all ingredients',
                    role: 'destructive',
                    handler: function () {
                        var fArray = _this.recipeForm.get('ingredients');
                        var len = fArray.length;
                        if (len > 0) {
                            for (var i = len - 1; i >= 0; i--) {
                                fArray.removeAt(i);
                            }
                            var toast = _this.toastCtrl.create({
                                message: 'All ingredients were deleted!',
                                duration: 1500,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    EditRecipePage.prototype.initializeForm = function () {
        var title = null;
        var description = null;
        var difficulty = 'Medium';
        var ingredients = [];
        if (this.mode == 'Edit') {
            title = this.recipe.title;
            description = this.recipe.description;
            difficulty = this.recipe.difficulty;
            for (var _i = 0, _a = this.recipe.ingredients; _i < _a.length; _i++) {
                var ingredient = _a[_i];
                ingredients.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](ingredient.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](title, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'difficulty': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](difficulty, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'ingredients': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */](ingredients)
        });
    };
    EditRecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-recipe',template:/*ion-inline-start:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\edit-recipe\edit-recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ mode }} Recipe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text" formControlName="title"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Difficulty</ion-label>\n        <ion-select formControlName="difficulty">\n          <ion-option *ngFor="let option of selectOptions" [value]="option" > {{ option }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button type="button" ion-button clear block (click)="onManageIngredients()">Manage ingredients</button>\n    <ion-list formArrayName="ingredients">\n      <ion-item *ngFor="let igControl of recipeForm.get(\'ingredients\').controls; let i = index">\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" [formControlName]="i"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button type="submit" ion-button block [disabled]="!recipeForm.valid">{{ mode }} Recipe</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucianodg\Desktop\Ionic - Angular\Recipes Books\Recipe-book\src\pages\edit-recipe\edit-recipe.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _f || Object])
    ], EditRecipePage);
    return EditRecipePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=edit-recipe.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map
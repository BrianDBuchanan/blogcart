'use strict';

angular
  .module('blogCartApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
       .when('/product', {
        templateUrl: 'views/tacoShop-list.html',
        controller: 'cartProductsCtrl'
      })
      .when('/newProduct', {
        templateUrl: 'views/Tacoshop-create.html',
        controller: 'theCartCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'views/tacoshop-detail.html',
        controller: 'theCartCtrl'
      })
      .when('/product/:id/edit', {
        templateUrl: 'views/tacoshop-editDetail.html',
        controller: 'theCartCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart-list.html',
        controller: 'theCartCtrl'
      })
      .when('/newCart', {
        templateUrl: 'views/cart-create.html',
        controller: 'theCartCtrl'
      })
      .when('/cart/:id', {
        templateUrl: 'views/cart-detail.html',
        controller: 'cartProductsCtrl'
      })
      .when('/cart/:id/edit', {
        templateUrl: 'views/cart-editDetail.html',
        controller: 'cartProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
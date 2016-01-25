'use strict';

/**
 * @ngdoc overview
 * @name youCookGoodApp
 * @description
 * # youCookGoodApp
 *
 * Main module of the application.
 */
angular
  .module('youCookGoodApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'RecipesCtrl',
        controllerAs: 'recipes'
      })
      .when('/add-recipe', {
        templateUrl: 'views/addRecipe.html',
        controller: 'AddRecipeCtrl',
        controllerAs: 'addRecipes'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

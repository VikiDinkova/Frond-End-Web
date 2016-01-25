'use strict';

/**
 * @ngdoc service
 * @name youCookGoodApp.recipeService
 * @description
 * # recipeService
 * Service in the youCookGoodApp.
 */
angular.module('youCookGoodApp')
  .service('recipeService', function ($http) {
    var service = {
      getRecipes     : getRecipes,
      addRecipe      : addRecipe,
      getRandomInt   : getRandomInt
    };

    return service;

    function addRecipe(data) {
      return $http.post('http://jsonplaceholder.typicode.com/posts', data)
        .then(function(response) {
          return response.data;
        });
    }
 
    function getRecipes() {
      return $http.get('/views/recipes.json')
        .then(function(response) {
          return response.data;
        });
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  });

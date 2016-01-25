'use strict';

/**
 * @ngdoc function
 * @name youCookGoodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the youCookGoodApp
 */
angular.module('youCookGoodApp')
  .controller('RecipesCtrl', function (recipeService) {
    var vm = this;

    recipeService.getRecipes()
      .then(function(response) {
        vm.recipes = response;
      })
  });

'use strict';

/**
 * @ngdoc function
 * @name youCookGoodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the youCookGoodApp
 */
angular.module('youCookGoodApp')
  .controller('MainCtrl', function (recipeService) {
    var vm = this;

    recipeService.getRecipes()
      .then(function(response) {
        var recipes = response;
        var randomNumber = recipeService.getRandomInt(0, recipes.length);
        vm.recipe = recipes[randomNumber];
      })
  });

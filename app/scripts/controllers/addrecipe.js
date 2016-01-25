'use strict';

/**
 * @ngdoc function
 * @name youCookGoodApp.controller:AddrecipeCtrl
 * @description
 * # AddrecipeCtrl
 * Controller of the youCookGoodApp
 */
angular.module('youCookGoodApp')
  .controller('AddRecipeCtrl', function (recipeService) {
    var vm = this;
    vm.newRecipe = {};

    vm.submit = function() {
      recipeService.addRecipe(vm.newRecipe)
      .then(function () {
        vm.newRecipe = {};
        vm.message = "Рецептата е изпратена към администратора!"
      })
    };
  });

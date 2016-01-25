'use strict';

describe('Controller: AddrecipeCtrl', function () {

  // load the controller's module
  beforeEach(module('youCookGoodApp'));

  var AddrecipeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddrecipeCtrl = $controller('AddrecipeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddrecipeCtrl.awesomeThings.length).toBe(3);
  });
});

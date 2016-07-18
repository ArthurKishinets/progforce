'use strict';

describe('Directive: myform', function () {

  // load the directive's module
  beforeEach(module('progforceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<myform></myform>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myform directive');
  }));
});

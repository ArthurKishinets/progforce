'use strict';

/**
 * @ngdoc directive
 * @name progforceApp.directive:myform
 * @description
 * # myform
 */
angular.module('progforceApp')
  .directive('myform', function () {
    return {
      templateUrl: '../../templates/form.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	var form = element.find('form');
      	scope.showPhoneError = false, scope.showEmailError = false;
      	console.log(scope.people);
      	console.log(scope.showPhoneError);
      	console.log(scope.showEmailError);
      	form.bind('submit', function(e) {

      		var isPhoneValid = checkIfValid(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, scope.person.phone);
      		var isEmailValid = checkIfValid(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, scope.person.email);

      		if ( isEmailValid && ( isPhoneValid || !scope.person.phone ) ) {
      			scope.addPerson(scope.person);
      			scope.showPhoneError = false;
      			scope.showEmailError = false;
      			scope.$apply();
      		} else {

      			( isPhoneValid || !scope.person.phone ) ? scope.showPhoneError = false : scope.showPhoneError = true;

      			isEmailValid ? scope.showEmailError = false : scope.showEmailError = true;
      			scope.$apply();
      		}
      	});
      	
        scope.addPerson = function(person) {
        	var newPerson = angular.copy(person);
        	scope.people.push(newPerson);
        	// clear inputs
        	for (var key in scope.person) {
        		scope.person[key] = null;
        	}
        	// update table
        	scope.$apply();
        }

        function checkIfValid(regexp, match) {
        	return regexp.test(match);
        };

      }
    };
  });

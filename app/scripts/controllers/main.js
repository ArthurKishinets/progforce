'use strict';

/**
 * @ngdoc function
 * @name progforceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the progforceApp
 */
angular.module('progforceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.people = [
      {
      	'name': 'ivan',
      	'surname': 'vasilyev',
      	'email': 'google@com.ua',
      	'phone': '0843513233234234',
      	'birth': '02.04.1992'
      },
      {
      	'name': 'igor',
      	'surname': 'ivanov',
      	'email': 'google@com.ua',
      	'phone': '084352234234',
      	'birth': '02.04.1992'
      },
      {
      	'name': 'vanya',
      	'surname': 'petrov',
      	'email': 'google@com.ua',
      	'phone': '084135234234',
      	'birth': '02.04.1992'
      },
      {
      	'name': 'dima',
      	'surname': 'lasarev',
      	'email': 'google@com.ua',
      	'phone': '084315775234234',
      	'birth': '02.04.1992'
      }
    ];

    $scope.getWinner = function() {
    	var rand = Math.floor(Math.floor(Math.random() * (($scope.people.length - 1) - 0 + 1)));
    	$('.winner').text($scope.people[rand].name + ' ' + $scope.people[rand].surname);
    };
  });

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
    $scope.people = [];

    $scope.getWinner = function() {
    	var rand = Math.floor(Math.floor(Math.random() * (($scope.people.length - 1) - 0 + 1)));
    	$('.winner').text($scope.people[rand].name + ' ' + $scope.people[rand].surname);
    };
  });

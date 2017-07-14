/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.message = "Hello World";
    $scope.message2 = "Goodbye World";
    $scope.message3 = "Sup World";
    $scope.tasks = ["Learn Angular", "Learn Vue", "Learn React"];

    window.$scope = $scope;
  });
})();
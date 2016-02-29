"use strict";
var componentControllers = angular.module('componentControllers', []);

componentControllers.controller('homeController', ['$scope', '$location',
    function($scope, $location){
        $scope.isActive = function (menu) {
            return menu == $location.path();
        }
}]);


var componentServices = angular.module('componentServices', []);
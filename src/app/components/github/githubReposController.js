"use strict";

(function(controllers, $) {
    controllers.controller('githubReposController', ['$scope', 'githubReposService', 'helper',
        function ($scope, githubReposService, helper) {
            $scope.myData = [];
            $scope.gridOptions = {
                                enableSorting: false,
                                data: 'myData',
                                columnDefs: [
                                    { field: 'name', displayName: 'Name' },
                                    { field: 'repository', displayName: 'Repository', cellTemplate: '<a href={{row.entity.url}} target="_blank">{{row.entity.fullName}}</a>' }]
                            };

            $scope.username = '';

            $scope.$watch("username", helper.debounce(function(newValue, oldValue) {
                if(oldValue == newValue) return;
                githubReposService.load($scope.username).then(function(response) {
                    $scope.myData = response;
                }, function () {
                    $scope.myData = response;
                });
            }, 500));



        }]);
}(componentControllers, jQuery));


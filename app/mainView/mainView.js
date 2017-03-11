'use strict';

angular.module('myApp.mainView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mainView', {
            templateUrl: 'mainView/mainView.html',
            controller: 'MainViewCtrl'
        });
    }])

    .controller('MainViewCtrl', function($scope, $location) {
        $scope.test = function(){
            $location.path('/projectList')
           //$scope.showProjectList = true;
        };


    });
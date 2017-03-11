
'use strict';

angular.module('myApp.projectList', ['ngRoute', 'ui.bootstrap', 'ngTouch'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projectList', {
            templateUrl: 'projectList/projectList.html',
            controller: 'ProjectListCtrl'
        });
    }])

    .controller('ProjectListCtrl', function($scope, $location, projectService) {
        $scope.projectList = projectService.getProjects() ;

        $scope.goToMessagerie = function () {
            $location.path('/messagerieView')
        }

    });
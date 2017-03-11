
'use strict';

angular.module('myApp.projectList', ['ngRoute', 'ui.bootstrap', 'ngTouch'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projectList', {
            templateUrl: 'projectList/projectList.html',
            controller: 'ProjectListCtrl'
        });
    }])

    .controller('ProjectListCtrl', function($scope, $location, projectService, $rootScope) {
        $scope.projectList = projectService.getProjects() ;

        $scope.goToMessagerie = function (projet) {
            projectService.setSelectedProject(projet);
            $location.path('/messagerieView');
        }

    });
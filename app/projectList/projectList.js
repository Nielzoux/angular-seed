
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

        $scope.goToMessagerie = function (projet) {
            projet =  _.find($scope.projectList, function(proj) {
                return proj.name = projet.name;
            });
            console.log($scope.projectList);
            var x = _.indexOf($scope.projectList, projet);
            projectService.setSelectedProject(projet);
            $location.path('/messagerieView');
        }

    });
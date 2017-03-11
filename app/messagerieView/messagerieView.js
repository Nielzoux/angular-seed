'use strict';

angular.module('myApp.messagerieView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/messagerieView', {
            templateUrl: 'messagerieView/messagerieView.html',
            controller: 'MessagerieViewCtrl'
        });
    }])

    .controller('MessagerieViewCtrl', function ($scope, $location, projectService) {
        var projects = projectService.getProjects();
    });
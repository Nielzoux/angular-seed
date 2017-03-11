'use strict';

angular.module('myApp.messagerieView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/messagerieView', {
            templateUrl: 'messagerieView/messagerieView.html',
            controller: 'MessagerieViewCtrl'
        });
    }])

    .controller('MessagerieViewCtrl', function ($scope, $location, projectService, $rootScope) {
        $scope.selectedProject= projectService.getSelectedProject() ;

        $scope.name;
        $scope.newMessage;
        $scope.showNewMessageBox = function() {
            $scope.showNewMessage = !$scope.showNewMessage;
        };
        $scope.showNewMessage = false;

        $scope.addMessage = function () {
            $scope.selectedProject.messages.push({
                auteur: $scope.name,
                message: $scope.newMessage
            });
            $scope.name = '';
            $scope.newMessage = ''
;        }
    });
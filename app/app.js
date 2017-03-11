'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myApp.mainView',
  'myApp.projectList',
  'myApp.messagerieView',
  'myApp.projectService'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');


  $routeProvider.otherwise({redirectTo: '/mainView'});
}]);

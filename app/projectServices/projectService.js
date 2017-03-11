'use strict';

angular.module('myApp.projectService', [])

.service('projectService', function($http) {
    var selectedProject;

    var projects = [{
        name: 'projet 1',
        description: 'ceci est un projet',
        theme: ['info', 'communautaire'],
        auteur: 'mathieu',
        interesse: 10,
        messages: [{
            auteur: 'mich',
            message: 'salut tout le monde'
        }, {
            auteur: 'jhonny',
            message: 'salut tout le monde'
        }, {
            auteur: 'ad',
            message: 'salut tout le monde'
        }, {
            auteur: 'mich',
            message: 'salut tout le monde'
        }]
    }, {
        name: 'projet 2',
        description: 'Compost de quartier',
        theme: ['info', 'communautaire'],
        auteur: 'rambo',
        interesse: 1,
        messages: [{
            auteur: 'mich',
            message: '2222'
        }, {
            auteur: 'jhonny',
            message: '22222'
        }, {
            auteur: 'ad',
            message: '22222'
        }, {
            auteur: 'mich',
            message: '22222'
        }]
    }, {
        name: 'projet 3',
        description: 'Working open space',
        theme: ['info', 'communautaire'],
        auteur: 'jhonny',
        interesse: 2,
        messages: [{
            auteur: 'mich',
            message: '3333333333'
        }, {
            auteur: 'jhonny',
            message: '3333333333'
        }, {
            auteur: 'ad',
            message: '3333333333'
        }, {
            auteur: 'mich',
            message: '3333333333'
        }]
    },{
        name: 'projet 4',
        description: 'Music jam',
        theme: ['info', 'communautaire'],
        auteur: 'michel',
        interesse: 8,
        messages: [{
            auteur: 'mich',
            message: '44444444444'
        }, {
            auteur: 'jhonny',
            message: '44444444444'
        }, {
            auteur: 'ad',
            message: '44444444444'
        }, {
            auteur: 'mich',
            message: '44444444444'
        }]
    } ];

    var addProject = function(newObj) {
        projects.push(newObj);
    };

    var getProjects = function(){
        return projects;
    };

    var setSelectedProject = function(proj) {
        console.log(proj);
        selectedProject = proj;
    };

    var getSelectedProject = function() {
        return selectedProject;
    };

    return {
        addProject: addProject,
        getProjects: getProjects,
        setSelectedProject: setSelectedProject,
        getSelectedProject: getSelectedProject
    };
});

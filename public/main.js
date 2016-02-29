angular
  .module('quizApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'MainViewController',
        controllerAs: 'vm'
        })
  });

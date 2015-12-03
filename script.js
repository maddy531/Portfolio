var app = angular.module('myRoute', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/about', {
    templateUrl: 'about.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/projects', {
    templateUrl: 'projects.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/resume', {
    templateUrl: 'resume.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/resume', {
    templateUrl: 'resume.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/contact', {
      templateUrl: 'contact.html',
      controller: 'routeCtrl'
    });
  $routeProvider.otherwise({
  templateUrl: '404error.html',
  controller: 'routeCtrl'
});

});

app.controller('routeCtrl', function(){

});

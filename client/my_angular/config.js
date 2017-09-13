var app = angular.module('app', ['ngMaterial','angular-carousel', 'angular.filter','ngRoute', 'ngMessages','angularUtils.directives.dirPagination','angular-loading-bar']);
/* configuration for angular route */
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'showAllController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

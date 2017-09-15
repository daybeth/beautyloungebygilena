var app = angular.module('app', [ 'ngRoute']);
/* configuration for angular route */
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/about.html',
      controller: 'controller'
    })
     .when('/gallery', {
      templateUrl: '/partials/gallery.html',
      controller: 'controller'
    })
      .when('/contact', {
      templateUrl: '/partials/contact.html',
      controller: 'controller'
    })
       .when('/facials', {
      templateUrl: '/partials/facials.html',
      controller: 'controller'
    })
      .when('/wax', {
      templateUrl: '/partials/wax.html',
      controller: 'controller'
    })
      .when('/beautyBar', {
      templateUrl: '/partials/beautyBar.html',
      controller: 'controller'
    })
      .when('/massages', {
      templateUrl: '/partials/massages.html',
      controller: 'controller'
    })
    .otherwise({
      redirectTo: '/'
    });
});


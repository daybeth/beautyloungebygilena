var app = angular.module('app', [ 'ngRoute','ui.carousel','angular-carousel','ui.bootstrap']);
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
    .when('/privacyPolicy', {
      templateUrl: '/partials/privacyPolicy.html',
      controller: 'controller'
    })
    .when('/services', {
      templateUrl: '/partials/services.html',
      controller: 'controller'
    })
    .when('/services-facials', {
      templateUrl: '/partials/services-facials.html',
      controller: 'controller'
    })
    .when('/services-wax', {
      templateUrl: '/partials/services-wax.html',
      controller: 'controller'
    })
    .when('/services-beautybar', {
      templateUrl: '/partials/services-beautybar.html',
      controller: 'controller'
    })
    .when('/services-massages', {
      templateUrl: '/partials/services-massages.html',
      controller: 'controller'
    })
    .otherwise({
      redirectTo: '/'
    });
});

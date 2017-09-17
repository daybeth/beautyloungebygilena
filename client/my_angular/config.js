var app = angular.module('app', [ 'ngRoute','ui.carousel','angular-carousel']);
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
// app.run(['Carousel', (Carousel) => {
//   Carousel.setOptions({
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: 'ease',
//     dots: true,
 
//     easing: 'linear',
//     fade: false,
//     infinite: true,
//     initialSlide: 0,
 
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 500,
//   });
// }]);

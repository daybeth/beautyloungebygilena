app.controller('controller',['$scope', '$routeParams','UserFactory', function($scope,$routeParams,UserFactory){

  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.beforeAndAfters = [
  {
      image: '/images/ba-microneedling2.jpg',
      text: 'Microneedling'
    },
    {
      image: '/images/ba-microneedling.jpg',
      text: 'Microneedling'
    },
    {
      image: '/images/ba-microneedling3.jpg',
      text: 'Microneedling'
    },
    {
      image: '/images/ba-microneedling4.jpg',
      text: 'Microneedling'
    },
    {
      image: '/images/ba-.jpg',
      text: ''
    },
    {
      image: '/images/ba-1.jpg',
      text: ''
    },
    {
      image: '/images/ba-bodySculpting.jpg',
      text: 'Body Sculpting'
    },
    {
      image: '/images/ba-collagenInduction.jpg',
      text: 'Collagen Induction Therapy'
    },
    {
      image: '/images/ba-darkCircles.jpg',
      text: 'Bye bye Dark Circles'
    },
    {
      image: '/images/ba-eb-makeup.jpg',
      text: 'Eyebrows Make up'
    },
    {
      image: '/images/ba-microneedling5.jpg',
      text: 'Microneedling'
    }
    ];
  $scope.microdermos = [
  ];
  $scope.microneeds = [
    
  ];
  $scope.teens = [
 
  ];

}])

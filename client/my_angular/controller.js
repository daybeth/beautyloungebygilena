app.controller('controller',['$scope', '$routeParams','UserFactory', function($scope,$routeParams,UserFactory){

  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.microdermos = [
    {
      image: '/images/images(2).jpg'
    },
    {
      image: '/images/images.jpg'
    },
    {
      image: '/images/images(3).jpg'
    },
    {
      image: '/images/images(4).jpg'
    },
    {
      image: '/images/images(1).jpg'
    }
  ];
    $scope.microneeds = [
    {
      image: '/images/ba-microneedling2.jpg'
    },
    {
      image: '/images/ba-microneedling.jpg'
    },
    {
      image: '/images/ba-microneedling3.jpg'
    }
  ];
  $scope.teens = [
    {
      image: '/images/images(3).jpg'
    },
    {
      image: '/images/images(4).jpg'
    },
    {
      image: '/images/images(1).jpg'
    }
  ];

}])

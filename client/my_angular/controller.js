app.controller('controller',['$scope', '$routeParams','UserFactory', function($scope,$routeParams,UserFactory){

  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = [
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
  

}])

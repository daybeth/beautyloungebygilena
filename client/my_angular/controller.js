app.controller('controller',['$scope', '$routeParams', function($scope,$routeParams){

  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = true;

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.beforeAndAfters = [

    ];
  $scope.facials = [
    {
      image: '/images/ba-darkCircles.jpg',
      text: 'Bye bye Dark Circles'
    },
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
      image: '/images/ba-microneedling5.jpg',
      text: 'Microneedling'
    },
    {
      image: '/images/ba-.jpg',
      text: 'Microneedling 1 session'
    },
    {
      image: '/images/ba-1.jpg',
      text: 'Microneedling 1 session'
    },
    {
      image: '/images/ba-ultherapy.jpg',
      text: 'Ultherapy right after'
    },
    {
      image: '/images/ba-ultherapy1.jpg',
      text: 'Ultherapy right after'
    },
    {
      image: '/images/ba-ultherapy30days.jpg',
      text: 'Ultherapy 30 Days after'
    },
    {
      image: '/images/ba-ultherapy30days1.jpg',
      text: 'Ultherapy 30 Days after'
    },
    {
      image: '/images/ba-ultherapy30days2.jpg',
      text: 'Ultherapy 30 Days after'
    },
     {
      image: '/images/ba-radiofrequency1.jpg',
      text: 'Radiofrequency'
    },
    {
      image: '/images/ba-collagenInduction.jpg',
      text: 'Collagen Induction Therapy'
    },
     {
      image: '/images/ba-collagenInduction2.jpg',
      text: 'Collagen Induction Therapy'
    }
  ];
  $scope.bodies = [
    {
      image: '/images/ba-radiofrequency.jpg',
      text: 'Radiofrequency'
    },
    {
      image: '/images/ba-radiofrequency2.jpg',
      text: 'Radiofrequency'
    },
    {
      image: '/images/ba-radiofrequency3.jpg',
      text: 'Radiofrequency'
    },
    {
      image: '/images/ba-radiofrequencyCavitation.jpg',
      text: 'Radiofrequency and Cavitation'
    },
    {
      image: '/images/ba-bodySculpting.jpg',
      text: 'Body Sculpting'
    },
     {
      image: '/images/ba-coldSculpting.jpg',
      text: 'Cold Sculpting'
    }
  ];
  $scope.beauties = [
    {
      image: '/images/ba-makeup.jpg',
      text: 'Make up'
    },
    {
      image: '/images/ba-eb-makeup.jpg',
      text: 'Eyebrows Make up'
    },
    {
      image: '/images/ba-lashesextension.jpg',
      text: 'Lashes Extensions'
    },
    {
      image: '/images/ba-lashesextension1.jpg',
      text: 'Lashes Extensions'
    },
    {
      image: '/images/ba-lashesextension2.jpg',
      text: 'Lashes Extensions'
    },
    {
      image: '/images/ba-lashesLifting.jpg',
      text: 'Lashes Lifting'
    },
    {
      image: '/images/ba-lashesLifting1.jpg',
      text: 'Lashes Lifting'
    },
    {
      image: '/images/ba-lashesLifting2.jpg',
      text: 'Lashes Lifting'
    },
    {
      image: '/images/ba-lashesLifting3.jpg',
      text: 'Lashes Lifting'
    }
  ];

}])

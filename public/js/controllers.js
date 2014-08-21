var plangularControllers = angular.module('plangular'); 

plangularControllers.controller('tracksController', function($scope) {
    $scope.tracksList = [
      {
          url: "https://soundcloud.com/soulection/tom-misch-the-journey"
      },
      {
          url: "https://soundcloud.com/soulection/tom-misch-the-journey"
      }
    ];
});

var plangularController = angular.module('plangular'); 

plangularController.controller('tracksController', function($scope) {
  $scope.tracks = [
    {
      url: "https://soundcloud.com/soulection/tom-misch-the-journey"
    }
  ]
});

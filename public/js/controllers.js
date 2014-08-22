var plangularController = angular.module('plangular'); 
plangularController.controller('tracksController', function($scope) {

  $scope.tracks = [
    {
      src: trackUrls
    }
  ]
});

plangularController.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?soundcloud\.com/.+$')]);
}]);

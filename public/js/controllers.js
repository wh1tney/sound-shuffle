var plangularController = angular.module('plangular'); 

plangularController.controller('tracksController', function($scope, $sce) {

  $scope.tracks = [
    {
      src:['https://soundcloud.com/soulection/tom-misch-the-journey']
    },
    {
      src:['https://soundcloud.com/imkuma/elizabeth']
    }
  ]
});

plangularController.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?soundcloud\.com/.+$')]);
}]);

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data;
    });
  };

  $scope.init = function() {
    $scope.getLinks();
  };

  $scope.redirectUrl = function(code){
    Links.redirectUrl(code);
  };

  $scope.init();
});

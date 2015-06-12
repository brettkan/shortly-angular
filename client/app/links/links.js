angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.then(function(data) {
      console.log("in LINks, ", data)
      $scope.data.links = data;
    });
  };

  $scope.init = function() {
    $scope.getLinks();
  };

  $scope.init();
});

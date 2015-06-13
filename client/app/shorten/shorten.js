angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url){
    Links.shortenUrl(url).then(function(data) {
      $scope.link = data;
    });
  };

});

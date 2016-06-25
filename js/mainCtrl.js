angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.friends = [
    "jimmy",
    "frank",
    "billy",
    "tom",
    "bob",
    "rob",
  ];
  $scope.addFriend = function() {
    friends.push();
  }
});

var app = angular.module('randomUserApp', []);
var ajaxUrl = 'http://localhost:3000/db/';

app.controller('mainController', function($scope, $http) {

  $scope.resources = {};
  $scope.users = [];
  $scope.numberOfUsers = 10;

  $scope.makeUser = function(firstname, lastname, avatar){
    return {firstName: firstname, lastName: lastname, avatar: avatar}
  }

  $scope.chooseAvatar = function(userFullName) {
      var magicNumber = userFullName.length % 10;
      return  `./avatars/${magicNumber}.jpg`;
  }

  $scope.displayUsers  = function(sex) {
    $scope.users = [];
    for(var i = 0; i < $scope.numberOfUsers; i++) {
      var userSex = sex;

      if(userSex === 'all') {
        var r = Math.round(Math.random()); // <0, 1>
        (r === 0) ? userSex = 'male' : userSex = 'female';
      }

      var userNames = $scope.resources[userSex + '_name'];
      var userLastNames = $scope.resources[userSex + '_lastname'];
      var userFirstName = userNames[Math.ceil(Math.random() * userNames.length) - 1];
      var userLastName = userLastNames[Math.ceil(Math.random() * userLastNames.length) - 1];
      var userAvatar = $scope.chooseAvatar(userFirstName + userLastName);

      $scope.users.push($scope.makeUser(userFirstName, userLastName, userAvatar));
    }
  }

  $http({
    url: ajaxUrl,
    method: 'GET'
  }).then(function(succes){
    $scope.resources = succes.data;
    console.log('resources: ', $scope.resources);
  }, function(error){
    console.log(error);
  })

// Main Controller ends here....
})

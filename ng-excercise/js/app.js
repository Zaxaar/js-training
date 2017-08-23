var app = angular.module('webApp', ['ngRoute']);
var baseAJAXUrl = 'http://localhost:3000/';

app.controller('mainController', function($scope, $http) {

  $http({
    url: baseAJAXUrl + 'subject',
    method: 'GET'
  }).then(function(success){
    $scope.subjects = success.data;
  }, function(error) {
    console.log(error);
  })

  $scope.actualEditId = null;

  $scope.editItem = function(subject) {
    if($scope.actualEditId != subject.id) {
      $scope.actualEditId = subject.id;
    } else {
      $http({
        url: baseAJAXUrl + 'subject/' + subject.id,
        method: 'PUT',
        data: {
          name: subject.name
        }
      }).then(function(success){
        console.log('PUT success: ', success.data);
        $scope.actualEditId = null;

      }, function(error){
        console.log(error);
      })
    }
  }

  $scope.tryEdit = function(keycode, subject) {
    if (keycode === 13){
      console.log('You pressed Enter!');
      $scope.editItem(subject);
    }
  }

});

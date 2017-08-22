var app = angular.module('webApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './views/main.html',
  })
  .when('/users', {
    templateUrl: './views/users.html',
    controller: 'firstController'
  })
  .when('/user/:id', {
    templateUrl: './views/user.html',
    controller: 'secondController'
  })
  .when('/animals', {
    templateUrl: './views/animals.html',
    controller: 'thirdController'
  })
});

app.controller('firstController', function($scope, $http) {
  $http({
    method: "GET",
    url: "http://localhost:3000/users",
  }).then(function(succes) {
    $scope.users = succes.data;
    console.log(succes.data);
  }, function(error) {
    console.error(error);
  });
})

app.controller('secondController', function($scope, $http, $routeParams, $location) {
  $http({
    method: "GET",
    url: "http://localhost:3000/users/" + $routeParams.id
  }).then(function(succes) {
      $scope.user = succes.data;
  }, function(error) {
    console.warn(error)
  })

  $scope.backlink = function(){
    $location.path('/users')
  }
})

app.controller('thirdController', function($scope, $http) {
  $http({
    method: "GET",
    url: "http://localhost:3000/animals/"
  }).then(function(succes) {
      $scope.animals = succes.data;
      console.log(succes.data);
  }, function(error) {
    console.warn(error)
  })
})

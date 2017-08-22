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

app.controller('firstController', function($scope, $http, $filter) {
  $http({
    method: "GET",
    url: "http://localhost:3000/users",
  }).then(function(succes) {
    $scope.users = succes.data;
    console.log(succes.data);
  }, function(error) {
    console.error(error);
  });

  $scope.deleteUser = function(id) {
    $http({
      url: "http://localhost:3000/users/" + id,
      method: "DELETE"
    }).then(function(success){
      console.log('delete success!', success);
      var deletedUser = $filter('filter')($scope.users, {id: id})[0];
      $scope.users.splice($scope.users.indexOf(deletedUser),1);
    }, function(error) {
      console.log('delete error', error);
    });
  }

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

app.controller('fourthController', function($scope, $http) {

  $scope.addUser = function() {
    $http({
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: {
        name: $scope.name,
        lastname: $scope.lastname
      }
    }).then(function(success){
      console.log(success.data);
      $scope.users.push(success.data);
      $scope.name = '';
      $scope.lastname = '';
    }), function(error){
      console.log(error);
    }
  }

})

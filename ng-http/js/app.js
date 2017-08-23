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
    console.log('firstController GET success:', succes.data);
  }, function(error) {
    console.error('firstController GET error:',error);
  });

  $scope.deleteUser = function(id) {
    $http({
      url: "http://localhost:3000/users/" + id,
      method: "DELETE"
    }).then(function(success){
      console.log('secondController DELETE success:', success);
      var deletedUser = $filter('filter')($scope.users, {id: id})[0];
      $scope.users.splice($scope.users.indexOf(deletedUser),1);
    }, function(error) {
      console.log('secondController DELETE error:', error);
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
      console.log('thirdController GET success:', succes.data);
  }, function(error) {
    console.warn('thirdController GET success:', error)
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
      console.log('fourthController POST success:',success.data);
      $scope.users.push(success.data);
      $scope.name = '';
      $scope.lastname = '';
    }), function(error){
      console.log('fourthController POST error:', error);
    }
  }
})

app.controller('fifthController', function($scope, $http) {

  $scope.editUser = function(id) {
    $http({
      url: 'http://localhost:3000/users/' + id,
      method: 'PATCH',
      data: {
        name: $scope.user.name,
        lastname: $scope.user.lastname
      }
    }).then(function(success){
      console.log('fifthController PATCH success:', success.data);

    }), function(error) {
      console.log('fifthController PATCH error:', error);
    }
  }
})

var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/main.html'
  })
  .when('/add', {
    templateUrl: './views/add.html',
    controller: 'first'
  })
  .when('/show', {
    templateUrl: './views/show.html',
    controller: 'second'
  })
});

app.service('movie', function() {
  this.movies = [];
  this.add = function(movie) {
      this.movies.push(movie);
  }
  this.get = function() {
    return this.movies;
  }
});

app.controller('first', function($scope, movie) {
  $scope.add = function() {
    movie.add({title: $scope.title, release: $scope.release, genre: $scope.genre } );
  }
});

app.controller('second', function($scope, movie){
  $scope.movies = movie.get();
});

var app = angular.module('tempConverter', []);

app.controller('firstController', function($scope){
  $scope.message = "First Controller Message!";
});

app.controller('childController', function($scope, $filter, limitToFilter) {
  $scope.message = "Child Controller Message!";

  $scope.showMessage = function() {
    alert($scope.message);
  }

  $scope.showShortMessage = function() {
    alert(limitToFilter($scope.message, 5));
  }

  $scope.showCapitalizedMessage = function() {
    alert($filter('uppercase')($scope.message));
  }

  $scope.colors = [
    'black', 'brown', 'blue'
  ];

  $scope.obj = {id: 5, login: 'admin'};
  $scope.users = [
    {name: 'User One'},
    {name: 'User Two'},
    {name: 'User Three'}
  ];

  $scope.showModel = function(){
    alert($filter('uppercase')($scope.napis));
  }

});

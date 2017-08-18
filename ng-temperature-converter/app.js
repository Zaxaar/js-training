var app = angular.module('tempConverter', []);

app.controller('mainController', function($scope){

  $scope.convertTemp = function() {

    if($scope.temperature || $scope.temperature === 0 ) {
      if ($scope.tempUnit === 'C') {
        $scope.F = ($scope.temperature * 9/5+32);
        $scope.K = $scope.temperature + 273.15;
        $scope.C = false
      }

      else if ($scope.tempUnit === 'F') {
        $scope.C = ($scope.temperature -32)*5/9;
        $scope.K = ($scope.temperature)* 5/9;
        $scope.F = false
      }
      else if ($scope.tempUnit === 'K') {
        $scope.C = $scope.temperature - 273.15;
        $scope.F = $scope.temperature * 9/5 - 459.67;
        $scope.K = false
      }
    }
    else{alert("Write some valid value.")}
  }

  $scope.tempValues = {
    K: "-",
    F: "-",
    C: "-"
  };

});

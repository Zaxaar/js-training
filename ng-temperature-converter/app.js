var app = angular.module('tempConverter', []);

app.controller('mainController', function($scope){

  $scope.showMessage = function() {

    if($scope.temperature) {
      if ($scope.tempUnit === 'C') {
        $scope.tempValues.F = $scope.temperature * 9/5+32;
        $scope.tempValues.K = $scope.temperature + 273.15;
        $scope.tempValues.C = $scope.temperature;
      }

      else if ($scope.tempUnit === 'F') {
        $scope.tempValues.C = ($scope.temperature -32)*5/9;
        $scope.tempValues.K = ($scope.temperature)* 5/9;
        $scope.tempValues.F = $scope.temperature;
      }
      else if ($scope.tempUnit === 'K') {
        $scope.tempValues.C = $scope.temperature - 273.15;
        $scope.tempValues.F = $scope.temperature * 9/5 - 459.67;
        $scope.tempValues.K = $scope.temperature;
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

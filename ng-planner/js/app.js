var app = angular.module('planner', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './views/main.html'
  })
  .when('/add-task', {
    templateUrl: './views/add-task.html',
    controller: 'addTaskController'
  })
  .when('/show-tasks', {
    templateUrl: './views/show-tasks.html',
    controller: 'showTaskListController'
  })
});

app.service('task', function(){
  this.tasks = [];

  this.addTask = function(task){
    this.tasks.push(task);
  }
  this.showTasks = function() {
    return this.tasks;
  }
})

app.controller('addTaskController', function($scope, task) {
  $scope.addTask = function() {
    task.addTask({name: $scope.name, description: $scope.description });
  }
});

app.controller('showTaskListController', function($scope,task ) {
  $scope.tasks = task.showTasks();
})

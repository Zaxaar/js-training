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
  this.counter = this.tasks.length + 1;

  this.addTask = function(task){
    task.id = this.counter++;
    this.tasks.push(task);
  }
  this.showTasks = function() {
    return this.tasks;
  }
  this.removeTask = function(id) {
    for(var i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].id == id) {
      break;
      }
    }
    this.tasks.splice(i, 1);
  }
})

app.controller('addTaskController', function($scope, task) {
  $scope.addTask = function() {
    task.addTask({name: $scope.name, description: $scope.description });
  }
});

app.controller('showTaskListController', function($scope,task ) {
  $scope.tasks = task.showTasks();

  $scope.removeTask = function(id) {
    task.removeTask(id);
  }
})

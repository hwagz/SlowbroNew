var app = angular.module('angtemp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/url1',{
      templateUrl: "views/url1.htm",
      controller: "url1Ctrl"
    })
    .when('/url2',{
      templateUrl: "views/url2.htm",
      controller: "url2Ctrl"
    })
    .when('/url3',{
      templateUrl: "views/url3.htm",
      controller: "url3Ctrl"
    })
    .otherwise({
      templateUrl: "views/main.htm",
      controller: "mainCtrl"
    });
  })
  .controller('mainCtrl', ['$scope','$filter','$location',function($scope, $filter, $location) {
    $scope.page = "Main";
    $scope.msg = "This is the main page."
    $scope.btn = function(){
      console.log($location.absUrl());
    }
  }])
  .controller('url1Ctrl', ['$scope','$filter',function($scope, $filter) {
    $scope.page = "URL 1";
    $scope.msg = "Test message 1";
  }])
  .controller('url2Ctrl', ['$scope','$filter',function($scope, $filter) {
    $scope.page = "URL 2";
    $scope.msg = "Test message 2";
  }])
  .controller('url3Ctrl', ['$scope','$filter',function($scope, $filter) {
    $scope.page = "URL 3";
    $scope.msg = "Test message 3";
  }])
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
    }
})

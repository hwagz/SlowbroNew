var app = angular.module('angtemp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/pokemon',{
      templateUrl: "views/pokemon.htm",
      controller: "pokemonCtrl"
    })
    .when('/wow',{
      templateUrl: "views/wow.htm",
      controller: "wowCtrl"
    })
    .when('/url3',{
      templateUrl: "views/url3.htm",
      controller: "url3Ctrl"
    })
    .otherwise({
      templateUrl: "views/home.htm",
      controller: "homeCtrl"
    });
  })
  .controller('homeCtrl', ['$scope','$filter','$location',function($scope, $filter, $location) {
    $scope.page = "Home";
    $scope.msg = "This is the home page."
    $scope.btn = function(){
      console.log($location.absUrl());
    }
  }])
  .controller('pokemonCtrl', ['$scope','$filter',function($scope, $filter) {
    $scope.page = "Pokemon";
    $scope.msg = "Test message 1";
  }])
  .controller('wowCtrl', ['$scope','$filter',function($scope, $filter) {
    $scope.page = "World of Warcraft";
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

var app = angular.module('slowbro',['ngRoute']);

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
  }])
  .controller('wowCtrl', ['$scope','$filter',function($scope, $filter) {
    $scope.page = "World of Warcraft";
  }])
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
    }
})

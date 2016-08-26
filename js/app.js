"use strict";

// <520px width => center slowbro circle, nav list dropdown

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
  .controller('wowCtrl', ['$scope','$filter','$http',function($scope,$filter,$http) {
    $scope.page = "World of Warcraft";
    $scope.url1 ="https://us.api.battle.net/wow/auction/data/";
    $scope.realm = "nazjatar";
    $scope.url2 = $scope.realm+"?locale=en_US&jsonp=JSON_CALLBACK&apikey=";
    $scope.urlKey = "8xez9wkqrw7tdqmsvbsmnszz6z3kek39";
    $scope.haveData = false;

    $scope.url = $scope.url1+$scope.url2+$scope.urlKey;

    // Get list of all site groups user has access to
    // WORKING
    $scope.getData = function(){
      $http({
        method: 'JSONP',
        url: $scope.url
      })
        .then(
          function(response) {
            $scope.haveData = true;
            var lastUpdated = new Date(response.data.files[0].lastModified);
            console.log(lastUpdated);
            $scope.url = response.data.files[0].url;
          },
          function(response){
          console.log("Error");
          console.log(response);
        })
        .finally(function(){
          console.log("HTTP req 1 Complete.");
          if ($scope.haveData) {
            console.log($scope.url);
            $http({
              method:'GET',
              url: $scope.url
            })
              .then(
                function(response) {
                  //console.log(response);
                },
                function(response){
                  console.log("Error 2: The Sequel");
                  console.log(response);
                })
              .finally(function(){
                console.log("Complete.");
              });
          }
        });
    };
  }])
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
    }
})

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
  .controller('wowCtrl', ['$scope','$filter','$http',function($scope, $filter,$http) {
    $scope.page = "World of Warcraft";
    $scope.url1 ="https://us.api.battle.net/wow/auction/data/";
    $scope.realm = "nazjatar";
    $scope.url2 = $scope.realm+"?locale=en_US&jsonp=true&apikey=";
    $scope.urlKey = "";
    $scope.haveData = false;

    $scope.url = $scope.url1+$scope.url2+$scope.urlKey;

    // Get list of all site groups user has access to
    $scope.getData = function(){
      $http({
        method: 'GET',
        url: $scope.url
      })
        .then(function(response) {
          console.log(response);
          var urlStr = response.data;
          if (!$scope.haveData) {
            $scope.haveData = true;
            $scope.url = $scope.cleanURL(response.data);
            $scope.getData();
          }
        })
        .finally(function(){
          console.log("Complete.");
        });
    };

    // dig the actual url out of the flippin' "data" string. dumb.
    $scope.cleanURL = function(responseStr){
      var startIndex = responseStr.indexOf("http");
      var newURL = responseStr.substring(startIndex);
      var endIndex = newURL.indexOf('","');
      return newURL.substring(0,endIndex);
    };
  }])
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
    }
})

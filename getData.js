
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("https://api.myjson.com/bins/1syjw")
        .success(function(response) {$scope.names = response.records;});
});

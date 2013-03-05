'use strict';

function DirectoriesList($scope, $http) {
    console.log("DA");
  $http.get(config.server+"directories.php").success(function(data) {
    $scope.directories = data;
  });
 }

//DirectoriesList.$inject = ['$scope', '$http'];
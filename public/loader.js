'use strict';

function DirectoriesList($scope, $http) {
    alert("DAasdasdasdasd");
  $http.get(config.server+"directories.php").success(function(data) {
    $scope.directories = data;
  });
 }

//DirectoriesList.$inject = ['$scope', '$http'];

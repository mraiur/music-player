'use strict';

/* Controllers */
function DirectoriesList($scope, $http) {
    /*$scope.$watch("CurrentListAlbum",function(){
        console.log("DA", arguments);
    });*/

    $scope.selectAlbum = function(dir){
        $http({
            url : 'public/app/directories/songs.php',
            params : {
                dir : dir
            },
            method : 'get'
        }).success(function(data) {
            $scope.directorysongs = data;
        });    
    };
    $http({
        url : 'public/app/directories/directories.php',
        method : "get"
    }).success(function(data) {
        $scope.directories = data;
    });
}

function ReadAlbum(){
    console.log("DA", arguments);
}

//DirectoriesList.$inject = ['$scope', '$http'];

/*app.filter('linear', function() {
  return function(value) {
    var result = {};
    for(var key in value) {
      for(var cKey in value[key]) {
        result[key+'_'+cKey] = value[key][cKey];
      }      
    }
    return result;
  };
});*/
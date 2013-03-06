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

    $scope.addAllSongs = function(songs){
        var cnt = 0,
            numCnt = songs.length;

        for(; cnt < numCnt; cnt++){
            playlistsongs.push(prepareSong(songs[cnt]));
        }
        runPlaylist();
    };

    function runPlaylist(){
        //if(player.loaded){
            //player.load(playlistsongs);
        //}else{
            player.setup({
                playlist : playlistsongs,
                height: "100%",
                controls : true,
                autostart : true,
                primary: "html5",
                image: "./public/img/default.png",
                listbar: {
                    position: 'bottom',
                    size: "80%"
                }
            });
            //player.loaded = true;
        //}
    }

    function prepareSong(song){
        return {
            image: "./public/img/default.png",
            sources: [
                { file: song.path }
            ],
            title: song.name
        };
    }

    $scope.addSong = function(song){
        playlistsongs.push(prepareSong(song));

        runPlaylist();
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
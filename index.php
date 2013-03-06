<!DOCTYPE html>
<html lang="en" ng-app>
    <head>
        <meta charset="utf-8">
        <script type="text/javascript">
            var playlistsongs =  [];
        </script>
        <link rel="stylesheet" href="./public/css/app.css">
        <link rel="stylesheet" href="./public/css/bootstrap.css">
        <script type="text/javascript" src="./public/config.php?view=jsobject"></script>
        <script type="text/javascript" src="./public/player/audio.min.js"></script>
        <script type="text/javascript" src="./public/js/angular.min.js"></script>
        <script type="text/javascript" src="./public/app/js/app.js"></script>
        <script type="text/javascript" src="./public/app/js/controllers.js"></script>
        <script type="text/javascript" src="./public/app/js/filters.js"></script>
    </head>
<body ng-controller="DirectoriesList">
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span4" id="albums">
                <table class="table table-bordered">
                    <tr ng-repeat="dir in directories">
                        <td>
                            <h4 ng-click="selectAlbum(dir.name)">{{dir.name}}</h4> 
                            <div class="album link" ng-repeat="album in dir.children" ng-click="selectAlbum(dir.name+'/'+album.name)">
                                {{album.name}}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="span4" id="center">
                <table class="table table-bordered">
                    <tr>
                        <td align="center">
                            <div id="musicplayer"><audio id="player"></audio></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="btn" ng-click="addAllSongs(directorysongs)">Add All</div>
                            <div class="btn" ng-click="deleteAllSongs()">Clear playlist</div>
                        </td>
                    </tr>
                    <tr ng-repeat="song in directorysongs">
                        <td ng-click="addSong(song)" class="link">
                            {{song.name}}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="span4" id="right">
                <table class="table table-bordered">
                    <tr ng-repeat="song in playlistsongs">
                        <td class="link">
                            <div class="song current" ng-show="$index==currentSongIndex">{{song.name}}</div>
                            <div class="song" ng-show="$index!=currentSongIndex">
                                <span ng-click="playSong($index)">{{song.name}}</span>
                                <span ng-click="deleteSong($index)" class="delete icon-trash"></span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        var currentSongIndex = 0;
        var player = audiojs.newInstance(document.getElementById("player"));
    </script>

</body>
</html>
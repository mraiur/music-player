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
        <script type="text/javascript" src="./public/player/jwplayer.js"></script>
        <script type="text/javascript" src="./public/js/angular.min.js"></script>
        <script type="text/javascript" src="./public/app/js/app.js"></script>
        <script type="text/javascript" src="./public/app/js/controllers.js"></script>
        <script type="text/javascript" src="./public/app/js/filters.js"></script>
    </head>
<body ng-controller="DirectoriesList">
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span2" id="albums">
                <table class="table table-bordered">
                    <tr ng-repeat="dir in directories">
                        <td>
                            <h4>{{dir.name}}</h4> 
                            <div class="album link" ng-repeat="album in dir.children" ng-click="selectAlbum(dir.name+'/'+album.name)">
                                {{album.name}}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="span10" id="center">
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <div class="btn" ng-click="addAllSongs(directorysongs)">Add All</div>
                        </td>
                    </tr>
                    <tr ng-repeat="song in directorysongs">
                        <td ng-click="addSong(song)" class="link">
                            {{song.name}}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="span10" id="right">
            <div id="musicplayer">Loading the player...</div>
        </div>
    </div>
    <script type="text/javascript">
        var player = jwplayer("musicplayer");
        ////file: "http://dev.mraiur.com/music/test.mp3"
    </script>

</body>
</html>
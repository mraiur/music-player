<!DOCTYPE html>
<html lang="en" ng-app>
    <head>
        <meta charset="utf-8">
        <script type="text/javascript">
            var playlistsongs =  [];
        </script>
		<link rel="stylesheet" href="./public/css/commun.css">
        <script type="text/javascript" src="./public/config.php?view=jsobject"></script>
        <script type="text/javascript" src="./public/player/audio.min.js"></script>
        <script type="text/javascript" src="./public/js/angular.min.js"></script>
        <script type="text/javascript" src="./public/app/js/app.js"></script>
        <script type="text/javascript" src="./public/app/js/controllers.js"></script>
	<script type="text/javascript" src="./public/app/js/filters.js"></script>
	<script type="text/javascript">
	function run(){
		document.getElementById('albums').style.height=window.innerHeight+'px';
	}
	</script>
    </head>
<body onload="run()" ng-controller="DirectoriesList">
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span4" id="albums">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th><h3>Artist / Albums</h3></th>
                        </tr>
                    </thead>
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
							<div id="musicplayer"><audio id="player"></audio>
							<input type="range" id="volumeBar" min="0" max="1" step="0.01" value="1" onChange="changeVolume(this.value);"/>
							</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="btn" ng-click="addAllSongs(directorysongs)">Add All</div>
                            <div class="btn" ng-click="deleteAllSongs()">Clear playlist</div>
                        </td>
                    </tr>
                    <tr>
                        <th><h3>Songs</h3></th>
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
                     <thead>
                        <tr>
                            <th><h3>Playlist</h3></th>
                        </tr>
                    </thead>
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
		
		function changeVolume(n) {
			var player = document.getElementById("player");
			player.volume = n;
		}
    </script>
</body>
</html>

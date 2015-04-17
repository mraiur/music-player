var appPlayer = {
    player: false,
    nativePlayer: function(){
        var player = angular.element( document.getElementById('player') );
        player.bind('playing', function(){
            appPlayer.playing = true;
        });

        player.bind('pause', function(){
            appPlayer.playing = false;
        });
    },

    playing: false,

    isPlaying: function(){
        return appPlayer.playing;
    },

    play: function( songPath, scope ){
        if(config.musicPlayer == 'flash') {
            appPlayer.player.load( songPath );
            appPlayer.player.play();
        } else if( config.musicPlayer == 'native'){
            var player = document.getElementById('player');
            player.src = songPath;
            player.play();
            //scope.currentSongPath = songPath;
        }
    },

    stop: function(){

    },

    pause: function(){
        if(config.musicPlayer == 'flash') {
            appPlayer.player.pause();
        } else if( config.musicPlayer == 'native'){

        }
    },

    onTrackEnd: function( callback ){
        var player = angular.element( document.getElementById('player') );
        player.bind('ended', function(){
            callback();
        });
    }
};
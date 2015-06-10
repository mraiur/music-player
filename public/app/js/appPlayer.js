var appPlayer = {
    player: false,
    nativePlayer: function(){
        var el = document.getElementById('player');
        var player = angular.element( el );
        var interval = null;
        var stopTrackFinish = function(){
             if(interval!== null ){
                clearTimeout(interval);
            }
            var duration =  (el.duration, el.currentTime ); 
            console.log(duration);

            if( duration > 0 ){
                interval = setTimeout(function(){
                    console.log('finish');
                },duration);
                
                console.log(duration);
            }
        }
        var trackFinish = function(){
            stopTrackFinish();           
        };

        player.bind('playing', function(){
            console.log('playing', document.getElementById('player').currentTime);
            appPlayer.playing = true;
            trackFinish();
        });

        player.bind('pause', function(){
            console.log('pause');
            appPlayer.playing = false;
            stopTrackFinish();
        });

        player.bind('currentTime', function(){
            console.log( player.currentTime );
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
            console.log('asdasdasd');
            callback();
        });
    }
};

var appPlayer = {
    player: false,
    onTrackEnd: function(){},
    el: null,

    nativePlayer: function(){
        var me = this;
        me.el = document.getElementById('player');

        var player = angular.element( me.el );
        var interval = null;
        var stopTrackFinish = function(){
             if(interval!== null ){
                clearTimeout(interval);
             }
        }

        var trackFinish = function(){
            stopTrackFinish();           
            var duration =  ( me.el.duration - me.el.currentTime ) * 1000 ; 

            if( duration > 0 ){
                interval = setTimeout(function(){
                    me.onTrackEndCallback();
                }, duration);
            }

        };
        player.bind('playing', function(){
            appPlayer.playing = true;
            trackFinish();
        });

        player.bind('pause', function(){
            appPlayer.playing = false;
            stopTrackFinish();
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
        this.onTrackEndCallback = callback;
        /*
        // Has problems due to network load.
        var player = angular.element( document.getElementById('player') );
        player.bind('ended', function(){
            console.log('asdasdasd');
            callback();
        });*/
    }
};

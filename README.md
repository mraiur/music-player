music-player
============

<p>A very lightweight directory based music player. Listing directories( artists ) and subdirectories( albums ).</p>
<p>Making playlists from mp3 files in folders</p>
<p></p>

### SETUP

Copy config.example.php to config.php you probably will not change anything.
But you can hard code the URL for example.

Setting music player to native will use the HTML5 audio tag for player

```
$music_player = 'native';

```

Setting music player to flash will use the flash music player

```
$music_player = 'flash';
```
 

### Suggested structure
    -library
        -ARTIST-1
            -Album 1
            -Album 2
        -ARTIST-2
            -Album 1
            -Album 2
        -ARTIST-N
            -Album-N
    
<p>
    
</p>
<br />
<br />
<p>Using AngularJS for listing (http://angularjs.org/)</p>
<p>Bootstrap for UI (http://twitter.github.com/bootstrap/)</p>
<p>Audio.js ( http://kolber.github.com/audiojs/ ) </p>

<br />
<br />
### Screenshot

![screenshot](preview.png)
<?php
require_once dirname(__FILE__)."/../config.php";

$public = array(
    "host" => $host,
    "library" => "library",
    "server" => $host."public/",
    "musicPlayer" => $music_player
);
if(isset($_GET['view'])){
    if($_GET['view'] == "jsobject"){
        echo 'var config = {};'."\n";
        foreach($public as $key => $value){
            echo 'config.'.$key.' = "'.$value.'"'."\n";
        }
    }
}
?>

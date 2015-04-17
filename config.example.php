<?php
$root = dirname(__FILE__)."/";
$host = 'http://'.$_SERVER['HTTP_HOST'].str_replace("public/config.php", "", $_SERVER['PHP_SELF']);
$library = $root."library/";
$exclude_dirs = array(".", "..", "public", ".git");
$dynamic_dir_scan = true;
$music_player = 'native';
//$music_player = 'flash';
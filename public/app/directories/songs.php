<?php
require_once "../../app.php";
$return = array();
$get_dir = isset($_GET['dir'])?strip_tags($_GET['dir']):false;

function error_message(){
    echo json_encode(array("data" => array(), "error" => true));
    die();
}

if($get_dir===false){
    error_message();
}

$request_dir = $library.$get_dir;
if(realpath($request_dir)===false){
    error_message();
}
if(strstr($request_dir, $root) === false){
    error_message();
    // tries to list no music dirs
}

if(!is_readable($request_dir)){
    error_message();
}
$return = array();
$list = scandir($request_dir);
foreach($list as $file){
    if(!is_dir($request_dir.$file) && strstr($file, ".mp3")){
        $return[] = array(
            "image" => "./public/img/default.png",
            "name" => $file,
            "path" => $public['library'].'/'.$get_dir . "/" . $file
        );
    }
}

echo json_encode($return);
?>

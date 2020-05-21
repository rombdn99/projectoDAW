<?php

include 'conexion.php';
include 'datafactory.php';
session_start();

if(preg_match("/^([A-Za-z0-9'\.\-\s\,]*)$/",$_POST['direccion'])) {
    $direc=true;
}else{
    $html.= "Direccion mal";
}

if(preg_match("/^([0-9]){9}$/",$_POST['telf'])) {
    $telf=true;
}else{
    $html.= "Telefono mal";
}
if( $telf && $direc){
    echo cambiardatos($_SESSION['id'],$_POST['direccion'],$_POST['telf'],$objPDO);
}else{
    echo $html;
}
?>
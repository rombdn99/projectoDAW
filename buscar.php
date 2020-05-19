<?php
include 'conexion.php';
include 'datafactory.php';

switch($_POST['query']){
    case "sort":
        echo buscar($objPDO);
    break;
}


?>
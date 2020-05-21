<?php
include 'conexion.php';
include 'datafactory.php';

switch($_POST['query']){

    case "getcategorias":
        echo getcategoria($objPDO);
    break;
    case "filtro":
        echo filtro($_POST['select'],$objPDO);
}


?>
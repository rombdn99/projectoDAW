<?php
include 'conexion.php';
include 'datafactory.php';

switch($_POST['query']){
    case "sort":
        echo buscar($objPDO);
    break;
    case "getcategorias":
        echo getcategoria($objPDO);
    break;
    case "filtro":
        echo filtro($_POST['select'],$objPDO);
}


?>
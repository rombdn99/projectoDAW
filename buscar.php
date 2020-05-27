<?php
include 'conexion.php';
include 'datafactory.php';

switch($_POST['query']){

    case "getcategorias":
        echo getcategoria($objPDO);
    break;
    case "filtro":
        if(substr($_POST['select'], 0,6)=="select"){
            echo filtro($_POST['select'],$objPDO);
        }else{
            echo "Solo se puede hacer un select";
        }
        //
}


?>
<?php
include 'conexion.php';
include 'datafactory.php';

    switch($_POST['query']){
        case "categorias":
            echo cargarcategorias($objPDO);
        break;
        case "subirprod":
            echo nuevoprod($_POST['nombre'],$_POST['fichero'],$_POST['descripcion'],$_POST['precio'],$_POST['deporte'],$_POST['genero'],$_POST['ropa'],$_POST['equipamiento'], $objPDO);
        break;
    }
?>
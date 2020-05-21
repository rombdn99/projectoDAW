<?php
include 'conexion.php';
include 'datafactory.php';

    switch($_POST['query']){
        case "categorias":
            echo cargarcategorias($objPDO);
        break;
        case "subirprod":
            $nombre=false;
            $descripcion=false;
            $precio=false;

            if(preg_match("/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú0-9'\.\-\s\,]+[\s]*)+$/",$_POST['nombre'])) {
                $nombre=true;
            }else{
                $html= "Nombre mal";
            }
            if(preg_match("/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú0-9'\.\-\s\,]+[\s]*)+$/",$_POST['descripcion'])) {
                $descripcion=true;            
            }else{
                $html= "Descripcion mal";
            }
            if(preg_match("/^\d*\.?\d*$/",$_POST['precio'])) {
                $precio= "Precio mal";
            }else{
                $html= "Mal muy mal3";
            }
            if($nombre && $precio && $descripcion){
                echo nuevoprod($_POST['nombre'],$_POST['fichero'],$_POST['descripcion'],$_POST['precio'],$_POST['deporte'],$_POST['genero'],$_POST['ropa'],$_POST['equipamiento'], $objPDO);
            }else{
                echo $html;
            }
        break;
    }
?>
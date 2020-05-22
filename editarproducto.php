<?php
include 'conexion.php';
include 'datafactory.php';
    //print_r($_POST);
    switch($_POST['query']){
    case "getproducto":
        print_r(getproducto($objPDO,$_POST['id']));
    break;
    case "subirprod":
        $update= updateproducto($_POST['nombre'],$_POST['fichero'],$_POST['descripcion'],$_POST['precio'],$_POST['deporte'],$_POST['genero'],$_POST['ropa'],$_POST['equipamiento'],$_POST['id'], $objPDO);
        if($update=="good"){
            unlink($_POST['ficheroantiguo']);
        }
        echo $update;
    break;
    case "subirprod2":
        $nuevo="img/".$_POST['nuevonombreimg'];
        $update= updateproducto2($_POST['nombre'], $nuevo,$_POST['descripcion'],$_POST['precio'],$_POST['deporte'],$_POST['genero'],$_POST['ropa'],$_POST['equipamiento'],$_POST['id'], $objPDO);
        if($update=="good"){
            rename( $_POST['imgantigua'], $nuevo) ; 
        }
        echo $update;
    break;
}

?>
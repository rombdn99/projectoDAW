<?php
include 'conexion.php';
include 'datafactory.php';
    //print_r($_POST);
    switch($_POST['query']){
    case "getproducto":
        print_r(getproducto($objPDO,$_POST['id']));
    break;
    case "subirprod":
        unlink($_POST['ficheroantiguo']);


        echo updateproducto($_POST['nombre'],$_POST['fichero'],$_POST['descripcion'],$_POST['precio'],$_POST['deporte'],$_POST['genero'],$_POST['ropa'],$_POST['equipamiento'],$_POST['id'], $objPDO);
    break;
    case "subirprod2":
        $nuevo="img/".$_POST['nuevonombreimg'];
        echo rename( $_POST['imgantigua'], $nuevo) ; 
        echo updateproducto2($_POST['nombre'], $nuevo,$_POST['descripcion'],$_POST['precio'],$_POST['deporte'],$_POST['genero'],$_POST['ropa'],$_POST['equipamiento'],$_POST['id'], $objPDO);

    break;
}

?>
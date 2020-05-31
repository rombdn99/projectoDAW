<?php
include 'conexion.php';
include 'datafactory.php';
    session_start();
    $result="good";
    if(isset($_SESSION['cesta'])){
        $num =count($_SESSION['cesta']);
        for($i=0;$i<$num && $result=="good";$i++){
            $result=cesta($_SESSION['id'],$_SESSION['cesta'][$i]['id'],$_SESSION['cesta'][$i]['talla'],$objPDO);
        }
        if($result=="good"){
            unset($_SESSION['cesta']);
            echo "<i class='fas fa-check text-success mr-2'></i>Compra realizada con exito";
        }else{
            echo "ERROR: error en compra";
        }
    }else{
        echo "No ha seleccionado ningun articulo";
    }

   
?>
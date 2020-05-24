<?php
   // echo $_POST['id'];
    session_start();
        if(isset($_SESSION['id'])){
            if(isset($_SESSION['cesta'])){
                $num= count($_SESSION['cesta']);
                $_SESSION['cesta'][$num]['id']=$_POST['id'];
                $_SESSION['cesta'][$num]['talla']=$_POST['talla'];

            }else{
                $_SESSION['cesta'][0]['id']=$_POST['id'];
                $_SESSION['cesta'][0]['talla']=$_POST['talla'];
            }
            echo "<div class=''><i class='fas fa-check text-success mr-2'></i>Articulo añadido a tu cesta correctamente</div>";

        }else{
            session_destroy();
            echo "<div class=''><i class='fas fa-times text-danger mr-2'></i>Debes estar conectado para poder comprar</div>";
        }
       // $num= count($_SESSION['cesta']);
        //echo "numero productos: ".$num;
        //$_SESSION['cesta'][$num]=$_POST['id'];
?>
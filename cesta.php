<?php
include 'conexion.php';
include 'datafactory.php';

session_start();
    //print_r($_SESSION['cesta']);
    $html="";
    $total=0;
    if(isset($_SESSION['cesta'])){
        $num =count($_SESSION['cesta']);
        for($i=0;$i<$num;$i++){
            
            $arrayproducto=json_decode(getproducto($objPDO,$_SESSION['cesta'][$i]['id']),true);
            //print_r($arrayproducto);
            $html.="<tr>";
            $html.="<td>".$arrayproducto['nombre']."</td>";
            $html.="<td><img src='".$arrayproducto['imagen']."' class='img-fluid imgcesta'></td>";
            $html.="<td class='pl-2 pr-2'>".$arrayproducto['precio']."€</td>";
            $html.="<td>".$_SESSION['cesta'][$i]['talla']."</td>";
            $html.="</tr>";
            $total=$total+$arrayproducto['precio'];
        }
        $html.="<tr class='header text-light'>
                <td colspan='5 ' scope= class='sortc ' id='nombre'>Precio Total ".$total." €</td>
                </tr>";
    }else{
        $html.="<td colspan='5'><h1>No hay ningun articulo en la cesta</h1></td>";
    }
    
    echo $html;
?>
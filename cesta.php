<?php
include 'conexion.php';
include 'datafactory.php';

session_start();
    //print_r($_SESSION['cesta']);
    switch($_POST['accion']){
        case "comprar":
            $html="";
            $total=0;
            if(isset($_SESSION['cesta']) && count($_SESSION['cesta'])>0){
                $num =count($_SESSION['cesta']);
                echo $num;
                for($i=0;$i<$num;$i++){
                   // echo "<br>".count($_SESSION['cesta']);
                    $arrayproducto=json_decode(getproducto($objPDO,$_SESSION['cesta'][$i]['id']),true);
                    //print_r($arrayproducto);
                    $html.="<tr style='border-bottom:1px solid black'>";
                    $html.="<td>".$arrayproducto['nombre']."</td>";
                    $html.="<td><img src='".$arrayproducto['imagen']."' class='img-fluid imgcesta'></td>";
                    $html.="<td class='pl-2 pr-2'>".$arrayproducto['precio']."€</td>";
                    $html.="<td>".$_SESSION['cesta'][$i]['talla']."</td>";
                    $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarcuenta' class='eliminarc btn btn-danger' id='eliminar".$i."'><i class='fas fa-times '></i></a></td>";

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
        break;
        case "eliminar":
        
        unset($_SESSION['cesta'][$_POST['num']]);
           array_values($_SESSION['cesta']);
           print_r($_SESSION['cesta']);
        break;
    }
    
?>
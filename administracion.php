<?php
include 'conexion.php';
include 'datafactory.php';

    switch($_POST['query']){
        case "selectu":
            echo selectu($objPDO);
        break;
        case "sortu":
            print_r($_POST);
            echo order($_POST['sort'],$_POST['direccion'],$objPDO);
        break;
        case "selectp":
            echo selectp($objPDO);
        break;
        case "sortp":
            print_r($_POST);
            echo orderp($_POST['sort'],$_POST['direccion'],$objPDO);
        break;
        case "eliminaru":
            echo eliminarcuenta($_POST['id'],$objPDO);
          print_r($_POST);
        break;
        case "eliminarp":
           echo eliminarproducto($_POST['id'],$objPDO);
           print_r($_POST);
        break;
        case "selectd":
            echo selectd($objPDO);

        break;
        case "selectr":
            echo selectr($objPDO);

        break;
        case "selecte":
            echo selecte($objPDO);

        break;
        case "selectg":
            echo selectg($objPDO);

        break;
        case "sortd":
            echo sortd($_POST['sort'],$_POST['direccion'],$objPDO);

        break;
        case "sortr":
            echo sortr($_POST['sort'],$_POST['direccion'],$objPDO);

        break;
        case "sorte":
            echo sorte($_POST['sort'],$_POST['direccion'],$objPDO);

        break;
        case "sortg":
            echo sortg($_POST['sort'],$_POST['direccion'],$objPDO);
        break;
        case "insertd":
            echo "entra";
            echo insertd($_POST['nombre'],$objPDO);
        break;
        case "insertr":
            echo "entra";
            echo insertr($_POST['nombre'],$objPDO);
        break;
        case "inserte":
            echo "entra";
            echo inserte($_POST['nombre'],$objPDO);
        break;
        case "eliminard":
            echo "entra";
            echo eliminard($_POST['id'],$objPDO);
        break;
        case "eliminarr":
            echo "entra";
            echo eliminarr($_POST['id'],$objPDO);
        break;
        case "eliminare":
            echo "entra";
            echo eliminare($_POST['id'],$objPDO);
        break;
    }
?>
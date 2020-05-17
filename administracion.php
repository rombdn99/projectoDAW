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
    }
?>
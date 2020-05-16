<?php
    
include 'conexion.php';
include 'datafactory.php';

session_start();
echo eliminarcuenta($_SESSION['id'],$objPDO);

?>
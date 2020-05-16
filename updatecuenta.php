<?php

include 'conexion.php';
include 'datafactory.php';
session_start();
echo cambiardatos($_SESSION['id'],$_POST['direccion'],$_POST['telf'],$objPDO);

?>
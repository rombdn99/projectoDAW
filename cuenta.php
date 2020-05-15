<?php
include 'conexion.php';
include 'datafactory.php';
session_start();
	echo datosuser($_SESSION['id'],$objPDO);


?>
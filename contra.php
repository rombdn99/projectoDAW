<?php
	
	include 'conexion.php';
	include 'datafactory.php';
	
	session_start();
	echo cambiarcontra($_SESSION['id'],$_POST['contra'],$objPDO);

?>
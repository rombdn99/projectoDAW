<?php

	
	include 'conexion.php';
	include 'datafactory.php';
	echo haymas($_POST['mail'],$objPDO);
	
?>
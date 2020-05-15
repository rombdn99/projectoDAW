<?php

	include 'conexion.php';
include 'datafactory.php';
	//print_r($_POST);
	echo insertuser($_POST['nombre'],$_POST['apellido'], $_POST['correo'],$_POST['telf'],$_POST['direccion'],$_POST['contra'],$objPDO);

?>
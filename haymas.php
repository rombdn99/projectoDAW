<?php

	
	include 'conexion.php';
	include 'datafactory.php';
/*
	$usuarionuevo= new usuario($objPDO);
	$usuarionuevo->setemail('admin@gmail.com')->setnombre('admin')->setapellido('admin')->setcontra('admin')->setdireccion('direcccion')->settelefono('987654321')->Save();*/
 	echo haymas($_POST['mail'],$objPDO);
	
?>
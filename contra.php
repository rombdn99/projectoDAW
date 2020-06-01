<?php
	
	include 'conexion.php';
	include 'datafactory.php';
	
	session_start();
	if(preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,10}/",$_POST['contra'])) {
		echo cambiarcontra($_SESSION['id'],$_POST['contra'],$objPDO);
	}else{
		echo "<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>La contraseña debe contener una minuscula, una mayuscula y un numero, debe ser de una longitud de entre 6 y 10 caracteres</p>";
	}

?>
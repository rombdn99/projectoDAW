<?php

	include 'conexion.php';
include 'datafactory.php';
	//print_r($_POST);

	/*nombre /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

	apellido /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

	email /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	contra /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,10}/

	tel /^([0-9]){9}$/
*/
	$nombre=false;
	$apellido=false;
	$correo=false;
	$contra=false;
	$telf=false;
	$html="";
	if(preg_match("/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/",$_POST['nombre'])) {
		$nombre=true;
	}else{

		$html.="Nombre mal<br>";
	}
	if(preg_match("/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/",$_POST['apellido'])) {
		$apellido=true;
	}else{

		$html.= "apellido mal";
	}
	if(preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/",$_POST['correo'])) {
		$correo=true;
	}else{

		$html.= "Correo mal";
	}
	if(preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,10}/",$_POST['contra'])) {
		$contra=true;
	}else{

		$html.= "contra mal";
	}
	if(preg_match("/^([0-9]){9}$/",$_POST['telf'])) {
		$telf=true;
	}else{

		$html.= "Telefono mal";
	}
	

	if(preg_match("/^([A-Za-z0-9'\.\-\s\,]*)$/",$_POST['direccion'])) {
		$direc=true;
	}else{
		$html.= "Direccion mal";
	}
	if($nombre && $apellido && $contra && $correo && $telf && $direc){
		echo insertuser($_POST['nombre'],$_POST['apellido'], $_POST['correo'],$_POST['telf'],$_POST['direccion'],$_POST['contra'],0,$objPDO);
	}else{
		echo $html;
	}

?>
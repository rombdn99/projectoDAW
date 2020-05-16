<?php
include 'abstract.databoundobject.php';
include 'class.usuarios.php';
function insertuser($nombre,$apellido,$email,$telefono,$direccion,$contra,$objPDO){
	$usuarionuevo= new usuario($objPDO);

	$passwordh = str_replace("$","?",password_hash($contra, PASSWORD_DEFAULT));
	 $usuarionuevo->setemail($email)->setnombre($nombre)->setapellido($apellido)->setcontra($passwordh)->setdireccion($direccion)->settelefono($telefono)->Save();
	 return "good";
}

function login($email,$contra,$objPDO){

    $resultado=$objPDO->query("Select * from usuarios where email='".$email."'");
    if ($resultado->rowCount() > 0){
    	foreach ($resultado as $row) {
            $contrabbdd=$row['contra'];
        }
        if(password_verify($contra, str_replace("?","$",$contrabbdd) ) ) {
        	session_start();
        	$_SESSION['id']=$row['id'];
        	$_SESSION['nombre']=$row['nombre'];
        	$_SESSION['apellido']=$row['apellido'];
        	$_SESSION['tipo']=$row['tipo'];
            return "good";

        }else{
        	return "bad";
        }
    }else{
            return "bad";
    }
}

function haymas($mail,$objPDO){
    $resultado=$objPDO->query("select * from usuarios where email ='".$mail."'");
    //$resultado=$objPDO->query("select * from usuarios where email ='admin@gmail.com'");
    if($resultado->rowCount()>0){
        return "true";
    }else{
        return "false";
    }
}

function datosuser($id,$objPDO){
    $usuario= new usuario($objPDO,$id);

    return $usuario->getnombre().",".$usuario->getapellido().",".$usuario->gettelefono().",".$usuario->getdireccion().",".$usuario->getcontra().",".$usuario->getemail().",".$usuario->gettipo();
}

function cambiarcontra($id,$contra,$objPDO){
    $usuario= new usuario($objPDO,$id);

    if(password_verify($contra, str_replace("?","$",$usuario->getcontra() ) ) ) {
        return "bad";
    }else{
        $usuario->setcontra(str_replace("$","?",password_hash($contra, PASSWORD_DEFAULT)))->Save();
        return "good";
    }
}
function cambiardatos($id,$direccion,$telefono,$objPDO){
    $usuario= new usuario($objPDO,$id);
    $usuario->settelefono($telefono)->setdireccion($direccion)->SAVE();
    return "good";
}
function eliminarcuenta($id,$objPDO){
    $usuario=new usuario($objPDO,$id);
    $usuario->MarkForDeletion();
    unset($usuario);
    header("Location: logout.php");
}
if ($comprobar->num_rows > 0){
  echo "mail";
  if ($comprobar2->num_rows =< 0){
    echo
  } 
}else{

if ($comprobar2->num_rows > 0){
    $nuevoUsuario = new usuario($objPDO);
    $nuevoUsuario->setnombre($nombre)->setapellido($apellido)->setemail($mail)->setcontrasenya($contra)->setdireccion($direccion)->settelefono($telefono)->settipo(0)->Save();
    echo "good";
  }else{
    echo "telefono";
  }
  
}

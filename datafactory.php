<?php
include 'abstract.databoundobject.php';
include 'class.usuarios.php';
include 'class.producto.php';

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
    $usuario->settelefono($telefono)->setdireccion($direccion)->Save();
    return "good";
}
function eliminarcuenta($id,$objPDO){
    $usuario=new usuario($objPDO,$id);
    $usuario->MarkForDeletion();
    unset($usuario);
    return "good";
}

function selectu($objPDO){
    $html="";
    $resultado=$objPDO->query("select * from usuarios");
    if ($resultado->rowCount() > 0){
    	foreach ($resultado as $row) {
            $html.="<tr>";
                $html.="<td>".$row['email']."</td>";
                $html.="<td>".$row['nombre']."</td>";
                $html.="<td>".$row['apellido']."</td>";
                $html.="<td>".$row['direccion']."</td>";
                $html.="<td>".$row['telefono']."</td>";
                if($row['tipo']==1){
                    $html.="<td>Administrador</td>";
                }else{
                    $html.="<td>Usuario</td>";
                }
                $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarcuenta' class='eliminarc btn btn-danger' id='eliminarc".$row['id']."'><i class='fas fa-times '></i></a></td>";
            $html.="</tr>";
        }
        return $html;
    }else{
        return "bad";
    }
}

function order($sort,$by, $objPDO){
    $query="select * from usuarios order by ".$sort." ".$by;
    $html="";
    $resultado=$objPDO->query($query);
    if ($resultado->rowCount() > 0){
    	foreach ($resultado as $row) {
            $html.="<tr>";
                $html.="<td>".$row['email']."</td>";
                $html.="<td>".$row['nombre']."</td>";
                $html.="<td>".$row['apellido']."</td>";
                $html.="<td>".$row['direccion']."</td>";
                $html.="<td>".$row['telefono']."</td>";
                if($row['tipo']==1){
                    $html.="<td>Administrador</td>";
                }else{
                    $html.="<td>Usuario</td>";
                }
                $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarcuenta' class='eliminarc btn btn-danger' id='eliminarc".$row['id']."'><i class='fas fa-times '></i></a></td>";
            $html.="</tr>";
        }
        return $html;
    }else{
        return "bad";
    }
}

function selectp($objPDO){
    $html="";
    $resultado=$objPDO->query("select * from productos");
    if ($resultado->rowCount() > 0){
    	foreach ($resultado as $row) {
            $html.="<tr>";
                $html.="<td>".$row['nombre']."</td>";
                $html.="<td>".$row['imagen']."</td>";
                $html.="<td>".$row['descripcion']."</td>";
                $html.="<td>".$row['precio']."</td>";
                $html.="<td><ul>";
                $resultado2=$objPDO->query("select * from deporte where id = ".$row['deporte']);
                if ($resultado2->rowCount() > 0){
                    foreach ($resultado2 as $row2) {
                        $html.="<li>".$row2['nombre']."</li>";
                    }
                }
                $resultado2=$objPDO->query("select * from genero where id = ".$row['genero']);
                if ($resultado2->rowCount() > 0){
                    foreach ($resultado2 as $row2) {
                        $html.="<li>".$row2['genero']."</li>";
                    }
                }
                if($row['ropa']!=0){
                    $resultado2=$objPDO->query("select * from ropa where id = ".$row['ropa']);
                    if ($resultado2->rowCount() > 0){
                        foreach ($resultado2 as $row2) {
                            $html.="<li>".$row2['tipo']."</li>";
                        }
                    }
                }else{
                    $html.="<li>-</li>";
                }
                if($row['equipamiento']!=0){
                    $resultado2=$objPDO->query("select * from equipamiento where id = ".$row['equipamiento']);
                    if ($resultado2->rowCount() > 0){
                        foreach ($resultado2 as $row2) {
                            $html.="<li>".$row2['tipo']."</li>";
                        }
                    }
                }else{
                    $html.="<li>-</li>";
                }
                $html.="</ul></td>";
                $html.="<td  class='text-center d-flex justify-content-center'><div class='eliminarc btn btn-primary' id='eliminarp".$row['id']."'>Editar</div></td>";

                $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarproducto' class='eliminarp btn btn-danger' id='eliminarp".$row['id']."'><i class='fas fa-times '></i></a></td>";
            $html.="</tr>";
        }
        return $html;
    }else{
        return "bad";
    }
}

function orderp($sort,$by, $objPDO){
    $query="select * from productos order by ".$sort." ".$by;
    $html="";
    $resultado=$objPDO->query($query);
    if ($resultado->rowCount() > 0){
    	foreach ($resultado as $row) {
            $html.="<tr>";
                $html.="<td>".$row['nombre']."</td>";
                $html.="<td>".$row['imagen']."</td>";
                $html.="<td>".$row['descripcion']."</td>";
                $html.="<td>".$row['precio']."</td>";
                $html.="<td><ul>";
                $resultado2=$objPDO->query("select * from deporte where id = ".$row['deporte']);
                if ($resultado2->rowCount() > 0){
                    foreach ($resultado2 as $row2) {
                        $html.="<li>".$row2['nombre']."</li>";
                    }
                }
                $resultado2=$objPDO->query("select * from genero where id = ".$row['genero']);
                if ($resultado2->rowCount() > 0){
                    foreach ($resultado2 as $row2) {
                        $html.="<li>".$row2['genero']."</li>";
                    }
                }
                if($row['ropa']!=0){
                    $resultado2=$objPDO->query("select * from ropa where id = ".$row['ropa']);
                    if ($resultado2->rowCount() > 0){
                        foreach ($resultado2 as $row2) {
                            $html.="<li>".$row2['tipo']."</li>";
                        }
                    }
                }else{
                    $html.="<li>-</li>";
                }
                if($row['equipamiento']!=0){
                    $resultado2=$objPDO->query("select * from equipamiento where id = ".$row['equipamiento']);
                    if ($resultado2->rowCount() > 0){
                        foreach ($resultado2 as $row2) {
                            $html.="<li>".$row2['tipo']."</li>";
                        }
                    }
                }else{
                    $html.="<li>-</li>";
                }
                $html.="</ul></td>";
                $html.="<td  class='text-center d-flex justify-content-center'><div class='eliminarc btn btn-primary' id='eliminarp".$row['id']."'>Editar</div></td>";
                
                $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarproducto' class='eliminarp btn btn-danger' id='eliminarp".$row['id']."'><i class='fas fa-times '></i></a></td>";
            $html.="</tr>";
        }
        return $html;
    }else{
        return "bad";
    }
}

function eliminarproducto($id,$objPDO){
    $producto=new producto($objPDO,$id);
    $producto->MarkForDeletion();
    unset($producto);
    return "good";
}

function selectd($objPDO){
    $resultado=$objPDO->query("Select * from deporte");
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr>";
            $html.="<td>".$row['nombre']."</td>";
            $html.="<td><i class='fas fa-times '></i></td>";

            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}

function selectr($objPDO){
    $resultado=$objPDO->query("Select * from ropa");
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr>";
            $html.="<td>".$row['tipo']."</td>";
            $html.="<td><i class='fas fa-times '></i></td>";

            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}

function selecte($objPDO){
    $resultado=$objPDO->query("Select * from equipamiento");
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr>";
            $html.="<td>".$row['tipo']."</td>";
            $html.="<td><i class='fas fa-times '></i></td>";

            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}
function selectg($objPDO){
    $resultado=$objPDO->query("Select * from genero");
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr>";
            $html.="<td>".$row['genero']."</td>";
            $html.="<td><i class='fas fa-times '></i></td>";

            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}

function cargarcategorias($objPDO){
    $resultado1=$objPDO->query("Select * from ropa");
    $resultado2=$objPDO->query("Select * from deporte");
    $resultado3=$objPDO->query("Select * from equipamiento");
    $resultado4=$objPDO->query("Select * from genero");
    $html="";
    /*
    <input type='radio' id='baloncesto' name='deporte' value='baloncesto'>
    <label for='baloncesto'>Baloncesto</label><br>
    <input type='radio' id='ciclismo' name='deporte' value='ciclismo'>
    <label for='ciclismo'>Ciclismo</label><br>
    <input type='radio' id='futbol' name='deporte' value='futbol'>
    <label for='futbol'>Futbol</label>
</div>*/
    if ($resultado4->rowCount() > 0){
        $html.=   " <div id='genero'>     
        <div class='font-weight-bold text-capitalize'>genero</div>
        ";

        foreach ($resultado4 as $row) {
            $html.="<input type='radio' id='".$row['genero']."' name='genero' value='".$row['id']."'>
            <label for='".$row['genero']."'>".$row['genero']."</label><br>";
        }
        $html.="</div>";

        if ($resultado2->rowCount() > 0){
            $html.=   " <div id='deportes'>     
                            <div class='font-weight-bold text-capitalize'>deportes</div>
            ";

            foreach ($resultado2 as $row) {
                $html.="<input type='radio' id='".$row['nombre']."' name='deportes' value='".$row['id']."'>
                <label for='".$row['nombre']."'>".$row['nombre']."</label><br>";
            }
            $html.="</div>";
            if ($resultado1->rowCount() > 0){
                $html.=   " <div id='ropa'>     
                <div class='font-weight-bold text-capitalize'>Ropa</div>
                ";
        
                foreach ($resultado1 as $row) {
                    $html.="<input type='radio' id='".$row['tipo']."' name='ropa' value='".$row['id']."'>
                    <label for='".$row['tipo']."'>".$row['tipo']."</label><br>";
                }
                $html.="</div>";
                if ($resultado3->rowCount() > 0){
                    $html.=   " <div id='equipamiento'>     
                    <div class='font-weight-bold text-capitalize'>equipamiento</div>
                    ";
            
                    foreach ($resultado3 as $row) {
                        $html.="<input type='radio' id='".$row['tipo']."' name='equipamiento' value='".$row['id']."'>
                        <label for='".$row['tipo']."'>".$row['tipo']."</label><br>";
                    }
                    $html.="</div>";
                    
                }
            }


        }
    }
        return $html;
    
}
//echo nuevoprod($_POST['nombre'],$_POST['fichero'],$_POST['descripcion'],$_POST['precio'],$_POST['deporte'],$_POST['genero'],$_POST['ropa'],$_POST['equipamiento'], $objPDO);

function nuevoprod($nombre,$imagen,$descripcion,$precio,$deporte,$genero,$ropa,$equipamiento,$objPDO){
    
    $resultado1=$objPDO->query("Select * from productos where nombre='".$nombre."'");

    if ($resultado1->rowCount() <= 0){
        $producto = new producto($objPDO);
        $producto->setnombre($nombre)->setimagen($imagen)->setdescripcion($descripcion)->setprecio($precio)->setdeporte($deporte)->setgenero($genero)->setropa($ropa)->setequipamiento($equipamiento)->Save();
        return "good";
    }else{
        return "bad";
    }

}

function buscar($objPDO){
    $resultado1=$objPDO->query("Select * from productos");
    $html="";
    if ($resultado1->rowCount() > 0){
        foreach ($resultado1 as $row) {
            $html.="<div class='col-3 pt-3'>";
            $html.=    "<div class='bg-light producto'>";
            $html.=        "<div class='imgprod'>";
            $html.=            "<img src='".$row['imagen']."' class='col img-fluid p-0'>";
            $html.=        "</div>";
            $html.=        "<div class='col'>".$row['precio']." €</div>";
            $html.=        "<div class='col nombre'>".$row['nombre']."</div>";
            $html.=    "</div>";
            $html.= "</div>";

        }
        return $html;
    }else{
        return "bad";
    }
}
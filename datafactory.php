<?php
include 'abstract.databoundobject.php';
include 'class.usuarios.php';
include 'class.producto.php';
include 'class.hproducto.php';
include 'class.pedidos.php';

include 'class.deporte.php';
include 'class.equipamiento.php';
include 'class.genero.php';
include 'class.ropa.php';



function insertuser($nombre,$apellido,$email,$telefono,$direccion,$contra,$admin,$objPDO){
	$usuarionuevo= new usuario($objPDO);

	$passwordh = str_replace("$","?",password_hash($contra, PASSWORD_DEFAULT));
	 $usuarionuevo->setemail($email)->setnombre($nombre)->setapellido($apellido)->setcontra($passwordh)->setdireccion($direccion)->settelefono($telefono)->settipo($admin)->Save();
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
            $html.="<tr style='border-bottom:1px solid black'>>";
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
            $html.="<tr style='border-bottom:1px solid black'>>";
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
            $html.="<tr style='border-bottom:1px solid black'>>";
                $html.="<td>".$row['nombre']."</td>";
               $html.="<td><img src='".$row['imagen']."' class='img-fluid imgprod'></td>";

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
                $html.="<td  class='text-center d-flex justify-content-center'><div class='editarp btn btn-primary' id='editarp".$row['id']."'>Editar</div></td>";

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
            $html.="<tr style='border-bottom:1px solid black'>>";
                $html.="<td>".$row['nombre']."</td>";
                $html.="<td><img src='".$row['imagen']."' class='img-fluid imgprod'></td>";
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
                               $html.="<td  class='text-center d-flex justify-content-center'><div class='editarp btn btn-primary' id='editarp".$row['id']."'>Editar</div></td>";
                
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
    unlink($producto->getimagen());

    unset($producto);
    return "good";
}

function selectd($objPDO){
    $resultado=$objPDO->query("Select * from deporte");
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['nombre']."</td>";
            $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminardeporte' class='eliminard btn btn-danger' id='eliminard".$row['id']."'><i class='fas fa-times '></i></a></td>";

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
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['tipo']."</td>";
            $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarropa' class='eliminarr btn btn-danger' id='eliminarr".$row['id']."'><i class='fas fa-times '></i></a></td>";

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
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['tipo']."</td>";
            $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarequip' class='eliminare btn btn-danger' id='eliminare".$row['id']."'><i class='fas fa-times '></i></a></td>";

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
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['genero']."</td>";

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
        $hproducto= new hproducto($objPDO);
        date_default_timezone_set('Europe/Madrid');
        $fecha = date("Y-m-d H:i:s");                           // 20010310
        $hproducto->setnombre($nombre)->setimagen($imagen)->setdescripcion($descripcion)->setprecio($precio)->setdeporte($deporte)->setgenero($genero)->setropa($ropa)->setequipamiento($equipamiento)->setfecha($fecha)->Save();

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
            $html.=  "<div class='col img-fluid p-0' style='background-image: url(\"".$row['imagen']."\")'></div>";

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

function buscar2($objPDO){
    $resultado1=$objPDO->query("Select * from productos");
    $html="";
    if ($resultado1->rowCount() > 0){
        foreach ($resultado1 as $row) {
            $html.="<div class='col-3 pt-3'>";
            $html.=    "<div class='bg-light producto'>";
            $html.=        "<div class='imgprod'>";
            $html.=  "<div class='col img-fluid p-0' style='background-image: url(\"".$row['imagen']."\")'></div>";

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

function getproducto($objPDO,$id){
    $query="select * from productos where id=".$id;
    $resultado=$objPDO->query($query);
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
        }
        return json_encode($row);
    }else{
            return "bad";
    }
}
function updateproducto($nombre,$imagen,$descripcion,$precio,$deporte,$genero,$ropa,$equipamiento,$id,$objPDO){
    $resultado1=$objPDO->query("Select * from productos where nombre='".$nombre."'");

    $producto = new producto($objPDO,$id);
    
    $nombreantiguo=$producto->getnombre();
    $imgantigua=$producto->getimagen();
    $descripcionantigua=$producto->getdescripcion();
    $precionantigua=$producto->getprecio();
    $deporteantigua=$producto->getdeporte();
    $equipamientoantigua=$producto->getequipamiento();
    $ropaantigua=$producto->getropa();
    $generoantigua=$producto->getgenero();
    $producto->setnombre($nombre)->setimagen($imagen)->setdescripcion($descripcion)->setprecio($precio)->setdeporte($deporte)->setgenero($genero)->setropa($ropa)->setequipamiento($equipamiento)->Save();
    $resultado1=$objPDO->query("Select * from productos where nombre='".$nombre."'");
    if ($resultado1->rowCount() <= 1){
        return "good";
    }else{
        $producto->setnombre($nombreantiguo)->setimagen($imgantigua)-> setdescripcion($descripcionantigua)->setprecio($precionantigua)->setdeporte($deporteantigua)->setgenero($generoantigua)->setropa($ropaantigua)->setequipamiento($equipamientoantigua)->Save();

        return "bad";
    }

    return $nombre." ".$imagen." ".$descripcion." ".$precio." ".$deporte." ".$genero." ".$ropa." ".$equipamiento." ";
    
}
function updateproducto2($nombre,$imagen,$descripcion,$precio,$deporte,$genero,$ropa,$equipamiento,$id,$objPDO){
    $resultado1=$objPDO->query("Select * from productos where nombre='".$nombre."'");

    /*if ($resultado1->rowCount() <= 0){
        $producto = new producto($objPDO,$id);
        $producto->setnombre($nombre)->setimagen($imagen)->setdescripcion($descripcion)->setprecio($precio)->setdeporte($deporte)->setgenero($genero)->setropa($ropa)->setequipamiento($equipamiento)->Save();
        return $nombre." ".$imagen." ".$descripcion." ".$precio." ".$deporte." ".$genero." ".$ropa." ".$equipamiento." ";
    }else{
        return "bad";
    }*/
    $producto = new producto($objPDO,$id);

    $nombreantiguo=$producto->getnombre();
        $imgantigua=$producto->getimagen();
        $producto->setnombre($nombre)->setimagen($imagen)->setdescripcion($descripcion)->setprecio($precio)->setdeporte($deporte)->setgenero($genero)->setropa($ropa)->setequipamiento($equipamiento)->Save();

    $resultado1=$objPDO->query("Select * from productos where nombre='".$nombre."'");
        if ($resultado1->rowCount() <= 1){
            return "good";
        }else{
            $producto->setnombre($nombreantiguo)->setimagen($imgantigua)->Save();

            return "bad";
        }
    return "good";
}
function getcategoria($objPDO){
    $html="";
    $resultado2=$objPDO->query("select * from deporte");
    if ($resultado2->rowCount() > 0){
        $html.="<li class='list-group-item deporte pt-5'>Deporte <ul class='p-0'>";
        foreach ($resultado2 as $row2) {
            $html.="<li class='list-group-item categoria' id='d-".$row2['id']."'>".$row2['nombre']."</li>";
        }
        $html.="</ul></li>";
    }
    $resultado2=$objPDO->query("select * from genero ");
    if ($resultado2->rowCount() > 0){
        $html.="<li class='list-group-item genero'>Genero <ul class='p-0'>";

        foreach ($resultado2 as $row2) {
            $html.="<li class='list-group-item categoria' id='g-".$row2['id']."'>".$row2['genero']."</li>";
        }
        $html.="</ul></li>";

    }
        $resultado2=$objPDO->query("select * from ropa ");
        if ($resultado2->rowCount() > 0){
            $html.="<li class='list-group-item ropa'>Ropa <ul class='p-0'>";

            foreach ($resultado2 as $row2) {
                $html.="<li class='list-group-item categoria' id='r-".$row2['id']."'>".$row2['tipo']."</li>";
            }
                    $html.="</ul></li>";

        }
    
        $resultado2=$objPDO->query("select * from equipamiento ");
        if ($resultado2->rowCount() > 0){
            $html.="<li class='list-group-item equipamiento'>Equipamiento <ul class='p-0'>";

            foreach ($resultado2 as $row2) {
                $html.="<li class='list-group-item categoria' id='e-".$row2['id']."'>".$row2['tipo']."</li>";
            }
            $html.="</ul></li>";

        }
    
    return $html;
}

function filtro($select,$objPDO){
    //return $select;
    $resultado1=$objPDO->query($select);
    $html="";
    if ($resultado1->rowCount() > 0){
        foreach ($resultado1 as $row) {
            $html.="<div class='col-lg-3 col-12 col-md-4 pt-3 productobody pb-2' id='buscar".$row['id']."'>";
            $html.=    "<div class='bg-light producto'>";
            $html.=        "<div class='imgprod'>";
            $html.=  "<div class='col  img-fluid p-0' style='background-image: url(\"".$row['imagen']."\")'></div>";

            $html.=        "</div>";
            $html.=        "<div class='col precio'>".$row['precio']." €</div>";
            $html.=        "<div class='col nombre'>".$row['nombre']."</div>";
            $html.=    "</div>";
            $html.= "</div>";

        }
        return $html;
    }else{
        return "bad";
    }
}
function sortd($sort,$direccion,$objPDO){
    $resultado=$objPDO->query("Select * from deporte order by ".$sort." ".$direccion);
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['nombre']."</td>";
            $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminardeporte' class='eliminard btn btn-danger' id='eliminard".$row['id']."'><i class='fas fa-times '></i></a></td>";

            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}
function sortr($sort,$direccion,$objPDO){
    $resultado=$objPDO->query("Select * from ropa order by ".$sort." ".$direccion);
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr>";
            $html.="<td>".$row['tipo']."</td>";
            $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarropa' class='eliminarr btn btn-danger' id='eliminarr".$row['id']."'><i class='fas fa-times '></i></a></td>";
            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}
function sorte($sort,$direccion,$objPDO){
    $resultado=$objPDO->query("Select * from equipamiento order by ".$sort." ".$direccion);
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['tipo']."</td>";
            $html.="<td  class='text-center d-flex justify-content-center'><a type='button'  data-toggle='modal' data-target='#eliminarequip' class='eliminare btn btn-danger' id='eliminare".$row['id']."'><i class='fas fa-times '></i></a></td>";

            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}
function sortg($sort,$direccion,$objPDO){
    $resultado=$objPDO->query("Select * from genero order by ".$sort." ".$direccion);
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['genero']."</td>";

            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}

function insertd($nombre,$objPDO){
    $deporte = new deporte($objPDO);
    $deporte->setnombre($nombre)->Save();
    return "good";
}
function inserte($nombre,$objPDO){
    $equipamiento = new equipamiento($objPDO);
    $equipamiento->settipo($nombre)->Save();
    return "good";
}
function insertr($nombre,$objPDO){
    $ropa = new ropa($objPDO);
    $ropa->settipo($nombre)->Save();
    return "good";
}
function insertg($nombre,$objPDO){
    $ropa = new ropa($objPDO);
    $ropa->setgenero($nombre)->Save();
    return "good";
}
function eliminare($id,$objPDO){
    $equipamiento=new equipamiento($objPDO,$id);
    $equipamiento->MarkForDeletion();
    unset($equipamiento);
    return "good";
}
function eliminarr($id,$objPDO){
    $ropa=new ropa($objPDO,$id);
    $ropa->MarkForDeletion();
    unset($ropa);
    return "good";
}
function eliminard($id,$objPDO){
    $deporte=new deporte($objPDO,$id);
    $deporte->MarkForDeletion();
    unset($deporte);
    return "good";
}
function selectpe($objPDO){
    $query="select usuarios.`email`, productos.nombre,pedidos.fecha,pedidos.hora,pedidos.talla from usuarios, productos, pedidos where usuarios.id=pedidos.id_usuario and productos.id=pedidos.id_producto
    ";
    $resultado=$objPDO->query($query);

    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['email']."</td>";
            $html.="<td>".$row['nombre']."</td>";
            $html.="<td>".$row['talla']."</td>";
            $html.="<td>".$row['fecha']."</td>";
            $html.="<td>".$row['hora']."</td>";
            $html.="</tr>";
        }
        return $html;
    }else{
            return "bad";
    }
}
function sortpe($sort,$by, $objPDO){
    $query="select usuarios.`email`, productos.nombre,pedidos.fecha,pedidos.hora,pedidos.talla  from usuarios, productos, pedidos where usuarios.id=pedidos.id_usuario and productos.id=pedidos.id_producto order by ".$sort." ".$by;
    $resultado=$objPDO->query($query);
    $html="";
    if ($resultado->rowCount() > 0){
        $html="";
    	foreach ($resultado as $row) {
            $html.="<tr style='border-bottom:1px solid black'>>";
            $html.="<td>".$row['email']."</td>";
            $html.="<td>".$row['nombre']."</td>";
            $html.="<td>".$row['talla']."</td>";
            $html.="<td>".$row['fecha']."</td>";
            $html.="<td>".$row['hora']."</td>";
            $html.="</tr>";
        }
        return $html;
    }else{
        return "bad";
    }
    
}
function masvendidos($objPDO){
    $query="SELECT `id_producto`,COUNT(`id_producto`) as 'numero' FROM pedidos,productos where pedidos.id_producto=productos.id GROUP BY `id_producto` ORDER by numero desc LIMIT 4";
    $resultado=$objPDO->query($query);
    $html="";

    if ($resultado->rowCount() > 0){
        foreach ($resultado as $row) {
            $producto=new producto($objPDO,$row['id_producto']);


            $html.="<div class='col-md-3 col-12 pt-3 productobody ' id='p".$producto->getid()."'>";
            $html.=    "<div class='bg-light producto'>";
            $html.=        "<div class='imgprod'>";
            $html.=  "<div class='col  img-fluid p-0' style='background-image: url(\"".$producto->getimagen()."\")'></div>";

            $html.=        "</div>";
            $html.=        "<div class='col precio'>".$producto->getprecio()." €</div>";
            $html.=        "<div class='col nombre'>".$producto->getnombre()."</div>";
            $html.=    "</div>";
            $html.= "</div>";

            unset($producto);
        }
    }else{
        $html.="ERROR no hay nada en la BBDD";
    }
    return $html;

}

function cesta($idu,$idp,$talla,$objPDO){
    $pedido=new pedidos($objPDO);
    date_default_timezone_set('Europe/Madrid');

    $fecha = date("Y-m-d");     // 20010310
    $hora = date("H:i:s");

    $pedido->setid_usuario($idu)->setid_producto($idp)->settalla($talla)->setfecha($fecha)->sethora($hora)->SAVE();
    return "good";
    //return $idu . " ".$idp." ".$talla;
}
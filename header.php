<?php
session_start();
	if (isset($_SESSION['id'])) {
		$html= "<a class='nav-link dropbtn especial' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					".$_SESSION['nombre']." ".$_SESSION['apellido']."
				</a>
				<div class='dropdown-content' aria-labelledby='navbarDropdown'>
					<a class='dropdown-item' href='cuenta.html'>Mi cuenta</a>";
		if($_SESSION['tipo']==1){
			$html.= "
				<a class='dropdown-item' href='administracion.html'>Administracion de pagina</a>
			";
		}			
					
	  	$html.="	<a class='dropdown-item' href='logout.php'>Cerrar Sesion</a>
	  			</div>
			  ";
		echo $html;
	}else{
		echo "<a class='nav-link' href='login.html''>Inicio de sesion</a>";
	}
?>
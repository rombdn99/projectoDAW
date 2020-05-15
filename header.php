<?php
session_start();
	if (isset($_SESSION['id'])) {
		echo "				<a class='nav-link dropbtn' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
	  							".$_SESSION['nombre']." ".$_SESSION['apellido']."
	  						</a>
	  						<div class='dropdown-content' aria-labelledby='navbarDropdown'>
	  							<a class='dropdown-item' href='cuenta.html'>Mi cuenta</a>
	  							<a class='dropdown-item' href='logout.php'>Cerrar Sesion</a>

	  						</div>
	  		";
	}else{
		echo "<a class='nav-link' href='login.html''>Inicio de sesion</a>";
	}
?>
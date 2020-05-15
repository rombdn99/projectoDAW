<?php
//print_r($_POST);
include 'conexion.php';
include 'datafactory.php';

echo login($_POST['email'],$_POST['contra'],$objPDO);

?>
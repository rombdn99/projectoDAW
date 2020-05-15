<?php
include 'class.pdofactory.php';

$dsn = "mysql:host=localhost;dbname=projecto";
$objPDO = new PDO($dsn, "root", "",array()); 
$objPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
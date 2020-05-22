<?php
    echo $_POST['id'];
    session_start();
    $_SESSION['cesta'][0]=$_POST['id'];
?>
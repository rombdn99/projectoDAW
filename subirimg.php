<?php
    $allowedExts = array("gif", "jpeg", "jpg", "png");

    $temp = explode("/", $_FILES["file"]["type"]);
    $extension = end($temp);

    if ((($_FILES["file"]["type"] == "image/gif")
    || ($_FILES["file"]["type"] == "image/jpeg")
    || ($_FILES["file"]["type"] == "image/jpg")
    || ($_FILES["file"]["type"] == "image/pjpeg")
    || ($_FILES["file"]["type"] == "image/x-png")
    || ($_FILES["file"]["type"] == "image/png"))
    && ($_FILES["file"]["size"] < 20000000)
    && in_array($extension, $allowedExts)){

        if (file_exists("img/" . $_FILES["file"]["name"])){
            echo $_FILES["file"]["name"] . " already exist in the server. "; 
        }else{
            $rutafinal ="img/".$_FILES["file"]["name"].".".$extension;
            move_uploaded_file($_FILES["file"]["tmp_name"],$rutafinal);
            echo $rutafinal;

        }

    }else{
        //echo "no valid file ".$_FILES["file"]["type"] ." ".$extension;
        print($_FILES["file"]['type']);
        //print_r($_FILES['file']);
    } 
?>

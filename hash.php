	<?php

	$passwordh = str_replace("$","?",password_hash("admin", PASSWORD_DEFAULT));
	echo $passwordh;
?>
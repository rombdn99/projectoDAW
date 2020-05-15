	$.post('header.php',{ contra: $("#contra").val(), email: $("#email").val() })
		.done(function(data,textStatus,jqXHR){
			console.log("Solicitud se ha completado correctamente "+ textStatus);
			console.log(data);
			$("#sesion").html(data)
					// location.replace("login.html")

		})
	    .fail(function(data,textStatus,jqXHR){
	    	$("#ejer3").html("Error: " + textStatus + ": " + jqXHR);
	    })
    	.always(function(data,textStatus,jqXHR){
      		console.log("header.php")
    	})

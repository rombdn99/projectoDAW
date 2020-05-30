// recibe todos los datos del usuario
$.post('cuenta.php')
	.done(function(data,textStatus,jqXHR){
		console.log("Solicitud se ha completado correctamente "+ textStatus);
		console.log(data);
		//$("#sesion").html(data)
		// location.replace("login.html")
	    separado = data.split(",");
	    $("#nombre").html(separado[0]);
	   	$("#apellido").html(separado[1]);
	    $("#tel").val(separado[2]);
	    $("#direc").val(separado[3]);
	    $("#mail").html(separado[5]);

	})
	.fail(function(data,textStatus,jqXHR){
		$("#ejer3").html("Error: " + textStatus + ": " + jqXHR);
	})
	.always(function(data,textStatus,jqXHR){
			console.log("cuenta.php")
	})

//eventos cambio de contraseña
$("#contra").blur(Verificacontra);
$("#contraUpdateRep").blur(Verificacontra2);
$("#saveNuevaContra").click(function(){
	if(Verificacontra() && Verificacontra2()){
		console.log("entra");
		$.post('contra.php',{contra:$("#contra").val()})
			.done(function(data,textStatus,jqXHR){
				console.log("Solicitud se ha completado correctamente "+ textStatus);
				console.log(data);
				if(data=="good"){
					$("#errorcontraigual").addClass("d-none");
					$("#errorcontraigual").removeClass("d-flex");
					$("#cerrar").click()
				}else if(data=="bad"){
					$("#errorcontraigual").addClass("d-flex");
			  		$("#errorcontraigual").removeClass("d-none");
					$("#errorcontraigual").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>Esta contraseña es la misma que tenias anteriormente</p>")
				}
				//$("#sesion").html(data)
				// location.replace("login.html")
				

			})
			.fail(function(data,textStatus,jqXHR){
				$("#ejer3").html("Error: " + textStatus + ": " + jqXHR);
			})
			.always(function(data,textStatus,jqXHR){
					console.log("cambiarcuenta.php")
			})
}else{
	console.log("no entra")
}
})
function Verificacontra(){
	$(this).attr("style","outline: initial");
	var errores1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,10}/
	var extepcion1 =errores1.test($("#contra").val())
	if(($("#contra").val()!="")&& extepcion1){
		$("#errorContra").addClass("d-none");
		return true
	}else{
		$("#errorContra").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>La contraseña debe contener una minuscula, una mayuscula y un numero, debe ser de una longitud de entre 6 y 10 caracteres</p>");
		return false;
	}
}
function Verificacontra2(){
  	if($("#contra").val()==$("#contraUpdateRep").val()){
      	$("#errorUpdateContra").addClass("d-none");
		console.log("contra")
		$("#errorUpdateContra").removeClass("d-flex");
  		return true;
  	}else{
		$("#errorUpdateContra").addClass("d-flex");
  		$("#errorUpdateContra").removeClass("d-none");
  		$("#errorUpdateContra").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>Las dos contraseñas deben ser iguales")
		console.log("assfdasd")
  		return false;
  	}
}


// eventos editar campos tel y direccion
$("#tel").blur(Verificatelf);
$("#direc").blur(Verificadireccion);
$("#editar").click(function(){
	console.log("editar");
	if(Verificadireccion() && Verificatelf()){
		$.post('updatecuenta.php',{direccion:$("#direc").val(), telf:$("#tel").val()})
			.done(function(data,textStatus,jqXHR){

				console.log("Solicitud se ha completado correctamente "+ textStatus);
				console.log(data);
				if(data=="good"){
					$("#mensajeeditar").addClass("d-flex");
			  		$("#mensajeeditar").removeClass("d-none");
					$("#mensajeeditar").html("<i class='fa fa-check text-success p-0 mt-1 '></i><p class='text-dark '>Los cambios se han echo correctamente</p>")
					
					setTimeout(function(){
						$("#mensajeeditar").addClass("d-none");
						$("#mensajeeditar").removeClass("d-flex");
					
					},3000);
				}else{
					$("#mensajeeditar").addClass("d-flex");
			  		$("#mensajeeditar").removeClass("d-none");
					$("#mensajeeditar").html("<i class='fa fa-close text-danger p-0 mt-1'></i><p class='text-dark '>Ha habido un error inseperado, intentalo en otro momento</p>")
				}
				//$("#sesion").html(data)
				// location.replace("login.html")
				

			})
			.fail(function(data,textStatus,jqXHR){
				$("#ejer3").html("Error: " + textStatus + ": " + jqXHR);
			})
			.always(function(data,textStatus,jqXHR){
					console.log("cambiarcuenta.php")
			})
	}else{
		console.log("error")
	}
})
$("#eliminarcuenta").click(function(){
	console.log("eliminar");
	$.post('eliminarcuenta.php',{direccion: $("#direc").val(), telf:$("#tel").val()})
			.done(function(data,textStatus,jqXHR){

				console.log("Solicitud se ha completado correctamente "+ textStatus);
				console.log(data);
				
				//$("#sesion").html(data)
				location.replace("logout.php")
				

			})
			.fail(function(data,textStatus,jqXHR){
				$("#ejer3").html("Error: " + textStatus + ": " + jqXHR);
			})
			.always(function(data,textStatus,jqXHR){
					console.log("updatecuenta.php")
			})
})


function Verificatelf(){
	 $(this).attr("style","outline: initial");
	 var errores1 =  /^([0-9]){9}$/
	 var extepcion1 =errores1.test($("#tel").val())
	 if(($("#tel").val()!="") && extepcion1){
		$("#errorTelefono").removeClass("d-flex");
		$("#errorTelefono").addClass("d-none");
		return true
	 }else{
		$("#errorTelefono").addClass("d-flex");

		$("#errorTelefono").removeClass("d-none");
		$("#errorTelefono").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>El telefono deben ser 9 numeros</p>");
		return false
	 }
	 
   }
   function Verificadireccion(){
	//console.log("dir");
	var errores1 =  /^([A-Za-z0-9'\.\-\s\,]*)$/
  
	var extepcion1 =errores1.test($("#direccion").val())
  
	$(this).attr("style","outline: initial");
	if(($("#direccion").val()!="") && extepcion1){
		$("#errorDireccion").addClass("d-none");
		return true
	}else{
		$("#errorDireccion").removeClass("d-none");
		$("#errorDireccion").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>La direccion no puede tener los simbolos &(%#$^)</p>");
  
		return false
	}
	
  }
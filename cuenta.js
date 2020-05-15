$.post('cuenta.php')
	.done(function(data,textStatus,jqXHR){
		console.log("Solicitud se ha completado correctamente "+ textStatus);
		console.log(data);
		//$("#sesion").html(data)
		// location.replace("login.html")
	    separado = data.split(",");
	    $("#nombre").val(separado[0]);
	   	$("#apellido").val(separado[1]);
	    $("#tel").val(separado[2]);
	    $("#direc").val(separado[3]);
	    $("#mail").val(separado[5]);

	})
	.fail(function(data,textStatus,jqXHR){
		$("#ejer3").html("Error: " + textStatus + ": " + jqXHR);
	})
	.always(function(data,textStatus,jqXHR){
			console.log("header.php")
	})
$("#contra").blur(Verificacontra);
$("#contraUpdateRep").blur(Verificacontra2);

$("#saveNuevaContra").click(function(){
	if(Verificacontra() && Verificacontra2()){
		console.log("entra")
	/*$.post('contra.php',{contra: $("#contra").val()})
	.done(function(data,textStatus,jqXHR){
		console.log("Solicitud se ha completado correctamente "+ textStatus);
		console.log(data);
		if(data=="good"){
			$("#cerrar").click()
		}
		//$("#sesion").html(data)
		// location.replace("login.html")
	    

	})
	.fail(function(data,textStatus,jqXHR){
		$("#ejer3").html("Error: " + textStatus + ": " + jqXHR);
	})
	.always(function(data,textStatus,jqXHR){
			console.log("header.php")
	})*/
}else{
	console.log("no entra")
}
})

function Verificacontra(){
 // console.log("contra")
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
 // console.log("contra")
  	if($("#contra").val()==$("#contraUpdateRep").val()){
      $("#errorUpdateContra").addClass("d-none");

  		return true;
  	}else{
  		      $("#errorUpdateContra").removeClass("d-none");

  		  		$("#errorUpdateContra").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>Las dos contraseñas deben ser iguales")

  		return false;
  	}

}
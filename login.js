$("#login").click(function(){
  $.post('login.php',{ contra: $("#contra").val(), email: $("#email").val() })
    .done(function(data,textStatus,jqXHR){
      console.log("Solicitud se ha completado correctamente "+ textStatus);
      //console.log(data);
      if (data=="good") {
        location.replace("index.html")
        console.log("login ok");
      }else if(data=="bad"){
        $("#mensage").html("<i class='fa fa-close text-danger p-0 mt-1 mr-3'></i>Estos datos son incorrectos");
      }else{
        $("#mensage").html("<i class='fa fa-close text-danger p-0 mt-1 mr-3'></i>error: error desconocido en login.php");
        console.log(data)
      }
     // location.replace("login.html")

    })
    .fail(function(data,textStatus,jqXHR){
      ("#ejer3").html("Error: " + textStatus + ": " + jqXHR);
    })
    .always(function(data,textStatus,jqXHR){
      console.log("login.php")
    })
})
$("#ojo").mouseover(function(){
  console.log("aasd")
    $("#contra").attr("type","text")
})

$("#ojo").mouseout(function(){
    $("#contra").attr("type","password")
})
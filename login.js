$("#login").click(function(){
  $.post('login.php',{ contra: $("#contra").val(), email: $("#email").val() })
    .done(function(data,textStatus,jqXHR){
      console.log("Solicitud se ha completado correctamente "+ textStatus);
      //console.log(data);
      if (data=="good") {
        location.replace("index.html")
        console.log("login ok");
      }else if(data=="bad"){
        console.log("login nok");
      }else{
        console.log("error: error desconocido en login.php");
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
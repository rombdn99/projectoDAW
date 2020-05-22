$.post('cesta.php')
.done(function(data,textStatus,jqXHR){
    //console.log("Solicitud se ha completado correctamente "+ textStatus);
   console.log(data);
})
.fail(function(data,textStatus,jqXHR){
    console.log("Error: " + textStatus + ": " + jqXHR);
})
.always(function(data,textStatus,jqXHR){
    console.log("cesta.php")
})
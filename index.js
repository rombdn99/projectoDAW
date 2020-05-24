$.post('index.php')
.done(function(data,textStatus,jqXHR){
    //console.log("Solicitud se ha completado correctamente "+ textStatus);
    $(".masvendidos").html(data);
})
.fail(function(data,textStatus,jqXHR){
    console.log("Error: " + textStatus + ": " + jqXHR);
})
.always(function(data,textStatus,jqXHR){
    console.log("Cargar datos")
})
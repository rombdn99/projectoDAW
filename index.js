$.post('indexphp.php')
.done(function(data,textStatus,jqXHR){
    //console.log("Solicitud se ha completado correctamente "+ textStatus);
    $(".masvendidos").html(data);
    $(".productobody").click(function(){
        console.log($(this).attr("id").replace('p',''));
        //location.replace("producto.html?id="+$(this).attr("id").replace('buscar',''))
    })
})
.fail(function(data,textStatus,jqXHR){
    console.log("Error: " + textStatus + ": " + jqXHR);
})
.always(function(data,textStatus,jqXHR){
    console.log("Cargar datos")
})

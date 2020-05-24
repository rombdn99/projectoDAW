$.post('cesta.php')
.done(function(data,textStatus,jqXHR){
    //console.log("Solicitud se ha completado correctamente "+ textStatus);
   $("#tcesta").html(data);
   eventos();
})
.fail(function(data,textStatus,jqXHR){
    console.log("Error: " + textStatus + ": " + jqXHR);
})
.always(function(data,textStatus,jqXHR){
    console.log("cesta.php")
})

function eventos(){
    $("#comprar").click(function(){
        console.log("comprar");
        $.post('comprar.php')
        .done(function(data,textStatus,jqXHR){
            //console.log("Solicitud se ha completado correctamente "+ textStatus);
            $("#mensage").html(data);

            $.post('cesta.php')
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
               $("#tcesta").html(data);
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("cesta.php")
            })        
        })
        .fail(function(data,textStatus,jqXHR){
            console.log("Error: " + textStatus + ": " + jqXHR);
        })
        .always(function(data,textStatus,jqXHR){
            console.log("cesta.php")
        })
    })
}
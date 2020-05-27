$.post('cesta.php',{accion:"comprar"})
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
        $.post('comprar.php',{accion:"comprar"})
        .done(function(data,textStatus,jqXHR){
            //console.log("Solicitud se ha completado correctamente "+ textStatus);
            $("#mensage").html(data);

            $.post('cesta.php',{accion:"comprar"})
            .done(function(data,textStatus,jqXHR){
                //console.log(data);
               $("#tcesta").html(data);
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("cesta2.php")
            })
                
        })
        .fail(function(data,textStatus,jqXHR){
            console.log("Error: " + textStatus + ": " + jqXHR);
        })
        .always(function(data,textStatus,jqXHR){
            console.log("cesta.php")
        })
    })
    $(".eliminarc").click(function(){
        num=$(this).attr("id").replace('eliminar','');
        console.log("id: "+num)
        $.post('cesta.php',{accion:"eliminar",num:num})
            .done(function(data,textStatus,jqXHR){
                console.log(data);
                $.post('cesta.php',{accion:"comprar"})
                .done(function(data,textStatus,jqXHR){
                    //console.log(data);
                   $("#tcesta").html(data);
                })
                .fail(function(data,textStatus,jqXHR){
                    console.log("Error: " + textStatus + ": " + jqXHR);
                })
                .always(function(data,textStatus,jqXHR){
                    console.log("cesta2.php")
                })    
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("cesta2.php")
            })       
    })
}
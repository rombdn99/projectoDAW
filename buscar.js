

$.post('buscar.php',{query: "sort"})
    .done(function(data,textStatus,jqXHR){
        console.log("Solicitud se ha completado correctamente "+ textStatus);
        console.log(data);
        if(data!="bad"){
            $("#buscador").html(data)
        }else{
            console.log("No hay usuarios")
        }
                // location.replace("login.html")
        //eventos();
        
    })
    .fail(function(data,textStatus,jqXHR){
        console.log("Error: " + textStatus + ": " + jqXHR);
    })
    .always(function(data,textStatus,jqXHR){
        console.log("header.php")
    })
    
/*
    <div class="col-3 pt-3">
                        <div class="bg-light producto">
                            <div class="imgprod">
                                <img src="img/zapatillas.jpg" class="col img-fluid p-0">
                            </div>
                            <div class="col">Precio</div>
                            <div class="col nombre">Nombre</div>
                        </div>
                    </div>
                    
*/
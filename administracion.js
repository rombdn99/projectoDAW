$.post('administracion.php',{query: "selectu"})
    .done(function(data,textStatus,jqXHR){
        //console.log("Solicitud se ha completado correctamente "+ textStatus);
        //console.log(data);
        if(data!="bad"){
            $("#tusuarios").html(data)
        }else{
            //console.log("No hay usuarios")
        }
                // location.replace("login.html")
        //eventos();
        
        $.post('administracion.php',{query: "selectp"})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tproductos").html(data)
                }else{
                    //console.log("No hay usuarios")
                }
                $.post('administracion.php',{query: "selectd"})
                    .done(function(data,textStatus,jqXHR){
                        //console.log("Solicitud se ha completado correctamente "+ textStatus);
                        //console.log(data);
                        if(data!="bad"){
                            $("#tdeportes").html(data)
                        }else{
                            //console.log("No hay usuarios")
                        }
                                // location.replace("login.html")
                        $.post('administracion.php',{query: "selectr"})
                            .done(function(data,textStatus,jqXHR){
                                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                                //console.log(data);
                                if(data!="bad"){
                                    $("#tropa").html(data)
                                }else{
                                    //console.log("No hay usuarios")
                                }
                                        // location.replace("login.html")
                                $.post('administracion.php',{query: "selecte"})
                                    .done(function(data,textStatus,jqXHR){
                                        //console.log("Solicitud se ha completado correctamente "+ textStatus);
                                        //console.log(data);
                                        if(data!="bad"){
                                            $("#tequipamiento").html(data)
                                        }else{
                                            //console.log("No hay usuarios")
                                        }
                                                // location.replace("login.html")
                                        $.post('administracion.php',{query: "selectg"})
                                            .done(function(data,textStatus,jqXHR){
                                                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                                                //console.log(data);
                                                if(data!="bad"){
                                                    $("#tgenero").html(data)
                                                }else{
                                                    //console.log("No hay usuarios")
                                                }
                                                        // location.replace("login.html")
                                                
                                                        eventos();
                                            })
                                            .fail(function(data,textStatus,jqXHR){
                                                //console.log("Error: " + textStatus + ": " + jqXHR);
                                            })
                                            .always(function(data,textStatus,jqXHR){
                                                //console.log("selectp.php")
                                            })
                                        
                                    })
                                    .fail(function(data,textStatus,jqXHR){
                                        //console.log("Error: " + textStatus + ": " + jqXHR);
                                    })
                                    .always(function(data,textStatus,jqXHR){
                                        //console.log("selectp.php")
                                    })
                                
                            })
                            .fail(function(data,textStatus,jqXHR){
                                //console.log("Error: " + textStatus + ": " + jqXHR);
                            })
                            .always(function(data,textStatus,jqXHR){
                                //console.log("selectp.php")
                            })
                        
                    })
                    .fail(function(data,textStatus,jqXHR){
                        //console.log("Error: " + textStatus + ": " + jqXHR);
                    })
                    .always(function(data,textStatus,jqXHR){
                        //console.log("selectp.php")
                    })
                
                
            })
            .fail(function(data,textStatus,jqXHR){
                //console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                //console.log("header.php")
            })
    })
    .fail(function(data,textStatus,jqXHR){
        //console.log("Error: " + textStatus + ": " + jqXHR);
    })
    .always(function(data,textStatus,jqXHR){
        //console.log("header.php")
    })


i=0;
function eventos(){
    //console.log("eventos")
    //usuario
    $(".eliminarc").click(function(){
        //console.log($(this).attr("id").replace('eliminarc',''));
        $(this).addClass("probable");
    })
    $("#noeliminarc").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminarcuenta").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminarcuenta2").click(function(){
        $.post('administracion.php',{query: "eliminaru", id:$(".probable").attr("id").replace('eliminarc','') })
        .done(function(data,textStatus,jqXHR){
            ////console.log("Solicitud se ha completado correctamente "+ textStatus);
            //console.log(data);
            if(data!="bad"){           
                    // location.replace("login.html")
            //eventos();
            $.post('administracion.php',{query: "selectu"})
                .done(function(data,textStatus,jqXHR){
                    if(data!="bad"){
                        $("#cerrar2").click();
                        $("#tusuarios").html(data);
                        eventoeliminaruser();
                    }else{
                        //console.log("No hay usuarios")
                    }
                            // location.replace("login.html")
                  //  eventos();
                  $(".DESC").removeClass("DESC");
                  $(".ASC").removeClass("ASC");
                })
                .fail(function(data,textStatus,jqXHR){
                    //console.log("Error: " + textStatus + ": " + jqXHR);
                })
                .always(function(data,textStatus,jqXHR){
                    //console.log("header.php")
                })
            }
        })
        .fail(function(data,textStatus,jqXHR){
            //console.log("Error: " + textStatus + ": " + jqXHR);
        })
        .always(function(data,textStatus,jqXHR){
            //console.log("header.php")
        })
    })
    $(".sortu").click(function(){
        if($(this).hasClass("ASC") || $(this).hasClass("DESC")){
            i++
            if($(this).hasClass("DESC")){
                //console.log("eeee");
                $(this).removeClass("DESC");
                $(this).addClass("ASC");
                sort="ASC";
            }else{
                $(this).addClass("DESC");
                $(this).removeClass("ASC");
                sort="DESC";

            }     
        }else{
            i++
            sort="ASC";
            $(".DESC").removeClass("DESC");
            $(".ASC").removeClass("ASC");
            $(this).addClass("ASC");
        }
//console.log(i)
        $.post('administracion.php',{query: "sortu", sort: $(this).attr("id"), direccion: sort})
            .done(function(data,textStatus,jqXHR){
                ////console.log("Solicitud se ha completado correctamente "+ textStatus);
               // //console.log(data);
                if(data!="bad"){
                    $("#tusuarios").html(data)
                }else{
                    //console.log("No hay usuarios")
                }
                        // location.replace("login.html")
                //eventos();
                
            })
            .fail(function(data,textStatus,jqXHR){
                //console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                //console.log("header.php")
            })
            
            //console.log("sortu"+$(this).attr("id"))
    })

//producto
    $(".sortp").click(function(){
        if($(this).hasClass("ASC") || $(this).hasClass("DESC")){
            if($(this).hasClass("DESC")){
                $(this).addClass("ASC");
                $(this).removeClass("DESC");
                sort="ASC";
            }else{
                $(this).addClass("DESC");
                $(this).removeClass("ASC");
                sort="DESC";

            }     
        }else{
            sort="ASC";
            $(".DESC").removeClass("DESC");
            $(".ASC").removeClass("ASC");
            $(this).addClass("ASC");
        }
        $.post('administracion.php',{query: "sortp", sort: $(this).attr("id"), direccion: sort})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tproductos").html(data)
                }else{
                    //console.log("No hay usuarios")
                }
                        // location.replace("login.html")
                //eventos();
                
            })
            .fail(function(data,textStatus,jqXHR){
                //console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                //console.log("header.php")
            })
            
            //console.log("sortu"+$(this).attr("id"))
    })
    $(".editarp").click(function(){
        console.log("editar");
        location.replace("editproducto.html?id="+$(this).attr("id").replace('editarp',''))

    })
    $(".eliminarp").click(function(){
        //console.log($(this).attr("id").replace('eliminarp',''));
        $(this).addClass("probable");
    })
    $("#noeliminarp").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminarproducto").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminarproducto2").click(function(){
        //console.log($(this).attr("id").replace('eliminarp',''));

        $.post('administracion.php',{query: "eliminarp", id:$(".probable").attr("id").replace('eliminarp','') })
        .done(function(data,textStatus,jqXHR){
            //console.log("Solicitud se ha completado correctamente "+ textStatus);
            //console.log(data);
            /*
            if(data!="bad"){
                $("#tproductos").html(data)
            }else{
                //console.log("No hay usuarios")
            }
                    // location.replace("login.html")
            eventos();*/
            $.post('administracion.php',{query: "selectp"})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#noeliminarp").click();
                    $("#tproductos").html(data)
                    eventoseliminarproducto();
                }else{
                    //console.log("No hay usuarios")
                }
                        // location.replace("login.html")
                //eventos();
                
            })
        })
        .fail(function(data,textStatus,jqXHR){
            //console.log("Error: " + textStatus + ": " + jqXHR);
        })
        .always(function(data,textStatus,jqXHR){
            console.log("eliminarp")
        })

    })
}
function eventoseliminarproducto(){
    console.log("entra producto")
    $(".eliminarp").click(function(){
        console.log($(this).attr("id").replace('eliminarp',''));
        $(this).addClass("probable");
    })
    $(".editarp").click(function(){
        console.log("editar");
        location.replace("editproducto.html?id="+$(this).attr("id").replace('editarp',''))

    })
}
function eventoeliminaruser(){
    //console.log("entra user")
    $(".eliminarc").click(function(){
        //console.log($(this).attr("id").replace('eliminarc',''));
        $(this).addClass("probable");
    })
}
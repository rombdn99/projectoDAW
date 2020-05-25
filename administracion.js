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
                                                        $.post('administracion.php',{query: "selectpe"})
                                                            .done(function(data,textStatus,jqXHR){
                                                                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                                                                //console.log(data);
                                                                if(data!="bad"){
                                                                    $("#tpedidos").html(data)
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

    //categorias
    $(".sortd").click(function(){
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
        console.log(sort);
        $.post('administracion.php',{query: "sortd", sort: $(this).attr("id"), direccion: sort})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tdeportes").html(data)
                }else{
                    console.log(data)
                }
                        // location.replace("login.html")
                //eventos();
                
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("entra.php")
            })
            
            //console.log("sortu"+$(this).attr("id"))
    })
    // $(".eliminard").click(function(){
    //     //console.log($(this).attr("id").replace('eliminarp',''));
    //     $(this).addClass("probable");
    // })
    $("#insertardeporte2").click(function(){
        $.post('administracion.php',{query: "insertd", nombre: $("#dnombre").val()})
        .done(function(data,textStatus,jqXHR){
            //console.log("Solicitud se ha completado correctamente "+ textStatus);
            console.log(data);
            /*
            if(data!="bad"){
                $("#tproductos").html(data)
            }else{
                //console.log("No hay usuarios")
            }
                    // location.replace("login.html")
            eventos();*/
            $.post('administracion.php',{query: "selectd"})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#noeliminarp").click();
                    $("#tdeportes").html(data)
                    eventoseliminardeportes();
                    $(".close").click()

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
    $((".eliminard ")).click(function(){
        $(this).addClass("probable");
    })
    $("#noeliminard").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminardeporte").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminardeporte2").click(function(){
        console.log($(this).attr("id"));
        $.post('administracion.php',{query: "eliminard", id:$(".probable").attr("id").replace('eliminard','') })
        .done(function(data,textStatus,jqXHR){
            //console.log("Solicitud se ha completado correctamente "+ textStatus);
            console.log(data);
            /*
            if(data!="bad"){
                $("#tproductos").html(data)
            }else{
                //console.log("No hay usuarios")
            }
                    // location.replace("login.html")
            eventos();*/
            $.post('administracion.php',{query: "selectd"})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tdeportes").html(data)
                    $(".close").click();
                    eventoseliminardeportes();
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
            console.log("eliminare")
        })

    })

    $(".sortr").click(function(){
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
        console.log(sort);
        $.post('administracion.php',{query: "sortr", sort: $(this).attr("id"), direccion: sort})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tropa").html(data)
                }else{
                    console.log(data)
                }
                        // location.replace("login.html")
                //eventos();
                
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("entra.php")
            })
            
            //console.log("sortu"+$(this).attr("id"))
    })
    $("#insertarropa2").click(function(){
        console.log("afd")
        if($("#dtipor").val()!=""){
            $.post('administracion.php',{query: "insertr", nombre: $("#dtipor").val()})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                console.log(data);
                /*
                if(data!="bad"){
                    $("#tproductos").html(data)
                }else{
                    //console.log("No hay usuarios")
                }
                        // location.replace("login.html")
                eventos();*/
                $.post('administracion.php',{query: "selectr"})
                .done(function(data,textStatus,jqXHR){
                    //console.log("Solicitud se ha completado correctamente "+ textStatus);
                    //console.log(data);
                    if(data!="bad"){
                        $("#noeliminarp").click();
                        $("#tropa").html(data)
                        eventoseliminarropa();
                        $(".close").click()

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
        }else{
            $(".errorropa").html("no puede estar vacio")
        }
    })
    $((".eliminarr ")).click(function(){
        $(this).addClass("probable");
    })
    $("#noeliminarr").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminarropa").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminarropa2").click(function(){
        console.log($(this).attr("id"));
        $.post('administracion.php',{query: "eliminarr", id:$(".probable").attr("id").replace('eliminarr','') })
        .done(function(data,textStatus,jqXHR){
            //console.log("Solicitud se ha completado correctamente "+ textStatus);
            console.log(data);
            /*
            if(data!="bad"){
                $("#tproductos").html(data)
            }else{
                //console.log("No hay usuarios")
            }
                    // location.replace("login.html")
            eventos();*/
            $.post('administracion.php',{query: "selectr"})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tropa").html(data)
                    $(".close").click();
                    eventoseliminarropa();
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
            console.log("eliminare")
        })

    })

    $(".sorte").click(function(){
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
        console.log(sort);
        $.post('administracion.php',{query: "sorte", sort: $(this).attr("id"), direccion: sort})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tequipamiento").html(data)
                }else{
                    console.log(data)
                }
                        // location.replace("login.html")
                //eventos();
                
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("entra.php")
            })
            
            //console.log("sortu"+$(this).attr("id"))
    })
    $("#insertarequipamiento2").click(function(){
        console.log("afd")
        if($("#dtipoe").val()!=""){
            $.post('administracion.php',{query: "inserte", nombre: $("#dtipoe").val()})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                console.log(data);
                /*
                if(data!="bad"){
                    $("#tproductos").html(data)
                }else{
                    //console.log("No hay usuarios")
                }
                        // location.replace("login.html")
                eventos();*/
                $.post('administracion.php',{query: "selecte"})
                .done(function(data,textStatus,jqXHR){
                    //console.log("Solicitud se ha completado correctamente "+ textStatus);
                    //console.log(data);
                    if(data!="bad"){
                        $("#noeliminarp").click();
                        $("#tequipamiento").html(data)
                        eventoseliminarropa();
                        $(".close").click()
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
        }else{
            $(".errorequipamiento").html("no puede estar vacio")
        }
    })
    $((".eliminare ")).click(function(){
        $(this).addClass("probable");
    })
    $("#noeliminare").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminarequip").click(function(){
        $(".probable").removeClass("probable");
    })
    $("#eliminarequipamiento2").click(function(){
        //console.log($(this).attr("id").replace('eliminarp',''));
        $.post('administracion.php',{query: "eliminare", id:$(".probable").attr("id").replace('eliminare','') })
        .done(function(data,textStatus,jqXHR){
            //console.log("Solicitud se ha completado correctamente "+ textStatus);
            console.log(data);
            /*
            if(data!="bad"){
                $("#tproductos").html(data)
            }else{
                //console.log("No hay usuarios")
            }
                    // location.replace("login.html")
            eventos();*/
            $.post('administracion.php',{query: "selecte"})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#noeliminarp").click();
                    $("#tequipamiento").html(data)
                    $(".close").click();
                    eventoseliminarequipamiento();
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
            console.log("eliminare")
        })

    })
    

    $(".sortg").click(function(){
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
        console.log(sort);
        $.post('administracion.php',{query: "sortg", sort: $(this).attr("id"), direccion: sort})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tgenero").html(data)
                }else{
                    console.log(data)
                }
                        // location.replace("login.html")
                //eventos();
                
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("entra.php")
            })
            
            //console.log("sortu"+$(this).attr("id"))
    })

    $(".sortpe").click(function(){
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
        console.log(sort);
        $.post('administracion.php',{query: "sortpe", sort: $(this).attr("id"), direccion: sort})
            .done(function(data,textStatus,jqXHR){
                //console.log("Solicitud se ha completado correctamente "+ textStatus);
                //console.log(data);
                if(data!="bad"){
                    $("#tpedidos").html(data)
                }else{
                    console.log(data)
                }
                        // location.replace("login.html")
                //eventos();
                
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("sortp.php")
            })
            
            //console.log("sortu"+$(this).attr("id"))
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
function eventoseliminardeportes(){

}
function eventoseliminarropa(){

}
function eventoseliminarequipamiento(){

}
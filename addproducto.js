$.post('addproducto.php',{query: "categorias"})
    .done(function(data,textStatus,jqXHR){
        //console.log("Solicitud se ha completado correctamente "+ textStatus);
        console.log(data);
        $("#categorias").html(data)
        eventos();
    })
    .fail(function(data,textStatus,jqXHR){
        console.log("Error: " + textStatus + ": " + jqXHR);
    })
    .always(function(data,textStatus,jqXHR){
        console.log("selectp.php")
    })





function eventos(){
    $(".productoimg").click(function(){
        $(".producto").attr("src",$(this).attr("src"));
    })
    $('#file-input').change(function(e) {
        if($("#file-input")[0].files.length>0){
            addImage(e); 
        }else{
            $("#imgSalida").attr("src","")
        }
    });

    function addImage(e){
        var file = e.target.files[0],
        imageType = /image.*/;
    
            if (!file.type.match(imageType))
            return false;

            var reader = new FileReader();
            reader.onload = fileOnload;
            reader.readAsDataURL(file);
    }

    function fileOnload(e) {
        var result=e.target.result;
        $('#imgSalida').attr("src",result);
        console.log(e)
    }
    

    $("#guardar").click(function(){
        if($("#nombre").val()!="" && $("#precio").val()!="" && $("#file-input")[0].files.length && $("#descripcion").val()!="" ){
            console.log("nombre: "+$("#nombre").val())
            console.log("precio: "+$("#precio").val())
            console.log("fichero: "+$("#file-input")[0].files.length)
            console.log("genero: "+$("input[name='genero']:checked").val())
            console.log("deportes: "+$("input[name='deportes']:checked").val())
            console.log("Descripcion: "+$("#descripcion").val())

            if(typeof ($("input[name='ropa']:checked").val())!=='undefined'){
                ropaval=$("input[name='ropa']:checked").val()
            }else{
                ropaval=0
            }

            if(typeof ($("input[name='deportes']:checked").val())!=='undefined'){
                deportes=$("input[name='deportes']:checked").val()
            }else{
                deportes=0
            }
            if(typeof ($("input[name='genero']:checked").val())!=='undefined'){
                genero=$("input[name='genero']:checked").val()
            }else{
                genero=0
            }
            if(typeof ($("input[name='equipamiento']:checked").val())!=='undefined'){
                equipamientoval=$("input[name='equipamiento']:checked").val()
            }else{
                equipamientoval=0
            }

        replace=$("#nombre").val().replace(/ /g,"_");
        console.log(replace)
        var formData = new FormData();
        var file = $("#file-input")[0].files[0];
        formData.append("file", file, replace);
        console.log(file['name'].split('.')[1]);
        if(file['name'].split('.')[1]=="jpg"){
            extension="jpeg";
        }else{
            extension=file['name'].split('.')[1];
        }
        $.post('addproducto.php',{query: "subirprod",fichero: ("img/"+replace+"."+extension), nombre: $("#nombre").val(),
            precio: $("#precio").val(), 
            genero: genero,
            deporte: deportes,
            ropa: ropaval,
            equipamiento: equipamientoval,
            descripcion: $("#descripcion").val()
        })


            .done(function(data,textStatus,jqXHR){
                console.log(data);
                if(data=="good"){
                    $.ajax({
                        url: "subirimg.php",
                        type: "post",
                        dataType: "html",
                        data: formData,
                        cache: false,
                        contentType: false,
                        processData: false
                    })
                        .done(function(res){
                            console.log("Respuesta: " + res);
                            location.replace("administracion.html")
                    });
                }else{
                    $("#error").html("<i class='fa fa-close text-danger p-0 mt-1 col-1 mr-3'></i>Este producto ya existe o tiene el mismo nombre de uno existente")
                }
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("selectp.php")
            })

        }else{
            if( $("#nombre").val()!="" ){
               
            }
            
            if($("#precio").val()!=""){

            }
            
            
            if ($("#file-input")[0].files.length ){

            }
            console.log($("#file-input")[0].files.length )
            if($("#descripcion").val()!=""){

            }
        }
        
      
    })
}
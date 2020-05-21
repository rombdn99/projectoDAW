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



imagencorrecto=false;
function valimg(){
    if($("#file-input")[0].files.length>0){
        if ((($("#file-input")[0].files[0]['type'] == "image/gif")
            || ($("#file-input")[0].files[0]['type'] == "image/jpeg")
            || ($("#file-input")[0].files[0]['type'] == "image/jpg")
            || ($("#file-input")[0].files[0]['type'] == "image/pjpeg")
            || ($("#file-input")[0].files[0]['type']== "image/x-png")
            || ($("#file-input")[0].files[0]['type'] == "image/png"))){
                $("#errorimg").addClass("d-none");

                return true;
        }else{
            $("#errorimg").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i> Los formatos aceptados son gif, jpeg, jpg, pjpeg, x-png y png");
                $("#errorimg").removeClass("d-none");
            return false;
        }
    }else{
        $("#errorimg").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i> Los formatos aceptados son gif, jpeg, jpg, pjpeg, x-png y png");
                $("#errorimg").removeClass("d-none");
        return false;
    }
}
function eventos(){
    $(".productoimg").click(function(){
        $(".producto").attr("src",$(this).attr("src"));
    })
    $('#file-input').on('change',function(e) {
        if(valimg()){
                addImage(e);
            }else{
                $("#imgSalida").attr("src"," ")
                
            }
    
        
    });
    $("#nombre").blur(valnombre); //quito focus
    $("#precio").blur(valprecio); //quito focus
    $("#descripcion").blur(valdescripcion); //quito focus
    
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
    
function valnombre(){
    
// console.log("nombre")
    $(this).attr("style","outline: initial");
    var errores1 = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú0-9'\.\-\s\,]+[\s]*)+$/
    var extepcion1=errores1.test($("#nombre").val())

    if(($("#nombre").val()!="")&&extepcion1){
    // console.log("nombre: entra")
        $("#errornombre").addClass("d-none");
        return true
    }else{
        $("#errornombre").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>El nombre debe contener una letra mayuscula inicial, puede contener letras, numeros y los simbolos <b>' . - ,</b> </p>");
        $("#errornombre").removeClass("d-none");
        return false
    }
         
       
}
function valprecio(){
   
    $(this).attr("style","outline: initial");
    var errores1 =  /^\d*\.?\d*$/
    var extepcion1=errores1.test($("#precio").val())

    if(($("#precio").val()!="")&&extepcion1 && $("#precio").val()>=0){
        console.log("entra")
        $("#errorprecio").addClass("d-none");
        return true
    }else{
        $("#errorprecio").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>El precio debe ser un numero positivo</p>");
        $("#errorprecio").removeClass("d-none");
        return false
    }
}
function valdescripcion(){
   
    $(this).attr("style","outline: initial");
    var errores1 =  /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú0-9'\.\-\s\,]+[\s]*)+$/
    var extepcion1=errores1.test($("#descripcion").val())

    if(($("#descripcion").val()!="")&&extepcion1 ){
        console.log("entra")
        $("#errordescripcion").addClass("d-none");
        return true
    }else{
        $("#errordescripcion").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>El nombre debe contener una letra mayuscula inicial, puede contener letras, numeros y los simbolos <b>' . - ,</b></p>");
        $("#errordescripcion").removeClass("d-none");
        return false
    }
}

    $("#guardar").click(function(){
        console.log(valnombre());
        console.log(valprecio());
        console.log(valimg());
        console.log(valdescripcion());

        if( valnombre() && valprecio() && valimg() && valdescripcion() ){
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
        console.log($("#file-input")[0].files[0])
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

        }
        
      
    })
}
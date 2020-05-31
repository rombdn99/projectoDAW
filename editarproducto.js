

$.post('addproducto.php',{query: "categorias"})
    .done(function(data,textStatus,jqXHR){
        //console.log("Solicitud se ha completado correctamente "+ textStatus);
//console.log(data);
        $("#categorias").html(data)
        cargardatos();
    })
    .fail(function(data,textStatus,jqXHR){
        console.log("Error: " + textStatus + ": " + jqXHR);
    })
    .always(function(data,textStatus,jqXHR){
        //console.log("selectp.php")
    })

getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};
function valimg(){
    console.log("entra img")
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
function valimg2(){
    console.log("entra img")
    if($("#file-input")[0].files.length>0){
        

                return true;
       
    }else{
        
        return false;
    }
}
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
    //console.log(e)
}
console.log(getParams(window.location.href)['id']);
var arraydata;
function cargardatos(){
    $.post('editarproducto.php',{query: "getproducto",id: getParams(window.location.href)['id'] })
        .done(function(data,textStatus,jqXHR){
            //console.log("Solicitud se ha completado correctamente "+ textStatus);
            arraydata=JSON.parse(data);
            $("#nombre").val(arraydata['nombre']);
            $("#precio").val(arraydata['precio']);
            $("#imgSalida").attr("src",arraydata['imagen']);
            $("#descripcion").html(arraydata['descripcion']);
            $("input[name='genero'][value='"+arraydata['genero']+"']").attr("checked","checked");
            $("input[name='deportes'][value='"+arraydata['deporte']+"']").attr("checked","checked");
            $("input[name='ropa'][value='"+arraydata['ropa']+"']").attr("checked","checked");
            $("input[name='equipamiento'][value='"+arraydata['equipamiento']+"']").attr("checked","checked");

                        /*$("#categorias").html(data)         
            cargardatos();*/
            eventos();
        })
        .fail(function(data,textStatus,jqXHR){
            console.log("Error: " + textStatus + ": " + jqXHR);
        })
        .always(function(data,textStatus,jqXHR){
            console.log("Cargar datos")
        })
}


function valnombre(){
    
    // console.log("nombre")
        $(this).attr("style","outline: initial");
        var errores1 = /^([A-ZÁÉÍÓÚ]{1}[a-z0-9ñáéíóú0-9A-ZÁÉÍÓÚ'\-\s\,]+[\s]*)+$/
        var extepcion1=errores1.test($("#nombre").val())
    
        if(($("#nombre").val()!="")&&extepcion1 && $("#nombre").val().length<45){
        // console.log("nombre: entra")
            $("#errornombre").addClass("d-none");
            return true
        }else{
            $("#errornombre").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>El nombre debe contener una letra mayuscula inicial, puede contener letras, numeros y los simbolos <b>' . - ,</b><br>No puede ser superior a 45 caracteres </p>");
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
        var errores1 =  /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú0-9A-ZÁÉÍÓÚ%'\.\-\s\,]+[\s]*)+$/
        var extepcion1=errores1.test($("#descripcion").val())
    
        if(($("#descripcion").val()!="")&&extepcion1 && $("#descripcion").val().length<255 ){
            console.log("entra")
            $("#errordescripcion").addClass("d-none");
            return true
        }else{
            $("#errordescripcion").html("<i class='fa fa-close text-danger p-0 mt-1 col-1'></i><p class='text-dark col-11'>El nombre debe contener una letra mayuscula inicial, puede contener letras, numeros y los simbolos <b>' . - ,</b><br>Debe tener una maximo de 255 caracteres</p>");
            $("#errordescripcion").removeClass("d-none");
            return false
        }
    }

function eventos(){
    console.log("entraeventos")
    $('#file-input').on('change',function(e) {
        console.log("entra");
        if(valimg()){
                addImage(e);
        }else{
            $("#imgSalida").attr("src"," ")
            
        }
    });
    $("#nombre").blur(valnombre); //quito focus
    $("#precio").blur(valprecio); //quito focus
    $("#descripcion").blur(valdescripcion); //quito focus

        $("#guardar").click(function(){
            if( valnombre() && valprecio() && valdescripcion() ){

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
                if($("#nombre").val()!="" && $("#precio").val()!="" 
                && $("#descripcion").val()!="" ){

                    if(valimg2()){
                        replace=$("#nombre").val().replace(/ /g,"_");
                       // console.log(replace)
                        var formData = new FormData();
                        var file = $("#file-input")[0].files[0];
                        formData.append("file", file, replace);
                       // console.log(file['name'].split('.')[1]);
                        $arrayfile=file['name'].split('.');
                        if($arrayfile[$arrayfile.length-1]=="jpg"){
                            extension="jpeg";
                        }else{
                            extension=$arrayfile[$arrayfile.length-1];
                        }
                       // console.log("HAy archivo")
                        console.log("img/"+replace+"."+extension)
                        $.post('editarproducto.php',{query: "subirprod",fichero: ("img/"+replace+"."+extension), nombre: $("#nombre").val(),
                            precio: $("#precio").val(), 
                            genero: genero,
                            deporte: deportes,
                            ropa: ropaval,
                            equipamiento: equipamientoval,
                            descripcion: $("#descripcion").val(),
                            ficheroantiguo: arraydata['imagen'],
                            id: getParams(window.location.href)['id']
                        })
                            .done(function(data,textStatus,jqXHR){
                                console.log(data)
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
                                console.log("subirprod")
                            })
                    }else{
                        console.log("NO HAy archivo")
                        replace=$("#nombre").val().replace(/ /g,"_");

                        $.post('editarproducto.php',{query: "subirprod2",
                            nombre: $("#nombre").val(),
                            precio: $("#precio").val(), 
                            genero: genero,
                            deporte: deportes,
                            ropa: ropaval,
                            equipamiento: equipamientoval,
                            descripcion: $("#descripcion").val(),
                            imgantigua: $("#imgSalida").attr("src"),
                            nuevonombreimg: replace+"."+$("#imgSalida").attr("src").split(".")[1],
                            id: getParams(window.location.href)['id']
                        })
                            .done(function(data,textStatus,jqXHR){
                                if(data=="good"){
                                    
                                    location.replace("administracion.html")
                                }else{
                                    $("#error").html("<i class='fa fa-close text-danger p-0 mt-1 col-1 mr-3'></i>Este producto ya existe o tiene el mismo nombre de uno existente")
                                }
                            })
                            .fail(function(data,textStatus,jqXHR){
                                console.log("Error: " + textStatus + ": " + jqXHR);
                            })
                            .always(function(data,textStatus,jqXHR){
                                console.log("subirprodd2")
                            })
                    }
                
                }else{
                    console.log("No entra");
                    console.log(arraydata)
                }
            }
        })
}


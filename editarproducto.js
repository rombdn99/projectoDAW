

$.post('addproducto.php',{query: "categorias"})
    .done(function(data,textStatus,jqXHR){
        //console.log("Solicitud se ha completado correctamente "+ textStatus);
        console.log(data);
        $("#categorias").html(data)
        cargardatos();
    })
    .fail(function(data,textStatus,jqXHR){
        console.log("Error: " + textStatus + ": " + jqXHR);
    })
    .always(function(data,textStatus,jqXHR){
        console.log("selectp.php")
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
            console.log("selectp.php")
        })
}

function eventos(){
    $('#file-input').change(function(e) {
        if($("#file-input")[0].files.length>0){
            addImage(e); 
        }else{
            $("#imgSalida").attr("src","")
        }
    });
    
        $("#guardar").click(function(){
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

                if($("#file-input")[0].files.length ){
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
                    console.log("HAy archivo")

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
                        })
                        .fail(function(data,textStatus,jqXHR){
                            console.log("Error: " + textStatus + ": " + jqXHR);
                        })
                        .always(function(data,textStatus,jqXHR){
                            console.log("selectp.php")
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
                                
                                //location.replace("administracion.html")
                            }else{
                                console.log(data);
                            }
                        })
                        .fail(function(data,textStatus,jqXHR){
                            console.log("Error: " + textStatus + ": " + jqXHR);
                        })
                        .always(function(data,textStatus,jqXHR){
                            console.log("selectp.php")
                        })
                }
            
            }else{
                console.log("No entra");
                console.log(arraydata)
            }

        })
}


$.post('editarproducto.php',{query: "getproducto",id: getParams(window.location.href)['id'] })
.done(function(data,textStatus,jqXHR){
    //console.log("Solicitud se ha completado correctamente "+ textStatus);
    arraydata=JSON.parse(data);
    $("#nombre").html(arraydata['nombre']);
    $("#precio").html(arraydata['precio']+" €");
    $("#imgprod").attr("style","background-image: url("+arraydata['imagen']+")");
    $("#descripcion").html(arraydata['descripcion']);
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
function getParams (url) {
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
const array1 = ["XXL", "XL", "L", "M", "S", "XS"];

function eventos(){
    $("#addcesta").click(function(){
        talla=$("#talla").val()
        talla =array1.find(element => element == talla)
        if(talla!="" && talla != undefined){
            console.log("Entra: "+talla)
            $.post('producto.php',{query: "cesta",id: getParams(window.location.href)['id'], talla: talla })
                .done(function(data,textStatus,jqXHR){
                    $("#mensage").html(data);
                })
                .fail(function(data,textStatus,jqXHR){
                    console.log("Error: " + textStatus + ": " + jqXHR);
                })
                .always(function(data,textStatus,jqXHR){
                    console.log("cesta")
                })
        }else{
            $("#mensage").html("<div class=''><i class='fas fa-times text-danger mr-2'></i>Tienes que seleccionar una fecha</div>")
        }
    })
}

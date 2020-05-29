
$.post('buscar.php',{query: "getcategorias"})
    .done(function(data,textStatus,jqXHR){
        //console.log("Solicitud se ha completado correctamente "+ textStatus);
        console.log(data);
        if(data!="bad"){
            $(".categorias").html(data)
        }else{
            console.log("No hay usuarios")
        }
                // location.replace("login.html")
        eventos();
        inicial();
    })
    .fail(function(data,textStatus,jqXHR){
        console.log("Error: " + textStatus + ": " + jqXHR);
    })
    .always(function(data,textStatus,jqXHR){
        console.log("buscar.php")
    })
         
function inicial(){
    $("#d-0").addClass("activo");
    $("#g-0").addClass("activo");
    $("#r-0").addClass("activo");
    $("#e-0").addClass("activo");

    selectini="select * from productos"
     if(typeof getParams(window.location.href)['deporte']!=='undefined'){
        console.log("entra")
        $("#d-"+getParams(window.location.href)['deporte']).addClass("activo");
        buscador();
    }else if(typeof getParams(window.location.href)['buscar']==='undefined'){
        $.post('buscar.php',{query: "filtro",select: selectini})
        .done(function(data,textStatus,jqXHR){
            console.log("Solicitud se ha completado correctamente "+ textStatus);
            ///console.log(data);
            if(data!="bad"){
                $("#buscador").html(data)
            }else{
                $("#buscador").html("<h1>No hay resultados</h1>")
            }
                    // location.replace("login.html")
            eventosproductos();
        })
        .fail(function(data,textStatus,jqXHR){
            console.log("Error: " + textStatus + ": " + jqXHR);
        })
        .always(function(data,textStatus,jqXHR){
            console.log("header.php")
        })
    }else{
        console.log()
        selectini+=" where nombre like ('%"+getParams(window.location.href)['buscar']+"%')";
        $("#mensagebuscar").html("<b>Buscando por:<b> "+getParams(window.location.href)['buscar']);
        $.post('buscar.php',{query: "filtro", select: selectini})
        .done(function(data,textStatus,jqXHR){
            console.log("Solicitud se ha completado correctamente "+ textStatus);
            ///console.log(data);
            if(data!="bad"){
                $("#buscador").html(data)
            }else{
                $("#buscador").html("<h1>No hay resultados</h1>")
            }
                    // location.replace("login.html")      
                    eventosproductos();
      
        })
        .fail(function(data,textStatus,jqXHR){
            console.log("Error: " + textStatus + ": " + jqXHR);
        })
        .always(function(data,textStatus,jqXHR){
            console.log("header.php")
        })
    }
}

function eventos(){
    
    $(".categoria").click(function(){
        if($(this).hasClass("activo")){
            $(this).removeClass("activo");
        }else{
            $(this).addClass("activo");
        }
        if(
            $(this).attr("id")=="d-0" ||
            $(this).attr("id")=="g-0" ||
            $(this).attr("id")=="r-0" ||
            $(this).attr("id")=="e-0"
        ){
            switch($(this).attr("id").split("-")[0]){
                case "d":
                    $(".deporte .categoria").removeClass("activo");
                    $("#d-0").addClass("activo");
                    break;
                case "g":
                    $(".genero .categoria").removeClass("activo");
                    $("#g-0").addClass("activo");
                    break;
                case "r":
                    $(".ropa .categoria").removeClass("activo");
                    $("#r-0").addClass("activo");
                    break;
                case "e":
                    $(".equipamiento .categoria").removeClass("activo");
                    $("#e-0").addClass("activo");
                    break;
            }
        }else{
            console.log(typeof $(".deporte .activo").html())
                switch($(this).attr("id").split("-")[0]){
                    case "d":
                        if(typeof $(".deporte .activo").html()=="undefined"){
                             $("#d-0").addClass("activo");
                        }else{
                            $("#d-0").removeClass("activo");
                        }
                        break;
                    case "g":
                        if(typeof $(".genero .activo").html()=="undefined"){
                            $("#g-0").addClass("activo");
                       }else{
                           $("#g-0").removeClass("activo");
                       }

                        break;
                    case "r":
                        if(typeof $(".ropa .activo").html()=="undefined"){
                            $("#r-0").addClass("activo");
                       }else{
                           $("#r-0").removeClass("activo");
                       }

                        break;
                    case "e":
                        if(typeof $(".equipamiento .activo").html()=="undefined"){
                            $("#e-0").addClass("activo");
                       }else{
                           $("#e-0").removeClass("activo");
                       }
                        break;
                }
            
                    
            }
        
        
        buscador();
    })
    $("#buscadorb").keyup(function(){
        history.replaceState(null, '', '?buscar='+$(this).val());
        buscador();
        console.log($(this).val())
    })
}
function eventosproductos(){
    $(".productobody").click(function(){
        console.log($(this).attr("id").replace('buscar',''));
        location.replace("producto.html?id="+$(this).attr("id").replace('buscar',''))
    })
}

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
console.log(getParams(window.location.href)['buscar'])

function buscador(){


    select="select * from productos ";
        
        deporte=[];
        d=0;
        ropa=[];
        r=0;
        equip=[];
        e=0;
        genero=[];
        g=0;
        $('.activo').each(function () {
            
            switch(this.id.split("-")[0]){
                case "d":
                    if(this.id.split("-")[1]!=0){

                        deporte[d]=" deporte="+this.id.split("-")[1]
                        d++;
                    }
                    
                break;
                case "r":
                    if(this.id.split("-")[1]!=0){
                        ropa[r]=" ropa="+this.id.split("-")[1]
                        r++
                    }
                break;
                case "e":
                    if(this.id.split("-")[1]!=0){

                        equip[e]=" equipamiento="+this.id.split("-")[1] 
                        e++;
                    }
                break;
                case "g":
                    if(this.id.split("-")[1]!=0){
                        genero[g]=" genero="+this.id.split("-")[1]
                        g++;
                    }
                break;
            }
        });
        if(deporte.length>0 || ropa.length>0 || genero.length>0 || equip.length>0 || typeof getParams(window.location.href)['buscar']!=='undefined'){
            where=" where";
        }
        filtros="";
        for(var i=0;i<deporte.length;i++){
                if(i==deporte.length-1){
                    filtros+=deporte[i]

                }else{
                    filtros+=deporte[i]+" or";

                }
           
        }
        if(deporte.length>0 && ropa.length>0){
            filtros+=" and";

        }
        for(var i=0;i<ropa.length;i++){
            if(i==ropa.length-1){
                filtros+=ropa[i]

            }else{
                filtros+=ropa[i]+" or"

            }
        }
        if((deporte.length>0 || ropa.length>0) && genero.length>0){
            filtros+=" and";
        }
        for(var i=0;i<genero.length;i++){
            if(i==genero.length-1){
                filtros+=genero[i]

            }else{
                filtros+=genero[i]+" or"

            }
        }
        if((deporte.length>0 || ropa.length>0 || genero.length>0) && equip.length>0){
            filtros+=" and";
        }
        for(var i=0;i<equip.length;i++){
            if(i==equip.length-1){
                filtros+=equip[i]

            }else{
                filtros+=equip[i]+" or"

            }
        }

        if(typeof getParams(window.location.href)['buscar']!=='undefined'){
            if(deporte.length>0 || ropa.length>0 || genero.length>0 || equip.length>0){
                filtros+=" and"
            }
            filtros+=" nombre like ('%"+getParams(window.location.href)['buscar']+"%')";
            $("#mensagebuscar").html("<b>Buscando por: </b>"+getParams(window.location.href)['buscar']);

        }

        if(filtros!=""){
            select+=where+filtros;
        }
        console.log(select)
        $.post('buscar.php',{query: "filtro",select: select})
            .done(function(data,textStatus,jqXHR){
                console.log("Solicitud se ha completado correctamente "+ textStatus);
                ///console.log(data);
                if(data!="bad"){
                    $("#buscador").html(data)
                }else{
                    $("#buscador").html("<h1>No hay resultados</h1>")
                }
                        // location.replace("login.html")
                //eventos();
                eventosproductos();
            })
            .fail(function(data,textStatus,jqXHR){
                console.log("Error: " + textStatus + ": " + jqXHR);
            })
            .always(function(data,textStatus,jqXHR){
                console.log("filtro")
            })
}
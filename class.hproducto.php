<?php
class hproducto extends DataBoundObject {

    protected $id;
    protected $nombre;
    protected $imagen;
    protected $descripcion;
    protected $precio;
    protected $deporte;
    protected $genero;
    protected $ropa;
    protected $equipamiento;
    protected $fecha;



        protected function DefineTableName() {
                return("historicoproductos");
        }

        protected function DefineRelationMap() {
            return(array(
                "id" => "id",
                "nombre" => "nombre",
                "imagen" => "imagen",
                "descripcion" => "descripcion",
                "precio" => "precio",
                "deporte" => "deporte",
                "genero" => "genero",
                "ropa" => "ropa",
                "equipamiento" => "equipamiento",
                "fecha" => "fecha",

        ));
        }

}

?>
<?php
class pedidos extends DataBoundObject {

        protected $id;
        protected $id_usuario;
        protected $id_producto;
        protected $talla;
        protected $fecha;
        protected $hora;


        protected function DefineTableName() {
                return("pedidos");
        }

        protected function DefineRelationMap() {
                return(array(
                        "id" => "id",
                        "id_usuario" => "id_usuario",
                        "id_producto" => "id_producto",
                        "fecha" => "fecha",
                        "talla" => "talla",
                        "hora" => "hora",

                ));
        }

}

?>
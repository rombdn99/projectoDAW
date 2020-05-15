<?php
class usuario extends DataBoundObject {

        protected $id;
        protected $email;
        protected $nombre;
        protected $apellido;
        protected $contra;
        protected $direccion;
        protected $telefono;
        protected $tipo;

        protected function DefineTableName() {
                return("usuarios");
        }

        protected function DefineRelationMap() {
                return(array(
                        "id" => "id",
                        "email" => "email",
                        "nombre" => "nombre",
                        "apellido" => "apellido",
                        "contra" => "contra",
                        "direccion" => "direccion",
                        "telefono" => "telefono",
                        "tipo" => "tipo",
                ));
        }

}

?>
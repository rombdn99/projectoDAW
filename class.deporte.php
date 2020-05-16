<?php
class deporte extends DataBoundObject {

        protected $id;
        protected $nombre;



        protected function DefineTableName() {
                return("deporte");
        }

        protected function DefineRelationMap() {
                return(array(
                        "id" => "id",
                        "nombre" => "nombre",

                ));
        }

}

?>
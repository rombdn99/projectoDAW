<?php
class equipamiento extends DataBoundObject {

        protected $id;
        protected $nombre;



        protected function DefineTableName() {
                return("equipamiento");
        }

        protected function DefineRelationMap() {
                return(array(
                        "id" => "id",
                        "nombre" => "nombre",

                ));
        }

}

?>
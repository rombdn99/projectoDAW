<?php
class genero extends DataBoundObject {

        protected $id;
        protected $genero;



        protected function DefineTableName() {
                return("genero");
        }

        protected function DefineRelationMap() {
                return(array(
                        "id" => "id",
                        "genero" => "genero",

                ));
        }

}

?>
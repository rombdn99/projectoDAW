<?php
class ropa extends DataBoundObject {

        protected $id;
        protected $tipo;



        protected function DefineTableName() {
                return("ropa");
        }

        protected function DefineRelationMap() {
                return(array(
                        "id" => "id",
                        "tipo" => "tipo",

                ));
        }

}

?>
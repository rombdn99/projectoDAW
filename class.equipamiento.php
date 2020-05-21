<?php
class equipamiento extends DataBoundObject {

        protected $id;
        protected $tipo;



        protected function DefineTableName() {
                return("equipamiento");
        }

        protected function DefineRelationMap() {
                return(array(
                        "id" => "id",
                        "tipo" => "tipo",

                ));
        }

}

?>
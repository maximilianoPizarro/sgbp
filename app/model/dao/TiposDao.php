<?php

class TipoLoginDao {
    
    public function traerTipoLoginId($id){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM tipologin
                                                        WHERE idtipologin = :idtipologin",array(':idtipologin'=>$id));
        $tipoLogin = null;
        
        if(count($data_table) == 1){
            foreach ($data_table as $clave => $valor) {
                
                $tipoLogin = new TipoLogin( $data_table[$clave]["tipologin"] );
                $tipoLogin->setIdtipologin( $data_table[$clave]["idtipologin"] );
            }
            return $tipoLogin;
        }else{
            return null;
        }
    }
    
}   /** Fin TipoLoginDao */



?>
<?php


    class SesionDao {
        
        public function traerSesionId($id){
            $data_source = new DataSource();
            $data_table = $data_source->ejecutarConsulta("SELECT * FROM sesion WHERE idsesion = :idsesion",array(':idsesion'=>$id));
            $ses = null;
            
            if(count($data_table) == 1){
                foreach ($data_table as $clave => $valor) {
                    $ses = new Sesion();
                    $ses->setIdsesion( $data_table[$clave]["idsesion"] );
                    $ses->setLogin( $data_table[$clave]["sesionlogin"] );
                }
                return $ses;
            }else{
                return null;
            }
        }
        
        public function traerSesionlogin($log){
            $data_source = new DataSource();
            $data_table = $data_source->ejecutarConsulta("SELECT * FROM sesion WHERE sesionlogin = :seslogin",array(':seslogin'=>$log));
            $ses = null;
            
            if(count($data_table) == 1){
                foreach ($data_table as $clave => $valor) {
                    $ses = new Sesion();
                    $ses->setIdsesion( $data_table[$clave]["idsesion"] );
                    $ses->setLogin( $data_table[$clave]["sesionlogin"] );
                }
                return $ses;
            }else{
                return null;
            }
        }
        
        public function insertSesion(Sesion $sesion){
            $data_source = new DataSource();
            $login = $sesion->getLogin();   //LOGIN ES UN INTEGER CON LA ID DEL LOGIN
            
            $sql = "INSERT INTO public.sesion(sesionlogin) VALUES ($login)";
            
            $resultado = $data_source->ejecutarActualizacion($sql,array());
            return $resultado;
        }
        
        //BORRAR POR ID
        public function deleteSesionId($id){
            $data_source = new DataSource();
            $resultado = $data_source->ejecutarActualizacion("DELETE FROM sesion WHERE idsesion = :idsesion",array(':idsesion'=>$id));
            return $resultado;
        }
        
        //BORRAR POR ID LOGIN
        public function deleteSesionLog($id){
            $data_source = new DataSource();
            $resultado = $data_source->ejecutarActualizacion("DELETE FROM sesion WHERE sesionlogin = :login",array(':login'=>$id));
            return $resultado;
        }
        
    }

?>
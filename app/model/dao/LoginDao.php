<?php

class LoginDao {
    
    public function traerLoginId($id){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM login
                                                        JOIN usuario ON idlogin = idusuario
                                                        JOIN tipologin ON login.fktipologin = idtipologin
                                                        WHERE idlogin = :idlogin",array(':idlogin'=>$id));
        $login = null;
        
        if(count($data_table) == 1){
            foreach ($data_table as $clave => $valor) {
                
                $usuario = new Usuario($data_table[$clave]["nombre"], $data_table[$clave]["apellido"],
                    $data_table[$clave]["dni"], $data_table[$clave]["email"] );
                $usuario->setIdusuario( $data_table[$clave]["idusuario"] );
                
                $tipo = new TipoLogin( $data_table[$clave]["tipologin"] );
                $tipo->setIdtipologin( $data_table[$clave]["idtipologin"] );
                
                $login = new Login($data_table[$clave]["useer"], $data_table[$clave]["pass"], 
                    $data_table[$clave]["superlogin"], $usuario, $tipo );
                $login->setIdlogin( $data_table[$clave]["idlogin"] );
                
            }
            return $login;
        }else{
            return null;
        }
    }
    
    
    public function traerLoginUseer($useer){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM login
                                                        JOIN usuario ON idlogin = idusuario
                                                        JOIN tipologin ON login.fktipologin = idtipologin
                                                        WHERE usuario.bajausuario = true
                                                        AND useer = :useer",array(':useer'=>$useer));
        $login = null;
       
        if(count($data_table) == 1){
            foreach ($data_table as $clave => $valor) {
                
                $usuario = new Usuario( $data_table[$clave]["nombre"], $data_table[$clave]["apellido"],
                    $data_table[$clave]["dni"], $data_table[$clave]["email"] );
                $usuario->setIdusuario( $data_table[$clave]["idusuario"] );

                $tipo = new TipoLogin( $data_table[$clave]["tipologin"] );
                $tipo->setIdtipologin( $data_table[$clave]["idtipologin"] );
                
                $login = new Login( $data_table[$clave]["useer"], $data_table[$clave]["pass"],
                    $data_table[$clave]["superlogin"], $usuario, $tipo );
                $login->setIdlogin( $data_table[$clave]["idlogin"] );
            }
            return $login;
        }else{
            return null;
        }
    }
    
    public function existeUseer($useer){
        $data_source = new DataSource();
        $resultado=$data_source->ejecutarConsulta("SELECT COUNT(*) AS resultado FROM login
                                                    WHERE UPPER(login.useer) LIKE UPPER ('$useer');");
        return $resultado[0]["resultado"];
    }
    
    public function updateLoginUseer($id, $useer) {
        $data_source = new DataSource();
        
        $sql = "UPDATE public.login
	               SET useer='$useer'
	               WHERE idlogin = $id;";
        
        $resultado = $data_source->ejecutarActualizacion($sql,array());
        
        return $resultado;
    }
    
    public function updateContraseña($id, $pass) {
        $data_source = new DataSource();
        
        $sql = "UPDATE public.login
	               SET pass=md5('$pass')
	               WHERE idlogin = $id;";
        
        $resultado = $data_source->ejecutarActualizacion($sql,array());
        
        return $resultado;
    }
    
    public function encriptar($pass) {
        $data_source = new DataSource();
   
        $data_table = $data_source->ejecutarConsulta("SELECT md5('$pass') AS encriptar");
        
        $passEncriptada = null;
        
        foreach ($data_table as $clave => $valor) {
            $passEncriptada = $data_table[$clave]["encriptar"]; }
            
        return $passEncriptada;
    }
    
    public function generarContraseña() {
        $caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        
        $pass = "";
        for($i = 0; $i < 10; $i++) {
            $pass .= substr($caracteres,rand(0,strlen($caracteres)),1);
        }
        
        return $pass;
    }
    
}


?>
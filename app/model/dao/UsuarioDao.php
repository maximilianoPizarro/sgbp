<?php

class UsuarioDao {
    
    public function traerUsuarios(){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM usuario
                                                        JOIN login ON idlogin = idusuario
                                                        JOIN tipologin ON idtipologin = login.fktipologin
                                                        WHERE idtipologin !=3
                                                        AND bajausuario = true");
        return $data_table;
        
        /** todos los usuarios menos los de nivel gerencia, esos se cargan a mano */
    }

    public function traerUsuarioId($id){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM usuario
                                                        JOIN login ON idlogin = idusuario
                                                        JOIN tipologin ON idtipologin = login.tipologin
                                                        WHERE idusuario = :idusuario",array(':idusuario'=>$id));
        $usuario = null;
        
        if(count($data_table) == 1){
            foreach ($data_table as $clave => $valor) {
                
                $tipoLogin = new TipoLogin( $data_table[$clave]["tipologin"] );
                
                $usuarioAux = null; //Usuario auxiliar vacio para guardar en el Login
                $login = new Login( $data_table[$clave]["useer"], $data_table[$clave]["pass"], $data_table[$clave]["primerlogeo"],
                    $usuarioAux, $tipoLogin);
                
                $usuario = new Usuario( $data_table[$clave]["nombre"], $data_table[$clave]["apellido"],
                    $data_table[$clave]["dni"], $data_table[$clave]["email"], $login);
                $usuario->setIdusuario( $data_table[$clave]["idusuario"] );                                                          
            }
            return $usuario;
        }else{
            return null;
        }
    }
    
    public function traerUsuarioEmail($email) {
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT usuario.*, login.useer FROM usuario
                                                        JOIN login ON idlogin = idusuario
                                                        WHERE UPPER (email) LIKE UPPER ('%$email%');");
        $usuario = null;
        
        foreach ($data_table as $clave => $valor) {
            
            $login = new Login( $data_table[$clave]["useer"] );
            
            $usuario = new Usuario( $data_table[$clave]["nombre"], $data_table[$clave]["apellido"], $data_table[$clave]["dni"],
                $data_table[$clave]["email"], $login );
            $usuario->setIdusuario( $data_table[$clave]["idusuario"] );
              
        }
        return $usuario;
    }
    
    public function traerGerentes() {
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM traer_gerentes;");
        
        $usuario = null;
        $lstGerentes = array();
        
        foreach ($data_table as $clave => $valor) {
           
            $usuario = new Usuario( $data_table[$clave]["nombre"], $data_table[$clave]["apellido"], $data_table[$clave]["dni"],
                $data_table[$clave]["email"], null );
            
            array_push($lstGerentes, $usuario);
            
        }
        return $lstGerentes;
    }
    
    public function insertUsuario(Usuario $usuario, $useer, $privilegio){
        $data_source = new DataSource();
        
        $nombre = $usuario->getNombre();
        $apellido = $usuario->getApellido();
        $dni = $usuario->getDni();
        $email = $usuario->getEmail();
        
        $sql = "SELECT insert_usuario('$useer', '$nombre', '$apellido', $dni, '$email', $privilegio);";
        
        $data_source->ejecutarActualizacion($sql,array());
    }
    
    public function existeEmail($email){
        $data_source = new DataSource();
        $resultado=$data_source->ejecutarConsulta("SELECT COUNT(*) AS resultado FROM usuario
                                                    WHERE UPPER(usuario.email) LIKE UPPER ('$email')
                                                    AND bajausuario = true;");
        return $resultado[0]["resultado"];
    }
    
    public static function cadenaSetUsuario($nombre, $apellido, $dni, $email){
        $cadenaSet = "";
        if ($nombre != "") {$cadenaSet = ($cadenaSet != "") ? ($cadenaSet . ", nombre = '$nombre'") : ("nombre = '$nombre'");}
        if ($apellido != "") {$cadenaSet = ($cadenaSet != "") ? ($cadenaSet . ", apellido = '$apellido'") : ("apellido = '$apellido'");}
        if ($dni != "") {$cadenaSet = ($cadenaSet != "") ? ($cadenaSet . ", dni = $dni") : ("dni = $dni");}
        if ($email != "") {$cadenaSet = ($cadenaSet != "") ? ($cadenaSet . ", email = '$email'") : ("email = '$email'");}
        return $cadenaSet;
    }
    
    public function updateUsuario($id, $cadenaSet){
        $data_source = new DataSource();
        
        $sql = "UPDATE public.usuario SET $cadenaSet
	               WHERE idusuario = $id;";
        
        $data_source->ejecutarActualizacion($sql,array());
    }
    
    public function updateUsuarioEmail($id, $email) {
        $data_source = new DataSource();
        
        $sql = "UPDATE public.usuario SET email='$email'
	               WHERE idusuario = $id;";
        
        $data_source->ejecutarActualizacion($sql,array());
    }
    
    public function  deleteUsuario($id) {   /** Baja Logica */
        $data_source = new DataSource();
        
        $sql = "UPDATE public.usuario
	               SET bajausuario = false
	               WHERE idusuario = $id;";
        
        $data_source->ejecutarActualizacion($sql,array());
    }

}


?>
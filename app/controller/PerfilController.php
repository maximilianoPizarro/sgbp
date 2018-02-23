<?php

@session_start();

require_once '../../login/app/model/datos/Login.php';
require_once '../../login/app/model/datos/Usuario.php';
require_once '../../login/app/model/datos/Tipos.php';
require_once '../../login/app/model/dao/LoginDao.php';
require_once '../../login/app/model/dao/UsuarioDao.php';
require_once '../../login/app/model/dao/TiposDao.php';
require_once '../../login/app/model/dao/DataSource.php';


$sesionDao = new SesionDao();
$loginDao = new LoginDao();
$usuarioDao = new UsuarioDao();

switch ($_POST['profile']) {
    
    case 1: {   /** Update Email */
        
        $sesion = $_SESSION['idSesion'];
        $email = $_POST['email'];
        
        $sesion = $sesionDao->traerSesionId($sesion);
        $login = $loginDao->traerLoginId($sesion->getLogin());
        
        if($usuarioDao->existeEmail($email) == 0) {
            
            $usuarioDao->updateUsuarioEmail($login->getIdlogin(), $email);
            
            $_SESSION['email'] = ucwords($email);
            $_SESSION['mensaje'] = "Email modificado satisfactoriamente !!!";
        }
        else {
            $_SESSION['mensajeError'] = "El email ingresado ya est&aacute en uso";
        }
        
    };break;
    
    case 2: {   /** Update Nombre Usuario */
        
        $sesion = $_SESSION['idSesion'];
        $useer = $_POST['useer'];
        
        $sesion = $sesionDao->traerSesionId($sesion);
        $login = $loginDao->traerLoginId($sesion->getLogin());
        
        if($loginDao->existeUseer($useer) == 0) {
            
            $loginDao->updateLoginUseer($login->getIdlogin(), $useer);
            
            $_SESSION['useer'] = $useer;
            $_SESSION['mensaje'] = "Nombre de usuario modificado satisfactoriamente !!!";
        }
        else {
            $_SESSION['mensajeError'] = "El nombre de usuario ingresado ya est&aacute en uso";
        }       
        
    };break;
    
    case 3: {   /** Update Contraseña */
        
        $sesion = $_SESSION['idSesion'];
        $cAntigua = $_POST['cAntigua'];
        $cNueva = $_POST['cNueva'];
        $cConfirm = $_POST['cConfirm'];
        
        $sesion = $sesionDao->traerSesionId($sesion);
        $login = $loginDao->traerLoginId($sesion->getLogin());
        
        if($cNueva == $cConfirm) {
            
            $passEncriptada = $loginDao->encriptar($cAntigua);
            
            if($passEncriptada == $login->getPass()) {

                $loginDao->updateContraseña($login->getIdlogin(), $cNueva);
                
                $_SESSION['mensaje'] = "Contrase&ntildea cambiada satisfactoriamente !!!";
            }
            else {
                $_SESSION['mensajeError'] = "Los datos de la contrase&ntildea no son validos";
            }
            
        }
        else {
            $_SESSION['mensajeError'] = "Los datos de la contrase&ntildea no son validos";
        }
        
    };break;
}

echo "<meta http-equiv=Refresh content=\"0.2 ; url=../../login/app/index.php?login=perfil\">";

?>
<?php

require_once '../../sgbp/app/model/datos/Sesion.php';
require_once '../../sgbp/app/model/dao/SesionDao.php';
require_once '../../sgbp/app/model/dao/DataSource.php'; 

@session_start();

/**
 * Si el navegador se cierra se pierde la sesion.
 **/
    
if( isset($_REQUEST['sesion']) ) {       //CONDICION UNICA PARA MANEJAR EL LOGIN Y LOGOUT
    switch($_REQUEST['sesion']) {
        case 'login': {
            require_once 'controller/LoginController.php';
            unset($_REQUEST['sesion']);
        };break;
        case 'logout': {                                               
            $sesDao = new SesionDao();
            if( isset($_SESSION['idSesion']) ) {
                $sesDao->deleteSesionId( $_SESSION['idSesion'] ); }
            session_unset();
            unset($_REQUEST['sesion']);
        };break;
        case 'Restablecer' : {
            require_once 'controller/EnviarEmailContrasena.php';
            unset($_REQUEST['sesion']);
        };break;
        default: require_once 'view/404.php';
    }
}

if( isset($_SESSION['idSesion']) ) {                              //VERIFICAMOS QUE LA SESION ESTÉ DEFINIDA EN EL NAVEGADOR
    $sesDao = new SesionDao();
    $ses = new Sesion();    
    $ses = $sesDao->traerSesionId( $_SESSION['idSesion'] );     //BUSCAMOS LA SESION EN LA BD
    
    if ( ($ses != null) ) {                                     //VERIFICAMOS QUE SI EXISTA                          
        if ( isset($_REQUEST['sgbp']) ) {                          //VERIFICAMOS QUE EXISTA UNA PETICION 'sugpa'

            switch ( $_REQUEST['sgbp'] ) {
                
                /** VISTAS */
                case 'Bienvenido': {
                    require_once 'view/AgBienvenido.php';
                };break;
                case 'AltaPatrimonio': {
                    require_once 'view/AgAltaPatrimonio.php';
                };break;
                case 'AsignacionPatrimonio': {
                    require_once 'view/AgAsignacionPatrimonio.php';
                };break;
                case 'FichaPatrimonio': {
                    require_once 'view/AgFichaPatrimonio.php';
                };break;
                case 'ConfirmarEgreso': {
                    require_once 'view/AgConfirmarEgreso.php';
                };break;
                case 'perfil': {
                    require_once 'view/perfil.php';
                };break;

                case 'AdmBienvenido': {
                    require_once 'view/AdmBienvenido.php';
                };break;

                case 'Dashboard': {
                    require_once 'view/Dashboard.php';
                };break;
                case 'BuscarVehiculo': {
                    require_once 'view/GeBuscarVehiculo.php';
                };break;
                
                case 'Estadisticas': {
                    require_once 'view/GeEstadisticas.php';
                };break;
                
                case 'AdmMas60Dias': {
                    require_once 'view/AdmListadoMasDe60Dias.php';
                };break;
                
                case 'AdmEgresos': {
                    require_once 'view/AdmListaEgresos.php';
                };break;
                
                case 'AdmFueraPlazo': {
                    require_once 'view/AdmFueraDePlazo.php';
                };break;
                
                case 'AdmNotificadosRemision': {
                    require_once 'view/AdmFueraPlazoMotosTitu.php';
                };break;
                                
                case 'IniciarSesion': {
                    require_once 'view/iniciarSesion.php';
                };break; 
                
                case 'AdmUsuarios': {
                    require_once 'view/AdmUsuarios.php';
                };break;        
                case 'AdmPersonal': {
                    require_once 'view/AdmPersonal.php';
                };break;
                case 'AdmGruas': {
                    require_once 'view/AdmGruas.php';
                };break;
                case 'AdmGenerarBoletaDeCompactacion': {
                    require_once 'view/BoletaCompactacion.php';
                };break;     
                case 'MovimientosIngreso': {
                    require_once 'view/movimientos.php';
                };break; 
                
                case 'AdmEditarVehiculo' : {
                    require_once 'view/AdmEditarVehiculo.php';
                };break;
           
                case 'ConfirmarEdicion' : {
                    require_once 'view/AdmConfirmarEdicion.php';
                };break;
                
                case 'AdmTraslados' : {
                    require_once 'view/AdmTraslados.php';
                };break;
                
                
                /** CONTROLADORES */
                case 'perfilUpdate': {
                    require_once 'controller/PerfilController.php';
                };break;
                case 'prepararIngreso': {
                	require_once 'controller/PrepararIngresoController.php';
                };break;
                case 'ingresoVehiculo': {
                	require_once 'controller/IngresarVehiculoController.php';
                };break;
                case 'prepararEgreso': {
                	require_once 'controller/PrepararEgresoController.php';
                };break;
                case 'egresoVehiculo': {
                	require_once 'controller/EgresarVehiculoController.php';
                };break;
                case 'PersonalABM': {
                    require_once 'controller/PersonalController.php';
                };break;
                case 'AdministrarGrua': {
                    require_once 'controller/GruaController.php';
                };break;
                case 'AdministrarUsuario': {
                    require_once 'controller/UsuarioController.php';
                };break;                
                case 'upDoc': {
                    require_once 'controller/UploadController.php';
                };break;
                case 'infoDom': {
                    require_once 'controller/InfoDominioController.php';
                };break;
                case 'Observaciones': {
                    require_once 'controller/ObservacionesController.php';
                };break;
                
                case 'documentos': {
                    require_once 'controller/DownloadController.php'; 
                };break;
                
                case 'deleteDoc': {
                    require_once 'controller/DeleteFileController.php';
                };break;
                
                case 'GraficaEstadisticas' : {
                    require_once 'controller/GraficoColumnasLinealController.php';
                };break;
                
                case 'MovController' : {
                    require_once 'controller/movimientosController.php';
                };break;
                
                case 'AdmEditarRegistro' : { 
                    require_once 'controller/PrepararEdicionController.php';
                };break;
                
                case 'AdmRegistroEditado' : {
                    require_once 'controller/EditarVehiculoController.php';
                };break;
            
                case 'EditarNumeros' : {
                    require_once 'controller/UpdateIngresoNumController.php';
                };break;

                
                default: require_once 'view/404.php';
              
            } 
        }
    } 
    else {
        unset( $_SESSION['idSesion'] );             //COMO NO ESTA LA SESION EN LA DB, BORRAMOS LA VARIABLE $_SESSION
        require_once 'view/iniciarSesion.php';      //SI NO EXISTE LA SESION EN LA BD, VUELVE A iniciarSesion.php
    }
}
else {                                              //SI LA SESION NO ESTA DEFINIDA EN EL NAVEGADOR, VUELVE A iniciarSesion.php
    require_once 'view/iniciarSesion.php';
} 


?>
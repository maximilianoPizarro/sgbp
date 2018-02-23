<?php 

@session_start();

if(isset($_SESSION['idTipoLogin'])) {
    if($_SESSION['idTipoLogin'] == 2) { ?>

<!DOCTYPE html>
<html>

	<?php include 'header.php'; ?>
	
	<?php if( isset($_SESSION['edicionEnabled']) ) { unset($_SESSION['edicionEnabled']); } ?>
	
	<link rel="stylesheet" href="../../../login/bastrap3/abreviaciones.css">
	
	<body>
    
	<!-- NAVEGACION PRINCIPAL -->
	
	<nav class="navbar navbar-default ">
		<div class="container">
			<div class="row">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle btn btn-primary btn-block btn-sm" data-toggle="collapse" data-target="#header-main-nav">
						<span class="glyphicon glyphicon-chevron-down"></span>
					</button>
					<a class="navbar-brand" href="#" title="Sistema">SGBP</a>
				</div>
				<div class="collapse navbar-collapse " id="header-main-nav" role="navigation">
					<ul class="nav navbar-nav  navbar-right">
                        <li class="dropdown"> 
                        	<a class="dropdown-toggle" data-toggle="dropdown">&nbsp;&nbsp;Ver Listados de:&nbsp;&nbsp;&nbsp;&nbsp;<span class="caret"></span> &nbsp;&nbsp; </a>
                              <ul class="dropdown-menu">
                              <li><a href="../../../login/app/index.php?login=AdmEgresos">Elemento1</a></li>
                              	<li><a href="../../../login/app/index.php?login=AdmTraslados">Elemento1</a></li>
                                <li><a href="../../../login/app/index.php?login=AdmMas60Dias">Elemento1</a></li>
                                <li><a href="../../../login/app/index.php?login=AdmFueraPlazo">Elemento1</a></li>
                                <li><a href="../../../login/app/index.php?login=AdmNotificadosRemision">Elemento1</a></li>                                                                                                                              
                              </ul>
                              <input name="category" class="category" type="hidden">
                        </li>
                        
						<li> <a data-toggle="dropdown">Administracion de:&nbsp;&nbsp;&nbsp;<span class="caret"></span></a>
                              <ul class="dropdown-menu">
                                <li><a href="../../../login/app/index.php?login=AdmUsuarios">Usuarios &nbsp;</a></li>
                                <li><a href="../../../login/app/index.php?login=AdmPersonal">Elemento1 &nbsp;</a></li>
                                <li><a href="../../../login/app/index.php?login=AdmGruas">Elemento1 &nbsp;</a></li>
                              </ul>
                              <input name="category" class="category" type="hidden">
                        </li>

						<li><a href="../../../login/app/index.php?login=perfil"><span
								class="glyphicon glyphicon-user"></span> 
		      	<?php echo $_SESSION['nombre']." ".$_SESSION['apellido']; ?> </a></li>
						<li><a href="../../../login/app/index.php?sesion=logout"><span
								class="glyphicon glyphicon-log-in"></span> Salir</a></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<!-- FIN DE NAVEGACION PRINCIPAL -->
	<?php if(isset( $_SESSION['msjObservacion'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-success">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['msjObservacion'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['msjObservacion'] ); }    ?> 
	<?php if(isset( $_SESSION['mensajeCarga'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-success">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['mensajeCarga'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['mensajeCarga'] ); }     
    ?>
    	<?php if(isset( $_SESSION['mensajeEditar'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-success">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['mensajeEditar'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['mensajeEditar'] ); }     
    ?>
    <?php if(isset( $_SESSION['errorEditar'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-danger">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['errorEditar'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['errorEditar'] ); }     
    ?>
    <?php if(isset( $_SESSION['errorUpload'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-danger">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['errorUpload'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['errorUpload'] ); }     
    ?>
    <?php if(isset( $_SESSION['errorEliminadoExito'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-success">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['errorEliminadoExito'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['errorEliminadoExito'] ); }     
    ?> 
    <?php if(isset( $_SESSION['errorEliminado'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-danger">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['errorEliminado'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['errorEliminado'] ); }     
    ?>
    
    <?php if(isset( $_SESSION['alertaUpload'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-primary">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['alertaUpload'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['alertaUpload'] ); }     ?>
           
<div class="modal js-loading-bar">
 <div class="modal-dialog">
   <div class="modal-content">
         <div class="progress progress-popup">
        <div class="progress-bar"></div>
       </div>
     </div>
   </div>
 </div>
	<div class="container">
  		<h2>Bienvenido Administrador</h2> <br>
  		<div class="panel-group ">
    		<div class="panel panel-primary">
      			<div class="panel-heading "><b>Listado de patrimonios</b>
      				<div class="popup pull-right" onclick="verAbreviaciones();">Referencias
  						<span class="popuptext" id="abrev">		
  						<b>ALCN:</b> Alcoholemia Negativo<br><b>ALCO:</b> Alcoholemia Positivo<br>
  						<b>BARRE:</b> Barreras/Peaje<br><b>CARR:</b> Carriles<br><b>CELU:</b> Celulares<br>
  						<b>CON-PEL:</b> Conducci&oacuten Peligrosa<br><b>DOCU:</b> Documentaci&oacuten<br>
  						<b>EMPR-TAX:</b> Empreas Radio Taxi<br><b>ENS-CON:</b> Ense&ntildeanza Conducci&oacuten<br>
  						<b>ESTA:</b> Estacionamiento<br><b>INDI-AGE:</b> Indicaciones Agente<br><b>LICE:</b> Licencia<br>
  						<b>LUZ:</b> Luces<br><b>MOTO:</b> Motos - Ciclomotor - Bicicleta<br><b>PEAT:</b> Peat&oacuten<br>
  						<b>PRINC:</b> Principiante<br><b>SEGU:</b> Seguridad<br><b>SEMA:</b> Semaforo<br>
  						<b>SENDAS:</b> Senda Peatonal/Fila Escolar<br><b>TAX:</b> Taxi<br><b>TRASN-SUST:</b> Trasporte Sustancias<br>
  						<b>TTE:</b> Pasajeros, Escolares y Carga<br><b>VTV:</b> Verif. Tecnica y Otros<br>
  						<b>S/D: </b> Sin Dato<br>
  						</span>
					</div>
				</div>
				
      				<div class="panel-body ">
      				

  					
						<div class="row">
                          <div class="col-md-4">
							<a onclick="printPage()" class="btn btn-primary btn-l">
		      					<span class="glyphicon glyphicon-print"></span> Imprimir Listado 
		    				</a></div>
                          <div class="col-md-4"><a onclick="tablesToExcel(['enPlayaAdm'], ['Listado de vehiculos'], 'VehiculosEnPlaya.xls', 'Excel')" class="btn btn-primary btn-l">
		      					<span class="glyphicon glyphicon-export"></span> Exportar a Excel 
		    				</a></div>
                          <div class="col-md-4"></div>
                        </div>

					</div>
			</div>
		</div>
	</div>		    
    <!-- FIN CONTENIDO -->
        
    <?php include 'footer.php'; ?>
    

    <script src="../../../login/bastrap3/assets/buenosaires.js"></script>
    <script src="../../../login/bastrap3/js/jquery.min.js"></script>
    <script src="../../../login/bastrap3/js/jquery.dataTables.min.js"></script>
    <script src="../../../login/bastrap3/js/bootstrap.min.js"></script>
    <script src="../../../login/bastrap3/js/script.js"></script>
    <script src="../../../login/bastrap3/js/admin.js"></script>
    <script src="../../../login/bastrap3/js/abreviaciones.js"></script>
    <!-- JAVASCRIPT EXTRA -->    
        
    </body>
</html>

<?php 

    }
    else { require_once 'iniciarSesion.php'; }      
}
else { require_once 'iniciarSesion.php'; }

?>
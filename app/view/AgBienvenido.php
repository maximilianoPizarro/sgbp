<?php 

@session_start();

if(isset($_SESSION['idTipoLogin'])) {
    if($_SESSION['idTipoLogin'] == 1) { 
    	unset($_SESSION['ingresoActual']);
    	unset($_SESSION['extravariables']);
    	unset($_SESSION['egresoActual']);
    	unset($_SESSION['egresoDoc']);
    	unset($_SESSION['extravariables']);
?>

<!DOCTYPE html>

<html>
	<?php include 'header.php'; ?>
	
	<link rel="stylesheet" href="../../../sgbp/bastrap3/abreviaciones.css">
	
	<body>
    
    <!-- NAVEGACION PRINCIPAL -->
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="row">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" title="Sistema ">SGBP</a>
          </div>
          <div class="collapse navbar-collapse" id="main-nav">
            <ul class="nav navbar-nav navbar-right">
            
		      <li><a href="../../../sgbp/app/index.php?sgbp=AltaPatrimonio">Alta de Patrimonio</a></li>
		      <li><a href="../../../sgbp/app/index.php?sgbp=AsignacionPatrimonio">Asignacion de Patrimonio</a></li>
		      <li><a href="../../../sgbp/app/index.php?sgbp=perfil"><span class="glyphicon glyphicon-user"></span> 
		      	<?php echo $_SESSION['nombre']." ".$_SESSION['apellido']; ?> </a></li>
      		  <li><a href="../../../sgbp/app/index.php?sesion=logout"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACION PRINCIPAL -->
    
    <!-- CONTENIDO <h3><strong>Bienvenido Agente !!!</strong></h3> <br/><br/> --> 
        <?php if(isset( $_SESSION['mensajeIngreso'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-success">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['mensajeIngreso'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['mensajeIngreso'] ); }     ?>
        <?php if(isset( $_SESSION['alertaIngreso'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-primary">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['alertaIngreso'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['alertaIngreso'] ); }     ?>
        <?php if(isset( $_SESSION['mensajeEgreso'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-success">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['mensajeEgreso'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['mensajeEgreso'] ); }     ?>
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
        unset( $_SESSION['msjObservacion'] ); }     ?>  
        <?php if(isset( $_SESSION['errorEgreso'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-danger">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['errorEgreso'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['errorEgreso'] ); }     ?>
		<?php if(isset( $_SESSION['errorIngreso'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-danger">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['errorIngreso'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['errorIngreso'] ); }     ?>

<div class="modal js-loading-bar">
 <div class="modal-dialog">
   <div class="modal-content">
         <div class="progress progress-popup">
        <div class="progress-bar"></div>
       </div>
     </div>
   </div>
 </div>
    
 	<main class="main-container no-padding-top" role="main">
    <section>
	<div class="container">
  		<h2>Bienvenido </h2> <br><br>
  		<div class="panel-group">
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
      			
      				<div class="panel-body">
      				
 <!-- <img src="https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;chl=Hello%20world&amp;choe=UTF-8" alt="QR code">
  -->
  						<br>
  						<div class="row">
                          <div class="col-md-4">
							<a onclick="printPage()" class="btn btn-primary btn-l">
		      					<span class="glyphicon glyphicon-print"></span> Imprimir Listado 
		    				</a></div>
                          <div class="col-md-4"><a onclick="tablesToExcel(['enplaya'], ['Listado de vehiculos'], 'VehiculosEnPlaya.xls', 'Excel')" class="btn btn-primary btn-l">
		      					<span class="glyphicon glyphicon-export"></span> Exportar a Excel 
		    				</a></div>
                          <div class="col-md-4"></div>
                        </div>

					</div>
			</div>
		</div>
	</div>	
	

       
     </section>    
    </main> 
		    
    <!-- FIN CONTENIDO -->
        
    <?php include 'footer.php'; ?>
 
    <!-- JAVASCRIPT EXTRA -->
    <script src="../../../sgbp/bastrap3/assets/buenosaires.js"></script>  
    <script src="../../../sgbp/bastrap3/js/jquery.min.js"></script>
    <script src="../../../sgbp/bastrap3/js/jquery.dataTables.min.js"></script>
    <script src="../../../sgbp/bastrap3/js/bootstrap.min.js"></script>
    <script src="../../../sgbp/bastrap3/js/script.js"></script>
    <script src="../../../sgbp/bastrap3/js/agente.js"></script>  
    <script src="../../../sgbp/bastrap3/js/abreviaciones.js"></script>
        
    </body>   
</html>

<?php 

    }
    else { require_once 'iniciarSesion.php'; }      
}
else { require_once 'iniciarSesion.php'; }

?>
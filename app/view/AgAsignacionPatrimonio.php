<?php
@session_start();

if(isset($_SESSION['idTipoLogin'])) {
    if($_SESSION['idTipoLogin'] == 1) {  
    	if(isset($_SESSION['ingresoActual'])){
    	$ingreso = array();
    	$ingreso = json_decode($_SESSION['ingresoActual']);
    	$volver = true;
    	}
    	else $volver = false;
?>

<!DOCTYPE html>
<html>

<?php include 'header.php'; ?>

<script src="../../../sugpa/bastrap3/js/jquery-1.12.4.js"></script>
<script src="../../../sugpa/bastrap3/js/jquery-ui.js"></script>
<script src="../../../sugpa/bastrap3/js/select.js"></script>
<script src="../../../sugpa/bastrap3/js/checkPlaya.js"></script>
<script src="../../../sugpa/bastrap3/js/sugerenciasInput.js"></script>
<script src="../../../sugpa/bastrap3/js/botonMotivos.js"></script>
<script src="../../../sugpa/bastrap3/js/camposNumericos.js"></script>
<script src="../../../sugpa/bastrap3/js/validarPatente.js"></script>
<script src="../../../sugpa/bastrap3/js/validarPistasIng.js"></script>
<script src="../../../sugpa/bastrap3/js/deshabilitarGrua.js"></script>
<script src="../../../sugpa/bastrap3/js/validarModelo.js"></script>
<?php if($volver){?> 
<script src='../../../sugpa/bastrap3/js/validarSiVuelve.js'></script>
<?php }?>

<!-- jQuery library -->

<body>


	<!-- NAVEGACI�N PRINCIPAL -->
	<nav class="navbar navbar-default" role="navigation">
		<div class="container">
			<div class="row">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse"
						data-target="#main-nav">
						<span class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#"
						title="Sistema �nico de Gesti�n de Playas de Acarreo">SGBP</a>
				</div>
				<div class="collapse navbar-collapse" id="main-nav">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="../../sgbp/app/index.php?sgbp=Bienvenido">Volver</a></li>
						<li><a href="../../sgbp/app/index.php?sgbp=perfil"><span
								class="glyphicon glyphicon-user"></span> 
		      	<?php echo $_SESSION['nombre']." ".$_SESSION['apellido']; ?> </a></li>
						<li><a href="../../sgbp/app/index.php?sesion=logout"><span
								class="glyphicon glyphicon-log-in"></span> Salir</a></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<!-- FIN DE NAVEGACI�N PRINCIPAL -->

	<form action="../../../sgbp/app/index.php?sgbp=FichaPatrimonio" method="post" id="formIngreso" >
<!-- 		<input type="hidden" name="sugpa" value="ingresoVehiculo"> -->
		<div class="container">
			<h2>Asignacion de Patrimonio :</h2>
			<br>
			<div class="panel-group">

				<div class="panel panel-primary">
					<div class="panel-heading"><b>Complete los datos</b></div>
					<div class="panel-body">


										<label id="dom" for="dominio">Numero de Patrimonio: </label>
										<p class="boton-margen-inferior">
											<input class="form-control input-lg" required name="dominio"
												id="dominio" type="text" style="text-transform: uppercase"
												autocomplete="off" autofocus/>
										</p>
										<br>
										
										
										<p class="boton-margen-inferior">
									<input class="btn btn-primary btn-lg" name="submitIngresar" type="submit" value="Siguiente"/></p>
										

				   
						     
				</div>
				
		</div>		
			</div>
</div>

 </form>
</body>

<?php include 'footer.php'; ?>
</html>

<?php 
 }
 else { require_once 'iniciarSesion.php'; }      
 }
 else { require_once 'iniciarSesion.php'; }
?>
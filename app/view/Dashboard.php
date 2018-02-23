<?php
@session_start();

if (isset($_SESSION['idTipoLogin'])) {
    if ($_SESSION['idTipoLogin'] == 3) {
        
?>

<!DOCTYPE html>
<html>

	<?php include 'header.php'; ?>
    
<body>

	<!-- NAVEGACION PRINCIPAL -->
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
						title="Sistema Unico de Gestión de Playas de Acarreo">SGBP</a>
				</div>
				<div class="collapse navbar-collapse" id="main-nav">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="../../../login/app/index.php?login=BuscarVehiculo">Buscar Patrimonio</a></li>
						<li><a href="../../../login/app/index.php?login=Estadisticas">Ver estadisticas</a></li>
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
<div class="modal js-loading-bar">
 <div class="modal-dialog">
   <div class="modal-content">
         <div class="progress progress-popup">
        <div class="progress-bar"></div>
       </div>
     </div>
   </div>
 </div>

	<!-- CONTENIDO -->
	

	<div class="container">
		<h2>Dashboard</h2>
		<br>
		<div class="panel-group">
			<div class="panel panel-primary">
				<div class="panel-heading"><b>Graficos</b></div>

				<div class="panel-body">
					<div class="row">
						<div class="col-lg-10">
							<div class="panel panel-primary">
								<div class="panel-heading"><b></b></div>
								<div class="panel-body">
									<div class="img-responsive" id="playaSarmiento" style="width: 800px; height: 400px;"></div>
									<div class="img-responsive" id="playaRioCuarto" style="width: 800px; height: 400px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="panel-body">
					<div class="row">
						<div class="col-lg-10">
							<div class="panel panel-primary">	
								<div class="panel-heading"><b></b></div>
								<div class="panel-body">
									<div class="img-responsive" id="estados" style="width: 800px; height: 400px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="panel-body">
					<div class="row">
						<div class="col-lg-10">
							<div class="panel panel-primary">	
								<div class="panel-heading"><b></b></div>
								<div class="panel-body">
									<div class="img-responsive" id="egresos" style="width: 800px; height: 400px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>

    <br /><br />
	<br /><br />
	<br /><br />
	<br /><br />

	<!-- FIN CONTENIDO -->
        
    <?php include 'footer.php'; ?>
    
	<!-- JAVASCRIPT EXTRA -->
	
    <script src="../../../login/bastrap3/js/jquery.min.js"></script>
	<script src="../../../login/bastrap3/js/bootstrap.min.js"></script>
	<script src="../../../login/bastrap3/js/graficos.js"></script><!--el loader.js de chart-->
	<script src="../../../login/bastrap3/js/graficosTorta.js"></script>
    <script type="../../../login/bastrap3/js/jquery10.min.js"></script>

</body>
</html>

<?php
    } else {
        require_once 'iniciarSesion.php';
    }
} else {
    require_once 'iniciarSesion.php';
}

?>
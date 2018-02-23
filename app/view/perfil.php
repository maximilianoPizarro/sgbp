<?php
@session_start();
if(isset($_SESSION['idSesion'])) { ?>

<!DOCTYPE html>
<html>

	<?php include 'header.php'; ?>
	
	<body>
    
    <!-- NAVEGACI�N PRINCIPAL -->
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="row">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" title="Sistema">SGBP</a>
           </div>
          <div class="collapse navbar-collapse" id="main-nav">
            <ul class="nav navbar-nav navbar-right">
		      <li><a href="../../../login/app/index.php?login=IniciarSesion">Volver</a></li>
		      <li><a href="../../../login/app/index.php?login=perfil"><span class="glyphicon glyphicon-user"></span> 
		      	<?php echo $_SESSION['nombre']." ".$_SESSION['apellido']; ?> </a></li>
      		  <li><a href="../../../login/app/index.php?sesion=logout"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACI�N PRINCIPAL -->
        
	   <!-- localhost/Sesion/views/init.php -->
    
    <!-- CONTENIDO -->
    <?php if(isset( $_SESSION['mensaje'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-success">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['mensaje'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['mensaje'] ); }     
    ?>
    <?php if(isset( $_SESSION['mensajeError'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-danger">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['mensajeError'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
        unset( $_SESSION['mensajeError'] ); }     
    ?>
    
    <main class="main-container no-padding-top" role="main">
      <section>
        <div class="container">
          <h1 class="text-center">Perfil</h1>
          <br>
          <br>
          <div class="row">
            <div class="tab-content col-sm-6 col-sm-offset-3">

              <ul class="nav nav-pills nav-justified">
                <li role="perfil" class="active"><a class="" href="#usuario" aria-controls="usuario" role="tab" data-toggle="tab">Datos del Usuario</a></li>
                <li role="perfil"><a class="" href="#cuenta" aria-controls="cuenta" role="tab" data-toggle="tab">Datos de la Cuenta</a></li>
              </ul>

              <br><br>

              <!-- Datos Usuario -->
              <div role="tabpanel" class="tab-pane active" id="usuario">
              
              	<div class="col-lg-12">
                <div class="panel panel-default">
                  <div class="panel-heading text-center"><b>Datos del usuario</b></div>
                  <div class="panel-body">
                      <div class="form-group">
                        <p><strong>Apellido: </strong><?php echo $_SESSION['nombre']; ?></p>
                      </div>
                      <div class="form-group">
                      	<p><strong>Nombre: </strong><?php echo $_SESSION['apellido']; ?></p>
                      </div>
                      <div class="form-group">
                      	<p><strong>Dni: </strong><?php echo $_SESSION['dni']; ?></p>
                      </div>
                  </div>
                </div>
                </div>
                
                <div class="col-lg-12">
                <div class="panel panel-default">
                  <div class="panel-heading text-center"><b>Cambiar direcci&oacuten de email</b></div>
                  <div class="panel-body">
                    <form action=" ../../../login/app/index.php " method="POST" onsubmit="submitEmail.disabled=true; submitEmail.value='Enviando..'; return true;">
                    	<input type="hidden" name="login" value="perfilUpdate">
                    	<input type="hidden" name="profile" value="1">
                      <div class="form-group">
                        <label for="email">Email:</label>
                        <input class="form-control" name="email" id="email" type="email" value="<?php echo $_SESSION['email']; ?>" autocomplete="off" required>
                      </div>
                      <input type="submit" name="submitEmail" class="btn btn-primary pull-right" value="Cambiar">
                    </form>
                  </div>
                </div>
                </div>
            	<p><center>Para cambiar sus datos personales <br> pongase en contacto con un administrador de SGBP</center></p>
              </div>
              <!-- Fin Datos Usuario -->
              
              <!-- Datos Cuenta -->
              <div role="tabpanel" class="tab-pane" id="cuenta">
                
                <div class="col-lg-12">
                <div class="panel panel-default">
                  <div class="panel-heading text-center"><b>Cuenta</b></div>
                  <div class="panel-body">
                  	<label for="tipo">Tipo de Usuario:</label> <?php echo $_SESSION['tipoLogin']; ?>
                  	<form action=" ../../../login/app/index.php " method="POST" onsubmit="submitUseer.disabled=true; submitUseer.value='&nbsp&nbsp&nbsp&nbsp&nbsp;Enviando..&nbsp&nbsp&nbsp&nbsp&nbsp;'; return true;">
                  		<input type="hidden" name="login" value="perfilUpdate">
                    	<input type="hidden" name="profile" value="2">
                      <div class="form-group">
                        <label for="useer">Nombre de Usuario:</label>
                        <input class="form-control" minlength="5" name="useer" id="useer" type="text" value="<?php echo $_SESSION['useer']; ?>" autocomplete="off" required>
                      </div>
                      <div class="form-group"> 
                      </div>
                      <input type="submit" name="submitUseer" class="btn btn-primary pull-right" value="Cambiar Nombre Usuario">
                    </form>  
                  </div>
                </div>
                </div>

                <div class="col-lg-12">
                <div class="panel panel-default">
                  <div class="panel-heading text-center"><b>Cambiar Contraseña</b></div>
                  <div class="panel-body">
                    <form action=" ../../../login/app/index.php " method="POST" onsubmit="submitContra.disabled=true; submitContra.value='Enviando..'; return true;">
                    	<input type="hidden" name="login" value="perfilUpdate">
                    	<input type="hidden" name="profile" value="3">
                      <div class="form-group">
                        <label for="cAntigua">Contraseña antigua:</label>
                        <input class="form-control" name="cAntigua" id="cAntigua" type="password" required>
                      </div>
                      <div class="form-group">
                        <label for="cNueva">Nueva contraseña:</label>
                        <input class="form-control" minlength="8" name="cNueva" id="cNueva" type="password" required>
                      </div>
                      <div class="form-group">
                        <label for="cConfirm">Confirmar contraseña:</label>
                        <input class="form-control" minlength="8" name="cConfirm" id="cConfirm" type="password" required>
                      </div>
                      <input type="submit" name="submitContra" class="btn btn-primary pull-right" value="Cambiar">
                    </form>
                  </div>
                </div>
                </div>
                
              </div>
              <!-- Fin Datos Cuenta -->
            </div>
          </div> 
        </div>
      </section>
    </main>
     <!-- FIN CONTENIDO -->    


    <?php include 'footer.php'; ?>
    
    <script src="../../../login/bastrap3/jquery.min.js"></script>
    <script src="../../../login/bastrap3/bootstrap.min.js"></script>
    <!-- JAVASCRIPT EXTRA -->    
        
    </body>
</html>

<?php 
}
else { require_once 'iniciarSesion.php'; }
?>
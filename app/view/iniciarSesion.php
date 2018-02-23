<?php 

@session_start(); 

if( isset($_SESSION['idSesion']) ) {
    switch($_SESSION['idTipoLogin']) {
        case 1: { require_once 'AgBienvenido.php'; };break;
        case 2: { require_once 'AdmBienvenido.php'; };break;
        case 3: { require_once 'Dashboard.php'; };break;
    }
}

if( !isset($_SESSION['idSesion']) )  {

?>

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
              <span class="sr-only">Cambiar navegación</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" title="Sistema">SGBP</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACI�N PRINCIPAL -->
    
    <!-- CONTENIDO -->
    
    <?php if( isset( $_SESSION['mensajeError'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-danger">
                        <div class="alert-link-text">
                            <h4> Usuario o contraseña incorrectos </h4>
                            <p>Si ha olvidado su contraseña, pongase en contacto
                                con un administrador del sistema.</p>
                        </div>
                    </div>
                </div>
              </div>';
      } ?>  
     <?php if(isset( $_SESSION['mensajeEmail'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-warning">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['mensajeEmail'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
     } ?>
    <?php if(isset( $_SESSION['mensajeEmailError'] )) { 
        echo '<div class="container">
                <div class="col-xs-12">
                    <div class="alert-spot alert-spot-danger">
                        <div class="alert-link-text">
                            <h4>' . $_SESSION['mensajeEmailError'] . '</h4>
                        </div>
                    </div>
                </div>
              </div>';
    } ?>
    

    <main class="main-container no-padding-top" role="main">
      <section>
       <form action=" ../../../login/app/index.php?sesion=login " method="post">
       	<input type="hidden" name="sesion" value="login">
        <div class="container">
          <h2 class="h1 text-left">Iniciar Sesi&oacuten</h2>
          <br>
            <div class="form-group">
              <label for="usuario">Usuario:</label>
              <div class="row">
                <div class="col-xs-6"><input class="form-control input-lg" type="text" placeholder="Usuario" name="useer" required></div>
              </div>
              <br> 
              <label for="usuario">Contrase&ntildea:</label>
              <div class="row">
                <div class="col-xs-6"><input class="form-control input-lg" type="password" placeholder="Contraseña" name="pass" required></div>
              </div>
              <br>
              <div class="row">
              <div class="col-xs-6"><button class="btn btn-primary btn-lg">Ingresar</button></div>
              </div>
            </div>    
            
            <br>
          	<a data-toggle="modal" data-target="#restaurar" > Olvid&eacute mi Contrase&ntildea</a>
                      
        </div>
      </form>	
       
    	<div class="container">
    	   <!-- Modal -->
    		<div class="modal fade" id="restaurar" role="dialog">
    			<div class="modal-dialog">
    			
    			<!-- Modal content-->
    			<div class="modal-content">
    				<div class="modal-header">
    				
    				<button type="button" class="close" data-dismiss="modal">&times;</button>
    				<h4 class="modal-title">Restaurar Contrase&ntildea</h4>
    				
    				</div>
    	
    				<div class="modal-body">
    				
    				<main class="main-container no-padding-top" role="main">
    				<section>
    					<form id="frmRestablecer" action="../../../sugpa/app/index.php" method="post" onsubmit="submitResta.disabled=true; submitResta.value='&nbsp&nbsp&nbsp;Enviando..&nbsp&nbsp&nbsp;'; return true;">
        					<input type="hidden" name="sesion" value="Restablecer"/>
          					<div class="container">
            					<div class="form-group">
                					<label for="email"> Escribe el email asociado a su cuenta para restaurar la contrase&ntildea </label>
                					<div class="row">
                						<div class="col-xs-6"><input type="email" id="email" class="form-control input-lg" name="email" autocomplete="off" required></div>
             						</div> <br> 
                          			<div class="row">
                            			<div class="col-xs-6"><input type="submit" name="submitResta" class="btn btn-primary btn-lg" value="Recuperar contraseña" ></div>
                       				</div>
          						</div>
          					</div>	
        				</form>
    				</section>
    				</main>
    				
    				</div>
    				
    				<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div>
    			</div> 
    			</div>
    		</div>
    	</div>
    	
       
     </section>    
    </main> 
    
    
    
    <!-- FIN CONTENIDO --> 
        
    <?php include 'footer.php'; ?>  
    
    <script src="../../../login/bastrap3/js/jquery.min.js"></script>
    <script src="../../../login/bastrap3/js/bootstrap.min.js"></script>

        
    </body>
</html>

<?php } ?>
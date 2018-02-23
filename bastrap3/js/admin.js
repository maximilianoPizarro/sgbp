//***********************************************************************
//*******************************ADMIN DE SUGPA**************************
//***********************************************************************

//tabla dinamica para administrar usuarios
//id=usuariosadmin
	$(document).ready(function(){
		
			 var table4 = $('#usuariosadmin').DataTable({
			        "processing": true,
			        //"scrollY": 300,
			        "scrollX": true,
			        //"autoWidth": true,
			        //responsive": true,
				    "sAjaxSource":"../app/negocio/lstUsuarios.php",
			        "columns": [{
					                "class":          "details-control",
					                "orderable":      false,
					                "data":           null,			           
					                "defaultContent": ""
					            },
			                    { "data": "dni" },
			                    { "data": "apellido" },
			                    { "data": "nombre" },
			                    { "data": "email" },
			                    { "data": "useer" },
			                    { "data": "tipologin" }
			                    ],
			      "order": [[1, 'dsc']]
				  }
					 );
			
			 table4.columns.adjust().draw();
			    // Array to track the ids of the details displayed rows
			    var detailRows4 = [];
			 
			    $('#usuariosadmin tbody').on( 'click', 'tr td.details-control', function () {
			        var tr4 = $(this).closest('tr');
			        var row4 = table4.row( tr4 );
			        var idx4 = $.inArray( tr4.attr('id'), detailRows4 );
			 
			        if ( row4.child.isShown() ) {
			            tr4.removeClass( 'details' );
			            row4.child.hide();
			 
			            // Remove from the 'open' array
			            detailRows4.splice( idx4, 1 );
			        }
			        else {
			            tr4.addClass( 'details' );
			            row4.child( detalleUsuario( row4.data() ) ).show();
			 
			            // Add to the 'open' array
			            if ( idx === -1 ) {
			                detailRows4.push( tr4.attr('id') );
			            }
			        }
			    } );
			    
			    // On each draw, loop over the `detailRows` array and show any child rows
			    table4.on( 'draw', function () {
			        $.each( detailRows4, function ( i, id ) {
			            $('#'+id+' td.details-control').trigger( 'click' );
			        } );
			    } );
			    
			    // $('#panel-body').css( 'display', 'block' );
			    // table.columns.adjust().draw();
			   
		} );
	
//Detalle Usuario
	function detalleUsuario ( d4 ) {		
					//Agrego abm usuarios botones
				    return '<strong>Realizar una accion: </strong><br><br>'
				    
				    //Script para controlar el cambio del nombre de usuario
				    +'<script type="text/javascript">'
					+'function capturar() {'
					+'var option = null;'
					+'var useer = document.getElementById("usuario").value;'
					+'if(useer != "") {'
						+'if(useer.length >= 7) {'
						+'option = confirm("Recuerde que debe notificar al dueño de la cuenta del cambio de nombre de su usuario para que pueda logearse. ¿ Desea continuar ?"); }'
					+'else { option = false; alert("El nombre de usuario debe tener un minimo de 7 caracteres") } }'
					+'else { var option = true; }'
					+'if(option == true) {  document.frmModificarUseer.submit()  } }'
					+'</script>'	//fin script
				    
				    +'<div class="container-fluid"><div class="row-fluid"><div class="col-md-12">' //principio linea base
					+'<div class="row">' //row
					
					+'<div class="col-md-4">' //columna 1
				    +'<a class="btn btn-primary btn-l" data-toggle="modal" data-target="#modalmodificar" > Modificar Usuario</a>'
				    +'</div><div class="clearfix visible-xs-block"></div>'
				    
					+'<div class="col-md-4">' //columna 2
				    +'<a class="btn btn-primary btn-l" data-toggle="modal" data-target="#eliminarusuario" > Eliminar Usuario</a>'
				    +'</div><div class="clearfix visible-xs-block"></div>'
				    +'</div>'
					//modal modificar
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="modalmodificar" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modificar Usuario</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form name="frmModificarUseer" action="../../../sugpa/app/index.php" method="POST">'
					+'<input type="hidden" name="abm" value="2"/><div class="container"><div class="form-group"><label for="modifi">Datos del usuario</label>'
					+'<div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="AdministrarUsuario"/><input type="hidden" name="id" value="'+d4.idusuario+'"/>'
					+'<div class="form-group"><label for="apell">Usuario:</label><input class="form-control" name="usuario" id="usuario" type="text" placeholder="'+d4.useer+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="apell">Apellido:</label><input class="form-control" name="apell" id="apell" type="text" placeholder="'+d4.apellido+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="nom">Nombre:</label><input class="form-control" name="nom" id="nom" type="text" placeholder="'+d4.nombre+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="dni">Dni:</label><input class="form-control" name="dni" id="dni" type="text" placeholder="'+d4.dni+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="email">Email:</label><input class="form-control" name="email" id="email" type="text" placeholder="'+d4.email+'" autocomplete="off"></div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="button" class="btn btn-primary btn-lg" value="Cambiar" onclick="capturar();" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal
					//modal eliminar
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="eliminarusuario" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Eliminar Usuario</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmEliminar" action="../../../sugpa/app/index.php" method="POST">'
					+'<input type="hidden" name="abm" value="3"/><div class="container"><div class="form-group"><label for="modifi">¿ ELIMINAR USUARIO DEL SISTEMA ?</label><br><br>'
					+'<div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="AdministrarUsuario"/><input type="hidden" name="id" value="'+d4.idusuario+'"/><input type="hidden" name="nom" value="'+d4.nombre+'"/><input type="hidden" name="apell" value="'+d4.apellido+'"/>'
					+'<div class="form-group"><label for="apell">Usuario:	</label>&nbsp'+d4.useer+'</div>'
					+'<div class="form-group"><label for="apell">Apellido:	</label>&nbsp'+d4.apellido+'</div>'
					+'<div class="form-group"><label for="nom">Nombre:</label>&nbsp'+d4.nombre+'</div>'
					+'<div class="form-group"><label for="dni">Dni:	</label>&nbsp'+d4.dni+'</div>'
					+'<div class="form-group"><label for="email">Email:	</label>&nbsp'+d4.email+'</div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Eliminar" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal					
					+'</div></div></div>';//fin linea base
	}	

	
//tabla dinamica para administrar Personal
//id=personaladmin
	$(document).ready(function(){
		
			 var table5 = $('#personaladmin').DataTable({
			        "processing": true,
			        //"scrollY": 300,
			        "scrollX": true,
			        //"autoWidth": true,
			        //responsive": true,
				    "sAjaxSource":"../app/negocio/lstPersonal.php",
			        "columns": [{
					                "class":          "details-control",
					                "orderable":      false,
					                "data":           null,			           
					                "defaultContent": ""
					            },
			                    { "data": "dni" },
			                    { "data": "apellido" },
			                    { "data": "nombre" },
			                    { "data": "tipopersonal.tipopersonal" }
			                    ],
			      "order": [[1, 'dsc']]
				  }
					 );
			
			 table5.columns.adjust().draw();
			    // Array to track the ids of the details displayed rows
			    var detailRows5 = [];
			 
			    $('#personaladmin tbody').on( 'click', 'tr td.details-control', function () {
			        var tr5 = $(this).closest('tr');
			        var row5 = table5.row( tr5 );
			        var idx5 = $.inArray( tr5.attr('id'), detailRows5 );
			 
			        if ( row5.child.isShown() ) {
			            tr5.removeClass( 'details' );
			            row5.child.hide();
			 
			            // Remove from the 'open' array
			            detailRows5.splice( idx4, 1 );
			        }
			        else {
			            tr5.addClass( 'details' );
			            row5.child( detallePersonal( row5.data() ) ).show();
			 
			            // Add to the 'open' array
			            if ( idx === -1 ) {
			                detailRows5.push( tr5.attr('id') );
			            }
			        }
			    } );
			    
			    // On each draw, loop over the `detailRows` array and show any child rows
			    table5.on( 'draw', function () {
			        $.each( detailRows5, function ( i, id ) {
			            $('#'+id+' td.details-control').trigger( 'click' );
			        } );
			    } );
			    
			    // $('#panel-body').css( 'display', 'block' );
			    // table.columns.adjust().draw();
			   
		} );
	
//Detalle Personal
	function detallePersonal ( d5 ) {		
					//Agrego abm usuarios botones
				    return '<strong>Realizar una accion: </strong><br><br>'
				    +'<div class="container-fluid"><div class="row-fluid"><div class="col-md-12">' //principio linea base
					+'<div class="row">' //row
					
					+'<div class="col-md-4">' //columna 1
				    +'<a class="btn btn-primary btn-l" data-toggle="modal" data-target="#modificarpersonal" > Modificar Personal</a>'
				    +'</div><div class="clearfix visible-xs-block"></div>'
				    
					+'<div class="col-md-4">' //columna 2
				    +'<a class="btn btn-primary btn-l" data-toggle="modal" data-target="#eliminarpersonal" > Eliminar Personal</a>'
				    +'</div><div class="clearfix visible-xs-block"></div>'
				    +'</div>'
					//modal modificar
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="modificarpersonal" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modificar Personal</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmModificar" action="../../../sugpa/app/index.php" method="POST">'
					+'<input type="hidden" name="abm" value="2"/><div class="container"><div class="form-group"><label for="modifi">Datos del Personal</label>'
					+'<div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="PersonalABM"/><input type="hidden" name="iddni" value="'+d5.dni+'">'
					+'<div class="form-group"><label for="apellido">Apellido:</label><input class="form-control" name="apell" id="apell" type="text" placeholder="'+d5.apellido+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="nombre">Nombre:</label><input class="form-control" name="nom" id="nom" type="text" placeholder="'+d5.nombre+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="dnii">Dni:</label><input class="form-control" name="dni" id="dni" type="text" placeholder="'+d5.dni+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="tipoo">Personal de tipo:</label><select class="form-control input-lg"  id="tipo" name="tipo"><option value="" selected="">SIN CAMBIO DE TIPO</option><option value="1">AGENTE DE TRANSITO</option>'
					+'<option value="2">CHOFER DE GRUA</option></select></div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Cambiar" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal
					//modal eliminar
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="eliminarpersonal" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Eliminar Personal</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmEliminar" action="../../../sugpa/app/index.php" method="POST">'
					+'<input type="hidden" name="abm" value="3"/><div class="container"><div class="form-group"><label for="modifi">¿ ELIMINAR PERSONAL DEL SISTEMA ?</label><br><br>'
					+'<div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="PersonalABM"/><input type="hidden" name="dni" value="'+d5.dni+'"/><input type="hidden" name="nom" value="'+d5.nombre+'"/><input type="hidden" name="apell" value="'+d5.apellido+'"/>'
					+'<div class="form-group"><label for="tipo">Tipo Personal:	</label>&nbsp'+d5.tipopersonal.tipopersonal+'</div>'
					+'<div class="form-group"><label for="apellido">Apellido:	</label>&nbsp'+d5.apellido+'</div>'
					+'<div class="form-group"><label for="nombre">Nombre:	</label>&nbsp'+d5.nombre+'</div>'
					+'<div class="form-group"><label for="dnii">Dni:	</label>&nbsp'+d5.dni+'</div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Eliminar" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal					
					+'</div></div></div>';//fin linea base
	}	
	
	
//tabla dinamica para administrar Grua
//id=gruaadmin		,
	$(document).ready(function(){

			 var table6 = $('#gruaadmin').DataTable({
			        "processing": true,
			       // "scrollY": 300,
			        "scrollX": true,
			       // "autoWidth": true,
			        //responsive": true,
				    "sAjaxSource":"../app/negocio/lstGruas.php",
			        "columns": [{
					                "class":          "details-control",
					                "orderable":      false,
					                "data":           null,			           
					                "defaultContent": ""
					            },
			                    { "data": "interno" },
			                    { "data": "dominio" },
			                    { "data": "designacion" },
			                    { "data": "dependencia" }
			                    ],
			      "order": [[1, 'dsc']]
				  }
					 );
			
			 table6.columns.adjust().draw();
			    // Array to track the ids of the details displayed rows
			    var detailRows6 = [];
			 
			    $('#gruaadmin tbody').on( 'click', 'tr td.details-control', function () {
			        var tr6 = $(this).closest('tr');
			        var row6 = table6.row( tr6 );
			        var idx6 = $.inArray( tr6.attr('id'), detailRows6 );
			 
			        if ( row6.child.isShown() ) {
			            tr6.removeClass( 'details' );
			            row6.child.hide();
			 
			            // Remove from the 'open' array
			            detailRows6.splice( idx6, 1 );
			        }
			        else {
			            tr6.addClass( 'details' );
			            row6.child( detalleGrua( row6.data() ) ).show();
			 
			            // Add to the 'open' array
			            if ( idx === -1 ) {
			                detailRows6.push( tr6.attr('id') );
			            }
			        }
			    } );
			    
			    // On each draw, loop over the `detailRows` array and show any child rows
			    table6.on( 'draw', function () {
			        $.each( detailRows6, function ( i, id ) {
			            $('#'+id+' td.details-control').trigger( 'click' );
			        } );
			    } );
			    
			    // $('#panel-body').css( 'display', 'block' );
			    // table.columns.adjust().draw();
			   
		} );
	
//Detalle Grua
	function detalleGrua ( d6 ) {		
					//Agrego abm usuarios botones
				    return '<strong>Realizar una accion: </strong><br><br>'
				    +'<div class="container-fluid"><div class="row-fluid"><div class="col-md-12">' //principio linea base
					+'<div class="row">' //row
					
					+'<div class="col-md-4">' //columna 1
				    +'<a class="btn btn-primary btn-l" data-toggle="modal" data-target="#modificargrua" > Modificar Movil</a>'
				    +'</div><div class="clearfix visible-xs-block"></div>'
				    
					+'<div class="col-md-4">' //columna 2
				    +'<a class="btn btn-primary btn-l" data-toggle="modal" data-target="#eliminargrua" > Eliminar Movil</a>'
				    +'</div><div class="clearfix visible-xs-block"></div>'
				    +'</div>'
					//modal modificar
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="modificargrua" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modificar Grua</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmModificar" action="../../../sugpa/app/index.php" method="POST">'
					+'<input type="hidden" name="abm" value="2"/><div class="container"><div class="form-group"><label for="modifi">Datos del Interno</label>'
					+'<div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="AdministrarGrua"/><input type="hidden" name="id" value="'+d6.idgrua+'"/>'
					+'<div class="form-group"><label for="inter">Interno:</label><input class="form-control" name="interno" id="inter" type="text" placeholder="'+d6.interno+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="dom">Dominio:</label><input class="form-control" name="dominio" id="dom" type="text" placeholder="'+d6.dominio+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="desig">Designacion:</label><input class="form-control" name="desig" id="desig" type="text" placeholder="'+d6.designacion+'" autocomplete="off"></div>'
					+'<div class="form-group"><label for="depend">Dependencia:</label><input class="form-control" name="depend" id="depend" type="text" placeholder="'+d6.dependencia+'" autocomplete="off"></div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Cambiar" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal
					//modal eliminar
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="eliminargrua" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Eliminar Grua</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmEliminar" action="../../../sugpa/app/index.php" method="POST">'
					+'<input type="hidden" name="abm" value="3"/><div class="container"><div class="form-group"><label for="eliminar">¿ ELIMINAR GRUA DEL SISTEMA ?</label><br><BR>'
					+'<div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="AdministrarGrua"/><input type="hidden" name="id" value="'+d6.idgrua+'"/>'
					+'<div class="form-group"><label for="intern">Interno:	</label>&nbsp'+d6.interno+'</div>'
					+'<div class="form-group"><label for="dom">Dominio:	</label>&nbsp'+d6.dominio+'</div>'
					+'<div class="form-group"><label for="desing">Designacion:	</label>&nbsp'+d6.designacion+'</div>'
					+'<div class="form-group"><label for="depend">Dependencia:	</label>&nbsp'+d6.dependencia+'</div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Eliminar" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal					
					+'</div></div></div>';//fin linea base
	}
			
	
//tabla dinamica para mostrar movimientos
//id=movimientosadmin		,
	$(document).ready(function(){
		
	  
			 var table7 = $('#movimientosadmin').DataTable({
			        "processing": true,
			        //"scrollY": 300,
			        "scrollX": true,
			        //"autoWidth": true,
			        //responsive": true,
				    "sAjaxSource":"../../../sugpa/app/negocio/lstMovimientos.php",
			        "columns": [
			                    { "data": "fechahora" },
			                    { "data": "operacion" },
			                    { "data": "estado.estado" },
			                    { "data": "usuario.apellidonombre"},	
			                    { "data": "login.idtipologin.tipologin" }
			                    ],
			      "order": [[1, 'dsc']]
				  }
					 );
		} );

	
//tabla dinamica vehiculos más de 90 días
//id=fueraDePlazoMoto
	$(document).ready(function(){
		
	  
			 var table10 = $('#fueraDePlazoMoto').DataTable({
			        "processing": true,
			        //"scrollY": 300,
			        "scrollX": true,
			        //"autoWidth": true,
			        //responsive": true,
				    "sAjaxSource":"../app/negocio/lstFueraPlazoMoto.php",
			        "columns": [{
					                "class":          "details-control",
					                "orderable":      false,
					                "data":           null,			           
					                "defaultContent": ""
					            },
			                    { "data": "idingreso" },
			                    { "data": "ninventario", "defaultContent": "S/D" },
			                    { "data": "diasplaya", "defaultContent": "S/D" },
			                    { "data": "tipovehiculo.tipovehiculo" },
			                    { "data": "dominio" },
			                    { "data": "marca" },
			                    { "data": "modelo" },
			                    { "data": "color" },
			                    { "data": "estado.estado" },
			                    { "data": "ndisposicion", "defaultContent": "S/D" },
			                    { "data": "nsuaci", "defaultContent": "S/D" },
			                    { "data": "nsap", "defaultContent": "S/D" },
			                    { "data": "nprocom", "defaultContent": "S/D" }
			                    ],
			      "order": [[1, 'dsc']]
				  }
					 );
			
			 table10.columns.adjust().draw();
			    // Array to track the ids of the details displayed rows
			    var detailRows10 = [];
			 
			    $('#fueraDePlazoMoto tbody').on( 'click', 'tr td.details-control', function () {
			        var tr10 = $(this).closest('tr');
			        var row10 = table10.row( tr10 );
			        var idx10 = $.inArray( tr10.attr('id'), detailRows10 );
			 
			        if ( row10.child.isShown() ) {
			            tr10.removeClass( 'details' );
			            row10.child.hide();
			 
			            // Remove from the 'open' array
			            detailRows10.splice( idx10, 1 );
			        }
			        else {
			            tr10.addClass( 'details' );
			            row10.child( detalleFueraPlazoMoto( row10.data() ) ).show();
			 
			            // Add to the 'open' array
			            if ( idx === -1 ) {
			                detailRows10.push( tr10.attr('id') );
			            }
			        }
			    } );
			    
			    // On each draw, loop over the `detailRows` array and show any child rows
			    table10.on( 'draw', function () {
			        $.each( detailRows10, function ( i, id ) {
			            $('#'+id+' td.details-control').trigger( 'click' );
			        } );
			    } );
			    
			  //  $('#panel-body').css( 'display', 'block' );
			   // table.columns.adjust().draw();
			   
		} );
	
//Detalle Fuera de Plazo motos titular
	function detalleFueraPlazoMoto ( d10 ) {		
				
		var url='Sin documentos';

		if (d10.lstdocumento[0]!=null){
			var lista=d10.lstdocumento;
			var b = new Base64();
			var resultado='';
			for (var i=0; i< lista.length; i++){ 
				var elemento='<div class="row"><li><div class="col-xs-10 col-sm-6 col-md-8"><div class="col-xs-8"><label>'+lista[i].tipodocumento.tipodocumento+'</label></div><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=documentos&id='+b.encode(lista[i].url)+'" target="_blank">  <span class="glyphicon glyphicon-export"></span></a></div>';
				var eliminar='<div class="col-xs-6 col-md-3"><div class="form-group has-error has-feedback"><label>Eliminar </label><a class="form-control-feedback" href="../../../sugpa/app/index.php?sugpa=deleteDoc&id=4&id_e='+b.encode(lista[i].url)+'&idingreso_e='+d10.idingreso+'&tipo_e='+lista[i].tipodocumento.tipodocumento+'" ><span class="glyphicon glyphicon-remove"></span></a></div></div></li></div><br>';
				resultado=resultado.concat(elemento+eliminar); }
		}else{resultado=url;}
		
		var submitValue = "submit.value='Enviando..';";
		return '<strong> Observaciones: </strong> '+d10.observaciones+'<br><br>'
			    +'<div class="container-fluid"><div class="row-fluid"><div class="col-md-10">' //principio linea base
				+'<div class="row">' //row
				+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#documentos" >Documentos <span class="glyphicon glyphicon-export"></span></a></div>'
				+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#adjuntarDoc" > Adjuntar Documento</a></div>'//columna 4
				+'<div class="col-md-2"><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=MovController&idIngreso='+d10.idingreso+'&marca='+d10.marca+'&modelo='+d10.modelo+'&dominio='+d10.dominio+'" target="_blank">Movimientos</a></div>' //Movimientos		
				+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#numeros" >Informaci&oacuten</a></div>'
				+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#boletacompac" > Generar Boleta Compactaci&oacuten</a></div>'	
				+'</div>'
				//Documentos
				+'<div class="container"><br><!-- Modal --><div class="modal fade" id="documentos" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
				+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Documentos Adjuntos</h4>'
				+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php">'
				+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d10.idingreso+' , Marca: '+d10.marca+', Modelo: '+d10.modelo+', Dominio: '+d10.dominio+' </label>'
				+'<div class="row"><div class="col-xs-6"><br><ul>'+resultado+'</ul></div>'
				+'</div><br><div class="row"><div class="col-xs-6"></div></div></div></div></form></section></main>'
				+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
				+'</div></div></div>' //fin row
				//Adjuntar Documentos
				+'<div class="container"><br><!-- Modal --><div class="modal fade" id="adjuntarDoc" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
				+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Documento</h4>'
				+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmSubirDoc" action="../../../sugpa/app/index.php" method="post" enctype="multipart/form-data" onsubmit="submit.disabled=true; '+submitValue+' return true;"">'
				+'<input type="hidden" name="idingreso" value="'+d10.idingreso+'"><input type="hidden" name="sugpa" value="upDoc"><input type="hidden" name="iddoc" value="4"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d10.idingreso+' , Marca: '+d10.marca+', Modelo: '+d10.modelo+', Dominio: '+d10.dominio+' </label>'
				+'</div><br>'
				+'<div class="row"><div class="col-xs-6">'							
				+'<div id="divTipo" class="form-group">'
				+'<label for="tipo">Tipo de documento:</label>'
				+'<p class="boton-margen-inferior">'
				  +'<select class="form-control input-lg" id="tipo" name="tipoDoc" required>'
					+'<option value="" selected="" disabled>Seleccionar</option>'
					+'<optgroup label = "Documentos Ingreso">'	
					+'<option value="22">Boleta de Compactaci&oacuten</option>'
					+'<option value="3">Cedula de Notificaci&oacuten</option>'
					+'<option value="1">Dispocisiones y Anexos</option>'
					+'<option value="7">Edicto</option>'
					+'<option value="6">Exp Electr&oacutenico</option>'
					+'<option value="2">Informe de Dominio</option>'  
					+'<option value="8">Inventario</option>'
					+'<option value="5">Nota Compactaci&oacuten</option>'
					+'<option value="20">Pedido de Secuetro Positivo</option>'
					+'<option value="21">Pedido de Secuetro Negativo</option>'	
					+'<option value="4">Remitos de Notificaci&oacuten</option>'	
					+'</optgroup>'
	              +'</select></p>'
				+'</div><br>'
				+'<div class="row"><div class="col-xs-6">'	
	            +'<div class="form-group"><label for="docpdf">Adjuntar Documento: </label><input id="docpdf" type="file" required name="docpdf">'
				+'<p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p></div><br>'
				+'<br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
				+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
				+'</div></div></div>' //fin row
				//Modal Generar Boleta Compactacion
				+'<div class="container"><br><!-- Modal --><div class="modal fade" id="boletacompac" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
				+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Generar Boleta de Compactacion</h4>'
				+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" target="_blank" action="../../../sugpa/app/index.php" method="POST">'
				+'<input type="hidden" name="sugpa" value="AdmGenerarBoletaDeCompactacion"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d10.idingreso+' , Marca: '+d10.marca+', Modelo: '+d10.modelo+', Dominio: '+d10.dominio+', Color: '+d10.color+' </label>'
				+'<input type="hidden" name="reg" value="'+d10.idingreso+'"/>'
				+'<input type="hidden" name="dom" value="'+d10.dominio+'"/>'											
				+'<input type="hidden" name="marca" value="'+d10.marca+'"/>'
				+'<input type="hidden" name="modelo" value="'+d10.modelo+'"/>'
				+'<input type="hidden" name="color" value="'+d10.color+'"/>'
				+'<br><div class="form-group"><label for="nprocomp">Ingrese N° ProCom:	<input class="form-control" name="procom" id="boleta" autocomplete="off" type="text" required></label><br>'
				+'<div class="row"><div class="col-xs-6"> </div>'
				+'</div><br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Generar Boleta" required ></div></div></div></div></form></section></main>'
				+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'			     
			    +'</div></div></div>' //Cierro modal
			    //Modal Numeros
			    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="numeros" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
				+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Editar informacion del ingreso</h4>'
				+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="numerosIngreso" action="../../../sugpa/app/index.php" method="POST" onsubmit="submit.disabled=true; '+submitValue+' return true;">'
				+'<div class="container"><div class="form-group"><br><div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="EditarNumeros"/><input type="hidden" name="idingreso" value="'+d10.idingreso+'"><input type="hidden" name="redireccAdm" value="1">'
				+'<div class="form-group"><label for="inventario">N° Inventario:</label><input type="text" class="form-control" autocomplete="off" id="ninventario" name="ninventario" placeholder="'+d10.ninventario+'" ></div>'
				+'<div class="form-group"><label for="nsap">N° Sap:</label><input type="text" class="form-control" autocomplete="off" id="nsap" name="nsap" placeholder="'+d10.nsap+'" ></div>'
				+'<div class="form-group"><label for="nsuaci">N° Suaci:</label><input type="text" class="form-control" autocomplete="off" id="nsuaci" name="nsuaci" placeholder="'+d10.nsuaci+'" ></div>'
				+'<div class="form-group"><label for="ndisposicion">N° Disposicion:</label><input type="text" class="form-control" autocomplete="off" id="ndisposicion" name="ndisposicion" placeholder="'+d10.ndisposicion+'" ></div>'
				+'<div class="form-group"><label for="nprocom">N° Procom:</label><input type="text" class="form-control" autocomplete="off" id="nprocom" name="nprocom" placeholder="'+d10.nprocom+'" ></div>'
				+'<br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Cambiar" ></div></div></div></div></div></div></form></section></main>'
				+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
				+'</div></div></div>' //cierro modal numeros
				+'</div></div></div>'//Fin Linea Base
				+'<script src="../../../sugpa/bastrap3/js/jquery-1.12.4.js"></script> <script src="../../../sugpa/bastrap3/js/jquery-ui.js"></script> <script src="../../../sugpa/bastrap3/js/camposNumericosAdmin.js"></script>';
	}
	
//tabla dinamica vehiculos más de 90 días
//id=fueraDePlazo
		$(document).ready(function(){
			
				 var table8 = $('#fueraDePlazo').DataTable({
				        "processing": true,
				        //"scrollY": 300,
				        "scrollX": true,
				        //"autoWidth": true,
				        //responsive": true,
					    "sAjaxSource":"../app/negocio/lstFueraPlazo.php",
				        "columns": [{
						                "class":          "details-control",
						                "orderable":      false,
						                "data":           null,			           
						                "defaultContent": ""
						            },
				                    { "data": "idingreso" },
				                    { "data": "ninventario", "defaultContent": "S/D" },
				                    { "data": "diasplaya", "defaultContent": "S/D" },
				                    { "data": "tipovehiculo.tipovehiculo" },
				                    { "data": "dominio" },
				                    { "data": "marca" },
				                    { "data": "modelo" },
				                    { "data": "color" },
				                    { "data": "estado.estado" },
				                    { "data": "ndisposicion", "defaultContent": "S/D" },
				                    { "data": "nsuaci", "defaultContent": "S/D" },
				                    { "data": "nsap", "defaultContent": "S/D" },
				                    { "data": "nprocom", "defaultContent": "S/D" }
				                    ],
				      "order": [[1, 'dsc']]
					  }
						 );
				
				 table8.columns.adjust().draw();
				    // Array to track the ids of the details displayed rows
				    var detailRows8 = [];
				 
				    $('#fueraDePlazo tbody').on( 'click', 'tr td.details-control', function () {
				        var tr8 = $(this).closest('tr');
				        var row8 = table8.row( tr8 );
				        var idx8 = $.inArray( tr8.attr('id'), detailRows8 );
				 
				        if ( row8.child.isShown() ) {
				            tr8.removeClass( 'details' );
				            row8.child.hide();
				 
				            // Remove from the 'open' array
				            detailRows8.splice( idx8, 1 );
				        }
				        else {
				            tr8.addClass( 'details' );
				            row8.child( detalleFueraPlazo( row8.data() ) ).show();
				 
				            // Add to the 'open' array
				            if ( idx === -1 ) {
				                detailRows8.push( tr8.attr('id') );
				            }
				        }
				    } );
				    
				    // On each draw, loop over the `detailRows` array and show any child rows
				    table8.on( 'draw', function () {
				        $.each( detailRows8, function ( i, id ) {
				            $('#'+id+' td.details-control').trigger( 'click' );
				        } );
				    } );
				    
				  //  $('#panel-body').css( 'display', 'block' );
				   // table.columns.adjust().draw();
				   
			} );
		
	//Detalle Fuera de Plazo
		function detalleFueraPlazo ( d8 ) {	 	
			var url='Sin documentos';

			if (d8.lstdocumento[0]!=null){
				var lista=d8.lstdocumento;
				var b = new Base64();
				var resultado='';
				for (var i=0; i< lista.length; i++){ 
					var elemento='<div class="row"><li><div class="col-xs-10 col-sm-6 col-md-8"><div class="col-xs-8"><label>'+lista[i].tipodocumento.tipodocumento+'</label></div><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=documentos&id='+b.encode(lista[i].url)+'" target="_blank">  <span class="glyphicon glyphicon-export"></span></a></div>';
					var eliminar='<div class="col-xs-6 col-md-3"><div class="form-group has-error has-feedback"><label>Eliminar </label><a class="form-control-feedback" href="../../../sugpa/app/index.php?sugpa=deleteDoc&id=5&id_e='+b.encode(lista[i].url)+'&idingreso_e='+d8.idingreso+'&tipo_e='+lista[i].tipodocumento.tipodocumento+'" ><span class="glyphicon glyphicon-remove"></span></a></div></div></li></div><br>';
					resultado=resultado.concat(elemento+eliminar); }
			}else{resultado=url;}
			
			if (d8.colectivo.empresa != null){
				empresa = '<strong>Linea: </strong>' + d8.colectivo.linea + ' <strong> Empresa: </strong>' + d8.colectivo.empresa + '<br>'; }
			else { empresa = ""; }
			
			var submitValue = "submit.value='Enviando..';";
			return  empresa +' <strong> Observaciones: </strong> '+d8.observaciones+'<br><br>'
				    +'<div class="container-fluid"><div class="row-fluid"><div class="col-md-10">' //principio linea base
					+'<div class="row">' //row
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#documentos" >Documentos <span class="glyphicon glyphicon-export"></span></a></div>'
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#adjuntarDoc" > Adjuntar Documento</a></div>'//columna 4
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=MovController&idIngreso='+d8.idingreso+'&marca='+d8.marca+'&modelo='+d8.modelo+'&dominio='+d8.dominio+'" target="_blank">Movimientos</a></div>' //Movimientos
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#numeros" >Informaci&oacuten</a></div>'
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#boletacompac" > Generar Boleta Compactaci&oacuten</a></div>'			
					+'</div>'
					//Documentos
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="documentos" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Documentos Adjuntos</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php">'
					+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d8.idingreso+' , Marca: '+d8.marca+', Modelo: '+d8.modelo+', Dominio: '+d8.dominio+' </label>'
					+'<div class="row"><div class="col-xs-6"><br><ul>'+resultado+'</ul></div>'
					+'</div><br><div class="row"><div class="col-xs-6"></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row
					//Adjuntar Documentos
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="adjuntarDoc" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Documento</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmSubirDoc" action="../../../sugpa/app/index.php" method="post" enctype="multipart/form-data" onsubmit="submit.disabled=true; '+submitValue+' return true;"">'
					+'<input type="hidden" name="idingreso" value="'+d8.idingreso+'"><input type="hidden" name="sugpa" value="upDoc"><input type="hidden" name="iddoc" value="5"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d8.idingreso+' , Marca: '+d8.marca+', Modelo: '+d8.modelo+', Dominio: '+d8.dominio+' </label>'
					+'</div><br>'
					+'<div class="row"><div class="col-xs-6">'							
					+'<div id="divTipo" class="form-group">'
					+'<label for="tipo">Tipo de documento:</label>'
					+'<p class="boton-margen-inferior">'
					  +'<select class="form-control input-lg" id="tipo" name="tipoDoc" required>'
						+'<option value="" selected="" disabled>Seleccionar</option>'
						+'<optgroup label = "Documentos Ingreso">'	
						+'<option value="22">Boleta de Compactaci&oacuten</option>'
						+'<option value="3">Cedula de Notificaci&oacuten</option>'
						+'<option value="1">Dispocisiones y Anexos</option>'
						+'<option value="7">Edicto</option>'
						+'<option value="6">Exp Electr&oacutenico</option>'
						+'<option value="2">Informe de Dominio</option>'  
						+'<option value="8">Inventario</option>'
						+'<option value="5">Nota Compactaci&oacuten</option>'
						+'<option value="20">Pedido de Secuetro Positivo</option>'
						+'<option value="21">Pedido de Secuetro Negativo</option>'	
						+'<option value="4">Remitos de Notificaci&oacuten</option>'	
						+'</optgroup>'
			          +'</select></p>'
					+'</div><br>'
					+'<div class="row"><div class="col-xs-6">'	
		            +'<div class="form-group"><label for="docpdf">Adjuntar Documento: </label><input id="docpdf" type="file" required name="docpdf">'
					+'<p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p></div><br>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row
					//Modal Generar Boleta Compactacion
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="boletacompac" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Generar Boleta de Compactacion</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" target="_blank" action="../../../sugpa/app/index.php" method="POST">'
					+'<input type="hidden" name="sugpa" value="AdmGenerarBoletaDeCompactacion"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d8.idingreso+' , Marca: '+d8.marca+', Modelo: '+d8.modelo+', Dominio: '+d8.dominio+', Color: '+d8.color+' </label>'
					+'<input type="hidden" name="reg" value="'+d8.idingreso+'"/>'
					+'<input type="hidden" name="dom" value="'+d8.dominio+'"/>'											
					+'<input type="hidden" name="marca" value="'+d8.marca+'"/>'
					+'<input type="hidden" name="modelo" value="'+d8.modelo+'"/>'
					+'<input type="hidden" name="color" value="'+d8.color+'"/>'
					+'<br><div class="form-group"><label for="nprocomp">Ingrese N° ProCom:	<input class="form-control" name="procom" id="boleta" autocomplete="off" type="text" required></label><br>'
					+'<div class="row"><div class="col-xs-6"> </div>'
					+'</div><br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Generar Boleta" ></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'			     
				    +'</div></div></div>' //Cierro modal			
				    //Modal Numeros
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="numeros" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Editar informacion del ingreso</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="numerosIngreso" action="../../../sugpa/app/index.php" method="POST" onsubmit="submit.disabled=true; '+submitValue+' return true;">'
					+'<div class="container"><div class="form-group"><br><div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="EditarNumeros"/><input type="hidden" name="idingreso" value="'+d8.idingreso+'"><input type="hidden" name="redireccAdm" value="2">'
					+'<div class="form-group"><label for="inventario">N° Inventario:</label><input type="text" class="form-control" autocomplete="off" id="ninventario" name="ninventario" placeholder="'+d8.ninventario+'" ></div>'
					+'<div class="form-group"><label for="nsap">N° Sap:</label><input type="text" class="form-control" autocomplete="off" id="nsap" name="nsap" placeholder="'+d8.nsap+'" ></div>'
					+'<div class="form-group"><label for="nsuaci">N° Suaci:</label><input type="text" class="form-control" autocomplete="off" id="nsuaci" name="nsuaci" placeholder="'+d8.nsuaci+'" ></div>'
					+'<div class="form-group"><label for="ndisposicion">N° Disposicion:</label><input type="text" class="form-control" autocomplete="off" id="ndisposicion" name="ndisposicion" placeholder="'+d8.ndisposicion+'" ></div>'
					+'<div class="form-group"><label for="nprocom">N° Procom:</label><input type="text" class="form-control" autocomplete="off" id="nprocom" name="nprocom" placeholder="'+d8.nprocom+'" ></div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Cambiar" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal numeros
					+'</div></div></div>'//Fin Linea Base
					+'<script src="../../../sugpa/bastrap3/js/jquery-1.12.4.js"></script> <script src="../../../sugpa/bastrap3/js/jquery-ui.js"></script> <script src="../../../sugpa/bastrap3/js/camposNumericosAdmin.js"></script>';
		}
		

//Tabla Dinamica 60 días	
//id=60dias	
	$(document).ready(function(){	

		 var table60 = $('#60dias').DataTable({
						        "processing": true,
						        //"scrollY": 300,
						        "scrollX": true,
						        //"autoWidth": true,
						        //responsive": true,
							    "sAjaxSource":"../app/negocio/lst60dias.php",
						        "columns": [{
								                "class":          "details-control",
								                "orderable":      false,
								                "data":           null,			           
								                "defaultContent": "" 
								            },						            
						                    { "data": "idingreso","defaultContent": "S/D" },
						                    { "data": "ninventario", "defaultContent": "S/D" },	
						                    { "data": "playa.playa", "defaultContent": "S/D"},
						                    { "data": "estado.estado", "defaultContent": "S/D" },
						                    { "data": "fechahora", "defaultContent": "S/D" },
						                    { "data": "diasplaya", "defaultContent": "S/D" },
						                    { "data": "tipovehiculo.tipovehiculo", "defaultContent": "S/D" },
						                    { "data": "tipodominio.tipodominio", "defaultContent": "S/D" },
						                    { "data": "dominio", "defaultContent": "S/D" },
						                    { "data": "marca", "defaultContent": "S/D" },
						                    { "data": "modelo", "defaultContent": "S/D" },
						                    { "data": "color", "defaultContent": "S/D" },
						                    { "data": "nmotor", "defaultContent": "S/D" },
						                    { "data": "nchasis", "defaultContent": "S/D" },
						                    { "data": "motivo", "defaultContent": "S/D" },
						                    { "data": "titular.tostring", "defaultContent": "S/D" },
						                    { "data": "titular.domicilio", "defaultContent": "S/D" },
						                    { "data": "actacontravencional", "defaultContent": "S/D" },	
						                    { "data": "actab", "defaultContent": "S/D" },
						                    { "data": "actaz", "defaultContent": "S/D" },
						                    { "data": "ndisposicion", "defaultContent": "S/D" },
						                    { "data": "nsuaci", "defaultContent": "S/D" },
						                    { "data": "nsap", "defaultContent": "S/D" },
						                    { "data": "nprocom", "defaultContent": "S/D" }
						                    ],
						      "order": [[1, 'dsc']]
							  }
							);
						
						 table60.columns.adjust().draw();
						    // Array to track the ids of the details displayed rows
						    var detailRows60 = [];
						 
						    $('#60dias tbody').on( 'click', 'tr td.details-control', function () {
						        var tr60 = $(this).closest('tr');
						        var row60 = table60.row( tr60 );
						        var idx60 = $.inArray( tr60.attr('idingreso'), detailRows60 );
						 
						        if ( row60.child.isShown() ) {
						            tr60.removeClass( 'details' );
						            row60.child.hide();
						 
						            // Remove from the 'open' array
						            detailRows60.splice( idx60, 1 );
						        }
						        else {
						            tr60.addClass( 'details' );
						            row60.child( detalle60dias( row60.data() ) ).show();
						            
						            // Add to the 'open' array
						            if ( idx60 === -1 ) {
						                detailRows60.push( tr60.attr('idingreso') );							               
						            }
						        }
						        
						    } );
						    
						    // On each draw, loop over the `detailRows` array and show any child rows
						    table60.on( 'draw', function () {
						        $.each( detailRows60, function ( i, id ) {
						            $('#'+id+' td.details-control').trigger( 'click' );
						        } );
						    } );
			
						    // $('#panel-body').css( 'display', 'block' );
						    // table.columns.adjust().draw();
						   
					} );

	//Detalle 60 dias
	function detalle60dias ( d60 ) {
		
		var url='Sin documentos';
		
		if (d60.lstdocumento[0]!=null){
			var lista=d60.lstdocumento;
			var b = new Base64();
			var resultado='';
			for (var i=0; i< lista.length; i++){ 
				var elemento='<div class="row"><li><div class="col-xs-10 col-sm-6 col-md-8"><div class="col-xs-8"><label>'+lista[i].tipodocumento.tipodocumento+'</label></div><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=documentos&id='+b.encode(lista[i].url)+'" target="_blank">  <span class="glyphicon glyphicon-export"></span></a></div>';
				var eliminar='<div class="col-xs-6 col-md-3"><div class="form-group has-error has-feedback"><label>Eliminar </label><a class="form-control-feedback" href="../../../sugpa/app/index.php?sugpa=deleteDoc&id=2&id_e='+b.encode(lista[i].url)+'&idingreso_e='+d60.idingreso+'&tipo_e='+lista[i].tipodocumento.tipodocumento+'" ><span class="glyphicon glyphicon-remove"></span></a></div></div></li></div><br>';
				resultado=resultado.concat(elemento+eliminar); }
		}else{resultado=url;}
		if (d60.colectivo.empresa != null){
			empresa = '<strong>Linea: </strong>' + d60.colectivo.linea + ' <strong> Empresa: </strong>' + d60.colectivo.empresa + '<br>'; }
		else { empresa = ""; }
		
		if (d60.ninventario == null) { d60.ninventario = "Inventario - Sin Dato"; }
		if (d60.nsap == null) { d60.nsap = "SAP - Sin Dato"; }
		if (d60.nsuaci == null) { d60.nsuaci = "SUACI - Sin Dato"; }
		if (d60.ndisposicion == null) { d60.ndisposicion = "Disposicion - Sin Dato"; }
		if (d60.nprocom == null) { d60.nprocom = "PROCOM - Sin Dato"; }
		
		/** Informe Dominio */
		var informeDominio = null;
		var submitValue = "submit.value='Enviando..';";
		if( d60.titular.idtitular != null ) { 
			//Update si ya existe
			informeDominio = '<form id="frmInfoDom" action="../../../sugpa/app/index.php" method="post" enctype="multipart/form-data" onsubmit="submit.disabled=true; '+submitValue+' return true;" >'
				+'<input type="hidden" name="sugpa" value="infoDom"/><input type="hidden" name="abmTitular" value="2"/><input type="hidden" name="idReg" value="'+d60.idingreso+'"/><input type="hidden" name="idTit" value="'+d60.titular.idtitular+'"/>'
				+'<div class="container"><div class="form-group"><label for="idingreso">Registro: '+d60.idingreso+' , Marca: '+d60.marca+', Modelo: '+d60.modelo+', Dominio: '+d60.dominio+' </label>'
				+'<br><br><div class="row"><div class="col-xs-6"><label for="tnom">Nombre/Empresa:</label><input class="form-control input-l" autocomplete="off" name="nom" id="nom" type="text" placeholder="'+d60.titular.nombre+'" ></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tapell">Apellido:</label><input class="form-control input-l" autocomplete="off" name="apell" id="apell" type="text" placeholder="'+d60.titular.apellido+'" ></div></div><br>'
				+'<div class="row"><div class="col-xs-6"><label for="tipoDni">Tipo Dni:&nbsp'+d60.titular.tipodni+'</label><select class="form-control input-l" id="tipoDni" name="tipoDni" ><option value="" selected="">Sin cambio de tipo DNI</option><option value="DNI">DNI</option>'
				+'<option value="LE">LE</option><option value="LC">LC</option><option value="EXT">EXT</option><option value="CUIT">CUIT</option></select></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tdni">Dni/Cuit:</label><input class="form-control input-l" autocomplete="off" name="dni" id="dni" type="text" placeholder="'+d60.titular.dni+'" ></div></div>'
				+'<br><div class="row"><div class="col-xs-6"><label for="tcall">Calle:</label><input class="form-control input-l" autocomplete="off" name="calle" id="calle" type="text" placeholder="'+d60.titular.calle+'" ></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="altura">Altura:</label><input class="form-control input-l" autocomplete="off" name="altura" id="altura" type="text" placeholder="'+d60.titular.altura+'" ></div></div>'
				+'<br><div class="row"><div class="col-xs-6"><label for="tpiso">Piso:</label><input class="form-control input-l" autocomplete="off" name="piso" id="piso" type="text" placeholder="'+d60.titular.piso+'" " ></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tdpto">Dpto:</label><input class="form-control input-l" autocomplete="off" name="dpto" id="dpto" type="text" placeholder="'+d60.titular.dpto+'" ></div></div>'
				+'<br><div class="row"><div class="col-xs-6"><label for="tcp">Codigo Postal:</label><input class="form-control input-l" autocomplete="off" name="cp" id="cp" type="text" placeholder="'+d60.titular.codpostal+'" ></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tlocal">Localidad:</label><input class="form-control input-l" autocomplete="off" name="local" id="local" type="text" placeholder="'+d60.titular.localidad+'" ></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tprov">Provincia:</label><input class="form-control input-l" autocomplete="off" name="prov" id="prov" type="text" placeholder="'+d60.titular.provincia+'" ></div></div><br>'
				+'<div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Cambiar" ></div></div></div></div></form>';
				+'</div></div></div>'; //fin row
		}
		else { 
			//Insertar si no existe
			informeDominio = '<form id="frmObservacion" action="../../../sugpa/app/index.php" method="post" enctype="multipart/form-data" onsubmit="submit.disabled=true; '+submitValue+' return true;" ">'
				+'<input type="hidden" name="sugpa" value="infoDom"/><input type="hidden" name="abmTitular" value="1"/><input type="hidden" name="idReg" value="'+d60.idingreso+'"/>'
				+'<div class="container"><div class="form-group"><label for="observa">Registro: '+d60.idingreso+' , Marca: '+d60.marca+', Modelo: '+d60.modelo+', Dominio: '+d60.dominio+' </label>'
				+'<br><br><div class="row"><div class="col-xs-6"><label for="tnom">*Nombre/Empresa:</label><input class="form-control input-l" autocomplete="off" name="nom" id="nom" type="text" placeholder="Nombre titular o Empresa" required></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tapell">Apellido:</label><input class="form-control input-l" autocomplete="off" name="apell" id="apell" type="text" placeholder="Complete con punto (.) si es Empresa" required></div></div><br>'
				+'<div class="row"><div class="col-xs-6"><label for="tipoDni">*Tipo Dni:</label><select class="form-control input-l" id="tipoDni" name="tipoDni" required><option value="" selected="">Seleccionar</option><option value="DNI">DNI</option>'
				+'<option value="LE">LE</option><option value="LC">LC</option><option value="EXT">EXT</option><option value="CUIT">CUIT</option></select></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tdni">*Dni/Cuit:</label><input class="form-control input-l" autocomplete="off" name="dni" id="dni" type="text" placeholder="DNI/Cuit" required></div></div>'
				+'<br><div class="row"><div class="col-xs-6"><label for="tcall">*Calle:</label><input class="form-control input-l" autocomplete="off" name="calle" id="calle" type="text" placeholder="Calle" required></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="altura">Altura:</label><input class="form-control input-l" autocomplete="off" name="altura" id="altura" type="text" placeholder="Complete con 0 si no posee" required></div></div>'
				+'<br><div class="row"><div class="col-xs-6"><label for="tpiso">Piso:</label><input class="form-control input-l" autocomplete="off" name="piso" id="piso" type="text" placeholder="Complete con 0 si no posee" required" ></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tdpto">Dpto:</label><input class="form-control input-l" autocomplete="off" name="dpto" id="dpto" type="text" placeholder="Complete con punto (.) si no posee" required></div></div>'
				+'<br><div class="row"><div class="col-xs-6"><label for="tcp">*Codigo Postal:</label><input class="form-control input-l" autocomplete="off" name="cp" id="cp" type="text" placeholder="Codigo Postal" required></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tlocal">*Localidad:</label><input class="form-control input-l" autocomplete="off" name="local" id="local" type="text" placeholder="Localidad" required></div></div>'
				+'<div class="row"><div class="col-xs-6"><label for="tprov">*Provincia:</label><input class="form-control input-l" autocomplete="off" name="prov" id="prov" type="text" placeholder="Provincia" required></div></div><br>'
				+'<div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form>';
				+'</div></div></div>'; //fin row
		}
		/** Fin Informe Dominio */
		
		return  empresa +' <strong> Observaciones: </strong> '+d60.observaciones+'<br><br>'
		    		+'<div class="container-fluid"><div class="row-fluid"><div class="col-md-8">' //principio linea base
					+'<div class="row">' //row
					+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#documentos" >Documentos <span class="glyphicon glyphicon-export"></span></a></div>'
					+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#adjuntarDoc" >Adjuntar Documento</a></div>'
					+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#observaciones" >Agregar Observaci&oacuten</a></div>'
					+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#infodom" >Informe de Dominio</a></div>'
					+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#numeros" >Informaci&oacuten</a></div>'
					+'<div class="col-md-1"><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=MovController&idIngreso='+d60.idingreso+'&marca='+d60.marca+'&modelo='+d60.modelo+'&dominio='+d60.dominio+'" target="_blank">Movimientos</a></div></div>' //Movimientos			
					//Observaciones
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="observaciones" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Observaci&oacuten</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php?sugpa=Observaciones" method="post" onsubmit="submit.disabled=true; '+submitValue+' return true;"">'
					+'<input type="hidden" name="id" value="'+d60.idingreso+'"><input name="domin" style="display:none;" value="'+d60.dominio+'" type="text"><input name="mar" style="display:none;" value="'+d60.marca+'" type="text"><input name="privilegio" style="display:none;" value="2" type="text"><input name="observact" style="display:none;" value="'+d60.observaciones+'" type="text">'
					+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d60.idingreso+' , Marca: '+d60.marca+', Modelo: '+d60.modelo+', Dominio: '+d60.dominio+' </label>'
					+'<div class="row"><div class="col-xs-6"><textarea type="text" id="observa" class="form-control input-lg" name="observa" required></textarea></div>'
					+'</div><br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row
					//Informe dominio
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="infodom" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Informe de Dominio</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section>'+informeDominio+'</section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row
					//Subir documento
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="adjuntarDoc" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Documento</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmSubirDoc" action="../../../sugpa/app/index.php" method="post" enctype="multipart/form-data" onsubmit="submit.disabled=true; '+submitValue+' return true;"">'
					+'<input type="hidden" name="idingreso" value="'+d60.idingreso+'"><input type="hidden" name="sugpa" value="upDoc"><input type="hidden" name="iddoc" value="2"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d60.idingreso+' , Marca: '+d60.marca+', Modelo: '+d60.modelo+', Dominio: '+d60.dominio+' </label>'
					+'</div><br>'
					+'<div class="row"><div class="col-xs-6">'							
					+'<div id="divTipo" class="form-group">'
					+'<label for="tipo">Tipo de documento:</label>'
					+'<p class="boton-margen-inferior">'
					  +'<select class="form-control input-lg" id="tipo" name="tipoDoc" required>'
						+'<option value="" selected="" disabled>Seleccionar</option>'
						+'<optgroup label = "Documentos Ingreso">'	
						+'<option value="22">Boleta de Compactaci&oacuten</option>'
						+'<option value="3">Cedula de Notificaci&oacuten</option>'
						+'<option value="1">Dispocisiones y Anexos</option>'
						+'<option value="7">Edicto</option>'
						+'<option value="6">Exp Electr&oacutenico</option>'
						+'<option value="2">Informe de Dominio</option>'  
						+'<option value="8">Inventario</option>'
						+'<option value="5">Nota Compactaci&oacuten</option>'
						+'<option value="20">Pedido de Secuetro Positivo</option>'
						+'<option value="21">Pedido de Secuetro Negativo</option>'	
						+'<option value="4">Remitos de Notificaci&oacuten</option>'
						+'</optgroup>'
					  +'</select></p>'
					+'</div><br>'
					+'<div class="row"><div class="col-xs-6">'	
		            +'<div class="form-group"><label for="docpdf">Adjuntar Documento: </label><input id="docpdf" type="file" required name="docpdf">'
					+'<p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p></div><br>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row
					//Documentos
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="documentos" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Documentos Adjuntos</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php">'
					+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d60.idingreso+' , Marca: '+d60.marca+', Modelo: '+d60.modelo+', Dominio: '+d60.dominio+' </label>'
					+'<div class="row"><div class="col-xs-6"><br><ul>'+resultado+'</ul></div>'
					+'</div><br><div class="row"><div class="col-xs-6"></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row
					//Modal Numeros
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="numeros" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Editar informacion del ingreso</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="numerosIngreso" action="../../../sugpa/app/index.php" method="POST" onsubmit="submit.disabled=true; '+submitValue+' return true;">'
					+'<div class="container"><div class="form-group"><br><div class="row"><div class="col-xs-6"><input type="hidden" name="sugpa" value="EditarNumeros"/><input type="hidden" name="idingreso" value="'+d60.idingreso+'"><input type="hidden" name="redireccAdm" value="3">'
					+'<div class="form-group"><label for="inventario">N° Inventario:</label><input type="text" class="form-control" autocomplete="off" id="ninventario" name="ninventario" placeholder="'+d60.ninventario+'" ></div>'
					+'<div class="form-group"><label for="nsap">N° Sap:</label><input type="text" class="form-control" autocomplete="off" id="nsap" name="nsap" placeholder="'+d60.nsap+'" ></div>'
					+'<div class="form-group"><label for="nsuaci">N° Suaci:</label><input type="text" class="form-control" autocomplete="off" id="nsuaci" name="nsuaci" placeholder="'+d60.nsuaci+'" ></div>'
					+'<div class="form-group"><label for="ndisposicion">N° Disposicion:</label><input type="text" class="form-control" autocomplete="off" id="ndisposicion" name="ndisposicion" placeholder="'+d60.ndisposicion+'" ></div>'
					+'<div class="form-group"><label for="nprocom">N° Procom:</label><input type="text" class="form-control" autocomplete="off" id="nprocom" name="nprocom" placeholder="'+d60.nprocom+'" ></div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Cambiar" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal numeros
					+'</div></div></div>'//fin linea base
					+'<script src="../../../sugpa/bastrap3/js/jquery-1.12.4.js"></script> <script src="../../../sugpa/bastrap3/js/jquery-ui.js"></script> <script src="../../../sugpa/bastrap3/js/camposNumericosAdmin.js"></script>';
		}	

	//tabla dinamica en playa con el campo enPlaya = false
	//id=egresos
	$(document).ready(function(){	

		 var table9 = $('#egresos').DataTable({
						        "processing": true,
						        //"scrollY": 300,
						        "scrollX": true,
						        //"autoWidth": true,
						        //responsive": true,
						        "sAjaxSource":"../app/negocio/lstEgresos.php",
						        "columns": [{
								                "class":          "details-control",
								                "orderable":      false,
								                "data":           null,			           
								                "defaultContent": "" 
								            },
						                    { "data": "ingreso.idingreso","defaultContent": "S/D" },
						                    { "data": "ingreso.ninventario","defaultContent": "S/D" },
						                    { "data": "ingreso.estado.estado", "defaultContent": "S/D"},
						                    { "data": "ingreso.playa.playa", "defaultContent": "S/D"},
						                    { "data": "ingreso.fechahora", "defaultContent": "S/D" },
						                    { "data": "fechahoraRe", "defaultContent": "S/D" },
						                    { "data": "ingreso.tipovehiculo.tipovehiculo", "defaultContent": "S/D" },
						                    { "data": "ingreso.dominio", "defaultContent": "S/D" },
						                    { "data": "ingreso.marca", "defaultContent": "S/D" },
						                    { "data": "ingreso.modelo", "defaultContent": "S/D" },
						                    { "data": "ingreso.color", "defaultContent": "S/D" },        
						                    { "data": "ingreso.motivo", "defaultContent": "S/D" },
						                    { "data": "personaRe", "defaultContent": "S/D" },
						                    { "data": "gruaRe", "defaultContent": "S/D" }						                    
						                    ],
						      "order": [[1, 'dsc']]
							  }
								 );
						
						 table9.columns.adjust().draw();
						    // Array to track the ids of the details displayed rows
						    var detailRows9 = [];
						 
						    $('#egresos tbody').on( 'click', 'tr td.details-control', function () {
						        var tr9 = $(this).closest('tr');
						        var row9 = table9.row( tr9 );
						        var idx9 = $.inArray( tr9.attr('id'), detailRows9 );
						 
						        if ( row9.child.isShown() ) {
						            tr9.removeClass( 'details' );
						            row9.child.hide();
						 
						            // Remove from the 'open' array
						            detailRows9.splice( idx9, 1 );
						        }
						        else {
						            tr9.addClass( 'details' );
						            row9.child( detalleEgresos( row9.data() ) ).show();
						 
						            // Add to the 'open' array
						            if ( idx9 === -1 ) {
						                detailRows9.push( tr9.attr('id') );
						            }
						        }
						    } );
						    
						    // On each draw, loop over the `detailRows` array and show any child rows
						    table9.on( 'draw', function () {
						        $.each( detailRows9, function ( i, id ) {
						            $('#'+id+' td.details-control').trigger( 'click' );
						        } );
						    } );
						    
						    // $('#panel-body').css( 'display', 'block' );
						    // table.columns.adjust().draw();
						   
					} );


	//Detalle egresos
	function detalleEgresos ( d ) {
		var url='Sin documentos';
			
		if (d.ingreso.lstdocumento[0]!=null){
			var lista=d.ingreso.lstdocumento;
			var b = new Base64();
			var resultado='';
			for (var i=0; i< lista.length; i++) { 
			var elemento='<div class="row"><li><div class="col-xs-10 col-sm-6 col-md-8"><div class="col-xs-8"><label>'+lista[i].tipodocumento.tipodocumento+'</label></div><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=documentos&id='+b.encode(lista[i].url)+'" target="_blank">  <span class="glyphicon glyphicon-export"></span></a></div>';
			var eliminar='<div class="col-xs-6 col-md-3"><div class="form-group has-error has-feedback"><label>Eliminar </label><a class="form-control-feedback" href="../../../sugpa/app/index.php?sugpa=deleteDoc&id=3&id_e='+b.encode(lista[i].url)+'&idingreso_e='+d.ingreso.idingreso+'&tipo_e='+lista[i].tipodocumento.tipodocumento+'"><span class="glyphicon glyphicon-remove"></span></a></div></div></li></div><br>';
			resultado=resultado.concat(elemento+eliminar);
			}
		}else{resultado=url;}	
				
		var submitValue = "submit.value='Enviando..';";
		return  '<strong>Observaciones: </strong>'+d.ingreso.observaciones+'<br><br>'
		    		+'<div class="container-fluid"><div class="row-fluid"><div class="col-md-8">' //principio linea base
					+'<div class="row">' //row
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#documentos" >Documentos <span class="glyphicon glyphicon-export"></span></a></div>'//columna 3
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#adjuntarDoc" > Adjuntar Documento</a></div>'//columna 3
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#observaciones" >Agregar Observaci&oacuten</a></div>'
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#editarRegistro" > Editar Registro</a></div>'
					+'<div class="col-md-2"><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=MovController&idIngreso='+d.ingreso.idingreso+'&marca='+d.ingreso.marca+'&modelo='+d.ingreso.modelo+'&dominio='+d.ingreso.dominio+'" target="_blank">Movimientos</a></div>' //Movimientos
					+'</div>'
					//Ver documento
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="documentos" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Documentos Adjuntos</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php">'
					+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d.ingreso.idingreso+' , Marca: '+d.ingreso.marca+', Modelo: '+d.ingreso.modelo+', Dominio: '+d.ingreso.dominio+' </label>'
					+'<div class="row"><div class="col-xs-6"><br><ul>'+resultado+'</ul></div>'
					+'</div><br><div class="row"><div class="col-xs-6"></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row 
					//Agregar documento
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="adjuntarDoc" role="dialog"><div class="modal-dialog"><!-- Modal content-->'//subir documento
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Documento</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmSubirDoc" action="../../../sugpa/app/index.php" method="post" enctype="multipart/form-data" onsubmit="submit.disabled=true; '+submitValue+' return true;" ">'
					+'<input type="hidden" name="idingreso" value="'+d.ingreso.idingreso+'"><input type="hidden" name="sugpa" value="upDoc"><input type="hidden" name="iddoc" value="3"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d.ingreso.idingreso+' , Marca: '+d.ingreso.marca+', Modelo: '+d.ingreso.modelo+', Dominio: '+d.ingreso.dominio+' </label>'
					+'</div><br>'
					+'<div class="row"><div class="col-xs-6">'							
					+'<div id="divTipo" class="form-group">'
					+'<label for="tipo">Tipo de documento:</label>'
					+'<p class="boton-margen-inferior">'
					  +'<select class="form-control input-lg" id="tipo" name="tipoDoc" required>'
						+'<option value="" selected="" disabled>Seleccionar</option>'
						+'<optgroup label = "Documentos Ingreso">'		
						+'<option value="22">Boleta de Compactaci&oacuten</option>'
						+'<option value="3">Cedula de Notificaci&oacuten</option>'
						+'<option value="1">Dispocisiones y Anexos</option>'
						+'<option value="7">Edicto</option>'
						+'<option value="6">Exp Electr&oacutenico</option>'
						+'<option value="2">Informe de Dominio</option>'  
						+'<option value="8">Inventario</option>'
						+'<option value="5">Nota Compactaci&oacuten</option>'
						+'<option value="20">Pedido de Secuetro Positivo</option>'
						+'<option value="21">Pedido de Secuetro Negativo</option>'	
						+'<option value="4">Remitos de Notificaci&oacuten</option>'
						+'</optgroup>'
						+'<optgroup label = "Documentos Egreso">'
						+'<option value="19">Acta de Entrega</option>'
						+'<option value="11">Acta Z</option>'
						+'<option value="12">Cedula Verde</option>'
						+'<option value="16">DGAI</option>'
						+'<option value="9">DNI Fotocopia</option>'
						+'<option value="10">Licencia</option>'
						+'<option value="18">Oficio Judicial</option>'
						+'<option value="17">Poder Firmado</option>'
						+'<option value="14">Seguro</option>'
						+'<option value="13">T&iacutetulo</option>'
						+'<option value="15">VTV</option>'
						+'</optgroup>'
					  +'</select></p>'
					+'</div><br>'
					+'<div class="row"><div class="col-xs-6">'	
			        +'<div class="form-group"><label for="docpdf">Adjuntar Documento: </label><input id="docpdf" type="file"  required name="docpdf">'
					+'<p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>'
					+'</div><br>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar"  ></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row
					//Observaciones
					+'<div class="container"><br><!-- Modal --><div class="modal fade" id="observaciones" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Observaci&oacuten</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php?sugpa=Observaciones" method="post" onsubmit="submit.disabled=true; '+submitValue+' return true;" ">'
					+'<input type="hidden" name="id" value="'+d.ingreso.idingreso+'"><input type="hidden" name="observEgreso" value="" ><input name="domin" style="display:none;" value="'+d.ingreso.dominio+'" type="text"><input name="mar" style="display:none;" value="'+d.ingreso.marca+'" type="text"><input name="privilegio" style="display:none;" value="2" type="text"><input name="observact" style="display:none;" value="'+d.ingreso.observaciones+'" type="text">'
					+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d.ingreso.idingreso+' , Marca: '+d.ingreso.marca+', Modelo: '+d.ingreso.modelo+', Dominio: '+d.ingreso.dominio+' </label>'
					+'<div class="row"><div class="col-xs-6"><textarea type="text" id="observa" class="form-control input-lg" name="observa" required></textarea></div>'
					+'</div><br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
					+'</div></div></div>' //fin row
					//editar registro modificar
				    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="editarRegistro" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
					+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Editar Registro</h4>'
					+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmModificar" action="../../../sugpa/app/index.php" method="post" ">'
					+'<input type="hidden" name="idingreso" value="'+d.ingreso.idingreso+'"><input type="hidden" name="sugpa" value="AdmEditarRegistro"><input type="hidden" name="idpreedicion" value="3">'
					+'<div class="container"><div class="form-group"><label for="modifi">Datos del vehiculo</label>'
					+'<div class="row"><div class="col-xs-6">'
					+'<div class="form-group"><label for="reg">Registro: '+d.ingreso.idingreso+' , Marca: '+d.ingreso.marca+', Modelo: '+d.ingreso.modelo+', Dominio: '+d.ingreso.dominio+' </label></div>'
					+'<br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Cambiar" ></div></div></div></div></div></div></form></section></main>'
					+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
					+'</div></div></div>' //cierro modal
					+'</div></div></div>';//fin linea base
	}
	
	//tabla dinamica en playa con el campo enPlaya = true
	//id=enPlayaAdm

	$(document).ready(function(){

	//tabla dinamica con mostrar detalle	  
		 var table = $('#enPlayaAdm').DataTable({
		        "processing": true,
		        //"scrollY": 300,
		        "scrollX": true,
		        //"autoWidth": true,
		        //responsive": true,
			    "sAjaxSource":"../app/negocio/lstEnPlayaAdmGe.php",
		        "columns": [{
				                "class":          "details-control",
				                "orderable":      false,
				                "data":           null,			           
				                "defaultContent": ""
				            },
		                    { "data": "idingreso","defaultContent": "S/D" },	
		                    { "data": "ninventario","defaultContent": "S/D" },
		                    { "data": "playa.playa", "defaultContent": "S/D"},
		                    { "data": "estado.estado", "defaultContent": "S/D"},
		                    { "data": "fechahora", "defaultContent": "S/D" },
		                    { "data": "diasplaya", "defaultContent": "S/D" },
		                    { "data": "tipovehiculo.tipovehiculo", "defaultContent": "S/D" },
		                    { "data": "tipodominio.tipodominio", "defaultContent": "S/D" },
		                    { "data": "dominio", "defaultContent": "S/D" },
		                    { "data": "marca", "defaultContent": "S/D" },
		                    { "data": "modelo", "defaultContent": "S/D" },
		                    { "data": "color", "defaultContent": "S/D" },
		                    { "data": "nmotor", "defaultContent": "S/D" },	                    	                    
		                    { "data": "nchasis", "defaultContent": "S/D" },	        
		                    { "data": "interno", "defaultContent": "S/D"},	    
		                    { "data": "motivo", "defaultContent": "S/D" },
		                    { "data": "grua.interno", "defaultContent": "S/D"},             
		                    { "data": "agente.tostring", "defaultContent": "S/D"}, 
		                    { "data": "chofer.tostring", "defaultContent": "S/D"}, 
		                    { "data": "infractorcontraventor.apenomdni", "defaultContent": "S/D"},  
		                    { "data": "actacontravencional", "defaultContent": "S/D" },	
		                    { "data": "actab", "defaultContent": "S/D" },
		                    { "data": "actaz", "defaultContent": "S/D" },
		                    { "data": "calle", "defaultContent": "S/D" }
		                    ],
		      "order": [[1, 'dsc']]
			  }
				 );
		
		 table.columns.adjust().draw();
		    // Array to track the ids of the details displayed rows
		    var detailRows = [];
		 
		    $('#enPlayaAdm tbody').on( 'click', 'tr td.details-control', function () {
		        var tr = $(this).closest('tr');
		        var row = table.row( tr );
		        var idx = $.inArray( tr.attr('id'), detailRows );
		 
		        if ( row.child.isShown() ) {
		            tr.removeClass( 'details' );
		            row.child.hide();
		 
		            // Remove from the 'open' array
		            detailRows.splice( idx, 1 );
		        }
		        else {
		            tr.addClass( 'details' );
		            row.child( format( row.data() ) ).show();
		 
		            // Add to the 'open' array
		            if ( idx === -1 ) {
		                detailRows.push( tr.attr('id') );
		            }
		        }
		    } );
		    
		    // On each draw, loop over the `detailRows` array and show any child rows
		    table.on( 'draw', function () {
		        $.each( detailRows, function ( i, id ) {
		            $('#'+id+' td.details-control').trigger( 'click' );
		        } );
		    } );
		    
		    // $('#panel-body').css( 'display', 'block' );
		    // table.columns.adjust().draw();
		   
	} );	
	
//Detalle en playa admin
	function format ( d ) {	
		
		var url='Sin documentos';
		
		if (d.lstdocumento[0]!=null){
			var lista=d.lstdocumento;
			var b = new Base64();
			var resultado='';
			for (var i=0; i< lista.length; i++){ 
				var elemento='<div class="row"><li><div class="col-xs-10 col-sm-6 col-md-8"><div class="col-xs-8"><label>'+lista[i].tipodocumento.tipodocumento+'</label></div><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=documentos&id='+b.encode(lista[i].url)+'" target="_blank">  <span class="glyphicon glyphicon-export"></span></a></div>';
				var eliminar='<div class="col-xs-6 col-md-3"><div class="form-group has-error has-feedback"><label>Eliminar </label><a class="form-control-feedback" href="../../../sugpa/app/index.php?sugpa=deleteDoc&id=1&id_e='+b.encode(lista[i].url)+'&idingreso_e='+d.idingreso+'&tipo_e='+lista[i].tipodocumento.tipodocumento+'" ><span class="glyphicon glyphicon-remove"></span></a></div></div></li></div><br>';
				resultado=resultado.concat(elemento+eliminar); }
		}else{resultado=url;}
		if (d.colectivo.empresa != null){
			empresa = '<strong>Linea: </strong>' + d.colectivo.linea + ' <strong> Empresa: </strong>' + d.colectivo.empresa + '<br>'; }
		else { empresa = ""; }
			
		var submitValue = "submit.value='Enviando..';";
		return   empresa +' <strong> Observaciones: </strong> '+d.observaciones+'<br><br>'
			+'<div class="container-fluid"><div class="row-fluid"><div class="col-md-8">' //principio linea base
			+'<div class="row">'
			+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#documentos" >Documentos <span class="glyphicon glyphicon-export"></span></a></div>'
			+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#adjuntarDoc" > Adjuntar Documento</a></div>'//columna 3
			+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#observaciones" >Agregar Observaci&oacuten</a></div>'
			+'<div class="col-md-1"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#editarRegistro" > Editar Registro</a></div>'
			+'<div class="col-md-1"><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=MovController&idIngreso='+d.idingreso+'&marca='+d.marca+'&modelo='+d.modelo+'&dominio='+d.dominio+'" target="_blank">Movimientos</a></div>' //Movimientos			
			+'<div class="clearfix visible-xs-block"></div>'
			+'</div>'
			//Documentos
			+'<div class="container"><br><!-- Modal --><div class="modal fade" id="documentos" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
			+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Documentos Adjuntos</h4>'
			+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php">'
			+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d.idingreso+' , Marca: '+d.marca+', Modelo: '+d.modelo+', Dominio: '+d.dominio+' </label>'
			+'<div class="row"><div class="col-xs-6"><br><ul>'+resultado+'</ul></div>'
			+'</div><br><div class="row"><div class="col-xs-6"></div></div></div></div></form></section></main>'
			+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
			+'</div></div></div>' //fin row
			//Subir documento
			+'<div class="container"><br><!-- Modal --><div class="modal fade" id="adjuntarDoc" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
			+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Documento</h4>'
			+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmSubirDoc" action="../../../sugpa/app/index.php" method="post" enctype="multipart/form-data" onsubmit="submit.disabled=true; '+submitValue+' return true;"">'
			+'<input type="hidden" name="idingreso" value="'+d.idingreso+'"><input type="hidden" name="sugpa" value="upDoc"><input type="hidden" name="iddoc" value="1"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d.idingreso+' , Marca: '+d.marca+', Modelo: '+d.modelo+', Dominio: '+d.dominio+' </label>'
			+'</div><br>'
			+'<div class="row"><div class="col-xs-6">'							
			+'<div id="divTipo" class="form-group">'
			+'<label for="tipo">Tipo de documento:</label>'
			+'<p class="boton-margen-inferior">'
			  +'<select class="form-control input-lg" id="tipo" name="tipoDoc" required>'
				+'<option value="" selected="" disabled>Seleccionar</option>'
				+'<optgroup label = "Documentos Ingreso">'	 
				+'<option value="8">Inventario</option>'
				+'</optgroup>'
		      +'</select></p>'
			+'</div><br>'
			+'<div class="row"><div class="col-xs-6">'	
	        +'<div class="form-group"><label for="docpdf">Adjuntar Documento: </label><input id="docpdf" type="file"  required name="docpdf">'
			+'<p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>'
			+'</div><br>'
			+'<br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
			+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
			+'</div></div></div>' //fin row
			//editar registro modificar
		    +'<div class="container"><br><!-- Modal --><div class="modal fade" id="editarRegistro" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
			+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Editar Registro</h4>'
			+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmModificar" action="../../../sugpa/app/index.php" method="post" ">'
			+'<input type="hidden" name="idingreso" value="'+d.idingreso+'"><input type="hidden" name="sugpa" value="AdmEditarRegistro"><input type="hidden" name="idpreedicion" value="1"><div class="container"><div class="form-group"><label for="modifi">Datos del vehiculo</label>'
			+'<div class="row"><div class="col-xs-6">'
			+'<div class="form-group"><label for="reg">Registro: '+d.idingreso+' , Marca: '+d.marca+', Modelo: '+d.modelo+', Dominio: '+d.dominio+' </label></div>'
			+'<br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Cambiar" ></div></div></div></div></div></div></form></section></main>'
			+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'					
			+'</div></div></div>' //cierro modal
			//Observaciones
			+'<div class="container"><br><!-- Modal --><div class="modal fade" id="observaciones" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
			+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Observaci&oacuten</h4>'
			+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php?sugpa=Observaciones" method="post" onsubmit="submit.disabled=true; '+submitValue+' return true;"">'
			+'<input type="hidden" name="id" value="'+d.idingreso+'"><input type="hidden" name="observBVAdmin" value="" ><input name="domin" style="display:none;" value="'+d.dominio+'" type="text"><input name="mar" style="display:none;" value="'+d.marca+'" type="text"><input name="privilegio" style="display:none;" value="2" type="text"><input name="observact" style="display:none;" value="'+d.observaciones+'" type="text">'
			+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d.idingreso+' , Marca: '+d.marca+', Modelo: '+d.modelo+', Dominio: '+d.dominio+' </label>'
			+'<div class="row"><div class="col-xs-6"><textarea type="text" id="observa" class="form-control input-lg" name="observa" required></textarea></div>'
			+'</div><br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
			+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
			+'</div></div></div>' //fin row
			+'</div></div></div>';//fin linea base
		
		
	}
	
	$(document).ready(function(){
		
		  
		 var table7 = $('#traslados').DataTable({
		        "processing": true,
		        //"scrollY": 300,
		        "scrollX": true,
		        //"autoWidth": true,
		        //responsive": true,
			    "sAjaxSource":"../../../sugpa/app/negocio/lstTraslados.php",
		        "columns": [
		                    { "data": "ingreso.idingreso" },
		                    { "data": "ingreso.ninventario" },
		                    { "data": "ingreso.playa.playa" },
		                    { "data": "ingreso.fechahora" },
		                    { "data": "fechahoraRe" },
		                    { "data": "ingreso.dominio" },
		                    { "data": "ingreso.marca" },
		                    { "data": "ingreso.modelo" },
		                    { "data": "ingreso.color" },
		                    { "data": "ingreso.motivo" },     
		                    { "data": "grua.interno" },
		                    { "data": "grua.dominio" }
		                    ],
		      "order": [[1, 'dsc']]
			  }
				 );
	} );


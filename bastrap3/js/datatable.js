//***********************************************************************
//**************************AGENTE DE PLAYA******************************
//***********************************************************************


//tabla dinamica en playa con el campo enPlaya = true
//id=enplaya

$(document).ready(function(){	

	 var table = $('#enplaya').DataTable({
	        "processing": true,
	       // "scrollY": 300,
	        "scrollX": true,
	       // "autoWidth": true,
	        //responsive": true,
		    "sAjaxSource":"../../../sugpa/app/view/lstEnPlaya.php",
	        "columns": [{
			                "class":          "details-control",
			                "orderable":      false,
			                "data":           null,			           
			                "defaultContent": ""
			            },
	                    { "data": "idingreso" },
	                    { "data": "fechahora" },
	                    { "data": "tipovehiculo.tipovehiculo" },
	                    { "data": "tipodominio.tipodominio" },
	                    { "data": "dominio" },
	                    { "data": "marca", },
	                    { "data": "modelo" },
	                    { "data": "color" },
	                    { "data": "nmotor" },	                    	                    
	                    { "data": "nchasis" },	        
	                    { "data": "interno"+' '+"data": "colectivo.linea"},	    
	                    { "data": "motivo" },	                                   
	                    { "data": "playa.playa" },
	                    { "data": "grua.interno"+' '+"data": "grua.dependencia" },              
	                    { "data": "agente.apellido"+' '+"data":"agente.nombre" }, //gruero
	                    { "data": "chofer.apellido"+' '+"data":"chofer.nombre" }, //agente de transito
	                    { "data": "infractorcontraventor.apellidonombre"+' '+"data": "infractorcontraventor.tipodni"+' '+"data": "infractorcontraventor.dni" },
	                    { "data": "actacontravencional" },	
	                    { "data": "actab" },
	                    { "data": "actaz" },
	                    { "data": "calle"+' '+"data":"altura"+' '+"data":"entrecalleuno"+' '+"data":"entrecalledos"+' '+"data":"lugar"}
	                    ],
	      "order": [[1, 'dsc']]
		  }
			 );
	
	 table.columns.adjust().draw();
	    // Array to track the ids of the details displayed rows
	    var detailRows = [];
	 
	    $('#enplaya tbody').on( 'click', 'tr td.details-control', function () {
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
	    
	  //  $('#panel-body').css( 'display', 'block' );
	   // table.columns.adjust().draw();
	   
} );


//Detalle
function format ( d ) {		
		
    return  'Observaciones :'+d.colectivo.empresa+' '+d.observaciones+'<br><br>'
    		+'<div class="container-fluid"><div class="row-fluid"><div class="col-md-12">' //principio linea base
			+'<div class="row">' //row
			+'<div class="col-md-1">' //columna 1
		    +'<form action="../../sugpa/app/view/AgEgresarVehiculo.php">'
			+'<input class="btn btn-primary btn-l" type="submit" name="egresar" value="Egresar" />'
			+'<input name="demo" style="display:none;" value="'+d.dominio+'" type="text">'
			+'</form></div><div class="clearfix visible-xs-block"></div>'
			+'<div class="col-md-1"><a class="btn btn-primary btn-l" href="../../sugpa/bastrap3/img/Inventario.pdf" target="_blank">Inventario</a></div>'//columna 2			
			+'<div class="col-xs-6 col-sm-4"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#observaciones" > Agregar Observaciones</a></div>'//columna 3
			+'</div>'
			+'<div class="container"><br><!-- Modal --><div class="modal fade" id="observaciones" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
			+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Observaciones</h4>'
			+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php">'
			+'<input type="hidden" name="observa" value="Observa"/><div class="container"><div class="form-group"><label for="observa">Registro: '+d.registro+' , Marca: '+d.marca+', Modelo: '+d.modelo+', Dominio: '+d.dominio+' </label>'
			+'<div class="row"><div class="col-xs-6"><textarea type="text" id="observa" class="form-control input-lg" name="observa" required></textarea></div>'
			+'</div><br><div class="row"><div class="col-xs-6"><input type="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
			+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
			+'</div></div></div>' //fin row
			+'</div></div></div>';//fin linea base
}


//***********************************************************************
//*******************************ADMIN DE SUGPA**************************
//***********************************************************************


//tabla dinamica ingresos y egresos admin	
//id=playasadmin

$(document).ready(function(){
	
  
		 var table = $('#playasadmin').DataTable({
		        "processing": true,
		       // "scrollY": 300,
		        "scrollX": true,
		       // "autoWidth": true,
		        //responsive": true,
			    "sAjaxSource":"../../../sugpa/app/view/lstPlayasAdmin.php",
		        "columns": [{
				                "class":          "details-control",
				                "orderable":      false,
				                "data":           null,			           
				                "defaultContent": ""
				            },
		                    { "data": "idingreso" },
		                    { "data": "ninventario" },
		                    { "data": "fechahora" },
		                    { "data": "tipovehiculo.tipovehiculo" },
		                    { "data": "tipodominio.tipodominio" },
		                    { "data": "dominio" },
		                    { "data": "marca" },
		                    { "data": "modelo" },
		                    { "data": "color" },
		                    { "data": "motivo" },	                    
		                    { "data": "idcolectivo"+" "+"data": "interno" },	                   
		                    { "data": "playa.playa" },
		                    { "data": "grua.interno" },              
		                    { "data": "idingreso.dnipersonal.apellido"+' '+"data":"idingreso.dnipersonal.nombre" }, //gruero
		                    { "data": "idingreso.dnipersonal.apellido"+' '+"data":"idingreso.dnipersonal.nombre" }, //agente de transito
		                    { "data": "infractorcontraventor.apellidonombre"+' '+"data": "infractorcontraventor.dni" },
		                    { "data": "actaContravencional" },	
		                    { "data": "actab" },
		                    { "data": "actaz" },
		                    { "data": "nprocom" },
		                    { "data": "ndisposicion" },
		                    { "data": "nsuaci" },
		                    { "data": "nsap" },
		                    { "data": "idestado.estado" },
		                    { "data": "calle"+' '+"data":"altura"+' '+"data":"entrecalleuno"+' '+"data":"entrecalledos"+' '+"data":"lugar"}
		                    ],//faltan datos del egreso
		      "order": [[1, 'dsc']]
			  }
				 );
		
		 table.columns.adjust().draw();
		    // Array to track the ids of the details displayed rows
		    var detailRows = [];
		 
		    $('#playasadmin tbody').on( 'click', 'tr td.details-control', function () {
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
		            row.child( format2( row.data() ) ).show();
		 
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
		    
		  //  $('#panel-body').css( 'display', 'block' );
		   // table.columns.adjust().draw();
		   
	} );
//Detalle
	function format2 ( d ) {		
			
	    return  'Observaciones: '+d.observaciones+' '+d.idcolectivo.empresa'<br>'
	    		+'<br>'
				+'<p>'
			    +'<form action="../../sugpa/app/view/AdmEditarRegistro.php">'
				+'<input class="btn btn-primary btn-lg" type="submit" name="egresar" value="Egresar Vehiculo" />'
				+'<input name="demo" style="display:none;" value="'+d.idingreso+'" type="text">'
				+'</form></p>'
				+'<p>'
				+'<a class="btn btn-primary btn-l" href="../../sugpa/doc/"'+d.doc.url+'" target="_blank">Inventario</a>'//más urls
				+'</p>'
			    +'<p><form action=observaciones>'
				+'<input name="demo" style="display:none;" value="'+d.idingreso+'" type="text">'
				+'<div class="form-group"><label for="Observaciones">Observaciones</label><textarea class="form-control input-l" id="Observaciones" placeholder="Observaciones" rows="3"></textarea></div>'
				+'<input class="btn btn-primary btn-lg" type="submit" name="editar" value="Agregar Observaciones" />'
				+'</form></p>';
	}
	

//tabla dinamica vehículos más de 60 días	
//id=playasmas60admin

	$(document).ready(function(){
		
	  
			 var table = $('#playasmas60admin').DataTable({
			        "processing": true,
			       // "scrollY": 300,
			        "scrollX": true,
			       // "autoWidth": true,
			        //responsive": true,
				    "sAjaxSource":"../../../sugpa/app/view/lstEnMas60Admin.php",
			        "columns": [{
					                "class":          "details-control",
					                "orderable":      false,
					                "data":           null,			           
					                "defaultContent": ""
					            },
			                    { "data": "idingreso" },
			                    { "data": "ninventario" },
			                    { "data": "fechahora" },
			                    { "data": "tipovehiculo.tipovehiculo" },
			                    { "data": "tipodominio.tipodominio" },
			                    { "data": "dominio" },
			                    { "data": "marca" },
			                    { "data": "modelo" },
			                    { "data": "color" },
			                    { "data": "motivo" },	                    
			                    { "data": "idcolectivo"+" "+"data": "interno" },	                   
			                    { "data": "playa.playa" },
			                    { "data": "actaContravencional" },	
			                    { "data": "actab" },
			                    { "data": "actaz" },
			                    { "data": "nprocom" },
			                    { "data": "ndisposicion" },
			                    { "data": "nsuaci" },
			                    { "data": "nsap" },
			                    { "data": "idestado.estado" },
			                    { "data": "calle"+' '+"data":"altura"+' '+"data":"entrecalleuno"+' '+"data":"entrecalledos"+' '+"data":"lugar"}
			                    ],//faltan datos del egreso
			      "order": [[1, 'dsc']]
				  }
					 );
			
			 table.columns.adjust().draw();
			    // Array to track the ids of the details displayed rows
			    var detailRows = [];
			 
			    $('#playasmas60admin tbody').on( 'click', 'tr td.details-control', function () {
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
			            row.child( format3( row.data() ) ).show();
			 
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
			    
			  //  $('#panel-body').css( 'display', 'block' );
			   // table.columns.adjust().draw();
			   
		} );
	//Detalle
		function format3 ( d ) {		
			//Agrego datos del titular	
		    return  'Observaciones: '+d.observaciones+' '+d.idcolectivo.empresa'<br>'
		    		+'<br>'
					+'<p>'
				    +'<form action="../../sugpa/app/view/AdmEditarRegistro.php">'
					+'<input class="btn btn-primary btn-lg" type="submit" name="egresar" value="Egresar Vehiculo" />'
					+'<input name="demo" style="display:none;" value="'+d.idingreso+'" type="text">'
					+'</form></p>'
					+'<p>'
					+'<a class="btn btn-primary btn-l" href="../../sugpa/doc/"'+d.doc.url+'" target="_blank">Inventario</a>' //más urls
					+'</p>'
				    +'<p><form action=observaciones>'
					+'<input name="demo" style="display:none;" value="'+d.idingreso+'" type="text">'
					+'<div class="form-group"><label for="Observaciones">Observaciones</label><textarea class="form-control input-l" id="Observaciones" placeholder="Observaciones" rows="3"></textarea></div>'
					+'<input class="btn btn-primary btn-lg" type="submit" name="editar" value="Agregar Observaciones" />'
					+'</form></p>';
		}	

//tabla dinamica para administrar usuarios
//id=usuariosadmin

			$(document).ready(function(){
				
			  
					 var table = $('#usuariosadmin').DataTable({
					        "processing": true,
					       // "scrollY": 300,
					        "scrollX": true,
					       // "autoWidth": true,
					        //responsive": true,
						    "sAjaxSource":"../../../sugpa/app/view/lstUsuarios.php",
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
					                    { "data": "idusuario.useer" }
					                    ],
					      "order": [[1, 'dsc']]
						  }
							 );
					
					 table.columns.adjust().draw();
					    // Array to track the ids of the details displayed rows
					    var detailRows = [];
					 
					    $('#usuariosadmin tbody').on( 'click', 'tr td.details-control', function () {
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
					            row.child( format4( row.data() ) ).show();
					 
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
					    
					  //  $('#panel-body').css( 'display', 'block' );
					   // table.columns.adjust().draw();
					   
				} );
			//Detalle
				function format4 ( d ) {		
					//Agrego abm usuarios botones
				    return  'Observaciones: '+d.observaciones+' '+d.idcolectivo.empresa'<br>'
				    		+'<br>'
							+'<p>'
						    +'<form action="../../sugpa/app/view/AdmEditarRegistro.php">'
							+'<input class="btn btn-primary btn-lg" type="submit" name="egresar" value="Egresar Vehiculo" />'
							+'<input name="demo" style="display:none;" value="'+d.idingreso+'" type="text">'
							+'</form></p>'
							+'<p>'
							+'<a class="btn btn-primary btn-l" href="../../sugpa/doc/"'+d.doc.url+'" target="_blank">Inventario</a>' //más urls
							+'</p>'
						    +'<p><form action=observaciones>'
							+'<input name="demo" style="display:none;" value="'+d.idingreso+'" type="text">'
							+'<div class="form-group"><label for="Observaciones">Observaciones</label><textarea class="form-control input-l" id="Observaciones" placeholder="Observaciones" rows="3"></textarea></div>'
							+'<input class="btn btn-primary btn-lg" type="submit" name="editar" value="Agregar Observaciones" />'
							+'</form></p>';
				}			
		
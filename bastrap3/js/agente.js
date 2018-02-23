//***********************************************************************
//**************************AGENTE DE PLAYA******************************
//***********************************************************************

//tabla dinamica en playa con el campo enPlaya = true
//id=enplaya
$(document).attr('href')

$(document).ready(function(){	

	 var table1 = $('#enplaya').DataTable({
					        "processing": true,
					        //"scrollY": 300,
					        "scrollX": true,
					        //"autoWidth": true,
					        //responsive": true,
						    "sAjaxSource":"../app/negocio/lstEnPlayaAg.php",
					        "columns": [{
							                "class":          "details-control",
							                "orderable":      false,
							                "data":           null,			           
							                "defaultContent": "" 
							            },
					                    { "data": "idingreso","defaultContent": "S/D" },	
					                    { "data": "ninventario","defaultContent": "S/D" },
					                    { "data": "playa.playa", "defaultContent": "S/D"},
					                    { "data": "fechahora", "defaultContent": "S/D" },
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
					
					 table1.columns.adjust().draw();
					    // Array to track the ids of the details displayed rows
					    var detailRows1 = [];
					 
					    $('#enplaya tbody').on( 'click', 'tr td.details-control', function () {
					        var tr1 = $(this).closest('tr');
					        var row1 = table1.row( tr1 );
					        var idx1 = $.inArray( tr1.attr('id'), detailRows1 );
					 
					        if ( row1.child.isShown() ) {
					            tr1.removeClass( 'details' );
					            row1.child.hide();
					 
					            // Remove from the 'open' array
					            detailRows1.splice( idx1, 1 );
					        }
					        else {
					            tr1.addClass( 'details' );
					            row1.child( detalleEnplaya( row1.data() ) ).show();
					 
					            // Add to the 'open' array
					            if ( idx1 === -1 ) {
					                detailRows1.push( tr1.attr('id') );
					            }
					        }
					    } );
					    
					    // On each draw, loop over the `detailRows` array and show any child rows
					    table1.on( 'draw', function () {
					        $.each( detailRows1, function ( i, id ) {
					            $('#'+id+' td.details-control').trigger( 'click' );
					        } );
					    } );
					    
					    // $('#panel-body').css( 'display', 'block' );
					    // table.columns.adjust().draw();
					   
				} );


//Detalle en playa
function detalleEnplaya ( d ) {
	var url='404.php';
	var b = new Base64();
	var empresa = null;
	if (d.lstdocumento[0]!=null){
		url=d.lstdocumento[0].url;
		url= b.encode(url);	//codifico en base 64
	}
	if (d.colectivo.empresa != null){
		empresa = '<strong>Linea: </strong>' + d.colectivo.linea + ' <strong> Empresa: </strong>' + d.colectivo.empresa + '<br>'; }
	else { empresa = ""; }
		
	var submitValue = "submit.value='Enviando..';";
	return  empresa+' <strong> Observaciones: </strong> '+d.observaciones+'<br><br>'
				    		+'<div class="container-fluid"><div class="row-fluid"><div class="col-md-12">' //principio linea base
							+'<div class="row">' //row
							+'<div class="col-md-1">' //columna 1
						    +'<form action="../../../sugpa/app/index.php?sugpa=EgresarVehiculo" method="post">'
							+'<input class="btn btn-primary btn-l" type="submit" name="egresar" value="Egresar" />'
							+'<input type="hidden" name="id" value="'+d.idingreso+'" ">'
							+'<input name="domin" style="display:none;" value="'+d.dominio+'" type="text">'
							+'<input name="mar" style="display:none;" value="'+d.marca+'" type="text">'
							+'<input name="mod" style="display:none;" value="'+d.modelo+'" type="text">'
							+'<input name="color" style="display:none;" value="'+d.color+'" type="text">'
							+'<input name="mot" style="display:none;" value="'+d.motivo+'" type="text">'
							+'</form></div><div class="clearfix visible-xs-block"></div>'
							+'<div class="col-md-1"><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=documentos&id='+url+'" target="_blank">Inventario</a></div>'//columna 2			
							+'<div class="col-xs-6 col-sm-4"><a class="btn btn-primary btn-l" data-toggle="modal" data-target="#observaciones" > Agregar Observacion</a></div>'//columna 3
							+'</div>'
							//Observaciones
							+'<div class="container"><br><!-- Modal --><div class="modal fade" id="observaciones" role="dialog"><div class="modal-dialog"><!-- Modal content-->'
							+'<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Agregar Observaciones</h4>'
							+'</div><div class="modal-body"><main class="main-container no-padding-top" role="main"><section><form id="frmObservacion" action="../../../sugpa/app/index.php?sugpa=Observaciones" method="post" onsubmit="submit.disabled=true; '+submitValue+' return true;"">'
							+'<input type="hidden" name="id" value="'+d.idingreso+'"><input name="domin" style="display:none;" value="'+d.dominio+'" type="text"><input name="mar" style="display:none;" value="'+d.marca+'" type="text"><input name="privilegio" style="display:none;" value="1" type="text"><input name="observact" style="display:none;" value="'+d.observaciones+'" type="text">'
							+'<div class="container"><div class="form-group"><label for="obs">Registro: '+d.idingreso+' , Marca: '+d.marca+', Modelo: '+d.modelo+', Dominio: '+d.dominio+' </label>'
							+'<div class="row"><div class="col-xs-6"><textarea type="text" id="observac" class="form-control input-lg" name="observa" required></textarea></div>'
							+'</div><br><div class="row"><div class="col-xs-6"><input type="submit" name="submit" class="btn btn-primary btn-lg" value="Agregar" ></div></div></div></div></form></section></main>'
							+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div></div>'  
							+'</div></div></div>' //fin row
							+'</div></div></div>';//fin linea base
	}

//***********************************************************************



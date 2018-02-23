//***********************************************************************
//*******************************GERENTE*********************************
//***********************************************************************

//Tabla Gerente Buscar	
//id=GeBuscar
$(document).ready(function(){	

		 var tableGe = $('#GeBuscar').DataTable({
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
						                    { "data": "playa.playa", "defaultContent": "S/D"},
						                    { "data": "fechahora", "defaultContent": "S/D" },
						                    { "data": "diasplaya", "defaultContent": "S/D" },
						                    { "data": "tipovehiculo.tipovehiculo", "defaultContent": "S/D" },
						                    { "data": "dominio", "defaultContent": "S/D" },
						                    { "data": "marca", "defaultContent": "S/D" },
						                    { "data": "modelo", "defaultContent": "S/D" },
						                    { "data": "color", "defaultContent": "S/D" },          
						                    { "data": "motivo", "defaultContent": "S/D" },
						                    { "data": "calle", "defaultContent": "S/D" }
						                    ],
						      "order": [[1, 'dsc']]
							  }
							);
						
						 tableGe.columns.adjust().draw();
						    // Array to track the ids of the details displayed rows
						    var detailRowsGe = [];
						 
						    $('#GeBuscar tbody').on( 'click', 'tr td.details-control', function () {
						        var trGe = $(this).closest('tr');
						        var rowGe = tableGe.row( trGe );
						        var idxGe = $.inArray( trGe.attr('id'), detailRowsGe );
						 
						        if ( rowGe.child.isShown() ) {
						            trGe.removeClass( 'details' );
						            rowGe.child.hide();
						 
						            // Remove from the 'open' array
						            detailRowsGe.splice( idxGe, 1 );
						        }
						        else {
						            trGe.addClass( 'details' );
						            rowGe.child( detalleTablaGerente( rowGe.data() ) ).show();
						 
						            // Add to the 'open' array
						            if ( idx === -1 ) {
						                detailRowsGe.push( trGe.attr('id') );
						            }
						        }
						    } );
						    
						    // On each draw, loop over the `detailRows` array and show any child rows
						    tableGe.on( 'draw', function () {
						        $.each( detailRowsGe, function ( i, id ) {
						            $('#'+id+' td.details-control').trigger( 'click' );
						        } );
						    } );
						    
	   
					} );
					
					
//Detalle Tabla Gerente Buscar					
	function detalleTablaGerente( dge ) {		
		var url='404.php';
		var b = new Base64();
		var empresa = null;
		if (dge.lstdocumento[0]!=null){
			url = dge.lstdocumento[0].url;
			url = b.encode(url);
		}
		if (dge.colectivo.empresa != null){
			empresa = '<strong>Linea: </strong>' + dge.colectivo.linea + ' <strong> Empresa: </strong>' + dge.colectivo.empresa + '<br>'; }
		else { empresa = ""; }
			
		return  empresa+' <strong> Observaciones: </strong> '+dge.observaciones+'<br><br>'
		    		+'<div class="container-fluid"><div class="row-fluid"><div class="col-md-12">' //principio linea base
					+'<div class="row">' //row
					+'<div class="col-md-1">' 
				    +'<form action="../../../sugpa/app/index.php?sugpa=EgresarVehiculo" method="post">'
					+'<input class="btn btn-primary btn-l" type="submit" name="egresar" value="Egresar" />'
					+'<input type="hidden" name="flagegreso" value="1" >'
					+'<input type="hidden" name="id" value="'+dge.idingreso+'" >'
					+'<input name="domin" style="display:none;" value="'+dge.dominio+'" type="text">'
					+'<input name="mar" style="display:none;" value="'+dge.marca+'" type="text">'
					+'<input name="mod" style="display:none;" value="'+dge.modelo+'" type="text">'
					+'<input name="color" style="display:none;" value="'+dge.color+'" type="text">'
					+'<input name="mot" style="display:none;" value="'+dge.motivo+'" type="text">'
					+'</form></div><div class="clearfix visible-xs-block"></div>'
					+'<div class="col-md-1"><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=documentos&id='+url+'" target="_blank">Inventario</a></div>'
					+'<div class="col-md-1"><a class="btn btn-primary btn-l" href="../../../sugpa/app/index.php?sugpa=MovController&idIngreso='+dge.idingreso+'&marca='+dge.marca+'&modelo='+dge.modelo+'&dominio='+dge.dominio+'" target="_blank">Movimientos</a></div>' //Movimientos
					+'</div></div></div></div><br>';//fin linea base		
			}


//***********************************************************************


	/*imprimir pantalla*/
	function printPage() {
	    window.print();
	}


	/*exportar tabla a excel*/
	var tableToExcel = (function() {
		  var uri = 'data:application/vnd.ms-excel;base64,'
		    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
		    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
		    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
		  return function(table, name) {
		    if (!table.nodeType) table = document.getElementById(table)
		    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
		    window.location.href = uri + base64(format(template, ctx))
		  }
		})()

	/*mensajes confirma*/
	function mensajeConfirma() {
	    var txt;
	    if (confirm("Presione aceptar para confirmar el egreso") == true) {
	        txt = "You pressed OK!";
	    } else {
	        txt = "You pressed Cancel!";
	    }
	    document.getElementById("demo").innerHTML = txt;
	}

	function mensajeConfirmaI() {
	    var txt;
	    if (confirm("Presione aceptar para confirmar el ingreso") == true) {
	        txt = "You pressed OK!";
	    } else {
	        txt = "You pressed Cancel!";
	    }
	    document.getElementById("demo").innerHTML = txt;
	}
	/*mostrar ocultar*/
	$(document).ready(function(){
	    $("#hide").click(function(){
	        $("#div1").hide();
	    });
	    $("#show").click(function(){
	        $("#div1").show();
	    });
	});

		function formatoFecha(f){
			var dia = f.dayOfMonth;
			var mes = f.month;
			var anio = f.year;
			
			if (dia<=9) 
				dia = "0" + dia 
			if (mes<=9) 
				mes = "0" + mes
			return	dia+'/'+mes+'/'+anio;
			
		}


	/* foreach */
	function fillSelect(data) {
		  //alert(data);
		  $.each(data, function(i, item) {
			  item.url;
		    
		  });
		}

	$('#cargando').ready(function() {
		  var $modal = $('.js-loading-bar'),
		      $bar = $modal.find('.progress-bar');
		  
		  $modal.modal('show');
		  $bar.addClass('animate');

		  setTimeout(function() {
		    $bar.removeClass('animate');
		    $modal.modal('hide');
		  }, 1500);
		});

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-17784640-34', 'auto');
		  ga('send', 'pageview');
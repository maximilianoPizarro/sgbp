function deshabilitarTodoEgr(){
	if ($(trasladado).is(':checked')) {
		//Oculto todos los examinar menos boleta de compactacion
		document.getElementById("divActaEntrega").style.display = "none";
		document.getElementById("divDNI").style.display = "none";
		document.getElementById("divLicencia").style.display = "none";
		document.getElementById("divCedula").style.display = "none";
		document.getElementById("divSeguro").style.display = "none";
		document.getElementById("divDGAI").style.display = "none";
		document.getElementById("divActaZ").style.display = "none";
		document.getElementById("divCedulaVerde").style.display = "none";
		document.getElementById("divVTV").style.display = "none";
		document.getElementById("divPoder").style.display = "none";
		document.getElementById("divOficio").style.display = "none";
		//Muestro y oculto informacion segun se requiera
		document.getElementById("divTrasladoPlaya").style.display = "inline";
		document.getElementById("divDatosGrua").style.display = "inline";
		document.getElementById("divPActaDeEntrega").style.display = "none";
		document.getElementById("divPLicencia").style.display = "none";
		document.getElementById("divPActaZ").style.display = "none";
		//Limpio los datos de la grua
		document.getElementById("internoGrua").value = "";
		document.getElementById("marcaGrua").value = "";
		document.getElementById("modeloGrua").value = "";
		document.getElementById("dominioGrua").value = "";
		document.getElementById("choferDNI").value = "";
		//Deshabilito los campos que no se deben completar
		document.getElementById("playaTraslado").disabled = false; //habilitado
		document.getElementById("tipo").disabled = true;
		document.getElementById("actaDeEntrega").disabled = true;
		document.getElementById("presentaLicencia").disabled = true;
		document.getElementById("presentaActaZ").disabled = true;
		document.getElementById("codFuerza").disabled = true;
		document.getElementById("apellido").disabled = true;
		document.getElementById("nombre").disabled = true;
		document.getElementById("tipoDoc").disabled = true;
		document.getElementById("dni").disabled = true;
		document.getElementById("internoGrua").disabled = false; //habilitado
		document.getElementById("marcaGrua").disabled = true;
		document.getElementById("modeloGrua").disabled = true;
		document.getElementById("dominioGrua").disabled = true;
		document.getElementById("choferDNI").disabled = false; //habilitado
		//Radio buttons y selects sin chequear
		$('#tipo option:eq(0)').prop('selected', true);
		$('input[name=actaDeEntrega]').attr('checked',false);
		$('input[name=presentaLicencia]').attr('checked',false);
		$('input[name=presentaActaZ]').attr('checked',false);
		//Atributos que pasan a ser NO obligatorios
		document.getElementById("tipo").required = false;
		document.getElementById("actaDeEntrega").required = false;
		document.getElementById("presentaLicencia").required = false;
		document.getElementById("presentaActaZ").required = false;
	}
	else{
		//Muestro y oculto informacion segun se requiera
		document.getElementById("divDNI").style.display = "inline";
		document.getElementById("divTrasladoPlaya").style.display = "none";
		document.getElementById("divDatosGrua").style.display = "none";
		document.getElementById("divPActaDeEntrega").style.display = "inline";
		document.getElementById("divTipoGrua").style.display = "none";
		//Limpio los datos de la grua
		document.getElementById("internoGrua").value = "S/D";
		document.getElementById("marcaGrua").value = "S/D";
		document.getElementById("modeloGrua").value = "S/D";
		document.getElementById("dominioGrua").value = "S/D";
		document.getElementById("choferDNI").value = "S/D";
		//Habilito los campos que estaban deshabilitados
		document.getElementById("playaTraslado").disabled = true; //deshabilitado
		document.getElementById("tipo").disabled = false;
		document.getElementById("actaDeEntrega").disabled = false;
		document.getElementById("presentaLicencia").disabled = false;
		document.getElementById("presentaActaZ").disabled = false;
		document.getElementById("codFuerza").disabled = false;
		document.getElementById("apellido").disabled = false;
		document.getElementById("nombre").disabled = false;
		document.getElementById("tipoDoc").disabled = false;
		document.getElementById("dni").disabled = false;
		document.getElementById("internoGrua").disabled = true; //deshabilitado
		document.getElementById("marcaGrua").disabled = false;
		document.getElementById("modeloGrua").disabled = false;
		document.getElementById("dominioGrua").disabled = false;
		document.getElementById("choferDNI").disabled = true; //deshabilitado
		//Radio buttons y selects sin chequear
		$('#playaTraslado option:eq(0)').prop('selected', true);
		$('#tipo option:eq(0)').prop('selected', true);
		$('input[name=presentaLicencia]').attr('checked',false);
		$('input[name=presentaActaZ]').attr('checked',false);
		$('input[name=tipoGrua]').attr('checked',false);
		//Atributos vuelven a ser obligatorios
		document.getElementById("tipo").required = true;
		document.getElementById("actaDeEntrega").required = true;
		document.getElementById("tipoGrua").required = false;
	}
}
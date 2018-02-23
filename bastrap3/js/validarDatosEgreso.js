function validarDatosEgreso(form, motivoCompleto){
	var retiraAcarreado = false; //Si no pasa por algun "retira acarreado" no se cambia a true
	var algunaDocu=0; // flag para ver si entró a alguna de las documentaciones, sino se trata como docu por defecto
	//Agrupando el motivo completo con la categoria correspondiente para que valide los documentos requeridos
	motivoCompleto = motivoCompleto.toUpperCase();
	motivo = motivoCompleto;
	
	if((motivoCompleto.indexOf("DOCU") != -1) 
	|| (motivoCompleto.indexOf("LICE") != -1)
	|| (motivoCompleto.indexOf("MOTO") != -1)
	|| (motivoCompleto.indexOf("SEGU") != -1)
	|| (motivoCompleto.indexOf("TAX") != -1)
	|| (motivoCompleto.indexOf("TTE") != -1)
	|| (motivoCompleto.indexOf("SUST") != -1)
	|| (motivoCompleto.indexOf("VTV") != -1)){
		motivo = "DOCU";
		algunaDocu++;
	}
	if((motivoCompleto.indexOf("ESTA") != -1)){
		motivo = "ESTA";
		algunaDocu++;
	}
	if((motivoCompleto.indexOf("ALCO") != -1)){
		motivo = "ALCO";
		algunaDocu++;
	}
	else if((motivoCompleto.indexOf("ALCN") != -1)){
		motivo = "ALCN";
		algunaDocu++;
	}
	if((motivoCompleto.indexOf("ALCO") != -1) 
	|| (motivoCompleto.indexOf("ESTA") != -1)
	|| (motivoCompleto.indexOf("ALCN") != -1)){
		if((motivoCompleto.indexOf("DOCU") != -1) || (algunaDocu>1)){ //Si posee varios motivos y uno es docu, se prioriza docu
		   motivo = "DOCU";
		   algunaDocu++;
		}
	}
	if(algunaDocu==0){ //Si solo hay informacion adicional, se utiliza la documentacion
		motivo = "DOCU";
	}
	
	//Se muestra y oculta la documentación requerida correspondiente
	// if($("input[name='actaDeEntrega']:checked").val()==="NO") PARA SABER EL VALOR DE UN RADIO BUTTON
	document.getElementById("divTipo").style.display = "inline";
	document.getElementById("divActaEntrega").style.display = "none";
	document.getElementById("divDNI").style.display = "inline";
	document.getElementById("divLicencia").style.display = "none";
	document.getElementById("divCedula").style.display = "none";
	document.getElementById("divSeguro").style.display = "none";
	document.getElementById("divDGAI").style.display = "none";
	document.getElementById("divActaZ").style.display = "none";
	document.getElementById("divCedulaVerde").style.display = "none";
	document.getElementById("divVTV").style.display = "none";
	document.getElementById("divPoder").style.display = "none";
	document.getElementById("divOficio").style.display = "none";

	//DATOS QUE SE MUESTRAN EN FORMA GENERAL SEGUN LOS MOTIVOS
	if(motivo.indexOf("DOC") != -1){ //Si la palabra se encuentra en el string
		document.getElementById("divDGAI").style.display = "inline"; //Si acta de entrega no esta chequeada muestra el DGAI
	}
	if(form.tipo[3].selected) document.getElementById("divPoder").style.display = "inline";
	//VALIDACIONES DE EXAMINAR SEGUN LO SELECCIONADO:
	if((form.tipo[1].selected) || (form.tipo[2].selected) || (form.tipo[3].selected)){
		if(document.getElementById('apellido').value === "S/D"){ //Limpiando variables
			document.getElementById('apellido').value = "";
			document.getElementById('nombre').value = "";
			$('#tipoDoc option:eq(0)').prop('selected', true);
			document.getElementById('dni').value = "";
		}
		document.getElementById("divPLicencia").style.display = "inline";
		document.getElementById("divPActaZ").style.display = "inline";
		//Reglas documentacion
		if((motivo.indexOf("DOC") != -1) && ((form.tipo[1].selected) || (form.tipo[2].selected ) || (form.tipo[3].selected))){ //Tipos de egreso segun documentacion y titular, apoderado
			if($("#presentaLicencia").is(':checked')){ //Documentacion y titular, apoderado (6 reglas)
				document.getElementById("divLicencia").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else if($("#presentaActaZ").is(':checked')){
				document.getElementById("divActaZ").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else if(($("input[name='presentaLicencia']:checked").val()==="NO") && (($("input[name='presentaActaZ']:checked").val()==="NO"))){
				document.getElementById("divCedula").style.display = "inline";
				document.getElementById("divDGAI").style.display = "inline";
				if(form.tipo[1].selected || form.tipo[2].selected) retiraAcarreado=true;
			}
		} //Doc y Titular, Apoderado
		//Reglas Alcoholemia Positivo
		if((motivo.indexOf("ALCO") != -1) && ((form.tipo[1].selected) || (form.tipo[2].selected) || (form.tipo[3].selected))){//Tipos de egreso segun alcoholemia+ y titular, apoderado
			if(($("#presentaLicencia").is(':checked'))){ //Alcoholemia positivo y titular,apoderado (6 reglas)
				document.getElementById("divLicencia").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else if($("#presentaActaZ").is(':checked')){
				document.getElementById("divActaZ").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else if(($("input[name='presentaLicencia']:checked").val()==="NO") && ($("input[name='presentaActaZ']:checked").val()==="NO")){
				document.getElementById("divCedula").style.display = "inline";
				retiraAcarreado=true;
			}
			if(motivoCompleto === "ALCO") document.getElementById("divDGAI").style.display = "none";
			else document.getElementById("divDGAI").style.display = "inline";
		} //Alco+ y Titular, Apoderado
		//Reglas Alcoholemia Negativo
		if((motivo.indexOf("ALCN") != -1) && ((form.tipo[1].selected) || (form.tipo[2].selected) ||(form.tipo[3].selected))){//Tipos de egreso segun alcoholemia- y titular, apoderado
			if($("#presentaLicencia").is(':checked')){ //Alcoholemia negativo y titular,apoderado (4 reglas)
				document.getElementById("divLicencia").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
				document.getElementById("divDGAI").style.display = "inline";
			}
			else if(($("input[name='presentaLicencia']:checked").val()==="NO")){
				document.getElementById("divCedula").style.display = "inline";
				retiraAcarreado=true;
			}
		} //Alco- y Titular, Apoderado
		//Reglas Estacionamiento prohibido
		if((motivo.indexOf("ESTA") != -1) && ((form.tipo[1].selected) || (form.tipo[2].selected) || (form.tipo[3].selected))){//Tipos de egreso segun estacionamiento prohibido y titular, apoderado
			if(($("#presentaLicencia").is(':checked'))){ //Estacionamiento prohibido y titular,apoderado (6 reglas)
				document.getElementById("divLicencia").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else if(($("#presentaActaZ").is(':checked'))){
				document.getElementById("divActaZ").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else if(($("input[name='presentaLicencia']:checked").val()==="NO") && (($("input[name='presentaActaZ']:checked").val()==="NO"))){
				document.getElementById("divCedula").style.display = "inline";
				retiraAcarreado=true;
			}
		} //Est. prohib. y Titular, Apoderado
	}
	else{
		document.getElementById("divPLicencia").style.display = "none";
		document.getElementById("divPActaZ").style.display = "none";
		$('input[name=presentaLicencia]').attr('checked',false);
		$('input[name=presentaActaZ]').attr('checked',false);
	}

	if(form.tipo[4].selected){ //Se desactivan todas las copias y se activa oficio judicial
		document.getElementById("divOficio").style.display = "inline";
		//Se ocultan los datos de la persona
		document.getElementById("ltipoDoc").style.display = "none";
		document.getElementById("tipoDoc").style.display = "none";
		document.getElementById("tipoDoc").disabled = true;
		$('#tipoDoc option:eq(0)').prop('selected', true);
		document.getElementById("ldni").style.display = "none";
		document.getElementById("divDatosGrua").style.display = "none"; //Se ocultan los datos de la grua
		//Se muestra el label codigo de fuerza y dni
		document.getElementById("codFuerza").style.display = "inline";
		//Se cambia el valor de los elementos que iran al controlador como S/D, ademas se vacian los que sean necesarios:
		document.getElementById('codFuerza').value = "";
		document.getElementById('tipoDoc').value = "S/D";
		document.getElementById('internoGrua').value = "S/D";
		document.getElementById('marcaGrua').value = "S/D";
		document.getElementById('modeloGrua').value = "S/D";
		document.getElementById('dominioGrua').value = "S/D";
		document.getElementById('choferDNI').value = "S/D";
		//Ocultando el resto de datos por defecto
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
		retiraAcarreado=false;
	}
	else{
		document.getElementById("codFuerza").style.display = "none";
		//Se muestran los datos de la persona
		document.getElementById("ltipoDoc").style.display = "inline";
		document.getElementById("tipoDoc").style.display = "inline";
		document.getElementById("tipoDoc").disabled = false;
		document.getElementById("ldni").style.display = "inline";
		//Datos de la persona en blanco para completar:
		if($("#actaDeEntrega").is(':checked')){
			document.getElementById('apellido').value = "";
			document.getElementById('nombre').value = "";
			document.getElementById("tipoDoc").disabled = false;
			$('#tipoDoc option:eq(0)').prop('selected', true);
		}
		//document.getElementById('modeloGrua').value = "";
	}

	if($("#actaDeEntrega").is(':checked')){ //Se desactivan todas las copias y se activa acta de entrega
		document.getElementById("tipo").disabled = true; //deshabilito el tipo de persona a retirar ya que no es relevante
		document.getElementById("tipo").required = false; //Tipo NO obligatorio
		document.getElementById("presentaLicencia").required = false; //Hago NO obligatorios los campos de documentacion
		document.getElementById("presentaActaZ").required = false; //Hago NO obligatorios los campos de documentacion
		document.getElementById("divTipo").style.display = "none"; //No se permite seleccionar el tipo que lo va a retirar
		//Aparecen (o siguen apareciendo) los datos de la persona-----------
		document.getElementById("divDatosPersona").style.display = "inline";
		document.getElementById("ltipoDoc").style.display = "inline";
		document.getElementById("tipoDoc").style.display = "inline";
		document.getElementById("ldni").style.display = "inline";
		//------------------------------------------------------------------
		document.getElementById("divDatosGrua").style.display = "none"; //No se permiten seleccionar los datos de la grua
		document.getElementById("codFuerza").style.display = "none"; //No se permite poner el codigo de fuerza (si es que esta activado)
		document.getElementById("divActaEntrega").style.display = "inline";
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
		//Se deseleccionan y ocultan los radio button
		$('input[name=presentaLicencia]').attr('checked',false);
		$('input[name=presentaActaZ]').attr('checked',false);
		document.getElementById("divPLicencia").style.display = "none";
		document.getElementById("divPActaZ").style.display = "none";
		retiraAcarreado=false; //Ya que si presenta acta de entrega NO retira acarreado
		//Vaciando datos por si se seleccionó otra opcion anteriormente
		$('#tipo option:eq(0)').prop('selected', true);
		document.getElementById('apellido').value = "";
		document.getElementById('nombre').value = "";
		$('#tipoDoc option:eq(0)').prop('selected', true);
		document.getElementById('dni').value = "";
		document.getElementById("tipoDoc").disabled = false;
	}
	else{
		document.getElementById("tipo").disabled = false;
		document.getElementById("tipo").required = true; //Vuelve a ser obligatorio
	}
	
	//Validar si se necesitan o no los datos de la grua
	if(retiraAcarreado){
		document.getElementById('divDatosGrua').style.display = "inline";
		//Limpiando datos de la grua para rellenar:
		document.getElementById('internoGrua').value = "";
		document.getElementById('marcaGrua').value = "";
		document.getElementById('modeloGrua').value = "";
		document.getElementById('dominioGrua').value = "";
		document.getElementById('choferDNI').value = "";
	}
	else {
		document.getElementById('divDatosGrua').style.display = "none";
		//Se envía un S/D al controlador ya que NO retira acarreado
		document.getElementById('internoGrua').value = "S/D";
		document.getElementById('marcaGrua').value = "S/D";
		document.getElementById('modeloGrua').value = "S/D";
		document.getElementById('dominioGrua').value = "S/D";
		document.getElementById('choferDNI').value = "S/D";
	}
	//Validando check traslado con datos de grua
	if($("#traslado").is(':checked')){
		document.getElementById("internoGrua").disabled = false;
		document.getElementById("choferDNI").disabled = false;
	}
	else{
		document.getElementById("internoGrua").disabled = true;
		document.getElementById("choferDNI").disabled = true;
	}
	
	//Validando los required de radio button
	if(form.tipo[1].selected || form.tipo[2].selected || form.tipo[3].selected){
		document.getElementById("presentaLicencia").required = true;
		document.getElementById("presentaActaZ").required = true;
	}
	else{
		document.getElementById("presentaLicencia").required = false;
		document.getElementById("presentaActaZ").required = false;
	}
}
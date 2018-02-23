function validarDocumentacion(form){
	if(form.playaTraslado[3].selected){
		document.getElementById("divTipoGrua").style.display = "inline";
		document.getElementById("tipoGrua").required = true;
	}
	else{
		document.getElementById("divTipoGrua").style.display = "none";
		document.getElementById("tipoGrua").required = false; //Deshabilito el check para Interna/Privada
		$('input[name=tipoGrua]').attr('checked',false); //Deshabilito selección si es que había
		//$('input[name=tipoGrua]').attr('checked',false);
		document.getElementById("internoGrua").disabled = false;
		document.getElementById("choferDNI").disabled = false;
		document.getElementById("marcaGrua").disabled = true;
		document.getElementById("modeloGrua").disabled = true;
		document.getElementById("dominioGrua").disabled = true;
	}
}
function enviarForm() {
var esValido = true;
var valorAux;
var pistaAux;
if(!($(internoGrua).is(':disabled'))){
	valorAux = document.getElementById("internoGrua").value;
	pistaAux = document.getElementById("pistaGrua").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.split("(")[0]) || (pistaAux==="sin sugerencia")){
		 document.getElementById("errorGrua").style.display = "inline";
		 window.scroll(0, 0);
		 esValido = false;
	}
	else document.getElementById("errorGrua").style.display = "none";
	
	valorAux = document.getElementById("choferDNI").value;
	pistaAux = document.getElementById("pistaChofer").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.split("(")[0]) || (pistaAux==="sin sugerencia")){
		 document.getElementById("errorChofer").style.display = "inline";
		 window.scroll(0, 0);
		 esValido = false;
	}
	else document.getElementById("errorChofer").style.display = "none";
	
}
	
	if(esValido){
		//Antes de enviar el formulario
		if( $('#divActaEntrega').css('display') == 'none' ) document.getElementById("actaEntrega").disabled = true;
		if( $('#divDNI').css('display') == 'none' ) document.getElementById("dniDoc").disabled = true;
		if( $('#divLicencia').css('display') == 'none' ) document.getElementById("licencia").disabled = true;
		if( $('#divActaZ').css('display') == 'none' ) document.getElementById("actaZ").disabled = true;
		if( $('#divCedulaVerde').css('display') == 'none' ) document.getElementById("cedulaVerde").disabled = true;
		if( $('#divCedula').css('display') == 'none' ) document.getElementById("cedula").disabled = true;
		if( $('#divSeguro').css('display') == 'none' ) document.getElementById("seguro").disabled = true;
		if( $('#divVTV').css('display') == 'none' ) document.getElementById("vtv").disabled = true;
		if( $('#divDGAI').css('display') == 'none' ) document.getElementById("DGAI").disabled = true;
		if( $('#divPoder').css('display') == 'none' ) document.getElementById("poder").disabled = true;
		if( $('#divOficio').css('display') == 'none' ) document.getElementById("oficio").disabled = true;
	}
	return esValido;
}
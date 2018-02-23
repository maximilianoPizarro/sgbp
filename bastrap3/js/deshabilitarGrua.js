function deshabilitarGrua(){
	if ($(checkGrua).is(':checked')) {
		document.getElementById("internoGrua").disabled = false;
		document.getElementById("choferDNI").disabled = false;
	}
	else{
		document.getElementById("internoGrua").disabled = true;
		document.getElementById("choferDNI").disabled = true;
	}
}
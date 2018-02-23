function validarGrua(form){
	var radioGrua = $("input[name='tipoGrua']:checked").val();
	if(radioGrua==="PRI"){    //Grua privada
		document.getElementById("internoGrua").disabled = true;
		document.getElementById("choferDNI").disabled = true;
		document.getElementById("marcaGrua").disabled = false;
		document.getElementById("modeloGrua").disabled = false;
		document.getElementById("dominioGrua").disabled = false;
	}
	else{
		document.getElementById("internoGrua").disabled = false;
		document.getElementById("choferDNI").disabled = false;
		document.getElementById("marcaGrua").disabled = true;
		document.getElementById("modeloGrua").disabled = true;
		document.getElementById("dominioGrua").disabled = true;
	}
}
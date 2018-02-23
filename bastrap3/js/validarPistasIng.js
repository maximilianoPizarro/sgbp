function validarPistas(volver){
var esValido = true;
var valorAux;
var pistaAux;
if (!$(trasladado).is(':checked')){
	valorAux = document.getElementById("Motivo1").value;
	pistaAux = document.getElementById("pistaMotivo1").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.substring(0, valorAux.length)) || (valorAux.length!=4)){
		if(valorAux.length>0){
			document.getElementById("errorMotivo").style.display = "inline";
		    window.scroll(0, 0);
			esValido = false;
			flagVolver++;
		}
	}
	valorAux = document.getElementById("Motivo2").value;
	pistaAux = document.getElementById("pistaMotivo2").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.substring(0, valorAux.length)) || (valorAux.length!=4)){
		if(valorAux.length>0){
			document.getElementById("errorMotivo").style.display = "inline";
	  	  window.scroll(0, 0);
			esValido = false;
			flagVolver++;
		}
	}
	valorAux = document.getElementById("Motivo3").value;
	pistaAux = document.getElementById("pistaMotivo3").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.substring(0, valorAux.length)) || (valorAux.length!=4)){
		if(valorAux.length>0){
		 document.getElementById("errorMotivo").style.display = "inline";
	     window.scroll(0, 0);
		 esValido = false;
		 flagVolver++;
		}
	}
	valorAux = document.getElementById("Motivo4").value;
	pistaAux = document.getElementById("pistaMotivo4").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.substring(0, valorAux.length)) || (valorAux.length!=4)){
		if(valorAux.length>0){
		 document.getElementById("errorMotivo").style.display = "inline";
	     window.scroll(0, 0);
		 esValido = false;
		 flagVolver++;
		}
	}
	valorAux = document.getElementById("Motivo5").value;
	pistaAux = document.getElementById("pistaMotivo5").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.substring(0, valorAux.length)) || (valorAux.length!=4)){
		if(valorAux.length>0){
		 document.getElementById("errorMotivo").style.display = "inline";
	     window.scroll(0, 0);
		 esValido = false;
		 flagVolver++;
		}
	}
	if(esValido) document.getElementById("errorMotivo").style.display = "none"; //Se oculta si todos los motivos estan bien
	
	valorAux = document.getElementById("agenteLabrante").value;
	pistaAux = document.getElementById("pistaAgente").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.split("(")[0]) || (pistaAux==="sin sugerencia")){
		if((volver==false) || (!(pistaAux==="" && valorAux>0))){
		 document.getElementById("errorAgente").style.display = "inline";
		 window.scroll(0, 0);
		 esValido = false;
		}
	}
	else document.getElementById("errorAgente").style.display = "none";
	if ($(checkGrua).is(':checked')){ //Si la grua esta activada
		valorAux = document.getElementById("internoGrua").value;
		pistaAux = document.getElementById("pistaGrua").innerText;
		if((valorAux.substring(0, valorAux.length) != pistaAux.split("(")[0]) || (pistaAux==="sin sugerencia")){
			if((volver==false) || (!(pistaAux==="" && valorAux>0))){
				document.getElementById("errorGrua").style.display = "inline";
				window.scroll(0, 0);
				esValido = false;
			}
		}
		else document.getElementById("errorGrua").style.display = "none";
	
		valorAux = document.getElementById("choferDNI").value;
		pistaAux = document.getElementById("pistaChofer").innerText;
		if((valorAux.substring(0, valorAux.length) != pistaAux.split("(")[0]) || (pistaAux==="sin sugerencia")){
			if((volver==false) || (!(pistaAux==="" && valorAux>0))){
				document.getElementById("errorChofer").style.display = "inline";
				window.scroll(0, 0);
				esValido = false;
			}
		}
		else document.getElementById("errorChofer").style.display = "none";
	}
	//Aviso de moto y titular seleccionados
	if(esValido){
		if($(esTitular).is(':checked')) esValido = confirm("MOTO y TITULAR seleccionados (Recuerde que el motovehiculo será compactado en 60 días). ¿Desea continuar?");
	}
	
} //end if check traslado=false
else{ //si se traslada de playa
	valorAux = document.getElementById("internoGrua").value;
	pistaAux = document.getElementById("pistaGrua").innerText;
	if((valorAux.substring(0, valorAux.length) != pistaAux.split("(")[0]) || (pistaAux==="sin sugerencia")){
		if((volver==false) || (!(pistaAux==="" && valorAux>0))){
		 document.getElementById("errorGrua").style.display = "inline";
		 window.scroll(0, 0);
		 esValido = false;
		}
	}
	else document.getElementById("errorGrua").style.display = "none";
}

return esValido;
}
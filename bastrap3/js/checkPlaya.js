function deshabilitarTodo(){
		if ($(trasladado).is(':checked')) {
			//Primer columna
			document.getElementById("tipo").disabled = true;
			document.getElementById("iTipo").disabled = true;
			document.getElementById("tipoDominio").disabled = true;
			document.getElementById("dominio").disabled = true;
			document.getElementById("marcaSinSeleccion").disabled = true;
			document.getElementById("marcaParticular").disabled = true;
			document.getElementById("marcaMoto").disabled = true;
			document.getElementById("iMarca").disabled = true;
			document.getElementById("lineaEmpresa").disabled = true;
			document.getElementById("modeloSinSeleccion").disabled = true;
			document.getElementById("modeloP").disabled = true;
			document.getElementById("modeloM").disabled = true;
			document.getElementById("iModelo").disabled = true;
			document.getElementById("iInterno").disabled = true;
			document.getElementById("color").disabled = true;
			document.getElementById("Motivo1").disabled = true;
			document.getElementById("Motivo2").disabled = true;
			document.getElementById("Motivo3").disabled = true;
			document.getElementById("Motivo4").disabled = true;
			document.getElementById("Motivo5").disabled = true;
			document.getElementById("chasis").disabled = true;
			document.getElementById("motor").disabled = true;
			//Segunda columna
			document.getElementById("actaCont").disabled = true;
			document.getElementById("actaComp").disabled = true;
			document.getElementById("actaZ").disabled = true;
			document.getElementById("agenteLabrante").disabled = true;
			document.getElementById("esTitular").disabled = true;
			document.getElementById("infractorNombre").disabled = true;
			document.getElementById("tipoDoc").disabled = true;
			document.getElementById("nDocumento").disabled = true;
			document.getElementById("checkGrua").disabled = true;
			document.getElementById("internoGrua").disabled = false;
			document.getElementById("choferDNI").disabled = true;
			//Tercer columna
			document.getElementById("calle").disabled = true;
			document.getElementById("numeroCalle").disabled = true;
			document.getElementById("entreCalle1").disabled = true;
			document.getElementById("entreCalle2").disabled = true;
			document.getElementById("referenciaLugar").disabled = true;
		}
		else{ //Activa todo lo desactivado
			//Primer columna
			document.getElementById("tipo").disabled = false;
			document.getElementById("iTipo").disabled = false;
			document.getElementById("tipoDominio").disabled = false;
			document.getElementById("dominio").disabled = false;
			document.getElementById("marcaSinSeleccion").disabled = false;
			document.getElementById("marcaParticular").disabled = false;
			document.getElementById("marcaMoto").disabled = false;
			document.getElementById("iMarca").disabled = false;
			document.getElementById("lineaEmpresa").disabled = false;
			document.getElementById("modeloSinSeleccion").disabled = false;
			document.getElementById("modeloP").disabled = false;
			document.getElementById("modeloM").disabled = false;
			document.getElementById("iModelo").disabled = false;
			document.getElementById("iInterno").disabled = false;
			document.getElementById("color").disabled = false;
			document.getElementById("Motivo1").disabled = false;
			document.getElementById("Motivo2").disabled = false;
			document.getElementById("Motivo3").disabled = false;
			document.getElementById("Motivo4").disabled = false;
			document.getElementById("Motivo5").disabled = false;
			document.getElementById("chasis").disabled = false;
			document.getElementById("motor").disabled = false;
			//Segunda columna
			document.getElementById("actaCont").disabled = false;
			document.getElementById("actaComp").disabled = false;
			document.getElementById("actaZ").disabled = false;
			document.getElementById("agenteLabrante").disabled = false;
			document.getElementById("esTitular").disabled = false;
			document.getElementById("infractorNombre").disabled = false;
			document.getElementById("tipoDoc").disabled = false;
			document.getElementById("nDocumento").disabled = false;
			document.getElementById("checkGrua").disabled = false;
			if ($(checkGrua).is(':checked')){
				document.getElementById("internoGrua").disabled = false;
				document.getElementById("choferDNI").disabled = false;
			}
			else{
				document.getElementById("internoGrua").disabled = true;
				document.getElementById("choferDNI").disabled = true;
			}
			//Tercer columna
			document.getElementById("calle").disabled = false;
			document.getElementById("numeroCalle").disabled = false;
			document.getElementById("entreCalle1").disabled = false;
			document.getElementById("entreCalle2").disabled = false;
			document.getElementById("referenciaLugar").disabled = false;
		}
	}
	function agregarMotivo(){
		if(document.getElementById('Motivo2').style.display === "none"){
			document.getElementById('Motivo2').style.display = "inline";
		}
		else if(document.getElementById('Motivo3').style.display === "none"){
			document.getElementById('Motivo3').style.display = "inline";
		}
		else if(document.getElementById('Motivo4').style.display === "none"){
			document.getElementById('Motivo4').style.display = "inline";
		}
		else if(document.getElementById('Motivo5').style.display === "none"){
			document.getElementById('Motivo5').style.display = "inline";
		}
	}

	function quitarMotivo(){
		if(document.getElementById('Motivo5').style.display === "inline"){
			document.getElementById('Motivo5').style.display = "none";
			document.getElementById('tPistaMotivo5').style.display = "none"; //Se borran tambien las sugerencias
			document.getElementById('Motivo5').value = "";
		}
		else if(document.getElementById('Motivo4').style.display === "inline"){
			document.getElementById('Motivo4').style.display = "none";
			document.getElementById('tPistaMotivo4').style.display = "none";
			document.getElementById('Motivo4').value = "";
		}
		else if(document.getElementById('Motivo3').style.display === "inline"){
			document.getElementById('Motivo3').style.display = "none";
			document.getElementById('tPistaMotivo3').style.display = "none";
			document.getElementById('Motivo3').value = "";
		}
		else if(document.getElementById('Motivo2').style.display === "inline"){
			document.getElementById('Motivo2').style.display = "none";
			document.getElementById('tPistaMotivo2').style.display = "none";
			document.getElementById('Motivo2').value = "";
		}
	}
		 function validarPatente(form){
				if(document.getElementById('dominio').value == "SIN PATENTE")
					document.getElementById('dominio').value = "";
					
				if(form.tipoDominio[5].selected){
					document.getElementById('dom').style.display="none";
					document.getElementById('dominio').style.display="none";
					document.getElementById('dominio').value = "SIN PATENTE";
				}
				else{
					document.getElementById('dom').style.display="inline";
					document.getElementById('dominio').style.display="inline";
				}
		  }						    
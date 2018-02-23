	function pistaAgente(str) {
	document.getElementById("tPistaAgente").style.display = "inline";
  	  if (str.length == 0) { 
  		document.getElementById("tPistaAgente").style.display = "none";
   	     document.getElementById("pistaAgente").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        	if (this.readyState == 4 && this.status == 200) {
                document.getElementById("pistaAgente").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "/sugpa/app/negocio/pistaAgente.php?q=" + str, true);
        xmlhttp.send();
        
    }
}

	function pistaMotivo(str, id) {
		document.getElementById("tPista"+id).style.display = "inline";
	  	  if (str.length == 0) { 
	  		document.getElementById("tPista"+id).style.display = "none";
	   	     document.getElementById("pista"+id).innerHTML = "";
	        return;
	    } else {
	        var xmlhttp = new XMLHttpRequest();
	        xmlhttp.onreadystatechange = function() {
	        	if (this.readyState == 4 && this.status == 200) {
	                document.getElementById("pista"+id).innerHTML = this.responseText;
	            }
	        };
	        xmlhttp.open("GET", "/sugpa/app/negocio/pistaMotivo.php?q=" + str, true);
	        xmlhttp.send();
	        
	    }
	}	
	
	function pistaChofer(str) {
		document.getElementById("tPistaChofer").style.display = "inline";
	  	  if (str.length == 0) { 
	  		document.getElementById("tPistaChofer").style.display = "none";
	   	     document.getElementById("pistaChofer").innerHTML = "";
	        return;
	    } else {
	        var xmlhttp = new XMLHttpRequest();
	        xmlhttp.onreadystatechange = function() {
	        	if (this.readyState == 4 && this.status == 200) {
	                document.getElementById("pistaChofer").innerHTML = this.responseText;
	            }
	        };
	        xmlhttp.open("GET", "/sugpa/app/negocio/pistaChofer.php?q=" + str, true);
	        xmlhttp.send();
	        
	    }
	}
	
	function pistaGrua(str) {
		document.getElementById("tPistaGrua").style.display = "inline";
	  	  if (str.length == 0) { 
	  		document.getElementById("tPistaGrua").style.display = "none";
	   	     document.getElementById("pistaGrua").innerHTML = "";
	        return;
	    } else {
	        var xmlhttp = new XMLHttpRequest();
	        xmlhttp.onreadystatechange = function() {
	        	if (this.readyState == 4 && this.status == 200) {
	                document.getElementById("pistaGrua").innerHTML = this.responseText;
	            }
	        };
	        xmlhttp.open("GET", "/sugpa/app/negocio/pistaGrua.php?q=" + str, true);
	        xmlhttp.send();
	        
	    }
	}
	
$(function(){ //Campos numéricos de egreso
	$('#dni').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#internoGrua').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#choferDNI').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
});
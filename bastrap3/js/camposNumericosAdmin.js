$(function(){ 
	$('#ninventario').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#nsap').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#nsuaci').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#ndisposicion').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#nprocom').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#dni').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#piso').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#altura').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#cp').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
	$('#boleta').keydown(function(event){
		if(event.keyCode<48 || event.keyCode>57){
			if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
				if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
					if(event.keyCode!=9) return false; //Keycode 9 = tabulación
				}
			}
		}
	});
});
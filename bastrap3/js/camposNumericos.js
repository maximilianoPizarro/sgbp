	//Solo numeros
	$(function(){
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
		$('#nDocumento').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
		$('#actaCont').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){  //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=190){ //Para poder ingresar un punto
							if(event.keyCode!=9) return false;
						}
					}
				}
			}
		});
		$('#actaComp').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=190){ //Para poder ingresar un punto
							if(event.keyCode!=9) return false;
						}
					}
				}
			}
		});
		$('#actaZ').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=190){ //Para poder ingresar un punto
							if(event.keyCode!=9) return false;
						}
					}
				}
			}
		});
		$('#numeroCalle').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=190){ //Para poder ingresar un punto
							if(event.keyCode!=9) return false; //Keycode 9 = tabulación
						}
					}
				}
			}
		});
		$('#agenteLabrante').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
		//Para todos los motivos:
		$('#Motivo1').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
		$('#Motivo2').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
		$('#Motivo3').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
		$('#Motivo4').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
		$('#Motivo5').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
		$('#numInventario').keydown(function(event){
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
		$('#dominio').keydown(function(event){ //Solo numeros y letras
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if (event.keyCode<65 || event.keyCode>90){ //letras mayusculas
						if (event.keyCode<97 || event.keyCode>122){ //letras minusculas
							if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
								if(event.keyCode!=9) return false; //Keycode 9 = tabulación
							}
						}
					}
				}
			}
		});
		$('#iInterno').keydown(function(event){ //Solo numeros
			if(event.keyCode<48 || event.keyCode>57){
				if (event.keyCode<96 || event.keyCode>105){ //Teclado numérico
					if(event.keyCode!=8){ //Keycode 8 = 'Backspace' (borrar 1 caracter), lo habilita
						if(event.keyCode!=9) return false; //Keycode 9 = tabulación
					}
				}
			}
		});
	});
function mostrar()
{
	var numero;
	var contador=0;
	//declarar contadores y variables 
	

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Ese no  es un numero.ingresar un numero"));
		}
		if (numero >0) {
			
		}else if(numero <0 ){

		}else {

		}






		respuesta = prompt("Quiere ingresar otro numero.?")
	}while (respuesta == 'si');



}//FIN DE LA FUNCIÓN
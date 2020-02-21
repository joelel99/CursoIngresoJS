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
		






		respuesta = prompt("Quiere ingresar otro numero.?")
	}while (respuesta == 'si');



}//FIN DE LA FUNCIÓN
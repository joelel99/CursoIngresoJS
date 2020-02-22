function mostrar()
{

	var contador=0;
	var numero;
	//declarar contadores y variables 
	

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Ese no  es un numero.ingresar un numero"));
		}
		if (numero >0) {
			contador + numero
		}else if(numero <0 ){

		}else {

		}
		respuesta = prompt("Quiere ingresar otro numero.?")
	}while (respuesta == 'si');
	document.write();



}//FIN DE LA FUNCIÓN
/*
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos
*/
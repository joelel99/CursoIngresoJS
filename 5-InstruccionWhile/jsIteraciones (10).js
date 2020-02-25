function mostrar()
{
	var numero;
	var NumerosPositivos = 0;
	var NumerosNegativos = 0;
	var CantidadDeNegativos = 0;
	var CantidadDePositivos = 0;
	var cantidadaddeceros= 0;
	var NumerosPares=0;
	var resto = 0;
	var Promediopositivo;
	var Promedionegativo;
	var Diferenciapositivosnegativos;
	//declarar contadores y variables 
	

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Ese no  es un numero.ingresar un numero"));
		}
		if (numero >0) {			 
			NumerosPositivos = NumerosPositivos + numero;
			CantidadDePositivos++;

		} else if(numero <0 ){
			NumerosNegativos = NumerosNegativos + numero;
			CantidadDeNegativos++;
		}else {
			
			cantidadaddeceros++;
		}
		resto = numero % 2;
		if (resto == 0) {
			NumerosPares++;
		}

		respuesta = prompt("Quiere ingresar otro numero.?")
	}while (respuesta.toLowerCase() == 'si');
	Promediopositivo = NumerosPositivos / CantidadDePositivos;
	Promedionegativo = NumerosNegativos / CantidadDeNegativos;
	Diferenciapositivosnegativos = NumerosPositivos - NumerosNegativos;



	













	document.write("numero de positivos es " + NumerosPositivos +"<br>"+"cantidad de positivos"+ CantidadDePositivos+"<br>"+	 "suma de negativos =  "+ NumerosNegativos +"<br>"+ "Cantidad de negativos :"+ CantidadDeNegativos +"<br>"+ "cantidadad de ceros =" + cantidadaddeceros +"<br>"+"promedio de positivos  ="+ Promediopositivo+"<br>"+ "promedio negativos = "+ Promedionegativo+"<br>"+ "cantidad de numeros pares=  " + NumerosPares + "<br>"+ "Diferencia de negativos y positivos =  " + Diferenciapositivosnegativos);



}//FIN DE LA FUNCIÓN
/* 
1-Suma de los negativos. 
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).

*/
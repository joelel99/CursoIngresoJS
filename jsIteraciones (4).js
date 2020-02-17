function mostrar()
{

	var numero;
	
	numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while (numero < 0 || numero >9) {
		numero = parseInt(prompt("Error re ingrese el numero correspondiente"));

	}
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN
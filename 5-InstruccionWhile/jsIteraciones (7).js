function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;
	var seguir='s';
	var promedio;

	do{
		numero= parseInt(prompt("Ingrese un numero" ));
	while (isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero por favor ingrese un dato valido"));
	}
	acumulador = acumulador + numero;
	
	contador = contador + 1;

	seguir = prompt("Quiere ingresar otro numero");
	}while (seguir == 's');
	
	promedio = acumulador / contador;
		
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value;

}//FIN DE LA FUNCIÓN
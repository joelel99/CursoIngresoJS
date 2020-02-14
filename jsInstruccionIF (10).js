function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var nota;
var maximo = 10;
var minimo = 1;

nota =Math.floor(Math.random()*((maximo+ 1) - minimo)+ minimo);

if ( nota <4) {
	alert ("vamos la proxima se puede nota: " + nota);
}else if (nota <9) {
	alert("Exelente . Nota: " + nota);
}else{
	alert("Aprobo . Nota: "+ nota);
}
// acordarse que se usa siempre Math con M mayuscula y el else se cierra con {}

}//FIN DE LA FUNCIÓN
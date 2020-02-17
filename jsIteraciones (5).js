function mostrar()
{

var sexo;
 
sexo  = prompt("ingrese f ó m .").toLowerCase();

while (sexo !="f" && sexo !="m") {
    sexo = prompt("Error reingrese su sexo correctamente").toLowerCase();
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
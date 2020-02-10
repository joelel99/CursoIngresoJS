function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

/*if(edad >=13 && edad <18 ){
    alert("Eres un adolcecente");
}*/
if (!(edad < 13 || edad >17 )) {
    alert("Eres un adolecente");
}

}//FIN DE LA FUNCIÓN
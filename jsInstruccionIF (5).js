function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

  /*  if (!(edad <= 13 && edad > 17)) {
        alert ("no es adolecente");
    }*/
if (edad >13 || edad <18) {
    alert("no es adolecente");
}

}//FIN DE LA FUNCIÓN
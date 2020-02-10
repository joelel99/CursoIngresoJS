function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad >=18) {
    alert("es mayor");
}else{
    if (edad >= 13 && edad <17) {
        alert("Es adolecente");
    }else{
        alert("es menor de edad");
    }
}



}//FIN DE LA FUNCIÓN
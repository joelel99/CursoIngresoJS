/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var restfinal;

    sueldo = document.getElementById("importe").value;

    sueldo = parseInt(sueldo);
    
    aumento = sueldo * 10 / 100;

    restfinal = sueldo - aumento;

    document.getElementById("resultado").value = restfinal;


}

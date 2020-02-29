function mostrar(){

    var numero;
    var letra;
    var contadordepares = 0;
    var contadordenegativos = 0;


    do{
        numero = parseInt(prompt("Ingrese un numero entre -100 o 100"));
        while(numero < -100 || numero >100 || isNaN(numero)){
            parseInt(prompt("Ponga un numero valido.Ingrese un numero entre -100 o 100"));
        }
        letra = prompt("Ingrese una letra");
        while(letra != ""){
            prompt("Error .Ingrese una letra nuevamente ");
        }   

    respuesta = prompt("Quiere ingresar otro valor ? ");
    }while(respuesta.toLowerCase() == "si");

}

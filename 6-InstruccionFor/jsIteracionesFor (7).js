function mostrar()
{

    var numero;
    var cantidaddiv = 0;

    numero = parseInt(prompt("Ingrese un numero"));
    while(isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero . Ingrese otro numero"));
    }
    for(var i = 1; i <= numero ;i++){
        if(numero % i == 0 ){
            console.log(i);
            cantidaddiv++;
        }
    }
    console.log("numero divisores encontrados" + cantidaddiv);


}//FIN DE LA FUNCIÓN
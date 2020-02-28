function mostrar()
{
var numero;
var contadorPares = 0;
numero = parseInt(prompt("Ingrese un numero"));

while(isNaN(numero)){
    numero = parseInt(prompt("eso no es un numero ingrese un numero nuevamente"));
}
for(var i = 1; i <= numero ; i++){
    if(i % 2 == 0){
        console.log(i);
        contadorPares++;
    }
}
console.log("los pares encotrados son : " + contadorPares);
}//FIN DE LA FUNCIÓN
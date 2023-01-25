
/* 
    Utilizando un bucle, mostrar la suma y la media de 
    los números instroducidos, hasta introducir un número
    negativo y ahí mostrar el resultado

*/



let suma = 0;
let contador = 0;
let numero;

do {
    numero = parseInt(prompt('Introduce un número, para parar la ejecución mete un negativo', 0));

    if(isNaN(numero)) {
        numero = 0;
    }else if(numero >= 0) {
        suma += numero;
        

        contador ++;

    }

} while (numero >= 0);

alert("la suma de los números es: " + suma);
alert("la media de los números es: " + ( suma / contador ));



































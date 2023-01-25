'use strict'


/*
    Mostrar todos los números impares que hay entre dos números
    introducidos por el usuario
*/

let num1 = parseInt(prompt("Introduce el primer número", 0));
let num2 = parseInt(prompt("Introduce el segundo número", 0));


document.write(`<h1>Números impares entre ${num1} y ${num2}</h1>`);

while(num1 < num2) {

    num1++;

    if(num1%2 != 0) {
        document.write(`<b>${num1}</b><br>`)
    }

} 




























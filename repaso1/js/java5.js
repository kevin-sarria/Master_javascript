'use strict'


/* 
    Muestre todos los números divisores de un número introducido
    dentro de un prompt
*/


let num = parseInt(prompt("Introduce un número", 1));

for( let i = 1; i <= num; i++ ) {

    if(num%i == 0) {
        document.write(`Divisor: ${i}<br>`);
    }
    
}



































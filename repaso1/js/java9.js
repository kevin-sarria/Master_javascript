'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto
// de instrucciones

function calculadora(num1, num2, mostrar = false) {
    if(mostrar == false) {
        console.log('Bienvenido a la calculadora');
        console.log('Suma: ' + (num1 + num2));
        console.log('Resta: ' + (num1 - num2));
        console.log('Multiplicación: ' + (num1 * num2));
        console.log('Division: ' + (num1 / num2));
        console.log('---------------------------');
    } else {
        document.write('Bienvenido a la calculadora' + '<br/>');
        document.write('Suma: ' + (num1 + num2) + '<br/>');
        document.write('Resta: ' + (num1 - num2) + '<br/>');
        document.write('Multiplicación: ' + (num1 * num2) + '<br/>');
        document.write('Division: ' + (num1 / num2) + '<br/>');
        document.write('---------------------------');
    }
}

calculadora(2, 5);
calculadora(3, 6, true);






















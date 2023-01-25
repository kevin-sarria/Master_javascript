'use strict'


/*
    Programa que nos pida dos números y que nos diga cual
    es mayor, cual es menor o si son iguales

    PLUS: Si los números no son números o son menores o iguales
    a cero, nos lo vuelva a pedir
*/ 


let num1 = parseInt(prompt("Digite el primer número que desea comparar", 0));
let num2 = parseInt(prompt("Digite el segundo número que desea comparar", 0));

// Validación While

while( num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {

    num1 = parseInt(prompt("Digite el primer número que desea comparar", 0));
    num2 = parseInt(prompt("Digite el segundo número que desea comparar", 0));

}



// Validación IF


if(num1 > num2) {
    alert(`El número ${num1} es mayor que el número ${num2}`);
}else if(num1 < num2) {
    alert(`El número ${num1} es menor que el número ${num2}`);
} else if(num1 == num2) {
    alert("Los numeros son iguales");
}

















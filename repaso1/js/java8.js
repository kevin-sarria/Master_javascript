'use strict'

/*
    Calculadora:
        - Pida dos números por pantalla
        - Si metemos uno mal que nos los vuelva a pedir
        - En el cuerpo de la pagina, en una alerta y por consola
          El resultado de sumar, restar, multiplicar y dividir.
*/



let num1 = parseInt(prompt("Digite el primer número", 0));
let num2 = parseInt(prompt("Digite el segundo número", 0));


while(isNaN(num1) || isNaN(num2) || num1<0 && num2<0 ) {
    num1 = parseInt(prompt("Digite el primer número", 0));
    num2 = parseInt(prompt("Digite el segundo número", 0));
    
}

let resultado = `La suma es: ${num1+num2} <br>` + 
                `La resta es: ${num1-num2} <br>` +
                `La multiplicación es: ${num1*num2} <br>` +
                `La división es: ${num1/num2}`



let resultadoCMD = `La suma es: ${num1+num2} \n` + 
                `La resta es: ${num1-num2} \n` +
                `La multiplicación es: ${num1*num2} \n` +
                `La división es: ${num1/num2}`


document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);






























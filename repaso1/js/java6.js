'use strict'



/* 
    Que nos diga si un número es par o impar
    1. Ventana Prompt
    2. Si no es valido que nos pida denuevo el número

*/


let num = parseInt(prompt("Digite un número", 0));

document.write("<h1>Resultado</h1><br>");

while(num <= 0 || isNaN(num)) {
    num = parseInt(prompt("Digite un número", 0));
}

if(num/2 == 0) {
    document.write(`<p>El número ${num} es par</p>`);
}else {
    document.write(`<p>El número ${num} es impar</p>`);
}


























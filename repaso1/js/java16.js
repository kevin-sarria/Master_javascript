'use strict'

// Arrays, Arreglos, Matrices

let nombre = "Kevin Sarria";
let nombres = ["Kevin Sarria", "Camilo Bravo", "Manolo Garcia", "Jose Martín", 52, true]

let lenguajes  = new Array("Php", "Js", "Go", "Java");

// Arrays avanzados

// let elemento = parseInt(prompt("Que elemento del array quieres??", 0));

// if(elemento >= nombres.length || elemento <= -1 ) {
//     alert("Introduce un numero menor a " + nombres.length + " y mayor a 0");
// }else {
//     alert("El usuario seleccionado es: " + nombres[elemento]);
// }


document.write("<h1>Lenguajes de programación del 2018</h1>");

document.write("<ul>");
/*
for( let i = 0; i <ul lenguajes.length; i++) {
    document.write(" <li>" + lenguajes[i] + "</li>");
}

*/

lenguajes.forEach((elemento, index) => {
    document.write(" <li>" + index + " - " + elemento + "</li>");
})



document.write("</ul>");











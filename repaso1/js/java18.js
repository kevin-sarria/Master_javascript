'use strict'

/*
    1. Pida 6 números por pantalla y los meta en un array
    2. Mostrar el array entero (todos sus elementos en el cuerpo de la pagina y en la consola)
    3. Ordenarlo y mostrarlo
    4. invertir su orden y mostrarlo
    5. mostrar cuantos elementos tiene el array
    6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/




// let numeros = new Array(6);


function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li><br/>");
    });
    document.write("</ul>");

}


// Pedir 6 números
let numeros = [];


for (let i = 0; i <= 5; i++) {
    // numeros[i] = parseInt(prompt("Introduce un número", 0));
    numeros.push(parseInt(prompt("Introduce un número", 0)));


}

// Mostrar en el cuerpo de la pagina
mostrarArray();

// Mostrar array en consola 
console.log(numeros);

// Ordenar y mostrar

numeros.sort( function(a, b) {return a - b} );
mostrarArray(numeros, "ordenado");


// Invertir y mostrar

numeros.reverse();
mostrarArray(numeros, "revertido");

// Contar elementos
document.write("<h1>El array tiene: " + numeros.length + " elementos</h1>");

// Busqueda

let busqueda = parseInt(prompt("Busca un elemento", 0));

let posicion = numeros.findIndex( numero => numero == busqueda );

if(posicion && posicion != -1) {
    document.write("<hr><h1>ENCONTRADO....</h1></hr>");
document.write("<h1>Posicion de la busqueda: " + posicion + "</h1>");
}else {
    document.write("<hr><h1>NO ENCONTRADO....</h1></hr>");
}














/* let num1, num2, num3, num4, num5, num6;

num1 = prompt("por favor ingrese el primer número")
num2 = prompt("por favor ingrese el segundo número")
num3 = prompt("por favor ingrese el tercer número")
num4 = prompt("por favor ingrese el cuarto número")
num5 = prompt("por favor ingrese el quinto número")
num6 = prompt("por favor ingrese el sexto número")

let numeros = [num1, num2, num3, num4, num5, num6];



document.write("Números ordenados: " + numeros.sort() + "<br>");

console.log(numeros.sort());

document.write("Números desordenados: " + numeros.reverse() + "<br>");

document.write("Total números: " + numeros.length + "<br>");

let buscar = prompt("Ingresa el número que deseas buscar...")

document.write("Número buscado: " + numeros.indexOf(buscar) +  "- Esta es en la posición del array en la que se encuentra" +"<br>");

*/




















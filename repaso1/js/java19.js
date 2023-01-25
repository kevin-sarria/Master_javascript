'use strict'


// DOM - Document Object Model


// Conseguir elementos con un ID concreto

let caja = document.querySelector(".caja");

caja.innerHTML = "hola"

caja.style.background = "red";

console.log(caja);


// Conseguir elementos por su etiqueta

let todosLosDivs = document.getElementsByTagName('div');
let caja2 = todosLosDivs[1].textContent='hola';
console.log(todosLosDivs);

















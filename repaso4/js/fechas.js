'use strict'

let fecha = new Date();

let año = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();


let textoHora = ` El año es: ${año},
                El mes es: ${mes} 
                y El dia es ${dia}`;

document.write(textoHora);

console.log(fecha);





















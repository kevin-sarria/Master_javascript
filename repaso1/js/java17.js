'use strict'


let categorias = ['Acción', 'Terror', 'Comedia'];
let peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

let lenguajes  = new Array("Php", "Js", "Go", "Java");

// peliculas.reverse();

// console.log(peliculas);



let cine  = [categorias, peliculas];

/*
let añadir;

do{
    
    añadir = prompt("Añade una nueva pelicula: ");
    peliculas.push(añadir);
    
    
}while(añadir != "ACABAR")
*/


let indice = peliculas.indexOf('Gran torino');

if(indice > -1) {
    peliculas.splice(indice, 1);
}


let peliculas_string  = peliculas.join();

let cadena = "texto1, texto2, texto3";

let cadena_array = cadena.split(", ")

console.log(cadena_array);

// console.log(peliculas);


// console.log(peliculas_string);



/* 
for( let lenguaje in lenguajes ) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
*/


// Busquedas

let precios = [ 10, 100, 1000, 10000 ];


// let busqueda = lenguajes.findIndex( lenguaje => lenguaje == "Go");
let busqueda = precios.some( precios => precios < 10);

document.write(busqueda);


















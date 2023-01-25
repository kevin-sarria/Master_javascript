'use strict'

// Funciones anonimas
// Es una función que no tiene nombre


let pelicula = function(nombre) {
    return "La pelicula es: " + nombre;
}

function sumame(num1, num2, sumaYmuestra, SumaPorDos) {
    let sumar = num1 + num2;

    sumaYmuestra(sumar);

    SumaPorDos(sumar);

    return sumar;

}

sumame(

    4 , 7,
    dato => console.log("La suma es: " + dato),

    dato => console.log("La suma por dos es: " + (dato*2))
    

);





















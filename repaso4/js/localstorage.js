'use strict'




// Localstorage

// Coimprobar disponibilidad de LocalStorage

if(typeof(Storage)) {
    console.log("LocalStorage disponible");
}else {
    console.log("Incompatible con LocalStorage");
}



// Guardar Datos
localStorage.setItem("titulo","Curso de Symfony de Victor Robles");


// Recuperar elemento
console.log(localStorage.getItem("titulo"));

let texto = document.querySelector('.peliculas').innerHTML=localStorage.getItem("titulo");

document.write(texto);

// Guardar objetos
let usuario = {
    nombre: "Victor Robles",
    email: "victor@victor.com",
    web: "victorroblesweb.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));


// Recuperar objeto
let userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector('.peliculas').append(" Web: " + userjs.web);;

localStorage.clear();















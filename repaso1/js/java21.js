'use strict'

let boton = document.querySelector('#boton');

let cajaTexto = document.querySelector('.textoSaludo');



function alertaSaludo() {

     let texto = cajaTexto.textContent;

    if( texto == '¡Hola, soy una caja!' ) {
        cajaTexto.textContent = 'Hola';
    }else if( texto == 'Hola' ) {
        cajaTexto.textContent = 'Chao';
    } else {
        cajaTexto.textContent = '¡Hola, soy una caja!';
    }
}


boton.addEventListener( "click", function() {
    alertaSaludo();
} );


boton.addEventListener('mouseover', function() {
    boton.style.background = "red";
});

boton.addEventListener('mouseout', function() {
    boton.style.background = "none";
    boton.style.borderRadius = "10px";
});




// Focus
let input = document.querySelector('#campo_nombre');

input.addEventListener('focus', function() {
    console.log("Estas dentro del input");
});

// Blur
input.addEventListener('blur', function() {
    console.log("Estas fuera del input");
});

// Keydown

input.addEventListener('keydown', function(event) {
    console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));
});


// Keypress

input.addEventListener('keypress', function(event) {
    console.log("Tecla presionada ", String.fromCharCode(event.keyCode));
});




// Keyup
input.addEventListener('keyup', function(event) {
    console.log("Tecla soltada", String.fromCharCode(event.keyCode));
});
















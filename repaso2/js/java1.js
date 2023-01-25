'use strict'


// Trabajar dentro del window.addEventListener

window.addEventListener("load", () => {

    console.log("DOM Cargado");

    let formulario = document.querySelector('#formulario');

    let box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    formulario.addEventListener("submit", () => {
        console.log("Evento submit capturado");
        
        let nombre = document.querySelector('#nombre').value;
        let apellidos = document.querySelector('#apellidos').value;
        let edad = parseInt(document.querySelector('#edad').value);

        if( nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre) ) {
            alert('El nombre no es valido');
            return false;
        }

        if( apellidos.trim() == null || apellidos.trim().length == 0 || !isNaN(apellidos)) {
            alert('Los apellidos no son validos');
            return false;
        }

        if( edad == null || edad <= 0 || isNaN(edad) ) {
            alert('La edad no es valida');
            return false;
        }


        box_dashed.style.display = 'block';

        let p_nombre = document.querySelector('#p_nombre span');
        let p_apellidos = document.querySelector('#p_apellidos span');
        let p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;



        /*
        let informacion = [nombre, apellidos, edad];

        let indice;

        for( indice in  informacion) {
            let parrafo = document.createElement("p");
            parrafo.append(informacion[indice]);
            box_dashed.append(parrafo);
        }
        */
        
        
        


        //document.write(`Nombre: ${nombre.value}, Apellidos: ${apellidos.value}, Edad: ${edad.value}`);
        


    });



















});















































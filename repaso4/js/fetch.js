'use strict'

// Fecth (AJAX) y peticiones a servicios / Api rest

let divUsuarios = document.querySelector("#usuarios");
let divJanet = document.querySelector("#janet");
let divProfesor = document.querySelector("#profesor");




getUsuarios()
    .then( data => data.json())
    .then( users => {
       listadoUsuarios(users.data);
       return getInfo();
       
    })
    .then( data => {
        
        divProfesor.innerHTML = data;

        return getJanet();
    })
    .then( data => data.json())
    .then( user => {
        mostrarJanet(user.data);
    })
    .catch(error => {
        console.log(error);
    });
   


function getUsuarios() {
    return fetch('https://reqres.in/api/users') 
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2') 
}

function getInfo() {
    let profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        web: 'https://victorroblesweb.es'
    };


    return new Promise((resolve, reject) => {

        let profesor_string = "";

        setTimeout(function() {
            profesor_string = JSON.stringify(profesor);

            if( typeof profesor_string != 'string' || profesor_string == '') return reject('Error');


            return resolve(profesor_string);


        }, 3000);

        
    });
}


function listadoUsuarios(usuarios) {
    usuarios.map( (user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + "." + " " + user.first_name + " " + user.last_name;

        divUsuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';

    });
};

function mostrarJanet(user) {
    
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');


        nombre.innerHTML =" " + user.first_name + " " + user.last_name;

        divJanet.appendChild(nombre);

        document.querySelector("#janet .loading").style.display = 'none';

        avatar.src = user.avatar;
        avatar.width = '100';

        divJanet.appendChild(avatar);


};































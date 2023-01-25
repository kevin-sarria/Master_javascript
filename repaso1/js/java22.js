'use strict'


window.addEventListener('load', () => {

    // Timers

    function intervalo() {
        let tiempo = setInterval(() => {
        
        

            let encabezado = document.querySelector("h1");
    
            //console.log(encabezado);
    
            if( encabezado.style.fontSize == "50px" ) {
                encabezado.style.fontSize = "20px";
            }else {
                encabezado.style.fontSize = "50px";
            }
    
        }, 1000);

        return tiempo;

    }
    
    var tiempo = intervalo();

    let stop = document.querySelector('#stop');

    stop.addEventListener("click", () => {
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
        
    });

    let start = document.querySelector('#start');

    start.addEventListener("click", () => {
        alert("Iniciaste el bucle");
        intervalo();
    });

})











































$(document).ready(function () {
    // Reloj

    if(window.location.href.indexOf('reloj') > -1 ) {

        window.setInterval(
          () => {
        
            let reloj = moment().format("hh:mm:ss");
            let div_reloj = $('#reloj');
            div_reloj.html( "<p class='cuadro_reloj'>"  + reloj + "</p>");
          }, 1000);
        
      }
});
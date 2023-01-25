$(document).ready(function(){
    // Login Falso
    $('#login form').submit(function (e) { 
          
          
        let nombre = $('#form-name').val();

        localStorage.setItem("nombre", nombre);

      });


      let for_name = localStorage.getItem("nombre");

      if(for_name != null && for_name != "undefined") {

        let about_parrafo = $('#about p')

        about_parrafo.html("<hr><br><strong> Bienvenido/a, " + for_name + "</strong>");
        about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesion</a>");

        $('#login').hide();

        $('#logout').click( () => {
          localStorage.clear();
          location.reload();
        })

      }
      
});
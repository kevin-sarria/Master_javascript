$(document).ready(function () {
    // Validación
    if(window.location.href.indexOf('contacto') > -1 ) {
        
        $("#fecha").datepicker({
          dateFormat: 'dd-mm-yy'
        });
        
          $.validate({
          lang: 'es',
          errorMessagePosition: 'top',
          scrollToTopOnError: true
        });
      }

});
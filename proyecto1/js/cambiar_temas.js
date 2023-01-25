
$(document).ready(function() {


    // Cambiar Temas

let theme = $('#theme');

$('#to-green').click( () => { 
  theme.attr("href", "css/green.css");
});

$('#to-red').click( () => { 
  theme.attr("href", "css/red.css");
});


$('#to-blue').click( () => { 
  theme.attr("href", "css/blue.css");
});


// Scroll arriba de la web
$('.subir').click( (e) => { 
 e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 700);
  return false
});





}
)








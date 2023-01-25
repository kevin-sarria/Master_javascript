
$(document).ready(function(){
  console.log("jQuery y pagina web cargados...");  

// Selector de ID

let rojo = $("#rojo").css("background", "red");
let amarillo = $("#amarillo").css("background", "yellow");
let verde = $("#verde").css("background", "green");

// Selectores de clase

let zebra = $(".zebra").css("padding", "5px");

$('.sin_borde').click(function() {
  $(this).addClass('zebra');
});

// Selectores de etiqueta

let parrafos = $('p').css("cursor", "pointer");

parrafos.click(function() { 
  var vari = $(this);
  if(!vari.hasClass('grande')) {
    vari.addClass('grande');
  }else {
    vari.removeClass('grande');
  }
 });

// Selectores por atributo

 $('[title="Google"]').css("background", "gray");
 $('[title="Facebook"]').css("background", "blue");


// Otros

$('p, a').addClass('margen-superior');

let busqueda =  $('#caja.resaltado').parent().find('[title="Google"]');

console.log(busqueda);

});










































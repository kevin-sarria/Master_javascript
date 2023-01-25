
$(document).ready(function() {



    // Mover elemento por la pagina
    let divs = $('.elemento');
    
    divs.draggable();

    divs.resizable();




    // Seleccionar y ordenar elementos
    let juegos = $('.juegos');
    //juegos.selectable(); 
    juegos.sortable({
        update: function(event , ui) {
        console.log(event, ui);
    }});



    // Drop
    let area = $('#area');
    let movido = $('#elemento-movido');
    area.droppable({
        drop: function() {
        console.log('Has soltado algo dentro del area');
    }});
    movido.draggable();

    // Efectos
    $('#mostrar').click(function() { 
        $('.caja-efectos').toggle("fade", "slow");
        
    });

    // Tooltip
    //$(document).tooltip();



    // Dialog
    $("#lanzar").click(function() {
        $("#popup").dialog();
    });
    
    // Datepicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();






});























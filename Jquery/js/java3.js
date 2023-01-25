
$(document).ready(function() { 

    reloadLinks();


    let boton = $('#add_button');
    let input = $('#enlace');
    let lista = $('#menu');

    boton.click(function() { 
        let enlace = input.val();
        lista.prepend( '<li><a href="' + input.val() + '"></a></li>');
        input.val('');
        reloadLinks();

    });


    function reloadLinks() {
        $('a').each(function() {
            let that = $(this);
            let enlace = that.attr('href');
            that.attr('target', 'blank');
            that.text(enlace);
        })
    }







});



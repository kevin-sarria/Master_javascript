
$(document).ready(function () { 
    
    let btn_mostrar = $('#mostrar');
    let btn_ocultar = $('#ocultar');
    let btn_TEU = $('#todoenuno')
    let btn_animame = $('#animame');
    let caja = $('#caja');


    //caja.hide();
    btn_ocultar.hide();

    btn_mostrar.click(function() { 
        $(this).hide();
        btn_ocultar.show();
        caja.fadeIn('slow');
    });

    btn_ocultar.click(function() { 
        $(this).hide();
        btn_mostrar.show();
        caja.fadeOut('slow');
    });


    btn_TEU.click(function() {
        caja.fadeToggle('slow');
    });


    btn_animame.click(function() {
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '0%'
        }, 'slow');
    });





 });





























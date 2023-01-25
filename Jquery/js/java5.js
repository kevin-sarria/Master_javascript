

$(document).ready(function() {

    let datos = $('#datos');

    // Load
    //datos.load("https://reqres.in/api/users/2");

    // Get y Post
    $.get("https://reqres.in/api/users", {page: 2},
        function (response) {
         response.data.forEach((element, index) => {
            datos.append("<p>" + element.first_name+"</p>")
         });  
        });









    $('#formulario').submit(function(e) {

        e.preventDefault();

        let usuario = {
            nombre: $('#name').val(),
            web: $('#web').val()
        };

        console.log(usuario);


        /*$.post($(this).attr("action"), usuario, function(response) {
        console.log(response);
        }).done(function() {
            alert('Usuario añadido correctamente');
        });*/ 

        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            success: function (response) {
                alert("Usuario añadido correctamente");
                console.log(response);
            },
            error: function() { 
                alert("Ha ocurrido un error");
            },
            timeout: 1000
        });


    return false;

     });




});





















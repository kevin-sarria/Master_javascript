

$(document).ready(function () {


      if(window.location.href.indexOf('index') > -1 ) {
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
      }
        

        // Información insertada por post a la web
        if(window.location.href.indexOf('index') > -1 ) {
        let post = [
          {
            title: 'Prueba titulo 1',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed cupiditate nihil illum culpa laborum, temporibus quis atque natus earum commodi sequi quia perspiciatis aspernatur cum repellat id dignissimos harum minima sapiente. Minus, magnam? Et quod deleniti labore iure exercitationem, officia sapiente doloremque, quae perspiciatis nobis odio. Quibusdam, omnis magnam vitae eaque sapiente assumenda perspiciatis veritatis officiis, aspernatur dolor itaque nam, optio quidem distinctio vero pariatur sit magni numquam ipsum cum odit iste? Maxime necessitatibus labore est rem, iste minima?'
          },
          {
            title: 'Prueba titulo 2',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed cupiditate nihil illum culpa laborum, temporibus quis atque natus earum commodi sequi quia perspiciatis aspernatur cum repellat id dignissimos harum minima sapiente. Minus, magnam? Et quod deleniti labore iure exercitationem, officia sapiente doloremque, quae perspiciatis nobis odio. Quibusdam, omnis magnam vitae eaque sapiente assumenda perspiciatis veritatis officiis, aspernatur dolor itaque nam, optio quidem distinctio vero pariatur sit magni numquam ipsum cum odit iste? Maxime necessitatibus labore est rem, iste minima?'
          },
          {
            title: 'Prueba titulo 3',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed cupiditate nihil illum culpa laborum, temporibus quis atque natus earum commodi sequi quia perspiciatis aspernatur cum repellat id dignissimos harum minima sapiente. Minus, magnam? Et quod deleniti labore iure exercitationem, officia sapiente doloremque, quae perspiciatis nobis odio. Quibusdam, omnis magnam vitae eaque sapiente assumenda perspiciatis veritatis officiis, aspernatur dolor itaque nam, optio quidem distinctio vero pariatur sit magni numquam ipsum cum odit iste? Maxime necessitatibus labore est rem, iste minima?'
          },
          {
            title: 'Prueba titulo 4',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed cupiditate nihil illum culpa laborum, temporibus quis atque natus earum commodi sequi quia perspiciatis aspernatur cum repellat id dignissimos harum minima sapiente. Minus, magnam? Et quod deleniti labore iure exercitationem, officia sapiente doloremque, quae perspiciatis nobis odio. Quibusdam, omnis magnam vitae eaque sapiente assumenda perspiciatis veritatis officiis, aspernatur dolor itaque nam, optio quidem distinctio vero pariatur sit magni numquam ipsum cum odit iste? Maxime necessitatibus labore est rem, iste minima?'
          },
        ];


        // Ciclo For para recorrer los objetos e imprimirlos en pantalla

        post.forEach((item, index) => {
          let post = `
          <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
              ${item.content}
          </p>
          <a href="#" class="button-more">Leer más</a>
          </article>
      `;

      $("#posts").append(post);

        });
      }


});












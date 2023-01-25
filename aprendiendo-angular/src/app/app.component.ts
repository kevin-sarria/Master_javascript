import { Component } from '@angular/core';
import { configuracion } from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'un nuevo curso de Angular';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config;


  constructor() {
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config = configuracion;
  }



  ocultarVideojuegos() {
    if(this.mostrar_videojuegos == true) {
      this.mostrar_videojuegos = false;
    }else {
      this.mostrar_videojuegos = true;
    }
    
  }

}

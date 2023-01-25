import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: any;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() { 
    this.autor = {
      nombre: "Kevin Sarria",
      website: "kevinsarriaweb.com",
      youtube: "Estaduardo Games"
    }
   }

  ngOnInit(): void {

    $(() =>{
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: this.anchura
      });
    });

  }

  lanzar(event: any) {
    this.conseguirAutor.emit(this.autor);
  }


}

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: any;
  public anchuraToSlider: any;
  public autor: any;

  @ViewChild('textos', {static: true}) textos:any;

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.textos.nativeElement.textContent);
  }


  cargarSlider(){     
    this.anchuraToSlider = null;
    setTimeout(() => {       
      this.anchuraToSlider = this.widthSlider;
    }, 10);

  }


  getAutor(event: any) {
    this.autor = event;
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email: string;


  constructor() { 
    this.title = "Kevin Sarria";
    this.subtitle = "Desarrrollador Web Junior";
    this.email = "camilo.bravo.2050@gmail.com";
   }

  ngOnInit(): void {
  }

}

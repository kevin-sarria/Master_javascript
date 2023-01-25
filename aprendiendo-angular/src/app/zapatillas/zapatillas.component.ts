import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {
    public titulo:string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: String;
    public mi_marca: String;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.zapatillas = [];
        this.mi_marca = '';
        this.marcas = new Array();
        this.color = 'orange';
        
    }


    ngOnInit() {
        
        this.zapatillas = this._zapatillaService.getZapatillas();
        
        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((Zapatilla, index) => {
            
            if( this.marcas.indexOf(Zapatilla.marca) < 0 ) {
                this.marcas.push(Zapatilla.marca);
            }
            
            console.log(index);
        });

        console.log(this.marcas);
    }



    getMarca() {  
        alert(this.mi_marca);
    }


    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index:any) {
        this.marcas.splice(index, 1);
    }

    onBlur() {
        console.log('Has salido del input');
    }

    mostrarPalabra() {
        alert(this.mi_marca);
    }

}


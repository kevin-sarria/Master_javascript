
import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaService {
    
    public zapatillas: Array<Zapatilla>;
    
    
    
    constructor() {
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80, 'Reebook', 'Blanco', true),
            new Zapatilla('Nike esentials', 120, 'Nike', 'Negro', true),        
            new Zapatilla('Addidas sports', 100, 'Addidas', 'Gris', false),
            new Zapatilla('Addidas Classic', 120, 'Addidas', 'Gris', false)
        ];
    
    }


    getTexto() {
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }


}












import { Pipe, PipeTransform } from '@angular/core';


@Pipe({

    name: 'calculadora'

})
export class CalculadoraPipe implements PipeTransform{
    
    
    // dato | calculadora: otroDato
    // param1               param2
    transform(value: any, value_two: any) {
        let operaciones = `
        Suma: ${value + value_two} \n
        Resta: ${value - value_two} \n
        Multiplicacion: ${value * value_two} \n
        Division: ${value / value_two} \n
        `;


        return operaciones;
    }

}





















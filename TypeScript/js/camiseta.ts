

// Interface

interface CamisetaBase{

    setColor(color);
    getColor();
}

// Decorador

function estampar(logo: string) {
    return function(target: Function) {
        target.prototype.estampacion = function ():void {
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }

    }
}




// Clase ( Molde del objeto )
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

    // Propiedades ( caracteristicas del objeto )
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;


    // Métodos  ( funciones o acciones del objeto )
    constructor(color, modelo, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }



    public setColor(color) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }

}

// Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;


    setCapucha(capucha: boolean) {
        this.capucha =  capucha;
    }

    getCapucha():boolean {
        return this.capucha;
    }


}


let camiseta = new Camiseta("Rojo", "Manga Larga", "XXL", 200000);
camiseta.estampacion();



let sudadera_nike = new Sudadera("Verde", "Sin mangas", "L", 300000);
sudadera_nike.setCapucha(false);
sudadera_nike.setColor("Gris");



console.log(camiseta, sudadera_nike);




class Persona{

    public name: string;
    public dineroDisponible: number;
  
    constructor(name: string, dineroDisponible: number) {
      this.name = name;
      this.dineroDisponible = dineroDisponible;
    }

    public getInfo(){
        console.log("Nombre: " +  this.name + " / Dinero disponible: " + this.dineroDisponible)
    }

}

enum TipoCasa {
    CHALET = "CHALET",
    PISO = "PISO"
}

class Casa{
    public precio: number
    public tipo: TipoCasa

    constructor(precio: number, tipo: TipoCasa) {
        this.precio = precio;
        this.tipo = tipo;
    }

    public comprar (compradores: Persona[]){

        let sumaCompradores: number = 0;

        for(let i=0; i<compradores.length; i++){
            
            sumaCompradores += compradores[i].dineroDisponible
        }


        if(sumaCompradores >= this.precio){

            for(let i=0; i<compradores.length; i++){

                compradores[i].dineroDisponible -= this.precio / (compradores.length)
            }
            
            console.log("Casa comprada!")
    
        }else{
            console.log("ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa.")
        }
    }

}

const juan: Persona = new Persona("Juan", 100000);
const maria: Persona = new Persona("María", 120000);
const paula: Persona = new Persona("Paula", 30000);
const chalet1: Casa = new Casa(80000, TipoCasa.CHALET);
const piso1: Casa = new Casa(60000, TipoCasa.PISO);

// Situación de cada uno antes de comprar
juan.getInfo();
maria.getInfo();
paula.getInfo();

// Transaccioens
chalet1.comprar([juan, maria]); // Debería comprar el chalet
piso1.comprar([paula]); // Debería fallar, no tiene dinero suficiente

// Situación de cada uno después de comprar
juan.getInfo();
maria.getInfo();
paula.getInfo();
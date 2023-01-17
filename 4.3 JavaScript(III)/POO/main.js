class Vehiculo {
  constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
  }
  arrancar() {
      console.log("Vehículo arrancado");
  }
}

let vehiculo1 = new Vehiculo("Audi", "A1", 2010);
console.log(vehiculo1.marca); 
vehiculo1.arrancar(); 

class Camion extends Vehiculo {
  constructor(marca, modelo, ano, carga) {
      super(marca, modelo, ano);
      this.carga = carga;
  }
  cargar(peso) {
      console.log('Peso total de cargado: ' + peso);
  }
}

let camion1 = new Camion("Renault", "Kangoo", 1990, 1000);
console.log(camion1.marca); // imprime "Chevrolet"
camion1.arrancar(); 
camion1.cargar(200);
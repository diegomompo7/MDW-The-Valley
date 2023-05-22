interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
  }
  
  class Estudiante implements Persona {
    nombre: string;
    edad: number;
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  }

  // Definimos interfaz
interface Address {
    street: string;
    number: number;
    city: string;
  }
  
  // Utilizamos
  const myAddress: Address = {
    street: "Calle Falsa",
    number: 123,
    city: "Madrid",
  };
  
  // Interfaz anidada
  interface Person {
    name: string;
    phone: number;
    address: Address;
  }
  
  const me: Person = {
    name: "Fran",
    phone: 123123123,
    address: {
      // No siguen el orden de Address -> no pasa nada
      street: "Calle inventada",
      city: "Madrid",
      number: 1,
    },
  };
  
  // Clase
  class Animal {
    public specie: string;
    public legs: number;
    private habitat: string;
  
    constructor(specie: string, legs: number, habitat: string) {
      this.specie = specie;
      this.legs = legs;
      this.habitat = habitat;
  
      console.log("Creado animal!");
    }
  
    getDescription() {
      console.log(`
        Soy un ${this.specie},
        tengo ${this.legs} patas
        y vivo en ${this.habitat}
      `);
    }
  }
  
  const perro = new Animal("Perro", 4, "Mi Casa");
  const pez = new Animal("Pez Payaso", 0, "Pecera");
  perro.getDescription();
  pez.getDescription();
  
  console.log("El perro es de la especie: " + perro.specie);
  // Da error acceder a variables privadas, pero nos deja ejecutarlo
  // console.log("El perro vive en: " + perro.habitat);
  
  // Clases que cumplen interfaces
  interface Automobile {
    wheels: number;
    brand: string;
    model: string;
  }
  
  class Car implements Automobile {
    public wheels: number;
    public brand: string;
    public model: string;
  
    // 4 es valor por defecto
    constructor(brand: string, model: string, wheels: number = 4) {
      this.model = model;
      this.brand = brand;
      this.wheels = wheels;
    }
  }
  
  const coche = new Car("Lexus", "CT200");
  const limusina = new Car("Mayback", "3000", 6);
  console.log("El lexus tiene estas ruedas: " + coche.wheels);
  console.log("La limo tiene estas ruedas: " + limusina.wheels);
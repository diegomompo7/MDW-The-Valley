// Number
let numeroEntero: number = 10;
const numeroDecimal: number = 2.5;
const numeroNegativo: number = -10;

let miVariable = 99;
// Typescript infiere los tipos (deduce)
// miVariable = "No puedo hacer esto";

// String
const miTexto: string = "Hola amigos!";
const miTextoDos: string = "Hola amigos!";
const miTextoTres: string = `Hola amigos ${numeroEntero} !`;

// Boolean
const isSunday: boolean = false;
const isFriday: boolean = true;

// Undefined
// Valores no definidos -> Solo ponemos tipo y definimos depués
let miValor: string;
// miValor -> undefined
miValor = "Ya tengo valor";
// miValor -> string (Ya tengo valor)

// ANY
// Ejemplo de any -> Mala práctica
let pruebaAny: any = 123;
pruebaAny = "Ahora tiene un string";
pruebaAny = true;

// Objetos
const address: object = {
  street: "Calle falsa",
  number: 123,
  isOpen: true,
};

// Array
const coches: string[] = ["Audi", "BMW", "MINI"];
console.log(coches[0]);
console.log(coches[1]);

const notas: number[] = [7, 4, 10, 3];

// Otra forma de definir arrays, menos común
// const ciudades: Array<string> = ["Madrid", "Valencia", "Barcelona"];
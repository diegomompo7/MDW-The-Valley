// Tipo custom listado de valores
type Country = "Spain" | "Portugal" | "Germany";
const myCountry: Country = "Spain";

console.log("Mi pais es: " + myCountry);

enum Direction{
    UP = "ARRIBA",
    DOWN = "ABAJO",
    LEFT = "IZQUIERDA",
    RIGHT = "DERECHA"
}
const myDirection: Direction = Direction.LEFT;
console.log("Mi dirección es: " + myDirection);

// Casteo de tipos
const a: number = 10;
let b: string | number = "5"; // any porque cambiará de string a number
let result: any = a + b;
console.log(result); // 105

// Cast de tipos: pasar de un tipo a otro, en este caso string -> number
b = parseInt(b);
result = a + b;
console.log(result); // 15

// Cast de tipos: pasar de un tipo a otro, en este caso number -> string
b = b.toString();
result = a + b;
console.log(result); // 105

// EJEMPLO DE AS
const miCadena: string = "Hola amigos!";
const miNumero: number = miCadena as unknown as number;
console.log(miNumero);
console.log(typeof miNumero);
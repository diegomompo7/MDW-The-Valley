// length(): Devuelve la longitud de la cadena
let simpson = 'Homer';
console.log(simpson.length)

let message = 'Hola soy Homer';
let simpson2 = 'Lisa'
console.log(message.includes(simpson2));

// repeat(): Devuelve un string con el número de copias que estemos aplicando
console.log(simpson.repeat(2));

// replace(): Sustituye
let movie = "The Simpson"
console.log(movie.replace('Simpson','GodFather'));

// replaceAll(): Sustituye todos los que se encuentre
let message2 = "Hola soy Edu, feliz navidad. Hola soy Edu, feliz navidad."
console.log(message2.replaceAll('Edu','Fran'));

// slice(): Genera un string con la porción que cojamos
console.log(message.slice(2,4));

// split(): Genera un array separando los elementos en función del separador
console.log(message.split(" "));

// chartAt():Devuelve el elemento en la posición que indiquemos empezando desde 0
console.log(simpson.charAt(1));

// toUpperCase(): Devuelve el elemento en mayúsculas
console.log(simpson.toUpperCase());

// toLowerCase(): Devuelve el elemento en minúsculas
console.log(simpson.toLowerCase());

// Trim(): Elimina los espacios iniciales y finales de la cadena
console.log(simpson.trim());

// isNaN(): Determina si el valor no es un número
let seasons = 21;
console.log(isNaN(seasons));

// Number.isInteger(): Determina si el valor es un número entero 
console.log(Number.isInteger(seasons));

// parseInt(): Convierte strings a números enteros o decimales
console.log(parseInt(seasons));

// toString(): Pasa el valor númerico a string
console.log(seasons.toString());

// toString(): Pasa el valor númerico a string
let isFriday = true;
console.log(isFriday.toString());

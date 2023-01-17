let serie = {
  nombre: 'Big Bang',
  genero: 'Comedia',
  capitulo: {
      nombre: 'Piloto',
      numero: 0,
      temporada: 1
  },

}

let { nombre , genero } = serie;

console.log(nombre);
console.log(genero);

let flanders = ['Ned', 'Todd', 'Rod'];
let simpson = ['Homer', 'Bart', 'Lisa'];

let allFamilies = [...flanders, ...simpson];

let simpsonCopy = [...simpson];

let lastSimpson = [...simpson].reverse();

// No se ha modificado
console.log(simpson);
console.log(simpsonCopy);
console.log(lastSimpson);

function suma(a, b, c) {
  return a + b + c;
}

let numeros = [1, 2, 3];
suma(...numeros);

// Strings
let simpson4 = 'HOMER';
let characters = [ ...simpson4 ];
console.log(characters);

// Objetos 1
const simpson2 = { firstName: 'Homer', age: 50 };
const simpson1 = { lastName: 'Simpson', gender: 'M' };

const newSimpson = { ...simpson1, ...simpson2, color: 'yellow' };
console.log(newSimpson);

// Objetos 2 con destructuración
let simpson3 = {
    firstName: 'Homer',
    lastName: 'Simpson',
    age: 50,
    gender: 'M'
}

let { age, ...restOfTheDetails } = simpson3;
console.log(age, restOfTheDetails);
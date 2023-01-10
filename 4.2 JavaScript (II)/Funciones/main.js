console.log("esto es una función");

let valorA = 30;
let valorB = 50;

// Creamos nuestra función
function suma(num1, num2) {
    return num1 + num2;
}

// Utilizamos nuestra función
let resultado = suma(valorA, valorB); // Aquí estamos llamando a nuestra función
console.log(resultado); // Mostramos por consola el resultado

function mostrarEntrada(pelicula, precio) {
    precio = precio || 10;      
    console.log(pelicula + ' ' + precio);
}

mostrarEntrada('Titanic');

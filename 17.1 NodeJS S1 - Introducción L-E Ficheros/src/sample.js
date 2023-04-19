console.log("Esto es una prueba");

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// Manera clásica de pedir datos al usuario node nativo
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Cómo te llamas? ", (name) => {
  console.log(`Hola ${name}`);
  readLine.close();
});

// Ejemplo con librería
const prompt = require("prompt-sync")();
const name = prompt("Cómo te llamas? ");
console.log(`Hola ${name}`);

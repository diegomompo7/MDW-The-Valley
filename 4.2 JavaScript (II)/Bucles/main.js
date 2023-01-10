for (let i = 10; i >= 0; i--){
    console.log(i);
} 

for (let i = 0; i <= 10; i++){
    console.log(7 * i);
} 

let palabra = "Pepito";
let primeraLetraPalabra = palabra[0] 
console.log(primeraLetraPalabra) // Pinta la letra P, en programación se empieza a contar desde el 0

for (let i = 0; i <= palabra.length; i++){
     console.log(palabra[i]);
} 
let futuramaList = ['Blender', 'Fry', 'Leela', 'Zoiberg'];

futuramaList.forEach(
    function(element){
        console.log(element);   
    }
);

for ( let element of futuramaList){
    console.log(element);
}
//Ejemplo con objeto
let naveFuturama = {
    conductor: 'Leela',
    color: 'verde',
    combustible: 'diesel'
}

for (let clave in naveFuturama){
    console.log("La nave de futurama tiene la clave " + clave + " y el valor " + naveFuturama[clave]);
}
for ( let clave in futuramaList){
    console.log("Este personaje de futurama tiene la posición " + clave + " y el valor " + futuramaList[clave]);
}

let n = 0;

while (n <= 3){
    console.log ("La variable n vale: " + n );
    n++;
}
let a = 0;

do {
    console.log ("La variable a vale: " + a );
    a++;
} while (a <= 3);


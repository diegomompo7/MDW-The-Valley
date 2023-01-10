let numerosPremiados = [3, 5, 43, 18, 27];
let listaCompra = ["Manzanas", "Peras", "Carne", "Papel de cocina"];
let varios = [3, "Manzanas", null, 18, true];

let familiaSimpson = ["Homer", "Bart", "Lisa", "Marge", "Maggie"];
let personaje = familiaSimpson[0];
console.log(personaje); //Mostrará por consola a Homer
console.log(familiaSimpson.length); //Mostrará por consola a Homer

for (let i = 0; i < familiaSimpson.length; i++){
    console.log(familiaSimpson[i]);
}

familiaSimpson[1] = "Mou"; //Estamos cambiando a Bart por Mou
console.log(familiaSimpson);

familiaSimpson.pop();
console.log(familiaSimpson); //Mostrará el listado sin Maggie

familiaSimpson.pop();
console.log(familiaSimpson); //Mostrará el listado sin Maggie y sin Marge

familiaSimpson.push("Bola de Nieve");
console.log(familiaSimpson); //Mostrará el listado añadiendo al final a Bola de Nieve

familiaSimpson.push("Ayudante de Santa Claus", "Abe");
console.log(familiaSimpson); //Mostrará el listado añadiendo al final a Ayudante de Santa Claus y a Abe

familiaSimpson.reverse();
console.log(familiaSimpson); //Mostrará el listado al revés

familiaSimpson.shift();
console.log(familiaSimpson); //Desaparaece Homer

familiaSimpson.sort();
console.log(familiaSimpson); // Orden alfabético

familiaSimpson.splice(2,2); // a partir de la posición 2(incluída) quita 2 elementos
console.log(familiaSimpson); // ['Homer', 'Bart', 'Maggie']

familiaSimpson.splice(2,2,'Moe'); // a partir de la posición 2 quita 2 elementos y añade a 'Moe'
console.log(familiaSimpson); // ['Homer', 'Bart', 'Maggie']

let familiaFlanders = [ "Ned", "Todd", "Rod" ];

console.log(familiaSimpson.concat(familiaFlanders));

console.log(familiaSimpson.slice(2,4)); //['Lisa', 'Marge'] (Posición que inicia incluída, posición que para no incluída)

console.log(familiaSimpson.toString()); // 'Homer,Bart,Lisa,Marge,Maggie'

console.log(familiaSimpson.indexOf('Bart')) // 1

console.log(familiaSimpson.includes('Lisa')) // true
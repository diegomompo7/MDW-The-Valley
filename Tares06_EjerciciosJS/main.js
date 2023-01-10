/*
    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentence = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
        return str.replace(/[AaEeIiOoUu]/g, '');
}

console.log(noVowels(sentence));

/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camión";

function middleCharacter(str){
    return str.slice(2,4)
}

console.log(middleCharacter(word));

/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sentence2 = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    //introduce aquí tu código
}

console.log(deleteFirsLast(sentence2));

/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){
    //introduce aquí tu código
}

console.log(sumList(numberList));

/*
    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

function winner(list){
  //introduce aquí tu código
}

console.log(winner(playerList));

/*
¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}
*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

function counter(list1, list2){
    // introduce aquí tu código
}

console.log(counter(rebano1,rebano2));
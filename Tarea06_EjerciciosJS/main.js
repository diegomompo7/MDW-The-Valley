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
    let media = str.length / 2
    if((str.length) % 2 == 0){
        return str.slice(media-1, media+1)
    }
    else if((str.length) % 2 != 0){
        return str.slice(media.toFixed(0)-1, media.toFixed(0))
    }
}

console.log(middleCharacter(word));

/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sentence2 = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    return str.slice(1,-1)
}

console.log(deleteFirsLast(sentence2));

/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){
    let total = 0;
    for(let i= 0; i<=list.length-1; i++){
        total += list[i]
    }
    return total
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
  list.sort((a, b) => b.score - a.score);
  return list[0]
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
    let listTotal = list1.concat(list2)
    let nOvejas = 0
    let nVacas = 0
    for(let i=0; i<=listTotal.length-1; i++){
        if(listTotal[i] == 'o'){
            nOvejas += 1;
        }
        else if(listTotal[i] == 'v'){
            nVacas += 1;
        }
    }

    return nOvejas + ' ' + nVacas

}

console.log(counter(rebano1,rebano2));
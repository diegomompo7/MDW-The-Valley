let a = 3;
let b = 10;

let resultadoResta = b - a;
let resultadoDivisión = a / b;
let resultadoMultiplicacion = a * b;
let resultadoEcuacion = (b - a) * a / b;

console.log(resultadoResta + ' ' + resultadoDivisión + ' ' + resultadoMultiplicacion + ' ' + resultadoEcuacion)

let resultadoSuma = a + b;                  // Suma numérica, resultado 13
let frase = "Hola me llamo" + " " + "Edu";  //Concatenación, el resultado sería la cadena 'Hola me llamo Edu'
let resultadoSuma2 = "3" + "10";            //Se trataría de una concatenación, el resultado sería 310
let resultadoSuma3 = "3" + 10;              //Javascript lo seguiría interpretando como cadena, resultado 310

console.log(resultadoSuma + ' ' + frase + ' ' + resultadoSuma2 + ' ' + resultadoSuma3)

let age = 18

let puedoConducir = (age >= 18) ? true : false;

console.log(puedoConducir)
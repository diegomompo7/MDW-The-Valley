/*
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/

console.log("KATA 1");

 let msg = "esto es una tarea";

function contarVocales(str){
    let voc = 'aeiou';

    let contVoc=0;
    for(let i=0; i<str.length; i++){
        if(voc.includes([str[i]])){
            contVoc+=1;
        }
    }
    return contVoc;
}

console.log(contarVocales(msg));

/*
        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/
console.log("KATA 2");

let num = 25;

function sumMultiplos(number){

    let res=0;
   
    for(let i=1; i<number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            res+=i;
        }
    }
    
    return res;
}

let resMult = sumMultiplos(num);
console.log(resMult);

/*
        Crea una función que reciba como argumento un array de números 
        y devuelva aquel que aparecen únicamente un número impar de veces.

        Ejemplos: 

            [1]         → Devuelve el número 1, ya que aparece una única vez
            [3,3,5]     → Devuelve el 5, ya que aparece 1 vez.
            [2,1,1,2,2] → Devuelve 2, ya que aparece 3 veces
*/

console.log("KATA 3");

let numImpar = (arrayNum) =>{

    arrayNum.sort()
    let res = 0;
    let cont = 1;

    for(let i=0; i <= arrayNum.length; i++){
        if(arrayNum[i] === arrayNum[i+1]){
            cont++;
        }
        else{
            if(cont % 2 != 0){
                res = arrayNum[i];
            }
            cont=1;
        }
    }
    return res
}

let resImpar = numImpar([2,3,3,3,1,1,2])

console.log(resImpar)


/*
        Crea una función que reciba como parámetro un string y devuelva otro, 
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/

console.log("KATA 4");

let msg2 = "codigo secreto"

function posalfba(str){
    let alfabeto = "abcdefghijklmnñopqrstuvwxyz";
    let msgSecret = '';

    for(let i=0; i<str.length; i++){;
         msgSecret += ' ' + (alfabeto.indexOf([str[i]])+1);
    }

    return msgSecret;
}

console.log(posalfba(msg2));

/*
    Crea una función que reciba una serie de arrays como argumentos 
    y devuelva uno único ordenado.

    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane'])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']
*/

console.log("KATA 5");

arrayPlayer = ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', 'Benzema'], 
['Vinicius', 'Kane']]) 


function concatPlayers(arrPlayer){
    let arrayPlayers = []
    for(let i =0; i< arrPlayer.length; i++){
    arrayPlayers = arrayPlayers.concat(arrPlayer[i]);
    }
    arrayPlayers.sort();
    console.log(arrayPlayers);
}
concatPlayers(arrayPlayer);

/* 
        Crea una función que reciba un array de números, la posición inicial 
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]
*/ 

console.log("KATA 6");

let arraySlice = [7,2,7,2,1,6,8,6,7,1];

let buscarSlice = (arrSlice, inicio, fin = arrSlice.length) => {
    resArraySLice = arrSlice.slice(inicio, fin);

    return resArraySLice;
}


let resultado = buscarSlice(arraySlice, 1);
console.log(resultado);

/* 
    Crea una función que  reciba un array de números y 
    devuelva los números que coinciden con su posición en el array.

    Ejemplos:
        [1,2,5,3] → Devuelve [3] que se encuentra en la posición 3 del array
        [1,5,20,4,16,8,6] → Devuelve [6] que se encuentra en la posición 6 del array
        [10,1,20,3,16,8,10] → Devuelve [1,3] ya que ambos coinciden.
*/ 

console.log("KATA 7");

let arrayPosition = [7,9,8,3,14,9,6,15,19,3];

function lookPosition(arrPosition){
    let newArrayPosition = [];

    for(let i=0; i<=arrPosition.length; i++){
        if(i===arrPosition[i]){
         newArrayPosition.push(i);
        }
    }

    return newArrayPosition;

}

let resultPosition = lookPosition(arrayPosition);

console.log(resultPosition);

/* 
        Tenemos una flota de vehículos y con las nuevas restricciones de 
        movilidad en Madrid, nos piden que todos tengan etiqueta de contaminación.

        Crea una función que reciba un array de objetos-coche y devuelva un 
        nuevo array con los objetos-coche. Cada coche tendrá un nueva propiedad 
        que sea etiqueta ( con valor ‘ECO’ en caso de que el coche sea híbrido y 
        ‘C’ en caso de que sea gasolina). 

        Dentro de la flota de coches solo tenemos esas 2 opciones así que no hay 
        que preocuparse por ninguna otra.

        Ejemplo:
            Entrada: 
                [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’ },
                {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’ },
                {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’ }] 

            Salida:
            [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’, etiqueta:’ECO’},
            {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’, etiqueta:’C’},
            {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’, etiqueta:’ECO’ }].
*/

console.log("KATA 8");

objectCoche =
    [{id: 1, modelo: 'híbrido', matricula:'4565HLM' },
    {id: 2, modelo: 'gasolina', matricula:'5678MNL' },
    {id: 3, modelo: 'híbrido', matricula:'1111LLL' }];

let etiquetaCoche = (objCoche) =>  {

    let newObjCoche = []

    for(let i=0; i<objCoche.length; i++){
        if(objCoche[i].modelo === 'híbrido'){
            objCoche[i]["etiqueta"] = "ECO";
            newObjCoche.push(objCoche[i]);
        }else{
            objCoche[i]["etiqueta"] = "C";
            newObjCoche.push(objCoche[i]);
        }
    }
    return newObjCoche;
}

console.log(etiquetaCoche(objectCoche));

/* 
        Crea una función que reciba la lista de regalos de los reyes magos 
        y la ordene según la propiedad elegida.

        Ejemplo:        
            Entrada: 
                    ([{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Lego’, categoria:’construcción’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }], ‘nombre’);

            Salida:
                    [{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }
                    {nombre: ‘Lego’, categoria:’construcción’ }]
*/ 

console.log("KATA 9");

let regalos = [{nombre: 'Barbie', categoria: 'muñecas' },
    {nombre: 'Lego', categoria:'construcción' },
    {nombre: 'Fifa2023', categoria:'videojuego' }];

let ordenarRegalos = (listReg, order) => {
    listReg.sort((a, b) => (a[order] > b[order]) ? 1:-1);

    return listReg;
}

console.log(ordenarRegalos(regalos, 'nombre'));
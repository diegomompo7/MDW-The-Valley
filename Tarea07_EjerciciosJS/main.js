/*
    Crea una función que imprima todos los números primos entre el 1 y el 100.
        Después, tendrá que imprimir la suma de todos esos 
*/

function primos(){
    let nPrimos = 0;

    for(let i=2; i<=100; i++){
        if(i % 2 !=0){
            if(i % 3 !=0){
                if(i % 5 !=0){
                    if(i % 7 !=0){
                        console.log(i)
                        nPrimos+=i
                    }
                    else if(i==7){
                        console.log(i)
                        nPrimos+=i
                    }
                }
                else if(i==5){
                    console.log(i)
                    nPrimos+=i
                }
            }
            else if(i==3){
                console.log(i)
                nPrimos+=i
            }
        }else if(i==2){
            console.log(i)
            nPrimos+=i
        }
    }
    return nPrimos
}

console.log(primos());
/*
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/

var list1 = [1,4,5,7] 
var list2 = [2,1,5,1,1]

function ArrayNumeros(){
    let long
    let list3 = []
    

    if(list1.length < list2.length){
        sort = list1.length
        long = list2.length;
    }else{
        sort =list2.length;
        long = list1.length
    }

    for(let i=0; i<sort; i++){
        list3[i] = list1[i] + list2[i]
    }
    for(let i=sort; i<long; i++){
        list3[i] = list2[i]
    }

    console.log(list3)
}

ArrayNumeros();

/*
    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true
*/

let msg = "oso"

function Palidromo(str){

    var re = /[^A-Za-z0-9]/g

    var lowRegStr = str.toLowerCase().replace(re, '')

    var reverseStr = lowRegStr.split('').reverse().join('')

    let res = (lowRegStr == reverseStr ) ? true : false;

    return res
}

console.log(Palidromo(msg))

/*
    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/

let name = ['Pedro', 'Gon', 'Luis', 'Fran']
let separator = "/"

function NameSeparator(separator){
     console.log(name.join(separator))
}

NameSeparator(separator)

/*
    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/

var objPerson = [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]

function namePerson(){
    let arrayNames = []
    let j=0
    console.log(objPerson)

    for(let i=0; i<objPerson.length; i++){

        if(i == objPerson[i].id){
            arrayNames[j] = objPerson[i].name
            j++
        }
    }
    return arrayNames
}

console.log(namePerson())
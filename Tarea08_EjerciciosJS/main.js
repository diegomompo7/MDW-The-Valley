/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]

let uruguayPlayers = players.filter(player => player.country === 'Uruguay')

let rewardPlayers = uruguayPlayers.map(player => player.goldenBoot + player.goldenBall)

let rewardUruguay = rewardPlayers.reduce((acc, score) => acc + score)
console.log(rewardUruguay)

/* 
    Dado el siguiente array:
*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]

/* 
    1) Muestra por consola el listado de nombres de los millonarios
    2) Muestra por consola (true/false) si está Amancio en la lista
    3) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen
    4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes
    5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
    6) Muestra por consola el millonario más joven que no sea de EEUU
    7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
    8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
*/

//EJERCICIO 1 ----------------------------------------------------------------------

forbesUsersNames = forbesList.map(forbesUsers => forbesUsers.name)
console.log (forbesUsersNames)

//EJERCICIO 2 ----------------------------------------------------------------------

let forbesUsersFind = forbesList.reduce( function(forbesList){
    return (forbesList.name === 'Amancio') ? true : false;
  },{});
  console.log(forbesUsersFind);
  
// EJERCICIO 3 ----------------------------------------------------------------------

let forbesDivisionPatYear = forbesList.map(forbesList => forbesList.amount / forbesList.age )
console.log(forbesDivisionPatYear)

//EJERCICIO 4 --------------------------------------------------------------------------

let forbesAge = forbesList.map(forbesList => forbesList.age)
console.log(forbesAge)

let forbesTotalAge = forbesAge.reduce((count, age)=> (count + age), 0)

let forbesAverageAge = forbesTotalAge / forbesAge.length;
console.log(forbesAverageAge)

//EJERCICIO 5------------------------------------------------------------------------------

let forbesEEUUTech = forbesList.filter(forbesList => forbesList.country === 'EEUU' && forbesList.industry === 'Technology')
console.log(forbesEEUUTech) 

let forbesTotalEEUUTech = forbesEEUUTech.reduce((acc, money) => acc+money.amount, 0)
console.log(forbesTotalEEUUTech) 

//EJERCICIO 6------------------------------------------------------------------------------

let forbesYoungest = forbesList.filter(forbesList => forbesList.country != 'EEUU')
console.log(forbesYoungest)

let youngMillion = forbesYoungest.reduce( function(youngest, million){
    return (youngest.age === undefined || youngest.age >= million.age) ? million : youngest;
  },{});
  console.log(youngMillion)

//EJERCICIO 7------------------------------------------------------------------------------

let forbesOrderAmount = forbesList.sort(forbesList.amount)
console.log(forbesOrderAmount)
let forbesTOP5Million = forbesOrderAmount.slice(0,5)
console.log(forbesTOP5Million)

let forbesOldest = forbesTOP5Million.reduce((oldest, million) => 
                (oldest.age === 'undefined' || oldest.age >= million.age) ? oldest : million)

console.log(forbesOldest)


//EJERCICIO 8------------------------------------------------------------------------------

let forbesGoogleMicrosoft = forbesList.filter(forbesList => forbesList.company === 'Google' || forbesList.company === 'Microsoft')
console.log(forbesGoogleMicrosoft)

let forbesTotalMoneyGooMic = forbesGoogleMicrosoft.reduce((acc, forbesList) => acc+forbesList.amount, 0)
let forbesTotalAgeGooMic = forbesGoogleMicrosoft.reduce((acc, forbesList) => acc+forbesList.age, 0)

let forbesAverageMoneyGooMic =  forbesTotalMoneyGooMic / forbesGoogleMicrosoft.length;
let forbesAverageAgeGooMic =  forbesTotalAgeGooMic / forbesGoogleMicrosoft.length;

console.log("money " + forbesAverageMoneyGooMic)
console.log("age " + forbesAverageAgeGooMic)
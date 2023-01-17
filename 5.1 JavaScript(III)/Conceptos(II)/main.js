let simpson = [
  {age: 50, name:'Homer'},
  {age: 50, name:'Marge'},
  {age: 10, name:'Bart'},
  {age: 8, name:'Lisa'},
];

let simpsonAges = [];

simpson.forEach((simpson) => simpsonAges.push(simpson.age));
console.log(simpsonAges);

simpsonAges = simpson.map(simpson => simpson.age);

simpsonAges = simpson.filter(simpson => simpson.age === 50);
console.log(simpsonAges);

simpsonAges = simpson.find(simpson => simpson.age === 50);
console.log(simpsonAges);

//vamos a sumar todos los años de la familia
simpsonAges = simpson.reduce( (contador, simpson) => contador+simpson.age,0);
console.log(simpsonAges);

//vamos a buscar el más joven
let youngSimpson = simpson.reduce( function(youngest, simpson){
  return (youngest.age === undefined || youngest.age >= simpson.age) ? simpson : youngest;
},{});
console.log(youngSimpson);

let drivers = [ 
  { id: 1, name: "Verstappen", score: 391, car:"red bull", plusScore: 40}, 
  { id: 1, name: "Leclerk", score: 267, car:"ferrari", plusScore: 10}, 
  { id: 1, name: "Perez", score: 265, car:"red bull",  plusScore: 50}, 
  { id: 1, name: "Russell", score: 218, car:"mercedes",  plusScore: 30}, 
  { id: 1, name: "Sainz", score: 202, car:"ferrari",  plusScore: 25}, 
  { id: 1, name: "Hamilton", score: 198, car:"mercedes",  plusScore: 40}, 
];

// Primero filtramos por coche
let ferrariDrivers = drivers.filter(driver => driver.car === 'ferrari');
console.log(ferrariDrivers)

// Sacamos la puntuación de los pilotos
let ferrariDriversScore = ferrariDrivers.map(driver => driver.score + driver.plusScore);
console.log(ferrariDriversScore);

// Sumamos
let totalScoresFerrari = ferrariDriversScore.reduce( (acc,score) => acc + score);
console.log(totalScoresFerrari);

//Podemos rizar el rizo y hacerlo en una línea

let totalScoresFerrari2 = drivers
    .filter(driver => driver.car === 'ferrari')
    .map(driver => driver.score + driver.plusScore)
    .reduce( (acc,score) => acc + score);

console.log(totalScoresFerrari2)


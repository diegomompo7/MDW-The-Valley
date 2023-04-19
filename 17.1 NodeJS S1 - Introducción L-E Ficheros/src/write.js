console.log("--- START WRITE.JS ---");

const fs = require("fs");

const pokemons = [
  {
    name: "Bulbasaur",
    id: 1,
  },
  {
    name: "Ivysaur",
    id: 2,
  },
  {
    name: "Venusaur",
    id: 3,
  },
];

const pokemonString = JSON.stringify(pokemons);

fs.writeFile("./pokemons.json", pokemonString, (error) => {
  if (error) {
    console.log("Ha ocurrido un error escribiendo el fichero");
    console.log(error);
  } else {
    console.log("Fichero guardado correctamente!");
  }

  console.log("--- END WRITE.JS ---");
});

const prompt = require("prompt-sync")();

const askForPokemonsNumber = () => {
  let numPokemonValid = false;
  let numberPokemons;

  while (!numPokemonValid) {
    const numPokemonsString = prompt("Cuántos pokemons quieres añadir? ");
    try {
      numberPokemons = parseInt(numPokemonsString);
      if (typeof numberPokemons === "number" && numberPokemons > 0 && numberPokemons <= 5) {
        numPokemonValid = true;
      } else {
        console.log("Por favor, introduce un número entre 1 y 5");
      }
    } catch (error) {
      console.log("Por favor, introduce un número entre 1 y 5");
    }
  }

  return numberPokemons;
};

const createPokemons = (numPokemonsToCreate) => {
  const pokemons = [];

  for (let i = 1; i <= numPokemonsToCreate; i++) {
    // TODO: Añadir control de errores poe ejemplo controlar NaN
    const pokemonName = prompt(`Introduce el nombre del pokemon num ${i}: `);
    const pokemonIdString = prompt(`Introduce el id del pokemon num ${i}: `);
    const pokemonId = parseInt(pokemonIdString);
    const pokemon = {
      name: pokemonName,
      id: pokemonId,
    };
    pokemons.push(pokemon);
  }

  return pokemons;
};

const addPokemonsToFile = (pokemonsToAdd) => {
  const fs = require("fs");

  fs.readFile("./src/pokemons.json", (readError, data) => {
    if (readError) {
      console.log("Ha ocurrido un error leyendo el fichero");
      console.log(readError);
    } else {
      try {
        const pokemons = JSON.parse(data);
        const newPokemons = [...pokemons, ...pokemonsToAdd];
        const pokemonString = JSON.stringify(newPokemons);

        fs.writeFile("./src/pokemons.json", pokemonString, (error) => {
          if (error) {
            console.log("Ha ocurrido un error escribiendo el fichero");
            console.log(error);
          } else {
            console.log("Fichero guardado correctamente!");
          }
        });
      } catch (parseError) {
        console.log("Ha ocurrido un error PARSEANDO el fichero");
        console.log(parseError);
      }
    }
  });
};

const numPokemons = askForPokemonsNumber();
const pokemons = createPokemons(numPokemons);
addPokemonsToFile(pokemons);
console.log("--- START READ.JS ---");

const fs = require("fs");

fs.readFile("./pokemons.json", (readError, data) => {
  if (readError) {
    console.log("Ha ocurrido un error leyendo el fichero");
    console.log(readError);
  } else {
    try {
      const pokemons = JSON.parse(data);
      console.log(pokemons);
    } catch (parseError) {
      console.log("Ha ocurrido un error PARSEANDO el fichero");
      console.log(parseError);
    }
  }

  console.log("--- END READ.JS ---");
});

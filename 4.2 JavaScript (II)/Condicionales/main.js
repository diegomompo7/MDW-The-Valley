let mesActual = 8; //variable dentro de mi programa con la que controlo el mes

if ( mesActual === 8 ) {
        console.log("¡Estoy de rebajas!");
}

//Estamos indicando que si la variable que determina el mes es igual a 8 (Agosto)
//nos muestre el texto.

let localizacion = "ingles"; //variable dentro de mi programa con la que controla la localización

if ( localizacion === "spain" ) {
    console.log("El idioma de la web tiene que ser en español");
} else {
    console.log("El idioma de la web tiene que ser en inglés");
}

/*
    Estamos indicando que si la variable que determina la localización es igual 
    a "spain", pondremos la web en español, en caso contrario, será en inglés.
*/

let etiqueta = "C";
let anoFabricacion = 2012;

if ( etiqueta === "ECO" || etiqueta === "0") {
    console.log("El coche puede circular");
} else if (anoFabricacion > 2015){
    console.log("El coche puede circular");
} else {
    console.log("El coche no puede circular");
}

/* 
 SINTAXIS:  let resultado = condición ? valor1 : valor2;
*/

let edad = 20;
let puedeConducir = (edad >= 18 ) ? true : false;

console.log(puedeConducir)

let talla = "L";

switch (talla) {
    case "S":
        console.log("Perfecto, tenemos unidades de esta talla");
        break;
    case "M":
        console.log("Lo sentimos, no tenemos unidades de esta talla");
        break;
    case "L":
        console.log("Lo sentimos, no tenemos unidades de esta talla");
        break;
    case "XL":
        console.log("Perfecto, tenemos unidades de esta talla");
        break;
    default:
        console.log("Lo sentimos, solo trabajamos con tallas desde la S a la XL");
        break;
}
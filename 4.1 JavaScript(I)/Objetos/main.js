let zapatilla = {
    marca: "Nike",
    modelo: "Air Max",
    talla: 45,
    precio: 100
};

let marcaZapatilla = zapatilla["marca"];
// let marcaZapatilla = zapatilla.marca también valdría

console.log(marcaZapatilla);//"Nike"

zapatilla["talla"] = 38;
//zapatilla.talla = 38 también valdría

console.log(zapatilla.talla);//38

console.log(zapatilla["color"]); // Nos devolverá undefined

zapatilla["color"] = "Blanco";
//zapatilla.color = "Blanco" también valdría

console.log(zapatilla); // Ya tendríamos la propiedad incluida en el objeto

// Opción de bucles

for (let clave in zapatilla) {
    console.log("Zapatilla tiene la clave " + clave + " con valor: " + zapatilla[clave]);
}

// Opción conocer las claves

let keys = Object.keys(zapatilla);
console.log(keys);
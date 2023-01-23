try{
    console.log('Hola');
    console.log(a); // error porque la variable a no se ha declarado
} catch{
    console.log('No se ha podido ejecutar');
}

// muestra por consola:
//Hola
//No se ha podido ejecutar

//let json = '{"user":"Edu", "edad": 31}'
let json = '{"user":"Edu", "edad": 31}';

// Probamos a parsear nuestro JSON
try {
  let cliente = JSON.parse(json); 
  console.log( cliente.user ); 

} catch (err) {
  // mostraríamos por pantalla un mensaje maquetado.
    console.log("Lo sentimos, no hemos podido cargar los datos, inténtelo de nuevo más tarde")
}

let json1 = '{"edad": 31}'

// Probamos a parsear nuestro JSON
try {
  let cliente2 = JSON.parse(json1); 
    if(!cliente2.user){
        throw new Error("Datos incompletos"); //SyntaxError, ReferenceError...
    }   

} catch (err) {
  // mostraríamos por pantalla un mensaje maquetado.
    console.log(err.message)
}finally {
    // Código que ejecutamos siempre
}
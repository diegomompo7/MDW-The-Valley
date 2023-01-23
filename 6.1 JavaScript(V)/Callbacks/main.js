console.log('mensaje 1');

setTimeout(function () {
    console.log('mensaje 2');
}, 300);

console.log('mensaje 3');

function saludar(nombre) {
  console.log('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  let nombre = "Edu";
  callback(nombre);
}

procesarEntradaUsuario(saludar);

function solicitudServidor(consulta, callback){
  setTimeout(function(){
    let respuesta = consulta + "netflix, hbo, amazon prime";
    callback(respuesta);
  },2000);
}

function obtenerResultados(resultados){
  console.log("## Respuesta del servidor ##");
    console.log(resultados);
}

solicitudServidor("Servicios contratados por el usuario: ", obtenerResultados);
const promise = new Promise (function (resolve, reject) {
  setTimeout(function (){
      console.log("Mensaje Timeout");
      resolve("devuelvo el valor");
  }, 1000);
});

promise.then(
  function(result){ console.log(result) }, 
  function(error){ /* hacemos algo con el error */}
);

const promise2 = new Promise (function (resolve, reject) {
  setTimeout(function (){
      console.log("Mensaje Timeout");
      reject(new Error('ha fallado'));
  }, 1000);
});

promise2.catch(
  function(error){ console.log(error.message)}
)

let listaPartipantes = ['Edu', 'Gon', 'Fran'];

function anadirParticipante (nuevoParticipante, lista){
    const miPromesa = new Promise((resolve, reject) => {

        setTimeout(function(){
            if(!lista){
                reject(new Error('No hay lista de participantes'));
            } else {
              console.log("Inserto a " + nuevoParticipante)
                lista.push(nuevoParticipante);
                resolve(lista);
            }
        },2000);
    })

    return miPromesa;
}

anadirParticipante('Luis', listaPartipantes)
    .then( resultado => anadirParticipante('Pedro', listaPartipantes))
    .then( resultado => anadirParticipante('Juan', listaPartipantes))
    .then( resultado => anadirParticipante('Fermín', listaPartipantes))
    .then( resultado => console.log(resultado.join(',')))
    .catch( function(error){ console.log(error.message)})

    let p1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, "one");
    });
    let p2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, "two");
    });
    let p3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000, "three");
    });
    let p4 = new Promise((resolve, reject) => {
      setTimeout(resolve, 4000, "four");
    });
    let p5 = new Promise((resolve, reject) => {
      reject("reject");
    });


    Promise.all([p1, p2, p3, p4, p5]).then(values => {
      console.log(values);
    }).catch(reason => {
      console.log(reason)
    });
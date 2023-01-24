let nombre = document.getElementById('name')
function adivinaEdad(nom){
  const URL = "https://api.agify.io?name=" + nom;

  fetch(URL)
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.log(error))

}

console.log(nombre)
document.getElementById("adivinar").addEventListener("click" , () => adivinaEdad(nombre))
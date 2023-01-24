
function adivinaEdad(){
  let nombre = document.getElementById('name').value
  console.log(nombre)
  const URL = "https://api.agify.io?name=" + nombre;

  fetch(URL)
    .then(respuesta => respuesta.json())
    .then(respuesta => document.getElementById("demo").innerHTML = respuesta.age)
    .catch(error => console.log(error))

}

document.getElementById("adivinar").addEventListener("click" , () => adivinaEdad())
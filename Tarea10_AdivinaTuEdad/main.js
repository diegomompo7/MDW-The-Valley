const URL = "https://api.agify.io?name="

function adivinaEdad(){
  let nombre = document.getElementById('name').value
  const URLTotal = URL + nombre

  fetch(URLTotal)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
    if(respuesta.age ===null){
       document.getElementById("age").innerHTML = '-'
       throw new Error("El nombre introducido no es correcto");
    }else{
      document.getElementById("age").innerHTML = respuesta.age
    }
  })
    .catch(error => console.log(error.message))

}

document.getElementById("adivinar").addEventListener("click" , () => adivinaEdad())
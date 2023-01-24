const URL = "https://reqres.in/api/users?page=2";

fetch(URL)
.then(respuesta => respuesta.json())
.then(respuesta => console.log(respuesta.data))
.catch(error => console.log(error))

fetch(URL, {
  method: 'POST',
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: 'Eduardo', job: 'Profesor' })
})
.then(respuesta => respuesta.json())
.then(respuesta => console.log(respuesta))
.catch(error => console.log(error))

fetch(URL, { method: 'DELETE' })
.then(() => console.log('delete correcto'))
.catch(error => console.log(error))
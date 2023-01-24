/* Opción 2 */
getUsers();
async function getUsers(){
  const URL = "https://reqres.in/api/users?page=2";
  const response = await fetch(URL);
  const datosFormateados = await response.json();
  return datosFormateados;
}

getUsers().then(respuesta => console.log(respuesta))
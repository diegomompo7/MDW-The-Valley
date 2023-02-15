
import './App.css';
import SampleComponent from './components/ArrayComponents';

function App() {
  const name = "Raquel"
  const user = {
    name: "Fran",
    address: {
      street: "Calle de Prueba, 25",
      city: "Madrid"
    }
  }


  const userIsLogged = true

  function toUpperCase(text){
    return text.toUpperCase()
  }
  return (
    <div className="App">
      <h1>Este es el componente App</h1>
      <p>Tu ciudad es {user.address.city}</p>
      <p>Dos más dos son: {2 + 2}</p>
      <p>Hola {name}</p>
      <p>La dirección es: {toUpperCase(user.address.street)}</p>
      <SampleComponent></SampleComponent>
      {userIsLogged ? <p>El usuario está logado.</p> : <p>No está logado.</p>}

      <p>El usuario {userIsLogged ? "SI" : "NO"} está logado</p>
    </div>
  );
}

export default App;

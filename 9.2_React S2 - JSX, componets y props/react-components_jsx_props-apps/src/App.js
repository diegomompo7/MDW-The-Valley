
import './App.css';
import SampleComponent from './components/ArrayComponents/ArrayComponents';
import Greeting from './components/Greeting/Greeting';
import Profile from './components/Profile/Profile';
import CustomButton from './components/CustomButton/CustomButton';

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
  const showMessage = () => {
    console.log("Hola!!");
  }
  
  const showAlert = () => {
    alert("Eyyyy!!");
  }
  return (
    <div className="App">
      <h1>Este es el componente App</h1>
      <p>Tu ciudad es {user.address.city}</p>
      <p>Dos más dos son: {2 + 2}</p>
      <Greeting name="Gonzalo" variant="cool"></Greeting>
      <Greeting name="Laura"></Greeting>
      <Greeting name="Edu"></Greeting>
      <Profile nombre="Maria" descripcion="Soy programadora de webs"></Profile>
      <Profile nombre="Carlos" descripcion="Soy mecánico en un taller de coches"></Profile>
      <p>La dirección es: {toUpperCase(user.address.street)}</p>
      <SampleComponent></SampleComponent>
      {userIsLogged ? <p>El usuario está logado.</p> : <p>No está logado.</p>}

      <p>El usuario {userIsLogged ? "SI" : "NO"} está logado</p>
      <CustomButton handleClick={showMessage} text="Púlsame!"></CustomButton>
      <CustomButton handleClick={showAlert} text="Aceptar"></CustomButton>
    </div>
  );
}

export default App;


import './App.css';
import ButtonComponent from './components/Button/button';
import MessageComponent from './components/Message/message';
import PhoneComponent from './components/Phone/phone';

const showAlert = () => {
  alert("Les has dado");
}

const showMessage = () => {
  console.log("Pues ok tio...");
}

function App() {
  return (
    <div className="app">
      <PhoneComponent></PhoneComponent>
      <h1 class="title">Mensajes:</h1>
      <MessageComponent name="Laura"></MessageComponent>
      <MessageComponent name="Edu"></MessageComponent>
      <h1 class="title">Buttons:</h1>
      <ButtonComponent handleClick={showAlert} text="Dale!"></ButtonComponent>
      <ButtonComponent handleClick={showMessage} text="Ok"></ButtonComponent>
    </div>
  );
}

export default App;

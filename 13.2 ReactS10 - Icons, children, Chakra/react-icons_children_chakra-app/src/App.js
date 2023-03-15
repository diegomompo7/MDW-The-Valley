import './App.css';
import { IoAirplane, IoAmericanFootballOutline, IoAccessibilityOutline, } from "react-icons/io5";
import { FaHandPaper, FaHandshakeAltSlash, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FcAssistant, FcLinux } from "react-icons/fc";
import CustomButton from './components/CustomButton/CustomButton'
import Collapsable from './components/Collapsable/Collapsable'
import Circle from './components/Circle/Circle';
import ChakraSamples from './components/ChakraSamples/ChakraSample';

function App() {
  return (
    <div className="app">

      <h2>Iconos de Ionicons 5</h2>
      <IoAirplane className='my-plane' />
      <IoAmericanFootballOutline className='my-ball' />
      <IoAccessibilityOutline color="pink" />

      <h2>Iconos flat:</h2>
      <FcAssistant size={20}></FcAssistant>
      <FcLinux size={20}></FcLinux>

      <h2>Ejemplo de botón custom:</h2>
      <CustomButton action={() => alert("Hola")} size="BIG" color="red">
        <span>Eeeeeey!!!</span> <FaHandPaper></FaHandPaper>
      </CustomButton>

      <CustomButton action={() => alert("Adiós")} color="blue">
        <span>Adiós!!!</span> <FaHandshakeAltSlash></FaHandshakeAltSlash>
        <ul>
          <li>Uno</li>
          <li>Dos</li>
        </ul>
      </CustomButton>

      <h2>Ejemplo de collapsable</h2>

      <Collapsable title="Este es el primer collapsable">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Integer velit augue, volutpat at libero sit amet, ornare lacinia mi.</p>
        <p>Nunc hendrerit orci eget interdum aliquam. Mauris vitae justo sodales, pharetra neque sit amet, lacinia tortor.</p>
      </Collapsable>

      <h2>Ejemplos de círculos:</h2>
      <Circle>
        <FaFacebook></FaFacebook>
      </Circle>

      <Circle>
        <FaInstagram></FaInstagram>
      </Circle>

      <Circle>
        <FaTwitter></FaTwitter>
      </Circle>
      <h2>Ejemplos de chakra:</h2>
      <ChakraSamples></ChakraSamples>
    </div>
  );
}

export default App;
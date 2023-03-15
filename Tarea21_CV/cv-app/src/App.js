
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import ImageCard from './components/ImageCard/ImageCard';

function App() {
  return (
    <div className="app">

      <Header></Header>

      <Contact></Contact>

      <ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png">
        <h2>NodeJS</h2>
        <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript</p>
        <a href="https://nodejs.org/">https://nodejs.org/</a>
      </ImageCard>


    </div>
  );
}

export default App;

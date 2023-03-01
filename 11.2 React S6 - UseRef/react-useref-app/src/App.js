import './App.css';
import Collapsable from './components/Collapsable/Collapsable';
import InputSample from './components/InputSample/InputSample';
import MortgageCalculator from './components/MortgageCalculator/MortgageCalculator';
import QrGenerator from './components/QrGenerator/QrGenerator';

function App() {
  return (
    <div className="app">

      
<h2>Generador de QR</h2>
        <QrGenerator></QrGenerator>


        <h2>Ejemplo de input simple</h2>
        <InputSample></InputSample>

        <hr className="separator"></hr>

        <h2>Calculadora de hipoteca</h2>
        <MortgageCalculator></MortgageCalculator>

        <hr className="separator"></hr>
  
        <Collapsable title="¿Cual es el horario?" body="Abrimos de 9:00 a 22:00"></Collapsable>
        <Collapsable title="¿Tenéis carta de de alérgenos?" body="Por supuesto, cumplimos con la ley"></Collapsable>

        <hr className="separator"></hr>


    </div>
  );
}

export default App;

import './App.css';
import InputSample from './components/InputSample/InputSample';
import MortgageCalculator from './components/MortgageCalculator/MortgageCalculator';

function App() {
  return (
    <div className="app">


        <h2>Ejemplo de input simple</h2>
        <InputSample></InputSample>

        <h2>Calculadora de hipoteca</h2>
        <MortgageCalculator></MortgageCalculator>

    </div>
  );
}

export default App;

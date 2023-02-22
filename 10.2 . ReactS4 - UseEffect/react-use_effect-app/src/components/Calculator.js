import React from 'react'

function Calculator() {
   const [firstNumber, setFirstNumber] = React.useState(0)
   const [secondNumber, setSecondNumber] = React.useState(0)
   const [result, setResult] = React.useState(0)

   /*React.useEffect(() => {
    console.log("INICIO 1: Efecto que se ejecuta en repintado!!");
  
    // La función del return se ejecuta ANTES de cada repintado
    return () => console.log("FINAL 1: Efecto que se ejecuta en repintado!!");
  });*/

  React.useEffect(() => {
    console.log("INICIO 2: Efecto que solo se ejecuta en el inicio!!");
  
    // La función del return se ejecuta en la muerte del componente
    return () => console.log("FINAL 2: Efecto que solo se ejecuta en el inicio!!");
  }, []);

  React.useEffect(() => {
    console.log("INICIO 3: Efecto que solo se ejecuta si cambia firstNumber o secondNumber!!");
    setResult(firstNumber + secondNumber);
  
    // La función del return se ejecuta previa ejecución del propio efecto
    return () => console.log("FINAL 3: Efecto que solo se ejecuta si cambia firstNumber o secondNumber!!");
  }, [firstNumber, secondNumber]);

  return (
    <div>
        <input type="number" value={firstNumber} onChange={(event) => setFirstNumber(parseInt(event.target.value))}></input>
        <input type="number" value={secondNumber} onChange={(event) => setSecondNumber(parseInt(event.target.value))}></input>
        <p>El resultado de la suma es {result}</p>
    </div>
  );
}

export default Calculator;

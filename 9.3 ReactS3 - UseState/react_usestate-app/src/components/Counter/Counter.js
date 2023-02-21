import "./Counter.css";
import React from "react";


const Counter = () => {

    const [counterValue, setCounterValue] = React.useState(0);

  return (
    <div>
        <p>El valor actual es: {counterValue}</p>
        <button className="counter__button" onClick={() => setCounterValue(counterValue - 5)}>Restar 5</button>
        <button className="counter__button" onClick={() => setCounterValue(counterValue - 1)}>Restar 1</button>
        <button className="counter__button" onClick={() => setCounterValue(0)}>Resetear</button>
        <button className="counter__button" onClick={() => setCounterValue(counterValue + 1)}>Sumar 1</button>
        <button className="counter__button" onClick={() => setCounterValue(counterValue + 5)}>Sumar 5</button>
    </div>
  );
}

export default Counter;
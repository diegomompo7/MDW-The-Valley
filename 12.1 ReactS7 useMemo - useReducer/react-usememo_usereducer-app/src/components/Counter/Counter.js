import React from "react";

const initialValue = {
    value: 0,
    numSteps: 0,
    lastUpdated: new Date(),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          value: state.value + 1,
          numSteps: state.numSteps + 1,
          lastUpdated: new Date(),
        }
      case 'DECREMENT':
        return {
          value: state.value - 1,
          numSteps: state.numSteps + 1,
          lastUpdated: new Date(),
        }
      default:
        console.error("Case not supported");
    }
  }

const Counter = () => {
    const [state, dispatch] = React.useReducer(reducer, initialValue);

    return (
        <div className="counter">
          <p>Valor actual: {state.value}</p>
          <p>Numero de pasos: {state.numSteps}</p>
          <p>Última actualización: {state.lastUpdated.toString()}</p>
    
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>Aumentar</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>Disminuir</button>
        </div>
      )
}
export default Counter
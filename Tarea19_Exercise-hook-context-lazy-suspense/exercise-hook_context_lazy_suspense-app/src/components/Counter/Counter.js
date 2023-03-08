import useCounter from '../../hooks/useCounter';
import { ThemeContext } from "../../App";
import React from 'react';

const Counter = () => {
    const [counter, handleIncrement, handleDecrement] = useCounter(25);
    const theme = React.useContext(ThemeContext);

    return (
        <div style={{ background: theme.background, color: theme.fontColor }}>
            <p>Valor actual: {counter}</p>
            <button onClick={handleDecrement}>Decrementar</button>
            <button onClick={handleIncrement}>Aumentar</button>
        </div>
    )
}
export default Counter
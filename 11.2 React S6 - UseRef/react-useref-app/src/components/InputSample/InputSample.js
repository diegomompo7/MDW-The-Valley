import "./InputSample.scss"
import React from "react"


const InputSample = () => {


    //Estado para almacenar el valor del input
    const [name, setName] = React.useState("")

    //UseRef para acceder al DOM
    const inputRef = React.useRef(null);

    //Función para recuperar el valor del input
    const getInputValue = () => {
        setName(inputRef.current.value)
    }

    return (
        <div className="input-sample">
            <p>El valor actual es {name}</p>
            <input autoFocus={true} ref={inputRef} type="text" placeholder="Introduce un nombre..."></input>
            <p>
                <button onClick={getInputValue}>Actualiza el valor</button>
            </p>
            <p>
                <button onClick={() => inputRef.current.focus()}>Hacer foco pata rellenar input</button>
            </p>
        </div>
    );
}

export default InputSample
import React from "react"

const initialValue = {
    carrito: [{
        id: 0,
        product: "",
        price: 0
    }],
    lastCarritoChecked: 0
}

const reducer = (state, action) => {
    const newState = {...state}

    switch(action.type){
        case "ADD PRODUCT":

            const newProduct = {
                id: state.lastCarritoChecked + 1,
                product: action.payload.product,
                price: action.payload.price
            }
            newState.carrito = [...newState.carrito, newProduct]
            newState.lastCarritoChecked = newProduct.id

            console.log(newState)

            break;

        case "DELETE PRODUCT":
           let deleteState = newState.carrito.filter((carrito) => 
                carrito.id !== action.payload.id)

            console.log(deleteState)
            newState.carrito =  [...deleteState]
                    
            break;
        
        default:
                console.log("ACTION TYPE NOT SUPPORTED")
    }
    return newState
}

const calculateTotal = (state, total, setTotal) => {
    console.log(state.carrito)

    total = state.carrito.map((currentValue) =>  parseInt(currentValue.price))
    
     let result = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0)


    return <h4>Total: {result} €</h4>
}

const CarritoCompra = () => {

    const productReference = React.useRef()
    const priceReference = React.useRef()

    const [state, dispatch] = React.useReducer(reducer, initialValue)
    const [total, setTotal] = React.useState(0)

    const totalCarrito  = React.useMemo(() => calculateTotal(state, total, setTotal));

    console.log(state)


    const onSubmit = React.useCallback((event) => {
        event.preventDefault();

        const payloadToCarrito = {
            product: productReference.current.value,
            price: priceReference.current.value
        };

        dispatch({ type: "ADD PRODUCT", payload: payloadToCarrito })


    }, [])
    const deleteProduct = React.useCallback((carritoId) => {
        const payloadToDelete = {
          id: carritoId,
        };
    
        dispatch({ type: "DELETE PRODUCT", payload: payloadToDelete });
      }, []);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={productReference} type='text'></input>
                <input ref={priceReference} type='number'></input>
                <button type="submit">Añadir producto</button>
            </form>
            <h4>Productos</h4>
            <ul>
                {state.carrito.map((carrito) =>
                    <li key={carrito.id}>
                        {carrito.product} / Precio: {carrito.price}
                        <button onClick={() => deleteProduct(carrito.id)}></button>
                    </li>
                )}

            </ul>
            {totalCarrito}
        </div>
    )
}

export default CarritoCompra
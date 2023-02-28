import React from "react"

const SpentItems =(props) => {

    return (

        <div key={props.spent.id}>
            <strong>{props.spent.name}</strong> - {props.spent.ammount} €
            <button onClick={() => props.deleteItem()}>ELIMINAR</button>
        </div>

    )
}

/*const propsAreEqual =  (previousProps, currentProps) => {
    return previousProps.spent === currentProps.spent;
}
const SpentItemsMemo = React.memo(SpentItems, propsAreEqual)*/

const SpentItemsMemo = React.memo(SpentItems)

export default SpentItemsMemo
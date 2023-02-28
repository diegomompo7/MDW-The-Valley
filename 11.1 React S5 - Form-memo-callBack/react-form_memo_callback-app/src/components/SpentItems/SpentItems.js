import React from "react"
import './SpentItems.scss'

const SpentItems = (props) => {

    return (

        <div className="spent-item" key={props.spent.id}>
            <img className="spent-item__img" src={props.spent.imageUrl} alt={"Imagen de " + props.spent.name}></img>
            <div className="spent-item__info">
                <p className="spent-item__name">{props.spent.name}</p>
                <p className="spent-item__ammount">{props.spent.ammount} €</p>
                <button className="spent-item__delete-button" onClick={() => props.deleteItem()}>ELIMINAR</button>
            </div>
        </div>

    )
}

/*const propsAreEqual =  (previousProps, currentProps) => {
    return previousProps.spent === currentProps.spent;
}
const SpentItemsMemo = React.memo(SpentItems, propsAreEqual)*/

const SpentItemsMemo = React.memo(SpentItems)

export default SpentItemsMemo
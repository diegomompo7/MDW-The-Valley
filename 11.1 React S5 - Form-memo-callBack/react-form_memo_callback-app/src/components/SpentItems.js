import React from "react"

const SpentItems =(props) => {

    return (

        <div key={props.spent.id}>
            <strong>{props.spent.name}</strong> - {props.spent.ammount} €
        </div>

    )
}
const SpentItemsMemo = React.memo(SpentItems)

export default SpentItemsMemo
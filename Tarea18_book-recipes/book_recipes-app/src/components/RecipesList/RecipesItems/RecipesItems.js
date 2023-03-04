import './RecipesItems.css'
import React from "react"

const RecipesItems =  (props) => {

    return (
        <div>
            <img src={props.recipe.imageUrl}></img>
            <div>
                <p>{props.recipe.name}</p>
                <p>Número de personas: {props.recipe.numPeople}</p>
            </div>
        </div>
    )
}
export default RecipesItems
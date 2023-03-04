import './SelectedRecipes.css'
import React from "react"
import AddRecipes from '../AddRecipes/AddRecipes'

const SelectedRecipes = (props) => {

    const nameRef = React.useRef()
    const quantityRef = React.useRef()

    const newIngredient = (event, id) => {
        props.addIngredient(event, {
            name : nameRef.current.value,
            quantity: quantityRef.current.value
        }, id)
    }

    return (
        <div>
            <h2>Receta Seleccionadas:</h2>
            <img src={props.recipeDetail.imageUrl}></img>
            <p>{props.recipeDetail.name}</p>
            <p>Número de personas: {props.recipeDetail.numPeople}</p>
            <table>
                <thead>
                    <tr>
                        <th>Ingrediente</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                        {props.recipeDetail.ingredients.map((ing) => 
                             <tr key={ing.name}>
                                <td>{ing.name}</td>
                                <td>{ing.quantity}</td>
                                <td><button>Eliminar</button></td>
                             </tr>
                        )}
                        <tr>
                            <td><input ref={nameRef} type="text" name='name' id='name'></input></td>
                            <td><input ref={quantityRef} type="text" name='quantity' id='quantity'></input></td>
                            <td><button type='submit' onClick={(event) => newIngredient(event, props.recipeDetail.id)}>Añadir</button></td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}
export default SelectedRecipes
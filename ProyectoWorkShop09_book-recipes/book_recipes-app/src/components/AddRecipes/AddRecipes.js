import './AddRecipes.css'
import React from "react"

const AddRecipes =  React.memo((props) => {

    const nameRecipesRef = React.useRef();
    const servingRef = React.useRef();
    const imageUrlRef = React.useRef();


    const newRecipeRef =  React.useCallback((event) => {
        props.addRecipes(event, {
            name : nameRecipesRef.current.value,
            numPeople: servingRef.current.value,
            imageUrl: imageUrlRef.current.value
        })

    })

    return (
        <div>
            <h2>Añade nueva receta</h2>
            <form onSubmit={(event) => {newRecipeRef(event)}}>
                <fieldset>
                    <label>
                        <p>Introduce un nombre:</p>
                        <input ref={nameRecipesRef} type="text" name='nameRecipes' id='nameRecipes'></input>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Introduce un número de personas:</p>
                        <input ref={servingRef} type="number" name='numberPeople' id='numberPeople' ></input>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Introduce la url de la imagen:</p>
                        <input ref={imageUrlRef} type="text" name='urlImage' id='urlImage'></input>
                    </label>
                </fieldset>
                <button type='submit'>Añadir Receta</button>
            </form>
        </div>
    )
})
export default AddRecipes
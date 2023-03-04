import './RecipesList.css'
import React from "react"
import RecipesItems from './RecipesItems/RecipesItems'

const RecipesList =  (props) => {

    return (
        <div>
            <h2>Listado de recetas</h2>
            {props.recipesList.map((recipe) => 
               <RecipesItems
                    key={recipe.id}
                    recipe={recipe}>
               </RecipesItems>
            )}
        </div>
    )
}
export default RecipesList
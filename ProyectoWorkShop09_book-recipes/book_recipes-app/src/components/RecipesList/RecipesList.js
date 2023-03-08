import './RecipesList.css'
import React from "react"
import RecipesItems from './RecipesItems/RecipesItems'

const RecipesList =  React.memo((props) => {

    const selectedRecipe = React.useCallback((recipe) => {
        console.log(recipe.id)
        props.getDetailsRecipe(recipe.id)
      })

    return (
        <div>
            <h2>Listado de recetas</h2>
            {props.recipesList.map((recipe) => 
               <RecipesItems
                    key={recipe.id}
                    recipe={recipe}
                    selectedRecipe={() => selectedRecipe(recipe)}>
               </RecipesItems>
            )}
        </div>
    )
})
export default RecipesList
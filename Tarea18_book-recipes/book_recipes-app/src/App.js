import './App.css';
import AddRecipes from './components/AddRecipes/AddRecipes';
import React from 'react';
import RecipesList from './components/RecipesList/RecipesList';
import SelectedRecipes from './components/SelectedRecipes/SelectedRecipes';

const API_URL = "http://localhost:4000/recipes/"

function App() {
  
  const [recipeList, setRecipeList] = React.useState([])
  const [recipeDetail, setRecipeDetail] = React.useState(null)
  const [updateRecipeDetail, setUpdateRecipeDetail] = React.useState()

  React.useEffect(() => {
    getRecipesList()
  },[])


  const addRecipes = React.useCallback((event, newRecipe) =>{
    event.preventDefault()
    fetch(API_URL, {
      method : "POST",
      body : JSON.stringify(newRecipe),
      headers : {
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
        getRecipesList()
    })
  })

    const getRecipesList =  React.useCallback(() => {
      fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setRecipeList(data)
      })
    })

    const getDetailsRecipe =  React.useCallback((id) => {
      fetch(`${API_URL}/${id}`)
      .then(response => response.json())
      .then(data => {
        setRecipeDetail(data)
      })
    })

    const addIngredient =  React.useCallback((event, recipe, id) => {
      event.preventDefault()
      console.log(API_URL+id)
      fetch(`${API_URL}${id}`, {
        method : "PUT",
        body : JSON.stringify(recipe),
        headers : {
          "Content-Type" : "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
          getDetailsRecipe(id)
      })
    })


    console.log(recipeDetail)

  return (
    <div className="app">
      <AddRecipes addRecipes={addRecipes}></AddRecipes>
      <RecipesList recipesList={recipeList} getDetailsRecipe={getDetailsRecipe}></RecipesList>
      {(!recipeDetail) ? <p>Selecciona una receta</p> : <SelectedRecipes recipeDetail={recipeDetail} addIngredient={addIngredient} updateRecipeDetail={updateRecipeDetail} setUpdateRecipeDetail={setUpdateRecipeDetail}></SelectedRecipes>}
    </div>
  );
}

export default App;

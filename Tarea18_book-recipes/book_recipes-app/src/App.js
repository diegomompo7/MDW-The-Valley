import './App.css';
import AddRecipes from './components/AddRecipes/AddRecipes';
import React from 'react';
import RecipesList from './components/RecipesList/RecipesList';

const API_URL = "http://localhost:4000/recipes/"

function App() {
  
  const [recipeList, setRecipeList] = React.useState([])

  React.useEffect(() => {
    getRecipesList()
  },[])


  const addRecipes = (event, newRecipe) =>{
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
  }

    const getRecipesList = () => {
      fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setRecipeList(data)
      })
    }

    console.log(recipeList)

  return (
    <div className="app">
      <AddRecipes addRecipes={addRecipes}></AddRecipes>
      <RecipesList recipesList={recipeList}></RecipesList>
    </div>
  );
}

export default App;

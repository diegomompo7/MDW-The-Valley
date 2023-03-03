import './App.css';
import AddRecipes from './components/AddRecipes/AddRecipes';
import React from 'react';

const API_URL = "http://localhost:4000/recipes/"

function App() {

  const [newRecipe, setNewRecipe] = React.useState({
    name: "",
    serving: 0,
    imageUrl: "",
    ingredients : []
  })

  const addRecipes = (event) =>{
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
      setNewRecipe({
        name : "",
        serving: 0,
        imageUrl: ""
      })
    })

  }

  return (
    <div className="app">
      <AddRecipes newRecipe = {newRecipe} setNewRecipe = {setNewRecipe} addRecipes={addRecipes}></AddRecipes>
    </div>
  );
}

export default App;

const urlCategory = 'https://api.chucknorris.io/jokes/categories'
const taskCategorySelected = []
let taskCategoryContainer

window.onload = function(){
  initCategory();
}
const initCategory = () => {
    taskCategoryContainer = document.getElementsByClassName('printCategory')[0]
    fetch(urlCategory)
      .then (respuesta => respuesta.json())
      .then (respuesta => {
          printCategory(respuesta)
      })
    .catch(error => console.log(error))
}

const printCategory = (arrayCategories) => {
  console.log(arrayCategories)
  taskCategoryContainer.innerHTML = '';
  arrayCategories.forEach((element, i) => {
    let taskDOM = `
      <button class="click-button">${element}</button>
    `
    taskCategoryContainer.innerHTML = taskCategoryContainer.innerHTML + taskDOM
    
  });
  
  let clickButton = document.getElementsByClassName('click-button')

  arrayCategories.forEach((element, i) => {
  clickButton[i].addEventListener('click', () => {selectedCategory(arrayCategories[i])})
  })
}

const selectedCategory = (category) => {
  taskCategorySelected.push(category)
  console.log(taskCategorySelected)
}

let newJokeButton = document.getElementsByClassName('click-new')[0]
newJokeButton.addEventListener('click', () => {})


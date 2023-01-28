const urlCategory = 'https://api.chucknorris.io/jokes/categories'
const urlRandom = 'https://api.chucknorris.io/jokes/random'
let taskCategorySelected = []
let taskCategoryContainer
let newTaskCategorySelected = []
let divPrintChiste
let clickButton
let category;

window.onload = function () {
  initCategory();
}
const initCategory = () => {
  taskCategoryContainer = document.getElementsByClassName('main__printCategory')[0]
  divPrintChiste = document.getElementsByClassName('printChiste')[0]
  fetch(urlCategory)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
      printCategory(respuesta)
    })
    .catch(error => console.log(error))
}

const printCategory = (arrayCategories) => {
  taskCategoryContainer.innerHTML = '';
  arrayCategories.forEach((element, i) => {
    let taskDOM = `
      <button class="main__printCategory-click-button click-button--non-selected">${element}</button>
    `
    taskCategoryContainer.innerHTML = taskCategoryContainer.innerHTML + taskDOM

  });

  clickButton = [...document.getElementsByClassName('click-button--non-selected')]

  arrayCategories.forEach((element, i) => {
    clickButton[i].addEventListener('click', () => { selectedCategory(arrayCategories[i], i) })
  })
}

const selectedCategory = (category, i) => {
  if (taskCategorySelected.includes(category) == true) {
    newTaskCategorySelected = taskCategorySelected.filter((item) => item !== category)
    taskCategorySelected = newTaskCategorySelected
    clickButton[i].classList.remove("click-button--selected")
    clickButton[i].classList.add("click-button--non-selected")
    console.log(taskCategorySelected)
  } else {
    taskCategorySelected.push(category)
    clickButton[i].classList.remove("click-button--non-selected")
    clickButton[i].classList.add("click-button--selected")
    console.log(taskCategorySelected)
  }
}
const generateChiste = () => {
  if (taskCategorySelected[0] === undefined) {
    fetch(urlRandom)
      .then(respuesta => respuesta.json())
      .then(respuesta => {
        printChiste(respuesta.value)
      })
      .catch(error => console.log(error))
  } else {
    category = taskCategorySelected.join(',')
    urlRandomCategory = urlRandom + '?category=' + category
    console.log(urlRandomCategory)
    fetch(urlRandomCategory)
      .then(respuesta => respuesta.json())
      .then(respuesta => {
        printChiste(respuesta.value)
      })
      .catch(error => console.log(error))
  }
}

const printChiste = (chiste) => {
  divPrintChiste.innerHTML = ''
  taskDOM = `
    <h2>${chiste}</h2>
  `
  divPrintChiste.innerHTML = taskDOM
}
const resetCategory = () => {
  for(let i=0; i<clickButton.length; i++){
    if(clickButton[i].classList.value  === 'click-button--selected'){
      console.log("reset")
      clickButton[i].classList.remove("click-button--selected")
      clickButton[i].classList.add("click-button--non-selected")
    }
  }
  taskCategorySelected = []
}

let newJokeButton = document.getElementsByClassName('main__printOperators-click-new')[0]
let resetButton = document.getElementsByClassName('main__printOperators-click-reset')[0]
newJokeButton.addEventListener('click', () => { generateChiste() })
resetButton.addEventListener('click', () => { resetCategory() })


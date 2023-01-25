let divList = document.getElementsByClassName('printList')[0];
let listItems = [];
let contList = 0;


window.onload = function () {
  mostrarItems()

}
function getList(valueL) {
  let divItems = document.createElement("div")
  divItems.setAttribute("class", "printList__items")
  divItems.insertAdjacentHTML('beforeend', '<p id="list" class="printList__items-text">' + valueL + '</p>');

  let divEdit = document.createElement("div")
  divEdit.setAttribute("class", "printList__items-edit")
  let editButton = document.createElement("button")
  let editElement = document.createElement("i")
  editElement.setAttribute("class", "fa-sharp fa-solid fa-pen")

  let deleteButton = document.createElement("button")
  let deleteElement = document.createElement("i")
  deleteButton.setAttribute("id", "remove")
  deleteElement.setAttribute("class", "fa-solid fa-trash");
  deleteButton.click(function () { deleteProductFromList(localStorage.length) });


  divList.appendChild(divItems)
  divList.appendChild(divEdit)
  divEdit.appendChild(editButton)
  editButton.appendChild(editElement)
  divEdit.appendChild(deleteButton)
  deleteButton.appendChild(deleteElement)

}

function setList() {
  let valueList = document.getElementById('list').value;
  localStorage.setItem('list' + contList, valueList);

  contList++
  getList(valueList);

}

function deleteProductList(elementPosition) {
  console.log("hola")

  for (let i = 0; i <= elementPosition; i++) {
    if (i === elementPosition) {
      localStorage.removeItem('list' + i)
    }
  }
  mostrarItems();
}
function editProductList(elementPosition) {
  console.log("edit")

  document.getElementById("list").textContent = elementPosition
  mostrarItems();
}



function mostrarItems() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== undefined) {
      let divItems = document.createElement("div")
      divItems.setAttribute("class", "printList__items")
      divItems.insertAdjacentHTML('beforeend', '<p id="list" class="printList__items-text">' + localStorage.getItem(key) + '</p>');

      let divEdit = document.createElement("div")
      divEdit.setAttribute("class", "printList__items-edit")
      let editButton = document.createElement("button")
      let editElement = document.createElement("i")
      editButton.setAttribute("class", "edit")
      editElement.setAttribute("class", "fa-sharp fa-solid fa-pen")
      editButton.click(function() { deleteProductFromCart(i) })

      let deleteButton = document.createElement("button")
      let deleteElement = document.createElement("i")
      deleteButton.setAttribute("class", "delete")
      deleteElement.setAttribute("class", "fa-solid fa-trash");



      divList.appendChild(divItems)
      divList.appendChild(divEdit)
      divEdit.appendChild(editButton)
      editButton.appendChild(editElement)
      divEdit.appendChild(deleteButton)
      deleteButton.appendChild(deleteElement)

      contList = localStorage.length
    }

  }
}
document.getElementById("anadir").addEventListener("click", () => setList());

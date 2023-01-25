let divList = document.getElementsByClassName('printList')[0];
let listItems = [];

function getList(){
  for(let i=0; i<=listItems.length-1; i++) {
    let key = localStorage.key(i);
    let divItems = document.createElement("div")
    divItems.setAttribute("class", "printList__items")
    divItems.insertAdjacentHTML('beforeend', '<p id="list" class="printList__items-text">' +  localStorage.getItem(key) + '</p>');

    let divEdit = document.createElement("div")
    divEdit.setAttribute("class", "printList__items-edit")
    let editButton = document.createElement("button")
    let editElement = document.createElement("i")
    editElement.setAttribute("class", "fa-sharp fa-solid fa-pen")

    let deleteButton = document.createElement("button")
    let deleteElement = document.createElement("i")
    deleteElement.setAttribute("class", "fa-solid fa-trash");
    deleteButton.click( deleteProductList(i))

    

    divList.appendChild(divItems)
    divList.appendChild(divEdit)
    divEdit.appendChild(editButton)
    editButton.appendChild(editElement)
    divEdit.appendChild(deleteButton)
    deleteButton.appendChild(deleteElement)

  }
}

function setList(){
  let valueList = document.getElementById('list').value;
  localStorage.setItem('list', valueList);

  listItems.push(valueList);
  getList();

}

function deleteProductList(elementPosition){
  let listItemsAux = [];
  console.log("hola")

  for(let i = 0; i< listItems.length; i++){
      if(i !== elementPosition){
          listItemsAux.push(listItems[i]);
      }
  }
  listItems = listItemsAux;
  getList();
}


document.getElementById("anadir").addEventListener("click" , () => setList())
let divList = document.getElementsByClassName('printList')[0];
let contList = 0;
let taskList = [];
let newTaskInput;
let taskListContainer;
let lastIndexTask = 0
let editing = false


window.onload = function () {
  initDOM();
  
  let infoLS = localStorage.getItem('tasks');
  if(infoLS !== null && infoLS !== ''){
    taskList = infoLS.split('/')
    getList();
  }

}

const initDOM = () =>{
  newTaskInput = document.getElementById('list');
  taskListContainer = document.getElementsByClassName('printList')[0];
  let buttonAdd = document.getElementById("anadir");
  buttonAdd.addEventListener("click", () => setList(newTaskInput.value));
}

function getList() {
  taskListContainer.innerHTML = '';
  taskList.forEach((element, i) => {
    let taskDOM = `
      <div class="printList__items">
        <span "printList__items-text">${element}</span>
      </div>
      <div class="printList__items-edit">  
        <button class="task-edit"><i class="fa-sharp fa-solid fa-pen"></i></button>
        <button class="task-delete"><i class="fa-solid fa-trash"></i></button>
      </div>
    `
    taskListContainer.innerHTML = taskListContainer.innerHTML + taskDOM
  });

  let editButtons = document.getElementsByClassName(`task-edit`)
  let deleteButtons = document.getElementsByClassName(`task-delete`)

  taskList.forEach((element, i) => {
    deleteButtons[i].addEventListener('click', () => {deleteTask(i)})
    editButtons[i].addEventListener('click', () => {editTask(i)})
  })
}

function setList(newTask) {
  if(editing){
    taskList.splice(lastIndexTask, 0, newTask)
    editing = false
  }else{
  taskList.push(newTask)
  }
  newTaskInput.value = ''
  localStorage.setItem('tasks', taskList.join('/'))
  getList();
}

const deleteTask = (i) => {
  taskList.splice(i, 1)
  localStorage.setItem('tasks', taskList.join('/'))
  getList()
}

const editTask = (i) => {
  editing = true
  lastIndexTask = i
  newTaskInput.value = taskList[i]
  deleteTask(i)
}
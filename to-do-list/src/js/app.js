let task = "";
let tasks = [];
let counter = 0;
let taskList = document.querySelector('.task-list');
let inputTask = document.getElementById("task");
    inputTask.addEventListener('keypress', (e) => {
      validateKey(e.key);
    });

let formulario = document.getElementById("form");
    formulario.addEventListener('submit', (e) => {
      e.preventDefault();
      addNewTask(task);
      clearTask();
    });


/**
 * This function add a new task for the list
 * @param {string} task 
 * @returns {void}
 */
const addNewTask = (task) => {
  try {
    validateTask(task);
    tasks.push(task)
    renderTasks();
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * This function removes task for the list
 * @param {number} id 
 */
const removeTask = (id) => {
  tasks.splice(id, 1);
}

/**
 * This function render a tasks
 * @returns a new Task in the list
 */
const renderTasks = () => {
  let taskButton = document.createElement('button');
      taskButton.textContent = "Delete This";
      taskButton.addEventListener('click', (e) => {
        // Eliminamos el elemento del HTML
        taskButton.parentElement.remove();
        // Enviamos el ID y lo eliminamos del array
        let listItemID = taskButton.parentElement.id; 
        removeTask(listItemID);
      })
  let taskElement = document.createElement('li');
      taskElement.innerText = task;
      taskElement.id = counter++;
    
      taskElement.appendChild(taskButton);
      taskList.appendChild(taskElement);
}

/**
 * This function clear task for the variable
 * @returns {void}
 */
const clearTask = () => {
  task = "";
  inputTask.value = "";
}

/**
 * This function validate tasks
 * @param {string} task 
 * @returns {task | error}
 */
const validateTask = (task) => {
  if (task !== "" && task !== " ") {
    return task;
  } else {
    throw new Error("(!) La tarea no puede estar vacia");
  }
}

/**
 * This function validate entry key
 * @param {string} key 
 */
const validateKey = (key) => {
  (/^[a-zA-Z0-9 ]$/.test(key)) ? task += key : console.error(`${key} no añadida)`);
}
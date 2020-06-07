document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  //ul where new tasks will live on the DOM
  let newTaskUl = document.getElementById("tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

let someTaskUl = document.getElementById("tasks");


const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  document.getElementById("tasks").appendChild(newTask);
  event.target.reset();
};

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
// };
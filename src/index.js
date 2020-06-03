document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector("input[type=submit]").remove()

  const taskForm = document.querySelector("#create-task-form")
  const taskDescription = document.querySelector("#new-task-description")
  const tasksUl = document.querySelector("#tasks")

  function deleteTask(target){
    target.remove();
  }

  const dueDate = document.createElement("input")
  dueDate.id = "due-date-form"
  dueDate.setAttribute("type", "text")
  dueDate.setAttribute("placeholder", "duedate")
  taskForm.appendChild(dueDate)

  const submit = document.createElement("input")
  submit.setAttribute("type", "submit")
  taskForm.appendChild(submit)

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newLi = document.createElement("li")
    newLi.innerHTML = `${taskDescription.value}, ${dueDate.value}`
    newLi.className = "task"
    tasksUl.appendChild(newLi)
  })

  tasksUl.addEventListener("click", (e) => {
    if (e.target.className === "task") {
      target = e.target
      deleteTask(target);
    }
  })

});

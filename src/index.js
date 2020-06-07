document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const taskForm = document.querySelector("#create-task-form")
    const taskDescripton = document.querySelector("#new-task-description")
    const taskList = document.querySelector("#tasks")

    const newTask = e =>{
      e.preventDefault();

      const newTask = document.createElement('li')
      newTask.innerText = taskDescripton.value
      
      updateTaskList(newTask)
      e.target.reset()
    }

    const updateTaskList = task => {
      taskList.appendChild(task)
    }

    taskForm.addEventListener("submit", newTask);
});

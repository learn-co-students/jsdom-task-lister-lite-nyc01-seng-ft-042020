document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.getElementById('new-task-description')
  const taskUl = document.getElementById('tasks')
  const submit = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)")


  submit.addEventListener('click', function(e){
    e.preventDefault()
    const taskli = document.createElement('li')
    taskli.textContent = tasks.value
    tasks.value = ''
    taskUl.appendChild(taskli)
  })
});

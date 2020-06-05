document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)")
  const inputTask = document.getElementById('new-task-description')
  const taskUl = document.getElementById('tasks')


  submitButton.addEventListener('click', function(e){
    e.preventDefault()
    let userLi = document.createElement('li')
    let userInput = inputTask.value
    inputTask.value = ''
    userLi.innerText = userInput
    taskUl.append(userLi)
  })

});

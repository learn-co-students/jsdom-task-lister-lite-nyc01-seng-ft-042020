document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)")
  const tasksUL = document.getElementById('tasks')

  function addToList(text) {
    let listItem = document.createElement('li')
    let listButton = document.createElement('button')
    listItem.innerText = text
    listButton.textContent = "Xs"
    listButton.id = listItem.innerText

    listItem.append(listButton)
    tasksUL.append(listItem)
    listButton.addEventListener('click', function(e){
      listItem.remove()
    })
  }

  // form and .preventdefault
  submitButton.addEventListener('click', function(e){
    e.preventDefault()
    const inputText = document.getElementById('new-task-description').value
    addToList(inputText)
  })
});

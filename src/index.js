// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

const myForm = document.getElementById("create-task-form")

//creat a select dropdown for level of importance
const selectDropdown = document.createElement("select")

//insert select dropdown into existing form
myForm.children[1].insertAdjacentElement('afterend', selectDropdown)
const highOption = document.createElement("option")
highOption.innerText = "high"
selectDropdown.append(highOption)

const mediumOption = document.createElement("option")
mediumOption.innerText = "medium"
selectDropdown.append(mediumOption)

const lowOption = document.createElement("option")
lowOption.innerText = "low"
selectDropdown.append(lowOption)

function handleDelete(e) {
  e.target.parentElement.remove()
}

function importanceColor(importance) {
  if (importance === "high"){
    return "red"
  } else if (importance === "medium") {
    return "orange"
  } else {
    return "green"
  }
}

function handleFormSubmit(e) {
  e.preventDefault()
  // get params of what was submitted
  // variable for user's task
  const newTask = e.target["new-task-description"].value
  //save importance value into a variable
  const taskImportance = e.target.children[2].value
  // convert importance level into color
  const color = importanceColor(taskImportance)
  //display the task on the DOM
  // this selects UL off the page
  const taskUL = document.querySelector("#tasks")
  // created a delete button
  const deleteButton = document.createElement("button")
  deleteButton.addEventListener("click", handleDelete)
  // make the inner text of button an X
  deleteButton.innerText = "x"
  // create a new LI tag
  const LI = document.createElement("li")
  LI.style.color = color
  // info from user into LI tage
  // modify LI to have text
  LI.textContent = newTask
  LI.append(deleteButton)

  // append as child to task UL
  taskUL.appendChild(LI)
  // clear the form
  e.target.reset()
}


myForm.addEventListener("submit", handleFormSubmit)
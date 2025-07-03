// assign variable for the main content
var mainContentEl = document.querySelector(".main-content");

// assign a variable  for the taskInput paragraph
var taskInput = document.getElementById("taskInput");

// assign a variable  the addTaskButton Button
var addTaskButton = document.getElementById("addTaskButton");

// create a new div element
var tasksDiv = document.createElement("div");
tasksDiv.className = "widget";
tasksDiv.id="taskDiv";

// Create the Heading 2 and Paragraph elements
var todoHeader = document.createElement("h2");
todoHeader.textContent = "List of Tasks";

var todoParagraph = document.createElement("p");
todoParagraph.textContent = "Below is the list of all my tasks.  to be deleted when done";

// append the new elements to the new div
tasksDiv.appendChild(todoHeader);
tasksDiv.appendChild(todoParagraph);

// append the new div to the main content
mainContentEl.appendChild(tasksDiv);


//create a variable for  number of tasks 
var taskNumber = 0;
// arrays  of tasks and buttons to be used for deleting the tasks
var tasks = [];
var buttons = [];



//add an event listener to the addTaskButton that calls the function when clicked
addTaskButton.addEventListener("click", testForValidInput);

function testForValidInput(){

  if (taskInput.value == "" || taskInput.value == "Enter new task here"){
        console.log("enter valid task");
        alert("Please enter a valid task!");
  }
  else
   {
    addToTaskList();
  }
}

function addToTaskList() {
  // log thevalue property of the searchInput to get the task
  let taskToDo = taskInput.value;
  console.log(taskToDo);

  // create p and button elements
  // pNew is a paragraph that stores a new task
  let pNew = document.createElement("p");
  pNew.textContent=taskToDo;
  pNew.id="task"+taskNumber;
  tasks.push(taskToDo); // keeps array of tasks and uses the index in removal
  let buttonNew = document.createElement("button");
  buttonNew.textContent="Remove Task above";
  buttonNew.id="remove"+ taskNumber;
  buttonNew.className="removeButtons";
  buttons.push(buttonNew.id);

  // add event listner to buttons that activate the removal function on click
  buttonNew.addEventListener("click", removeFun);
  
  taskNumber +=1;

  // adds the new paragraph and button to the task Div.
  tasksDiv.appendChild(pNew);
  tasksDiv.appendChild(buttonNew);

  // adds the task Div to the main content
  mainContentEl.appendChild(tasksDiv);

}



function removeFun(){
  var arrayRef = buttons.indexOf(this.id);
  console.log(arrayRef);
  document.getElementById(this.id).remove();
  document.getElementById("task"+arrayRef).remove();

}


const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completed-list");
let i=1;

// Add event listener to the button
addTaskButton.addEventListener("click", () => {
  const taskValue = taskInput.value.trim(); // Get and trim input value

  if (taskValue) {
    // Create a new task item
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task" + `${i}`;

    // Create a label to display the task
    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskValue;
    taskLabel.htmlFor = "task" + `${i}`;

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          completedList.appendChild(taskItem); // Move to completed tasks
        } else {
          taskList.appendChild(taskItem); // Move back to pending tasks
        }
      });

    // Append checkbox and label to task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);

    // Append task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
    i++;

  } else {
    alert("Please enter a task.");
  }
});
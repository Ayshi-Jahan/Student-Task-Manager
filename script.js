
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");

// Function to mark a task as completed
function markCompleted(task, status, doneBtn) {
    task.classList.add("completed");
    status.textContent = "Completed";
    status.className = "status done";
    doneBtn.remove();
}

// Function to delete a task
function deleteTask(task) {
    task.remove();
}

// Function to add buttons to a task
function addTaskButtons(task, status) {
    const actions = document.createElement("div");
    actions.className = "task-actions";

    if (status.classList.contains("pending")) {
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.className = "complete-btn";

        doneBtn.addEventListener("click", function () {
            markCompleted(task, status, doneBtn);
        });

        actions.appendChild(doneBtn);
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        deleteTask(task);
    });

    actions.appendChild(deleteBtn);
    task.appendChild(actions);
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        errorMessage.textContent = "Please enter a task!";
        return;
    }

    errorMessage.textContent = "";

    const task = document.createElement("div");
    task.className = "task";

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const status = document.createElement("span");
    status.className = "status pending";
    status.textContent = "Pending";

    task.appendChild(taskName);
    task.appendChild(status);

    addTaskButtons(task, status);

    taskList.appendChild(task);
    taskInput.value = "";
}

// Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Add buttons to the three existing tasks
document.querySelectorAll(".task").forEach(function (task) {
    const status = task.querySelector(".status");
    addTaskButtons(task, status);
});

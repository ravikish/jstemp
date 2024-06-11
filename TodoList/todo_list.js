const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const selectAllBtn = document.getElementById("selectAllBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const redoCompletedBtn = document.getElementById("redoCompletedBtn"); // New redo button

const taskList = document.getElementById("taskList");
const completedTaskList = document.getElementById("completedTaskList");

addTaskBtn.addEventListener("click", addTask);
selectAllBtn.addEventListener("click", selectAllTasks);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
redoCompletedBtn.addEventListener("click", redoCompletedTasks); // Event listener for redo button

let tasks = [];
let completedHistory = []; // Array to store completed tasks history

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    completedTaskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (!task.completed) {
            const li = createTaskListItem(index, task.text);
            taskList.appendChild(li);
        } else {
            const completedLi = createTaskListItem(index, task.text, true);
            completedTaskList.appendChild(completedLi);
        }
    });
}

function createTaskListItem(index, text, isCompleted = false) {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="${isCompleted ? 'completed-task' : 'task'}-${index}" ${isCompleted ? 'checked' : ''}>
                    <label for="${isCompleted ? 'completed-task' : 'task'}-${index}">${text}</label>`;
    li.querySelector("input").addEventListener("change", () => toggleTask(index));
    return li;
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    completedHistory = tasks.filter(task => task.completed);
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function redoCompletedTasks() {
    tasks.push(...completedHistory);
    completedHistory = [];
    displayTasks();
}

function selectAllTasks() {
    tasks.forEach(task => task.completed = true);
    displayTasks();
}

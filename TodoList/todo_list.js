// TaskManager class to manage tasks
class TaskManager {
    constructor() {
        this.taskInput = document.getElementById("taskInput");
        this.addTaskBtn = document.getElementById("addTaskBtn");
        this.selectAllBtn = document.getElementById("selectAllBtn");
        this.clearCompletedBtn = document.getElementById("clearCompletedBtn");
        this.redoCompletedBtn = document.getElementById("redoCompletedBtn");
        this.taskList = document.getElementById("taskList");
        this.completedTaskList = document.getElementById("completedTaskList");

        this.tasks = [];
        this.completedHistory = [];

        this.addTaskBtn.addEventListener("click", this.addTask.bind(this));
        this.selectAllBtn.addEventListener("click", this.selectAllTasks.bind(this));
        this.clearCompletedBtn.addEventListener("click", this.clearCompletedTasks.bind(this));
        this.redoCompletedBtn.addEventListener("click", this.redoCompletedTasks.bind(this));
    }

    // Add task to task list
    addTask() {
        const taskText = this.taskInput.value.trim();
        if (taskText !== "") {
            this.tasks.push({ text: taskText, completed: false });
            this.taskInput.value = "";
            this.displayTasks();
        }
    }

    // Display tasks in appropriate lists
    displayTasks() {
        this.taskList.innerHTML = "";
        this.completedTaskList.innerHTML = "";

        this.tasks.forEach((task, index) => {
            if (!task.completed) {
                this.taskList.appendChild(this.createTaskListItem(index, task.text));
            } else {
                this.completedTaskList.appendChild(this.createTaskListItem(index, task.text, true));
            }
        });
    }

    // Create a task list item
    createTaskListItem(index, text, isCompleted = false) {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="${isCompleted ? 'completed-task' : 'task'}-${index}" ${isCompleted ? 'checked' : ''}>
                        <label for="${isCompleted ? 'completed-task' : 'task'}-${index}">${text}</label>`;
        li.querySelector("input").addEventListener("change", () => this.toggleTask(index));
        return li;
    }

    // Toggle task completion status
    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.displayTasks();
    }

    // Clear completed tasks
    clearCompletedTasks() {
        this.completedHistory = this.tasks.filter(task => task.completed);
        this.tasks = this.tasks.filter(task => !task.completed);
        this.displayTasks();
    }

    // Redo completed tasks
    redoCompletedTasks() {
        this.tasks.push(...this.completedHistory);
        this.completedHistory = [];
        this.displayTasks();
    }

    // Mark all tasks as completed
    selectAllTasks() {
        this.tasks.forEach(task => task.completed = true);
        this.displayTasks();
    }
}

// Instantiate TaskManager and start managing tasks
const taskManager = new TaskManager();

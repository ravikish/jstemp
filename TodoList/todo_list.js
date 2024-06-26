/**
 * Manages tasks on the webpage.
 */
class TaskManager {
    /**
     * Creates an instance of TaskManager.
     * @constructor
     */
    constructor() {
        /**
         * Represents the input field for adding new tasks.
         * @type {HTMLInputElement}
         */
        this.taskInput = document.getElementById("taskInput");

        /**
         * Represents the button for adding new tasks.
         * @type {HTMLButtonElement}
         */
        this.addTaskBtn = document.getElementById("addTaskBtn");

        /**
         * Represents the button for selecting all tasks.
         * @type {HTMLButtonElement}
         */
        this.selectAllBtn = document.getElementById("selectAllBtn");

        /**
         * Represents the button for clearing completed tasks.
         * @type {HTMLButtonElement}
         */
        this.clearCompletedBtn = document.getElementById("clearCompletedBtn");

        /**
         * Represents the button for redoing cleared completed tasks.
         * @type {HTMLButtonElement}
         */
        this.redoCompletedBtn = document.getElementById("redoCompletedBtn");

        /**
         * Represents the list of in-progress tasks.
         * @type {HTMLUListElement}
         */
        this.taskList = document.getElementById("taskList");

        /**
         * Represents the list of completed tasks.
         * @type {HTMLUListElement}
         */
        this.completedTaskList = document.getElementById("completedTaskList");

        /**
         * An array to store tasks.
         * @type {Array}
         */
        this.tasks = [];

        /**
         * An array to store completed tasks history.
         * @type {Array}
         */
        this.completedHistory = [];

        // Add event listeners
        this.addTaskBtn.addEventListener("click", this.addTask.bind(this));
        this.selectAllBtn.addEventListener("click", this.selectAllTasks.bind(this));
        this.clearCompletedBtn.addEventListener("click", this.clearCompletedTasks.bind(this));
        this.redoCompletedBtn.addEventListener("click", this.redoCompletedTasks.bind(this));
    }

    /**
     * Adds a new task to the task list.
     * @param {string} text - The text of the task.
     */
    addTask(text) {
        const taskText = this.taskInput.value.trim();
        if (taskText !== "") {
            this.tasks.push({ text: taskText, completed: false });
            this.taskInput.value = "";
            this.displayTasks();
        }
    }

    /**
     * Displays tasks in the appropriate lists.
     */
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

    /**
     * Creates a task list item.
     * @param {number} index - The index of the task.
     * @param {string} text - The text of the task.
     * @param {boolean} [isCompleted=false] - Indicates if the task is completed.
     * @returns {HTMLLIElement} The created task list item.
     */
    createTaskListItem(index, text, isCompleted = false) {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="${isCompleted ? 'completed-task' : 'task'}-${index}" ${isCompleted ? 'checked' : ''}>
                        <label for="${isCompleted ? 'completed-task' : 'task'}-${index}">${text}</label>`;
        li.querySelector("input").addEventListener("change", () => this.toggleTask(index));
        return li;
    }

    /**
     * Toggles the completion status of a task.
     * @param {number} index - The index of the task.
     */
    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.displayTasks();
    }

    /**
     * Clears completed tasks from the task list.
     */
    clearCompletedTasks() {
        this.completedHistory = this.tasks.filter(task => task.completed);
        this.tasks = this.tasks.filter(task => !task.completed);
        this.displayTasks();
    }

    /**
     * Redoes completed tasks that were previously cleared.
     */
    redoCompletedTasks() {
        this.tasks.push(...this.completedHistory);
        this.completedHistory = [];
        this.displayTasks();
    }

    /**
     * Marks all tasks as completed.
     */
    selectAllTasks() {
        this.tasks.forEach(task => task.completed = true);
        this.displayTasks();
    }
}

// Instantiate TaskManager and start managing tasks
const taskManager = new TaskManager();

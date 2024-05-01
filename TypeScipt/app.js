var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.taskList = document.getElementById("taskList");
        var addTaskBtn = document.getElementById("addTaskBtn");
        addTaskBtn.addEventListener("click", this.addTask.bind(this));
        // Load tasks from local storage when initializing
        this.loadTasks();
        // Listen for click events on task list to handle removal
        this.taskList.addEventListener("click", this.handleTaskClick.bind(this));
    }
    TaskManager.prototype.addTask = function () {
        var taskInput = document.getElementById("taskInput");
        var taskText = taskInput.value.trim();
        if (taskText !== "") {
            // Create list item element for the task
            var li = document.createElement("li");
            li.textContent = taskText;
            // Create remove button for the task
            var removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            li.appendChild(removeBtn);
            // Append the task to the task list
            this.taskList.appendChild(li);
            taskInput.value = "";
            // Save tasks to local storage
            this.saveTasks();
        }
    };
    TaskManager.prototype.handleTaskClick = function (event) {
        var target = event.target;
        if (target.tagName === "BUTTON") {
            var li = target.parentElement;
            if (li) {
                li.remove();
                // Save tasks to local storage after removal
                this.saveTasks();
            }
        }
    };
    TaskManager.prototype.saveTasks = function () {
        // Retrieve tasks from the task list and store them in local storage
        var tasks = Array.from(this.taskList.querySelectorAll("li")).map(function (li) { return li.textContent; });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    TaskManager.prototype.loadTasks = function () {
        var _this = this;
        // Retrieve tasks from local storage and display them in the task list
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function (task) {
            // Create list item element for each task
            var li = document.createElement("li");
            li.textContent = task;
            // Check if the task already contains a "Remove" button
            if (!li.querySelector("button")) {
                // Add remove button only if not already present
                var removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                li.appendChild(removeBtn);
            }
            _this.taskList.appendChild(li);
        });
    };
    return TaskManager;
}());
// Initialize the TaskManager when the DOM is ready
/* Document Object Model (DOM) - a programming interface used to make static websites functional*/
document.addEventListener("DOMContentLoaded", function () {
    new TaskManager();
});

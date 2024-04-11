class TaskManager {
    private taskList: HTMLUListElement;

    constructor() {
        this.taskList = document.getElementById("taskList") as HTMLUListElement;
        const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
        addTaskBtn.addEventListener("click", this.addTask.bind(this));

        // Load tasks from local storage when initializing
        this.loadTasks();

        // Listen for click events on task list to handle removal
        this.taskList.addEventListener("click", this.handleTaskClick.bind(this));
    }


    addTask() {
        const taskInput = document.getElementById("taskInput") as HTMLInputElement;
        const taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            // Create list item element for the task
            const li = document.createElement("li");
            li.textContent = taskText;

            // Create remove button for the task
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            li.appendChild(removeBtn);

            // Append the task to the task list
            this.taskList.appendChild(li);
            taskInput.value = "";

            // Save tasks to local storage
            this.saveTasks();
        }
    }

    handleTaskClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (target.tagName === "BUTTON") {
            const li = target.parentElement;
            if (li) {
                li.remove();
                // Save tasks to local storage after removal
                this.saveTasks();
            }
        }
    }

    saveTasks() {
        // Retrieve tasks from the task list and store them in local storage
        const tasks = Array.from(this.taskList.querySelectorAll("li")).map(li => li.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    loadTasks() {
        // Retrieve tasks from local storage and display them in the task list
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task: string) => {
            // Create list item element for each task
            const li = document.createElement("li");
            li.textContent = task;

            // Check if the task already contains a "Remove" button
            if (!li.querySelector("button")) {
                // Add remove button only if not already present
                const removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                li.appendChild(removeBtn);
            }

            this.taskList.appendChild(li);
        });
    }
}

// Initialize the TaskManager when the DOM is ready
/* Document Object Model (DOM) - a programming interface used to make static websites functional*/
document.addEventListener("DOMContentLoaded", () => {
    new TaskManager();
});

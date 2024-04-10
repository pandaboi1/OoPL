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
            // Add listed text
            const li = document.createElement("li");
            li.textContent = taskText;

            // Add remove button
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            li.appendChild(removeBtn);

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
        const tasks = Array.from(this.taskList.querySelectorAll("li")).map(li => li.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task: string) => {
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
/* Document Object Model (DOM) is a programming interface 
implemented by browsers to make static websites functional*/
document.addEventListener("DOMContentLoaded", () => {
    new TaskManager();
});

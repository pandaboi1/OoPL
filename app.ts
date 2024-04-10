class TaskManager {
    private taskList: HTMLUListElement;

    constructor() {
        this.taskList = document.getElementById("taskList") as HTMLUListElement;
        const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
        addTaskBtn.addEventListener("click", this.addTask.bind(this));
    }

    addTask() {
        const taskInput = document.getElementById("taskInput") as HTMLInputElement;
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            this.taskList.appendChild(li);
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    }
}

// Initialize the TaskManager when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    new TaskManager();
});



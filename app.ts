class TaskManager {
    constructor() {}

    addTask(taskText: string): void {
        console.log(`Adding task: ${taskText}`);
        // Here, you would implement logic to add the task to your server or perform other server-side operations
    }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Sample task text
const sampleTaskText = "Sample Task";

// Add the sample task
taskManager.addTask(sampleTaskText);

var TaskManager = /** @class */ (function () {
    function TaskManager() {
    }
    TaskManager.prototype.addTask = function (taskText) {
        console.log("Adding task: ".concat(taskText));
        // Here, you would implement logic to add the task to your server or perform other server-side operations
    };
    return TaskManager;
}());
// Create an instance of TaskManager
var taskManager = new TaskManager();
// Sample task text
var sampleTaskText = "Sample Task";
// Add the sample task
taskManager.addTask(sampleTaskText);

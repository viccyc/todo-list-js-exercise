// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  // taskTitles.push(title);
  // taskDescription.push(description);
  // taskComplete.push(false);
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    taskCompleted: function() {
      this.complete = true;
    }
  }  
  return task;
}

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

const task1 = newTask("Buy chips", "Buy chips from shop and eat them all");
const task2 = newTask("see fridends", "Make sure you make time to see your friends in all this craziness");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.taskCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);


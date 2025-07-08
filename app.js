const taskForm=document.getElementById("task-form");
const taskList=document.getElementById("task-list");

//counter variable that will keep trak of my index

let taskIndex = 1;


//console.log(taskForm, taskList);

taskForm.addEventListener("submit",function (event){
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    
    if(taskText !== ""){
        //create a new Task iTEM
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent = `${taskIndex}) ${taskText}`;


        taskItem.addEventListener("click", function(){
            //toggle the completed class on click
            this.classList.toggle("completed");
            reorderTasks();
        })
        //appened tge task item to the task list 
        taskList.appendChild(taskItem);

        //increment the task index
        taskIndex++;
        taskInput.value="";
    }
    
    
    
});

function reorderTasks(){
    const tasks = Array.from(taskList.children);
    const incomplete = tasks.filter(task => !task.classList.contains("completed"));
    const completed = tasks.filter(task => task.classList.contains("completed"));

    taskList.innerHTML = "";

    incomplete.forEach(task => taskList.appendChild(task));
    completed.forEach(task => taskList.appendChild(task));
}


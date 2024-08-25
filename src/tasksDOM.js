import todo from "./myobject.js";
import {
   isValid,
    isToday,
    parseISO,
    format,
    addDays,
    isWithinInterval,
    parse,
} from "date-fns";

export default function tasksDOM(todo, projectTitle) {
    const tasksDiv = document.querySelector(".taskbar");
    tasksDiv.innerHTML = "";

   const task = todo[projectTitle];
    
    for (let tasks in task){
      
        let taskDate = task[tasks].date;
        console.log(taskDate,format(taskDate,'dd/MM/yyyy'))
        
        // Log the date value to see what it's holding before processing
        console.log(`Task: ${task[tasks].title}, Date: ${isValid(parseISO(taskDate))}`);

        // Create the task div and insert into DOM
        const a_task = document.createElement("div");
        a_task.classList.add("task");
        a_task.innerHTML = `
            <div class="taskleft">
            <div class="taskTitle"><input type="checkbox">${task[tasks].title}: </div>
            <div class="taskDesc">${task[tasks].description}</div>
        </div>
        <div class="taskRight">
            <div class="taskDate">${format(parseISO(taskDate), "dd/MM/yyyy") }</div>  <!-- Format the date -->
            <div class="buttons">
                <button id="Delbtn ${task[tasks].title} " class=' ${task} ' >
                  <img src="../src/assets/delete.svg" id='Del ${task[tasks].title}' class='${task}' alt="">
                </button>
            </div>
        </div>`;
        
        tasksDiv.appendChild(a_task);
    }

    // Add event listener for delete buttons
    tasksDiv.addEventListener('click', (e) => {
        const target = e.target.id.split(" ");
        const firstpart = target[0];
        const secondpart = target.slice(1).join(" ");

        if (firstpart === 'Delbtn' || firstpart === 'Del') {
            console.log('deleting');
            delete todo[projectTitle][secondpart];
            localStorage.setItem("todo", JSON.stringify(todo));
            tasksDOM(todo, projectTitle);  // Re-render the tasks
        }
    });
}
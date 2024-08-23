import todo from "./myobject.js";
import {
    isToday,
    parseISO,
    format,
    addDays,
    isWithinInterval,
  } from "date-fns";

export default function tasksDOM(todo,projectTitle) {
  const tasksDiv = document.querySelector(".taskbar");
  tasksDiv.innerHTML = "";
  let tasks = todo[projectTitle];
  for (const task in tasks) {
    const a_task = document.createElement("div");
    a_task.classList.add("task");
    a_task.innerHTML = `
        <div class="taskleft">
            <div class="taskTitle"><input type="checkbox">${tasks[task].title}: </div>
            <div class="taskDesc">${tasks[task].description}</div>
        </div>
        <div class="taskRight">
            <div class="taskDate">${ format(tasks[task].date, "dd/MM/yyyy", new Date())}</div>
            <div class="buttons">
                <button id="Delbtn ${tasks[task].title} "><img src="../src/assets/delete.svg" alt="" id='Del ${tasks[task].title}'></button>
            </div>
        </div>`;
    tasksDiv.appendChild(a_task)
  }
  tasksDiv.addEventListener('click',(e)=>{
    const target = e.target.id.split(" ")
    const firstpart = target[0]
    const secondpart = target.slice(1).join(" ");
    // console.log(target); 
    if(firstpart=== 'Delbtn' ||firstpart === 'Del'){
      console.log('deleting');
      console.log(projectTitle)
      console.log(todo[projectTitle][secondpart]);

      delete todo[projectTitle][secondpart];
      localStorage.setItem("todo", JSON.stringify(todo));

      tasksDOM(todo,projectTitle)
    }
  })
}

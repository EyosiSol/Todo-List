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
                <button id="favbtn"><img src="../src/assets/star_filled.svg" alt=""></button>
                <button id="editbtn"><img src="../src/assets/edit.svg" alt=""></button>
                <button id="Delbtn"><img src="../src/assets/delete.svg" alt=""></button>
            </div>
        </div>`;
    tasksDiv.appendChild(a_task)
  }
}

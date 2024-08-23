import todo from "./myobject";
import { isToday, parseISO, format, addDays, isWithinInterval } from "date-fns";

export default function Today(todo) {
  const taskdiv = document.querySelector(".taskbar");
  taskdiv.innerHTML = "";

  for (const task in todo) {
    for (const tasks in todo[task]) {
      console.log(todo[task][tasks].date);
      console.log(isToday(todo[task][tasks].date));
      if (isToday(todo[task][tasks].date)) {
        const a_task = document.createElement("div");
        a_task.classList.add("task");
        a_task.innerHTML = `
            <div class="taskleft"> 
                <div class="taskTitle"><input type="checkbox">${todo[task][tasks].title}:</div>
                <div class="taskDesc">${todo[task][tasks].description}</div>
            </div>
            <div class="taskRight">
                <div class="taskDate">${format(todo[task][tasks].date,"dd/MM/yyyy",new Date())}</div>
                <div class="buttons">
                    <button id="Delbtn"><img src="../src/assets/delete.svg" alt=""></button>
                </div>
            </div>
          `;

        taskdiv.appendChild(a_task);
        const addTask = document.querySelector('.addTask')
        addTask.style.display = 'none'
      }
    }
  }
}

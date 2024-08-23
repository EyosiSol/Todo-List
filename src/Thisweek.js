import todo from "./myobject";
import { isToday, parseISO, format, addDays, isWithinInterval } from "date-fns";

export default function Thisweek(todo) {
  const taskdiv = document.querySelector(".taskbar");
  taskdiv.innerHTML = "";

  const today = new Date();
  const nextweek = addDays(today, 7);
  console.log(today);
  console.log(nextweek);
  for (const task in todo) {
    for (const tasks in todo[task]) {
      if (
        isWithinInterval(todo[task][tasks].date, {
          start: today,
          end: nextweek,
        })
      ) {
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
                    <button id="favbtn"><img src="../src/assets/star_filled.svg" alt=""></button>
                    <button id="editbtn"><img src="../src/assets/edit.svg" alt=""></button>
                    <button id="Delbtn"><img src="../src/assets/delete.svg" alt=""></button>
            </div>
            </div>
              `;
        taskdiv.appendChild(a_task);
      }
    }
  }
}

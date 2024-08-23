import todo from './myobject'
import {
  isToday,
  parseISO,
  format,
  addDays,
  isWithinInterval,
} from "date-fns";

export default function showall(todo){
    const taskdiv = document.querySelector('.taskbar')
    taskdiv.innerHTML = '';
    console.log('showall');
    
    for(const tasks in todo){
      for(const task in todo[tasks]){
        const a_task = document.createElement('div')
        a_task.classList.add('task');
        a_task.innerHTML = `
        <div class="taskleft">
            <div class="taskTitle"><input type="checkbox">${todo[tasks][task].title}: </div>
            <div class="taskDesc">${todo[tasks][task].description}</div>
        </div>
        <div class="taskRight">
            <div class="taskDate">${ format(todo[tasks][task].date, "dd/MM/yyyy", new Date())}</div>
            <div class="buttons">
                <button id="Delbtn"><img src="../src/assets/delete.svg" alt=""></button>
            </div>
        </div>`;
        taskdiv.appendChild(a_task)

        const addTask = document.querySelector('.addTask')
        addTask.style.display = 'none'
      }
    }
}


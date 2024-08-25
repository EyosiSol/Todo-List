import todo from "./myobject";
import { isToday, parseISO, format, addDays, isWithinInterval } from "date-fns";

export default function Thisweek(todo) {
  const taskdiv = document.querySelector(".taskbar");
  taskdiv.innerHTML = "";

  const today = new Date();
  const nextweek = addDays(today, 7);
  console.log(today);
  console.log(nextweek);

  // const project = todo[]
  for (const project in todo) {
    console.log(project);
    
    for (let tasks in todo[project]) {
      // console.log(tasks);
      
      let taskDate = todo[project][tasks].date;
      // console.log(taskDate);
      
      if (
        isWithinInterval(taskDate, {
          start: today,
          end: nextweek,
        })
      ) {
        console.log(todo[project][tasks].title);
        console.log (todo[project][tasks].description);
        
        
        const a_task = document.createElement("div");
        a_task.classList.add("task");
        a_task.innerHTML = `
            <div class="taskleft"> 
                <div class="taskTitle"><input type="checkbox">${todo[project][tasks].title}:</div>
                <div class="taskDesc">${todo[project][tasks].description}</div>
            </div>
            <div class="taskRight">
                <div class="taskDate">${format(parseISO(todo[project][tasks].date),"dd/MM/yyyy",new Date())}</div>
                <div class="buttons">
                   <button id="Delbtn ${todo[project][tasks].title} " class=' ${project} ' >
                  <img src="../src/assets/delete.svg" id='Del ${todo[project][tasks].title}' class='${project}' alt="">
                </button>
            </div>
            </div>
              `;
        taskdiv.appendChild(a_task);
      }
    }
  }
  
  taskdiv.addEventListener('click', (e) => {
    const target = e.target.id.split(" ");
    const firstpart = target[0];
    const secondpart = target.slice(1).join(" ");
    const title = e.target.className;
    console.log(e.target.className);
    console.log(secondpart);
    console.log(todo[title][secondpart]);

    if (firstpart === 'Delbtn' || firstpart === 'Del') {
      console.log('deleting');
      delete todo[title][secondpart];
      localStorage.setItem("todo", JSON.stringify(todo));
      Thisweek(todo)  // Re-render after deletion
    }
  });
}

{/* <button id="favbtn"><img src="../src/assets/star_filled.svg" alt=""></button>
<button id="editbtn"><img src="../src/assets/edit.svg" alt=""></button> */}
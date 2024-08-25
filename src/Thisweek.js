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
    console.log(task);
    
    for (const tasks in todo[task]) {
      console.log(tasks);
      
      let taskDate = todo[tasks][task].date;
      if (
        isWithinInterval(taskDate, {
          start: today,
          end: nextweek,
        })
      ) {
        console.log(todo[task][tasks].title);
        console.log(todo[task][tasks].description);
        
        
        // const a_task = document.createElement("div");
        // a_task.classList.add("task");
        // a_task.innerHTML = `
        //     <div class="taskleft"> 
        //         <div class="taskTitle"><input type="checkbox">${todo[task][tasks].title}:</div>
        //         <div class="taskDesc">${todo[task][tasks].description}</div>
        //     </div>
        //     <div class="taskRight">
        //         <div class="taskDate">${format(todo[task][tasks].date,"dd/MM/yyyy",new Date())}</div>
        //         <div class="buttons">
        //            <button id="Delbtn ${todo[tasks][task].title} " class=' ${tasks} ' >
        //           <img src="../src/assets/delete.svg" id='Del ${todo[tasks][task].title}' class='${tasks}' alt="">
        //         </button>
        //     </div>
        //     </div>
        //       `;
        // taskdiv.appendChild(a_task);
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
      showall(todo);  // Re-render after deletion
    }
  });
}

{/* <button id="favbtn"><img src="../src/assets/star_filled.svg" alt=""></button>
<button id="editbtn"><img src="../src/assets/edit.svg" alt=""></button> */}
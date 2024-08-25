import todo from './myobject'
import {
  isToday,
  parseISO,
  format,
  addDays,
  isWithinInterval,
  isValid
} from "date-fns";

export default function showall(todo) {
  const taskdiv = document.querySelector('.taskbar');
  taskdiv.innerHTML = '';
  console.log('showall');

  for (const tasks in todo) {
    for (const task in todo[tasks]) {
      let taskDate = todo[tasks][task].date;

      // If the task date is null or invalid, set it to the current date
      if (!taskDate || !isValid(parseISO(taskDate))) {
        const currentDate = new Date();
        taskDate = format(currentDate, "yyyy-MM-dd");  // Set current date in ISO format
      }

      const a_task = document.createElement('div');
      a_task.classList.add('task');
      a_task.innerHTML = `
        <div class="taskleft">
            <div class="taskTitle"><input type="checkbox">${todo[tasks][task].title}: </div>
            <div class="taskDesc">${todo[tasks][task].description}</div>
        </div>
        <div class="taskRight">
            <div class="taskDate">${ format(parseISO(taskDate), "dd/MM/yyyy") }</div>  <!-- Format the date -->
            <div class="buttons">
                <button id="Delbtn ${todo[tasks][task].title} " class=' ${tasks} ' >
                  <img src="../src/assets/delete.svg" id='Del ${todo[tasks][task].title}' class='${tasks}' alt="">
                </button>
            </div>
        </div>`;
      taskdiv.appendChild(a_task);

      const addTask = document.querySelector('.addTask');
      addTask.style.display = 'none';
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


// import todo from './myobject'
// import {
//   isToday,
//   parseISO,
//   format,
//   addDays,
//   isWithinInterval,
// } from "date-fns";

// export default function showall(todo){
//     const taskdiv = document.querySelector('.taskbar')
//     taskdiv.innerHTML = '';
//     console.log('showall');
    
//     for(const tasks in todo){
//       for(const task in todo[tasks]){
//         const a_task = document.createElement('div')
//         a_task.classList.add('task');
//         a_task.innerHTML = `
//         <div class="taskleft">
//             <div class="taskTitle"><input type="checkbox">${todo[tasks][task].title}: </div>
//             <div class="taskDesc">${todo[tasks][task].description}</div>
//         </div>
//         <div class="taskRight">
//             <div class="taskDate">${ format(todo[tasks][task].date, "dd/MM/yyyy", new Date())}</div>
//             <div class="buttons">
//                 <button id="Delbtn ${todo[tasks][task].title} " class=' ${tasks} ' ><img src="../src/assets/delete.svg" id = 'Del ${todo[tasks][task].title}' class='${tasks}' alt=""></button>
//             </div>
//         </div>`;
//         taskdiv.appendChild(a_task)

//         const addTask = document.querySelector('.addTask')
//         addTask.style.display = 'none'
//       }
//     }
//     taskdiv.addEventListener('click',(e)=>{
//       const target = e.target.id.split(" ")
//       const firstpart = target[0]
//       const secondpart = target.slice(1).join(" ");
//       const title = e.target.className;
//       console.log(e.target.className); 
//       console.log(secondpart)
//       console.log(todo[title][secondpart])

//       if(firstpart=== 'Delbtn' ||firstpart === 'Del'){
//         console.log('deleting');
//         console.log()
  
//         delete todo[title][secondpart];
//         localStorage.setItem("todo", JSON.stringify(todo));
        
//         showall(todo);
//       }
//     })
// }


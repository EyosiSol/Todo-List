import todo from "./myobject.js";
import {
   isValid,
    isToday,
    parseISO,
    format,
    addDays,
    isWithinInterval,
} from "date-fns";

export default function tasksDOM(todo, projectTitle) {
    const tasksDiv = document.querySelector(".taskbar");
    tasksDiv.innerHTML = "";
    let tasks = todo[projectTitle];

    for (const task in tasks) {
        let taskDate = tasks[task].date;
        // Log the date value to see what it's holding before processing
        console.log(`Task: ${tasks[task].title}, Date: ${isValid(taskDate)}`);
    //     // Ensure the date is valid
        if (taskDate && taskDate !== 'null' && taskDate !== '' && taskDate !== undefined) {
            try {
                // Parse the date if it's valid
                const parsedDate = parseISO(taskDate);
                if (!isNaN(parsedDate)) {
                    taskDate = format(parsedDate, 'MM/dd/yyyy');
                } else {
                    taskDate = "Invalid date";  // Handle invalid date format
                }
            } catch (error) {
                console.error("Error formatting date:", error);
                taskDate = "Invalid date";  // Handle any parsing errors
            }
        } else {
            taskDate = "No date provided";  // Handle null, 'null', or empty date values
        }

        // Create the task div and insert into DOM
        const a_task = document.createElement("div");
        a_task.classList.add("task");
        a_task.innerHTML = `
            <div class="taskleft">
                <div class="taskTitle"><input type="checkbox">${tasks[task].title}: </div>
                <div class="taskDesc">${tasks[task].description}</div>
            </div>
            <div class="taskRight">
                <div class="taskDate">${taskDate}</div>
                <div class="buttons">
                    <button id="Delbtn ${tasks[task].title} "><img src="../src/assets/delete.svg" alt="" id='Del ${tasks[task].title}'></button>
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




// import todo from "./myobject.js";
// import {
//     isToday,
//     parseISO,
//     format,
//     addDays,
//     isWithinInterval,
//   } from "date-fns";

// export default function tasksDOM(todo,projectTitle) {
//   const tasksDiv = document.querySelector(".taskbar");
//   tasksDiv.innerHTML = "";
//   let tasks = todo[projectTitle];
//   for (const task in tasks) {
//     if(tasks[task].date === null){
//       const a_task = document.createElement("div");
//       a_task.classList.add("task");
//       a_task.innerHTML = `
//           <div class="taskleft">
//               <div class="taskTitle"><input type="checkbox">${tasks[task].title}: </div>
//               <div class="taskDesc">${tasks[task].description}</div>
//           </div>
//           <div class="taskRight">
//               <div class="taskDate">${tasks[task].date}</div>
//               <div class="buttons">
//                   <button id="Delbtn ${tasks[task].title} "><img src="../src/assets/delete.svg" alt="" id='Del ${tasks[task].title}'></button>
//               </div>
//           </div>`;
//       tasksDiv.appendChild(a_task)
//     }else{
//       window.alert('not working')
//     }
  
//   }
//   tasksDiv.addEventListener('click',(e)=>{
//     const target = e.target.id.split(" ")
//     const firstpart = target[0]
//     const secondpart = target.slice(1).join(" ");
//     // console.log(target); 
//     if(firstpart=== 'Delbtn' ||firstpart === 'Del'){
//       console.log('deleting');
//       console.log(projectTitle)
//       console.log(todo[projectTitle][secondpart]);

//       delete todo[projectTitle][secondpart];
//       localStorage.setItem("todo", JSON.stringify(todo));

//       tasksDOM(todo,projectTitle)
//     }
//   })
// }

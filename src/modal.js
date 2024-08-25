// import addingTask from "./addingTask";
import todo from "./myobject";
import tasksDOM from "./tasksDOM";
import { parseISO, isValid, format } from "date-fns";  // Updated to use format

export default function modal() {
  // Creating the variables for the modal
  const openModal = document.querySelector("#addtask");
  const closeModal = document.querySelector("#cancel");
  const modal = document.querySelector("#modal");
  const submit = document.querySelector("#Add");
  const form = document.getElementById('taskform')

  openModal.addEventListener("click", () => {
    modal.showModal();
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault()


    const projectTitle = document.getElementById("title").innerText;
    const title = document.getElementById("Tasktitle").value;
    const description = document.getElementById("Desc").value;
    let date = parseISO(document.getElementById("date").value).toISOString();
    
    addingTask(todo, projectTitle, title, description, date);

    // Re-render tasks and reset form
    tasksDOM(todo, projectTitle);
    const form = document.getElementById("taskform");
    form.reset();
    modal.close();
  });
}

function addingTask(todo, projectTitle, title, description, date) {
  // Prevent adding tasks with invalid projectTitle, title, description, or date
  if (
    !(
      projectTitle === "All Task" ||
      projectTitle === "Today" ||
      projectTitle === "This Week"
    )
  ) {
    // Add the task only if all values are valid
    if (!todo[projectTitle]) {
      todo[projectTitle] = {};  // Initialize project if it doesn't exist
    }

    todo[projectTitle][title] = { title, description, date };
    localStorage.setItem("todo", JSON.stringify(todo));
  }
}











// // import addingTask from "./addingTask";
// import todo from "./myobject";
// import tasksDOM from "./tasksDOM";
// import { isToday, parseISO, format, addDays, isWithinInterval } from "date-fns";

// export default function modal() {
//   //creating the variables for the modal//
//   const openModal = document.querySelector("#addtask");
//   const closeModal = document.querySelector("#cancel");
//   const modal = document.querySelector("#modal");
//   const submit = document.querySelector("#Add");

//   openModal.addEventListener("click", () => {
//     modal.showModal();
//   });
//   closeModal.addEventListener("click", () => {
//     modal.close();
//   });

//   submit.addEventListener("click", () => {
//     const projectTitle = document.getElementById("title").innerText;
//     const title = document.getElementById("Tasktitle").value;
//     const description = document.getElementById("Desc").value;
//     const date = parseISO(document.getElementById("date").value);

//     if((date === 'null')){
//       alert('its null')
//     }else{
//       addingTask(todo, projectTitle, title, description, date);
//       tasksDOM(todo, projectTitle);
//       const form = document.getElementById("taskform");
//       form.reset();
//       modal.close()
//     }
  
//   });
  
// }

// function addingTask(todo, projectTitle, title, description, date) {
//   if (
//     !(
//       projectTitle == "All Task" ||
//       projectTitle == "Today" ||
//       projectTitle == "This Week"
//     )
//   ) {
//     let tasks = {};
//     tasks[title] = { title, description, date };
//     todo[projectTitle][title] = { title, description, date };
//     localStorage.setItem("todo", JSON.stringify(todo));
//   } else {
//     console.log("else");
//   }
// }

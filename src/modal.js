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

  form.addEventListener("submit", () => {
    const projectTitle = document.getElementById("title").innerText;
    const title = document.getElementById("Tasktitle").value;
    const description = document.getElementById("Desc").value;
    let dateInput = document.getElementById("date").value;
    
    // Automatically use the current date if the date input is empty
    if (!dateInput) {
      const currentDate = new Date();
      dateInput = format(currentDate, 'yyyy-MM-dd');  // Format to match input type="date"
    }
    
    const date = parseISO(dateInput);  // Parse the date input

    // // Validate title and description
    // if (!title || !description) {
    //   alert("Title and description cannot be empty.");
    //   return;  // Prevent form submission if invalid
    // }

    // If all validations pass, add the task
    addingTask(todo, projectTitle, title, description, dateInput);

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
    ) && title && description && date
  ) {
    // Add the task only if all values are valid
    if (!todo[projectTitle]) {
      todo[projectTitle] = {};  // Initialize project if it doesn't exist
    }

    todo[projectTitle][title] = { title, description, date };
    localStorage.setItem("todo", JSON.stringify(todo));
  } else {
    console.log("Invalid task data. Task not added.");
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

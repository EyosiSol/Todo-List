// import addingTask from "./addingTask";
import todo from './myobject'
import {
  isToday,
  parseISO,
  format,
  addDays,
  isWithinInterval,
} from "date-fns";

export default function modal(){

  //creating the variables for the modal//
  const openModal = document.querySelector("#addtask");
  const closeModal = document.querySelector("#cancel");
  const modal = document.querySelector("#modal");
  const submit = document.querySelector("#Add");

  openModal.addEventListener("click", () => {
    modal.showModal();
  });
  closeModal.addEventListener("click", () => {
    modal.close();
  });

  submit.addEventListener("click", () => {
    const projectTitle = document.getElementById('title').innerText
    const title = document.getElementById('Tasktitle').value
    const description = document.getElementById('Desc').value
    const date = parseISO(document.getElementById("date").value);

    addingTask(todo,projectTitle,title,description,date)

  });
  const form = document.getElementById('taskform')
    //del button
    form.reset()
    

  }

 function addingTask(
    todo,
    projectTitle,
    title,
    description,
    date
  ) {
    if(!(projectTitle == 'All Task' || projectTitle =='Today' || projectTitle == 'This Week')){
      let tasks = {};
      tasks[title] = { title, description, date };
      todo[projectTitle][title] = { title, description, date };
      localStorage.setItem("todo", JSON.stringify(todo));
    }
    else{
      console.log('else');
      
    }
    
  }

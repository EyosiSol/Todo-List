import createDOM from "./createDOM.js";
import addTask from "./addTask.js";

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
  

  //the logic for the submit button

  submit.addEventListener("click", (e) => {

    e.preventDefault();

    const myForm = document.querySelector("#taskform");
    const myTitle = myForm["title"];
    const myDesc = myForm["Desc"];
    const myDate = myForm["date"];



    const newtask = addTask(myTitle.value, myDesc.value, myDate.value);



    createDOM(newtask);

        
    myForm.reset();
    modal.close();
        
    });
 
  


}
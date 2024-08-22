import todo from "./myobject";
import projectDOM from "./projectDOM";

export default function addingproject(){
    const addbtn = document.getElementById('addbtn')
    const projectDiv = document.querySelector('.projects')
    console.log('adding');
    
    addbtn.addEventListener('click',()=>{
        const addingform = document.createElement('div')
        addingform.classList.add('addproject')
        addingform.innerHTML = `
            <form id="projectform">
                <input type="text" name="projectTitle" id="projectTitle" placeholder="Project Title" required />
            </form>
        `
        const addcancel = document.createElement('div')
        addcancel.classList.add('add-cancel')
        addcancel.innerHTML = `
            <button id="addProject">Add</button>
            <button id="cancelProject">Cancel</button>`
        addingform.appendChild(addcancel);

        projectDiv.appendChild(addingform);
        
        const cancelbtn = document.getElementById('cancelProject')
        cancelbtn.addEventListener('click',()=>{
        addingform.remove()});

        const addProjectbtn = document.getElementById('addProject')
        addProjectbtn.addEventListener('click',()=>{
            const projectTitle = document.getElementById('projectTitle').value
            addnewproject(todo,projectTitle);
            localStorage.setItem("todo", JSON.stringify(todo));
            projectDOM(todo);
            addingform.remove();

        })
    })

}

function addnewproject(todo, projectTitle) {
    if (todo[projectTitle]) {
      window.alert("Project already exists");
      return;
    }
    todo[projectTitle] = {};
    localStorage.setItem("todo", JSON.stringify(todo));

    //this function will take the todo object and the project title of the new cascaded project to be added and checks if the project already exists or not if not it will create an empty object and adds it to the object and set it to the localstorage
  }
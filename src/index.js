import mypic from "./assets/logo.png"
import "./styles/style.css";
import modal from "./modal.js"
import todo from './myobject.js'
import master from "./master.js";
import tasksDOM from "./tasksDOM.js";




const logodiv = document.getElementById('logo');
const logo = document.createElement('img');
logo.src = mypic;

logodiv.appendChild(logo);

console.log("Hello World");

const projectTitle = document.getElementById('title')
if(projectTitle.innerText == ''){
    projectTitle.innerText = 'All Task';
}

// modal();
master()
tasksDOM(todo)

// allDemo();

// addproject();




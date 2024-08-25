import mypic from "./assets/logo.png"
import "./styles/style.css";
import modal from "./modal.js"
import todo from './myobject.js'
import master from "./master.js";
import showall from "./showall.js";
import deletingTask from "./deletingTask.js";


const logodiv = document.getElementById('logo');
const logo = document.createElement('img');
logo.src = mypic;

logodiv.appendChild(logo);

console.log("Hello World");


modal();
master()
showall(todo)




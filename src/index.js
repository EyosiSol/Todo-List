import mypic from "./assets/logo.png"
import "./styles/style.css";
import modal from "./modal.js"


const logodiv = document.getElementById('logo');
const logo = document.createElement('img');
logo.src = mypic;

logodiv.appendChild(logo);

console.log("Hello World");


modal();

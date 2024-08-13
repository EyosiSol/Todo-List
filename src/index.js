import mypic from "./assets/logo.png"
import "./styles/style.css";
import modal from "./modal.js"
import createDOM from "./createDOM.js";
import taskTemp from "./taskTemp.js";
import addproject from "./addproject.js";
import allDemo from "./allDEMO.js"

const logodiv = document.getElementById('logo');
const logo = document.createElement('img');
logo.src = mypic;

logodiv.appendChild(logo);

console.log("Hello World");


modal();

// allDemo();

// addproject();




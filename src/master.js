import todo from './myobject'
import addingproject  from './addingProject';
import projectDOM from './projectDOM';
import addingTask from './addingTask';
import sidebar from './sidebar';
import modal from './modal';
import tasksDOM from './tasksDOM';
import showall from './showall';
import deletingTask from './deletingTask';
import {
    isToday,
    parseISO,
    format,
    addDays,
    isWithinInterval,
  } from "date-fns";

  export default function master(){
    const projectTitle = document.getElementById('title')
    projectTitle.innerText = 'All Task'
    // showall(todo)
    sidebar();
    addingproject();
    projectDOM(todo)
    // addingTask();
    modal()
    // deletingTask(todo);
  }
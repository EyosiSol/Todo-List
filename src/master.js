import todo from './myobject'
import addingproject  from './addingProject';
import projectDOM from './projectDOM';
import addingTask from './addingTask';
import homebar from './sidebar';
import modal from './modal';
import tasksDOM from './tasksDOM';
import {
    isToday,
    parseISO,
    format,
    addDays,
    isWithinInterval,
  } from "date-fns";

  export default function master(){
    homebar();
    addingproject();
    projectDOM(todo)
    // addingTask();
    modal()
  }
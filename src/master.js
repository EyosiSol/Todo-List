import todo from './myobject'
import addingproject  from './addingProject';
import projectDOM from './projectDOM';
import addingTask from './addingTask';
import {
    isToday,
    parseISO,
    format,
    addDays,
    isWithinInterval,
  } from "date-fns";

  export default function master(){
    addingproject();
    projectDOM(todo)
    addingTask();
  }
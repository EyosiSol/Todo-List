import { add } from "date-fns";
import tasksDOM from "./tasksDOM";
import todo from "./myobject";

export default function homebar(){
    const Allbtn = document.getElementById('All')
    Allbtn.addEventListener('click',()=>{
        console.log('Allbtn');
        const projectTitle = document.getElementById('title')
        projectTitle.innerText = 'All Task'
        const addTask = document.querySelector('.addTask')
        
    })
    const TodayBtn = document.getElementById('Today')
    TodayBtn.addEventListener('click',()=>{
        console.log('Today')
        const projectTitle = document.getElementById('title')
        projectTitle.innerText = 'Today'
    })
    const ThisWeek = document.getElementById('ThisWeek')
    ThisWeek.addEventListener('click',()=>{
        console.log('This Week')
        const projectTitle = document.getElementById('title')
        projectTitle.innerText = 'This Week'
    })

    const projectsdiv = document.querySelector('.projects')
    projectsdiv.addEventListener('click',(e)=>{
        if(!(e.target.innerText === 'Add' || e.target.innerText =='Cancel')){
            const projectTitle = document.getElementById('title');
            projectTitle.innerText = e.target.innerText;
            console.log(projectTitle.innerText);
            tasksDOM(todo,projectTitle.innerText);
        }
    })
}
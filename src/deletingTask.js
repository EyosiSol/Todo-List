import todo from './myobject'

export default function deletingTask(todo){
    const projectTitle = document.getElementById('title');
    const tasks = todo[projectTitle];
    const taskdiv = document.querySelector('.taskbar')

    taskdiv.addEventListener('click',(e)=>{
        const target = e.target.id.split(" ")
        // console.log(target); 
        if(target[0] === 'Delbtn' ||target[0] === 'Del'){
          console.log('deleting');
          console.log(projectTitle)
          console.log(target)
          
        }
      })
}
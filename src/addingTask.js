import todo from './myobject.js'

export default function addingTask(){
    const projectsdiv = document.querySelector('.projects')
    projectsdiv.addEventListener('click',(e)=>{
        if(!(e.target.innerText === 'Add' || e.target.innerText =='Cancel' || e.target.innerText == null)){
            const title = document.getElementById('title');
            title.innerText = e.target.innerText;
        }
    })
}
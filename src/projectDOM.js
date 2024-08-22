import todo from './myobject'

export default function projectDOM(todo){
    const projectsdiv = document.querySelector('.projects')
    projectsdiv.innerHTML = ''

    for(const projects in todo){
        const btndiv = document.createElement('div')
        btndiv.classList.add('btn')
        btndiv.innerHTML = `<button id='prjctbtn'><img src="../src/assets/List.svg" alt="">${projects}</button> `  
        projectsdiv.appendChild(btndiv);
    }


}
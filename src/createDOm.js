import Demo from './DEMO.js'

export default function CreateDOM({title,Description,Date}){
Demo();

    const task = document.querySelector('.task');

    task.innerHTML = `
    <div class="taskleft">
                    <div class="taskTitle">
                        <input type="checkbox">${title}
                    </div>
                    <div class="taskDesc">
                        ${Description}
                    </div>
                </div>
                <div class="taskRight">
                    <div class="taskDate">${Date}</div>
                    <div class="buttons">
                        <button id="favbtn"><img src="../src/assets/star_filled.svg" alt=""></button>
                        <button id="editbtn"><img src="../src/assets/edit.svg" alt=""></button>
                        <button id="Delbtn"><img src="../src/assets/delete.svg" alt=""></button>
                    </div>
                </div>
    `
    const taskbar = document.querySelector('.taskbar');

    taskbar.appendChild(task);
}


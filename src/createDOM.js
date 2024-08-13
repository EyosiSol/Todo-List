import taskTemp from "./taskTemp";
export default function createDOM({ title, Description, Date }) {
    const task = document.createElement("div");
    task.classList.add("task");

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
                      <button id="Delbtn${title}"><img src="../src/assets/delete.svg" alt=""></button>
                  </div>
              </div>
  `;
    const taskbar = document.querySelector(".taskbar");

    taskbar.appendChild(task)


    const delbtn = document.getElementById(`Delbtn${title}`);

    delbtn.addEventListener('click', (e) => {
      e.preventDefault();
      task.remove();    
      localStorage.setItem("tasks", JSON.stringify(taskTemp.filter((task)=>(task.title !== title))));  
      
    });

};
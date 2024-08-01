const openModal = document.getElementById("addtask");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("cancel");
const AddTask = document.getElementById("Add");

export default function mymodal() {
  openModal.addEventListener("click", () => {
    modal.showModal();
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });

  AddTask.addEventListener("click", () => {

    const taskform = document.getElementById("taskform");
    
    const taskbar = document.querySelector(".taskbar");
    const Title = document.getElementById("title");
    const Description = document.getElementById("Desc");
    const DueDate = document.getElementById("date");

    taskbar.innerHTML = `
        <div class="task">
                <div class="taskleft">
                    <div class="taskTitle">
                        <input type="checkbox">${Title.value}:
                    </div>
                    <div class="taskDesc">
                        ${Description.value}
                    </div>
                </div>
                <div class="taskRight">
                    <div class="taskDate">${DueDate.value}</div>
                    <div class="buttons">
                        <button id="favbtn"><img src="../src/assets/star_filled.svg" alt=""></button>
                        <button id="editbtn"><img src="../src/assets/edit.svg" alt=""></button>
                        <button id="Delbtn"><img src="../src/assets/delete.svg" alt=""></button>
                    </div>
                </div>
            </div>
        `;
    // mainbar = document.querySelector('.mainbar');

    // mainbar.appendChild(taskbar);
    
    taskform.reset();

    modal.close();
    
  });
}

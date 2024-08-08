export default function all() {
  //MODAL AND FORM
  const openModal = document.querySelector("#addtask");
  const closeModal = document.querySelector("#cancel");
  const modal = document.querySelector("#modal");
  const submit = document.querySelector("#Add");

  openModal.addEventListener("click", () => {
    modal.showModal();
  });
  closeModal.addEventListener("click", () => {
    modal.close();
  });

  submit.addEventListener("click", (e) => {

    const taskTemp = JSON.parse(localStorage.getItem("tasks")) || [];

    const addTask = (title, Description, Date) => {
      taskTemp.push({
        title: title,
        Description: Description,
        Date: Date,
      });

      localStorage.setItem("tasks", JSON.stringify(taskTemp));
      
      return { title, Description, Date };
    };

    e.preventDefault();

    const myForm = document.querySelector("#taskform");
    const myTitle = myForm["title"];
    const myDesc = myForm["Desc"];
    const myDate = myForm["date"];

    // console.log(`${myTitle.value} and ${myDesc.value} and ${myDate.value}`);

    const newTask = addTask(myTitle.value, myDesc.value, myDate.value);

    //Adding DOM
    function createDOM({ title, Description, Date }) {
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
                        <button id="Delbtn"><img src="../src/assets/delete.svg" alt=""></button>
                    </div>
                </div>
    `;
      const taskbar = document.querySelector(".taskbar");

      taskbar.appendChild(task);
    }

    taskTemp.forEach(createDOM);

    createDOM(newTask);

    myForm.reset();
    modal.close();

    console.log(taskTemp);
  });

  //Task Object

  // {
  //     title : 'Gym',
  //     Description : 'Go to the gym and workout until 12PM',
  //     Date : '2024-08-10',
  // },
  // {
  //     title : 'work',
  //     Description : 'Go to the work until 12PM',
  //     Date : '2024-08-10',
  // },{
  //     title : 'yes',
  //     Description : 'No to the work until 12PM',
  //     Date : '2024-08-10',
  // }
}
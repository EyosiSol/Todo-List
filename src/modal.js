const openModal = document.getElementById('addtask');
const modal = document.getElementById("modal");
const closeModal = document.getElementById('cancel');
const AddTask = document.getElementById('Add');

const taskbar = document.querySelector(".taskbar");

export default function mymodal(){
    openModal.addEventListener('click', () => {
        modal.showModal();
    });

    closeModal.addEventListener('click', () => {
        modal.close();
    });

};



export default function addproject(){
    const addingproject = document.querySelector('.addingproject');
    const addprojectbtn = document.querySelector('#addprojectbtn');



    addprojectbtn.addEventListener('click',()=>{
        addingproject.innerHTML= `
            <div class="addproject">
                    <form id="projectform">
                        <input type="text" name="projectTitle" id="projectTitle" placeholder="Project Title" required>
                    </form>
                    <div class="add-cancel">
                        <button id="addProject">Add</button>
                        <button id="cancelProject">Cancel</button>
                    </div>
                </div>
        `
    })


    // const cancel = document.querySelector("#cancelProject")

    // cancel.addEventListener('click',()=>{
    //     addingproject.innerHTML =  ``
    // })
}
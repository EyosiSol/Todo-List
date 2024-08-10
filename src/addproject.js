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
        const cancelbtn = document.querySelector("#cancelProject")

        cancelbtn.addEventListener('click',()=>{
            addingproject.innerHTML = ""
            
        });

        const addbtn = document.querySelector("#addProject")
        addbtn.addEventListener('click',()=>{
            const projectform = document.querySelector("#projectform")
            const projectTitle = projectform.projectTitle.value
            const projectsdiv = document.querySelector('.projects')
            projectform.reset()


            const project = {projectTitle}
            const projects = JSON.parse( localStorage.getItem('{projectTitle}')) || []
            projects.push(project)
            localStorage.setItem('projects', JSON.stringify(project))
            document.dispatchEvent(new Event('projectsUpdated'))

            projectsdiv.innerHTML += `
                <div class="btn">
                <button><img src="../src/assets/List.svg" alt="">${projectTitle}</button></div>
            `
            addingproject.innerHTML = ""

        })
    })


   

}
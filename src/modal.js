
export default function modal(){

  //creating the variables for the modal//
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
  

  //the logic for the submit button

  submit.addEventListener("click", (e) => {});
    //del button

}
export default function modal(){

const openModal = document.querySelector('#addtask');
const closeModal = document.querySelector('#cancel');
const modal = document.querySelector('#modal');
const submit = document.querySelector('#Add');

openModal.addEventListener('click',()=>{
  modal.showModal();
})
closeModal.addEventListener('click',()=>{
  modal.close();
})
submit.addEventListener('click',()=>{
  const myForm = document.querySelector('#taskform');

  const myTitle = document.querySelector('#title');
  const myDesc = document.querySelector('#Desc');
  const myDate = document.querySelector('#date');


  console.log(`${myTitle.value} and ${myDesc.value} and ${myDate.value}`);
  


  myForm.reset();

  modal.close();
  
})
}
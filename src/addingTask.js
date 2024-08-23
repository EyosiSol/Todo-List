import todo from "./myobject";

export default function addingTask(
  todo,
  projectTitle,
  title,
  description,
  date
) {
  if(!(title === "" || description === "" || date === "" || date === 'null')){
    let tasks = {};
    tasks [title] = { title, description, date };
    todo [projectTitle][title] = { title, description, date };
    localStorage.setItem("todo", JSON.stringify(todo));
  }else{
    window.alert('form is empty')
  }
  

}

import todo from "./myobject";

export default function addingTask(
  todo,
  projectTitle,
  title,
  description,
  date
) {

  try{
    tasks [title] = { title, description, date };
    todo [projectTitle][title] = { title, description, date };
    localStorage.setItem("todo", JSON.stringify(todo));
  }
  catch(error){
    if((error instanceof RangeError)){
      windows.alert("Invalid time format: ", error)
    }else{
      throw error;
    }
  }
}

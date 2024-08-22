import todo from "./myobject";

export default function addingTask(
  todo,
  projectTitle,
  title,
  description,
  date
) {
  let tasks = {};
  tasks [title] = { title, description, date };
  todo [projectTitle][title] = { title, description, date };
  localStorage.setItem("todo", JSON.stringify(todo));
}

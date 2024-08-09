import taskTemp from "./taskTemp";

export default function addTasks(title, Description, Date){
        taskTemp.push({
          title: title,
          Description: Description,
          Date: Date,
        });
    
        localStorage.setItem("tasks", JSON.stringify(taskTemp));
    
        return { title, Description, Date };
      };

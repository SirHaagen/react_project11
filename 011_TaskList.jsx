
import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {

  const { tasks } = useContext(TaskContext)
  //Desestructuro tasks para recibir la formación de tasks para imprimirla en pantalla
  //y deleteTask para enciar el id como argumento de deleteTask de vuelta

  if (tasks.length == 0) return <h1>No tasks</h1>
  else {
    return (
      <div>
        {tasks.map(task => {
          return <TaskCard task={task} key={task.id} />
        })}
      </div>
    )
  }

}

export default TaskList
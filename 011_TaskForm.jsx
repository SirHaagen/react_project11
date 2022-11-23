
import { useState, useContext, createContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {

  const { addTask } = useContext(TaskContext);
  //Desestructuro y recibo la función addTask para colocarle los parámetros data y description

  let [data, setData] = useState('');
  let [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();         //Para que no se recargue la página
    if (!data || !description) alert("Please, Fill the form and try again")
    else {
      addTask(data, description);
      //Si hay información en data y en description, entonces la guardo en la función addTask,
      //que recuerde se encuentra en TaskContext
      setData('')          //Reseteo data
      setDescription('')    //Reseteo description
      e.target.reset();   //Limpio el formulario después de tomar la información
    }
  }

  const handleChange = (e) => setData(e.target.value)   //Guardo dato en data
  const handleDescription = (e) => setDescription(e.target.value)   //Guardo dato en description

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder="Write down your task" autoFocus />
      <textarea onChange={handleDescription} placeholder="Write down the description"></textarea>
      <button>Send</button>
    </form>
  )

}

export default TaskForm
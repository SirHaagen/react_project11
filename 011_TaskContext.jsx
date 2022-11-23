
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();   //TaskContext es el nombre del contexto y guardo ahí el objeto createContext

export const TaskContextProvider = props => {

  useEffect(() => setTasks(data), []);
  //Aplica la información del arreglo a setTasks. 
  //Opcional para imprimir dato inicial. Si no quiero, eliminar tasks.js y este useEffect

  const [tasks, setTasks] = useState([]);     //Guardo las tareas en tasks

  const addTask = (title, description) => setTasks([...tasks, {
    id: tasks.length,
    title, //Igual a decir title:title 
    description
  }])
  // Tomo la información que se digita en el input (en TaskForm) y que envío de vuelta con el prop
  // desde TaskForm (addTask(data,description)), y esa nueva tarea la agrego en setTasks, 
  // que alimenta a tasks

  const deleteTask = (deleteId) => setTasks(tasks.filter(task => task.id != deleteId));
  //Recorro la información con el filter y la que no tiene el id a eliminar se conserva

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  )

}
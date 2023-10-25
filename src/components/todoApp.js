import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css"

export default function TodoApp() {
  //Creamos un hook/estados (funcion que permite manejar los estados, permite actualizar el estado de nuestra variable. usamos useState)
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTitle("Cynthia");
  }

  function HandleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(), // esto es para generar un id ALEATORIO
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);

    setTitle("")
  }

  function handleDelete(id){
    const temp = todos.filter(item => item.id !== id );
    setTodos(temp)

  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={HandleChange} className="todoInput" value={title} />
        <input
          //todo esto son props de nuestro componente (onClick, type, value...)
          onClick={handleSubmit}
          type="submit"
          value="Create task"
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { useList } from "../context/Todolistcontext";

const TodoItem = ({todo}) => {
  const[todos,setTodos] =useList();
  function toggletodo(id, completed) {
    setTodos((currentstate) => {
      return currentstate.map((todos) => {
        if (todos.id === id) {
          return {...todos, completed };
        }
        return todos;
      });
    });
  }
  function handledelete(id) {
    setTodos(() => {
      return todos.filter((todos) => todos.id !== id);
    });
  }
  return (
    <span className="listitem">
      <label style={{margin:"10px"}}>
        <input
          checked={todo.completed}
          onChange={(e) => toggletodo(todo.id, e.target.checked)}
          type="checkbox"
        />
      
      {todo.completed? <h3 className="todoblur">{todo.title}</h3>:<h3 className="nottodoblur">{todo.title}</h3>}
      </label>
      
      <button onClick={() => handledelete(todo.id)}>Delete</button>
      
    </span>
  );
};

export default TodoItem;

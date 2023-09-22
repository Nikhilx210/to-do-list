import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const[count ,setcount]=useState("")
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState( () => {
    const localval = localStorage.getItem("ITEMS")
    if(localval == null) return[]
    return JSON.parse(localval)
  });
  
  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function handleadd(e) {
    setcount((currcount)=>currcount+1)
    e.preventDefault();
    setTodos((currentstate) => {
      return [
        ...currentstate,
        { id: count , title: newItem, completed: false },
      ];
    });
    setNewItem("");
    console.log(todos);
  }
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
      return todos.filter(todos => todos.id !== id);
    });
  }
  return (
    <>
      <form onSubmit={handleadd}>
        <div className="mb-3">
          <label>New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            className="form-control"
            id="item"
          />
        </div>
        <button type="submit" className="form-control">
          ADD
        </button>
      </form>
      <h1>To Do List</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label >
                <input
                  checked={todo.completed}
                  onChange={(e) => toggletodo(todo.id, e.target.checked)}
                  type="checkbox"
                />
                <h3 className="todoblur">{todo.title}</h3>
              </label>
              <button onClick={() => handledelete(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

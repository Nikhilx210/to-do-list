import React, { useState } from "react";
import { useList } from "../context/Todolistcontext";


const TodoForm = () => {
  const [count, setcount] = useState(() => {
    const count = localStorage.getItem("count")
    if(count == null) return 1
    return count
});
  const [newItem, setNewItem] = useState("");
  const [todos,setTodos] = useList();
  localStorage.setItem("count",count)
  function handleadd(e) {
    setcount((currcount) => currcount + 1);
    e.preventDefault();
    setTodos((currentstate) => {
      return [...currentstate, { id: count, title: newItem, completed: false }];
    });
    setNewItem("");
    
  }
  return (
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
  );
};

export default TodoForm;

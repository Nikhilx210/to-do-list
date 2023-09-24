import "./App.css";
import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useList } from "./context/Todolistcontext";

function App() {
  const[todos,setTodos] =useList();
  console.log(todos.len)
  return (
    <div>
      <TodoForm/>
      <h1>To Do List</h1>
      <TodoList/>
    </div>
  );
}

export default App;

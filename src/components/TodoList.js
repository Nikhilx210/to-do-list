import React from 'react'
import TodoItem from './TodoItem';
import { useList } from '../context/Todolistcontext';

const TodoList = () => {
  const[todos,setTodos] =useList();
  return (
    <>  
        <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem todo={todo}/>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default TodoList
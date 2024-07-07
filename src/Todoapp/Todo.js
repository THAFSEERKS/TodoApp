import React, { useState } from 'react'
import './Todo.css'
import AddTask from './AddTask';
import ListTask from './ListTask';



const Todo = () => {
  const[tasks ,setTasks] = useState([
    {title: "Learn HTML"},
    {title: "Learn CSS"},
    {title: "Learn JavaScript"},
  ])
  return (
    <>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'><AddTask/></div>
            <div className='tasks'>
              {tasks.map((task)=>(<ListTask task={task}/>) )}
              </div>
        </div>      
    </>
  )
}

export default Todo;

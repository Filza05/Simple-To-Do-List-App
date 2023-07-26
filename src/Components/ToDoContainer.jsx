import React from 'react'
import AddToDo from './ToDo'
import Task from './Task';
import { useState } from 'react';

function ToDoContainer() {
    const [tasks, setTasks] = useState([]);
    const year = new Date().getFullYear();

function handleAddition(newTask) {
  setTasks(prevTasks => {
    return [...prevTasks, newTask];
  });

}

  return (
    <div className='ToDoContainer'>
         <AddToDo onAdd={handleAddition}/>
      {tasks.map((task,index) => {
        if (task.trim() != '')
          return (<Task singleTask={task} key={index} />)})}
    </div>
  )
}

export default ToDoContainer
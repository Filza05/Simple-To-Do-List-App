import React from 'react'
import { useState } from 'react'

function ToDo(props) {
    const [textValue, setTextValue] = useState("");

    function handleChange(event) {
        setTextValue(event.target.value);
    }

    function handleClick(event) {
       props.onAdd(textValue);
       setTextValue('');
       event.preventDefault();
    }


    return (
        <div className='AddToDo flex gap-6 justify-center items-center'>
            <div className='h-full mt-10'>
                <input className='max-w-[1000px] sm:w-[300px] h-5 bg-[#fff] text-[#242424] font-semibold p-3 min-h-[40px] rounded-md
        outline-none shadow-[0px 10px 20px -18px blue] border-b-4 border-[#27374D] ease-in-out duration-700
        focus:border-b-3 focus:border-[#27374D] focus:rounded-b-md focus:rounded-t-md focus:scale-105'
                    type='text' name='todo-task' placeholder='Enter Task'
                    value={textValue}
                    onChange={handleChange}
                ></input>
                <button className='button p-2 cursor-cell ml-4'
                    onClick={handleClick}
                >Add Task</button>
            </div>
        </div>
    )
}

export default ToDo


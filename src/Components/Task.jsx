import { toBeChecked } from '@testing-library/jest-dom/matchers';
import React from 'react'
import { useState } from 'react';

function Task(props) {

    const [completed, setCompleted] = useState(false);

    const handleToggleComplete = () => {
        setCompleted(!completed);
    };

    return (
        <div className='Task flex justify-center'>
            <div className=' bg-[#9DB2BF] sm:w-[600px] mt-3 p-3 rounded-xl flex justify-start gap-4'>
                <div className='pt-1'>
                    <input type="checkbox"
                        checked={completed}
                        onChange={handleToggleComplete}
                        className={`w-6 h-6 ${completed ? 'checked:bg-green-500' : 'ring-4 ring-[#526D82]'} mr-2`}>
                    </input>
                </div>
                <div className='h-full w-80 sm:w-[500px]'>
                    <h1 className={`text-xl font-bold cursor-default break-words text-[#27374D] ${completed ? 'line-through text-[#526D82] duration-700' : ''}`}>{props.singleTask}</h1>
                </div>
            </div>
        </div>
    )
}

export default Task
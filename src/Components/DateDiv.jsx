import React from 'react'

function DateDiv() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <div className='DateDiv flex justify-center mt-4 cursor-default'>
        <div className='bg-slate-300 rounded-lg w-[250px] h-10 flex justify-center items-center'>
            <h1 className='text-[#27374D] font-extrabold text-2xl'>{formattedDate}</h1>
        </div>
    </div>
  )
}

export default DateDiv
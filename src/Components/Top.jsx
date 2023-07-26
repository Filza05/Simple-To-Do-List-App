import React from 'react'

function Top() {
    return (
        <div className='Top w-full h-full bg-[#27374D] flex gap-4 justify-start p-4 border-b-2 border-dashed border-[#9DB2BF]'>
            <div>
                <img className="w-30 h-24"
                    src='https://media3.giphy.com/media/n24Eq6str4wLglFVw6/giphy.gif?cid=ecf05e47vs
                         z0kxauqat6o2oor0c24w6pbf9cyr63dwxhcoui&ep=v1_stickers_search&rid=giphy.gif&ct=s' />
            </div>
            <div className='flex flex-col justify-center cursor-default'>
                <h1 className='text-3xl text-[#DDE6ED]'>To-Do App &#x2713;</h1>
                <p className='text-xl text-[#DDE6ED]'>For Your Personal Task Maintainance!</p>
            </div>
        </div>
    )
}

export default Top
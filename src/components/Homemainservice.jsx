import React from 'react'
import { GoDotFill } from "react-icons/go";

function Homemainservice({title, description, descriptioncontent, btn, css,...props}) {
  return (
    <div className='w-full flex border-t-2 border-green-400 bg-slate-800 pb-4'>
        {/* This is left section  */}
        <div className='w-[30%]'>
            <h1 className=' text-white text-md mx-4 my-2'>
            {title}
            </h1>
            </div>
        {/* This is right section  */}
        <div className='w-[70%]'>
            <div className='flex flex-col mx-2 my-2'>
                {props.headingcontent}
                <div className='flex'>
                    <GoDotFill  className='my-auto w-4 text-blue-800 drop-shadow-2xl drop-shadow-gray-600'/>
                    <p className='text-gray-100 text-xs'>{description}</p>
                </div>
                    <p className={`${css} text-[10px]`}>{descriptioncontent}</p> 
            </div>
            <button className='bg-blue-800 hover:bg-blue-700 text-white text-[10px] px-4 py-1 mx-4 my-2 rounded-md'>{btn}</button>
            {props.btn1}
            {props.btn2}
        </div>

      
    </div>
  )
}

export default Homemainservice

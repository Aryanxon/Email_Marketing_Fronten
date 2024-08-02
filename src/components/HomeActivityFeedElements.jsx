import React from 'react'


function HomeActivityFeedElements({date, day, text, image}) {
  return (
    <div className='w-full bg-gradient-to-r from-gray-700 flex hover:scale-110 hover:shadow-lg duration-500 shadow-red-500 justify-center px-2 md:px-10 py-4 my-4'>
        <div className='w-[30%]  border-gray-700'>
        <div className='flex flex-col border-r-2 mx-2'>
            <h1 className='text-xs text-white'>{date}</h1>
            <p className='text-[10px] text-gray-500'>{day}</p>
        </div>
        </div>
        <div className='w-[70%] flex mx-auto'>
        <div className='flex my-auto gap-2'>
         <img src={image} alt="Razorpay logo"  className='w-4 h-4'/>        
         <p className='text-[10px] md:text-xs text-gray-500'>{text}</p>
        </div>
        </div>
      
    </div>
  )
}

export default HomeActivityFeedElements

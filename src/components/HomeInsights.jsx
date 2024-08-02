import React from 'react'
import { FaArrowRight, FaRupeeSign } from "react-icons/fa";

function HomeInsights() {
  return (
    <div className='w-full flex flex-col my-4 border-b-2 border-blue-800 bg-slate-800'>
        {/* This is heading for insights  */}
        <div className='flex justify-between mx-2 my-2 text-white text-[12px]'>
            <h1>Insights</h1>
            <h1 className='text-blue-500 flex gap-1'>Detailed insights <FaArrowRight className='my-auto'/></h1>
        </div>
        {/* This is payout volume in insights section  */}
        <div className=' px-4 py-4 flex flex-col'>
            <h1 className='text-[10px] text-gray-400'>Payout volume - last 30 days</h1>
            <h1 className='text-white text-[20px] flex'><FaRupeeSign className='text-[10px] my-auto'/><span>236,695 </span><span className='text-gray-400 text-[10px] my-auto'>.00</span></h1>
        </div>      
    </div>
  )
}

export default HomeInsights

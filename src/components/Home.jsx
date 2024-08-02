import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Homemain from './Homemain';
import HomeInsights from './HomeInsights';
import HomeActivityFeed from './HomeActivityFeed';

function Home({sliddisplay,setSideDisplay}) {
  return (
    <div  className={`w-full md:ml-[50px] h-full gap-5 bg-slate-950 ${sliddisplay? "ml-[225px]" : ""}`}>
      <div className='hidden w-full md:flex justify-end'>
        <ul className='mx-4 my-4 flex justify-center gap-4'>
          <li><button className='bg-blue-600 hover:bg-blue-400 text-[9px] flex justify-center  py-1 px-2 text-white'><span className='mr-2 border-r-2 border-white px-2'>+ PAYOUT</span> <IoIosArrowDown className='my-auto'/></button></li>
          <li className='text-blue-200 cursor-pointer'><FaSearch /></li>  
          <li className='text-orange-400 -rotate-45 cursor-pointer'><RxSpeakerLoud /></li>  
          <li className='text-blue-200 cursor-pointer'><MdAccountCircle /></li>
        </ul>
      </div>
        <div className='w-4/5 md:w-3/5 h-full mx-auto'>
          <Homemain/>
          <HomeInsights/>
          <HomeActivityFeed/>
        </div>
        
    </div>
  )
}

export default Home

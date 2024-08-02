import React from 'react'
import { MdErrorOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import HomeActivityFeedElements from './HomeActivityFeedElements';
import Contact from '../assets/Contact.jpg'
import Razorpayx from '../assets/Razorpayx.png'

function HomeActivityFeed() {


  return (
    <div className='w-full bg-slate-800 my-2'>
      <div className='px-2 md:px-4 py-4 flex justify-between'>
        <h1 className='text-xs text-white flex items-center gap-1'>Activity Feed <MdErrorOutline/><span className='text-[10px] text-gray-500'>update a few seconds ago</span></h1>
        <div className='text-xs text-blue-500 flex items-center md:gap-1'>Show filters<IoIosArrowDown /></div>
      </div>
      <div className='w-2/3 mx-auto py-3'>
      <HomeActivityFeedElements 
      date="23 JUL" 
      day="Tuesday" 
      text="1 contact created" 
      image={Contact}
      />

      <HomeActivityFeedElements 
      date="9 JUL" 
      day="Tuesday" 
      text="300.00 credited into the account" 
      image={Razorpayx}/>

      <HomeActivityFeedElements 
      date="1 JUL" 
      day="Monday" 
      text="1 payout worth 2,36,695.oo created" 
      image={Razorpayx}
      />

      <HomeActivityFeedElements 
      date="24 JUN" 
      day="Monday" 
      text="" 
      image={Razorpayx}
      />



      </div>
      
    </div>
  )
}

export default HomeActivityFeed

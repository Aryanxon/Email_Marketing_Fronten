import React from 'react'
import Razorpayx from '../assets/Razorpayx.png'
import Bank_pillar from '../assets/Bank_pillar.png'
import { MdLoop, MdOutlineCelebration } from "react-icons/md";
import { FaRupeeSign, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Homemainservice from './Homemainservice';

function Homemain() {

  const btn1= <button className='text-[10px] text-white bg-gray-500/10 px-4 py-1 mx-2'>Show App FOR ME</button>;
  const btn2= <button className='text-[10px] text-white bg-gray-500/10 px-4 py-1 mx-2'>API PAYOUTS</button>;
  const headingcontent = <div className='flex ml-1 gap-2'>
    <FaCheckCircle className='my-auto w-[12px] text-blue-800 drop-shadow-2xl drop-shadow-gray-600'/>
    <p className='text-gray-600 text-xs mr-1  border-b-2 border-gray-600 w-full'>
      Add balance 
      <span className='text-[10px] '>
        to create payouts in Live mode
        </span></p></div>;

  return (

    <div className='w-full'>
      {/* This is the top of home section  */}
      <div className='h-8 flex text-white px-2 py-2'>
      <img src={Razorpayx} alt="Razorpayx" className='h-4 flex'/>
      <div className='flex text-gray-400'>
      <h1 className='text-xs mr-2'>RazorpayX Lite</h1>
      <p className='text-[10px] inline-block align-baseline mr-2'>as of a few seconds ago</p>
      <MdLoop />
      </div>
      </div>
      {/* This is the add balance area of home section  */}
      <div className= 'flex'>
        <h1 className='flex text-gray-400 justify-center text-xl px-2 mr-20'><FaRupeeSign/>100.09</h1>
        <p className='text-blue-300 cursor-pointer hover:text-blue-500 flex justify-between md:justify-center text-xs my-auto border-l-2 border-gray-400 px-4'>+ Add Balance</p>
      </div>
      {/* This is the no pending section of home  */}
      <div className='w-full'>
        <h1 className='text-gray-400 text-[10px] mdtext-xs px-4 py-2 mt-4 border-dashed border-2 border-gray-400 flex gap-4'><MdOutlineCelebration className='text-red-400'/>Your're all caught up. There are no more items pending on you. </h1>
      </div>

      {/* This is start application area in home section  */}
      <div className='w-full flex mt-4 bg-slate-700 rounded-md'>
        <div className='w-1/4 bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-center items-center'>
        <img src={Bank_pillar} alt="Current account" className='w-[35px] md:w-[50px]'/>
        <h1 className='text-[10px] md:text-xs'>Current Account</h1>
        </div>
        <div className='w-3/4 mx-2 my-4'>
          <h1 className='text-md text-white'>Open your RazorpayX account</h1>
          <p className='text-gray-400 text-[9px]'>Don't let bankache come in the way of your growth. Apply for your RazorpayX account with a few basic details</p>
          <div className='w-full flex justify-between'>
          <button className='text-white bg-blue-700 text-[9px] px-4 py-2 rounded-md flex gap-2 hover:bg-blue-800'>Start application <FaArrowRight className='my-auto'/></button>
          <p className='text-gray-400 text-[10px] flex mx-4 my-auto'>0 / 4</p>
          </div>
        </div>
      </div>

      {/* This is the service area from home section  */}
      <div className='w-full mt-4'>
        <Homemainservice title="Amazon Instant Settlements" 
        description="Let's get you started"
        descriptioncontent="Complete your application and get instant access to your Amazon payouts"
        btn="APPLY NOW"
        css="text-gray-100"
        /> 

        <Homemainservice title="Creating payouts in Live mode" 
        description="Create payout"
         descriptioncontent="There are multiple ways in which you can create the first payout:"
         btn="MAKE A PAYOUT"
         css="text-gray-500"
         btn1={btn1}
         btn2={btn2}
         headingcontent={headingcontent}
        /> 

      </div>



    </div>
  )
}

export default Homemain

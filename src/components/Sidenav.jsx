
import Razorpayx_logo from '../assets/Razorpayx.png'
import Razorpay_logo from '../assets/Razorpay_logo.svg'
import Slidenavelements from './Slidenavelements';
import { FaHome, FaLongArrowAltRight, FaRegStickyNote, FaEnvelopeOpenText } from "react-icons/fa";
import { MdLibraryBooks, MdReportProblem } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";

function Sidenav({sliddisplay,setSideDisplay, handlehover, handleleave}) {
   
  return (
    <div className={`h-screen bg-gray-700 top-0 left-0 fixed ${sliddisplay?" w-[16.66667%]" : "w-[4%]"}`} onMouseOver={handlehover} onMouseLeave={handleleave}>
        <div className='px-4 py-4 flex gap-2 mx-auto'>
            <img src={Razorpayx_logo} alt="Razorpayx_logo"  className={`w-6 mx-auto ${sliddisplay? "hidden":"block"} duration-500`}/>
            <img src={Razorpay_logo} alt="Razorpayx_logo"  className={`w-28 mx-auto ${sliddisplay? "block":"hidden"} duration-500`}/>
        </div>
        <div className='py-4 mx-auto border-b-2 border-gray-600'>
            <Slidenavelements sliddisplay={sliddisplay} text="Home" icon={<FaHome />}/>
            <Slidenavelements sliddisplay={sliddisplay} text="Payouts" icon={<FaLongArrowAltRight />}/>
            <Slidenavelements sliddisplay={sliddisplay} text="Account Statement" icon={<MdLibraryBooks />}/>
            <Slidenavelements sliddisplay={sliddisplay} text="Contact" icon={<IoIosContact />}/>
        </div>
        <div className='py-4 mx-auto'>
            <Slidenavelements sliddisplay={sliddisplay} text="Loans" icon={<FaIndianRupeeSign />}/>
            <Slidenavelements sliddisplay={sliddisplay} text="Vendor Payments" icon={<FaLongArrowAltRight />}/>
            <Slidenavelements sliddisplay={sliddisplay} text="Tax Payments" icon={<FaRegStickyNote />}/>
            <Slidenavelements sliddisplay={sliddisplay} text="Payout Links" icon={<FaIndianRupeeSign />}/>
            <Slidenavelements sliddisplay={sliddisplay} text="Payroll" icon={<FaEnvelopeOpenText />}/>
            <Slidenavelements sliddisplay={sliddisplay} text="Report" icon={<MdReportProblem />}/>
        </div>
    </div>
  )
}

export default Sidenav

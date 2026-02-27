import React from 'react';
import { BsTelephonePlus } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiTwotoneMail } from "react-icons/ai";
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
   <div className='md:w-10/12 mx-auto flex flex-col items-center justify-center mb-20 gap-8'>
                 <div className='flex gap-3 items-center justify-center w-full '>
                    <hr className="w-full h-[1px] border-0 bg-[#5f5f64] shadow-[0_0_12px_#5f5f64]" />
                    <p className='text-white text-nowrap font-bold md:text-3xl lg:text-3xl text-xl font-lato'>Connect with Me</p> 
                    <hr className="w-full h-[1px] border-0 bg-[#5f5f64] shadow-[0_0_12px_#5f5f64]" />
                 </div>
                 <div className='flex gap-7 items-center justify-center text-white text-4xl font-bold'>
                   <span className='bg-slate-700/90 p-3 rounded-xl '><FaFacebookF></FaFacebookF></span>
                   <span className='bg-slate-700/90 p-3 rounded-xl '><MdEmail></MdEmail></span>
                   <span className='bg-slate-700/90 p-3 rounded-xl '><FaLinkedin></FaLinkedin></span>
                 </div>
                 <hr className="w-full h-[1px] border-0 bg-[#5f5f64] shadow-[0_0_12px_#5f5f64]" />

                 <p className='text-[#d3d1d1] text-center -mt-2 font-semibold tracking-wider text-[17px]'> <span className='text-xl'>©</span> {new Date().getFullYear()} Mst Chadnee. All Rights Reserved</p>
   </div>
  );
};

export default Footer;
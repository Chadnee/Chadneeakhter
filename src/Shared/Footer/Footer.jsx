import React from 'react';
import { BsTelephonePlus } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='lg:pb-20 w-full md:m pb-10 md:pb-20 lg:pt-28 pt-5 md:pt-28 font-titilliumWeb'>
      <footer className="  text-white ">
        <p className='text-center  tracking-wider  mb-12 md:mb-24 lg:mb-24  text-amber-400 text-xl opacity-90  lg:-ml-5 md:-ml-5'>Available in 24/7</p>

        <nav className=''>
          <div className="flex md:flex-row md:font-bold lg:font-bold lg:flex-row flex-col gap-5 md:gap-12 lg:gap-12  justify-between md:text-[13px] lg:text-[13px] tracking-wide mx-auto font-poppins pb-20 lg:pb-28 md:pb-28 items-center">
            <span className='flex flex-col justify-center items-center gap-2'>
              <span className='text-xl font-bold '><BsTelephonePlus></BsTelephonePlus></span>
              <span>01704203341</span>
            </span>
            <span className='flex flex-col justify-center items-center gap-2'>
              <span className='text-xl'><MdEmail></MdEmail></span>
              <span>mstchadneeakhter@gmail.com</span>
            </span>
            <span className='flex flex-col justify-center items-center gap-2'>
              <span className='text-xl'><FaLocationArrow></FaLocationArrow></span>
              <span>Dhaka, Bangladesh</span>
            </span>

          </div>
        </nav>
        <aside className='text-center text-slate-400'>
          <p>© Mst Chadnee Akhter || web Developer || {new Date().getFullYear()} - All rights are reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
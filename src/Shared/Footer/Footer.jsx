import React from 'react';
import { BsTelephonePlus } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='lg:pb-20 pb-10 md:pb-20 lg:pt-56 pt-20 md:pt-56 font-titilliumWeb'>
      <footer className="  text-white ">
        <p className='text-center  tracking-wider  mb-20 md:mb-24 lg:mb-24  text-blue-900 text-xl opacity-90  lg:-ml-5 md:-ml-5'>Available in 24/7</p>

        <nav className=''>
          <div className="flex md:flex-row lg:flex-row flex-col gap-10 md:gap-12 lg:gap-12  justify-between w-9/12 md:text-[13px] lg:text-[13px] tracking-wide mx-auto font-roboto pb-16 items-center">
            <span className='flex flex-col justify-center items-center gap-2'>
              <span className='text-xl'><BsTelephonePlus></BsTelephonePlus></span>
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
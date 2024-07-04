import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({onPress}) => {

    const nav = <>
      <li id='' className=''><a  onClick={(e)=>onPress(e)} href="#header" data-to-scrollspy-id="header">Home</a></li>
      <li id='' className=''><a  onClick={(e)=>onPress(e)} href="#about" data-to-scrollspy-id="about">about</a></li>
      <li id='' className=''><a  onClick={(e)=>onPress(e)} href="#services" data-to-scrollspy-id="services">Services</a></li>
      <li id='' className=''><a  onClick={(e)=>onPress(e)} href="#skills" data-to-scrollspy-id="skills">Skills</a></li>
      <li id='' className=''><a  onClick={(e)=>onPress(e)} href="#contact" data-to-scrollspy-id="contact">Contact</a></li>
    
    </>
    return (
        <div>
            <div className="navbar text-white">
                <div className="navbar ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                            
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Portfolio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-white">
                        {nav}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
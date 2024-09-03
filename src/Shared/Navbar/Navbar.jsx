import React, { useState } from 'react';
import { FaCode, FaHome, FaUser, FaGraduationCap, FaTools, FaEnvelope } from 'react-icons/fa'; // Add icons here
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const [toggle, setToogle] = useState(false)
    const [activeLink, setActiveLink] = useState('')

    const toggleButton = () => {
        setToogle(true)
    }

    const handleColor = (id) => {
        setActiveLink(id)
        console.log(id)
    }

    const handleClose = () => {
        setToogle(false);
    };

    // Updated navItems array with icons
    const navItems = [
        { id: 'introduction', label: 'Home', icon: <FaHome /> },
        { id: 'about', label: 'About', icon: <FaUser /> },
        { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
        { id: 'skills', label: 'Skills', icon: <FaTools /> },
        { id: "projects", label: "Projects", icon: <FaCode /> },
        { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
    ];

    const nav = navItems.map((item) => (
        <li key={item.id}>
            <a href={`#${item.id}`}
                onClick={() => handleColor(item.id)} 
                className={`flex items-center text-slate-200 font-semibold md:pt-0 lg:pt-0 pt-3 hover:text-teal-400 ${activeLink === item.id ? 'text-teal-400' : ''}`}>
                <span className="mr-2 lg:mr-1 md:mr-1 text-xl lg:text-[16px] md:text-[16px] font-bold">{item.icon}</span> {/* Display the icon */}
                {item.label}
            </a>
        </li>
    ));

    const isSmallDevice = useMediaQuery({ query: '(max-width: 600px)' });
    const isMediumOrLargeDevice = useMediaQuery({ query: '(min-width: 601px)' });

    return (
        <div className='md:pb-0 lg:pb-0 pb-6'>
            {
                isSmallDevice &&
                <div className="drawer z-10 fixed">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        <div className='flex justify-between items-center px-5 pt-5'>
                            <label htmlFor="my-drawer-2" className="drawer-button ">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 font-bold text-white w-7"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <span className="text-white font-oswald tracking-widest flex gap-2 items-center"
                                style={{ textShadow: '0 0 5px #38a89d, 0 0 10px #38a89d' }}>
                                <span className='text-2xl'><FaCode /></span><span>Mst. Chadnee</span>
                            </span>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-slate-900 pt-10 text-white min-h-full w-80 p-4">
                            {nav} {/* Navbar list with icons */}
                        </ul>
                    </div>
                </div>
            }

            {
                isMediumOrLargeDevice &&
                (
                    <div className='flex justify-between fixed top-0 w-full bg-opacity-100 py-3 z-20 font-bold font-serif px-20 pt-4'>
                        <div> <a className="btn btn-ghost text-xl text-white">
                            <span className='text-4xl' ><FaCode /></span> Mst. Chadnee
                        </a></div>
                        <div className="navbar-center hidden lg:flex">
                            <ul  className="menu menu-horizontal px-1 font-bold font-serif text-white">
                                {nav} {/* Navbar list without icons (for large devices) */}
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Navbar;


// const nav = <>
    //   <li id='header' className=''><a   href="#header">Header</a></li>
    //   <li id='' className=''><a   href="#about">about</a></li>
    //   <li id='' className=''><a   href="#services" >Services</a></li>
    //   <li id='' className=''><a   href="#skills" >Skills</a></li>
    //   <li id='' className=''><a   href="#contact" >Contact</a></li>

    // </>


    

//{
//isSmallDevice &&
   //                     (
                //                        <div className='flex justify-between items-center'>
                //                             <div className='flex font-bold font-serif flex-col justify-start items-start fixed  py-2 top-0 w-full z-10 bg-blue-950'>

                // <div onClick={toggleButton} className="flex fitems-start  mr-0">
                //     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                //         <svg
                //             xmlns="http://www.w3.org/2000/svg"
                //             className="h-6 font-bold text-white w-6"
                //             fill="none"
                //             viewBox="0 0 24 24"
                //             stroke="currentColor">
                //             <path
                //                 strokeLinecap="round"
                //                 strokeLinejoin="round"
                //                 strokeWidth="2"
                //                 d="M4 6h16M4 12h8m-8 6h16" />
                //         </svg>
                //     </div>
                //     <div> <a className="btn btn-ghost text-xl text-white flex">Mst. Chadnee</a></div>
                //     <div className='pt-3 '>
                //     {
                //         toggle && (
                //             <div>
                //         {/* Cross button to close the dropdown */}
                //     <button onClick={handleClose} className=" text-white pl-32">
                //         <svg
                //             xmlns="http://www.w3.org/2000/svg"
                //             className="h-8 w-8"
                //             fill="none"
                //             viewBox="0 0 24 24"
                //             stroke="currentColor">
                //             <path
                //                 strokeLinecap="round"
                //                 strokeLinejoin="round"
                //                 strokeWidth="2"
                //                 d="M6 18L18 6M6 6l12 12" />
                //         </svg>
                //     </button>
                //     </div>
                //         )
                //     }
                //         </div>



                // </div>
                // <div className={`w-full border-teal-400 ${toggle ? 'menu-open' : 'menu-closed'}`}>
                //     {
                //         toggle && (


                //             <ul
                //                 tabIndex={0}
                //                 className="menu menu-sm bg-opacity-90  text-white left-0 top-full w-full bg-blue-950 z-50   pb-5 font-bold shadow-lg  p-0   rounded-none ">
                //                 {nav}
                //             </ul>
                //         )
                //     }
                // </div>

                // </div>
                //                        </div>
                //                     )
//}
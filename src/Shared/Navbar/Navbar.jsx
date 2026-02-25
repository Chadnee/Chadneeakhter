import React, { useState } from 'react';
import { FaCode, FaHome, FaUser, FaGraduationCap, FaTools, FaEnvelope, FaMoon, FaBlog, FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Add icons here
import { useMediaQuery } from 'react-responsive';
import profile from '../../assets/profile.png'
const Navbar = ({toggleBackgroundColor}) => {
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
        { id: "blogs", label: "Blogs", icon: <FaBlog /> },
        { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
    ];

    const nav = navItems.map((item) => (
        <li key={item.id} className=''>
            <a href={`#${item.id}`}
                onClick={() => handleColor(item.id)} 
                style={activeLink === item.id ? { textShadow: '0 0 5px #38a89d, 0 0 10px #2e5c59' } : {}}
                className={`flex items-center text-white lg:font-semibold md:font-semibold  md:pt-0 lg:pt-0 pt-4 hover:text-teal-400 ${activeLink === item.id ? 'text-teal-400' : ''}`}>
                <span className="mr-2 lg:mr-0 md:mr-0 text-[22px] lg:text-[12px] md:text-[12px] font-serif">{item.icon}</span> {/* Display the icon */}
                <span className='font-serif '>{item.label}</span>
            </a>
        </li>
    ));

    const isSmallDevice = useMediaQuery({ query: '(max-width: 600px)' });
    const isLargeDevice = useMediaQuery({ query: '(min-width: 1024px)' });
    const isSmallAndMediumDevice = useMediaQuery({query: '(max-width:1023px)'})
    const isMediumOrLargeDevice = useMediaQuery({ query: '(min-width: 601px)' });

    return (
        <div className='md:pb-0 lg:pb-0 pb-6  '>
            {
                isSmallAndMediumDevice &&
                <div className="drawer z-10 fixed ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        <div className='flex justify-between items-center px-7 pt-5'>
                            <label htmlFor="my-drawer-2" className="drawer-button bg-stone-200 bg-opacity-10 p-[0.15rem] text-slate-900 rounded-md" style={{color: 'transparent'}}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 font-bold text-white w-7"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                                    style={{ opacity: 0.7 }} >
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
                        
                        <div className="menu bg-slate-900 pt-8 text-white min-h-full w-72 p-4">
                            <div className='flex flex-col justify-center items-center '>
                               <figure className=''>
                               <img  className=' w-full h-full object-cover mx-auto -ml-3 shadow-3xl' src={profile} alt="" />
                               </figure>
                               <p className='pt-3 font-poppins text-[11px]'>Mst. Chadnee</p>
                               <p className='pt- text-yellow-600 font-poppins text-[13px]'>MERN stack web developer</p>
                               <div className='flex gap-4  mt-3 text-center'>
                        <a href="https://www.facebook.com/chadnee.akhter.73?mibextid=ZbWKwL">
                        <button className='rounded-md border-2 border-[#212d51] p-3  text-white shadow-[0_0_2px_2px_#222b43]  hover:bg-[#212d51] hover:text-white hover:shadow-lg hover:shadow-[#222b43]'><FaFacebook></FaFacebook></button>
                        </a> 
                        <button className='rounded-md border-2 border-[#212d51] p-3  text-white shadow-[0_0_2px_2px_#222b43]  hover:bg-[#222b43] hover:text-white hover:shadow-lg hover:shadow-[#222b43]'><FaGithub></FaGithub></button>
                        <button className='rounded-md border-2 border-[#212d51] p-3  text-white shadow-[0_0_2px_2px_#222b43]  hover:bg-[#222b43] hover:text-white hover:shadow-[#222b43]'><FaTwitter></FaTwitter></button>
                        <a href='https://www.linkedin.com/in/mst-chadnee-akhter-40b280318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '>
                        <button className='rounded-md border-2 border-[#212d51] p-3  text-white shadow-[0_0_2px_2px_#222b43]  hover:bg-[#222b43] hover:text-white hover:shadow-lg hover:shadow-[#222b43]'><FaLinkedin></FaLinkedin></button>
                        </a>
                    </div>
                            </div>
                            <ul className='mt-7'>
                            {nav} {/* Navbar list with icons */}
                            </ul>
                            
                        </div>
                    </div>
                </div>
            }

            {
                isLargeDevice &&
                (
                   <div className='fixed top-0 left-0 right-0 z-20'>
                      <div className='flex justify-between mx-20 bg-opacity-100 py-3 font-bold font-serif pt-4'>
                        <div> <a className="btn p-0 btn-ghost lg:text-xl md:text-[10px] text-white  flex gap-1 items-center">
                            <span className='' ><FaCode /></span> 
                            <span>Mst. Chadnee</span>
                        </a></div>
                        <div className="  flex items-center justify-center">
                            <ul  className="menu menu-horizontal font-serif p-0">
                                {nav} {/* Navbar list without icons (for large devices) */}
                            </ul>
                        </div>
                        
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
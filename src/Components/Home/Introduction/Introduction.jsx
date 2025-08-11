import React, { useEffect, useState } from 'react';
import img from '../../../assets/image2.jpg'
import { Link } from 'react-router-dom';
import { RiFacebookFill, RiReactjsLine } from "react-icons/ri";
import './Introduction.css'
import Button from '../../../Shared/Button/Button';
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaTwitterSquare } from 'react-icons/fa';
import { GrDownload } from "react-icons/gr";
import { useMediaQuery } from 'react-responsive';
import { SocialIcon } from 'react-social-icons';
import img2 from '../../../assets/image-removebg-preview.png'
const Introduction = () => {

    const isSmallDevice = useMediaQuery({ query: '(max-width: 600px)' });
    const isMediumOrLargeDevice = useMediaQuery({ query: '(min-width: 601px)' });
    //const Component = <SocialIcon url="https://www.facebook.com/chadnee.akhter.73?mibextid=ZbWKwL " />
// const [isHovered, setHovered] = useState(false);
// const [isHoveredSecond, setHoveredsecond] = useState(false);

// const handleMouseEntersecond = () => {
//     setHovered(true);
// }

// const handleMouseLeavesecond = () => {
//     setHoveredsecond(false);
// }



// const linkStylesecond = isHoveredSecond ? { boxShadow: "0 0 4px 4px #38a89d" } : {};

//    const [typeEffect] = useTypewriter({
//     words: ['Web Developer', 'Mern-Stack Developer', 'React Developer'],
//     loop:{},
//     typeSpeed:250,
//     cursorStyle:'|',
//     delaySpeed:50,
//     deleteSpeed:70

//    })
return (
    <div className='text-white lg:-ml-10 md:-ml-10 lg:mb-44 md:mb-44 mb-20 -mt-20 md:pt-36 lg:pt-36 h-screen flex flex-col justify-center'>

        
        <div className='lg:flex md:flex lg:flex-row-reverse md:flex-row-reverse justify-between items-center'>

            <div className='pt-28 md:pt-0 lg:pt-0'>
                {/* right theke animate krte figure er classname a add kte hobe "fadeInRight animated" */}
                <figure className=' rounded-full md:border lg:border mb-16 md:mb-0 lg:mb-0 mt-32 md:mt-0 lg:mt-0 '>
                    
                    {/* <p ><RiReactjsLine style={{ boxShadow: "0 0 20px 20px #38a89d" }} className='rounded-full w-[250px] h-[250px] shadow-3xl text-teal-400  border-4 border-x'></RiReactjsLine></p> */}
                    <img style={{ boxShadow: "0 0 20px 20px #2e5c59" }} className='rounded-full w-[270px] md:w-[300px] lg:w-[300px] h-[270px] md:h-[300px] lg:h-[300px] mx-auto  shadow-3xl  border-4 border-none ' src={img} alt="" />
                </figure>
            </div>
            {/* left theke animate krte nicher dive er classname a add kte hobe "fadeInLeft animated" */}
            <div className='pl-4'>
                <h6 className='text-3xl lg:text-5xl md:text-5xl font-bold '><p className='md:text-6xl lg:text-6xl text-5xl'>Hi!</p>  
                <span className='text-3xl'>I'm <span className=''>Chadnee</span></span></h6>
                {isMediumOrLargeDevice && (
                     <h3 className='text-3xl pt-1   '> And I'm a
                     <span className='text-yellow-600 pl-2  font-bold uppercase '>
                         <Typewriter
                             words={['Web Developer', 'Mern-Stack Developer', 'React Developer']}
                             loop={0}
                             cursor
                             cursorStyle='|'
                             bgColor=''
                             typeSpeed={100}
                             deleteSpeed={70}
                             delaySpeed={1500}
                         />
                         {/* {startTyping && typeEffect} */}
                     </span></h3>
                )}
               
                {isSmallDevice && (
                    <h3 className='text-2xl font-bold text-yellow-600'>A
                        <span className=' pl-2  font-bold uppercase '>
                            <Typewriter
                                words={['Web Developer', 'Mern-Stack Developer', 'React Developer']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={70}
                                delaySpeed={1500}
                            />
                            {/* {startTyping && typeEffect} */}
                        </span></h3>
                )}


                <span style={{ letterSpacing: "1px" }} className='text-sm  font-light lg:w-[500px] md:w-[500px] block pt-2'>A spontaneous developer in creating visually stunning, highly functional npx shadcn@latest add switch& innovative responsive website using modern technologies
                    ensuring  efficient user experiences</span>
                    {isMediumOrLargeDevice && (
                        <div className='flex gap-3  mt-6 text-center'>
                        <a href="https://www.facebook.com/chadnee.akhter.73?mibextid=ZbWKwL">
                        <button style={{ boxShadow: "0 0 2px 2px #2e5c59" }} className='rounded-lg border-2 border-emerald-800 p-3  md:p-2 lg:p-2 text-white hover:bg-emerald-800 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaFacebook></FaFacebook></button>
                        </a> 
                        <button style={{ boxShadow: "0 0 2px 2px #2e5c59" }} className='rounded-lg border-2 border-emerald-800 p-3  md:p-2 lg:p-2 text-white hover:bg-emerald-800 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaGithub></FaGithub></button>
                        <button style={{ boxShadow: "0 0 2px 2px #2e5c59" }} className='rounded-lg border-2 border-emerald-800 p-3  md:p-2 lg:p-2 text-white hover:bg-emerald-800 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaTwitter></FaTwitter></button>
                        <a href='https://www.linkedin.com/in/mst-chadnee-akhter-40b280318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '>
                        <button style={{ boxShadow: "0 0 2px 2px #2e5c59" }} className='rounded-lg border-2 border-emerald-800 p-3  md:p-2 lg:p-2 text-white hover:bg-emerald-800 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaLinkedin></FaLinkedin></button>
                        </a>
                    </div>
                )}

             
                

                <div className='flex justify-start gap-5 mt-12 md:mt-8 lg:mt-8'>
                    <Button
                        to="/resume"
                        text="Resume"
                        target="_blank"
                        rel="nopener noreferrer"
                        href="/resume.pdf"
                        bgHoverColor='bg-blue-950'
                        textColor='text-white'
                        bgColor='bg-emerald-800'>
                            
                            <GrDownload className='inline-block font-bold pl-1'></GrDownload>
                    
                    </Button>
                    
                    <Button
                        text="Hire me!"
                        textColor='text-white'
                        bgColor=''
                        href='#contact'>
                            
                    </Button>

                    {/* <Link id="square" className=' hover:scale-105 transform transition-all duration-300 ease-in-out text-white font-semibold  hover:shadow-lg
                        bg-teal-400  px-3 rounded pb-1 shadow-lg shadow-amber-100    hover:bg-amber-800 '>Resume</Link> */}
                    {/* <Link className=' transition-colors duration-500 hover:bg-transparent hover:bg-amber-800  bg-amber-600  px-3 rounded pb-1 shadow-lg  shadow-amber-100'>Hire me!</Link>
                    */}
                </div>

            </div>
        </div>
    </div>
);
};

export default Introduction;
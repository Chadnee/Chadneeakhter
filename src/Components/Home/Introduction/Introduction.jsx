import React, { useEffect, useState } from 'react';
import img from '../../../assets/image2.jpg'
import { Link } from 'react-router-dom';
import { RiFacebookFill, RiReactjsLine } from "react-icons/ri";
import './Introduction.css'
import Button from '../../../Shared/Button/Button';
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';

const Introduction = () => {
    const [isHovered, setHovered] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

    const handleMouseEntersecond = () => {
        setHovered(true);
    }

    const handleMouseLeavesecond = () => {
        setHoveredsecond(false);
    }



    const linkStylesecond = isHovered ? { boxShadow: "0 0 4px 4px #38a89d" } : {};

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    //    const [typeEffect] = useTypewriter({
    //     words: ['Web Developer', 'Mern-Stack Developer', 'React Developer'],
    //     loop:{},
    //     typeSpeed:250,
    //     cursorStyle:'|',
    //     delaySpeed:50,
    //     deleteSpeed:70

    //    })
    return (
        <div className='text-white pb-24 pt-10 h-[600px] flex flex-col justify-center'>

            <div className='flex justify-between items-center'>
                <div className='fadeInLeft animated'>
                    <h6 className='text-5xl font-bold '>Hi! I'm Mst. Chadnee Akhter</h6>
                    <h3 className='text-3xl pb-5 '> And I'm a
                        <span className='text-teal-400 pl-2 font-bold uppercase'>
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

                    <span className='text-sm font-light '>A spontenious developer in creating visually stunning, heighly functional  <br />   & innovative responsive website using modern technologies
                        ensuring exceptional, efficient,  <br /> and seamless user experiences</span>
                    <div className='flex justify-start gap-5 mt-5'>
                        <Button
                            to="/resume"
                            text="Resume">
                        </Button>
                        <Link
                            style={linkStylesecond}
                            onMouseEnter={handleMouseEntersecond}
                            onMouseLeave={handleMouseLeavesecond}
                            id="square"
                            className="relative overflow-hidden bg-amber-600 text-white font-semibold rounded-md shadow-lg hover:shadow-xl  hover:shadow-amber-100 transition-all duration-300 ease-in-out transform hover:scale-105  shadow-amber-100    hover:bg-blue-950"
                            to="/resume"
                        >
                            <span className="block px-3 py-1">Hire me!</span>
                        </Link>
                        {/* <Link id="square" className=' hover:scale-105 transform transition-all duration-300 ease-in-out text-white font-semibold  hover:shadow-lg
                        bg-teal-400  px-3 rounded pb-1 shadow-lg shadow-amber-100    hover:bg-amber-800 '>Resume</Link> */}
                        {/* <Link className=' transition-colors duration-500 hover:bg-transparent hover:bg-amber-800  bg-amber-600  px-3 rounded pb-1 shadow-lg  shadow-amber-100'>Hire me!</Link>
                    */}
                    </div>
                </div>
                <div>
                    <figure className='rounded-full fadeInRight animated border '>
                        {/* <p ><RiReactjsLine style={{ boxShadow: "0 0 20px 20px #38a89d" }} className='rounded-full w-[250px] h-[250px] shadow-3xl text-teal-400  border-4 border-x'></RiReactjsLine></p> */}
                        <img style={{ boxShadow: "0 0 20px 20px #38a89d" }} className='rounded-full w-[250px] h-[250px] shadow-3xl  border-4 border-x' src={img} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
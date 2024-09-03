import React, { useEffect, useRef } from 'react';
import img from '../../../assets/image.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../../../Shared/Button/Button';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';



const About = () => {

  
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-zoomIn');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);



    return (
        <div className=' mx-auto flex flex-col justify-center items-center pt-28 mb-28 md:mb-64 lg:mb-64'>
              <style>
                {`
                
                @keyframes zoomIn {
                    from {
                        transform: scale(0.9);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-zoomIn {
                    animation: zoomIn 2s forwards;
                }

                //    /* Custom CSS to center content on small devices */
                @media (max-width: 768px) {
                    .center-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
                   style={{fontFamily: '',  lineHeight: '1.5', letterSpacing: "2px" }}
                `}
            </style>

            <div>
                <div className='lg:flex-row md:flex-row flex flex-col  justify-center  lg:w-8/12 md:w-7/12 mx-auto items-center gap-16'>
               <figure ref={(el) => (sectionsRef.current[1] = el)} className='md:w-9/12 lg:w-9/12 mx-auto center-content'>
                        <img style={{ boxShadow: "0 0 5px 5px #38a89d", borderRadius: "70% 70% 70% 70%" }}  className='lg:h-[500px] center-content md:h-[500px] h-[350px] md:w-full lg:w-full  border-2 border-teal-400  ' src={img} alt="" />
                    </figure>

                    <div ref={(el) => (sectionsRef.current[2] = el)} className=' w-full animate-zoomIn text-center md:text-start lg:text-start'>
                        <p style={{textshadow:'2px 2px 4px red'}}
                         className='-mt-2 font-mono text-blue-900 uppercase'>
                            Let me introduce myself</p>
                           
                        <p className='text-3xl text-white  font-bold'>About me</p>
                        <span  className='text-xl text-teal-400 font-semibold'>A story of Good</span>
                        <p   className='text-white lg:leading-6 md:leading-6 md:tracking-widest lg:tracking-widest px-8 md:px-0 lg:px-0 text-sm pt-8 pb-8 md:text-start lg:text-start text-justify'>
                            I am a passionate MERN stack web developer with a keen interest in exploring new technologies and gaining diverse experiences. My journey in web development has equipped me with strong skills in React, Javascript, MongoDB, Node.js, AXios allowing me to build dynamic and responsive web applications. I am always eager to take on new challenges, learn something new, and contribute to innovative projects. My goal is to continuously grow as a developer and make a meaningful impact in the tech world.
                        </p>
                        <div className='-mt-2  md:hidden lg:hidden'>
                            <p style={{ textShadow: "0 0 5px #38a89d, 0 0 10px #38a89d", font:'italic' }}  className='text center text-teal-400 shadow-lg italic  pb-4 pt-5 text-[16px] font-[italic]'>Follow me</p>
                        <div className='flex gap-7  mt-6 text-center justify-center'>
                    <a href="https://www.facebook.com/chadnee.akhter.73?mibextid=ZbWKwL">
                    <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='rounded-lg border-2 border-teal-400 p-3  md:p-2 lg:p-2 text-teal-400 hover:bg-teal-400 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaFacebook></FaFacebook></button>
                    </a> 
                    <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='rounded-lg border-2 border-teal-400 p-3  md:p-2 lg:p-2 text-teal-400 hover:bg-teal-400 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaGithub></FaGithub></button>
                    <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='rounded-lg border-2 border-teal-400 p-3  md:p-2 lg:p-2 text-teal-400 hover:bg-teal-400 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaTwitter></FaTwitter></button>
                    <a href='https://www.linkedin.com/in/mst-chadnee-akhter-40b280318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '>
                    <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='rounded-lg border-2 border-teal-400 p-3  md:p-2 lg:p-2 text-teal-400 hover:bg-teal-400 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaLinkedin></FaLinkedin></button>
                    </a>
                </div>
                       
                        </div>
                        <div className='hidden md:block lg:block '>
                       <Button
                       text="Read more"
                       target="_blank"
                       rel="nopener noreferrer"
                       href="/resume.pdf"
                       bgColor='bg-blue-950'
                       bgHover='bg-teal-400'>
                       </Button>
                       </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default About;
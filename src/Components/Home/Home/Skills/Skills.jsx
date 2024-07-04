import React, { useEffect, useRef } from 'react';
import { FaCode, FaNode, FaGithub, FaBootstrap, FaFilePowerpoint } from 'react-icons/fa';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiMongodb, SiExpress, SiPicardsurgeles, SiVercel, SiAxios, SiMicrosoftword } from "react-icons/si";
import { RiReactjsLine, RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { MdGeneratingTokens } from "react-icons/md";
import { IoServer } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Skills = () => {

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
        <div className='pb-56'>
            <style>
                {`
                .skill-icon {
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .skill-icon:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 10px 2px #38a89d;
                    border: 2px solid #38a89d;
                }

            
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
                    animation: zoomIn 1.5s forwards;
                }
                
                `}
            </style>

            <p className='text-3xl font-bold text-center pb-32 text-white mt-20'>
                My Skills
            </p>
            <div className='grid grid-cols-2 mx-auto text-white gap-12 w-9/12 justify-center items-center'>
                <div ref={(el) => (sectionsRef.current[0] = el)} className='text-start'>
                    <p style={{ fontWeight: 1000, fontSize: '2rem', textShadow: '1px 1px 2px black' }}
                        className='text-xl  text-white pb-9'>My <span className='text-teal-700'>Skills</span>?</p>
                    <p className='text-3xl'> What have I achieved for growing up?</p>
                </div>

                <div ref={(el) => (sectionsRef.current[1] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='bg-teal-600 hover:bg-gradient-to-r hover:from-amber-300 hover:to-blue-500 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0' >
                    <span className='pt-6 text-3xl ml-4'><FaCode></FaCode></span>
                    <div className='pt-6 mr-4 mb-6'>
                        <p className='font-bold font-serif'>Front-End Skills</p>
                        <p className='text-[10px] font-bold pt-2'>I have acquired my skills on using HTML, vanilla CSS REACT, Javascript, Axios etc front-end development ensures that every application I build is both functional and user-friendly.
                        </p>
                        <p className='flex justify-start gap-5 pt-4' >
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-amber-600'>
                                <span className='text-[6px]'>Html</span>
                                <ImHtmlFive></ImHtmlFive>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-teal-400'>
                                <span className='text-[6px]'>CSS</span>
                                <SiCss3></SiCss3>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-indigo-400'>
                                <span className='text-[6px]'>React</span>
                                <RiReactjsLine></RiReactjsLine>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-yellow-600'>
                                <span className='text-[6px]'>Js</span>
                                <TbBrandJavascript></TbBrandJavascript>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-purple-400'>
                                <span className='text-[6px]'>Axios</span>
                                <SiAxios></SiAxios>
                            </span>
                        </p>
                    </div>
                </div>

                <div ref={(el) => (sectionsRef.current[2] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='-pt-10 bg-teal-600 hover:bg-gradient-to-r hover:from-amber-300 hover:to-blue-500 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0' >
                    <span className='pt-6 text-3xl ml-4'><FaCode></FaCode></span>
                    <div className='pt-6 mr-4 mb-6'>
                        <p className='font-bold font-serif'>Backend Skills</p>
                        <p className='text-[10px] font-bold pt-2'> I am expert on backend side with mongodb, node js, express js, JWT and crud operations in server-side technologies and database management ensuring seamless data processing and efficient server-client interactions.
                        </p>
                        <p className='flex justify-start gap-5 pt-4' >
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-red-600'>
                                <span className='text-[6px]'>MongoDB</span>
                                <SiMongodb></SiMongodb>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-cyan-500'>
                                <span className='text-[6px]'>Server</span>
                                <IoServer></IoServer>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-stone-500'>
                                <span className='text-[6px]'>Node</span>
                                <FaNode></FaNode>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-violet-800'>
                                <span className='text-[6px]'>Express</span>
                                <SiExpress></SiExpress>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-emerald-900'>
                                <span className='text-[6px]'>JWT</span>
                                <MdGeneratingTokens></MdGeneratingTokens>
                            </span>
                        </p>
                    </div>
                </div>
                <div ref={(el) => (sectionsRef.current[3] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='bg-teal-600 hover:bg-gradient-to-r hover:from-amber-300 hover:to-blue-500 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0' >
                    <span className='pt-6 text-3xl ml-4'><FaCode></FaCode></span>
                    <div className='pt-6 mr-4 mb-6'>
                        <p className='font-bold font-serif'>Hosting</p>
                        <p className='text-[10px] font-bold pt-2'>I have experience in deploying and managing web applications on various hosting platforms that makes my applications are reliable, secure, and performant in any environment.

                       </p>
                        <p className='flex justify-start gap-5 pt-4' >
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-zinc-900'>
                                <span className='text-[6px]'>Github</span>
                                <FaGithub></FaGithub>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-blue-900'>
                                <span className='text-[6px]'>Netlify</span>
                                <BiLogoNetlify></BiLogoNetlify>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-yellow-400'>
                                <span className='text-[6px]'>Firebase</span>
                                <RiFirebaseFill></RiFirebaseFill>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-amber-800'>
                                <span className='text-[6px]'>Surge</span>
                                <SiPicardsurgeles></SiPicardsurgeles>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-lime-800'>
                                <span className='text-[6px]'>Vercel</span>
                                <SiVercel></SiVercel>
                            </span>
                        </p>
                    </div>
                </div>
                <div ref={(el) => (sectionsRef.current[4] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='bg-teal-600 hover:bg-gradient-to-r hover:from-amber-300 hover:to-blue-500 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0' >
                    <span className='pt-6 text-3xl ml-4'><FaCode></FaCode></span>
                    <div className='pt-6 mr-4 mb-6'>
                        <p className='font-bold font-serif'>Frameworks & others</p>
                        <p className='text-[10px] font-bold pt-2'>In addition to my technical expertise, I am proficient in essential professional tools such as Microsoft Word and PowerPoint and various framework such ass bootstrap, tailwind ets for presenting my application more attractively
                        </p>
                        <p className='flex justify-start gap-5 pt-4' >
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-yellow-400'>
                                <span className='text-[6px]'>Bootstrap</span>
                                <FaBootstrap></FaBootstrap>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-sky-600'>
                                <span className='text-[6px]'>Tailwind</span>
                                <RiTailwindCssFill></RiTailwindCssFill>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-indigo-800'>
                                <span className='text-[6px]'>MsWord</span>
                                <SiMicrosoftword></SiMicrosoftword>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-amber-800'>
                                <span className='text-[6px]'>Powerpoint</span>
                                <FaFilePowerpoint></FaFilePowerpoint>
                            </span>
                            <span className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon bg-green-800'>
                                <span className='text-[6px]'>Excel</span>
                                <PiMicrosoftExcelLogoFill></PiMicrosoftExcelLogoFill>
                            </span>
                        </p>
                    </div>
                </div>
                <div ref={(el) => (sectionsRef.current[5] = el)} className=''>
                    <p className='text-3xl'> As A developer I am trying to explore more myself and learn something new.  </p>
                    <div className='text-center mt-8'>
                        <button style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='w-[100px] skill-icon  bg-amber-500 pb-1'>OK</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;

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
import { LuDatabaseBackup } from "react-icons/lu";
import { SiHostinger } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Import the CSS for react-tooltip

const Skills = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-flipRight');
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
        <div className='mb-28 md:mb-64 lg:mb-64 pt-28'>
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

                @keyframes flipRight {
                    0% {
                        transform: perspective(400px) rotateY(-90deg);
                        opacity: 0;
                    }
                    100% {
                        transform: perspective(400px) rotateY(0deg);
                        opacity: 1;
                    }
                }

                .animate-flipRight {
                    animation: flipRight 1.5s forwards;
                }

                              .custom-tooltip {
                              
                  color: #fff; /* Text color */
                  font-size: 10px; /* Text size */
                  border-radius: 4px; /* Border radius */
                  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Box shadow */
                }
                `}
            </style>

            <p className='text-6xl font-bold text-center pb-24 md:pb-32 lg:pb-32 text-teal-400 '>
                Skills
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto text-white gap-12 w-full lg:w-9/12 md:w-9/12 justify-center items-center'>
                <div ref={(el) => (sectionsRef.current[0] = el)} className='text-start'>
                    <p style={{ fontWeight: 1000, fontSize: '2rem', textShadow: '1px 1px 2px black' }}
                        className='text-2xl text-white pb-9'>My <span className='text-teal-400'>Skills</span>?</p>
                    <p className='text-4xl'> What have I achieved for growing up?</p>
                </div>

                <div ref={(el) => (sectionsRef.current[1] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='bg-teal-600 hover:bg-gradient-to-r hover:from-teal-800 hover:to-amber-200 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0'>
                    <span className='pt-6 text-3xl ml-4'><FaCode /></span>
                    <div className='pt-6 mr-4 mb-6'>
                        <p className='font-bold font-serif'>Front-End Skills</p>
                        <p className='text-[10px] font-bold pt-2'>I have acquired my skills on using HTML, vanilla CSS REACT, Javascript, Axios etc front-end development ensures that every application I build is both functional and user-friendly.</p>
                        <p className='flex justify-start gap-5 pt-4'>
                            <span data-tooltip-id="html-tooltip" data-tooltip-content="Html" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-amber-900'>
                                <span className='text-[6px]'>Html</span>
                                <ImHtmlFive />
                            </span>
                            <span data-tooltip-id="css-tooltip" data-tooltip-content="CSS" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-teal-700'>
                                <span className='text-[6px]'>CSS</span>
                                <SiCss3 />
                            </span>
                            <span data-tooltip-id="react-tooltip" data-tooltip-content="React" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-indigo-700'>
                                <span className='text-[6px]'>React</span>
                                <RiReactjsLine />
                            </span>
                            <span data-tooltip-id="js-tooltip" data-tooltip-content="JavaScript" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-yellow-800'>
                                <span className='text-[6px]'>Js</span>
                                <TbBrandJavascript />
                            </span>
                            <span data-tooltip-id="axios-tooltip" data-tooltip-content="Axios" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-purple-800'>
                                <span className='text-[6px]'>Axios</span>
                                <SiAxios />
                            </span>
                        </p>
                    </div>
                </div>

                <div ref={(el) => (sectionsRef.current[2] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='-pt-10 bg-teal-600 hover:bg-gradient-to-r hover:from-teal-800 hover:to-amber-200 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0'>
                    <span className='pt-6 text-3xl ml-4'><LuDatabaseBackup /></span>
                    <div className='pt-6 mr-4 mb-6'>
                        <p className='font-bold font-serif'>Backend Skills</p>
                        <p className='text-[10px] font-bold pt-2'> I am expert on backend side with mongodb, node js, express js, JWT and crud operations in server-side technologies and database management ensuring seamless data processing and efficient server-client interactions.</p>
                        <p className='flex justify-start gap-5 pt-4'>
                            <span data-tooltip-id="mongodb-tooltip" data-tooltip-content="MongoDB" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-slate-800'>
                                <span className='text-[6px]'>MongoDB</span>
                                <SiMongodb />
                            </span>
                            <span data-tooltip-id="server-tooltip" data-tooltip-content="Server" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-cyan-500'>
                                <span className='text-[6px]'>Server</span>
                                <IoServer />
                            </span>
                            <span data-tooltip-id="node-tooltip" data-tooltip-content="Node" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-stone-500'>
                                <span className='text-[6px]'>Node</span>
                                <FaNode />
                            </span>
                            <span data-tooltip-id="express-tooltip" data-tooltip-content="Express" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-violet-800'>
                                <span className='text-[6px]'>Express</span>
                                <SiExpress />
                            </span>
                            <span data-tooltip-id="jwt-tooltip" data-tooltip-content="JWT" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-emerald-900'>
                                <span className='text-[6px]'>JWT</span>
                                <MdGeneratingTokens />
                            </span>
                        </p>
                    </div>
                </div>

                <div ref={(el) => (sectionsRef.current[3] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='bg-teal-600 hover:bg-gradient-to-r hover:from-teal-800 hover:to-amber-200 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0'>
                    <span className='pt-6 text-3xl ml-4'><SiHostinger /></span>
                    <div className='pt-6 mr-4 mb-6'>
                        <p className='font-bold font-serif'>Hosting</p>
                        <p className='text-[10px] font-bold pt-2'>I have experience in deploying and managing web applications on various hosting platforms that makes my applications are reliable, secure, and performant in any environment.</p>
                        <p className='flex justify-start gap-5 pt-4'>
                            <span data-tooltip-id="github-tooltip" data-tooltip-content="Github" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-zinc-900'>
                                <span className='text-[6px]'>Github</span>
                                <FaGithub />
                            </span>
                            <span data-tooltip-id="netlify-tooltip" data-tooltip-content="Netlify" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-blue-900'>
                                <span className='text-[6px]'>Netlify</span>
                                <BiLogoNetlify />
                            </span>
                            <span data-tooltip-id="firebase-tooltip" data-tooltip-content="Firebase" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-yellow-700'>
                                <span className='text-[6px]'>Firebase</span>
                                <RiFirebaseFill />
                            </span>
                            <span data-tooltip-id="surge-tooltip" data-tooltip-content="Surge" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-amber-800'>
                                <span className='text-[6px]'>Surge</span>
                                <SiPicardsurgeles />
                            </span>
                            <span data-tooltip-id="vercel-tooltip" data-tooltip-content="Vercel" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-lime-800'>
                                <span className='text-[6px]'>Vercel</span>
                                <SiVercel />
                            </span>
                        </p>
                    </div>
                </div>

                <div ref={(el) => (sectionsRef.current[4] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='bg-teal-600 hover:bg-gradient-to-r hover:from-teal-800 hover:to-amber-200 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0'>
                    <span className='pt-6 text-3xl ml-4'><GiSkills /></span>
                    <div className='pt-6 mr-4 mb-6'>
                        <p className='font-bold font-serif'>Frameworks & others</p>
                        <p className='text-[10px] font-bold pt-2'>In addition to my technical expertise, I am proficient in essential professional tools such as Microsoft Word and PowerPoint and various framework such ass bootstrap, tailwind ets for presenting my application more attractively</p>
                        <p className='flex justify-start gap-5 pt-4'>
                            <span data-tooltip-id="bootstrap-tooltip" data-tooltip-content="Bootstrap" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-amber-700'>
                                <span className='text-[6px]'>Bootstrap</span>
                                <FaBootstrap />
                            </span>
                            <span data-tooltip-id="tailwind-tooltip" data-tooltip-content="Tailwind" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-sky-600'>
                                <span className='text-[6px]'>Tailwind</span>
                                <RiTailwindCssFill />
                            </span>
                            <span data-tooltip-id="msword-tooltip" data-tooltip-content="Microsoft Word" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-indigo-800'>
                                <span className='text-[6px]'>MsWord</span>
                                <SiMicrosoftword />
                            </span>
                            <span data-tooltip-id="powerpoint-tooltip" data-tooltip-content="PowerPoint" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-amber-800'>
                                <span className='text-[6px]'>Powerpoint</span>
                                <FaFilePowerpoint />
                            </span>
                            <span data-tooltip-id="excel-tooltip" data-tooltip-content="Excel" data-tooltip-place="top" className='flex flex-col justify-center items-center text-white rounded-full px-2 p-1 skill-icon 
                             bg-green-800'>
                                <span className='text-[6px]'>Excel</span>
                                <PiMicrosoftExcelLogoFill />
                            </span>
                        </p>
                    </div>
                </div>

                <div ref={(el) => (sectionsRef.current[5] = el)} className=''>
                    <p className='text-3xl'> As A developer I am trying to explore more myself and learn something new.  </p>
                    <div className='text-center mt-8'>
                        <button style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='w-[150px] skill-icon  bg-amber-500 pb-1'>OK</button>
                    </div>
                </div>
            </div>

            {/* Render Tooltip Component */}
            <Tooltip id="html-tooltip " className='custom-tooltip' />
            <Tooltip id="css-tooltip" className='custom-tooltip' />
            <Tooltip id="react-tooltip" className='custom-tooltip' />
            <Tooltip id="js-tooltip"  className='custom-tooltip'/>
            <Tooltip id="axios-tooltip" className='custom-tooltip' />
            <Tooltip id="mongodb-tooltip" className='custom-tooltip' />
            <Tooltip id="server-tooltip"  className='custom-tooltip'/>
            <Tooltip id="node-tooltip"  className='custom-tooltip'/>
            <Tooltip id="express-tooltip"  className='custom-tooltip'/>
            <Tooltip id="jwt-tooltip" className='custom-tooltip'/>
            <Tooltip id="github-tooltip" className='custom-tooltip'/>
            <Tooltip id="netlify-tooltip" className='custom-tooltip'/>
            <Tooltip id="firebase-tooltip" className='custom-tooltip'/>
            <Tooltip id="surge-tooltip" className='custom-tooltip' />
            <Tooltip id="vercel-tooltip" className='custom-tooltip'/>
            <Tooltip id="bootstrap-tooltip" className='custom-tooltip'/>
            <Tooltip id="tailwind-tooltip" className='custom-tooltip'/>
            <Tooltip id="msword-tooltip" className='custom-tooltip'/>
            <Tooltip id="powerpoint-tooltip" className='custom-tooltip' />
            <Tooltip id="excel-tooltip" className='custom-tooltip'/>
        </div>
    );
};

export default Skills;

import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaNode, FaGithub, FaBootstrap, FaFilePowerpoint } from 'react-icons/fa';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiMongodb, SiExpress, SiPicardsurgeles, SiVercel, SiAxios, SiMicrosoftword, SiNetlify } from "react-icons/si";
import { RiReactjsLine, RiFirebaseFill, RiTailwindCssFill, RiTailwindCssLine } from "react-icons/ri";
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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SkillsCard from './SkillsCard';

const Skills = () => {



    const frontend = [
        {
            id: 0,
            name: 'React',
            icon: <RiReactjsLine />,
            value: 90,
            number: '90%',
            color: 'text-blue-400'
        },
        {
            id: 1,
            name: 'Javascript',
            icon: <TbBrandJavascript />,
            value: 85,
            number: '85%',
            color: 'text-yellow-400'
        },
        {
            id: 2,
            name: 'Vanilla CSS',
            icon: <SiCss3 />,
            value: 90,
            number: '90%',
            color: 'text-slate-200'
        },
        {
            id: 3,
            name: 'Bootstrap',
            icon: <FaBootstrap />,
            value: 90,
            number: '80%',
            color: 'text-purple-600'
        },
        {
            id: 4,
            name: 'Tailwind CSS',
            icon: <RiTailwindCssLine />,
            value: 90,
            number: '90%',
            color: 'text-cyan-500'
        },
        {
            id: 5,
            name: 'API',
            icon: <IoServer />,
            value: 90,
            number: '90%',
            color: 'text-orange-300'
        },
        {
            id: 6,
            name: 'Axios',
            icon: <SiAxios />,
            value: 75,
            number: '75%',
            color: 'text-blue-600'
        },
        {
            id: 7,
            name: 'JWT Token',
            icon: <MdGeneratingTokens />,
            value: 75,
            number: '75%',
            color: 'text-green-600'
        },

    ]
    const backend = [
        {
            id: 0,
            name: 'Node JS',
            icon: <FaNode />,
            value: 75,
            number: '80%',
            color: 'text-green-600'
        },
        {
            id: 1,
            name: 'Express JS',
            icon: <SiExpress />,
            value: 85,
            number: '85%',
            color: 'text-blue-400'
        },
        {
            id: 2,
            name: 'Server',
            icon: <IoServer />,
            value: 75,
            number: '75%',
            color: 'text-amber-500'
        },
        {
            id: 3,
            name: 'MongoDB',
            icon: <SiMongodb />,
            value: 80,
            number: '80%',
            color: 'text-slate-200'
        },
        {
            id: 4,
            name: 'Vercel',
            icon: <SiVercel />,
            value: 80,
            number: '80%',
            color: 'text-cyan-400'
        }
    ]

    const hostingAndOthers = [
        {
            id: 0,
            name: 'Firebase',
            icon: <RiFirebaseFill />,
            value: 70,
            number: '70%',
            color: 'text-yellow-400'
        },
        {
            id: 1,
            name: 'GitHub',
            icon: <FaGithub />,
            value: 75,
            number: '75%',
            color: 'text-slate-300'
        },
        {
            id: 2,
            name: 'Netlify',
            icon: <BiLogoNetlify />,
            value: 70,
            number: '70%',
            color: 'text-teal-500'
        },
        {
            id: 3,
            name: 'Vercel',
            icon: <SiVercel />,
            value: 70,
            number: '70%',
            color: 'text-green-400'
        },
        {
            id: 4,
            name: 'MS Word',
            icon: <SiMicrosoftword />,
            value: 70,
            number: '70%',
            color: 'text-blue-700'
        },
        {
            id: 5,
            name: 'PowerPoint',
            icon: <FaFilePowerpoint />,
            value: 80,
            number: '80%',
            color: 'text-orange-600'
        },
    ]

    const tabItem = [
        { id: 1, label: 'Front-end', content: frontend },
        { id: 2, label: 'Back-end', content: backend },
        { id: 3, label: 'Hosting & others', content: hostingAndOthers }
    ]

    const [activeLink, setActiveLink] = useState(1);
    const [activeContent, setActiveContent] = useState([]);
    const [animating, setAnimating] = useState(false);  // Default animation state is false

    const handleTabStyle = (id) => {
        setAnimating(false);
        setActiveLink(id);
        const selectedTab = tabItem.find(tab => tab.id === id);
        setActiveContent(selectedTab.content);
        // Trigger animation content has changed
        setTimeout(() => {
            setAnimating(true); // Trigger the zoom-in animation
        }, 100); // Delay to ensure content change
    }

    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimating(true); // Trigger animation when the section comes into view
                    } else {
                        setAnimating(false); // Reset animation when section is out of view
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
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

    useEffect(() => {
        const defaultTab = tabItem.find(tab => tab.id === activeLink);
        setActiveContent(defaultTab.content);
    }, [activeLink]);

    return (
        <div className='mb-20 pt-24 md:pt-0 lg:pt-0'>
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
                    0% {
                        transform: scale(0.5);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .animate-zoomIn {
                    animation: zoomIn 1s forwards;
                }

                .hidden-initially {
                   opacity: 0;
                   transform: scale(0.95); /* Slightly scale down when hidden */
                   transition: opacity 2s ease, transform 0.5s ease; /* Smooth fade and scale */
               }
                   /* Add a visible class to smoothly show content */
    .visible {
        opacity: 1;
        transform: scale(1); /* Scale back to normal size */
        transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth transition when becoming visible */
    }
            `}
            </style>
            {/* ref={(el) => (sectionsRef.current[0] = el)} */}

            <div className='mx-auto text-white flex flex-col w-full lg:w-9/12 md:w-9/12 justify-center'>
            {/* 
            ref={(el) => (sectionsRef.current[0] = el)}
             className={animating ? 'animate-zoomIn visible' : 'hidden-initially'} */}
                <div  >
                    <p className='text-5xl font-bold text-center pb-12 md:pb-8 lg:pb-8 text-white '>
                        My Skills
                    </p>
                    <div className='items-center w-full mx-auto md:w-9/12 lg:9/12'>
                        <p className='text-center text-amber-400 font-poppins'>A Comprehensive Showcase of My Full-Stack Web Development Expertise: A quick learner mind with technologies demand.</p>
                    </div>
                </div>
                {/* ref={(el) => (sectionsRef.current[1] = el)} 
                className={animating ? 'animate-zoomIn visible ' : 'hidden-initially'}*/}
                <div className='mt-12'>
                    <div className='flex items-center text-white justify-center gap-5 mb-16'>
                        {tabItem.map(tab => (
                            <span
                                key={tab.id}
                                onClick={() => handleTabStyle(tab.id)}
                                className={`font-poppins ${activeLink === tab.id ? 'rounded-2xl lg:px-6 px-4 md:px-6 py-1 border border-amber-500 ' : ''}`}>
                                {tab.label}
                            </span>
                        ))}
                    </div>

                    <div className='grid gap-5 lg:gap-10 md:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 transition-transform duration-500 ease-in-out'>
                        {activeContent.map(item => <SkillsCard key={item.id} item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;


// const sectionsRef = useRef([]);

// useEffect(() => {
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('animate-flipRight');
//                 }
//             });
//         },
//         { threshold: 0.1 }
//     );

//     sectionsRef.current.forEach((section) => {
//         if (section) {
//             observer.observe(section);
//         }
//     });

//     return () => {
//         sectionsRef.current.forEach((section) => {
//             if (section) {
//                 observer.unobserve(section);
//             }
//         });
//     };
// }, []);


{/* <style>
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
               */}
//color: #fff; /* Text color */
//font-size: 10px; /* Text size */
// border-radius: 4px; /* Border radius */
// box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Box shadow */
//}
//`}
//</style>

{/* <p className='text-6xl font-bold text-center pb-24 md:pb-32 lg:pb-32 text-teal-400 '>
Skills
</p>
<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto text-white gap-12 w-full lg:w-9/12 md:w-9/12 justify-center items-center'>
<div  className='text-start'>
    <p style={{ fontWeight: 1000, fontSize: '2rem', textShadow: '1px 1px 2px black' }}
        className='text-2xl text-white pb-9'>My <span className='text-teal-400'>Skills</span>?</p>
    <p className='text-4xl'> What have I achieved for growing up?</p>
</div> */}

//the grid of skills: 
{/* <div ref={(el) => (sectionsRef.current[1] = el)} style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='bg-teal-600 hover:bg-gradient-to-r hover:from-teal-800 hover:to-amber-200 shadow-sm flex gap-3 justify-center items-start transform scale-90 opacity-0'>
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
</div> */}

//render tooltip id which was used in grid of skills

{/* Render Tooltip Component */ }
// <Tooltip id="html-tooltip " className='custom-tooltip' />
// <Tooltip id="css-tooltip" className='custom-tooltip' />
// <Tooltip id="react-tooltip" className='custom-tooltip' />
// <Tooltip id="js-tooltip" className='custom-tooltip' />
// <Tooltip id="axios-tooltip" className='custom-tooltip' />
// <Tooltip id="mongodb-tooltip" className='custom-tooltip' />
// <Tooltip id="server-tooltip" className='custom-tooltip' />
// <Tooltip id="node-tooltip" className='custom-tooltip' />
// <Tooltip id="express-tooltip" className='custom-tooltip' />
// <Tooltip id="jwt-tooltip" className='custom-tooltip' />
// <Tooltip id="github-tooltip" className='custom-tooltip' />
// <Tooltip id="netlify-tooltip" className='custom-tooltip' />
// <Tooltip id="firebase-tooltip" className='custom-tooltip' />
// <Tooltip id="surge-tooltip" className='custom-tooltip' />
// <Tooltip id="vercel-tooltip" className='custom-tooltip' />
// <Tooltip id="bootstrap-tooltip" className='custom-tooltip' />
// <Tooltip id="tailwind-tooltip" className='custom-tooltip' />
// <Tooltip id="msword-tooltip" className='custom-tooltip' />
// <Tooltip id="powerpoint-tooltip" className='custom-tooltip' />
// <Tooltip id="excel-tooltip" className='custom-tooltip' />
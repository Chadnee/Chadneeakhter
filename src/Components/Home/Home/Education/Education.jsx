import React, { useEffect, useState, useRef } from "react";
import { IoMdSchool } from "react-icons/io";
import {
  FaAlignRight,
  FaCheck,
  FaCode,
  FaGraduationCap,
  FaLayerGroup,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";
import { LiaSchoolSolid, LiaUniversitySolid } from "react-icons/lia";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaListCheck } from "react-icons/fa6";
import { BsCheck2 } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { RiEqualizerFill } from "react-icons/ri";

const Education = () => {
  const education = [
    {
      id: 1,
      icon: <IoMdSchool></IoMdSchool>,
      name: "BBA (2020 - Present)",
      fullForm: "Bachelor of Business Adminastration",
      department: "MIS Department",
      institution: "University of Dhaka",
    },
    {
      id: 2,
      icon: <FaSchool></FaSchool>,
      name: "HSC (exam-2019)",
      fullForm: "Higher Secondary Certificate",
      department: "Business Studies (group)",
      institution: "Carmichael College, Rangpur",
    },
    {
      id: 3,
      icon: <LiaSchoolSolid></LiaSchoolSolid>,
      name: "SSC (exam-2017)",
      fullForm: "Secondary School Certificate",
      department: "Science (Group)",
      institution: "Senpara High School, Rangpur",
    },
  ];
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [isHovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftSectionRef.current) {
              setLeftVisible(true);
            } else if (entry.target === rightSectionRef.current) {
              setRightVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }, // Start animation when 10% of the section is visible
    );

    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (rightSectionRef.current) observer.observe(rightSectionRef.current);

    return () => {
      if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
      if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
    };
  }, []);

  return (
    <div className="w-full pt-12 md:pt-8 lg:pt-8">
      <style>
        {`
                    /* Fade in from the right */
                    @keyframes fadeRight {
                        0% {
                            transform: translateX(100vw); /* Start completely off-screen to the right */
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0); /* End at original position */
                            opacity: 1;
                        }
                    }

                    /* Fade in from the left */
                    @keyframes fadeLeft {
                        0% {
                            transform: translateX(-100vw); /* Start completely off-screen to the left */
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0); /* End at original position */
                            opacity: 1;
                        }
                    }

                    /* Classes to trigger the animations */
                    .animate-fadeRight {
                        animation: fadeRight 3s forwards;
                    }

                    .animate-fadeLeft {
                        animation: fadeLeft 3s forwards;
                    }
                        .hidden-initially {
                    opacity: 0; /* Initially hide the section */
                }
                `}
      </style>
     
     <div className="md:w-10/12 lg:w-10/12 w-full mx-auto flex flex-col items-center justify-center">
            {/* <p className="text-3xl lg:text-5xl md:text-6xl font-bold text-center pb-24 md:pb-32 lg:pb-32 text-white">
        Education
      </p> */}
      <hr className="border-[#1c2950]" />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 text-[#f6f9fe] w-full">
             <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-2 bg-slate-800/9 w-full px-7 mx-auto py-5 rounded-xl shadow-[0_0_2px_2px_#28405d]">
                      <p className="flex item-center gap-2">
                       <span className="font-bold text-[#0374c4] text-3xl "><FaGraduationCap/></span>
                       <span className="text-2xl font-semibold">Honours</span>
                     </p>
                      <span>Department of Mananagement Information Systems </span>
                      <span>University of Dhaka, Bangladesh </span>
                    </div>
                    <div className="flex flex-col gap-2 bg-slate-800/9 w-full px-7 mx-auto py-5 rounded-xl shadow-[0_0_2px_2px_#28405d]">
                        <p className="flex item-center gap-2">
                          <span className="font-bold text-[#0374c4] text-3xl "><FaUniversity/></span>
                          <span className="text-2xl font-semibold">Masters</span>
                        </p>
                      <span>Department of Mananagement Information Systems </span>
                      <span>University of Dhaka, Bangladesh </span>
                    </div>
             </div>
     
              <div className="flex flex-col items-center gap-8">
                         <div className="flex flex-col gap-2 bg-slate-800/9 w-full px-7 mx-auto py-5 rounded-xl shadow-[0_0_2px_2px_#28405d]">
                           <p className="flex item-center gap-2">
                             <span className="font-bold text-[#0374c4] text-3xl "><FaLayerGroup/></span>
                             <span className="text-2xl font-semibold">Web Course</span>
                           </p>
                           <span>Complete Web Development Course (Level 1), Programming Hero</span>
                           <span>Appolo Next Level(Level 2), Programming Hero</span>
                         </div>
                         <div className="flex flex-col gap-2 bg-slate-800/9 w-full px-7 mx-auto py-5 rounded-xl shadow-[0_0_2px_2px_#28405d]">
                           <p className="flex item-center gap-2">
                             <span className="font-bold text-[#0374c4] text-3xl "><RiEqualizerFill/></span>
                             <span className="text-2xl font-semibold">IT Qualifications</span>
                           </p>
                           <span>Frontend with React,Redux, JS, TS, Next Js, Tailwind & Bootstrap </span>
                           <span>Backend with Node , Express & Monoogse</span>
                         </div>
               
              </div>
        </div>
     </div>
    
      </div>

 
  );
};

export default Education;

     {/* <div> */}
      {/* <div className='flex md:flex-row lg:flex-row flex-col justify-center items-center gap-10 text-center md:text-start lg:text-start lg:gap-48 md:gap-48'> */}
      {/* Left section */}
      {/* <div className={`flex flex-col ${leftVisible ? 'animate-fadeLeft' : 'hidden-initially'}`} ref={leftSectionRef}>
                        <div>
                            <p className='uppercase md:text-4xl lg:text-4xl text-xl font-bold text-amber-400 pb-3'>IT Qualification</p>
                            <span className='text-white text-xl'>MERN Full Stack Development</span>
                            <br /><span className='text-white text-xl'>(JS, TS, React and Node Developer)</span>
                        </div>
                        <div className='pt-16'>
                            <p className='uppercase md:text-4xl lg:text-4xl text-xl font-bold text-amber-400 pb-3'>Course</p>
                            <span className='text-white text-xl'>Complete Web Development - level 1</span>
                            <br /><span className='text-white text-xl'>(Programming Hero)</span> <br/>
                            <span className='text-white text-xl'>Appollo Level 2 Web Dev - level-2</span>
                            <br /><span className='text-white text-xl'>(Programming Hero)</span>
                        </div>
                    </div> */}

      {/* Right section */}
      {/* <div className={`flex flex-col ${rightVisible ? 'animate-fadeRight' : 'hidden-initially'}`} ref={rightSectionRef}>
                        <div>
                            <p className='uppercase md:text-4xl lg:text-4xl text-xl font-bold text-amber-400 pb-3'>BBA</p>
                            <span className='text-white text-xl'>Management Information Systems,</span>
                            <br /><span className='text-white text-xl'>University of Dhaka</span>
                        </div>
                        <div className='pt-16'>
                            <p className='uppercase md:text-4xl lg:text-4xl text-xl font-bold text-amber-400 pb-3'>HSC</p>
                            <span className='text-white text-xl'>(Passing year-2019)</span>
                            <br /><span className='text-white text-xl'>Carmichael College, Rangpur</span>
                        </div>
                    </div> */}
      {/* </div> */}
      {/* </div> */}

{
  /* Commented-out section for education cards */
}
{
  /* <div className='w:full lg:w-10/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5'>
                {education.map(item =>
                    <div
                        key={item.id} data-aos="flip-left"
                        style={isHovered === item.id ? { boxShadow: "0 0 6px 6px #38a89d" } : {}}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        className="card bg-indigo-700 bg-opacity-80 border-4 bg-gradient-to-t from-blue-950 to-teal-500 border-teal-400 hoverTranslate transition-transform duration-500 ease-in-out transform hover:-translate-y-4 hover:border-amber-500 hover:bg-gradient-to-t hover:from-emerald-900 hover:to-teal-300 scale-90 text-white opacity-90 shadow-xl">
                        <p className='mx-auto text-[150px] mt-6'>
                            {item.icon}
                        </p>
                        <div className="card-body items-center text-center -mt-6">
                            <h2 className="font-bold text-2xl">{item.name}</h2>
                            <p>{item.department}</p>
                            <p>{item.institution}</p>
                        </div>
                    </div>
                )}
            </div> */
}

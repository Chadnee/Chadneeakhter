import React, { useEffect, useState } from 'react';
import { IoMdSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS




const Education = () => {

    useEffect(() => {

        Aos.init({ duration: 50000 });
    }, [])
    const education = [
        {   id:1, 
            icon: <IoMdSchool></IoMdSchool>,
            name: "BBA (2020 - Present)",
            fullForm: "Bachelor of Business Adminastration",
            department: "MIS Department",
            institution: "University of Dhaka"
        },
        {   id:2,
            icon: <FaSchool></FaSchool>,
            name: "HSC (exam-2019)",
            fullForm: "Heigher Secondery Certificate",
            department: "Business Studies (group)",
            institution: "Carmichael College, Rangpur"
        },
        {   id:3,
            icon: <LiaSchoolSolid></LiaSchoolSolid>,
            name: "SSC (exam-2017)",
            fullForm: "Secondery School Certificate",
            department: "Science (Group)",
            institution: "Senpara High School, Rangpur"
        }
    ]

    const [isHovered, setHovered] = useState(null);

    const handleMouseEnter = (id) => {
        setHovered(id);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

  
    return (
        <div className='mb-64'>
            
            <p className='text-3xl font-bold text-center pb-32  text-white mt-20'>
                Education
            </p>
            <div className='w-10/12 mx-auto grid grid-cols-3 gap-5 '>
                {
                    education.map(item =>
                        <div data-aos="flip-left"
                        style={isHovered === item.id?{ boxShadow: "0 0 6px 6px #38a89d" }:{}}
                            onMouseEnter={()=>handleMouseEnter(item.id)}
                            onMouseLeave={(handleMouseLeave)}
                            className="card bg-emerald-700  border hoverTranslate  transition-transform duration-500 ease-in-out transform hover:-translate-y-4 hover:border-amber-500 hover:bg-gradient-to-t hover:from-emerald-700 hover:to-teal-300 scale-90  text-white opacity-90  shadow-xl">
                            <p className='mx-auto text-[150px] mt-6'>
                                {item.icon}
                            </p>
                            <div className="card-body items-center text-center -mt-6">
                                <h2 className="font-bold text-2xl">{item.name}</h2>
                                <p>{item.department}</p>
                                <p>{item.institution}</p>

                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Education;
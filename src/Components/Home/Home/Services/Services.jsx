import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { FaCode } from "react-icons/fa";
import { TbBugOff } from "react-icons/tb";
import { SiConvertio } from "react-icons/si"
import Aos from "aos";

const Services = () => {

  

    const services= [
        {   id: 1,
            icon: <FaCode></FaCode>,
            title: 'Web/Mern-stack Developing',
            description:'Develop Full stack application using javascript, react, Tailwind css, mongodb, node js & express js.',
            image: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {   id: 2,
            icon:<TbBugOff></TbBugOff>,
            title: 'Debugging and Testing',
            description:'Identify & fix bug in Html, Javascript, react for frontend and handle database in MySQL, node js, express jsfor backend',
            image: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {   id: 5,
            icon:<SiConvertio></SiConvertio>,
            title: 'Figma to HTML/CSS/REACT',
            description:'Convert Figma design into Html, javasrcipt & react to implement best practice of responsive design',
            image: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
    return (
        <div  className='pt-32  mb-44 md:mb-64 lg:mb-64'>
            <p className='font-bold text-3xl uppercase text-center text-white pb-20 md:pb-28 lg:pb-28'>My Services</p>
            <div  className="grid lg:grid-cols-3 md:grid-cols-3   gap-12 w-full lg:w-10/12 md:w-10/12 mx-auto justify-center items-center ">
                {
                    services.map(service =><ServiceCard
                    key={service.id}
                    service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};



export default Services;
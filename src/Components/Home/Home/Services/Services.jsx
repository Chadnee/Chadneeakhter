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
            title: 'Web Developing',
            description:'Build cutting-edge interactive user interfaces with the latest web technologies',
            image: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {   id: 2,
            icon:<TbBugOff></TbBugOff>,
            title: 'Debugging and Testing',
            description:'Build cutting-edge interactive user interfaces with the latest web technologies',
            image: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {   id: 5,
            icon:<SiConvertio></SiConvertio>,
            title: 'Figma to HTML/CSS/REACT',
            description:'Build cutting-edge interactive user interfaces with the latest web technologies',
            image: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
    return (
        <div  className='mt-64 pb-56'>
            <p className='font-bold text-3xl uppercase text-center text-white pb-20'>My Services</p>
            <div  className="grid grid-cols-3   gap-12 w-10/12 mx-auto justify-center items-center ">
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

import React, { useEffect } from 'react';
import Button from '../../../../Shared/Button/Button';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const ServiceCard = ({ service }) => {
    const { id, title, description, image, icon } = service;
   
    useEffect(() => {

        Aos.init({ duration: 10000 });
    }, [])
   
    return (
        <div  className='text-white '>
            <div onMouseEnter={(e) => e.currentTarget.classList.add('hover-transform')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('hover-transform')}
             data-aos="zoom-in-up"  className="cardBox  rounded-xl h-[450px] border-2 border-teal-400  bg-emerald-700 shadow-xl opacity-50 group transition-transform duration-500 ease-in-out transform hover:-translate-y-4">
                <div className='relative overflow-hidden w-[300px] h-[200px] rounded-xl bg-gradient-to-r transition-all duration-500 ease-in-out from-blue-500 group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-blue-500'>
                    <img
                        src={image}
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>
                <div className='flex flex-col justify-center items-center group-hover:mt-5 mt-16'>
                    <p className='text-4xl'>{icon}</p>
                    <h2 className="text-2xl font-bold font-serif m-3  text-center">{title}</h2>
                </div>

                <div className="info pb-7 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-5">
                    <p className='text-[12px] px-7 font-bold pb-3'>{description}</p>
                    <Button
                        text="Hire now"
                        bgColor='bg-blue-900'>

                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
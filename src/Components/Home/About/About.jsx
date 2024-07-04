import React, { useEffect } from 'react';
import img from '../../../assets/image.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Button from '../../../Shared/Button/Button';



const About = () => {

    useEffect(()=>{
        Aos.init({
            duration: 4000, // Duration for all animations
            once: true,
        });
        
    }, [])



    return (
        <div className=' mx-auto mt-56 w-9/12'>

            <div>
                <div className='flex justify-center items-center gap-28'>
                    <figure >
                        <img style={{ boxShadow: "0 0 5px 5px #38a89d", borderRadius: "70% 70% 70% 70%" }}  className='h-[500px] border-2 border-teal-400  w-[1500px]' src={img} alt="" />
                    </figure>
                    <div data-aos="fade-right" data-aos-duration="4000" className=' w-[1900px]'>
                        <p style={{textshadow:'2px 2px 4px red'}}
                         className='-mt-2 font-mono text-blue-900 uppercase'>
                            Let me introduce myself</p>
                           
                        <p className='text-3xl text-white font-bold'>About me</p>
                        <span className='text-xl text-teal-400 font-semibold'>A story of Good</span>
                        <p style={{fontFamily: '',  lineHeight: '1.5', letterSpacing: "2px", }}className='text-white text-sm pt-8 pb-8 '>
                            I am a passionate MERN stack web developer with a keen interest in exploring new technologies and gaining diverse experiences. My journey in web development has equipped me with strong skills in React, Javascript, MongoDB, Node.js, AXios allowing me to build dynamic and responsive web applications. I am always eager to take on new challenges, learn something new, and contribute to innovative projects. My goal is to continuously grow as a developer and make a meaningful impact in the tech world.
                        </p>
                        <div className='-mt-2'>
                        <Button
                       text="read more">
                       </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
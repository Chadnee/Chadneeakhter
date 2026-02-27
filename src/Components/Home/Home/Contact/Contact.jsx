import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import profile from '../../../../assets/profile3.png'
import Footer from '@/Shared/Footer/Footer';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_py4of2m', 'template_ytltx8e', form.current, {
                publicKey: 'RoodPJnYRRscewFYG',
            })
            .then(
                (result) => {
                    console.log('kk:', result.text, "form:", form.current, "message:", e.target.user_name);
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };
    return (
        <div id="contact" className='mb-20 pt-28 w-full'>
         
            <style>
                {
                    `
@keyframes flipRi{
    0% {
        transform: perspective(400px) rotateY(-90deg) scale(1);
        opacity: 0;
    }
    100% {
        transform: perspective(400px) rotateY(0deg) scale(1.1);
        opacity: 1;
    }
}

@keyframes continuousZoom {
    0% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1.1);
    }
}

.animate-flipRi {
    animation: flipRi 1.5s forwards, continuousZoom 3s infinite;
}



                         
                    `
                }
            </style>
            <p className='font-bold text-2xl lg:text-3xl md:text-4xl text-center font-bebasNeue text-white pb-5'>Get In Touch</p>
             <hr className="border-[#24366d] w-full" />
            <div className='w-full lg:w-10/12 md:w-10/12  mx-auto md:mt-10 lg:mt-10 mt-7 '>
                <div className='flex md:flex-row lg:flex-row flex-col gap-5 items-center justify-center'>
                        <figure className='flex-1 h-full w-full '>
                            <img src={profile} className='scale-75 w-full object-cover' alt="" />
                        </figure>

                     <form className='text-white flex-1 w-full' ref={form} onSubmit={sendEmail}>
                       <p style={{ letterSpacing: ".8px"}} className='text-white md:mb-20 lg:mb-20 mb-6 md:pt-0 lg:pt-0 pt-12 font-lato lg:text-xl md:text-xl'>Have a project in mind? Let's talk !</p>
                       <div className='flex flex-col justify-center items-center gap-7 w-full'>
                       
                       <label className="form-control w-full">
                           <input style={{ letterSpacing: ".5px"}} type="text" placeholder="Name" name="user_name" className="text-white rounded  
                            bg-white/10 backdrop-blur-md placeholder:text-white focus:outline-none py-3 px-4  placeholder:font-lato placeholder:tracking-wider
                             focus:shadow-[0_0_2px_2px_#4d4c4c] transition-all duration-300 w-full border border-none focus:border-none outline-none" required/>
                        </label>
                         
                         <label className="form-control w-full ">
                            <input style={{ letterSpacing: ".5px"}} type="email" placeholder="Email" name="user_email" className="text-white rounded  
                            bg-white/10 backdrop-blur-md placeholder:text-white focus:outline-none py-3 px-4  placeholder:font-lato placeholder:tracking-wider
                             focus:shadow-[0_0_2px_2px_#4d4c4c] transition-all duration-300 w-full border border-none focus:border-none outline-none" required/>
                        </label>
                         <label className="form-control w-full ">
                            <input style={{ letterSpacing: ".5px"}} type="text" placeholder="Subject" name="subject" className="text-white rounded  
                            bg-white/10 backdrop-blur-md placeholder:text-white focus:outline-none py-3 px-4  placeholder:font-lato placeholder:tracking-wider
                             focus:shadow-[0_0_2px_2px_#4d4c4c] transition-all duration-300 w-full border border-none focus:border-none outline-none" required/>
                        </label>
                       
                         <label className="form-control w-full ">
                            <textarea style={{ letterSpacing: ".5px"}} type="text" placeholder="Message" name="message" className=" h-[100px] text-white rounded  
                            bg-white/10 backdrop-blur-md placeholder:text-white focus:outline-none py-3 px-4  placeholder:font-lato placeholder:tracking-wider
                             focus:shadow-[0_0_2px_2px_#4d4c4c] transition-all duration-300 w-full border border-none focus:border-none outline-none" required />
                        </label>
                       </div>

                      
                        <div className='flex flex-col md:items-end lg:items-end items-center justify-center'>
                            <button style={{ letterSpacing: ".5px"}} className='bg-gradient-to-b from-[#4476a8] to-[#28405d] md:px-12 lg:px-12 px-5 py-2 rounded font-semibold flex gap-2 items-center text-white md:text-xl lg:text-xl text-center mt-8 ml-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_6px_rgba(211,209,209,0.7)] border-0 outline-none'>
                                <input type="submit" value="Send Message" />
                            </button>
                        </div>
                    </form>
                </div>
              
            </div>
         
        </div>
    );
};

export default Contact;

//service ID : service_py4of2m

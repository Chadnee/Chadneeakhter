import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import profile from '../../../../assets/profile3 (1).png'

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
            <p className='font-bold text-5xl uppercase text-center text-white mb-20 '>Contact</p>
            <div className='w-full lg:w-10/12 md:w-10/12 mx-auto md:mt-0 lg:mt-0 mt-20 '>
                <div className='md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5 items-center justify-center'>
                        <figure className='flex-1 '>
                            <img src={profile} className='scale-150 object-contain' alt="" />
                        </figure>

                     <form className='text-white flex-1' ref={form} onSubmit={sendEmail}>
                       <div className='flex flex-col justify-center items-center gap-7 w-full'>
                       
                       <label className="form-control w-full">
                           <input style={{ letterSpacing: ".5px"}} type="text" placeholder="Name*" name="user_name" className="text-white rounded  
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
                            <textarea style={{ letterSpacing: ".5px"}} type="text" placeholder="Message*" name="message" className=" h-[120px] text-white rounded  
                            bg-white/10 backdrop-blur-md placeholder:text-white focus:outline-none py-3 px-4  placeholder:font-lato placeholder:tracking-wider
                             focus:shadow-[0_0_2px_2px_#4d4c4c] transition-all duration-300 w-full border border-none focus:border-none outline-none" required />
                        </label>
                       </div>

                      
                        <div className='text-center'>
                            <button style={{ letterSpacing: ".5px"}} className='w-full py-1  bg-slate-950 bg-opacity-25 hover:bg-blue-950 font-poppins hover:text-amber-400 ml-2 transition-all text-white duration-300 shadow-lg ease-in-out transform hover:scale-105 mt-8  uppercase  font-bold  border-none pb-1 text-xl rounded-xl text-center '>
                                <input type="submit" value="Send" />
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

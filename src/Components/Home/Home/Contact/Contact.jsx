import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaCode } from 'react-icons/fa';
import { BsCheck2 } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';
import { LiaUniversitySolid } from 'react-icons/lia';

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
        <div id="contact" className='mb-20 pt-28'>
             {/* <div className='lg:mb-52 md:mb-52 mb-36 font-poppins'>
                <div className="flex justify-center items-center mb-10">
                    <button className="border text-white  border-amber-500 px-10 lg:px-24 py-4 rounded-full animate-float">
                        <span>A lots of Project</span>
                        <span className='flex justify-center items-center gap-1'><span><FaCode></FaCode></span><span>Full Stack Developer (React+JS)</span></span>
                    </button>
                </div>
                <div className="flex justify-center items-center mb-10">
                    <button className="border text-white  border-amber-500 px-5 lg:px-36 py-4 rounded-full animate-float">
                        <span className=''>+ Programming Hero</span>
                        <br /> <span className='flex justify-center items-center gap-2'><span className='text-2xl'><BsCheck2></BsCheck2></span> Complete Web development Course</span>
                    </button>
                </div>
                <div className="flex justify-center items-center mb-10">
                    <button className="border text-white  border-amber-500 px-24 lg:px-36 py-4 rounded-full animate-float">
                    <span className='flex justify-center items-center gap-2'><span><FiBookOpen></FiBookOpen></span><span>BBA in MIS</span></span>
                        <span className='flex justify-center items-center gap-1'><span className='text-xl'><LiaUniversitySolid></LiaUniversitySolid></span>University of Dhaka</span>
                    </button>
                </div>
            </div> */}
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
                    <form className='text-white' ref={form} onSubmit={sendEmail}>
                       <div className='flex justify-center items-center gap-4 lg:gap-5'>
                       <label className="form-control w-full md:pb-10 lg:pb-10 pb-3 ">
                            <div className="label">
                                {/* <span className="label-text text-amber-400 tracking-wider pl-1 text-xl fond-bold">Name?</span> */}
                            </div>
                            <input style={{boxShadow: "0 0 4px 4px #2e5c59" , letterSpacing: ".5px"}} type="text" placeholder="Name*" name="user_name" className="text-black font-bold input  rounded-lg   h-[px] text-sm  bg-slate-950 bg-opacity-30 input-bordered w-full " required/>
                        </label>
                        <label className="form-control w-full md:pb-10 lg:pb-10 pb-3 ">
                            <div className="label">
                                {/* <span className="label-text text-amber-400 tracking-wider pl-1 text-xl fond-bold">Gender?</span> */}
                            </div>
                            <input style={{boxShadow: "0 0 4px 4px #2e5c59" , letterSpacing: ".5px"}} type="text" placeholder="Gender (optional)" name="user_gender" className="text-white font-bold input  rounded-lg   h-[px] text-sm  bg-slate-950 bg-opacity-30 input-bordered w-full "/>
                        </label>
                       </div>

                        <div className='flex justify-center items-center gap-4 lg:gap-5'>
                        <label className="form-control w-full md:pb-10 lg:pb-10 pb-3">
                            <div className="label">
                                {/* <span className="label-text text-amber-400 tracking-wider pl-1 text-xl fond-bold">Email?</span> */}
                            </div>
                            <input style={{boxShadow: "0 0 4px 4px #2e5c59" , letterSpacing: ".5px"}} type="email" placeholder="E-mail*" name="user_email" className="text-white font-bold input  rounded-lg  h-[px] text-sm  bg-slate-950 bg-opacity-30 input-bordered w-full" required/>
                        </label>
                        <label className="form-control w-full md:pb-10 lg:pb-10 pb-3">
                            <div className="label">
                                {/* <span className="label-text text-amber-400 tracking-wider pl-1 text-xl fond-bold">Email?</span> */}
                            </div>
                            <input style={{boxShadow: "0 0 4px 4px #2e5c59" , letterSpacing: ".5px"}} type="number" placeholder="Phone (optional)" name="user_phone" className="text-white font-bold input rounded-lg  h-[px] text-sm  bg-slate-950 bg-opacity-30 input-bordered w-full"/>
                        </label>
                        </div>

                        <label className="form-control w-full md:pb-10 lg:pb-10 pb-3">
                            <div className="label">
                                {/* <span className="label-text text-amber-400 tracking-wider pl-1 text-xl fond-bold">Messagee?</span> */}
                            </div>
                            <textarea style={{boxShadow: "0 0 4px 4px #2e5c59" , letterSpacing: ".5px"}} type="text" placeholder="Message*" name="message" className="text-white font-bold h-[120px] textarea rounded-lg  text-sm  bg-slate-950 bg-opacity-30 input-bordered w-full " required />
                        </label>
                        <div className='text-center'>
                            <button style={{boxShadow: "0 0 4px 4px #2e5c59" , letterSpacing: ".5px"}} className='w-full py-1  bg-slate-950 bg-opacity-25 hover:bg-blue-950 font-poppins hover:text-amber-400 ml-2 transition-all text-white duration-300 shadow-lg ease-in-out transform hover:scale-105 mt-8  uppercase  font-bold  border-none pb-1 text-xl rounded-xl text-center '>
                                <input type="submit" value="Send" />
                            </button>
                        </div>
                    </form>
                </div>

            {/* <div className='lg:flex md:flex gap-20 justify-center items-center lg:w-10/12 md:w-10/12 mx-auto'>
                <div className='mt-8 animate-flipRi mx-8'>
                    <img className='w-[1000px] h-[450px] '
                        src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?t=st=1720080597~exp=1720084197~hmac=bd69c525619b8712f257c9aeecee9b28176c0caa2f010f295d8383562c48b0ae&w=900" alt="" />
                </div>

                <div className='w-full md:mt-0 lg:mt-0 mt-20 '>
                    <form className='text-white' ref={form} onSubmit={sendEmail}>
                        <label className="form-control w-full md:pb-8 lg:pb-8 pb-3 ">
                            <div className="label">
                                <span className="label-text text-white text-xl fond-bold">Name?</span>
                            </div>
                            <input type="text" placeholder="Provide your name" name="user_name" className="text-black input border-2 rounded-none  border-teal-400 h-[40px] text-sm input-bordered w-full " />
                        </label>

                        <label className="form-control w-full md:pb-8 lg:pb-8 pb-3">
                            <div className="label">
                                <span className="label-text text-white text-xl fond-bold">Email?</span>
                            </div>
                            <input type="email" placeholder="Provide your email address" name="user_email" className="text-black input border-2 rounded-none border-teal-400 h-[40px] text-sm input-bordered w-full " />
                        </label>

                        <label className="form-control w-full md:pb-8 lg:pb-8 pb-3">
                            <div className="label">
                                <span className="label-text text-white text-xl fond-bold">Messagee?</span>
                            </div>
                            <textarea type="email" placeholder="Type your message" name="message" className="text-black h-[100px] textarea border-2 rounded-none border-teal-400 text-sm input-bordered w-full " />
                        </label>
                        <div className='text-center mt-8'>
                            <button style={{ boxShadow: "0 0 2px 2px " }} className='w-full skill-icon  bg-slate-900 hover:bg-blue-950 font-bold pb-1 text-xl text-center '>
                                <input type="submit" value="Send" />
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}

        </div>
    );
};

export default Contact;

//service ID : service_py4of2m

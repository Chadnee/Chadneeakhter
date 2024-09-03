import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <div className='mb-20 pt-28'>
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
            <p className='font-bold text-5xl uppercase text-center text-teal-400 mb-20 '>Contact</p>
            <div className='w-full lg:w-10/12 md:w-10/12 mx-auto md:mt-0 lg:mt-0 mt-20 '>
                    <form className='text-white' ref={form} onSubmit={sendEmail}>
                        <label className="form-control w-full md:pb-16 lg:pb-16 pb-10 ">
                            <div className="label">
                                <span className="label-text text-teal-400 opacity-80 tracking-wider pl-1 text-xl fond-bold">Name?</span>
                            </div>
                            <input type="text" placeholder="Provide your name" name="user_name" className="text-slate-300 input border-2 rounded-2xl  border-teal-800 h-[40px] text-sm bg-blue-950 bg-opacity-30 input-bordered w-full " required/>
                        </label>

                        <label className="form-control w-full md:pb-16 lg:pb-16 pb-10">
                            <div className="label">
                                <span className="label-text text-teal-400 opacity-80 tracking-wider pl-1 text-xl fond-bold">Email?</span>
                            </div>
                            <input type="email" placeholder="Provide your email address" name="user_email" className="text-slate-300 input border-2 rounded-2xl border-teal-800 h-[40px] text-sm bg-blue-950 bg-opacity-30 input-bordered w-full" required/>
                        </label>

                        <label className="form-control w-full md:pb-16 lg:pb-16 pb-10">
                            <div className="label">
                                <span className="label-text text-teal-400 opacity-80 tracking-wider pl-1 text-xl fond-bold">Messagee?</span>
                            </div>
                            <textarea type="email" placeholder="Type your message" name="message" className="text-slate-300 h-[100px] textarea border-2 rounded-2xl border-teal-800 text-sm bg-blue-950 bg-opacity-30 input-bordered w-full " required />
                        </label>
                        <div className='text-center'>
                            <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='w-full py-1 bg-teal-600 hover:bg-blue-950 font-poppins hover:text-teal-400 ml-2 transition-all duration-300 shadow-lg ease-in-out transform hover:scale-105 mt-12  uppercase  font-bold  border-none pb-1 text-xl rounded-xl text-center '>
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
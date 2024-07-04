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
                    console.log('kk:',result.text, "form:", form.current, "message:", e.target.user_name);
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
            
    };
    return (
        <div className='pb-20'>
            <p className='font-bold text-3xl uppercase text-center text-white pb-20'>My Contact</p>

            <div className='lg:flex md:flex gap-12 justify-center items-center w-10/12 mx-auto'>
                <div className='mt-8'>
                    <img className='w-[1000px] h-[450px] '
                     src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?t=st=1720080597~exp=1720084197~hmac=bd69c525619b8712f257c9aeecee9b28176c0caa2f010f295d8383562c48b0ae&w=900" alt="" />
                </div>

                <div className='w-full'>
                <form className='text-white' ref={form} onSubmit={sendEmail}>
            <label className="form-control w-full pb-8 ">
                <div className="label">
                    <span className="label-text text-white text-xl fond-bold">Name?</span>
                </div>
                <input type="text" placeholder="Provide your name" name="user_name" className="text-black input border-2 border-teal-400 h-[40px] text-sm input-bordered w-full " />
           </label>

            <label className="form-control w-full pb-8">
                <div className="label">
                    <span className="label-text text-white text-xl fond-bold">Email?</span>
                </div>
                <input type="email" placeholder="Provide your email address" name="user_email" className="text-black input border-2 border-teal-400 h-[40px] text-sm input-bordered w-full " />
           </label>

            <label className="form-control w-full pb-8">
                <div className="label">
                    <span className="label-text text-white text-xl fond-bold">Messagee?</span>
                </div>
                <textarea type="email" placeholder="Type your message" name="message" className="text-black h-[100px] textarea border-2 border-teal-400 text-sm input-bordered w-full " />
           </label>
           <div className='text-center mt-8'>
                        <button style={{ boxShadow: "0 0 2px 2px " }} className='w-full skill-icon  bg-teal-500 font-bold pb-1 text-xl text-center rounded-xl'>
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
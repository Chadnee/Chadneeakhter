import React, { useEffect, useRef, useState } from 'react';
import blog1 from '../../../../assets/blog1.jpg'
import blog2 from '../../../../assets/blog2.jpg'
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa';

const Blogs = () => {

    const [inView, setInView] = useState(false);
    const projectRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                });
            },
            { threshold: 0.3 } // Trigger animation when 30% of the section is in view
        );

        if (projectRef.current) {
            observer.observe(projectRef.current);
        }

        return () => {
            if (projectRef.current) {
                observer.unobserve(projectRef.current);
            }
        };
    }, []);


    const blogPosts = [
        {
          image: blog1,
          question: 'Difference between client-side and server-side rendering?',
          answer: `CSR renders content in the browser using JavaScript, while SSR generates full HTML on the server, improving SEO and load speed with general server rendering...`,
          name: 'MST. Chadnee',
          date: '15/7/2023',
        },
        {
          image: blog2,
          question: 'What are RESTful APIs and why are they important?',
          answer: `RESTful APIs use HTTP methods for communication between client and server, enabling scalable, stateless operations for efficient system interaction...`,
          name: 'MST. Chadnee',
          date: '15/7/2023',
        },
        {
          image: 'https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VydmVyfGVufDB8fDB8fHww',
          question: 'What is a callback function and how does it work?',
          answer: `A callback function is passed as an argument and executed after a function completes, commonly used in asynchronous JavaScript operations...`,
          name: 'MST. Chadnee',
          date: '15/7/2023',
        }
      ];
      
      
    return (
        <div ref={projectRef} className="lg:mb-32 mb-16 md:mb-32 lg:-mx-20 md:-mx-20">

            <div className='pb-12 md:pb-24 lg:pb-24 pt-24 md:pt-0 lg:pt-0'>
                <p className='font-semibold lg:text-5xl text-4xl md:text-3xl font-poppins text-center text-white pb-12'>Recent Blogs</p>
            </div>
            <div className='grid lg:grid-cols-3  md:grid-cols-3 gap-5 md:gap-3 lg:gap-3 grid-cols-1 w-full lg:w-11/12 mx-auto'>
                {
                    blogPosts.map((item, index) => (<div key={item.name}
                        className={`transition-all duration-2000 ease-out transform ${inView ? (index === 0 ? 'translate-x-0 opacity-100' : index === 1 ? 'translate-y-0 opacity-100' : 'translate-x-0 opacity-100')
                                : (index === 0 ? '-translate-x-96 opacity-0' : index === 1 ? 'translate-y-96 opacity-0' : 'translate-x-96 opacity-0')
                            }`}>
                        <div className='flex flex-col items-center lg:w-[390px] md:w-[390px] justify-center '>
                            <div className='bg-slate-800 px-5 mx-auto py-5 rounded-xl border-amber-400'>
                                <figure className=' w-full h-[200px] '>
                                    <img className='h-full object-cover w-full ' src={item.image} alt={item.name} />
                                </figure>
                                <p className='text-xl font-bold font-poppins text-white pt-5'>{item.question}</p>
                                <p className='flex justify-start gap-8 pt-3 pb-3 text-white'>
                                    <span className='flex items-center gap-1'><span className='text-amber-400'><FaUser></FaUser></span> <span>{item.name}</span></span> 
                                    <span className='flex items-center gap-1'><span className='text-amber-400'><FaCalendar></FaCalendar></span> <span>{item.date}</span></span> 
                                    
                                </p>
                                <p className='text-white  font-poppins'>{item.answer}</p>
                                <p className='text-amber-400 font-poppins pt-7 flex  items-center gap-4'>See more <span className='text-amber-400'><FaArrowRight className=''></FaArrowRight></span></p>
                            </div>
                        </div>
                    </div>))
                }
            </div>

        </div>
    );
};

export default Blogs;

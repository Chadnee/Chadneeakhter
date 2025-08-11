import React, { useEffect, useRef, useState } from 'react';
import img from '../../../assets/image.jpg';
import img2 from '../../../assets/image2.jpg';
import { FaBook, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiBookOpen } from "react-icons/fi";

const About = () => {
  const sectionsRef = useRef([]);   // To observe sections for slide animation
  const zoominRef = useRef([]);     // To observe sections for zoom animation

  const [hasAnimated, setHasAnimated] = useState({
    zoomIn: false,
    slideIn: false,
  });

  // Zoom-in animation observer
  useEffect(() => {
    const zoominObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.zoomIn) {
            entry.target.classList.add('animate-zoomIn');
            setHasAnimated((prev) => ({ ...prev, zoomIn: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    zoominRef.current.forEach((section) => {
      if (section) {
        zoominObserver.observe(section);
      }
    });

    return () => {
      zoominRef.current.forEach((section) => {
        if (section) {
          zoominObserver.unobserve(section);
        }
      });
    };
  }, [hasAnimated.zoomIn]);

  // Slide-in animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.slideIn) {
            entry.target.classList.add('animate-slideInBottomRight');
            setHasAnimated((prev) => ({ ...prev, slideIn: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [hasAnimated.slideIn]);

  return (
    // ref={(el) => (sectionsRef.current[0] = el)}
    <div  className=' mx-auto flex flex-col justify-center items-center pt-28 mb-52'>
      <style>
        {`
          @keyframes slideInBottomRight {
            from {
              transform: translate(50%, 50%);
              opacity: 0;
            }
            to {
              transform: translate(0, 0);
              opacity: 1;
            }
          }

          .animate-slideInBottomRight {
            animation: slideInBottomRight 1s ease-out forwards;
          }

          @media (max-width: 768px) {
            .center-content {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }

          @keyframes zoomIn {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-zoomIn {
            animation: zoomIn 1.5s forwards;
          }
           
        `}
      </style>

      {/* Zoom in effect for the About heading */}
      {/* ref={(el) => (zoominRef.current[0] = el)}  */}
      <div className='pb-24'>
        <p className='text-5xl font-semibold text-white font-poppins tracking-wider'>About me</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16 justify-center items-center'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3 items-center justify-center'>
            <figure className='w-[180px] h-[180px]' ref={(el) => (zoominRef.current[1] = el)}>
              <img className='rounded-full object-cover h-full w-full bg-amber-400 p-[7px]' src={img2} alt="" />
            </figure>
            <div className='text-white text-center pt-5'>
              <p className=' tracking-wider font-poppins text-xl pb-1'>MST. Chadnee Akhter</p>
              <p className=' font-robotoLight text-amber-400 pb-3'>Web Developer (MERN)</p>
            </div>
          </div>
          <div className='font-poppins space-y-1 bg-slate-800 px-4 py-4'>
            <p className='text-amber-400 text-2xl'>Education</p>
            <p className='text-amber-400 text-2xl pb-2'><FiBookOpen /></p>
            <p className='text-white text-sm'>2020-2024</p>
            <p className='text-white text-sm'>BBA in Management Informations System (MIS), FBS</p>
            <p className='text-white text-sm'>University of Dhaka</p>
          </div>
        </div>

        <div className='text-center md:text-start lg:text-start'>
          <p className=' font-mono text-amber-400 uppercase'>
            Let me introduce myself
          </p>
          <p className='text-white text-[15px] font-poppins tracking-wider pt-8 pb-8 md:text-start lg:text-start text-start'>
            <span className='pb-4 inline-block'>
              I am a passionate MERN stack web developer with a strong drive for exploring new technologies and accumulating diverse experiences in the field. My journey in web development has equipped me with extensive expertise in React, JavaScript, MongoDB, Node.js, and Axios, enabling me to build highly dynamic and responsive web applications that cater to modern user needs.
              Throughout my career, I have continuously embraced new challenges and opportunities to expand my skill set.
            </span>
            <br />
            <span className='pt-5'>
              My proficiency in React allows me to develop intuitive and engaging user interfaces, while my backend experience with Node.js and MongoDB ensures robust and scalable solutions. Axios has been instrumental in optimizing communication between client and server, enhancing the overall performance of my projects.
              I am deeply committed to staying at the forefront of technological advancements and am always eager to learn and adapt. My goal is to leverage my knowledge and skills to contribute to innovative projects that have a significant impact on the tech world.
            </span>
          </p>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
           className='text-white rounded-2xl mt-5 px-12 py-3 text-xl border border-amber-500'>Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default About;



{/* <style>
{`

@keyframes zoomIn {
    from {
        transform: scale(0.9);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
.animate-zoomIn {
    animation: zoomIn 2s forwards;
} */}

//    /* Custom CSS to center content on small devices */
// @media (max-width: 768px) {
//     .center-content {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }
// }
//    style={{fontFamily: '',  lineHeight: '1.5', letterSpacing: "2px" }}
// `}
// </style>

 {/* <div>
                <div className='lg:flex-row md:flex-row flex flex-col  justify-center  lg:w-8/12 md:w-7/12 mx-auto items-center gap-16'>
               <figure ref={(el) => (sectionsRef.current[1] = el)} className='md:w-9/12 lg:w-9/12 mx-auto center-content'>
                        <img style={{ boxShadow: "0 0 5px 5px #38a89d", borderRadius: "70% 70% 70% 70%" }}  className='lg:h-[500px] center-content md:h-[500px] h-[350px] md:w-full lg:w-full  border-2 border-teal-400  ' src={img} alt="" />
                    </figure>

                    <div ref={(el) => (sectionsRef.current[2] = el)} className=' w-full animate-zoomIn text-center md:text-start lg:text-start'>
                        <p style={{textshadow:'2px 2px 4px red'}}
                         className='-mt-2 font-mono text-blue-900 uppercase'>
                            Let me introduce myself</p>
                           
                        <p className='text-3xl text-white  font-bold'>About me</p>
                        <span  className='text-xl text-teal-400 font-semibold'>A story of Good</span>
                        <p   className='text-white lg:leading-6 md:leading-6 md:tracking-widest lg:tracking-widest px-8 md:px-0 lg:px-0 text-sm pt-8 pb-8 md:text-start lg:text-start text-justify'>
                            I am a passionate MERN stack web developer with a keen interest in exploring new technologies and gaining diverse experiences. My journey in web development has equipped me with strong skills in React, Javascript, MongoDB, Node.js, AXios allowing me to build dynamic and responsive web applications. I am always eager to take on new challenges, learn something new, and contribute to innovative projects. My goal is to continuously grow as a developer and make a meaningful impact in the tech world.
                        </p>
                        <div className='-mt-2  md:hidden lg:hidden'>
                            <p style={{ textShadow: "0 0 5px #38a89d, 0 0 10px #38a89d", font:'italic' }}  className='text center text-teal-400 shadow-lg italic  pb-4 pt-5 text-[16px] font-[italic]'>Follow me</p>
                        <div className='flex gap-7  mt-6 text-center justify-center'>
                    <a href="https://www.facebook.com/chadnee.akhter.73?mibextid=ZbWKwL">
                    <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='rounded-lg border-2 border-teal-400 p-3  md:p-2 lg:p-2 text-teal-400 hover:bg-teal-400 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaFacebook></FaFacebook></button>
                    </a> 
                    <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='rounded-lg border-2 border-teal-400 p-3  md:p-2 lg:p-2 text-teal-400 hover:bg-teal-400 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaGithub></FaGithub></button>
                    <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='rounded-lg border-2 border-teal-400 p-3  md:p-2 lg:p-2 text-teal-400 hover:bg-teal-400 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaTwitter></FaTwitter></button>
                    <a href='https://www.linkedin.com/in/mst-chadnee-akhter-40b280318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '>
                    <button style={{ boxShadow: "0 0 2px 2px #38a89d" }} className='rounded-lg border-2 border-teal-400 p-3  md:p-2 lg:p-2 text-teal-400 hover:bg-teal-400 hover:text-white hover:shadow-lg hover:shadow-amber-200'><FaLinkedin></FaLinkedin></button>
                    </a>
                </div>
                       
                        </div>
                        <div className='hidden md:block lg:block '>
                       <Button
                       text="Read more"
                       target="_blank"
                       rel="nopener noreferrer"
                       href="/resume.pdf"
                       bgColor='bg-blue-950'
                       bgHover='bg-teal-400'>
                       </Button>
                       </div>
                    </div>
                    
                    
                </div>
            </div> */}
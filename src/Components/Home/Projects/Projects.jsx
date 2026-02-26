import React, { useEffect, useRef, useState } from 'react';
import Button from '../../../Shared/Button/Button';
import { FaArrowCircleRight, FaArrowRight, FaGithub, FaGithubAlt } from 'react-icons/fa';
import carnival from '../../../assets/carnival.png'
import foodhub from '../../../assets/foodhub.png'
import emars from '../../../assets/emars.png'
import technoUniversity from '../../../assets/technoUniversity.jpg'
import { TbBrandGithub } from "react-icons/tb";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsCart4 } from "react-icons/bs";
import { IoRestaurantOutline } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";


// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';



// import required modules
//import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Projects = () => {
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


    const projects = [
        {   
            title: "E-commerece Platform",
            name: "E-Mars",
            icon:<BsCart4/>,
            image: emars,
            longDescription: "It is an e-commerce website built with modern technologies such as React, JavaScript, Node.js, Express.js , Firebase & GitHub. Tailwind CSS is used for responsive design, though Bootstrap could be an alternative. The frontend features product categories, a review system, shopping cart, and payment integration. The backend, powered by Node.js, Express.js, and MongoDB, manages the database and admin panel. Admin functionalities include product management, customer bookings, and a dashboard. The site is fully responsive, with layouts tailored for both large and small devices. Feel free to explore the site for more details.",
            shortDescription: "A responsive E-commerce site with React , Javascript and Node JS for both frontend and backend side with Pyamnet system.",
            github: "https://github.com/Chadnee/Emars-server",
            liveSite: "https://e-mars-7ef3e.web.app/"
        },
        // {   
        //     title: "Clinicical Platform",
        //     name: "Carnival",
        //     image: carnival,
        //     longDescription: "I built a hospital website using modern web technologies including React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The website provides essential services like patient management, appointment scheduling, and doctor profiles. It incorporates dynamic data handling via MongoDB, a responsive user interface powered by Tailwind CSS, and efficient backend operations managed by Express.js and Node.js. The website integrates dynamic features like patient data handling and appointment booking, offering a seamless user experience. The site includes patient management, appointment scheduling, and dynamic data",
        //     shortDescription: "A Hospital site using React, javascript, tailwind css and express js. A social server is stayed here with treatment sample. A lots of doctors information is included in mongodb",
        //     github: "https://github.com/Chadnee/Carnival-client",
        //     liveSite: "https://clinics-carnival-eb470.web.app/"
        // },
                {
            title: "Educational Platform",
            name: "Techno. University",
            icon:<LiaSchoolSolid/>,
            image: technoUniversity,
            longDescription: "A restaurant responsive website using modern web technologies including React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The website provides essential services like menu management, online ordering, and customer feedback. It incorporates dynamic data handling via MongoDB, a responsive user interface powered by Tailwind CSS, and efficient backend operations managed by Express.js and Node.js. The website integrates dynamic features like online orders and menu updates, offering a seamless user experience. The site includes menu management, ordering, and customer feedback.",
            shortDescription: "A University site build with React, Redux, Typescript and Ant Design, which makes a dynamic role based platform",
            github: "https://github.com/Chadnee/FoodHub_resturant_client",
            liveSite: "https://github.com/Chadnee/University_frontend"
        },
        {
            title: "Resturant Platform",
            name: "Food-Hub",
            icon:<IoRestaurantOutline/>,
            image: foodhub,
            longDescription: "A restaurant responsive website using modern web technologies including React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The website provides essential services like menu management, online ordering, and customer feedback. It incorporates dynamic data handling via MongoDB, a responsive user interface powered by Tailwind CSS, and efficient backend operations managed by Express.js and Node.js. The website integrates dynamic features like online orders and menu updates, offering a seamless user experience. The site includes menu management, ordering, and customer feedback.",
            shortDescription: "A responisve Restaurant site with React, javascript, Express js and mongodb database , a modern sophisticated UI design",
            github: "https://github.com/Chadnee/FoodHub_resturant_client",
            liveSite: "https://foodhub-client.web.app/"
        },

    ];



    return (
        <div ref={projectRef} className="w-full mb-20 mt-16">

                <p className='font-semibold lg:text-4xl text-[26px] md:text-3xl text-center text-[#f6f9fe] pb-3 lg:pb-6 md:pb-6'>Featured Project</p>
            <hr className="border-[#1c2950]" />
            <div className='mt-7 lg:mt-16 md:mt-16 grid lg:grid-cols-3  md:grid-cols-3 grid-cols-1 md:gap-7 lg:gap-7 gap-8 w-full lg:w-10/12 mx-auto'>
                {
                    projects.map((item, index) => (<div key={item.name}
                        className={`transition-all duration-[2000ms] ease-out transform ${inView ? (index === 0 ? 'translate-x-0 opacity-100' : index === 1 ? 'translate-y-0 opacity-100' : 'translate-x-0 opacity-100')
                                : (index === 0 ? '-translate-x-96 opacity-0' : index === 1 ? 'translate-y-96 opacity-0' : 'translate-x-96 opacity-0')
                            }`}>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='bg-slate-800/9 px-7 mx-auto py-5 rounded-xl shadow-[0_0_2px_2px_#28405d]'>
                               <p className='text-[#f6f9fe]/90 font-semibold text-[22px] lg:text-[26px] md:text-[26px] flex items-center gap-2 pb-3'>
                                <span className='text-3xl text-[#457fc7]'>{item.icon}</span>
                               <span>{item.title}</span>
                               </p>
                                <figure className=' w-full transition-all duration-500 ease-in-out p-[3px] rounded-md bg-gradient-to-r from-[#7f7a7a] to-[#fff]'>
                                {/* <figure className=' w-full transition-all duration-500 ease-in-out bg-gradient-to-r from-[#fae2e7] '> */}
                                    <img className='object-cover rounded-md shadow-[0_0_10px_rgba(56,189,248,0.6)] h-full w-full ' src={item.image} alt={item.name} />
                                    {/* <img className='object-cover h-full w-full mix-blend-overlay' src={item.image} alt={item.name} /> */}
                                </figure>
                                <p className='text-[#f6f9fe]  pt-3 font-titilliumWeb text-[18px]'>{item.shortDescription}</p>
                               <div className='flex justify-between items-center'>
                                  <a href={item.liveSite} className='text-[#fdf9f9] font-poppins pt-7 flex  items-center gap-4'>
                                    <button className='bg-gradient-to-b from-[#4476a8] to-[#28405d] text-[15px] px-4 py-1 rounded font-semibold flex gap-2 items-center'>
                                        <span>Live Demo</span><FaArrowRight></FaArrowRight>
                                    </button> 
                                </a>
                                 <a href={item.github} className='text-[#fdf9f9] font-poppins pt-7 flex  items-center gap-4'>
                                    <button className='bg-gradient-to-b from-[#4476a8] to-[#28405d] text-[15px] px-4 py-1 rounded font-semibold flex gap-2 items-center'>
                                     <span>Code</span> <FaGithub className='text-xl'></FaGithub >
                                    </button> 
                                </a>
                               </div>
                            </div>
                        </div>
                    </div>))
                }
            </div>

        </div>
    );
};

export default Projects;


{/* <iframe src="https://giphy.com/embed/UTjjT6id1AqYugpGbh" className='w-[20px] h-[20px]'></iframe> */ }

//style for swiper button manually

{/* <style>
                {
                    `
                 .swiper-button-prev,
.swiper-button-next {
  width: 30px;
  height: 30px; */}
//background-color: rgba(56, 168, 157, .3); /* Adds 80% opacity to #38a89d */
//   background-color: #38a89d;
//   border: none;
//   border-radius: 50%;
//   color: #fff;
//   font-weight: bold;
//   font-size: 18px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   transition: background-color 0.3s, color 0.3s;
// }

//  :root {
//    --swiper-navigation-size: 10px;
//    color:black;
//    --swiper-theme-color: black;
// }
//                  `
//                 }
//             </style>
{/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex md:flex-row lg:flex-row flex-col items-center justify-center gap-20'>
                        <div className='lg:w-7/12 md:w-7/12 w-full'>
                            <p className='text-5xl font-poppins font-bold  text-teal-400 pb-7 text-center md:text-start lg:text-start'>E-Commerce</p> */}

{/* Full text for medium and large devices */ }
{/* <p className="hidden md:block lg:block text-white text-justify text-[17px]">
                            It is an e-commerce website built with modern technologies such as React, JavaScript, React Router, Node.js, and Express.js. Tailwind CSS is used for responsive design, though Bootstrap could be an alternative. The frontend features product categories, a review system, shopping cart, and payment integration. The backend, powered by Node.js, Express.js, and MongoDB, manages the database and admin panel. Admin functionalities include product management, customer bookings, and a dashboard. The site is fully responsive, with layouts tailored for both large and small devices. Feel free to explore the site for more details.
                            </p> */}

{/* Shortened text for small devices */ }
{/* <p className="md:hidden lg:hidden text-white text-justify text-[17px]">
                            This e-commerce site uses React, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB. It features product categories, reviews, shopping cart, and payment integration. The admin panel manages products, bookings, and dashboards. Tailwind CSS is used for responsive design. A payment system is also included here. Fully responsive, the site adapts for large and small devices responsively. Feel free to explore the site for more details.
                            </p>
                            <div className='text-center md:text-start lg:text-start'>
                                <a href="https://e-mars-7ef3e.web.app/" target="_blank" rel="noopener noreferrer">
                                    <button style={{ boxShadow: "0 0 4px 4px #38a89d" }} className='px-16 py-2 hover:bg-blue-950 font-poppins hover:text-teal-400 ml-2 transition-all duration-300 shadow-lg ease-in-out transform hover:scale-105 mt-12 rounded-3xl uppercase text-2xl font-bold bg-teal-400 border-none'>
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='lg:w-5/12 md:w-5/12 w-full '>
                            <img className='w-full lg:h-[480px] md:h-[480px] rounded-3xl ' src={emars} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex md:flex-row lg:flex-row flex-col items-center justify-center gap-20'>
                        <div className='lg:w-7/12 md:w-7/12 w-full'>
                            <p className='text-5xl font-poppins font-bold  text-teal-400 pb-7 text-center md:text-start lg:text-start'>Hospital</p> */}

{/* Full text for medium and large devices */ }
{/* <p className="hidden md:block lg:block text-white text-justify text-[17px]">
                                I built a hospital website using modern web technologies including React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The website provides essential services like patient management, appointment scheduling, and doctor profiles. It incorporates dynamic data handling via MongoDB, a responsive user interface powered by Tailwind CSS, and efficient backend operations managed by Express.js and Node.js. The website integrates dynamic features like patient data handling and appointment booking, offering a seamless user experience.
                                The site includes patient management, appointment scheduling, and dynamic data
                            </p> */}

{/* Shortened text for small devices */ }
{/* <p className="md:hidden lg:hidden text-white text-justify text-[17px]">
                                I built a hospital website using React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The site includes patient management, appointment scheduling, and dynamic data handling. .I built a hospital website using React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The site includes patient management, appointment scheduling, and dynamic data handling.
                            </p>
                            <div className='text-center md:text-start lg:text-start'>
                                <a href="https://clinics-carnival-eb470.web.app/" target="_blank" rel="noopener noreferrer">
                                    <button style={{ boxShadow: "0 0 4px 4px #38a89d" }} className='px-16 py-2 hover:bg-blue-950 font-poppins hover:text-teal-400 ml-2 transition-all duration-300 shadow-lg ease-in-out transform hover:scale-105 mt-12 rounded-3xl uppercase text-2xl font-bold bg-teal-400 border-none'>
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='lg:w-5/12 md:w-5/12 w-full '>
                            <img className='w-full lg:h-[480px] md:h-[480px] rounded-3xl ' src={carnival} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex md:flex-row lg:flex-row flex-col items-center justify-center gap-20'>
                        <div className='lg:w-7/12 md:w-7/12 w-full'>
                            <p className='text-5xl font-poppins font-bold  text-teal-400 pb-7 text-center md:text-start lg:text-start'>Resturant</p> */}

{/* Full text for medium and large devices */ }
{/* <p className="hidden md:block lg:block text-white text-justify text-[17px]">
                                A resturant responsive website using modern web technologies including React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The website provides essential services like patient management, appointment scheduling, and doctor profiles. It incorporates dynamic data handling via MongoDB, a responsive user interface powered by Tailwind CSS, and efficient backend operations managed by Express.js and Node.js. The website integrates dynamic features like patient data handling and appointment booking, offering a seamless user experience.
                                The site includes patient management, appointment scheduling, and dynamic data
                            </p> */}

{/* Shortened text for small devices */ }
{/* <p className="md:hidden lg:hidden text-white text-justify text-[17px]">
                            resturant responsive website using React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The site includes patient management, appointment scheduling, and dynamic data handling. .I built a hospital website using React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The site includes patient management, appointment scheduling, and dynamic data handling.
                            </p>
                            <div className='text-center md:text-start lg:text-start'>
                                <a href="https://foodhub-client.web.app/" target="_blank" rel="noopener noreferrer">
                                    <button style={{ boxShadow: "0 0 4px 4px #38a89d" }} className='px-16 py-2 hover:bg-blue-950 font-poppins hover:text-teal-400 ml-2 transition-all duration-300 shadow-lg ease-in-out transform hover:scale-105 mt-12 rounded-3xl uppercase text-2xl font-bold bg-teal-400 border-none'>
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='lg:w-5/12 md:w-5/12 w-full '>
                            <img className='w-full lg:h-[480px] md:h-[480px] rounded-3xl ' src={foodhub} alt="" />
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper> */}
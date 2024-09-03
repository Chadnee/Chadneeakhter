import React, { useEffect, useRef } from 'react';
import Button from '../../../Shared/Button/Button';
import { FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';
import carnival from '../../../assets/carnival.png'
import foodhub from '../../../assets/foodhub.png'
import emars from '../../../assets/emars.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Projects = () => {
    // const iframeContainerRef = useRef(null);
    // const iframeRef = useRef(null);
    // let scrollInterval;

    // const handleMouseEnter = () => {
    //     // Start auto-scrolling
    //     scrollInterval = setInterval(() => {
    //         iframeRef.current.contentWindow.scrollBy(0, 1); // Scroll down 1 pixel
    //     }, 10); // Adjust speed as needed
    // };

    // const handleMouseLeave = () => {
    //     // Stop auto-scrolling
    //     clearInterval(scrollInterval);
    //     iframeRef.current.contentWindow.scrollTo(0, 0); // Reset to the top
    // };

    // useEffect(() => {
    //     // Hide scrollbar but allow scrolling
    //     iframeContainerRef.current.style.scrollBehavior = 'smooth';
    // }, []);

    return (
        <div className="md:mb-64 lg:mb-64 mb-28 pt-28 lg:-mx-20 md:-mx-20">
            <style>
                {
                    `
                 .swiper-button-prev,
.swiper-button-next {
  width: 30px;
  height: 30px;
  background-color: rgba(56, 168, 157, .3); /* Adds 80% opacity to #38a89d */
//   background-color: #38a89d;
  border: none;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

 :root {
   --swiper-navigation-size: 10px;
   color:black;
   --swiper-theme-color: black;
}
                 `
                }
            </style>
            <p className='font-bold lg:text-6xl text-4xl md:text-6xl text-center text-teal-400 pb-20 md:pb-28 lg:pb-28'>Projects</p>

            <Swiper
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
                            <p className='text-5xl font-poppins font-bold  text-teal-400 pb-7 text-center md:text-start lg:text-start'>E-Commerce</p>

                            {/* Full text for medium and large devices */}
                            <p className="hidden md:block lg:block text-white text-justify text-[17px]">
                            It is an e-commerce website built with modern technologies such as React, JavaScript, React Router, Node.js, and Express.js. Tailwind CSS is used for responsive design, though Bootstrap could be an alternative. The frontend features product categories, a review system, shopping cart, and payment integration. The backend, powered by Node.js, Express.js, and MongoDB, manages the database and admin panel. Admin functionalities include product management, customer bookings, and a dashboard. The site is fully responsive, with layouts tailored for both large and small devices. Feel free to explore the site for more details.
                            </p>

                            {/* Shortened text for small devices */}
                            <p className="md:hidden lg:hidden text-white text-justify text-[17px]">
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
                            <p className='text-5xl font-poppins font-bold  text-teal-400 pb-7 text-center md:text-start lg:text-start'>Hospital</p>

                            {/* Full text for medium and large devices */}
                            <p className="hidden md:block lg:block text-white text-justify text-[17px]">
                                I built a hospital website using modern web technologies including React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The website provides essential services like patient management, appointment scheduling, and doctor profiles. It incorporates dynamic data handling via MongoDB, a responsive user interface powered by Tailwind CSS, and efficient backend operations managed by Express.js and Node.js. The website integrates dynamic features like patient data handling and appointment booking, offering a seamless user experience.
                                The site includes patient management, appointment scheduling, and dynamic data
                            </p>

                            {/* Shortened text for small devices */}
                            <p className="md:hidden lg:hidden text-white text-justify text-[17px]">
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
                            <p className='text-5xl font-poppins font-bold  text-teal-400 pb-7 text-center md:text-start lg:text-start'>Resturant</p>

                            {/* Full text for medium and large devices */}
                            <p className="hidden md:block lg:block text-white text-justify text-[17px]">
                                A resturant responsive website using modern web technologies including React, JavaScript, Tailwind CSS for the frontend, and MongoDB, Node.js, and Express.js for the backend. The website provides essential services like patient management, appointment scheduling, and doctor profiles. It incorporates dynamic data handling via MongoDB, a responsive user interface powered by Tailwind CSS, and efficient backend operations managed by Express.js and Node.js. The website integrates dynamic features like patient data handling and appointment booking, offering a seamless user experience.
                                The site includes patient management, appointment scheduling, and dynamic data
                            </p>

                            {/* Shortened text for small devices */}
                            <p className="md:hidden lg:hidden text-white text-justify text-[17px]">
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



            </Swiper>
            {/* <div className='lg:w-10/12 md:w-10/12 w-full mx-auto'>
                <div
                    ref={iframeContainerRef} // Reference to the parent container
                    className="h-[400px] lg:9/12 md:w-9/12 mx-auto border-4 border-black mb-4 lg:mb-16 md:mb-16 overflow-hidden" // Initially hide overflow
                    onMouseEnter={handleMouseEnter} // Auto scroll on hover
                    onMouseLeave={handleMouseLeave} // Reset scroll on mouse leave
                >
                    <iframe
                        ref={iframeRef} // Reference to the iframe
                        src="https://e-mars-7ef3e.web.app/"
                        className="h-full w-full"
                        style={{ border: 'none', }} // Hide scrollbars
                        scrolling='no'
                    />
                </div>
                <div className='text-white text-center lg:px-12 md:px-12'>
                    <p className='text-3xl '>E-commerce website</p>
                    <p className='text-sm pb-12 pt-6 md:text-center lg:text-center text-justify'>
                        A comprehensive e-commerce website allowing users to browse, select, and purchase products securely. Includes features for adding and managing products, processing payments, and providing reviews. Built with React, javascript, Tailwind CSS, Axios, JWT token, Node.js, Express.js, and MongoDB. Admin pannel and user pannen both of all are present
                    </p>
                   <div className='flex flex-col justify-center items-center'>
                   <p style={{ boxShadow: "0 0 5px 5px #38a89d" }} className='flex justify-center items-center gap-3 text-center md:mt-4 lg:mt-4 px-8 bg-black font-serif h-[40px]  pb-1 skill-icon'>
                    
                    <button  className='   '>Go to the live site</button>
                    <span className='w-[20px] h-[20px] pt-1'><FaArrowRight></FaArrowRight></span>
                
                </p>
                   </div>
                </div>
            </div> */}

        </div>
    );
};

export default Projects;


{/* <iframe src="https://giphy.com/embed/UTjjT6id1AqYugpGbh" className='w-[20px] h-[20px]'></iframe> */ }
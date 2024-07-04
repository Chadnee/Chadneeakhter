import React, { useEffect, useRef } from 'react';
import Button from '../../../Shared/Button/Button';

const Projects = () => {
    const iframeContainerRef = useRef(null);
    const iframeRef = useRef(null);
    let scrollInterval;

    const handleMouseEnter = () => {
        // Start auto-scrolling
        scrollInterval = setInterval(() => {
            iframeRef.current.contentWindow.scrollBy(0, 1); // Scroll down 1 pixel
        }, 10); // Adjust speed as needed
    };

    const handleMouseLeave = () => {
        // Stop auto-scrolling
        clearInterval(scrollInterval);
        iframeRef.current.contentWindow.scrollTo(0, 0); // Reset to the top
    };

    useEffect(() => {
        // Hide scrollbar but allow scrolling
        iframeContainerRef.current.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="pb-64">
            <p className='font-bold text-3xl uppercase text-center text-white pb-20'>My Projects</p>
            <div className='w-10/12 mx-auto'>
                <div
                    ref={iframeContainerRef} // Reference to the parent container
                    className="h-[400px] w-9/12 mx-auto border-4 border-black mb-20 overflow-hidden" // Initially hide overflow
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
                <div className='text-white text-center px-12'>
                    <p className='text-3xl'>E-commerce website</p>
                    <p className='text-sm pb-12 pt-6'>
                        A comprehensive e-commerce website allowing users to browse, select, and purchase products securely. Includes features for adding and managing products, processing payments, and providing reviews. Built with React, Tailwind CSS, Node.js, Express.js, and MongoDB.
                    </p>
                    <Button text="Go to the live sites"> </Button>
                </div>
            </div>
        </div>
    );
};

export default Projects;

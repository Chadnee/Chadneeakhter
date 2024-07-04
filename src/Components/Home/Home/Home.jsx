import React, { useRef } from 'react';
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import Navbar from '../../../Shared/Navbar/Navbar';
import ScrollSpy from 'react-ui-scrollspy';
import Services from './Services/Services';
import Projects from '../Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Education from './Education/Education';

const Home = () => {
    const spyContainingRef = useRef(null);

    return (
        <div className='font-lato' ref={spyContainingRef}>
            <ScrollSpy
            activeClass="active-section"
            offsetBottom={100}
            scrollThrottle={80}
            useBoxMethod>
                <div className='' id="introduction"><Introduction></Introduction></div>
                <div id="about"><About></About></div>
                <div id="service"><Services></Services></div>
                <div id="education"><Education></Education></div>
                <div><Skills></Skills></div>
                <div id="projects"><Projects></Projects></div>
                <div id="contact"><Contact></Contact></div>
            </ScrollSpy>

        </div>
    );
};

export default Home;
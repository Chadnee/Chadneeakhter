
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import Services from './Services/Services';
import Projects from '../Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Abilities from '../Abilities/Abilities';
import { useState } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Blogs from './Blogs/Blogs';


const Home = () => {

    const [bgColor, setBgColor] = useState('bg-slate-900')
    
    //function to toogle background color
    const toggleBackgroundColor = () => {
        setBgColor(prevColor => prevColor === 'bg-slate-900'? 'bg-slate-200':'bg-slate-900')
    }
   
    return (
        <div className={`font-titilliumWeb ${bgColor}`} >
            
           {/* <Navbar toggleBackgroundColor={toggleBackgroundColor}></Navbar> */}
                <div id="introduction" className='min-h-screen flex flex-col justify-center items-center'><Introduction></Introduction></div>
                <div id="abilities" className=''><Abilities></Abilities></div>
                <div id="skills" className='min-h-screen flex items-center'><Skills></Skills></div>
                <div id="projects" className='min-h-screen flex items-center'><Projects></Projects></div>
                <div id="about" className='min-h-screen flex items-center'><About></About></div>
                {/* <div id="services"><Services></Services></div> */}
                <div id="education"><Education></Education></div>
                <div id="blogs"><Blogs></Blogs></div>
                <div id="contact"><Contact></Contact></div>
                
           

        </div>
    );
};

export default Home;
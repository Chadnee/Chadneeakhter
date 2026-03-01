
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Abilities from '../Abilities/Abilities';
import Blogs from './Blogs/Blogs';
import Qualifications from './Education/Qualifications';


const Home = () => {

    
    

   
    return (
        <div className="font-titilliumWeb bg-slate-900">
            
           {/* <Navbar toggleBackgroundColor={toggleBackgroundColor}></Navbar> */}
                <div id="introduction" className='min-h-screen flex flex-col justify-center items-center'><Introduction></Introduction></div>
                <div id="abilities" className=''><Abilities></Abilities></div>
                <div id="skills" className='min-h-screen flex items-center'><Skills></Skills></div>
                <div id="projects" className='min-h-screen flex items-center'><Projects></Projects></div>
                <div id="about" className='min-h-screen flex items-center'><About></About></div>
                {/* <div id="services"><Services></Services></div> */}
                <div id="qualifications" className='min-h-screen flex items-center'><Qualifications></Qualifications></div>
                {/* <div id="blogs"><Blogs></Blogs></div> */}
                <div id="contact" className='min-h-screen flex items-center'><Contact></Contact></div>
                
           

        </div>
    );
};

export default Home;
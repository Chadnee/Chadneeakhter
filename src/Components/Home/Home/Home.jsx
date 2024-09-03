
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import Services from './Services/Services';
import Projects from '../Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Abilities from '../Abilities/Abilities';

const Home = () => {

    return (
        <div className='font-titilliumWeb' >
            
           
                <div id="introduction"><Introduction></Introduction></div>
                <div id="abilities"><Abilities></Abilities></div>
                <div id="about"><About></About></div>
                {/* <div id="services"><Services></Services></div> */}
                <div id="education"><Education></Education></div>
                <div id="skills"><Skills></Skills></div>
                <div id="projects"><Projects></Projects></div>
                <div id="contact"><Contact></Contact></div>
           

        </div>
    );
};

export default Home;
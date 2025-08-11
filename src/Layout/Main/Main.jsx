import React from 'react';
import Home from '../../Components/Home/Home/Home';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import img from '../../assets/image-removebg-preview.png'
const Main = () => {
    
        
    
    return (
        <div className='h-full'>
            <div ><Navbar ></Navbar></div>
            <div className='lg:px-40 md:px-40  px-5 w-full overflow-hidden'>
            <div className=''><Home></Home></div>
            <div><Footer></Footer></div>
        </div>
        </div>
    );
};

export default Main;
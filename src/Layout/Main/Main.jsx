import React from 'react';
import Home from '../../Components/Home/Home/Home';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
const Main = () => {
    
        
    
    return (
        <div className='overflow-hidden w-full'>
            <div ><Navbar ></Navbar></div>
            <div className='w-full  lg:px-20 md:px-20 px-3'>
            <div className=''><Home></Home></div>
            <div className='w-full flex items-center'></div>
            <div className='md:-mt-24 lg:md:-mt-24 flex flex-col items-center'><Footer></Footer></div>
        </div>
        </div>
    );
};

export default Main;
import React from 'react';
import Home from '../../Components/Home/Home/Home';
import Navbar from '../../Shared/Navbar/Navbar';

const Main = () => {
    const onPress = (e) =>{
        e.preventDefault();
        const target = window.document.getElementById(e.currentTarget.href.split("#") [1])

        if(target){
            const headerOffset = 20;
            const elementPosition = target.getBoundingClientReact().top;
            const offsetPosition = elementPosition-headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
    }
    return (
        <div className='h-full'>
            <div ><Navbar onPress={onPress}></Navbar></div>
            <div className='mx-40'>
            <Home></Home>
        </div>
        </div>
    );
};

export default Main;
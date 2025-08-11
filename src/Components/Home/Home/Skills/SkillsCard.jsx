import React, { useEffect, useRef } from 'react';

const SkillsCard = ({ item }) => {
    const { id, name, icon, value, number, color } = item;

    
    return (
        <div
            
            style={{ boxShadow: "0 0 1px 1px #f59e0b" }}
            className='bg-slate-800 w-[170px] lg:w-[240px] md:w-[240px] pb-3 lg:pt-5 pt-3 md:pt-5 md:pb-7 lg:pb-7 flex flex-col text-center justify-center transition-transform duration-500'
        >
         
            <div className='flex flex-col justify-center items-center gap-3'>
                <p className={`text-[60px] text-center ${color}`}>{icon}</p>
                <p className='text-white text-[19px] font-poppins tracking-wider'>{name}</p>
                <p className='flex gap-2 items-center px-5'>
                    <progress className="progress bg-white progress-warning h-[10px] w-24 lg:w-36 md:w-36" value={value} max="100"></progress>
                    <span className='text-white font-poppins tracking-wider'>{number}</span>
                </p>
            </div>
        </div>
    );
};

export default SkillsCard;

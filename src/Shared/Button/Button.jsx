import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = ({href, text, target, rel, bgColor = "bg-yellow-700", textColor = "text-white", bgHover="bg-blue-950", hoverText="text-white", rounded="rounded-md", children }) => {

    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }
    
    const linkStyle = isHovered ? { boxShadow: "0 0 4px 4px #b45309" } : {};


    return (
        
            <a
                        style={{boxShadow: "0 0 4px 4px #2e5c59" , letterSpacing: ".5px"}}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                            id="square"
                            target={target}
                            rel={rel}
                            className={`relative px-10 text-[17px] py-1 overflow-hidden ${bgColor} ${textColor} hover:${hoverText} font-semibold ${rounded}  hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 shadow-lg ease-in-out transform hover:scale-105  hover:${bgHover}`}
                            href = {href}
                            
                        >
                            {text}
                            {children}
                            {/* <span className="block px-3 py-1">{text}</span> */}
                        </a>
        
    );
};

export default Button;
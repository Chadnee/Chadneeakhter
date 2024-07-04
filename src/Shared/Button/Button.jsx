import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = ({to, text, bgColor = "bg-teal-400" }) => {

    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }
    
    const linkStyle = isHovered ? { boxShadow: "0 0 4px 4px #38a89d" } : {};


    return (
        
            <Link
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                            id="square"
                            className={`relative px-3 py-1 overflow-hidden ${bgColor} text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-amber-100 hover:bg-blue-950`}
                            to={to}
                            
                        >
                            {text}
                            {/* <span className="block px-3 py-1">{text}</span> */}
                        </Link>
        
    );
};

export default Button;
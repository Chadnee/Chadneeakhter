import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
  
// bgHover="bg-[#222b43]"
const Button = ({href, text, target, rel, bgColor, textColor = "text-white", bgHoverColor="bg-[#161e31]", hoverText="text-white", rounded="rounded-md", children }) => {
  
    // const isVerySmallDevice = useMediaQuery({ query: "(max-width: 380px)" });
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        
            <a
                        style={{ letterSpacing: ".5px"}}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                            id="square"
                            target={target}
                            rel={rel}
                            className={`relative lg:px-10 px-9 md:px-6  text-[17px] lg:text-[17px] md:text-[14px] py-1 overflow-hidden ${bgColor} ${textColor} shadow-[0_0_2px_2px_#222b43]  hover:shadow-none hover:${hoverText} font-semibold ${rounded} transition-all duration-300 ease-in-out transform hover:scale-105  hover:${bgHoverColor}`}
                            href = {href}
                            
                        >
                            {text}
                            {children}
                            {/* <span className="block px-3 py-1">{text}</span> */}
                        </a>
        
    );
};

export default Button;
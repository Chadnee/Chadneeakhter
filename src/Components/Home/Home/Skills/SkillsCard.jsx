import React, { useEffect, useRef } from "react";

const SkillsCard = ({ title, icon, skills }) => {
  console.log(title);
  const skill = skills?.map(item => {console.log(item.color)})

  return (
    <div className="flex flex-col gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-5 shadow-lg hover:shadow-2xl 
                    transition duration-300">
          <p className="text-white flex gap-2 items-center text-xl">
            <span>{icon}</span>
            <span>{title}</span>
         </p>
          <div className="flex gap-5 items-center flex-wrap">
            {
                skills?.map(item => (<p key={item.key} className="flex gap-[6px] items-center ">
                       <span className={`${item.color} text-[28px]`}>{item.icon}</span>
                       <span className="text-white text-[14px] tracking-widest">{item.name}</span>
                </p>))
            }
          </div>
    </div>
  );
};

export default SkillsCard;

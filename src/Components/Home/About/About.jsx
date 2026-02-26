import React from "react";
import profile2 from "../../../assets/profile2.png";
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
const About = () => {
  return (
    <div className="w-full py-10 ">
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center md:gap-8 lg:gap-8 gap-12 md:w-10/12 w-full mx-auto">
        <div className="flex-1 flex flex-col items-center">
          <figure className="w-full">
            <img src={profile2} className="h-full w-full scale-125 object-contain" alt="" />
          </figure>
          {/* <p className="pt-3 font-poppins text-white">Mst. Chadnee</p>
          <p className="pt- text-yellow-600 font-poppins ">
            MERN stack web developer
          </p> */}
   
          {/* <p className="text-white flex gap-2 items-center"><FaLocationArrow></FaLocationArrow> <span>Dhaka, Bangladesh</span></p> */}
          {/* <div className="flex gap-8  mt-3 text-center">
            <a href="https://www.facebook.com/chadnee.akhter.73?mibextid=ZbWKwL">
              <button className="text-4xl text-sky-200 hover:bg-[#212d51] hover:text-white hover:shadow-lg hover:shadow-[#222b43]">
                <FaFacebookF></FaFacebookF>
              </button>
            </a>
            <button className="text-4xl text-sky-200 hover:bg-[#222b43] hover:text-white hover:shadow-lg hover:shadow-[#222b43]">
              <RiGithubLine></RiGithubLine>
            </button>
            <button className="text-4xl text-sky-200 hover:bg-[#222b43] hover:text-white hover:shadow-[#222b43]">
              <FaTwitter></FaTwitter>
            </button>
            <a href="https://www.linkedin.com/in/mst-chadnee-akhter-40b280318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
              <button className="text-4xl text-sky-200 hover:bg-[#222b43] hover:text-white hover:shadow-lg hover:shadow-[#222b43]">
                <FaLinkedin></FaLinkedin>
              </button>
            </a>
          </div> */}
          
        </div>

        <div className="flex-1">
          <p className="text-white text-3xl pb-7 pl-2">Why Hire Me ?</p>
          <div className="flex flex-col item-center px-2 text-white font-titilliumWeb tracking-wider gap-2">
            <p className="flex item-center gap-2">
              <span className="text-emerald-500 font-bold text-xl">✔</span>
              <span className="text-[14px]">Clean, scalable, and maintainable code architecture</span>
            </p>
            <p className="flex item-center gap-2">
              <span className="text-emerald-500 font-bold text-xl">✔</span>
              <span className="text-[14px]">
                Secure authentication and role-based authorization (JWT){" "}
              </span>
            </p>
            <p className="flex item-center gap-2">
              <span className="text-emerald-500 font-bold text-xl">✔</span>
              <span className="text-[14px]">Advanced debugging with reliable error handling</span>
            </p>
            <p className="flex item-center gap-2">
              <span className="text-emerald-500 font-bold text-xl">✔</span>
              <span className="text-[14px]">Secure, well-structured RESTful API development</span>
            </p>
            <p className="flex item-center gap-2">
              <span className="text-emerald-500 font-bold text-xl">✔</span>
              <span className="text-[14px]">Responsive Ui using React, Js, TS, Next Js & Bootstrap Tailwind CSS </span>
            </p>
            <p className="flex item-center gap-2">
              <span className="text-emerald-500 font-bold text-xl">✔</span>
              <span className="text-[14px]">Backend server are also heighly focused</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { IoMdArrowDown } from "react-icons/io";

import Profile from "../assets/profile.svg";



const AboutHeader = () => {
  return (
    <div className="w-full font-inter relative z-20 overflow-x-hidden">
      <div className="relative z-30 bg-white">
     
        <div className="flex flex-col-reverse lg:flex-row pt-16 px-10 sm:px-16 md:px-20 items-start">
          <div className="lg:ml-[10rem] lg:max-w-[50%]">
            <img src={Profile} alt="Profile" />
            <h1 className="font-semibold font-poppins text-black text-[clamp(2.5rem,6vw,4.5rem)] lg:text-5xl mt-6">
              <div className="text-gray-400 mb-5">Hello, I am Jaisal.</div>
              <div>
                A MERN stack developer with a passion for creating
                user-friendly web applications.
              </div>
            </h1>
          </div>
        </div>

       
        <div className="flex justify-between px-5 sm:px-16 md:px-10 mt-4 pb-5">
          <IoMdArrowDown className="w-15 h-15 md:w-20 md:h-20 text-neutral-600 items-start mt-8" />
          <div className="flex items-start gap-2 max-w-[12rem] md:max-w-[18rem] text-right">
            <p className="text-sm sm:text-base text-neutral-700 leading-snug">
              Projects cutting across product and visual design and an
              additional section, playground, that contains shots from my
              exploration into my other design passions.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-300 mx-10 sm:mx-16 md:mx-20 my-4" />

        
      </div>
    </div>
  );
};

export default AboutHeader;

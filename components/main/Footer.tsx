import React from "react";
import { HiMail } from 'react-icons/hi'
import {
  
  RxGithubLogo,
  RxLinkedinLogo,
  
} from "react-icons/rx";



const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    
                   
                    <a
                        href="https://github.com/mr-rubber-duck"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-blue-500 transition-colors duration-200"
                        >
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    
                    
                    <a
                        href="https://www.linkedin.com/in/taha-amine-lassami-178535302/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-blue-500 transition-colors duration-200"
                        >
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact:</div>
                   
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
      {/* Gmail Icon */}
      <HiMail className="text-[20px]" />

      {/* Email Address */}
      <span className="text-[15px] ml-[6px]">mrtahaamineeddine@gmail.com</span>
    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; 2025 by Lassami taha amine eddine , for more information contact me.
            </div>
        </div>
    </div>
  )
}

export default Footer
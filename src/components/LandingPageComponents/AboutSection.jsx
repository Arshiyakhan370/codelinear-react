import React, { useState } from "react";
import image2 from "../../assets/images/Component 37.png";
import image1 from "../../assets/images/Component 37 [1].png";
const AboutSection = ({SetStateFun}) => {
  const [isHovered, setIsHovered] = useState(false);
return (
    <div>
      <div
        className=" mt-[3%] mb-1  cursor-pointer" 
        onMouseEnter={() => {setIsHovered(true);SetStateFun(true)}}
        onMouseLeave={() => {setIsHovered(false);SetStateFun(false)}}
      >
        <img src={isHovered ? image2 : image1} alt="Logo" className="" />
      </div>
      <div className="mt-[-1px]border-t border-gray-600 w-full h-1 "></div>
    </div>
    
  );
};

export default AboutSection;

import React, { useState } from "react";
import image2 from "../../assets/images/Component 37.png";
import image1 from "../../assets/images/Component 37 [1].png";
const AboutSection = ({SetStateFun}) => {
  const [isHovered, setIsHovered] = useState(false);
return (
    <div>
      <div
        className=" mt-[7%] mb-1 flex justify-center w-screen cursor-pointer"
        onMouseEnter={() => {setIsHovered(true);SetStateFun(true)}}
        onMouseLeave={() => {setIsHovered(false);SetStateFun(false)}}
      >
        <img src={isHovered ? image2 : image1} alt="Logo" className="w-[87%]" />
      </div>
    </div>
  );
};

export default AboutSection;

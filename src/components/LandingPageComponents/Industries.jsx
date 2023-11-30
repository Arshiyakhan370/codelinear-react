import React, { useState } from "react";
import image1 from "../../assets/images/Component 38.png";
import image2 from "../../assets/images/Component 38 (1).png";
import image3 from "../../assets/images/Frame 20.png";

const Industries = ({ SetStateFun }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className=" mt-[3%] mb-1  cursor-pointer"
        onMouseEnter={() => {
          setIsHovered(true);
          SetStateFun(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          SetStateFun(false);
        }}
      >
        <img src={isHovered ? image2 : image1} alt="Logo" className="" />
      </div>
      {/* <div className="mt-[-1px]border-t border-gray-600 w-full h-1 "></div> */}
      <div className="mt-[-1%]">
        <img src={image3} alt="Your Alt Text" className="w-[100%] h-auto" />
      </div>
    </div>
  );
};

export default Industries;

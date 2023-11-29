import React, { useState } from "react";
import image2 from "../assets/images/Component 37.png";
import image1 from "../assets/images/Component 37 [1].png";
const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false);
return (
    <div>
      <div
        className=" mt-[7%] mb-1  cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={isHovered ? image2 : image1} alt="Logo" className="w-150" />
      </div>
    </div>
  );
};

export default AboutPage;

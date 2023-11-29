import React, { useState } from 'react'
import image2 from '../assets/images/Component 37.png';
import image1 from '../assets/images/Component 37 [1].png';
const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="container mt-[10%] mb-[10%] ml-[5%] mr-[5%] w-[90vw] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={isHovered ? image2 : image1} alt="Logo" className="" />
      </div>
    </div>
  );
};

export default AboutPage
import React, { useState } from "react";
import image from "../../assets/images/shubham-dhage-05rC4c5-oWw-unsplash 2.png";


const Industries = () => {
  
  return (
    
     <div className="relative px-11 py-11 mt-[12%] mb-[5%]">
        <div className=" max-w-[43%] border ml-12">
          <h1 className="text-[#100E0E] font-almarai text-7xl font-normal uppercase">Industries
we served </h1>
          </div>
          <div className=" w-[40%]  h-auto ml-[52%] mt-[-11%] text-[#100E0E]">
          <p className="mb-1 text-[16.5px]">
            Id donec rutrum mauris venenatis ac.Id metus lorem mus sit magna
            Varius cum proin. Accumsan volutpat natoque purus pellentesque nec
            Ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
          </p>
        </div>
     <div className="flex mt-[-1%]">
        <img src={image} alt="Your Alt Text" className="ml-12 h-auto mt-[15%]" />
      
  
    <div className="ml-[29%] mt-20 text-[#100E0E]">
    <p>ABOUT US</p>
    <div className="mt-[-25%] ml-[100%]"><svg xmlns="http://www.w3.org/2000/svg" width="16.482" height="19.434" viewBox="0 0 20 17" fill="none">
  <rect x="0.138977" y="9.04883" width="1.15946" height="19.2297" transform="rotate(-90 0.138977 9.04883)" fill="#131313"/>
  <rect x="12.3485" y="1.01855" width="1.15946" height="9.75225" transform="rotate(-38.8464 12.3485 1.01855)" fill="#131313"/>
  <rect width="1.15946" height="9.75225" transform="matrix(0.77883 0.627235 0.627235 -0.77883 12.3484 15.9147)" fill="#131313"/>
</svg></div>
    <div className="mt-[-60%] ml-[58%]">
<svg xmlns="http://www.w3.org/2000/svg" width="90" height="89" viewBox="0 0 90 89" fill="none">
  <circle cx="44.8558" cy="44.4689" r="43.6546" transform="rotate(-90 44.8558 44.4689)" stroke="#131313" stroke-width="1"/>
</svg></div>

        
    </div>
</div>
    </div>
  );
};

export default Industries;

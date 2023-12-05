import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { logo } from "../../assets/images/logoSvg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  
    const lines = document.querySelectorAll(".menu-line");
    
    const menu = document.querySelector(".menu-ul");
   
    const tl = gsap.timeline({ paused: true });

    if (isMenuOpen) {
      gsap.to(menu, { x: "100%", opacity: 1, duration: 1, ease: "power3.inOut" });
    
      tl.to(lines[0], { duration: 1, rotate: "90deg", y: 0, x: 0, ease: "power2.out" })
        .to(lines[1], { duration: 1, rotate: "90deg", y: -15, x: 0, ease: "power2.out" }, "-=1")
        .to(lines[2], { duration: 1, opacity: 0, ease: "power2.out" }, "-=1")
        .to(lines[3], { duration: 1, scaleY: 0, transformOrigin: "bottom", ease: "power2.out" }, "-=1")
        .to(
          ".menu-line-vertical",
          { duration: 1, scaleY: 0, transformOrigin: "left", x: 0, ease: "power2.out" },
          "-=1"
        )
        .to(lines[3], { duration: 1, scaleY: 0, transformOrigin: "top", ease: "power2.out" }, "-=1");

       
    } else {
      gsap.to(menu, { x: -100, opacity: 0,  duration: 1, ease: "power3.inOut" });
     
      tl.to(lines, { duration: 1, rotate: "0deg", y: 0, x: 0, ease: "power2.out" })
      .to(lines, { duration: 1, rotate: "0deg", y: 0, x: 0, ease: "power2.out" })
       .to(
          ".menu-line-vertical",
          { duration: 1, scaleY: 0, transformOrigin: "left", x:100, ease: "power2.out" },
          "-=1"
        );
        

     
        
    }

    tl.play();
  

  return (
    <nav className="">
      <div className="container ml-[3.5%]">
        <div className="flex items-center justify-between  border border-red-900">
          <div className="w-[99px] h-[55.706px] flex-shrink-0 z-50 fixed top-0">
            {logo}
          </div>

          <div className=" flex items-center z-50 space-x-4 fixed right-0  text-[#100E0E]">
            <ul className={`menu-ul flex md:mr-56 lg:mr-56 ${isMenuOpen ? 'visible' : 'visible'} space-x-4 mt-10`}>
              <li className="mt-7 text-xs">about Us</li>
              <li className="mt-7 text-xs">services</li>
              <li className="mt-7 text-xs">works</li>
              <li className="mt-7 text-xs">Let's Talk</li>
            </ul>
            <button className="text-black focus:outline-none mt-16 md:mt-16 lg:mt-16 " onClick={toggleMenu}>
              <div className="opacity-1 bg-black w-[44px] h-[1.79px] mb-2 mt-4 menu-line"></div>
              <div className="opacity-1 bg-black w-[44px] h-[1.79px] mb-2 mt-3 menu-line"></div>
            </button>
          </div>
         
          
        </div>
      </div>
      <div className="lg:hidden md:hidden">
    {isMenuOpen && (
        <div className=" w-screen  border fixed z-[999] h-[100vh] bg-black bg-opacity-100  flex items-center justify-center">
          <nav>
            
            <button className="text-black focus:outline-none  ml-44" onClick={toggleMenu}>
              <div className="opacity-1 bg-white w-[44px] h-[1.79px] mb-2 mt-4 "></div>
              <div className="opacity-1 bg-white w-[44px] h-[1.79px] mb-2 mt-3 "></div>
            </button>
            <ul className= "flex-col items-right text-3xl mb-96 space-y-4 ml-28 text-white">
            <li className="mt-7  ml-2">about Us</li>
              <li className="mt-7  ml-4">services</li>
              <li className="mt-7  ml-12">works</li>
              <li className="mt-7 ">Let's Talk</li>
            </ul>
          </nav>
        </div>
      )}
    </div>
    </nav>
    
  );
};

export default Navbar;
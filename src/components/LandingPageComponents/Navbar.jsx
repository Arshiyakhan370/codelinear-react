import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { logo } from "../../assets/images/logoSvg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const lines = document.querySelectorAll(".menu-line");
    const tl = gsap.timeline({ paused: true });

    if (isMenuOpen) {
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

      const liItems = document.querySelectorAll(".nav-menu li");
      tl.from(liItems, { duration: 0.3, x: "100%", opacity: 0, stagger: 0.5, ease: "power2.out" }, "-=1");
    } else {
      tl.to(lines[0], { duration: 1, rotate: "0deg", y: 0, x: 0, ease: "power2.out" })
        .to(lines[1], { duration: 1, rotate: "0deg", y: 0, x: 0, ease: "power2.out" }, "-=1")
        .to(lines[2], { duration: 1, opacity: 1, ease: "power2.out" }, "-=1")
        .to(lines[3], { duration: 1, scaleY: 0, transformOrigin: "top", ease: "power2.out" }, "-=1")
        .to(
          ".menu-line-vertical",
          { duration: 0.3, scaleY: 0, transformOrigin: "left", x:100, ease: "power2.out" },
          "-=1"
        );

     
      const liItems = document.querySelectorAll(".nav-menu li");
      tl.to(liItems, { duration: 0, x:100, opacity: 1 });
    }

    tl.play();
  }, [isMenuOpen]);

  return (
    <nav className="">
      <div className="container ml-[3.5%]">
        <div className="flex items-center justify-between">
          <div className="w-[99px] h-[45.706px] flex-shrink-0 z-50 fixed top-0">
            {logo}
          </div>

          <div className="flex items-center  z-50 space-x-4 fixed right-[4%]  text-[#100E0E]">
            <ul className={`flex nav-menu mr-16 md:mr-24 lg:mr-32 ${isMenuOpen ? 'visible' : 'hidden'} space-x-4 mt-10`}>
              <li className="mt-7 text-xs">about Us</li>
              <li className="mt-7 text-xs">services</li>
              <li className="mt-7 text-xs">works</li>
              <li className="mt-7 text-xs">Let's Talk</li>
            </ul>
            <button className="text-black focus:outline-none mt-20 md:mt-20 lg:mt-20 " onClick={toggleMenu}>
              <div className="opacity-1 bg-black w-[44px] h-[1.79px] mb-2 mt-4 menu-line"></div>
              <div className="opacity-1 bg-black w-[44px] h-[1.79px] mb-2 mt-3 menu-line"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
      tl.to(lines[0], {
        duration: 0.3,
        rotate: "90deg",
        y: -4,
        ease: "power2.out",
      })
        .to(
          lines[1],
          { duration: 0.3, rotate: "-90deg", y: 4, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          lines[2],
          { duration: 0.3, opacity: 0, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          lines[3],
          {
            duration: 0.3,
            scaleY: 1,
            transformOrigin: "bottom",
            ease: "power2.out",
          },
          "-=0.3"
        );
    } else {
      tl.to(lines[0], {
        duration: 0.3,
        rotate: "0deg",
        y: 0,
        ease: "power2.out",
      })
        .to(
          lines[1],
          { duration: 0.3, rotate: "0deg", y: 0, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          lines[2],
          { duration: 0.3, opacity: 1, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          lines[3],
          {
            duration: 0.3,
            scaleY: 0,
            transformOrigin: "bottom",
            ease: "power2.out",
          },
          "-=0.3"
        );
    }

    tl.play();
  }, [isMenuOpen]);

  return (
    <nav className="">
      <div className="container ml-[3.5%]">
        <div className="flex items-center justify-between">
        <div className="w-[99.361px] h-[45.706px] flex-shrink-0 z-50 fixed top-0">
           
            {logo}
          </div>
          
          <div className="flex items-center  z-50 space-x-4 fixed right-[8%] text-[#100E0E]">
            <ul className={`flex ${isMenuOpen ? 'space-x-4' : 'hidden'}  mt-10`}>
              <li className="mt-7 text-xs">about Us</li>
              <li className="mt-7 text-xs">services</li>
              <li className="mt-7 text-xs">works</li>
              <li className="mt-7 text-xs">Let's Talk</li>
            </ul>
            <button className="text-black focus:outline-none mt-10">
              <svg
                className="h-12 w-12 fixed right-[1%] cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleMenu}
              >
                <path
                  className="menu-line"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 6h16"
                ></path>
                <path
                  className="menu-line"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 12h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

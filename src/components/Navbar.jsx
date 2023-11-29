import React , { useEffect, useState }from 'react'
import logoImage from '../assets/images/logo (1).png'
import { gsap } from 'gsap';
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const lines = document.querySelectorAll('.menu-line');
    const tl = gsap.timeline({ paused: true });

    if (isMenuOpen) {
      tl.to(lines[0], { duration: 0.3, rotate: '90deg', y: -6, ease: 'power2.out' })
        .to(lines[1], { duration: 0.3, rotate: '-90deg', y: 6, ease: 'power2.out' }, '-=0.3')
        .to(lines[2], { duration: 0.3, opacity: 0, ease: 'power2.out' }, '-=0.3')
        .to(lines[3], { duration: 0.3, scaleY: 1, transformOrigin: 'bottom', ease: 'power2.out' }, '-=0.3');
    } else {
      tl.to(lines[0], { duration: 0.3, rotate: '0deg', y: 0, ease: 'power2.out' })
        .to(lines[1], { duration: 0.3, rotate: '0deg', y: 0, ease: 'power2.out' }, '-=0.3')
        .to(lines[2], { duration: 0.3, opacity: 1, ease: 'power2.out' }, '-=0.3')
        .to(lines[3], { duration: 0.3, scaleY: 0, transformOrigin: 'bottom', ease: 'power2.out' }, '-=0.3');
    }

    tl.play();
  }, [isMenuOpen]);

  return (
   <nav className="ml-[5%] mr-[3%] ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
          
      <img src={logoImage} alt="Logo" className="w-25 h-12  fixed top-0" />
    
          </div>
          <div>
         
          <button  className="text-black focus:outline-none">
          {/* <svg
  className="h-12 w-12 fixed "
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16"></path>
</svg> */}
<svg
      className="h-12 w-12 fixed cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleMenu}
    >
      <path className="menu-line" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16"></path>
      <path className="menu-line" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16"></path>
      {/* <path className="menu-line" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16"></path> */}
      {/* <path className="menu-line" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h0"></path> */}
    </svg>

          </button>
        </div>
          </div>
        </div>
    
    </nav>
  );
};
export default Navbar;